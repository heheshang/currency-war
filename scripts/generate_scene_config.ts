import * as fs from "fs";
import { execSync } from "child_process";

const FPS = 30;

// 字幕条数（从实际文件读取）
const SUBTITLE_COUNTS: { [episode: string]: { scene: string; count: number }[] } = {
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
    { scene: "MonetaryStandardSceneSubtitles", count: 12 },
    { scene: "GoldSilverSceneSubtitles", count: 9 },
    { scene: "DebtObesitySceneSubtitles", count: 6 },
    { scene: "FinancialAirForceSceneSubtitles", count: 6 },
    { scene: "StrategySceneSubtitles", count: 18 },
    { scene: "WorldReserveSceneSubtitles", count: 7 },
    { scene: "FinancialRiskSceneSubtitles", count: 12 },
    { scene: "EndingSceneSubtitles", count: 3 },
  ],
};

// 场景名称（用于注释）
const SCENE_NAMES: { [episode: string]: string[] } = {
  episode07: ["开场", "布雷顿森林", "豪斯上校", "外交协会", "国际清算银行", "彼尔德伯格", "三边委员会"],
  episode10: ["Opening", "Fractional Reserve", "Debt Dollar", "Derivatives", "Fannie/Freddie", "Gold Prison", "Gold Counter", "Rothschild", "Summary"],
  episode11: ["Opening", "Monetary Standard", "Gold Silver", "Debt Obesity", "Financial Air Force", "Strategy", "World Reserve", "Financial Risk", "Ending"],
};

function getAudioDuration(filePath: string): number {
  try {
    const result = execSync(
      `ffprobe -i "${filePath}" -show_entries format=duration -v quiet -of csv="p=0"`,
      { encoding: "utf-8" }
    );
    return parseFloat(result.trim());
  } catch {
    return 0;
  }
}

function getVoiceFiles(episode: string): string[] {
  const dir = `public/assets/audio/voiceover/${episode}`;
  return fs.readdirSync(dir)
    .filter(f => f.match(/voice_\d{4}\.(mp3|m4a)$/))
    .sort();
}

// 主逻辑
for (const [episode, scenes] of Object.entries(SUBTITLE_COUNTS)) {
  console.log(`\n${"=".repeat(70)}`);
  console.log(`${episode.toUpperCase()}`);
  console.log("=".repeat(70));

  const voiceFiles = getVoiceFiles(episode);
  const sceneNames = SCENE_NAMES[episode];
  
  console.log(`配音文件总数: ${voiceFiles.length}`);

  let globalVoiceIndex = 0;
  let sceneFrameCounts: number[] = [];
  let sceneDurations: number[] = [];
  let totalFrames = 0;
  let totalDuration = 0;

  for (let i = 0; i < scenes.length; i++) {
    const { scene, count } = scenes[i];
    const sceneName = sceneNames[i];
    
    // 获取该场景对应的配音文件时长
    let duration = 0;
    for (let j = 0; j < count; j++) {
      if (globalVoiceIndex < voiceFiles.length) {
        const filePath = `public/assets/audio/voiceover/${episode}/${voiceFiles[globalVoiceIndex]}`;
        duration += getAudioDuration(filePath);
        globalVoiceIndex++;
      }
    }
    
    const frames = Math.round(duration * FPS);
    sceneFrameCounts.push(frames);
    sceneDurations.push(duration);
    totalFrames += frames;
    totalDuration += duration;

    console.log(`\nScene ${i}: ${sceneName} (${scene})`);
    console.log(`  字幕条数: ${count}`);
    console.log(`  配音时长: ${duration.toFixed(1)}s = ${frames}帧`);
  }

  // 计算偏移量
  const offsets: number[] = [];
  let acc = 0;
  for (let i = 0; i < sceneFrameCounts.length; i++) {
    offsets.push(acc);
    acc += sceneFrameCounts[i];
  }

  // 生成 TypeScript 配置代码
  console.log(`\n${"-".repeat(70)}`);
  console.log(`生成的配置代码:\n`);
  
  console.log(`/**`);
  console.log(` * ${episode} 字幕 - 基于实际配音时长`);
  console.log(` * `);
  console.log(` * 生成日期：${new Date().toISOString().split('T')[0]}`);
  console.log(` * 总时长：${totalDuration.toFixed(1)}秒 = ${totalFrames}帧 (@30fps)`);
  console.log(` * `);
  console.log(` * 场景时长（基于配音实际时长）:`);
  sceneDurations.forEach((d, i) => {
    console.log(` * - Scene ${i}: ${d.toFixed(1)}秒 = ${sceneFrameCounts[i]}帧`);
  });
  console.log(` */`);
  console.log(`import { SubtitleEntry } from "./index";`);
  console.log(`\n// 场景帧数配置（基于配音实际时长，30fps）`);
  console.log(`export const SCENE_FRAMES = [`);
  sceneFrameCounts.forEach((f, i) => {
    console.log(`  ${f}, // Scene ${i}: ${sceneDurations[i].toFixed(1)}s - ${sceneNames[i]}`);
  });
  console.log(`];`);
  console.log(`\n// 累计偏移量`);
  console.log(`export const SCENE_OFFSETS = SCENE_FRAMES.reduce((acc: number[], frames, i) => {`);
  console.log(`  acc.push(i === 0 ? 0 : acc[i - 1] + SCENE_FRAMES[i - 1]);`);
  console.log(`  return acc;`);
  console.log(`}, []);`);
  
  console.log(`\n// 总时长: ${totalDuration.toFixed(1)}s = ${totalFrames}帧`);
  console.log(`// 配音文件使用: ${globalVoiceIndex}/${voiceFiles.length}`);
  
  // 验证
  if (globalVoiceIndex !== voiceFiles.length) {
    console.log(`\n⚠️  警告: 配音文件数量不匹配！使用了 ${globalVoiceIndex}，实际有 ${voiceFiles.length}`);
  }
}
