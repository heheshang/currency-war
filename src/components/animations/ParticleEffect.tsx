import React, { useEffect, useRef } from "react";
import { useCurrentFrame } from "remotion";
import confetti from "canvas-confetti";

/**
 * ParticleEffect - 粒子效果组件
 *
 * 使用canvas-confetti库创建高性能粒子效果
 * 支持金币雨、光芒、烟花等多种效果
 */
interface ParticleEffectProps {
  effectType: "coins" | "sparkles" | "fireworks" | "snow";
  startFrame?: number;
  duration?: number;
  particleCount?: number;
  colors?: string[];
}

export const ParticleEffect: React.FC<ParticleEffectProps> = ({
  effectType,
  startFrame = 0,
  duration = 60,
  particleCount = 100,
  colors,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frame = useCurrentFrame();

  useEffect(() => {
    if (frame < startFrame || frame > startFrame + duration) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const triggerFrame = frame - startFrame;

    const baseConfig = {
      particleCount,
      colors: colors || ["#FFD700"],
      origin: { y: 0.5, x: 0.5 } as const,
    };

    // 金币雨效果：持续发射
    if (effectType === "coins" && triggerFrame % 10 === 0) {
      confetti({
        ...baseConfig,
        particleCount: particleCount / 10,
        angle: 270,
        startVelocity: 30,
        spread: 70,
        gravity: 1.5,
        drift: 0.5,
        scalar: 1.2,
      });
    }

    // 光芒效果：向四周扩散
    if (effectType === "sparkles" && triggerFrame % 5 === 0) {
      const angle = (triggerFrame * 36) % 360;
      confetti({
        particleCount: 10,
        spread: 30,
        origin: { y: 0.5, x: 0.5 } as const,
        colors: colors || ["#FFD700", "#FFFACD"],
        angle,
        startVelocity: 15,
        gravity: 0,
        scalar: 0.8,
      });
    }

    // 烟花效果：一次性爆炸
    if (effectType === "fireworks" && triggerFrame === 0) {
      confetti({
        ...baseConfig,
        particleCount,
        spread: 120,
        startVelocity: 50,
        gravity: 0.5,
        scalar: 1.5,
      });
    }

    // 雪花效果：持续飘落
    if (effectType === "snow" && triggerFrame % 5 === 0) {
      confetti({
        ...baseConfig,
        particleCount: particleCount / 5,
        angle: 270,
        startVelocity: 10,
        spread: 100,
        gravity: 0.3,
        drift: 1,
        scalar: 0.6,
      });
    }
  }, [frame, startFrame, duration, effectType, particleCount, colors]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 100,
      }}
    />
  );
};

/**
 * GoldCoinRain - 金币雨效果
 * 专门用于货币和财富相关场景
 */
export const GoldCoinRain: React.FC<{
  startFrame?: number;
  duration?: number;
  intensity?: "light" | "medium" | "heavy";
}> = ({ startFrame = 0, duration = 60, intensity = "medium" }) => {
  const particleCount = {
    light: 50,
    medium: 100,
    heavy: 200,
  }[intensity];

  return (
    <ParticleEffect
      effectType="coins"
      startFrame={startFrame}
      duration={duration}
      particleCount={particleCount}
      colors={["#FFD700", "#FFA500", "#DAA520", "#B8860B"]}
    />
  );
};

/**
 * SparkleEffect - 光芒闪烁效果
 * 用于强调重要元素
 */
export const SparkleEffect: React.FC<{
  startFrame?: number;
  duration?: number;
}> = ({ startFrame = 0, duration = 30 }) => {
  return (
    <ParticleEffect
      effectType="sparkles"
      startFrame={startFrame}
      duration={duration}
      particleCount={50}
      colors={["#FFD700", "#FFFACD", "#FFF8DC", "#FFFFE0"]}
    />
  );
};

/**
 * FireworksEffect - 烟花爆炸效果
 * 用于庆祝或重要转折点
 */
export const FireworksEffect: React.FC<{
  startFrame?: number;
  duration?: number;
}> = ({ startFrame = 0, duration = 60 }) => {
  return (
    <ParticleEffect
      effectType="fireworks"
      startFrame={startFrame}
      duration={duration}
      particleCount={150}
      colors={["#FF4500", "#FFD700", "#00BFFF", "#32CD32", "#FF69B4"]}
    />
  );
};
