import * as fs from "fs";
import { execSync } from "child_process";

const FPS = 30;

// 场景配置
const SCENES: { [episode: string]: { name: string; exportName: string }[] } = {
  episode04: [
    { name: "开场：威尔逊的忏悔", exportName: "scene01Subs" },
    { name: "美联储真相揭示", exportName: "scene02Subs" },
    { name: "华尔街七大巨头", exportName: "scene03Subs" },
    { name: "摩根家族崛起", exportName: "scene04Subs" },
    { name: "洛克菲勒帝国", exportName: "scene05Subs" },
    { name: "1907年银行危机", exportName: "scene06Subs" },
    { name: "从金本位到法定货币", exportName: "scene07Subs" },
    { name: "1912年大选", exportName: "scene08Subs" },
    { name: "B计划", exportName: "scene09Subs" },
    { name: "法案通过", exportName: "scene10Subs" },
    { name: "谁拥有美联储", exportName: "scene11Subs" },
    { name: "隐形控制", exportName: "scene12Subs" },
    { name: "威尔逊的觉醒", exportName: "scene13Subs" },
    { name: "总结", exportName: "scene14Subs" },
  ],
  episode07: [],
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

// 解析现有字幕文件，提取每个场景的字幕文本
function parseSubtitles(filepath: string): Map<string, { text: string }[]> {
  const content = fs.readFileSync(filepath, "utf-8");
  const result = new Map<string, { text: string }[]>();
  
  // 匹配场景数组
  const scenePattern = /export const (\w+Subs|\w+Scene):\s*SubtitleEntry\[\]\s*=\s*\[/g;
  
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

// 为 Episode07 生成新的字幕文件
function generateEpisode07SubtitleFile() {
  const episode = "episode07";
  const voiceFiles = getVoiceFiles(episode);
  const existingSubs = parseSubtitles(`src/subtitles/${episode}.ts`);
  
  let globalVoiceIndex = 0;
  const sceneFrameCounts: number[] = [];
  const sceneDurations: number[] = [];
  const sceneSubtitles: { startFrame: number; endFrame: number; text: string }[][] = [];
  
  for (const scene of SCENES[episode]) {
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
  
  // 生成文件内容
  const totalFrames = sceneFrameCounts.reduce((a, b) => a + b, 0);
  const totalDuration = sceneDurations.reduce((a, b) => a + b, 0);
  
  let content = `/**
 * Episode07 字幕 - 基于实际配音时长
 * 
 * 生成日期：${new Date().toISOString().split('T')[0]}
 * 总时长：${totalDuration.toFixed(1)}秒 = ${totalFrames}帧 (@30fps)
 * 
 * 场景时长（基于配音实际时长）:
`;
  sceneDurations.forEach((d, i) => {
    content += ` * - Scene ${i}: ${d.toFixed(1)}秒 = ${sceneFrameCounts[i]}帧 - ${SCENES[episode][i].name}\n`;
  });
  content += ` *
 * 基于《货币战争》book1-第六章：统治世界的精英俱乐部
 */
import { SubtitleEntry } from "./index";

// 场景帧数配置（基于配音实际时长，30fps）
export const SCENE_FRAMES = [
`;
  sceneFrameCounts.forEach((f, i) => {
    content += `  ${f}, // Scene ${i}: ${sceneDurations[i].toFixed(1)}s - ${SCENES[episode][i].name}\n`;
  });
  content += `];

// 累计偏移量
export const SCENE_OFFSETS = SCENE_FRAMES.reduce((acc: number[], frames, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + SCENE_FRAMES[i - 1]);
  return acc;
}, []);
`;

  // 添加每个场景的字幕
  for (let i = 0; i < SCENES[episode].length; i++) {
    const scene = SCENES[episode][i];
    const subs = sceneSubtitles[i];
    
    content += `\n// Scene ${i}: ${scene.name} (${sceneDurations[i].toFixed(1)}s = ${sceneFrameCounts[i]}帧)\n`;
    content += `export const ${scene.exportName}: SubtitleEntry[] = [\n`;
    for (const sub of subs) {
      content += `  { startFrame: ${sub.startFrame}, endFrame: ${sub.endFrame}, text: "${sub.text.replace(/"/g, '\\"')}" },\n`;
    }
    content += `];\n`;
  }
  
  // 生成合并字幕
  content += `\n// 合并所有字幕（使用 SCENE_OFFSETS 计算全局帧）\n`;
  content += `export const episode07Subtitles: SubtitleEntry[] = [\n`;
  for (let i = 0; i < SCENES[episode].length; i++) {
    const scene = SCENES[episode][i];
    content += `  ...${scene.exportName}.map((s) => ({ ...s, startFrame: s.startFrame + SCENE_OFFSETS[${i}], endFrame: s.endFrame + SCENE_OFFSETS[${i}] })),\n`;
  }
  content += `];\n\nexport default episode07Subtitles;\n`;
  
  return { content, totalFrames, totalDuration, voiceFilesUsed: globalVoiceIndex, voiceFilesTotal: voiceFiles.length };
}

// 通用的字幕生成函数
function generateSubtitleFile(episode: string) {
  const voiceFiles = getVoiceFiles(episode);
  const existingSubs = parseSubtitles(`src/subtitles/${episode}.ts`);
  
  let globalVoiceIndex = 0;
  const sceneFrameCounts: number[] = [];
  const sceneDurations: number[] = [];
  const sceneSubtitles: { startFrame: number; endFrame: number; text: string }[][] = [];
  
  for (const scene of SCENES[episode]) {
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
  
  // 生成文件内容
  const totalFrames = sceneFrameCounts.reduce((a, b) => a + b, 0);
  const totalDuration = sceneDurations.reduce((a, b) => a + b, 0);
  
  let content = `/**
 * ${episode} 字幕 - 基于实际配音时长
 * 
 * 生成日期：${new Date().toISOString().split('T')[0]}
 * 总时长：${totalDuration.toFixed(1)}秒 = ${totalFrames}帧 (@30fps)
 */
import { SubtitleEntry } from "./index";

// 场景帧数配置（基于配音实际时长，30fps）
export const SCENE_FRAMES = [
`;
  sceneFrameCounts.forEach((f, i) => {
    content += `  ${f}, // Scene ${i}: ${sceneDurations[i].toFixed(1)}s - ${SCENES[episode][i].name}\n`;
  });
  content += `];

// 累计偏移量
export const SCENE_OFFSETS = SCENE_FRAMES.reduce((acc: number[], frames, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + SCENE_FRAMES[i - 1]);
  return acc;
}, []);
`;

  // 添加每个场景的字幕
  for (let i = 0; i < SCENES[episode].length; i++) {
    const scene = SCENES[episode][i];
    const subs = sceneSubtitles[i];
    
    content += `\n// Scene ${i}: ${scene.name} (${sceneDurations[i].toFixed(1)}s = ${sceneFrameCounts[i]}帧)\n`;
    content += `export const ${scene.exportName}: SubtitleEntry[] = [\n`;
    for (const sub of subs) {
      content += `  { startFrame: ${sub.startFrame}, endFrame: ${sub.endFrame}, text: "${sub.text.replace(/"/g, '\\"')}" },\n`;
    }
    content += `];\n`;
  }
  
  // 生成合并字幕
  content += `\n// 合并所有字幕（使用 SCENE_OFFSETS 计算全局帧）\n`;
  content += `export const ${episode}Subtitles: SubtitleEntry[] = [\n`;
  for (let i = 0; i < SCENES[episode].length; i++) {
    const scene = SCENES[episode][i];
    content += `  ...${scene.exportName}.map((s) => ({ ...s, startFrame: s.startFrame + SCENE_OFFSETS[${i}], endFrame: s.endFrame + SCENE_OFFSETS[${i}] })),\n`;
  }
  content += `];\n\nexport default ${episode}Subtitles;\n`;
  
  // 添加向后兼容导出
  if (episode === 'episode04') {
    content += `\n// Backward compatibility\n`;
    content += `export const OpeningSceneSubtitles = scene01Subs;\n`;
    content += `export const JekyllIslandSceneSubtitles = scene02Subs;\n`;
    content += `export const WallStreetTycoonsSceneSubtitles = scene03Subs;\n`;
    content += `export const MorganRiseSceneSubtitles = scene04Subs;\n`;
    content += `export const RockefellerEmpireSceneSubtitles = scene05Subs;\n`;
    content += `export const Panic1907SceneSubtitles = scene06Subs;\n`;
    content += `export const GoldToFiatSceneSubtitles = scene07Subs;\n`;
    content += `export const Election1912SceneSubtitles = scene08Subs;\n`;
    content += `export const PlanBSceneSubtitles = scene09Subs;\n`;
    content += `export const ActPassesSceneSubtitles = scene10Subs;\n`;
    content += `export const WhoOwnsFedSceneSubtitles = scene11Subs;\n`;
    content += `export const HiddenControlSceneSubtitles = scene12Subs;\n`;
    content += `export const WilsonRealizationSceneSubtitles = scene13Subs;\n`;
    content += `export const SummarySceneSubtitles = scene14Subs;\n`;
  }
  
  return { content, totalFrames, totalDuration, voiceFilesUsed: globalVoiceIndex, voiceFilesTotal: voiceFiles.length };
}

// 从命令行参数获取剧集名称
const episode = process.argv[2] || 'episode04';

if (!SCENES[episode]) {
  console.error(`错误: 未找到 ${episode} 的场景配置`);
  console.log(`可用剧集: ${Object.keys(SCENES).join(', ')}`);
  process.exit(1);
}

// 执行生成
const result = generateSubtitleFile(episode);
console.log(`生成 ${episode} 字幕文件:`);
console.log(`  总时长: ${result.totalDuration.toFixed(1)}s = ${result.totalFrames}帧`);
console.log(`  配音文件: ${result.voiceFilesUsed}/${result.voiceFilesTotal}`);

// 保存文件
fs.writeFileSync(`src/subtitles/${episode}.ts`, result.content);
console.log(`\n已保存到 src/subtitles/${episode}.ts`);
