/**
 * Animation Presets - 动画预设库
 *
 * 预定义的动画效果组合，用于快速应用常见的动画模式
 */

import React from "react";
import {
  CinematicFade,
  CinematicSlide,
  CinematicZoom,
  SceneCut,
} from "./SceneTransition";
import {
  NarratorEntrance,
  NarratorSpeaking,
  NarratorEmphatic,
} from "../characters/NarratorEnhancement";
import {
  SlowPan,
  DollyIn,
  DollyOut,
  ImpactShake,
  CinematicKenBurns,
} from "./CinematicCamera";
import {
  CinematicTitle,
  CinematicDivider,
  CinematicStat,
  CinematicQuote,
  GlowText,
} from "./UIAnimations";
import {
  GoldCoinRain,
  SparkleEffect,
  FireworksEffect,
  GlowParticles,
  KeyMomentEffect,
  DustMotes,
} from "./ParticleEffect";

// ============================================
// 预设类型定义
// ============================================

export interface PresetConfig {
  /** 预设名称 */
  name: string;
  /** 预设描述 */
  description: string;
  /** 预设组件 */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.FC<any>;
  /** 默认配置 */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultProps?: Record<string, any>;
}

// ============================================
// 叙事者动画预设
// ============================================

export const narratorEntrance: PresetConfig = {
  name: "Narrator Entrance",
  description: "叙事者出场动画，包含聚光灯效果",
  component: NarratorEntrance,
  defaultProps: {
    x: 30,
    y: 50,
    scale: 1.2,
    spotlightColor: "#ffd700",
    spotlightDuration: 45,
  },
};

export const narratorSpeaking: PresetConfig = {
  name: "Narrator Speaking",
  description: "叙事者讲述动画，带情绪和手势",
  component: NarratorSpeaking,
  defaultProps: {
    x: 30,
    y: 50,
    scale: 1.2,
    emotion: "neutral",
    gesture: "none",
    spotlight: "focus",
  },
};

export const narratorEmphatic: PresetConfig = {
  name: "Narrator Emphatic",
  description: "叙事者强调动画，用于强调重要内容",
  component: NarratorEmphatic,
  defaultProps: {
    x: 30,
    y: 50,
    scale: 1.2,
    gesture: "point",
    emotion: "emphatic",
  },
};

// ============================================
// 场景过渡预设
// ============================================

export const sceneTransitionFade: PresetConfig = {
  name: "Scene Transition - Fade",
  description: "淡入淡出过渡",
  component: CinematicFade,
  defaultProps: {
    duration: 45,
    easing: "easeInOutCubic",
  },
};

export const sceneTransitionSlide: PresetConfig = {
  name: "Scene Transition - Slide",
  description: "滑动过渡",
  component: CinematicSlide,
  defaultProps: {
    direction: "left",
    duration: 30,
  },
};

export const sceneTransitionZoom: PresetConfig = {
  name: "Scene Transition - Zoom",
  description: "缩放过渡",
  component: CinematicZoom,
  defaultProps: {
    direction: "in",
    duration: 40,
  },
};

export const sceneTransitionCut: PresetConfig = {
  name: "Scene Cut",
  description: "场景切换（带遮罩）",
  component: SceneCut,
  defaultProps: {
    overlayType: "black",
    duration: 30,
  },
};

// ============================================
// 镜头效果预设
// ============================================

export const cameraSlowPan: PresetConfig = {
  name: "Camera Slow Pan",
  description: "缓慢平移镜头",
  component: SlowPan,
  defaultProps: {
    direction: "right",
    amount: 50,
    duration: 120,
  },
};

export const cameraDollyIn: PresetConfig = {
  name: "Camera Dolly In",
  description: "推进镜头",
  component: DollyIn,
  defaultProps: {
    scale: 1.5,
    duration: 60,
  },
};

export const cameraDollyOut: PresetConfig = {
  name: "Camera Dolly Out",
  description: "拉出镜头",
  component: DollyOut,
  defaultProps: {
    scale: 0.7,
    duration: 60,
  },
};

export const cameraImpactShake: PresetConfig = {
  name: "Camera Impact Shake",
  description: "冲击震动效果",
  component: ImpactShake,
  defaultProps: {
    intensity: "medium",
    duration: 30,
  },
};

export const cameraKenBurns: PresetConfig = {
  name: "Ken Burns Effect",
  description: "肯·布朗斯效果",
  component: CinematicKenBurns,
  defaultProps: {
    direction: "in",
    panDirection: "right",
    duration: 180,
  },
};

// ============================================
// UI 动画预设
// ============================================

export const uiTitleCinematic: PresetConfig = {
  name: "Cinematic Title",
  description: "电影感标题动画",
  component: CinematicTitle,
  defaultProps: {
    effect: "cinematic",
    direction: "center",
    duration: 45,
    textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
  },
};

export const uiQuote: PresetConfig = {
  name: "Cinematic Quote",
  description: "电影感引言动画",
  component: CinematicQuote,
  defaultProps: {
    duration: 30,
    showBorder: true,
    borderColor: "#ffd700",
  },
};

export const uiStat: PresetConfig = {
  name: "Cinematic Stat",
  description: "电影感数据统计动画",
  component: CinematicStat,
  defaultProps: {
    duration: 60,
    color: "#ffd700",
    showCounting: true,
    format: "number",
  },
};

export const uiDivider: PresetConfig = {
  name: "Cinematic Divider",
  description: "电影感分割线",
  component: CinematicDivider,
  defaultProps: {
    type: "glow",
    color: "#ffd700",
    duration: 30,
  },
};

export const uiGlowText: PresetConfig = {
  name: "Glow Text",
  description: "发光文字效果",
  component: GlowText,
  defaultProps: {
    color: "#ffd700",
    intensity: 1,
    duration: 30,
  },
};

// ============================================
// 粒子效果预设
// ============================================

export const particleGoldRain: PresetConfig = {
  name: "Gold Coin Rain",
  description: "金币雨效果",
  component: GoldCoinRain,
  defaultProps: {
    intensity: "medium",
    duration: 60,
  },
};

export const particleSparkle: PresetConfig = {
  name: "Sparkle Effect",
  description: "光芒闪烁效果",
  component: SparkleEffect,
  defaultProps: {
    duration: 30,
  },
};

export const particleFireworks: PresetConfig = {
  name: "Fireworks",
  description: "烟花爆炸效果",
  component: FireworksEffect,
  defaultProps: {
    duration: 60,
  },
};

export const particleGlow: PresetConfig = {
  name: "Glow Particles",
  description: "光点粒子效果",
  component: GlowParticles,
  defaultProps: {
    intensity: "medium",
    duration: 120,
  },
};

export const particleKeyMoment: PresetConfig = {
  name: "Key Moment",
  description: "关键时刻特效",
  component: KeyMomentEffect,
  defaultProps: {
    type: "radiance",
  },
};

export const particleDust: PresetConfig = {
  name: "Dust Motes",
  description: "漂浮尘埃粒子",
  component: DustMotes,
  defaultProps: {
    duration: 180,
    intensity: 0.5,
  },
};

// ============================================
// 预设组合工厂
// ============================================

/**
 * 创建叙事者动画组合
 * 注意：由于 JSX 解析限制，返回 React 元素而非组件
 */
export function createNarratorPreset(
  type: "entrance" | "speaking" | "emphatic",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
customProps?: Record<string, any>
) {
  const preset = {
    entrance: narratorEntrance,
    speaking: narratorSpeaking,
    emphatic: narratorEmphatic,
  }[type];

  return { ...preset, customProps };
}

/**
 * 创建场景过渡组合
 */
export function createTransitionPreset(
  type: "fade" | "slide" | "zoom" | "cut",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
customProps?: Record<string, any>
) {
  const components: Record<string, PresetConfig> = {
    fade: sceneTransitionFade,
    slide: sceneTransitionSlide,
    zoom: sceneTransitionZoom,
    cut: sceneTransitionCut,
  };

  return { ...components[type], customProps };
}

/**
 * 创建UI动画组合
 */
export function createUIPreset(
  type: "title" | "quote" | "stat" | "divider" | "glow",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
customProps?: Record<string, any>
) {
  const presets: Record<string, PresetConfig> = {
    title: uiTitleCinematic,
    quote: uiQuote,
    stat: uiStat,
    divider: uiDivider,
    glow: uiGlowText,
  };

  return { ...presets[type], customProps };
}

/**
 * 创建粒子效果组合
 */
export function createParticlePreset(
  type: "goldRain" | "sparkle" | "fireworks" | "glow" | "keyMoment" | "dust",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
customProps?: Record<string, any>
) {
  const preset = {
    goldRain: particleGoldRain,
    sparkle: particleSparkle,
    fireworks: particleFireworks,
    glow: particleGlow,
    keyMoment: particleKeyMoment,
    dust: particleDust,
  }[type];

  return { ...preset, customProps };
}

// ============================================
// 预设导出
// ============================================

export const animationPresets = {
  narrator: {
    entrance: narratorEntrance,
    speaking: narratorSpeaking,
    emphatic: narratorEmphatic,
  },
  transition: {
    fade: sceneTransitionFade,
    slide: sceneTransitionSlide,
    zoom: sceneTransitionZoom,
    cut: sceneTransitionCut,
  },
  camera: {
    slowPan: cameraSlowPan,
    dollyIn: cameraDollyIn,
    dollyOut: cameraDollyOut,
    impactShake: cameraImpactShake,
    kenBurns: cameraKenBurns,
  },
  ui: {
    title: uiTitleCinematic,
    quote: uiQuote,
    stat: uiStat,
    divider: uiDivider,
    glowText: uiGlowText,
  },
  particles: {
    goldRain: particleGoldRain,
    sparkle: particleSparkle,
    fireworks: particleFireworks,
    glow: particleGlow,
    keyMoment: particleKeyMoment,
    dust: particleDust,
  },
};

export default animationPresets;
