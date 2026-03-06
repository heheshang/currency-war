#!/usr/bin/env node
/**
 * Episode04 字幕和配音生成脚本
 */

import { episode04Transcript } from "../src/transcripts/episode04-transcript";
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

const OUTPUT_DIR = path.join(
  __dirname,
  "../public/assets/audio/voiceover/episode04",
);
const SUBTITLE_FILE = path.join(__dirname, "../src/subtitles/episode04.ts");

interface VoiceoverEntry {
  id: string;
  scene: number;
  text: string;
  outputFile: string;
}

function generateVoiceoverList(): VoiceoverEntry[] {
  const entries: VoiceoverEntry[] = [];
  let globalIndex = 0;
  episode04Transcript.forEach((segment) => {
    entries.push({
      id: segment.id,
      scene: segment.scene,
      text: segment.text,
      outputFile: `voice_${String(globalIndex).padStart(4, "0")}.mp3`,
    });
    globalIndex++;
  });
  return entries;
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

async function generateWithEdgeTTS(entries: VoiceoverEntry[]): Promise<void> {
  console.log("🎙️ Using Edge TTS\n");
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const outputPath = path.join(OUTPUT_DIR, entry.outputFile);
    if (fs.existsSync(outputPath)) {
      console.log(
        `[${i + 1}/${entries.length}] Skipped (exists): ${entry.outputFile}`,
      );
      continue;
    }
    console.log(`[${i + 1}/${entries.length}] Generating: ${entry.outputFile}`);
    try {
      execSync(
        `edge-tts --voice "zh-CN-YunyangNeural" --rate="-5%" --text "${entry.text.replace(/"/g, '\\"')}" --write-media "${outputPath}"`,
        { stdio: "pipe" },
      );
      console.log(`   ✅ Done`);
    } catch {
      console.log(`   ❌ Failed`);
    }
  }
}

function updateSubtitles(entries: VoiceoverEntry[]): void {
  console.log("\n📝 Analyzing audio durations...\n");
  const fps = 30;
  const sceneDurations: Record<
    number,
    {
      frames: number;
      segments: { start: number; duration: number; text: string }[];
    }
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
        text: entry.text,
      });
      sceneDurations[entry.scene].frames += durationFrames;
      console.log(
        `   ${entry.outputFile}: ${duration.toFixed(2)}s (${durationFrames} frames)`,
      );
    }
  });

  const totalFrames = Object.values(sceneDurations).reduce(
    (sum, s) => sum + s.frames,
    0,
  );
  const totalSeconds = totalFrames / fps;
  console.log(
    `\n   Total: ${totalSeconds.toFixed(1)}s (${totalFrames} frames)`,
  );

  const sceneNames = [
    "开场：威尔逊的忏悔",
    "美联储真相揭示",
    "华尔街七大巨头",
    "摩根家族崛起",
    "洛克菲勒帝国",
    "1907年银行危机",
    "从金本位到法定货币",
    "1912年大选",
    "B计划",
    "法案通过",
    "谁拥有美联储",
    "隐形控制",
    "威尔逊的觉醒",
    "总结",
  ];

  const sceneFrames: number[] = [];
  const sceneOffsets: number[] = [];
  let offset = 0;
  for (let i = 0; i < 14; i++) {
    sceneFrames.push(sceneDurations[i]?.frames || 0);
    sceneOffsets.push(offset);
    offset += sceneDurations[i]?.frames || 0;
  }

  // 生成文件内容
  const lines: string[] = [];
  lines.push("/**");
  lines.push(` * Episode04 字幕 - 基于实际配音时长`);
  lines.push(` * 生成日期：${new Date().toISOString().split("T")[0]}`);
  lines.push(
    ` * 总时长：${totalSeconds.toFixed(1)}秒 = ${totalFrames}帧 (@${fps}fps)`,
  );
  lines.push(" */");
  lines.push('import { SubtitleEntry } from "./index";');
  lines.push("");
  lines.push("export const SCENE_FRAMES = [");
  sceneFrames.forEach((f, i) => {
    lines.push(`  ${f}, // Scene ${i}: ${(f / fps).toFixed(1)}s`);
  });
  lines.push("];");
  lines.push("");
  lines.push(
    "export const SCENE_OFFSETS = SCENE_FRAMES.reduce((acc: number[], frames, i) => {",
  );
  lines.push("  acc.push(i === 0 ? 0 : acc[i - 1] + SCENE_FRAMES[i - 1]);");
  lines.push("  return acc;");
  lines.push("}, []);");
  lines.push("");

  // 添加每个场景的字幕
  const sortedScenes = Object.entries(sceneDurations).sort(
    ([a], [b]) => Number(a) - Number(b),
  );
  for (const [scene, data] of sortedScenes) {
    const sceneNum = Number(scene);
    lines.push(`// Scene ${sceneNum}: ${sceneNames[sceneNum]}`);
    lines.push(
      `export const scene${String(sceneNum + 1).padStart(2, "0")}Subs: SubtitleEntry[] = [`,
    );
    for (const seg of data.segments) {
      const escapedText = seg.text.replace(/"/g, '\\"');
      lines.push(
        `  { startFrame: ${seg.start}, endFrame: ${seg.start + seg.duration}, text: "${escapedText}" },`,
      );
    }
    lines.push("];");
    lines.push("");
  }

  // 生成合并字幕
  lines.push("export const episode04Subtitles: SubtitleEntry[] = [");
  for (let i = 0; i < sortedScenes.length; i++) {
    const sceneNum = Number(sortedScenes[i][0]);
    lines.push(
      `  ...scene${String(sceneNum + 1).padStart(2, "0")}Subs.map((s) => ({`,
    );
    lines.push(`    ...s,`);
    lines.push(`    startFrame: s.startFrame + SCENE_OFFSETS[${i}],`);
    lines.push(`    endFrame: s.endFrame + SCENE_OFFSETS[${i}],`);
    lines.push(`  })),`);
  }
  lines.push("];");
  lines.push("");
  lines.push("export default episode04Subtitles;");
  lines.push("");
  lines.push("// Backward compatibility");
  lines.push("export const OpeningSceneSubtitles = scene01Subs;");
  lines.push("export const JekyllIslandSceneSubtitles = scene02Subs;");
  lines.push("export const WallStreetTycoonsSceneSubtitles = scene03Subs;");
  lines.push("export const MorganRiseSceneSubtitles = scene04Subs;");
  lines.push("export const RockefellerEmpireSceneSubtitles = scene05Subs;");
  lines.push("export const Panic1907SceneSubtitles = scene06Subs;");
  lines.push("export const GoldToFiatSceneSubtitles = scene07Subs;");
  lines.push("export const Election1912SceneSubtitles = scene08Subs;");
  lines.push("export const PlanBSceneSubtitles = scene09Subs;");
  lines.push("export const ActPassesSceneSubtitles = scene10Subs;");
  lines.push("export const WhoOwnsFedSceneSubtitles = scene11Subs;");
  lines.push("export const HiddenControlSceneSubtitles = scene12Subs;");
  lines.push("export const WilsonRealizationSceneSubtitles = scene13Subs;");
  lines.push("export const SummarySceneSubtitles = scene14Subs;");

  fs.writeFileSync(SUBTITLE_FILE, lines.join("\n"), "utf-8");
  console.log(`\n✅ Written: ${SUBTITLE_FILE}`);
}

function mergeAudioFiles(entries: VoiceoverEntry[]): void {
  console.log("\n🎵 Merging audio files...\n");
  const fileList = entries
    .map((e) => path.join(OUTPUT_DIR, e.outputFile))
    .filter((f) => fs.existsSync(f))
    .map((f) => `file '${f}'`)
    .join("\n");
  const listFile = path.join(OUTPUT_DIR, "filelist_actual.txt");
  fs.writeFileSync(listFile, fileList, "utf-8");
  const outputFile = path.join(OUTPUT_DIR, "episode04_actual_merged.mp3");
  try {
    execSync(
      `ffmpeg -y -f concat -safe 0 -i "${listFile}" -c copy "${outputFile}"`,
      { stdio: "pipe" },
    );
    console.log(`✅ Merged: ${outputFile}`);
  } catch {
    console.log(`❌ Merge failed`);
  }
}

async function main() {
  console.log("🎬 Episode04 字幕和配音生成\n");
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  const voiceoverEntries = generateVoiceoverList();
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "voiceover_list.json"),
    JSON.stringify(voiceoverEntries, null, 2),
    "utf-8",
  );
  console.log(`✅ Voiceover list: ${voiceoverEntries.length} segments\n`);
  await generateWithEdgeTTS(voiceoverEntries);
  updateSubtitles(voiceoverEntries);
  mergeAudioFiles(voiceoverEntries);
  console.log("\n✅ Done!");
}

main().catch(console.error);
