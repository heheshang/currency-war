/**
 * ThemedTransition - 主题式场景切换系统
 *
 * 提供电影级的场景切换效果
 * 支持主题式过渡、交叉溶解、形态变换等
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

// ============================================
// ThemedTransition - 主题式过渡
// ============================================

export type TransitionTheme =
  | "ancient" // 古代/历史感
  | "war" // 战争
  | "finance" // 金融
  | "conspiracy" // 阴谋
  | "triumph" // 胜利
  | "tragedy" // 悲剧
  | "mystery" // 神秘
  | "revelation"; // 揭示

export interface ThemedTransitionProps {
  children: React.ReactNode;
  /** 过渡主题 */
  theme?: TransitionTheme;
  /** 过渡类型 */
  type?: "enter" | "exit" | "cross";
  /** 开始帧 */
  startFrame?: number;
  /** 持续帧数 */
  duration?: number;
  /** 下一场景（用于cross类型） */
  nextScene?: React.ReactNode;
}

const themeConfigs: Record<
  TransitionTheme,
  {
    primaryColor: string;
    secondaryColor: string;
    bgGradient: string;
    particleColor: string;
  }
> = {
  ancient: {
    primaryColor: "#FFD700",
    secondaryColor: "#8B7355",
    bgGradient:
      "linear-gradient(180deg, #1a1510 0%, #2d2518 50%, #1a1510 100%)",
    particleColor: "#D4AF37",
  },
  war: {
    primaryColor: "#8B0000",
    secondaryColor: "#4A0000",
    bgGradient:
      "linear-gradient(180deg, #1a0a0a 0%, #2d1515 50%, #1a0a0a 100%)",
    particleColor: "#FF4500",
  },
  finance: {
    primaryColor: "#00FF7F",
    secondaryColor: "#006400",
    bgGradient:
      "linear-gradient(180deg, #0a1a12 0%, #152d1f 50%, #0a1a12 100%)",
    particleColor: "#FFD700",
  },
  conspiracy: {
    primaryColor: "#4B0082",
    secondaryColor: "#2E0854",
    bgGradient:
      "linear-gradient(180deg, #0a0a14 0%, #151528 50%, #0a0a14 100%)",
    particleColor: "#9932CC",
  },
  triumph: {
    primaryColor: "#FFD700",
    secondaryColor: "#FFA500",
    bgGradient:
      "linear-gradient(180deg, #1a1500 0%, #2d2800 50%, #1a1500 100%)",
    particleColor: "#FFFFFF",
  },
  tragedy: {
    primaryColor: "#696969",
    secondaryColor: "#2F4F4F",
    bgGradient:
      "linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)",
    particleColor: "#708090",
  },
  mystery: {
    primaryColor: "#483D8B",
    secondaryColor: "#191970",
    bgGradient:
      "linear-gradient(180deg, #0a0a1a 0%, #15152d 50%, #0a0a1a 100%)",
    particleColor: "#7B68EE",
  },
  revelation: {
    primaryColor: "#FFD700",
    secondaryColor: "#FFFFFF",
    bgGradient:
      "linear-gradient(180deg, #000000 0%, #1a1a00 50%, #000000 100%)",
    particleColor: "#FFD700",
  },
};

export const ThemedTransition: React.FC<ThemedTransitionProps> = ({
  children,
  theme = "ancient",
  type = "enter",
  startFrame = 0,
  duration = 45,
  nextScene,
}) => {
  const frame = useCurrentFrame();
  const config = themeConfigs[theme];

  const progress = interpolate(
    frame,
    [startFrame, startFrame + duration],
    [0, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
  );

  // 入场过渡
  if (type === "enter") {
    return (
      <AbsoluteFill>
        {/* 背景光晕 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 50% 50%, ${config.primaryColor}${Math.round(
              progress * 30,
            )
              .toString(16)
              .padStart(2, "0")} 0%, transparent 70%)`,
            opacity: progress,
          }}
        />

        {/* 内容入场 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: progress,
            transform: `translateY(${(1 - progress) * 50}px) scale(${0.9 + progress * 0.1})`,
          }}
        >
          {children}
        </div>

        {/* 顶部和底部渐变条 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: `linear-gradient(90deg, transparent, ${config.primaryColor}, transparent)`,
            opacity: progress,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: `linear-gradient(90deg, transparent, ${config.primaryColor}, transparent)`,
            opacity: progress,
          }}
        />
      </AbsoluteFill>
    );
  }

  // 出场过渡
  if (type === "exit") {
    return (
      <AbsoluteFill>
        {/* 内容出场 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 1 - progress,
            transform: `translateY(${progress * -50}px) scale(${1 - progress * 0.1})`,
          }}
        >
          {children}
        </div>

        {/* 淡出遮罩 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 50% 50%, transparent 0%, ${config.bgGradient.match(/#[a-fA-F0-9]{6}/)?.[0] ?? "#000"} 100%)`,
            opacity: progress,
          }}
        />
      </AbsoluteFill>
    );
  }

  // 交叉过渡
  if (type === "cross" && nextScene) {
    return (
      <AbsoluteFill style={{ background: config.bgGradient }}>
        {/* 当前场景淡出 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 1 - progress,
            transform: `scale(${1 + progress * 0.1})`,
          }}
        >
          {children}
        </div>

        {/* 中间过渡效果 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 50% 50%, ${config.primaryColor}40 0%, transparent 50%)`,
            opacity: progress < 0.5 ? progress * 2 : (1 - progress) * 2,
          }}
        />

        {/* 新场景淡入 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: progress,
            transform: `scale(${1.1 - progress * 0.1})`,
          }}
        >
          {nextScene}
        </div>
      </AbsoluteFill>
    );
  }

  return <AbsoluteFill>{children}</AbsoluteFill>;
};

// ============================================
// CrossFadeSequence - 交叉溶解序列
// ============================================

export interface CrossFadeSequenceProps {
  /** 场景序列 */
  scenes: Array<{
    content: React.ReactNode;
    duration: number;
    transitionDuration?: number;
  }>;
  /** 开始帧 */
  startFrame?: number;
  /** 溶解效果 */
  fadeEffect?: "simple" | "dissolve" | "lightRays" | "particles";
  /** 强调色 */
  accentColor?: string;
}

export const CrossFadeSequence: React.FC<CrossFadeSequenceProps> = ({
  scenes,
  startFrame = 0,
  fadeEffect = "dissolve",
  accentColor = "#FFD700",
}) => {
  const frame = useCurrentFrame();

  // 计算当前场景索引
  let currentSceneIndex = 0;
  let currentFrameInScene = frame - startFrame;
  let isTransitioning = false;
  let transitionProgress = 0;

  for (let i = 0; i < scenes.length; i++) {
    const scene = scenes[i];
    const sceneDuration = scene.duration;
    const transitionDur = scene.transitionDuration ?? 30;

    if (currentFrameInScene < sceneDuration) {
      currentSceneIndex = i;
      // 检查是否在过渡期
      if (
        currentFrameInScene > sceneDuration - transitionDur &&
        i < scenes.length - 1
      ) {
        isTransitioning = true;
        transitionProgress =
          (currentFrameInScene - (sceneDuration - transitionDur)) /
          transitionDur;
      }
      break;
    }
    currentFrameInScene -= sceneDuration;
  }

  const currentScene = scenes[currentSceneIndex];
  const nextScene = scenes[currentSceneIndex + 1];

  return (
    <AbsoluteFill style={{ background: "#0a0a0a" }}>
      {/* 当前场景 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: isTransitioning ? 1 - transitionProgress : 1,
          transform: isTransitioning
            ? `scale(${1 + transitionProgress * 0.05})`
            : "scale(1)",
        }}
      >
        {currentScene?.content}
      </div>

      {/* 过渡效果 */}
      {isTransitioning && fadeEffect !== "simple" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity:
              transitionProgress < 0.5
                ? transitionProgress * 2
                : (1 - transitionProgress) * 2,
            pointerEvents: "none",
          }}
        >
          {fadeEffect === "dissolve" && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(circle at 50% 50%, ${accentColor}20 0%, transparent 50%)`,
              }}
            />
          )}
          {fadeEffect === "lightRays" && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `conic-gradient(from 0deg at 50% 50%, 
                  transparent 0deg, 
                  ${accentColor}30 10deg, 
                  transparent 20deg,
                  transparent 90deg,
                  ${accentColor}30 100deg,
                  transparent 110deg
                )`,
              }}
            />
          )}
          {fadeEffect === "particles" && (
            <>
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: `${(i * 17) % 100}%`,
                    top: `${(i * 23) % 100}%`,
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: accentColor,
                    opacity:
                      transitionProgress < 0.5
                        ? transitionProgress * 2
                        : (1 - transitionProgress) * 2,
                    transform: `scale(${transitionProgress * 2})`,
                  }}
                />
              ))}
            </>
          )}
        </div>
      )}

      {/* 下一个场景 */}
      {isTransitioning && nextScene && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: transitionProgress,
            transform: `scale(${1.05 - transitionProgress * 0.05})`,
          }}
        >
          {nextScene.content}
        </div>
      )}
    </AbsoluteFill>
  );
};

// ============================================
// MorphingTransition - 形态变换过渡
// ============================================

export type MorphingType =
  | "circleWipe"
  | "diamondWipe"
  | "spiralWipe"
  | "shatter"
  | "ripple"
  | "glitch";

export interface MorphingTransitionProps {
  children: React.ReactNode;
  nextScene?: React.ReactNode;
  /** 变换类型 */
  morphType?: MorphingType;
  /** 开始帧 */
  startFrame?: number;
  /** 持续帧数 */
  duration?: number;
  /** 强调色 */
  accentColor?: string;
}

export const MorphingTransition: React.FC<MorphingTransitionProps> = ({
  children,
  nextScene,
  morphType = "circleWipe",
  startFrame = 0,
  duration = 60,
  accentColor = "#FFD700",
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [startFrame, startFrame + duration],
    [0, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
  );

  const getMorphStyle = (): React.CSSProperties => {
    switch (morphType) {
      case "circleWipe": {
        const radius = progress * 150;
        return {
          clipPath: `circle(${radius}% at 50% 50%)`,
        };
      }

      case "diamondWipe": {
        const size = progress * 100;
        return {
          clipPath: `polygon(${50 - size / 2}% 50%, 50% ${50 - size / 2}%, ${50 + size / 2}% 50%, 50% ${50 + size / 2}%)`,
        };
      }

      case "spiralWipe": {
        const angle = progress * 360;
        return {
          clipPath: `polygon(50% 50%, 50% 0%, ${50 + Math.cos((angle * Math.PI) / 180) * 50}% ${50 - Math.sin((angle * Math.PI) / 180) * 50}%)`,
        };
      }

      case "shatter": {
        // 简化的碎片效果
        const scale = 1 + progress * 0.3;
        const blur = (1 - progress) * 10;
        return {
          transform: `scale(${scale})`,
          filter: `blur(${blur}px)`,
          opacity: 1 - progress * 0.5,
        };
      }

      case "ripple": {
        const rippleRadius = progress * 100;
        return {
          clipPath: `polygon(
            ${rippleRadius}% ${rippleRadius}%,
            ${100 - rippleRadius}% ${rippleRadius}%,
            ${100 - rippleRadius}% ${100 - rippleRadius}%,
            ${rippleRadius}% ${100 - rippleRadius}%
          )`,
        };
      }

      case "glitch": {
        const glitchOffset = progress < 0.5 ? Math.sin(progress * 20) * 10 : 0;
        return {
          transform: `translateX(${glitchOffset}px)`,
          filter: `hue-rotate(${progress * 360}deg)`,
        };
      }

      default:
        return {};
    }
  };

  return (
    <AbsoluteFill>
      {/* 当前场景 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          ...getMorphStyle(),
        }}
      >
        {children}
      </div>

      {/* 边缘发光效果 */}
      {progress > 0 && progress < 1 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            boxShadow: `inset 0 0 ${50 * progress}px ${accentColor}50`,
            pointerEvents: "none",
          }}
        />
      )}

      {/* 下一个场景 */}
      {nextScene && progress > 0.5 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: (progress - 0.5) * 2,
            zIndex: -1,
          }}
        >
          {nextScene}
        </div>
      )}
    </AbsoluteFill>
  );
};

// ============================================
// CinematicCut - 电影剪辑效果
// ============================================

export type CutStyle =
  | "hard"
  | "soft"
  | "flash"
  | "sweep"
  | "iris"
  | "clockWipe";

export interface CinematicCutProps {
  children: React.ReactNode;
  nextScene?: React.ReactNode;
  /** 剪辑风格 */
  cutStyle?: CutStyle;
  /** 开始帧 */
  startFrame?: number;
  /** 持续帧数 */
  duration?: number;
}

export const CinematicCut: React.FC<CinematicCutProps> = ({
  children,
  nextScene,
  cutStyle = "soft",
  startFrame = 0,
  duration = 15,
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [startFrame, startFrame + duration],
    [0, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
  );

  // springProgress preserved for future use
  void spring({
    frame: frame - startFrame,
    fps: 30,
    config: { damping: 10, stiffness: 100 },
  });

  const getCutStyle = (): {
    current: React.CSSProperties;
    next: React.CSSProperties;
  } => {
    switch (cutStyle) {
      case "hard":
        return {
          current: { opacity: progress < 0.5 ? 1 : 0 },
          next: { opacity: progress >= 0.5 ? 1 : 0 },
        };

      case "soft":
        return {
          current: { opacity: 1 - progress },
          next: { opacity: progress },
        };

      case "flash":
        return {
          current: {
            opacity: progress < 0.3 ? 1 : 0,
            filter: `brightness(${progress < 0.3 ? 1 + progress * 3 : 0})`,
          },
          next: {
            opacity: progress >= 0.3 ? 1 : 0,
            filter: `brightness(${progress >= 0.3 ? (progress - 0.3) * 3 : 0})`,
          },
        };

      case "sweep":
        return {
          current: {
            clipPath: `inset(0 ${progress * 100}% 0 0)`,
          },
          next: {
            clipPath: `inset(0 0 0 ${(1 - progress) * 100}%)`,
          },
        };

      case "iris":
        return {
          current: {
            clipPath: `circle(${(1 - progress) * 50}% at 50% 50%)`,
          },
          next: {
            clipPath: `circle(${progress * 50}% at 50% 50%)`,
          },
        };

      case "clockWipe": {
        const angle = progress * 360;
        return {
          current: {
            clipPath: `polygon(50% 50%, 50% 0%, ${50 + Math.cos(((angle - 90) * Math.PI) / 180) * 50}% ${50 + Math.sin(((angle - 90) * Math.PI) / 180) * 50}%)`,
          },
          next: {
            clipPath: `polygon(50% 50%, 50% 0%, ${50 + Math.cos(((angle - 90) * Math.PI) / 180) * 50}% ${50 + Math.sin(((angle - 90) * Math.PI) / 180) * 50}%)`,
          },
        };
      };

      default:
        return { current: { opacity: 1 }, next: { opacity: 0 } };
    }
  };

  const styles = getCutStyle();

  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", inset: 0, ...styles.current }}>
        {children}
      </div>
      {nextScene && progress > 0.3 && (
        <div style={{ position: "absolute", inset: 0, ...styles.next }}>
          {nextScene}
        </div>
      )}
    </AbsoluteFill>
  );
};

// ============================================
// SceneDivider - 场景分割器
// ============================================

export interface SceneDividerProps {
  /** 开始帧 */
  startFrame?: number;
  /** 持续帧数 */
  duration?: number;
  /** 分割样式 */
  style?: "line" | "dots" | "gradient" | "particle";
  /** 颜色 */
  color?: string;
  /** 方向 */
  direction?: "horizontal" | "vertical";
}

export const SceneDivider: React.FC<SceneDividerProps> = ({
  startFrame = 0,
  duration = 30,
  style = "gradient",
  color = "#FFD700",
  direction = "horizontal",
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [startFrame, startFrame + duration],
    [0, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
  );

  const isHorizontal = direction === "horizontal";

  return (
    <div
      style={{
        position: "absolute",
        [isHorizontal ? "top" : "left"]: "50%",
        [isHorizontal ? "left" : "top"]: 0,
        [isHorizontal ? "right" : "bottom"]: 0,
        [isHorizontal ? "height" : "width"]: isHorizontal ? 2 : 2,
        transform: isHorizontal ? "translateY(-50%)" : "translateX(-50%)",
        overflow: "hidden",
      }}
    >
      {style === "line" && (
        <div
          style={{
            width: isHorizontal ? `${progress * 100}%` : "100%",
            height: isHorizontal ? "100%" : `${progress * 100}%`,
            background: color,
          }}
        />
      )}

      {style === "dots" && (
        <div
          style={{
            display: "flex",
            gap: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: color,
                opacity: progress > i * 0.2 ? 1 : 0,
                transform: progress > i * 0.2 ? "scale(1)" : "scale(0)",
              }}
            />
          ))}
        </div>
      )}

      {style === "gradient" && (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `linear-gradient(${isHorizontal ? "90deg" : "180deg"}, transparent, ${color}, transparent)`,
            opacity: progress,
          }}
        />
      )}
    </div>
  );
};
