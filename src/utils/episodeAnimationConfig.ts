/**
 * Episode Animation Config - 剧集动画配置模板
 *
 * 定义每集的过渡效果配置、叙事者出场配置、关键场景特效配置
 */

import { TransitionType } from "../components/animations/SceneTransition";
import { NarratorEmotion, NarratorGesture, SpotlightMode } from "../components/characters/NarratorEnhancement";
import { CameraMovementType, CameraDirection } from "../components/animations/CinematicCamera";

// ============================================
// 基础类型定义
// ============================================

export interface TransitionConfig {
  /** 过渡类型 */
  type: TransitionType;
  /** 持续帧数 */
  duration: number;
  /** 方向 */
  direction?: "left" | "right" | "up" | "down";
}

export interface NarratorConfig {
  /** 叙事者位置 X (百分比) */
  x: number;
  /** 叙事者位置 Y (百分比) */
  y: number;
  /** 缩放 */
  scale: number;
  /** 情绪 */
  emotion: NarratorEmotion;
  /** 手势 */
  gesture: NarratorGesture;
  /** 聚光灯模式 */
  spotlight: SpotlightMode;
}

export interface CameraConfig {
  /** 镜头运动类型 */
  movement: CameraMovementType;
  /** 方向 */
  direction?: CameraDirection;
  /** 持续帧数 */
  duration: number;
  /** 运动幅度 */
  amount?: number;
}

export interface ParticleConfig {
  /** 粒子效果类型 */
  type: "goldRain" | "sparkle" | "fireworks" | "glow" | "keyMoment" | "dust";
  /** 触发帧 */
  frame: number;
}

export interface UIConfig {
  /** 标题动画配置 */
  title?: {
    effect: "fade" | "slide" | "scale" | "bounce" | "cinematic";
    duration: number;
  };
  /** 分割线配置 */
  divider?: {
    type: "simple" | "glow" | "ornate";
    color: string;
  };
}

// ============================================
// 场景配置
// ============================================

export interface SceneAnimationConfig {
  /** 场景ID */
  sceneId: string;
  /** 入场过渡 */
  entranceTransition?: TransitionConfig;
  /** 出场过渡 */
  exitTransition?: TransitionConfig;
  /** 叙事者配置 */
  narrator?: NarratorConfig;
  /** 镜头效果 */
  camera?: CameraConfig;
  /** 粒子效果 */
  particles?: ParticleConfig[];
  /** UI配置 */
  ui?: UIConfig;
  /** 标题动画配置 */
  title?: {
    effect: "fade" | "slide" | "scale" | "bounce" | "cinematic";
    duration: number;
  };
}

// ============================================
// 剧集配置
// ============================================

export interface EpisodeAnimationConfig {
  /** 剧集编号 */
  episodeNumber: number;
  /** 剧集标题 */
  title: string;
  /** 默认过渡类型 */
  defaultTransition: TransitionType;
  /** 默认过渡时长 */
  defaultTransitionDuration: number;
  /** 叙事者出场配置 */
  narratorEntrance: NarratorConfig;
  /** 场景配置列表 */
  scenes: SceneAnimationConfig[];
}

// ============================================
// EP01 动画配置
// ============================================

const EP01_Scenes: SceneAnimationConfig[] = [
  {
    sceneId: "opening",
    entranceTransition: { type: "fade", duration: 60 },
    title: {
      effect: "cinematic",
      duration: 60,
    },
    particles: [
      { type: "glow", frame: 0 },
    ],
  },
  {
    sceneId: "ancient_market",
    entranceTransition: { type: "slideLeft", duration: 30 },
    camera: {
      movement: "pan",
      direction: "right",
      duration: 90,
      amount: 50,
    },
  },
  {
    sceneId: "narrator_intro",
    entranceTransition: { type: "fade", duration: 45 },
    narrator: {
      x: 30,
      y: 50,
      scale: 1.2,
      emotion: "serious",
      gesture: "none",
      spotlight: "focus",
    },
  },
];

// ============================================
// EP02 动画配置
// ============================================

const EP02_Scenes: SceneAnimationConfig[] = [
  {
    sceneId: "scene_1",
    entranceTransition: { type: "fade", duration: 45 },
    title: {
      effect: "cinematic",
      duration: 45,
    },
  },
  {
    sceneId: "scene_2",
    entranceTransition: { type: "slideLeft", duration: 30 },
    camera: {
      movement: "dolly",
      direction: "right",
      duration: 60,
    },
  },
  {
    sceneId: "narrator_1",
    narrator: {
      x: 25,
      y: 55,
      scale: 1.1,
      emotion: "thinking",
      gesture: "none",
      spotlight: "focus",
    },
  },
];

// ============================================
// 预设剧集配置
// ============================================

/**
 * 默认叙事者出场配置
 */
export const defaultNarratorEntrance: NarratorConfig = {
  x: 30,
  y: 50,
  scale: 1.2,
  emotion: "neutral",
  gesture: "none",
  spotlight: "entrance",
};

/**
 * 默认过渡配置
 */
export const defaultTransition: TransitionConfig = {
  type: "fade",
  duration: 45,
};

/**
 * 获取剧集的动画配置
 */
export function getEpisodeConfig(episodeNumber: number): EpisodeAnimationConfig {
  const episodeConfigs: Record<number, EpisodeAnimationConfig> = {
    1: {
      episodeNumber: 1,
      title: "货币战争",
      defaultTransition: "fade",
      defaultTransitionDuration: 45,
      narratorEntrance: defaultNarratorEntrance,
      scenes: EP01_Scenes,
    },
    2: {
      episodeNumber: 2,
      title: "第二集",
      defaultTransition: "fade",
      defaultTransitionDuration: 45,
      narratorEntrance: defaultNarratorEntrance,
      scenes: EP02_Scenes,
    },
    3: {
      episodeNumber: 3,
      title: "第三集",
      defaultTransition: "fade",
      defaultTransitionDuration: 45,
      narratorEntrance: defaultNarratorEntrance,
      scenes: [],
    },
    4: {
      episodeNumber: 4,
      title: "第四集",
      defaultTransition: "fade",
      defaultTransitionDuration: 45,
      narratorEntrance: defaultNarratorEntrance,
      scenes: [],
    },
    5: {
      episodeNumber: 5,
      title: "第五集",
      defaultTransition: "fade",
      defaultTransitionDuration: 45,
      narratorEntrance: defaultNarratorEntrance,
      scenes: [],
    },
    6: {
      episodeNumber: 6,
      title: "第六集",
      defaultTransition: "fade",
      defaultTransitionDuration: 45,
      narratorEntrance: defaultNarratorEntrance,
      scenes: [],
    },
    7: {
      episodeNumber: 7,
      title: "第七集",
      defaultTransition: "fade",
      defaultTransitionDuration: 45,
      narratorEntrance: defaultNarratorEntrance,
      scenes: [],
    },
    8: {
      episodeNumber: 8,
      title: "第八集",
      defaultTransition: "fade",
      defaultTransitionDuration: 45,
      narratorEntrance: defaultNarratorEntrance,
      scenes: [],
    },
    9: {
      episodeNumber: 9,
      title: "第九集",
      defaultTransition: "fade",
      defaultTransitionDuration: 45,
      narratorEntrance: defaultNarratorEntrance,
      scenes: [],
    },
    10: {
      episodeNumber: 10,
      title: "第十集",
      defaultTransition: "fade",
      defaultTransitionDuration: 45,
      narratorEntrance: defaultNarratorEntrance,
      scenes: [],
    },
    11: {
      episodeNumber: 11,
      title: "第十一集",
      defaultTransition: "fade",
      defaultTransitionDuration: 45,
      narratorEntrance: defaultNarratorEntrance,
      scenes: [],
    },
  };

  return episodeConfigs[episodeNumber] || {
    episodeNumber,
    title: `第${episodeNumber}集`,
    defaultTransition: "fade",
    defaultTransitionDuration: 45,
    narratorEntrance: defaultNarratorEntrance,
    scenes: [],
  };
}

/**
 * 常用场景动画配置模板
 */
export const sceneTemplates = {
  // 叙事场景
  narratorScene: (): SceneAnimationConfig => ({
    sceneId: "narrator",
    entranceTransition: { type: "fade", duration: 45 },
    narrator: {
      x: 30,
      y: 50,
      scale: 1.2,
      emotion: "neutral",
      gesture: "none",
      spotlight: "focus",
    },
  }),

  // 强调场景
  emphaticScene: (): SceneAnimationConfig => ({
    sceneId: "emphatic",
    entranceTransition: { type: "zoomIn", duration: 30 },
    particles: [
      { type: "keyMoment", frame: 0 },
    ],
    narrator: {
      x: 30,
      y: 50,
      scale: 1.3,
      emotion: "emphatic",
      gesture: "point",
      spotlight: "pulse",
    },
  }),

  // 过渡场景
  transitionScene: (direction: "left" | "right" | "up" | "down" = "left"): SceneAnimationConfig => ({
    sceneId: "transition",
    entranceTransition: {
      type: direction === "left" ? "slideLeft" : direction === "right" ? "slideRight" : "slideUp",
      duration: 30,
    },
  }),

  // 回忆场景
  memoryScene: (): SceneAnimationConfig => ({
    sceneId: "memory",
    entranceTransition: { type: "blur", duration: 45 },
    camera: {
      movement: "pan",
      direction: "left",
      duration: 120,
      amount: 30,
    },
    particles: [
      { type: "dust", frame: 0 },
    ],
  }),

  // 关键时刻
  keyMoment: (): SceneAnimationConfig => ({
    sceneId: "key_moment",
    entranceTransition: { type: "zoomIn", duration: 20 },
    particles: [
      { type: "keyMoment", frame: 0 },
      { type: "glow", frame: 30 },
    ],
    camera: {
      movement: "dolly",
      direction: "right",
      duration: 45,
    },
  }),

  // 平静场景
  calmScene: (): SceneAnimationConfig => ({
    sceneId: "calm",
    entranceTransition: { type: "fade", duration: 60 },
    camera: {
      movement: "pan",
      direction: "right",
      duration: 180,
      amount: 50,
    },
    narrator: {
      x: 30,
      y: 50,
      scale: 1.1,
      emotion: "calm",
      gesture: "none",
      spotlight: "focus",
    },
  }),
};

export default {
  getEpisodeConfig,
  sceneTemplates,
  defaultNarratorEntrance,
  defaultTransition,
};
