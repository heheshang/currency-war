/**
 * NarratorEnhancement - 叙事者增强组件
 *
 * 增强叙述者角色的动画表现
 * 集成现有的 CartoonCharacter 系统，提供情绪表达、手势、镜头聚焦效果
 */

import React from "react";
import { interpolate } from "remotion";
import { CartoonCharacter } from "../characters/CartoonCharacter";

export type NarratorEmotion = "neutral" | "serious" | "thinking" | "emphatic" | "surprised" | "calm";

export type NarratorGesture = "none" | "wave" | "point" | "nod" | "shake" | "openHands" | "foldArms";

export type SpotlightMode = "none" | "entrance" | "exit" | "focus" | "pulse";

interface NarratorEnhancementProps {
  /** 帧数（从父组件传入） */
  frame: number;
  /** 叙事者位置 X (百分比) */
  x?: number;
  /** 叙事者位置 Y (百分比) */
  y?: number;
  /** 缩放 */
  scale?: number;
  /** 朝向（true = 向右） */
  facingRight?: boolean;
  /** 服装颜色 */
  clothColor?: string;
  /** 皮肤颜色 */
  skinColor?: string;
  /** 情绪状态 */
  emotion?: NarratorEmotion;
  /** 手势 */
  gesture?: NarratorGesture;
  /** 聚光灯模式 */
  spotlight?: SpotlightMode;
  /** 聚光灯颜色 */
  spotlightColor?: string;
  /** 情绪过渡起始帧 */
  emotionStartFrame?: number;
  /** 情绪过渡持续帧 */
  emotionDuration?: number;
  /** 手势过渡起始帧 */
  gestureStartFrame?: number;
  /** 手势持续帧 */
  gestureDuration?: number;
  /** 聚光灯起始帧 */
  spotlightStartFrame?: number;
  /** 聚光灯持续帧 */
  spotlightDuration?: number;
  /** 自定义 className */
  className?: string;
}

/**
 * 计算情绪动画
 */
function getEmotionAnimation(
  frame: number,
  emotion: NarratorEmotion,
  startFrame: number,
  duration: number
): { scale: number; rotation: number; bounce: number } {
  const progress = interpolate(
    frame,
    [startFrame, startFrame + duration],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  // 缓动
  const eased = progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

  switch (emotion) {
    case "serious":
      return {
        scale: 1,
        rotation: 0,
        bounce: eased * 2, // 轻微上下移动
      };
    case "thinking":
      return {
        scale: 0.95 + eased * 0.05,
        rotation: eased * 5, // 微微倾斜
        bounce: 0,
      };
    case "emphatic":
      return {
        scale: 1 + eased * 0.1,
        rotation: 0,
        bounce: eased * 8, // 强调时的动作
      };
    case "surprised":
      return {
        scale: 1 + eased * 0.15,
        rotation: 0,
        bounce: eased * 10,
      };
    case "calm":
      return {
        scale: 1,
        rotation: 0,
        bounce: eased * 1,
      };
    case "neutral":
    default:
      return {
        scale: 1,
        rotation: 0,
        bounce: 0,
      };
  }
}

/**
 * 计算手势动画
 */
function getGestureAnimation(
  frame: number,
  gesture: NarratorGesture,
  startFrame: number,
  duration: number
): { armAngle: number; headTilt: number; bodyTilt: number } {
  const progress = interpolate(
    frame,
    [startFrame, startFrame + duration],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  switch (gesture) {
    case "wave":
      return {
        armAngle: Math.sin(progress * Math.PI * 4) * 45,
        headTilt: 0,
        bodyTilt: Math.sin(progress * Math.PI * 2) * 3,
      };
    case "point":
      return {
        armAngle: -60,
        headTilt: 5 * progress,
        bodyTilt: 5 * progress,
      };
    case "nod":
      return {
        armAngle: 0,
        headTilt: Math.sin(progress * Math.PI * 3) * 8,
        bodyTilt: 0,
      };
    case "shake":
      return {
        armAngle: 0,
        headTilt: Math.sin(progress * Math.PI * 4) * -5,
        bodyTilt: Math.sin(progress * Math.PI * 4) * 3,
      };
    case "openHands":
      return {
        armAngle: -30 + Math.sin(progress * Math.PI * 2) * 10,
        headTilt: 0,
        bodyTilt: 0,
      };
    case "foldArms":
      return {
        armAngle: 30,
        headTilt: 0,
        bodyTilt: 0,
      };
    case "none":
    default:
      return {
        armAngle: 0,
        headTilt: 0,
        bodyTilt: 0,
      };
  }
}

/**
 * NarratorEnhancement - 叙事者增强组件
 *
 * @example
 * // 基础使用
 * <NarratorEnhancement frame={frame} x={30} y={50} />
 *
 * // 带情绪和手势
 * <NarratorEnhancement
 *   frame={frame}
 *   emotion="emphatic"
 *   gesture="point"
 *   emotionStartFrame={60}
 *   gestureStartFrame={90}
 * />
 *
 * // 带聚光灯效果
 * <NarratorEnhancement
 *   frame={frame}
 *   spotlight="entrance"
 *   spotlightStartFrame={0}
 * />
 */
export const NarratorEnhancement: React.FC<NarratorEnhancementProps> = ({
  frame,
  x = 30,
  y = 50,
  scale = 1,
  facingRight = true,
  clothColor,
  skinColor,
  emotion = "neutral",
  gesture = "none",
  spotlight = "none",
  spotlightColor = "#ffd700",
  emotionStartFrame = 0,
  emotionDuration = 30,
  gestureStartFrame = 0,
  gestureDuration = 60,
  spotlightStartFrame = 0,
  spotlightDuration = 60,
  className,
}) => {
  // 计算情绪动画
  const emotionAnim = getEmotionAnimation(frame, emotion, emotionStartFrame, emotionDuration);

  // 计算手势动画
  const gestureAnim = getGestureAnimation(frame, gesture, gestureStartFrame, gestureDuration);

  // 计算聚光灯效果
  const getSpotlightStyle = (): React.CSSProperties => {
    if (spotlight === "none") return { opacity: 0 };

    const progress = interpolate(
      frame,
      [spotlightStartFrame, spotlightStartFrame + spotlightDuration],
      [0, 1],
      { extrapolateRight: "clamp" }
    );

    switch (spotlight) {
      case "entrance": {
        const radius = progress * 400;
        const opacity = progress;
        return {
          position: "absolute",
          top: `${y}%`,
          left: `${x}%`,
          width: radius * 2,
          height: radius * 2,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${spotlightColor}33 0%, transparent 70%)`,
          opacity,
          pointerEvents: "none",
          zIndex: 10,
        };
      }
      case "exit": {
        const radius = 400 - progress * 400;
        const opacity = 1 - progress;
        return {
          position: "absolute",
          top: `${y}%`,
          left: `${x}%`,
          width: radius * 2,
          height: radius * 2,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${spotlightColor}33 0%, transparent 70%)`,
          opacity,
          pointerEvents: "none",
          zIndex: 10,
        };
      }
      case "focus": {
        const opacity = 0.3 + progress * 0.4;
        return {
          position: "absolute",
          top: `${y}%`,
          left: `${x}%`,
          width: 400,
          height: 400,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${spotlightColor}22 0%, transparent 70%)`,
          opacity,
          pointerEvents: "none",
          zIndex: 10,
        };
      }
      case "pulse": {
        const pulseScale = 1 + Math.sin(progress * Math.PI * 2) * 0.2;
        const opacity = 0.4 + Math.sin(progress * Math.PI * 2) * 0.2;
        return {
          position: "absolute",
          top: `${y}%`,
          left: `${x}%`,
          width: 400 * pulseScale,
          height: 400 * pulseScale,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${spotlightColor}22 0%, transparent 70%)`,
          opacity,
          pointerEvents: "none",
          zIndex: 10,
        };
      }
      default:
        return { opacity: 0 };
    }
  };

  // 组合最终的变换
  const getFinalTransform = (): string => {
    const baseTransform = `translate(-50%, -50%) scale(${scale * emotionAnim.scale})`;
    const emotionTransform = `rotate(${emotionAnim.rotation}deg)`;
    const gestureTransform = `translateY(${-gestureAnim.bodyTilt}px)`;
    return `${baseTransform} ${emotionTransform} ${gestureTransform}`;
  };

  return (
    <div className={className} style={{ position: "absolute", inset: 0 }}>
      {/* 聚光灯效果 */}
      <div style={getSpotlightStyle()} />

      {/* 叙事者角色 */}
      <div
        style={{
          position: "absolute",
          left: `${x}%`,
          top: `${y}%`,
          transform: getFinalTransform(),
          willChange: "transform",
        }}
      >
        <CartoonCharacter
          x={0}
          y={0}
          scale={scale}
          characterType="narrator"
          action={gesture === "wave" ? "wave" : gesture === "point" ? "point" : "idle"}
          clothColor={clothColor}
          skinColor={skinColor}
          facingRight={facingRight}
          frame={frame + emotionAnim.bounce * 10}
        />
      </div>
    </div>
  );
};

/**
 * NarratorSpotlight - 独立的聚光灯效果
 */
interface NarratorSpotlightProps {
  frame: number;
  x: number;
  y: number;
  mode: SpotlightMode;
  color?: string;
  startFrame?: number;
  duration?: number;
}

export const NarratorSpotlight: React.FC<NarratorSpotlightProps> = ({
  frame,
  x,
  y,
  mode,
  color = "#ffd700",
  startFrame = 0,
  duration = 60,
}) => {
  const progress = interpolate(
    frame,
    [startFrame, startFrame + duration],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  if (mode === "none") return null;

  const getSpotlightStyle = (): React.CSSProperties => {
    switch (mode) {
      case "entrance": {
        const radius = progress * 500;
        return {
          position: "absolute",
          top: `${y}%`,
          left: `${x}%`,
          width: radius * 2,
          height: radius * 2,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
          opacity: progress,
          pointerEvents: "none",
        };
      }
      case "exit": {
        const radius = 500 - progress * 500;
        return {
          position: "absolute",
          top: `${y}%`,
          left: `${x}%`,
          width: radius * 2,
          height: radius * 2,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
          opacity: 1 - progress,
          pointerEvents: "none",
        };
      }
      case "focus": {
        return {
          position: "absolute",
          top: `${y}%`,
          left: `${x}%`,
          width: 500,
          height: 500,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${color}30 0%, transparent 70%)`,
          opacity: 0.5,
          pointerEvents: "none",
        };
      }
      case "pulse": {
        const pulseScale = 1 + Math.sin(progress * Math.PI * 4) * 0.15;
        return {
          position: "absolute",
          top: `${y}%`,
          left: `${x}%`,
          width: 500 * pulseScale,
          height: 500 * pulseScale,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${color}30 0%, transparent 70%)`,
          opacity: 0.6,
          pointerEvents: "none",
        };
      }
      default:
        return {};
    }
  };

  return <div style={getSpotlightStyle()} />;
};

/**
 * ThinkingBubble - 思考气泡
 */
interface ThinkingBubbleProps {
  frame: number;
  x: number;
  y: number;
  visible?: boolean;
  startFrame?: number;
  duration?: number;
}

export const ThinkingBubble: React.FC<ThinkingBubbleProps> = ({
  frame,
  x,
  y,
  visible = true,
  startFrame = 0,
  duration = 120,
}) => {
  if (!visible) return null;

  const progress = interpolate(
    frame,
    [startFrame, startFrame + 30, startFrame + duration - 30, startFrame + duration],
    [0, 1, 1, 0],
    { extrapolateRight: "clamp" }
  );

  const scale = progress;
  const opacity = progress;

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity,
        pointerEvents: "none",
      }}
    >
      <svg width="120" height="80" viewBox="0 0 120 80">
        {/* 气泡主体 */}
        <ellipse cx="60" cy="35" rx="55" ry="30" fill="rgba(255,255,255,0.9)" />
        {/* 气泡尾巴 */}
        <polygon points="30,60 45,75 50,58" fill="rgba(255,255,255,0.9)" />
        <polygon points="35,58 45,70 48,58" fill="#0d1117" />
        {/* 省略号 */}
        <circle cx="45" cy="35" r="4" fill="#1a1a1a" />
        <circle cx="60" cy="35" r="4" fill="#1a1a1a" />
        <circle cx="75" cy="35" r="4" fill="#1a1a1a" />
      </svg>
    </div>
  );
};

/**
 * SpeechBubble - 对话气泡
 */
interface SpeechBubbleProps {
  frame: number;
  x: number;
  y: number;
  text?: string;
  visible?: boolean;
  startFrame?: number;
  duration?: number;
}

export const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  frame,
  x,
  y,
  text,
  visible = true,
  startFrame = 0,
  duration = 120,
}) => {
  if (!visible) return null;

  const progress = interpolate(
    frame,
    [startFrame, startFrame + 30, startFrame + duration - 30, startFrame + duration],
    [0, 1, 1, 0],
    { extrapolateRight: "clamp" }
  );

  const scale = progress;
  const opacity = progress;

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity,
        pointerEvents: "none",
      }}
    >
      <svg width="200" height="100" viewBox="0 0 200 100">
        {/* 气泡主体 */}
        <rect x="10" y="10" width="180" height="60" rx="10" fill="rgba(255,255,255,0.95)" />
        {/* 气泡尾巴 */}
        <polygon points="30,70 50,70" fill="rgba(255,255,255,0,85 45.95)" />
        <polygon points="35,70 45,80 42,70" fill="#0d1117" />
        {/* 文字占位 */}
        {text && (
          <text x="100" y="45" textAnchor="middle" fontSize="14" fill="#1a1a1a" fontFamily="sans-serif">
            {text}
          </text>
        )}
      </svg>
    </div>
  );
};

/**
 * NarratorPreset - 预设的叙事者动画组合
 */

// 叙事者出场预设
export const NarratorEntrance: React.FC<{
  frame: number;
  x?: number;
  y?: number;
  scale?: number;
}> = ({ frame, x = 30, y = 50, scale = 1.2 }) => (
  <NarratorEnhancement
    frame={frame}
    x={x}
    y={y}
    scale={scale}
    emotion="neutral"
    spotlight="entrance"
    spotlightColor="#ffd700"
    spotlightStartFrame={0}
    spotlightDuration={45}
  />
);

// 叙事者退场预设
export const NarratorExit: React.FC<{
  frame: number;
  x?: number;
  y?: number;
  scale?: number;
}> = ({ frame, x = 30, y = 50, scale = 1.2 }) => (
  <NarratorEnhancement
    frame={frame}
    x={x}
    y={y}
    scale={scale}
    emotion="calm"
    spotlight="exit"
    spotlightColor="#ffd700"
    spotlightStartFrame={0}
    spotlightDuration={45}
  />
);

// 叙事者讲述预设（带手势）
export const NarratorSpeaking: React.FC<{
  frame: number;
  x?: number;
  y?: number;
  scale?: number;
  emotion?: NarratorEmotion;
  gesture?: NarratorGesture;
}> = ({ frame, x = 30, y = 50, scale = 1.2, emotion = "neutral", gesture = "none" }) => (
  <NarratorEnhancement
    frame={frame}
    x={x}
    y={y}
    scale={scale}
    emotion={emotion}
    gesture={gesture}
    spotlight="focus"
    spotlightColor="#ffd700"
  />
);

// 叙事者强调预设
export const NarratorEmphatic: React.FC<{
  frame: number;
  x?: number;
  y?: number;
  scale?: number;
  gesture?: NarratorGesture;
}> = ({ frame, x = 30, y = 50, scale = 1.2, gesture = "point" }) => (
  <NarratorEnhancement
    frame={frame}
    x={x}
    y={y}
    scale={scale}
    emotion="emphatic"
    gesture={gesture}
    emotionStartFrame={0}
    emotionDuration={30}
    gestureStartFrame={30}
    gestureDuration={60}
    spotlight="pulse"
    spotlightColor="#ffd700"
  />
);
