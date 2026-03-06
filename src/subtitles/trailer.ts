/**
 * Trailer 字幕 - 基于实际配音时长
 *
 * 生成日期：2026-03-03
 * 总时长：70.3秒（2109帧 @30fps）
 *
 * 场景时长（基于配音实际时长）:
 * - Scene 1: 12.2秒 = 365帧
 * - Scene 2: 20.1秒 = 603帧
 * - Scene 3: 15.0秒 = 449帧
 * - Scene 4: 11.9秒 = 356帧
 * - Scene 5: 11.2秒 = 336帧
 */
import { SubtitleEntry } from "./index";

// 场景帧数配置（基于配音实际时长，30fps）
export const SCENE_FRAMES = [
  365,  // Scene 0: 开场 12.2s
  603,  // Scene 1: 问题 20.1s
  449,  // Scene 2: 危机 15.0s
  356,  // Scene 3: 中国 11.9s
  336,  // Scene 4: 预告 11.2s
];

// 累计偏移量
export const SCENE_OFFSETS = SCENE_FRAMES.reduce((acc: number[], frames, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + SCENE_FRAMES[i - 1]);
  return acc;
}, []);

// Scene 0: 开场 (实际配音时长: 12.2s)
export const scene01Subs: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 48,    // 1.6s
    text: "货币战争。",
  },
  {
    startFrame: 48,
    endFrame: 151,   // 5.0s
    text: "战争已经开始，虽然看不见硝烟。",
  },
  {
    startFrame: 151,
    endFrame: 252,   // 8.4s
    text: "这场战争，关乎每一个人的财富。",
  },
  {
    startFrame: 252,
    endFrame: 365,   // 12.2s
    text: "这不是预言，而是正在发生的现实。",
  },
];

// Scene 1: 问题 (实际配音时长: 20.1s)
export const scene02Subs: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 151,   // 5.0s
    text: "为什么世界会采取这种必然导致危机的债务货币制度？",
  },
  {
    startFrame: 151,
    endFrame: 317,   // 10.6s
    text: "到底是什么样的特殊利益集团左右着货币制度的建立和演化？",
  },
  {
    startFrame: 317,
    endFrame: 457,   // 15.2s
    text: "他们又是如何从政府手中夺取了货币发行大权？",
  },
  {
    startFrame: 457,
    endFrame: 603,   // 20.1s
    text: "这些问题的答案，将揭示世界经济的真正运行逻辑。",
  },
];

// Scene 2: 危机 (实际配音时长: 15.0s)
export const scene03Subs: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 103,   // 3.4s
    text: "2008年席卷全球的金融危机，",
  },
  {
    startFrame: 103,
    endFrame: 267,   // 8.9s
    text: "根源在于全世界的货币大厦建立在美国的债务沙滩之上。",
  },
  {
    startFrame: 267,
    endFrame: 350,   // 11.7s
    text: "美元危机波及整个世界，",
  },
  {
    startFrame: 350,
    endFrame: 449,   // 15.0s
    text: "而更大的危机还在酝酿之中。",
  },
];

// Scene 3: 中国 (实际配音时长: 11.9s)
export const scene04Subs: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 74,    // 2.5s
    text: "起航的中国经济航母，",
  },
  {
    startFrame: 74,
    endFrame: 131,   // 4.4s
    text: "会一帆风顺吗？",
  },
  {
    startFrame: 131,
    endFrame: 249,   // 8.3s
    text: "看不见硝烟的金融战争威胁日益加剧。",
  },
  {
    startFrame: 249,
    endFrame: 356,   // 11.9s
    text: "中国将如何应对这场无形的战争？",
  },
];

// Scene 4: 预告 (实际配音时长: 11.2s)
export const scene05Subs: SubtitleEntry[] = [
  {
    startFrame: 0,
    endFrame: 84,    // 2.8s
    text: "11集节目为你揭示真相。",
  },
  {
    startFrame: 84,
    endFrame: 175,   // 5.8s
    text: "从罗斯柴尔德到美联储，",
  },
  {
    startFrame: 175,
    endFrame: 257,   // 8.6s
    text: "从一战到亚洲金融危机，",
  },
  {
    startFrame: 257,
    endFrame: 336,   // 11.2s
    text: "货币战争，敬请期待。",
  },
];

// 合并所有字幕
export const trailerSubtitles: SubtitleEntry[] = [
  ...scene01Subs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[0],
    endFrame: s.endFrame + SCENE_OFFSETS[0],
  })),
  ...scene02Subs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[1],
    endFrame: s.endFrame + SCENE_OFFSETS[1],
  })),
  ...scene03Subs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[2],
    endFrame: s.endFrame + SCENE_OFFSETS[2],
  })),
  ...scene04Subs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[3],
    endFrame: s.endFrame + SCENE_OFFSETS[3],
  })),
  ...scene05Subs.map((s) => ({
    ...s,
    startFrame: s.startFrame + SCENE_OFFSETS[4],
    endFrame: s.endFrame + SCENE_OFFSETS[4],
  })),
];

export default trailerSubtitles;