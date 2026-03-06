#!/usr/bin/env node
/**
 * Trailer 配音生成脚本
 *
 * 使用 Edge TTS 生成中文配音
 *
 * 使用方法：
 *   bun run scripts/tts-generate-trailer.ts
 *
 * 依赖：
 *   pip install edge-tts
 */

import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

const OUTPUT_DIR = path.join(
  __dirname,
  "../public/assets/audio/voiceover/trailer",
);
const VOICEOVER_LIST = path.join(OUTPUT_DIR, "voiceover_list.json");

// 配音配置 - 与 EP01 一致
const TTS_CONFIG = {
  edgeVoice: "zh-CN-YunyangNeural", // 云扬，与 EP01 一致
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
  console.log("🎙️ Using Edge TTS (free)");
  console.log(`   Voice: ${TTS_CONFIG.edgeVoice}`);
  console.log(`   Rate: ${TTS_CONFIG.rate}\n`);

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const outputPath = path.join(OUTPUT_DIR, entry.outputFile);

    console.log(`[${i + 1}/${entries.length}] Generating: ${entry.outputFile}`);
    console.log(`   Text: ${entry.text}`);
    if (entry.notes) {
      console.log(`   Notes: ${entry.notes}`);
    }

    try {
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

// 更新字幕文件
function updateSubtitles(entries: VoiceoverEntry[]): void {
  console.log("\n📝 Calculating actual durations...\n");

  const fps = 30;
  const sceneDurations: Record<number, number[]> = {};

  entries.forEach((entry) => {
    const audioPath = path.join(OUTPUT_DIR, entry.outputFile);
    const duration = getAudioDuration(audioPath);

    if (duration > 0) {
      if (!sceneDurations[entry.scene]) {
        sceneDurations[entry.scene] = [];
      }
      sceneDurations[entry.scene].push(duration);
      console.log(`   ${entry.outputFile}: ${duration.toFixed(2)}s`);
    }
  });

  // 计算每个场景的总时长
  console.log("\n📊 Scene durations:\n");
  let totalSeconds = 0;
  Object.entries(sceneDurations)
    .sort(([a], [b]) => Number(a) - Number(b))
    .forEach(([scene, durations]) => {
      const sceneTotal = durations.reduce((sum, d) => sum + d, 0);
      totalSeconds += sceneTotal;
      console.log(`   Scene ${Number(scene) + 1}: ${sceneTotal.toFixed(1)}s (${Math.round(sceneTotal * fps)} frames)`);
    });

  console.log(`\n   Total: ${totalSeconds.toFixed(1)}s (${Math.round(totalSeconds * fps)} frames)`);
}

// 合并所有音频文件
function mergeAudioFiles(entries: VoiceoverEntry[]): void {
  console.log("\n🎵 Merging audio files...\n");

  const validFiles = entries
    .map((e) => path.join(OUTPUT_DIR, e.outputFile))
    .filter((f) => fs.existsSync(f));

  if (validFiles.length === 0) {
    console.error("❌ No audio files found to merge.");
    return;
  }

  // 生成文件列表
  const fileList = validFiles.map((f) => `file '${path.basename(f)}'`).join("\n");
  const listFile = path.join(OUTPUT_DIR, "filelist.txt");
  fs.writeFileSync(listFile, fileList, "utf-8");

  const outputFile = path.join(OUTPUT_DIR, "trailer_merged.m4a");

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
  console.log("🎬 Trailer 配音生成\n");
  console.log("=" .repeat(50));
  console.log("  货币战争预告片 - 中文配音");
  console.log("=" .repeat(50));
  console.log();

  // 检查配音列表
  if (!fs.existsSync(VOICEOVER_LIST)) {
    console.error("❌ voiceover_list.json not found.");
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
    console.log("⚠️ edge-tts not found.\n");
    console.log("Install with: pip install edge-tts");
    console.log("Then run this script again.\n");
    process.exit(1);
  }

  // 更新字幕时长
  updateSubtitles(entries);

  // 合并音频文件
  mergeAudioFiles(entries);

  console.log("\n✅ Done! Audio files generated in:");
  console.log(`   ${OUTPUT_DIR}`);
}

main().catch(console.error);