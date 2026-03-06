import * as fs from "fs";
import { execSync } from "child_process";

const FPS = 30;

// 准确的字幕条数（从实际文件读取）
const SUBTITLE_COUNTS: {
  [episode: string]: { scene: string; count: number }[];
} = {
  episode07: [
    { scene: "openingSubs", count: 9 },
    { scene: "brettonWoodsSubs", count: 9 },
    { scene: "houseColonelSubs", count: 9 },
    { scene: "cfrEliteSubs", count: 9 },
    { scene: "bisSubs", count: 9 },
    { scene: "bilderbergSubs", count: 9 },
    { scene: "trilateralSubs", count: 9 },
  ],
  episode10: [
    { scene: "OpeningScene", count: 8 },
    { scene: "FractionalReserveScene", count: 12 },
    { scene: "DebtDollarScene", count: 10 },
    { scene: "DerivativesScene", count: 10 },
    { scene: "FannieFreddieScene", count: 10 },
    { scene: "GoldPrisonScene", count: 15 },
    { scene: "GoldCounterScene", count: 8 },
    { scene: "RothschildScene", count: 8 },
    { scene: "SummaryScene", count: 8 },
  ],
  episode11: [
    { scene: "OpeningSceneSubtitles", count: 8 },
    { scene: "MonetaryStandardSceneSubtitles", count: 10 },
    { scene: "GoldSilverSceneSubtitles", count: 8 },
    { scene: "DebtObesitySceneSubtitles", count: 7 },
    { scene: "FinancialAirForceSceneSubtitles", count: 7 },
    { scene: "StrategySceneSubtitles", count: 20 },
    { scene: "WorldReserveSceneSubtitles", count: 7 },
    { scene: "FinancialRiskSceneSubtitles", count: 14 },
    { scene: "EndingSceneSubtitles", count: 4 },
  ],
};


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

function getVoiceFiles(episode: string): string[] {
  const dir = `public/assets/audio/voiceover/${episode}`;
  return fs
    .readdirSync(dir)
    .filter((f) => f.match(/voice_\d{4}\.(mp3|m4a)$/))
    .sort();
}

// 主逻辑
const results: {
  [episode: string]: {
    frames: number[];
    durations: number[];
    offsets: number[];
  };
} = {};

for (const [episode, scenes] of Object.entries(SUBTITLE_COUNTS)) {
  const voiceFiles = getVoiceFiles(episode);

  let globalVoiceIndex = 0;
  let sceneFrameCounts: number[] = [];
  let sceneDurations: number[] = [];

  for (const { count } of scenes) {
    let duration = 0;
    for (let j = 0; j < count; j++) {
      if (globalVoiceIndex < voiceFiles.length) {
        const filePath = `public/assets/audio/voiceover/${episode}/${voiceFiles[globalVoiceIndex]}`;
        duration += getAudioDuration(filePath);
        globalVoiceIndex++;
      }
    }

    sceneFrameCounts.push(Math.round(duration * FPS));
    sceneDurations.push(duration);
  }

  // 计算偏移量
  const offsets: number[] = [];
  let acc = 0;
  for (let i = 0; i < sceneFrameCounts.length; i++) {
    offsets.push(acc);
    acc += sceneFrameCounts[i];
  }

  results[episode] = {
    frames: sceneFrameCounts,
    durations: sceneDurations,
    offsets,
  };

  console.log(`\n=== ${episode.toUpperCase()} ===`);
  console.log(`配音文件: ${globalVoiceIndex}/${voiceFiles.length}`);
  console.log(
    `总时长: ${sceneDurations.reduce((a, b) => a + b, 0).toFixed(1)}s = ${sceneFrameCounts.reduce((a, b) => a + b, 0)}帧`,
  );
  console.log(`\nSCENE_FRAMES = [${sceneFrameCounts.join(", ")}]`);
  console.log(`SCENE_OFFSETS = [${offsets.join(", ")}]`);
}

// 输出 JSON 供后续使用
console.log(`\n\n=== JSON OUTPUT ===`);
console.log(JSON.stringify(results, null, 2));
