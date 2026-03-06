import * as fs from "fs";
import { execSync } from "child_process";

const FPS = 30;

// 手动配置场景边界 - 使用别名导出名称（统一格式）
const SCENE_CONFIG: { [episode: string]: { name: string; exportName: string }[] } = {
  episode07: [
    { name: "Scene 0: 开场", exportName: "openingSubs" },
    { name: "Scene 1: 布雷顿森林", exportName: "brettonWoodsSubs" },
    { name: "Scene 2: 豪斯上校", exportName: "houseColonelSubs" },
    { name: "Scene 3: 外交协会", exportName: "cfrEliteSubs" },
    { name: "Scene 4: 国际清算银行", exportName: "bisSubs" },
    { name: "Scene 5: 彼尔德伯格", exportName: "bilderbergSubs" },
    { name: "Scene 6: 三边委员会", exportName: "trilateralSubs" },
  ],
  episode10: [
    { name: "Scene 0: Opening", exportName: "openingSubs" },
    { name: "Scene 1: Fractional Reserve", exportName: "fractionalReserveSubs" },
    { name: "Scene 2: Debt Dollar", exportName: "debtDollarSubs" },
    { name: "Scene 3: Derivatives", exportName: "derivativesSubs" },
    { name: "Scene 4: Fannie/Freddie", exportName: "fannieFreddieSubs" },
    { name: "Scene 5: Gold Prison", exportName: "goldPrisonSubs" },
    { name: "Scene 6: Gold Counter", exportName: "goldCounterSubs" },
    { name: "Scene 7: Rothschild", exportName: "rothschildSubs" },
    { name: "Scene 8: Summary", exportName: "summarySubs" },
  ],
  episode11: [
    { name: "Scene 0: Opening", exportName: "openingSubs" },
    { name: "Scene 1: Monetary Standard", exportName: "monetaryStandardSubs" },
    { name: "Scene 2: Gold Silver", exportName: "goldSilverSubs" },
    { name: "Scene 3: Debt Obesity", exportName: "debtObesitySubs" },
    { name: "Scene 4: Financial Air Force", exportName: "financialAirForceSubs" },
    { name: "Scene 5: Strategy", exportName: "strategySubs" },
    { name: "Scene 6: World Reserve", exportName: "worldReserveSubs" },
    { name: "Scene 7: Financial Risk", exportName: "financialRiskSubs" },
    { name: "Scene 8: Ending", exportName: "endingSubs" },
  ],
};

function findSubtitlesArray(subtitleContent: string, exportName: string): string | null {
  // 首先检查是否是别名导出: export const openingSubs = OpeningScene;
  const aliasMatch = subtitleContent.match(new RegExp(`export const ${exportName}\\s*=\\s*(\\w+);`));
  if (aliasMatch) {
    // 这是一个别名，找到原始数组
    const originalName = aliasMatch[1];
    return findSubtitlesArray(subtitleContent, originalName);
  }
  
  // 直接导出数组: export const xxxSubs: SubtitleEntry[] = [ ... ];
  const startIdx = subtitleContent.indexOf(`export const ${exportName}`);
  if (startIdx === -1) return null;
  
  // 找到数组开始
  let bracketStart = subtitleContent.indexOf('[', startIdx);
  if (bracketStart === -1) return null;
  
  // 找到匹配的 ]
  let depth = 1;
  let i = bracketStart + 1;
  while (i < subtitleContent.length && depth > 0) {
    if (subtitleContent[i] === '[') depth++;
    else if (subtitleContent[i] === ']') depth--;
    i++;
  }
  
  return subtitleContent.slice(bracketStart, i);
}

function countSubtitlesInArray(arrayContent: string): number {
  // 计算有多少个对象 { startFrame: ... } 或 { "startFrame": ... }
  const objMatches = arrayContent.match(/\{\s*(startFrame|"startFrame")/g);
  return objMatches ? objMatches.length : 0;
}

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
const output: { [episode: string]: { frames: number[], offsets: number[], durations: number[], totalFrames: number, totalDuration: number } } = {};

for (const [episode, scenes] of Object.entries(SCENE_CONFIG)) {
  console.log(`\n${"=".repeat(60)}`);
  console.log(`${episode.toUpperCase()}`);
  console.log("=".repeat(60));

  const subtitlePath = `src/subtitles/${episode}.ts`;
  const subtitleContent = fs.readFileSync(subtitlePath, "utf-8");
  const voiceFiles = getVoiceFiles(episode);
  
  console.log(`配音文件总数: ${voiceFiles.length}`);

  let globalVoiceIndex = 0;
  let sceneFrameCounts: number[] = [];
  let sceneDurations: number[] = [];
  let totalFrames = 0;

  for (const scene of scenes) {
    const arrayContent = findSubtitlesArray(subtitleContent, scene.exportName);
    const subCount = arrayContent ? countSubtitlesInArray(arrayContent) : 0;
    
    // 获取该场景对应的配音文件时长
    let sceneDuration = 0;
    const voiceIndexes: number[] = [];
    for (let i = 0; i < subCount; i++) {
      if (globalVoiceIndex < voiceFiles.length) {
        const filePath = `public/assets/audio/voiceover/${episode}/${voiceFiles[globalVoiceIndex]}`;
        sceneDuration += getAudioDuration(filePath);
        voiceIndexes.push(globalVoiceIndex);
        globalVoiceIndex++;
      }
    }
    
    const sceneFrames = Math.round(sceneDuration * FPS);
    sceneFrameCounts.push(sceneFrames);
    sceneDurations.push(sceneDuration);
    totalFrames += sceneFrames;

    console.log(`\n${scene.name} (${scene.exportName})`);
    console.log(`  字幕条数: ${subCount}`);
    if (voiceIndexes.length > 0) {
      console.log(`  配音文件: voice_${String(voiceIndexes[0]).padStart(4, '0')} - voice_${String(voiceIndexes[voiceIndexes.length - 1]).padStart(4, '0')}`);
    }
    console.log(`  配音时长: ${sceneDuration.toFixed(1)}s = ${sceneFrames}帧`);
  }

  // 计算偏移量
  const offsets: number[] = [];
  let acc = 0;
  for (let i = 0; i < sceneFrameCounts.length; i++) {
    offsets.push(acc);
    acc += sceneFrameCounts[i];
  }

  output[episode] = { 
    frames: sceneFrameCounts, 
    offsets, 
    durations: sceneDurations,
    totalFrames,
    totalDuration: totalFrames / FPS
  };

  // 生成输出
  console.log(`\n--- 配置代码 ---`);
  console.log(`// 场景帧数配置（基于配音实际时长，30fps）`);
  console.log(`export const SCENE_FRAMES = [`);
  sceneFrameCounts.forEach((f, i) => {
    console.log(`  ${f}, // ${scenes[i].name}: ${sceneDurations[i].toFixed(1)}s`);
  });
  console.log(`];`);
  console.log(`\n// 累计偏移量`);
  console.log(`export const SCENE_OFFSETS = [${offsets.join(', ')}];`);
  
  console.log(`\n// 总时长: ${(totalFrames / FPS).toFixed(1)}s = ${totalFrames}帧`);
  console.log(`// 配音文件使用: ${globalVoiceIndex}/${voiceFiles.length}`);
}

// 最终输出 JSON
console.log(`\n\n${"=".repeat(60)}`);
console.log("FINAL OUTPUT (JSON)");
console.log("=".repeat(60));
console.log(JSON.stringify(output, null, 2));
