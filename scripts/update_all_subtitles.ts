import * as fs from "fs";
import { execSync } from "child_process";

const FPS = 30;

// 场景配置
const SCENES: { [episode: string]: { name: string; exportName: string }[] } = {
  episode10: [
    { name: "Opening", exportName: "OpeningScene" },
    { name: "Fractional Reserve", exportName: "FractionalReserveScene" },
    { name: "Debt Dollar", exportName: "DebtDollarScene" },
    { name: "Derivatives", exportName: "DerivativesScene" },
    { name: "Fannie/Freddie", exportName: "FannieFreddieScene" },
    { name: "Gold Prison", exportName: "GoldPrisonScene" },
    { name: "Gold Counter", exportName: "GoldCounterScene" },
    { name: "Rothschild", exportName: "RothschildScene" },
    { name: "Summary", exportName: "SummaryScene" },
  ],
  episode11: [
    { name: "Opening", exportName: "OpeningSceneSubtitles" },
    { name: "Monetary Standard", exportName: "MonetaryStandardSceneSubtitles" },
    { name: "Gold Silver", exportName: "GoldSilverSceneSubtitles" },
    { name: "Debt Obesity", exportName: "DebtObesitySceneSubtitles" },
    { name: "Financial Air Force", exportName: "FinancialAirForceSceneSubtitles" },
    { name: "Strategy", exportName: "StrategySceneSubtitles" },
    { name: "World Reserve", exportName: "WorldReserveSceneSubtitles" },
    { name: "Financial Risk", exportName: "FinancialRiskSceneSubtitles" },
    { name: "Ending", exportName: "EndingSceneSubtitles" },
  ],
};

// 别名映射
const ALIAS_MAP: { [episode: string]: { [original: string]: string } } = {
  episode10: {
    "OpeningScene": "openingSubs",
    "FractionalReserveScene": "fractionalReserveSubs",
    "DebtDollarScene": "debtDollarSubs",
    "DerivativesScene": "derivativesSubs",
    "FannieFreddieScene": "fannieFreddieSubs",
    "GoldPrisonScene": "goldPrisonSubs",
    "GoldCounterScene": "goldCounterSubs",
    "RothschildScene": "rothschildSubs",
    "SummaryScene": "summarySubs",
  },
  episode11: {
    "OpeningSceneSubtitles": "openingSubs",
    "MonetaryStandardSceneSubtitles": "monetaryStandardSubs",
    "GoldSilverSceneSubtitles": "goldSilverSubs",
    "DebtObesitySceneSubtitles": "debtObesitySubs",
    "FinancialAirForceSceneSubtitles": "financialAirForceSubs",
    "StrategySceneSubtitles": "strategySubs",
    "WorldReserveSceneSubtitles": "worldReserveSubs",
    "FinancialRiskSceneSubtitles": "financialRiskSubs",
    "EndingSceneSubtitles": "endingSubs",
  },
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

// 解析现有字幕文件
function parseSubtitles(filepath: string): Map<string, { text: string }[]> {
  const content = fs.readFileSync(filepath, "utf-8");
  const result = new Map<string, { text: string }[]>();
  
  // 匹配场景数组
  const scenePattern = /export const (\w+Scene|\w+Subtitles|\w+Subs):\s*SubtitleEntry\[\]\s*=\s*\[/g;
  
  let match;
  while ((match = scenePattern.exec(content)) !== null) {
    const sceneName = match[1];
    const start = match.index + match[0].length;
    
    // 找到匹配的 ]
    let bracketCount = 1;
    let end = start;
    while (end < content.length && bracketCount > 0) {
      if (content[end] === '[') bracketCount++;
      else if (content[end] === ']') bracketCount--;
      end++;
    }
    
    const arrayContent = content.slice(start, end);
    
    // 提取字幕文本
    const subs: { text: string }[] = [];
    const textPattern = /text:\s*"([^"]+)"/g;
    let textMatch;
    while ((textMatch = textPattern.exec(arrayContent)) !== null) {
      subs.push({ text: textMatch[1] });
    }
    
    result.set(sceneName, subs);
  }
  
  return result;
}

// 生成字幕文件
function generateSubtitleFile(episode: string) {
  const voiceFiles = getVoiceFiles(episode);
  const existingSubs = parseSubtitles(`src/subtitles/${episode}.ts`);
  const scenes = SCENES[episode];
  const aliasMap = ALIAS_MAP[episode];
  
  let globalVoiceIndex = 0;
  const sceneFrameCounts: number[] = [];
  const sceneDurations: number[] = [];
  const sceneSubtitles: { startFrame: number; endFrame: number; text: string }[][] = [];
  
  for (const scene of scenes) {
    const subs = existingSubs.get(scene.exportName) || [];
    const subsCount = subs.length;
    
    // 获取该场景的配音时长
    const voiceDurations: number[] = [];
    let sceneDuration = 0;
    for (let i = 0; i < subsCount; i++) {
      if (globalVoiceIndex < voiceFiles.length) {
        const duration = getAudioDuration(`public/assets/audio/voiceover/${episode}/${voiceFiles[globalVoiceIndex]}`);
        voiceDurations.push(duration);
        sceneDuration += duration;
        globalVoiceIndex++;
      }
    }
    
    // 生成新的字幕时间
    const newSubs: { startFrame: number; endFrame: number; text: string }[] = [];
    let currentFrame = 0;
    for (let i = 0; i < subs.length; i++) {
      const duration = voiceDurations[i] || 0;
      const frameCount = Math.round(duration * FPS);
      newSubs.push({
        startFrame: currentFrame,
        endFrame: currentFrame + frameCount,
        text: subs[i].text,
      });
      currentFrame += frameCount;
    }
    
    sceneSubtitles.push(newSubs);
    sceneFrameCounts.push(currentFrame);
    sceneDurations.push(sceneDuration);
  }
  
  // 计算偏移量
  const offsets: number[] = [];
  let acc = 0;
  for (let i = 0; i < sceneFrameCounts.length; i++) {
    offsets.push(acc);
    acc += sceneFrameCounts[i];
  }
  
  // 生成文件内容
  const totalFrames = sceneFrameCounts.reduce((a, b) => a + b, 0);
  const totalDuration = sceneDurations.reduce((a, b) => a + b, 0);
  
  let content = `/**
 * ${episode} 字幕 - 基于实际配音时长
 * 
 * 生成日期：${new Date().toISOString().split('T')[0]}
 * 总时长：${totalDuration.toFixed(1)}秒 = ${totalFrames}帧 (@30fps)
 * 
 * 场景时长（基于配音实际时长）:
`;
  sceneDurations.forEach((d, i) => {
    content += ` * - Scene ${i}: ${d.toFixed(1)}秒 = ${sceneFrameCounts[i]}帧 - ${scenes[i].name}\n`;
  });
  content += ` */
import { SubtitleEntry } from "./index";

// 场景帧数配置（基于配音实际时长，30fps）
export const SCENE_FRAMES = [
`;
  sceneFrameCounts.forEach((f, i) => {
    content += `  ${f}, // Scene ${i}: ${sceneDurations[i].toFixed(1)}s - ${scenes[i].name}\n`;
  });
  content += `];

// 累计偏移量
export const SCENE_OFFSETS = SCENE_FRAMES.reduce((acc: number[], frames, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + SCENE_FRAMES[i - 1]);
  return acc;
}, []);
`;

  // 添加每个场景的字幕
  for (let i = 0; i < scenes.length; i++) {
    const scene = scenes[i];
    const subs = sceneSubtitles[i];
    
    content += `\n// Scene ${i}: ${scene.name} (${sceneDurations[i].toFixed(1)}s = ${sceneFrameCounts[i]}帧)\n`;
    content += `export const ${scene.exportName}: SubtitleEntry[] = [\n`;
    for (const sub of subs) {
      content += `  { startFrame: ${sub.startFrame}, endFrame: ${sub.endFrame}, text: "${sub.text.replace(/"/g, '\\"')}" },\n`;
    }
    content += `];\n`;
  }
  
  // 生成别名导出
  content += `\n// 别名导出（兼容旧代码）\n`;
  for (const [original, alias] of Object.entries(aliasMap)) {
    content += `export const ${alias} = ${original};\n`;
  }
  
  // 生成合并字幕
  content += `\n// 合并所有字幕（使用 SCENE_OFFSETS 计算全局帧）\n`;
  content += `export const ${episode}Subtitles: SubtitleEntry[] = [\n`;
  for (let i = 0; i < scenes.length; i++) {
    content += `  ...${scenes[i].exportName}.map((s) => ({ ...s, startFrame: s.startFrame + SCENE_OFFSETS[${i}], endFrame: s.endFrame + SCENE_OFFSETS[${i}] })),\n`;
  }
  content += `];\n\nexport default ${episode}Subtitles;\n`;
  
  return { content, totalFrames, totalDuration, voiceFilesUsed: globalVoiceIndex, voiceFilesTotal: voiceFiles.length, offsets };
}

// 执行生成
for (const episode of ["episode10", "episode11"]) {
  console.log(`\n${"=".repeat(60)}`);
  console.log(`生成 ${episode} 字幕文件`);
  console.log("=".repeat(60));
  
  const result = generateSubtitleFile(episode);
  console.log(`总时长: ${result.totalDuration.toFixed(1)}s = ${result.totalFrames}帧`);
  console.log(`配音文件: ${result.voiceFilesUsed}/${result.voiceFilesTotal}`);
  console.log(`SCENE_FRAMES: [${result.content.match(/SCENE_FRAMES = \[([\s\S]*?)\]/)?.[1]?.trim().split('\n').map(l => l.trim().replace(/,.*/, '')).join(', ')}]`);
  
  // 保存文件
  fs.writeFileSync(`src/subtitles/${episode}.ts`, result.content);
  console.log(`已保存到 src/subtitles/${episode}.ts`);
}
