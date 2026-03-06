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

// ============================================
// 增强的粒子效果
// ============================================

/**
 * GlowParticles - 光点粒子效果
 * 用于营造神秘或神圣的氛围
 */
export const GlowParticles: React.FC<{
  startFrame?: number;
  duration?: number;
  intensity?: "light" | "medium" | "heavy";
}> = ({ startFrame = 0, duration = 120, intensity = "medium" }) => {
  const particleCount = {
    light: 30,
    medium: 60,
    heavy: 100,
  }[intensity];

  return (
    <ParticleEffect
      effectType="sparkles"
      startFrame={startFrame}
      duration={duration}
      particleCount={particleCount}
      colors={["#FFD700", "#FFFACD", "#E6E6FA", "#87CEEB"]}
    />
  );
};

/**
 * SmokeEffect - 烟雾效果
 * 用于营造氛围或隐藏元素
 */
export const SmokeEffect: React.FC<{
  startFrame?: number;
  duration?: number;
}> = ({ startFrame = 0, duration = 60 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frame = useCurrentFrame();

  useEffect(() => {
    if (frame < startFrame || frame > startFrame + duration) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const triggerFrame = frame - startFrame;

    // 烟雾效果 - 缓慢上升
    if (triggerFrame % 15 === 0) {
      // 使用触发帧作为种子生成伪随机位置
      const seed = triggerFrame;
      const xPos = 0.3 + ((seed * 0.618033988749895) % 1) * 0.4;
      confetti({
        particleCount: 5,
        spread: 60,
        origin: { y: 0.9, x: xPos } as const,
        colors: ["#808080", "#A9A9A9", "#C0C0C0"],
        startVelocity: 5,
        gravity: -0.5,
        scalar: 2,
      });
    }
  }, [frame, startFrame, duration]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 50,
      }}
    />
  );
};

/**
 * DramaticReveal - 戏剧性揭示效果
 * 用于关键信息揭示时的粒子爆发
 */
export const DramaticReveal: React.FC<{
  startFrame?: number;
  color?: string;
}> = ({ startFrame = 0, color = "#FFD700" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frame = useCurrentFrame();

  useEffect(() => {
    if (frame !== startFrame) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // 爆发效果
    confetti({
      particleCount: 200,
      spread: 180,
      origin: { y: 0.5, x: 0.5 } as const,
      colors: [color, "#FFFFFF", "#FFA500"],
      startVelocity: 80,
      gravity: 0.3,
      scalar: 1.5,
    });
  }, [frame, startFrame, color]);

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
 * KeyMomentEffect - 关键时刻特效
 * 用于叙事中的重要时刻
 */
export const KeyMomentEffect: React.FC<{
  startFrame?: number;
  type?: "explosion" | "radiance" | "shockwave";
}> = ({ startFrame = 0, type = "radiance" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frame = useCurrentFrame();

  useEffect(() => {
    if (frame !== startFrame) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    switch (type) {
      case "explosion":
        // 爆炸效果
        confetti({
          particleCount: 300,
          spread: 150,
          origin: { y: 0.5, x: 0.5 } as const,
          colors: ["#FFD700", "#FF4500", "#FFA500", "#FF6347"],
          startVelocity: 100,
          gravity: 0.2,
          scalar: 2,
        });
        break;
      case "radiance":
        // 光辉效果 - 多方向发射
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          confetti({
            particleCount: 30,
            spread: 20,
            origin: { y: 0.5, x: 0.5 } as const,
            colors: ["#FFD700", "#FFFACD", "#FFFFFF"],
            angle: angle * (180 / Math.PI),
            startVelocity: 50,
            gravity: 0,
            scalar: 1,
          });
        }
        break;
      case "shockwave":
        // 冲击波效果
        confetti({
          particleCount: 100,
          spread: 360,
          origin: { y: 0.5, x: 0.5 } as const,
          colors: ["#FFFFFF", "#FFD700"],
          startVelocity: 30,
          gravity: 0,
          scalar: 0.5,
        });
        break;
    }
  }, [frame, startFrame, type]);

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
 * DustMotes - 漂浮的尘埃粒子
 * 用于营造历史感或神秘氛围
 */
export const DustMotes: React.FC<{
  startFrame?: number;
  duration?: number;
  intensity?: number;
}> = ({ startFrame = 0, duration = 180, intensity = 0.5 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frame = useCurrentFrame();

  useEffect(() => {
    if (frame < startFrame || frame > startFrame + duration) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    // 缓慢飘动的尘埃 - 使用帧作为种子生成伪随机值
    if (frame % 20 === 0) {
      const seed = frame;
      const xPos = ((seed * 0.618033988749895) % 1);
      const yPos = 0.8 + ((seed * 0.381966011250105) % 1) * 0.2;
      const driftVal = ((seed * 0.291456048477627) % 1) * 2 - 1;
      confetti({
        particleCount: Math.floor(3 * intensity),
        spread: 80,
        origin: { y: yPos, x: xPos } as const,
        colors: ["#D2B48C", "#F5DEB3", "#FAEBD7"],
        startVelocity: 2,
        gravity: -0.1,
        drift: driftVal,
        scalar: 0.3,
      });
    }
  }, [frame, startFrame, duration, intensity]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 30,
      }}
    />
  );
};
