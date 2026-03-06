#!/usr/bin/env node
/**
 * Episode01 字幕和配音生成脚本
 *
 * 功能：
 * 1. 从逐字稿生成字幕文件
 * 2. 生成配音列表文件（用于TTS）
 * 3. 使用Azure TTS生成配音音频
 * 4. 根据实际音频时长更新字幕帧数
 *
 * 使用方法：
 *   bun run scripts/generate-episode01-audio.ts
 */

import {
  episode01Transcript,
  transcriptByScene,
} from "../src/transcripts/episode01-transcript";
import type { SubtitleEntry } from "../src/subtitles/index";
import * as fs from "fs";
import * as path from "path";

// TTS配置
const AZURE_TTS_CONFIG = {
  region: process.env.AZURE_SPEECH_REGION || "eastasia",
  key: process.env.AZURE_SPEECH_KEY || "",
  voice: "zh-CN-YunyangNeural", // 云扬 - 新闻播报风格
  rate: "-5%", // 略慢，更清晰
  style: "documentary", // 纪录片风格
};

// 输出路径
const OUTPUT_DIR = path.join(
  __dirname,
  "../public/assets/audio/voiceover/episode01",
);
const SUBTITLE_FILE = path.join(__dirname, "../src/subtitles/episode01.ts");

// 配音条目接口
interface VoiceoverEntry {
  id: string;
  scene: number;
  text: string;
  notes?: string;
  outputFile: string;
}

// 生成配音列表
function generateVoiceoverList(): VoiceoverEntry[] {
  const entries: VoiceoverEntry[] = [];
  let globalIndex = 0;

  episode01Transcript.forEach((segment) => {
    entries.push({
      id: segment.id,
      scene: segment.scene,
      text: segment.text,
      notes: segment.notes,
      outputFile: `voice_${String(globalIndex).padStart(4, "0")}.mp3`,
    });
    globalIndex++;
  });

  return entries;
}

// 生成配音列表JSON文件
function writeVoiceoverList(entries: VoiceoverEntry[]): void {
  const listPath = path.join(OUTPUT_DIR, "voiceover_list.json");
  fs.writeFileSync(listPath, JSON.stringify(entries, null, 2), "utf-8");
  console.log(`✅ Written voiceover list: ${listPath}`);
}

// 生成用于TTS批量处理的文件列表
function writeTTSScript(entries: VoiceoverEntry[]): void {
  const lines: string[] = [];

  entries.forEach((entry) => {
    // 格式: 输出文件|文本|配音提示
    const note = entry.notes ? ` [${entry.notes}]` : "";
    lines.push(`${entry.outputFile}|${entry.text}${note}`);
  });

  const scriptPath = path.join(OUTPUT_DIR, "tts_script.txt");
  fs.writeFileSync(scriptPath, lines.join("\n"), "utf-8");
  console.log(`✅ Written TTS script: ${scriptPath}`);
}

// 估算字幕时长（基于字符数，约3字符/秒）
function estimateDurationMs(text: string): number {
  const charsPerSecond = 3.5; // 纪录片语速
  const baseDuration = (text.length / charsPerSecond) * 1000;
  const minDuration = 3000; // 最少3秒
  const maxDuration = 15000; // 最多15秒
  return Math.min(maxDuration, Math.max(minDuration, baseDuration));
}

// 生成初始字幕文件（使用估算时长）
function generateInitialSubtitles(): void {
  const fps = 30;
  const sceneSubtitles: Record<number, SubtitleEntry[]> = {};
  const sceneFrames: number[] = [];
  const sceneOffsets: number[] = [];

  let globalFrame = 0;

  // 按场景分组生成字幕
  Object.entries(transcriptByScene).forEach(([sceneNum, segments]) => {
    const scene = Number(sceneNum);
    let sceneFrame = 0;
    sceneSubtitles[scene] = [];

    segments.forEach((segment) => {
      const durationMs = estimateDurationMs(segment.text);
      const durationFrames = Math.round((durationMs / 1000) * fps);

      sceneSubtitles[scene].push({
        startFrame: sceneFrame,
        endFrame: sceneFrame + durationFrames,
        text: segment.text,
      });

      sceneFrame += durationFrames;
    });

    sceneFrames.push(sceneFrame);
    sceneOffsets.push(globalFrame);
    globalFrame += sceneFrame;
  });

  // 生成TypeScript字幕文件
  const totalFrames = sceneFrames.reduce((a, b) => a + b, 0);
  const totalSeconds = totalFrames / fps;

  const fileContent = `/**
 * Episode01 字幕 - 基于逐字稿自动生成
 * 
 * 生成日期：${new Date().toISOString().split("T")[0]}
 * 总时长：${totalSeconds.toFixed(1)}秒 = ${totalFrames}帧 (@${fps}fps)
 * 
 * 注意：时长为估算值，实际应以配音音频为准
 */
import { SubtitleEntry } from "./index";

// 场景帧数配置
export const SCENE_FRAMES = [
${sceneFrames.map((f, i) => `  ${f}, // Scene ${i}: ${(f / fps).toFixed(1)}s`).join("\n")}
];

// 累计偏移量
export const SCENE_OFFSETS = SCENE_FRAMES.reduce((acc: number[], frames, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + SCENE_FRAMES[i - 1]);
  return acc;
}, []);

${Object.entries(sceneSubtitles)
  .sort(([a], [b]) => Number(a) - Number(b))
  .map(([scene, subs]) => {
    return `// Scene ${scene}
export const scene${String(Number(scene) + 1).padStart(2, "0")}Subs: SubtitleEntry[] = ${JSON.stringify(subs, null, 2)};`;
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
  console.log(`✅ Written subtitle file: ${SUBTITLE_FILE}`);
  console.log(
    `   Total duration: ${totalSeconds.toFixed(1)}s (${(totalSeconds / 60).toFixed(1)} min)`,
  );
}

// 主函数
async function main() {
  console.log("🎬 Episode01 字幕和配音生成\n");

  // 确保输出目录存在
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // 1. 生成配音列表
  console.log("📝 Generating voiceover list...");
  const voiceoverEntries = generateVoiceoverList();
  writeVoiceoverList(voiceoverEntries);
  writeTTSScript(voiceoverEntries);
  console.log(`   Total segments: ${voiceoverEntries.length}\n`);

  // 2. 生成初始字幕（使用估算时长）
  console.log("📝 Generating initial subtitles...");
  generateInitialSubtitles();
  console.log("");

  // 3. 打印配音提示
  console.log("🎙️ Voice Generation Instructions:");
  console.log("=".repeat(50));
  console.log("The following files have been generated:");
  console.log(`  - ${path.join(OUTPUT_DIR, "voiceover_list.json")}`);
  console.log(`  - ${path.join(OUTPUT_DIR, "tts_script.txt")}`);
  console.log("");
  console.log("To generate audio with Azure TTS, run:");
  console.log("  bun run scripts/tts-generate.ts");
  console.log("");
  console.log("Or use manual TTS with these settings:");
  console.log(`  Voice: ${AZURE_TTS_CONFIG.voice}`);
  console.log(`  Rate: ${AZURE_TTS_CONFIG.rate}`);
  console.log(`  Style: ${AZURE_TTS_CONFIG.style}`);
  console.log("=".repeat(50));
}

main().catch(console.error);
