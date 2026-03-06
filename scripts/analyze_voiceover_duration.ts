import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

const EPISODES = ["episode07", "episode10", "episode11"];
const VOICEOVER_DIR = "public/assets/audio/voiceover";
const FPS = 30;

interface SceneDurations {
  [episode: string]: {
    scenes: number[];
    totalDuration: number;
    totalFrames: number;
    fileCount: number;
  };
}

function getAudioDuration(filePath: string): number {
  try {
    const result = execSync(
      `ffprobe -i "${filePath}" -show_entries format=duration -v quiet -of csv="p=0"`,
      { encoding: "utf-8" },
    );
    return parseFloat(result.trim());
  } catch {
    return 0;
  }
}

const result: SceneDurations = {};

for (const episode of EPISODES) {
  const episodeDir = path.join(VOICEOVER_DIR, episode);

  if (!fs.existsSync(episodeDir)) {
    console.log(`⚠️  ${episode} 目录不存在`);
    continue;
  }

  const files = fs
    .readdirSync(episodeDir)
    .filter((f) => f.match(/voice_\d{4}\.(mp3|m4a)$/))
    .sort();

  console.log(`\n=== ${episode} ===`);
  console.log(`配音文件数量: ${files.length}`);

  const durations: number[] = [];
  let totalDuration = 0;

  for (const file of files) {
    const filePath = path.join(episodeDir, file);
    const duration = getAudioDuration(filePath);
    durations.push(duration);
    totalDuration += duration;
  }

  // 根据字幕条数计算每个场景的配音数量
  // 这需要读取字幕文件来确定场景边界
  const subtitlePath = `src/subtitles/${episode}.ts`;

  if (fs.existsSync(subtitlePath)) {
    const subtitleContent = fs.readFileSync(subtitlePath, "utf-8");

    // 查找所有 export const sceneXXSubs 或 scene名称Subs
    const sceneExports = subtitleContent.match(
      /export const (\w+Subs): SubtitleEntry\[\]/g,
    );

    if (sceneExports) {
      console.log(`场景数量: ${sceneExports.length}`);

      // 计算每个场景的字幕条数
      for (const sceneExport of sceneExports) {
        const sceneName = sceneExport.match(/const (\w+Subs)/)?.[1];
        if (sceneName) {
          // 获取该场景的字幕条数
          const sceneRegex = new RegExp(
            `export const ${sceneName}[^\\]]+\\]`,
            "s",
          );
          const sceneMatch = subtitleContent.match(sceneRegex);
          if (sceneMatch) {
            const subCount = (sceneMatch[0].match(/startFrame/g) || []).length;
            console.log(`  ${sceneName}: ${subCount} 条字幕`);
          }
        }
      }
    }
  }

  result[episode] = {
    scenes: durations,
    totalDuration,
    totalFrames: Math.round(totalDuration * FPS),
    fileCount: files.length,
  };

  console.log(
    `总时长: ${totalDuration.toFixed(1)}秒 = ${Math.round(totalDuration * FPS)}帧`,
  );
}

console.log("\n\n=== 汇总 ===");
console.log(JSON.stringify(result, null, 2));
