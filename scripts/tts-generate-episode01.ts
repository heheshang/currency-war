#!/usr/bin/env node
/**
 * Episode01 配音生成脚本
 *
 * 支持：
 * 1. Edge TTS (免费，无需API Key)
 * 2. Azure TTS (需要 API Key)
 *
 * 使用方法：
 *   bun run scripts/tts-generate-episode01.ts
 *
 * 依赖：
 *   pip install edge-tts  # Edge TTS
 *   或
 *   配置 AZURE_SPEECH_KEY 和 AZURE_SPEECH_REGION
 */

import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

const OUTPUT_DIR = path.join(
  __dirname,
  "../public/assets/audio/voiceover/episode01",
);
const VOICEOVER_LIST = path.join(OUTPUT_DIR, "voiceover_list.json");

// 配音配置
const TTS_CONFIG = {
  // Edge TTS 语音（免费）
  edgeVoice: "zh-CN-YunyangNeural",
  // Azure TTS 语音
  azureVoice: "zh-CN-YunyangNeural",
  rate: "-5%",
};

interface VoiceoverEntry {
  id: string;
  scene: number;
  text: string;
  notes?: string;
  outputFile: string;
}

// 检查 edge-tts 是否安装
function checkEdgeTTS(): boolean {
  try {
    execSync("which edge-tts", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

// 使用 Edge TTS 生成音频
async function generateWithEdgeTTS(entries: VoiceoverEntry[]): Promise<void> {
  console.log("🎙️ Using Edge TTS (free)\n");

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const outputPath = path.join(OUTPUT_DIR, entry.outputFile);

    console.log(`[${i + 1}/${entries.length}] Generating: ${entry.outputFile}`);
    console.log(`   Text: ${entry.text.slice(0, 50)}...`);

    try {
      // 使用 edge-tts 命令行工具
      const cmd = `edge-tts --voice "${TTS_CONFIG.edgeVoice}" --rate="${TTS_CONFIG.rate}" --text "${entry.text.replace(/"/g, '\\"')}" --write-media "${outputPath}"`;
      execSync(cmd, { stdio: "inherit" });
      console.log(`   ✅ Done\n`);
    } catch (error) {
      console.error(`   ❌ Failed: ${error}\n`);
    }
  }
}

// 获取音频文件实际时长
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

// 更新字幕文件中的实际时长
function updateSubtitlesWithActualDurations(entries: VoiceoverEntry[]): void {
  console.log("\n📝 Updating subtitles with actual audio durations...\n");

  const fps = 30;
  const sceneDurations: Record<
    number,
    { frames: number; segments: { start: number; duration: number }[] }
  > = {};

  entries.forEach((entry) => {
    const audioPath = path.join(OUTPUT_DIR, entry.outputFile);
    const duration = getAudioDuration(audioPath);

    if (duration > 0) {
      const durationFrames = Math.round(duration * fps);

      if (!sceneDurations[entry.scene]) {
        sceneDurations[entry.scene] = { frames: 0, segments: [] };
      }

      sceneDurations[entry.scene].segments.push({
        start: sceneDurations[entry.scene].frames,
        duration: durationFrames,
      });

      sceneDurations[entry.scene].frames += durationFrames;

      console.log(
        `   ${entry.outputFile}: ${duration.toFixed(2)}s (${durationFrames} frames)`,
      );
    }
  });

  // 计算总时长
  const totalFrames = Object.values(sceneDurations).reduce(
    (sum, s) => sum + s.frames,
    0,
  );
  const totalSeconds = totalFrames / fps;

  console.log(
    `\n   Total: ${totalSeconds.toFixed(1)}s (${totalFrames} frames)`,
  );

  // 生成场景时长 JSON
  const sceneDurationsJson = Object.entries(sceneDurations)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([scene, data]) => ({
      scene: Number(scene) + 1,
      title: getSceneTitle(Number(scene)),
      duration: data.frames / fps,
      frames: data.frames,
    }));

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "scene_durations_actual.json"),
    JSON.stringify(sceneDurationsJson, null, 2),
    "utf-8",
  );

  console.log(`\n✅ Written: scene_durations_actual.json`);
}

// 场景标题映射
function getSceneTitle(scene: number): string {
  const titles = [
    "货币大厦的危机",
    "黄金白银的终极地位",
    "纸币与美元体系",
    "债务货币的陷阱",
    "金融危机推论",
    "中国经济航母起航",
    "看不见硝烟的战场",
    "历史的警示",
    "战争已经开始",
  ];
  return titles[scene] || `Scene ${scene}`;
}

// 合并所有音频文件
function mergeAudioFiles(entries: VoiceoverEntry[]): void {
  console.log("\n🎵 Merging audio files...\n");

  // 生成文件列表
  const fileList = entries
    .map((e) => path.join(OUTPUT_DIR, e.outputFile))
    .filter((f) => fs.existsSync(f))
    .map((f) => `file '${f}'`)
    .join("\n");

  const listFile = path.join(OUTPUT_DIR, "filelist_actual.txt");
  fs.writeFileSync(listFile, fileList, "utf-8");

  const outputFile = path.join(OUTPUT_DIR, "episode01_actual_merged.mp3");

  try {
    execSync(
      `ffmpeg -y -f concat -safe 0 -i "${listFile}" -c copy "${outputFile}"`,
      { stdio: "inherit" },
    );
    console.log(`\n✅ Merged: ${outputFile}`);
  } catch (error) {
    console.error(`❌ Merge failed: ${error}`);
  }
}

// 主函数
async function main() {
  console.log("🎬 Episode01 配音生成\n");

  // 检查配音列表
  if (!fs.existsSync(VOICEOVER_LIST)) {
    console.error(
      "❌ voiceover_list.json not found. Run generate-episode01-audio.ts first.",
    );
    process.exit(1);
  }

  const entries: VoiceoverEntry[] = JSON.parse(
    fs.readFileSync(VOICEOVER_LIST, "utf-8"),
  );

  console.log(`Found ${entries.length} segments to generate.\n`);

  // 确保输出目录存在
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // 检查并使用 Edge TTS
  if (checkEdgeTTS()) {
    await generateWithEdgeTTS(entries);
  } else {
    console.log("⚠️ edge-tts not found. Installing...\n");
    console.log("Run: pip install edge-tts");
    console.log("Then run this script again.\n");
    process.exit(1);
  }

  // 更新字幕中的实际时长
  updateSubtitlesWithActualDurations(entries);

  // 合并音频文件
  mergeAudioFiles(entries);

  console.log("\n✅ Done! Audio files generated in:");
  console.log(`   ${OUTPUT_DIR}`);
}

main().catch(console.error);
