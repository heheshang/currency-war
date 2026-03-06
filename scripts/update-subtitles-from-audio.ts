#!/usr/bin/env node
/**
 * 根据实际音频时长更新字幕文件
 */

import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

const OUTPUT_DIR = path.join(
  __dirname,
  "../public/assets/audio/voiceover/episode01",
);
const VOICEOVER_LIST = path.join(OUTPUT_DIR, "voiceover_list.json");
const SUBTITLE_FILE = path.join(__dirname, "../src/subtitles/episode01.ts");
const ROOT_FILE = path.join(__dirname, "../src/Root.tsx");

interface VoiceoverEntry {
  id: string;
  scene: number;
  text: string;
  notes?: string;
  outputFile: string;
}

interface SceneSegment {
  startFrame: number;
  endFrame: number;
  text: string;
}

// 获取音频文件实际时长（秒）
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

// 主函数
function main() {
  console.log("📝 Updating subtitles with actual audio durations\n");

  const entries: VoiceoverEntry[] = JSON.parse(
    fs.readFileSync(VOICEOVER_LIST, "utf-8"),
  );

  const fps = 30;
  const sceneSubtitles: Record<number, SceneSegment[]> = {};
  const sceneFrames: number[] = [];
  let totalFrames = 0;

  // 按场景分组，计算实际帧数
  entries.forEach((entry) => {
    const audioPath = path.join(OUTPUT_DIR, entry.outputFile);
    const duration = getAudioDuration(audioPath);
    const durationFrames = Math.round(duration * fps);

    if (!sceneSubtitles[entry.scene]) {
      sceneSubtitles[entry.scene] = [];
      sceneFrames[entry.scene] = 0;
    }

    const startFrame = sceneFrames[entry.scene] || 0;
    const endFrame = startFrame + durationFrames;

    sceneSubtitles[entry.scene].push({
      startFrame,
      endFrame,
      text: entry.text,
    });

    sceneFrames[entry.scene] = endFrame;
    totalFrames += durationFrames;

    console.log(
      `   [Scene ${entry.scene}] ${entry.outputFile}: ${duration.toFixed(2)}s`,
    );
  });

  const totalSeconds = totalFrames / fps;
  console.log(
    `\n   Total: ${totalSeconds.toFixed(1)}s (${totalFrames} frames)\n`,
  );

  // 计算场景偏移
  const sceneOffsets: number[] = [];
  let offset = 0;
  for (let i = 0; i < sceneFrames.length; i++) {
    sceneOffsets.push(offset);
    offset += sceneFrames[i];
  }

  // 生成字幕文件
  const fileContent = `/**
 * Episode01 字幕 - 基于实际配音时长
 * 
 * 生成日期：${new Date().toISOString().split("T")[0]}
 * 总时长：${totalSeconds.toFixed(1)}秒 = ${totalFrames}帧 (@${fps}fps)
 * 
 * 场景时长（基于配音实际时长）:
${Object.entries(sceneSubtitles)
  .sort(([a], [b]) => Number(a) - Number(b))
  .map(
    ([scene, segs]) =>
      ` * - Scene ${Number(scene) + 1}: ${(sceneFrames[Number(scene)] / fps).toFixed(1)}秒 = ${sceneFrames[Number(scene)]}帧`,
  )
  .join("\n")}
 */
import { SubtitleEntry } from "./index";

// 场景帧数配置（基于配音实际时长，${fps}fps）
export const SCENE_FRAMES = [
${sceneFrames
  .map((f, i) => `  ${f}, // Scene ${i}: ${(f / fps).toFixed(1)}s`)
  .join("\n")}
];

// 累计偏移量
export const SCENE_OFFSETS = SCENE_FRAMES.reduce((acc: number[], frames, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + SCENE_FRAMES[i - 1]);
  return acc;
}, []);

${Object.entries(sceneSubtitles)
  .sort(([a], [b]) => Number(a) - Number(b))
  .map(([scene, segments]) => {
    const sceneNum = Number(scene);
    const sceneName = String(sceneNum + 1).padStart(2, "0");
    return `// Scene ${sceneNum}
export const scene${sceneName}Subs: SubtitleEntry[] = ${JSON.stringify(segments, null, 2)};`;
  })
  .join("\n\n")}

// 合并所有字幕
export const episode01Subtitles: SubtitleEntry[] = [
${Object.entries(sceneSubtitles)
  .sort(([a], [b]) => Number(a) - Number(b))
  .map(
    (
      [scene],
      i,
    ) => `  ...scene${String(Number(scene) + 1).padStart(2, "0")}Subs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[${i}],
    endFrame: s.endFrame + SCENE_OFFSETS[${i}],
  }))`,
  )
  .join(",\n")}
];

export default episode01Subtitles;

// 向后兼容别名
export const ancientMarketSubs = scene01Subs;
export const chinaRiseSubs = scene02Subs;
export const invisibleBattlefieldSubs = scene03Subs;
export const historicalLessonsSubs = scene04Subs;
export const moneyEvolutionSubs = scene05Subs;
export const historicalTimelineSubs = scene06Subs;
export const debtSpiralSubs = scene07Subs;
export const inflationSubs = scene08Subs;
export const endingSubs = scene09Subs;
`;

  fs.writeFileSync(SUBTITLE_FILE, fileContent, "utf-8");
  console.log(`✅ Updated: ${SUBTITLE_FILE}`);

  // 更新 Root.tsx 中的时长
  let rootContent = fs.readFileSync(ROOT_FILE, "utf-8");
  rootContent = rootContent.replace(
    /durationInFrames=\{\d+\} \/\/ [\d.]+秒 @ 30fps/,
    `durationInFrames={${totalFrames}} // ${totalSeconds.toFixed(1)}秒 @ 30fps (基于实际配音时长)`,
  );
  fs.writeFileSync(ROOT_FILE, rootContent, "utf-8");
  console.log(`✅ Updated: ${ROOT_FILE}`);

  console.log(`\n✅ Done! Total duration: ${totalSeconds.toFixed(1)}s`);
}

main();
