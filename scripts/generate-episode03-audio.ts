#!/usr/bin/env node
/**
 * Episode03 字幕和配音生成脚本
 *
 * 功能：
 * 1. 从逐字稿生成配音列表文件（用于TTS）
 * 2. 使用Edge TTS生成配音音频
 * 3. 根据实际音频时长生成字幕帧数
 * 4. 更新字幕文件
 *
 * 使用方法：
 *   bun run scripts/generate-episode03-audio.ts
 */

import {
  episode03Transcript,
} from "../src/transcripts/episode03-transcript";
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

// 输出路径
const OUTPUT_DIR = path.join(
  __dirname,
  "../public/assets/audio/voiceover/episode03",
);
const SUBTITLE_FILE = path.join(__dirname, "../src/subtitles/episode03.ts");

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

  episode03Transcript.forEach((segment) => {
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

// 使用 Edge TTS 生成音频
async function generateWithEdgeTTS(entries: VoiceoverEntry[]): Promise<void> {
  console.log("🎙️ Using Edge TTS (free)\n");
  const voice = "zh-CN-YunyangNeural";
  const rate = "-5%";

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const outputPath = path.join(OUTPUT_DIR, entry.outputFile);

    // 检查文件是否已存在
    if (fs.existsSync(outputPath)) {
      console.log(
        `[${i + 1}/${entries.length}] Skipped (exists): ${entry.outputFile}`,
      );
      continue;
    }

    console.log(`[${i + 1}/${entries.length}] Generating: ${entry.outputFile}`);
    console.log(`   Text: ${entry.text.slice(0, 40)}...`);

    try {
      const cmd = `edge-tts --voice "${voice}" --rate="${rate}" --text "${entry.text.replace(/"/g, '\\"')}" --write-media "${outputPath}"`;
      execSync(cmd, { stdio: "pipe" });
      console.log(`   ✅ Done\n`);
    } catch (error) {
      console.error(`   ❌ Failed: ${error}\n`);
    }
  }
}

// 场景标题映射
function getSceneTitle(scene: number): string {
  const titles = [
    "林肯的警告",
    "殖民地货币与美国独立战争",
    "美国第一银行的诞生",
    "杰克逊总统的银行战争",
    "南北战争的金融背景",
    "绿币——林肯的货币新政",
    "俄国同盟",
    "林肯遇刺的真相",
    "《国家银行法》的致命妥协",
  ];
  return titles[scene] || `Scene ${scene}`;
}

// 更新字幕文件中的实际时长
function updateSubtitlesWithActualDurations(entries: VoiceoverEntry[]): void {
  console.log("\n📝 Analyzing audio durations...\n");

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

  // 生成字幕文件
  generateSubtitleFile(sceneDurations, totalFrames, totalSeconds);
}

// 生成字幕文件
function generateSubtitleFile(
  sceneDurations: Record<
    number,
    { frames: number; segments: { start: number; duration: number }[] }
  >,
  totalFrames: number,
  totalSeconds: number,
): void {
  const fps = 30;

  // 重新组织字幕数据
  const sceneSubtitles: Record<
    number,
    { startFrame: number; endFrame: number; text: string }[]
  > = {};

  episode03Transcript.forEach((segment) => {
    if (!sceneSubtitles[segment.scene]) {
      sceneSubtitles[segment.scene] = [];
    }

    const segments = sceneDurations[segment.scene]?.segments || [];
    const index = sceneSubtitles[segment.scene].length;
    const seg = segments[index] || { start: 0, duration: 0 };

    sceneSubtitles[segment.scene].push({
      startFrame: seg.start,
      endFrame: seg.start + seg.duration,
      text: segment.text,
    });
  });

  // 计算场景帧数和偏移
  const sceneFrames: number[] = [];
  const sceneOffsets: number[] = [];
  let offset = 0;

  for (let i = 0; i < 9; i++) {
    sceneFrames.push(sceneDurations[i]?.frames || 0);
    sceneOffsets.push(offset);
    offset += sceneDurations[i]?.frames || 0;
  }

  const fileContent = `/**
 * Episode03 字幕 - 基于实际配音时长
 * 
 * 生成日期：${new Date().toISOString().split("T")[0]}
 * 总时长：${totalSeconds.toFixed(1)}秒 = ${totalFrames}帧 (@${fps}fps)
 * 
 * 场景时长（基于配音实际时长）:
${Object.entries(sceneDurations)
  .sort(([a], [b]) => Number(a) - Number(b))
  .map(
    ([scene, data]) =>
      ` * - Scene ${Number(scene)}: ${(data.frames / fps).toFixed(1)}秒 = ${data.frames}帧`,
  )
  .join("\n")}
 */
import { SubtitleEntry } from "./index";

// 场景帧数配置（基于配音实际时长，${fps}fps）
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
  .map(([scene, segments]) => {
    const sceneNum = Number(scene);
    const sceneName = String(sceneNum + 1).padStart(2, "0");
    return `// Scene ${sceneNum}: ${getSceneTitle(sceneNum)}
export const scene${sceneName}Subs: SubtitleEntry[] = ${JSON.stringify(segments, null, 2)};`;
  })
  .join("\n\n")}

// 合并所有字幕
export const episode03Subtitles: SubtitleEntry[] = [
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

export default episode03Subtitles;

// 向后兼容别名
export const openingLincolnSubs = scene01Subs;
export const colonialCurrencySubs = scene02Subs;
export const firstBankSubs = scene03Subs;
export const jacksonBankWarSubs = scene04Subs;
export const civilWarPreludeSubs = scene05Subs;
export const greenbackSubs = scene06Subs;
export const russianAllianceSubs = scene07Subs;
export const assassinationSubs = scene08Subs;
export const nationalBankActSubs = scene09Subs;
`;

  fs.writeFileSync(SUBTITLE_FILE, fileContent, "utf-8");
  console.log(`✅ Written subtitle file: ${SUBTITLE_FILE}`);
}

// 合并所有音频文件
function mergeAudioFiles(entries: VoiceoverEntry[]): void {
  console.log("\n🎵 Merging audio files...\n");

  const fileList = entries
    .map((e) => path.join(OUTPUT_DIR, e.outputFile))
    .filter((f) => fs.existsSync(f))
    .map((f) => `file '${f}'`)
    .join("\n");

  const listFile = path.join(OUTPUT_DIR, "filelist_actual.txt");
  fs.writeFileSync(listFile, fileList, "utf-8");

  const outputFile = path.join(OUTPUT_DIR, "episode03_actual_merged.mp3");

  try {
    execSync(
      `ffmpeg -y -f concat -safe 0 -i "${listFile}" -c copy "${outputFile}"`,
      { stdio: "pipe" },
    );
    console.log(`\n✅ Merged: ${outputFile}`);
  } catch (error) {
    console.error(`❌ Merge failed: ${error}`);
  }
}

// 主函数
async function main() {
  console.log("🎬 Episode03 字幕和配音生成\n");

  // 确保输出目录存在
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // 1. 生成配音列表
  console.log("📝 Generating voiceover list...");
  const voiceoverEntries = generateVoiceoverList();
  writeVoiceoverList(voiceoverEntries);
  console.log(`   Total segments: ${voiceoverEntries.length}\n`);

  // 2. 生成配音音频
  console.log("🎙️ Generating voiceover audio...");
  await generateWithEdgeTTS(voiceoverEntries);

  // 3. 更新字幕中的实际时长
  updateSubtitlesWithActualDurations(voiceoverEntries);

  // 4. 合并音频文件
  mergeAudioFiles(voiceoverEntries);

  console.log("\n✅ Done!");
}

main().catch(console.error);
