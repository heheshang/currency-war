import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

// Static star positions with animation delay
const STAR_POSITIONS = [
  { left: 8, top: 12, size: 2, opacity: 0.5, delay: 0 },
  { left: 18, top: 28, size: 1.5, opacity: 0.4, delay: 10 },
  { left: 28, top: 8, size: 1, opacity: 0.3, delay: 20 },
  { left: 38, top: 35, size: 2.5, opacity: 0.5, delay: 5 },
  { left: 48, top: 18, size: 1.5, opacity: 0.4, delay: 15 },
  { left: 58, top: 32, size: 1, opacity: 0.3, delay: 25 },
  { left: 68, top: 10, size: 2, opacity: 0.5, delay: 8 },
  { left: 78, top: 25, size: 1.5, opacity: 0.4, delay: 18 },
  { left: 88, top: 38, size: 1, opacity: 0.3, delay: 28 },
  { left: 12, top: 55, size: 1.5, opacity: 0.4, delay: 12 },
  { left: 22, top: 68, size: 2, opacity: 0.5, delay: 22 },
  { left: 32, top: 52, size: 1, opacity: 0.3, delay: 7 },
  { left: 42, top: 72, size: 1.5, opacity: 0.4, delay: 17 },
  { left: 52, top: 58, size: 2, opacity: 0.5, delay: 27 },
  { left: 62, top: 75, size: 1, opacity: 0.3, delay: 3 },
  { left: 85, top: 55, size: 1.5, opacity: 0.4, delay: 13 },
  { left: 75, top: 68, size: 2, opacity: 0.5, delay: 23 },
  { left: 5, top: 40, size: 1, opacity: 0.3, delay: 30 },
];

// Typewriter text component
const TypewriterText: React.FC<{
  text: string;
  startFrame: number;
  speed?: number;
  style?: React.CSSProperties;
}> = ({ text, startFrame, speed = 3, style }) => {
  const frame = useCurrentFrame();
  const charCount = Math.max(0, Math.floor((frame - startFrame) / speed));

  return (
    <span style={style}>
      {text.slice(0, charCount)}
      {charCount < text.length && (
        <span style={{ animation: "blink 1s infinite" }}>|</span>
      )}
    </span>
  );
};

// Animated number counter
const AnimatedNumber: React.FC<{
  value: number;
  startFrame: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  style?: React.CSSProperties;
}> = ({ value, startFrame, duration = 60, prefix = "", suffix = "", decimals = 0, style }) => {
  const frame = useCurrentFrame();
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / duration));
  const animatedValue = spring({ value: progress * value, fps: 30, damping: 15 });

  return (
    <span style={style}>
      {prefix}{animatedValue.toFixed(decimals)}{suffix}
    </span>
  );
};

// Gold particle effect
const GoldParticles: React.FC<{ count?: number }> = ({ count = 20 }) => {
  const frame = useCurrentFrame();

  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 1 + Math.random() * 3,
      speed: 0.2 + Math.random() * 0.5,
      delay: Math.random() * 30,
    }));
  }, [count]);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      {particles.map((p) => {
        const y = ((frame * p.speed + p.delay) % 100);
        const opacity = Math.sin((frame + p.delay) * 0.1) * 0.3 + 0.4;
        return (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: `${p.left}%`,
              top: `${y}%`,
              width: p.size,
              height: p.size,
              background: "#ffd700",
              borderRadius: "50%",
              opacity,
              boxShadow: "0 0 6px rgba(255, 215, 0, 0.6)",
            }}
          />
        );
      })}
    </div>
  );
};

// Pulsing glow effect
const PulsingGlow: React.FC<{
  children: React.ReactNode;
  color?: string;
  intensity?: number;
}> = ({ children, color = "#ffd700", intensity = 1 }) => {
  const frame = useCurrentFrame();
  const scale = 1 + Math.sin(frame * 0.05) * 0.1 * intensity;
  const opacity = 0.3 + Math.sin(frame * 0.05) * 0.2 * intensity;

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        filter: `drop-shadow(0 0 ${10 * intensity}px ${color})`,
        opacity,
      }}
    >
      {children}
    </div>
  );
};

// Shaking text effect
const ShakingText: React.FC<{
  children: React.ReactNode;
  intensity?: number;
  startFrame?: number;
}> = ({ children, intensity = 1, startFrame = 0 }) => {
  const frame = useCurrentFrame();
  const shake = frame > startFrame ? Math.sin(frame * 0.5) * intensity : 0;

  return (
    <div style={{ transform: `translateX(${shake}px)` }}>
      {children}
    </div>
  );
};

// Floating animation
const FloatingElement: React.FC<{
  children: React.ReactNode;
  amplitude?: number;
  speed?: number;
}> = ({ children, amplitude = 10, speed = 0.05 }) => {
  const frame = useCurrentFrame();
  const offset = Math.sin(frame * speed) * amplitude;

  return (
    <div style={{ transform: `translateY(${offset}px)` }}>
      {children}
    </div>
  );
};

/**
 * Episode10 Opening Scene - 美元死穴与黄金一阳指
 * Enhanced with richer animations
 */
export const OpeningScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Background gradient animation
  const gradientShift = interpolate(
    Math.sin(frame * 0.02),
    [-1, 1],
    [0, 30]
  );

  const titleOpacity = interpolate(frame, [0, 30], [0, 1]);
  const subtitleOpacity = interpolate(frame, [20, 50], [0, 1]);
  const quoteOpacity = interpolate(frame, [40, 70], [0, 1]);
  const descOpacity = interpolate(frame, [60, 90], [0, 1]);

  const titleScale = interpolate(frame, [0, 30], [0.8, 1]);
  const titleShake = frame > 60 ? Math.sin(frame * 0.3) * 2 : 0;

  return (
    <AbsoluteFill style={{
      background: `linear-gradient(180deg,
        #0d1117 0%,
        #1a1a2e ${20 + gradientShift}%,
        #0d1117 50%,
        #1a1a2e ${80 - gradientShift}%,
        #0d1117 100%)`
    }}>
      {/* Background gold particles */}
      <GoldParticles count={25} />

      {/* Floating stars with twinkle */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {STAR_POSITIONS.map((star, i) => {
          const twinkle = Math.sin(frame * 0.1 + star.delay) * 0.3 + 0.5;
          const yOffset = Math.sin(frame * 0.02 + star.delay * 0.5) * 3;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${star.left}%`,
                top: `${star.top + yOffset}%`,
                width: star.size,
                height: star.size,
                background: "#ffd700",
                borderRadius: "50%",
                opacity: star.opacity * twinkle,
                boxShadow: `0 0 ${star.size * 3}px rgba(255, 215, 0, ${star.opacity * twinkle})`,
              }}
            />
          );
        })}
      </div>

      {/* Title with glow */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: `translateX(-50%) scale(${titleScale}) translateX(${titleShake}px)`,
          color: "#ffd700",
          fontSize: 56,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: "0 0 30px rgba(255, 215, 0, 0.5), 0 0 60px rgba(255, 215, 0, 0.3)",
        }}
      >
        <PulsingGlow color="#ffd700" intensity={1.2}>
          Episode 10
        </PulsingGlow>
      </div>

      {/* Subtitle with typewriter */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontSize: 36,
          opacity: subtitleOpacity,
          letterSpacing: 2,
        }}
      >
        <TypewriterText
          text="The Dollar's Fatal Weakness"
          startFrame={20}
          speed={4}
        />
      </div>

      {/* Chinese subtitle */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#9ca3af",
          fontSize: 28,
          opacity: quoteOpacity,
        }}
      >
        <FloatingElement amplitude={5} speed={0.03}>
          美元死穴与黄金一阳指
        </FloatingElement>
      </div>

      {/* Quote with highlight */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          textAlign: "center",
          color: "#9ca3af",
          fontSize: 16,
          fontStyle: "italic",
          opacity: descOpacity,
        }}
      >
        <div style={{ marginBottom: 15 }}>
          <span style={{ color: "#ffd700" }}>"</span>
          货币就其本质而言，可分为债务货币与非债务货币两大类。
          <span style={{ color: "#ffd700" }}>"</span>
        </div>
        <div style={{ marginBottom: 15 }}>
          <ShakingText intensity={frame > 100 ? 2 : 0} startFrame={100}>
            <span style={{ color: "#ef4444" }}>美元在债务产生的同时被创造出来，在债务偿还的同时被销毁。</span>
          </ShakingText>
        </div>
        <div>
          流通中的每一个美元，都是一张债务欠条。
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#4b5563",
          fontSize: 14,
          opacity: interpolate(frame, [120, 150], [0, 1]),
        }}
      >
        <PulsingGlow color="#4b5563" intensity={0.5}>
          美元的死穴与黄金的反击
        </PulsingGlow>
      </div>

      {/* CSS for blinking cursor */}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </AbsoluteFill>
  );
};
