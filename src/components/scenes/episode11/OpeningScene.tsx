import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  interpolateColors,
} from "remotion";

// Static star positions
const STAR_POSITIONS = [
  { left: 5, top: 10, size: 1.5, opacity: 0.4 },
  { left: 15, top: 25, size: 1, opacity: 0.3 },
  { left: 25, top: 8, size: 2, opacity: 0.5 },
  { left: 35, top: 30, size: 1, opacity: 0.2 },
  { left: 45, top: 15, size: 1.5, opacity: 0.4 },
  { left: 55, top: 35, size: 1, opacity: 0.3 },
  { left: 65, top: 12, size: 2, opacity: 0.5 },
  { left: 75, top: 28, size: 1, opacity: 0.2 },
  { left: 85, top: 18, size: 1.5, opacity: 0.4 },
  { left: 95, top: 32, size: 1, opacity: 0.3 },
  { left: 10, top: 50, size: 1, opacity: 0.2 },
  { left: 20, top: 65, size: 1.5, opacity: 0.4 },
  { left: 30, top: 55, size: 1, opacity: 0.3 },
  { left: 40, top: 70, size: 2, opacity: 0.5 },
  { left: 50, top: 58, size: 1, opacity: 0.2 },
  { left: 60, top: 75, size: 1.5, opacity: 0.4 },
  { left: 70, top: 52, size: 1, opacity: 0.3 },
  { left: 80, top: 68, size: 2, opacity: 0.5 },
  { left: 90, top: 45, size: 1, opacity: 0.2 },
  { left: 8, top: 82, size: 1.5, opacity: 0.4 },
];

/**
 * TypewriterText - 打字机效果文字组件
 */
const TypewriterText: React.FC<{
  text: string;
  delay: number;
  duration?: number;
  style?: React.CSSProperties;
}> = ({ text, delay, duration = 30, style }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(
    frame,
    [delay, delay + duration * 5],
    [0, text.length],
    {
      extrapolateRight: "clamp",
    },
  );
  const displayText = text.slice(0, Math.floor(progress));

  return (
    <span style={style}>
      {displayText}
      {Math.floor(progress) < text.length && (
        <span style={{ opacity: Math.sin(frame * 0.3) > 0 ? 1 : 0 }}>|</span>
      )}
    </span>
  );
};

/**
 * TwinklingStar - 闪烁星星组件
 */
const TwinklingStar: React.FC<{
  left: number;
  top: number;
  size: number;
  baseOpacity: number;
  delay: number;
}> = ({ left, top, size, baseOpacity, delay }) => {
  const frame = useCurrentFrame();
  const twinkle = Math.sin((frame + delay) * 0.15) * 0.5 + 0.5;
  const opacity = baseOpacity * (0.5 + twinkle * 0.5);

  return (
    <div
      style={{
        position: "absolute",
        left: `${left}%`,
        top: `${top}%`,
        width: size,
        height: size,
        background: "#ffd700",
        borderRadius: "50%",
        opacity,
        boxShadow: `0 0 ${size * 2}px rgba(255, 215, 0, ${opacity * 0.5})`,
      }}
    />
  );
};

/**
 * FloatingParticle - 浮动粒子
 */
const FloatingParticle: React.FC<{ index: number }> = ({ index }) => {
  const frame = useCurrentFrame();
  const offset = (index * 50) % 100;
  const y = ((frame + offset) % 200) / 2;
  const x = Math.sin((frame + index * 30) * 0.02) * 20;
  const opacity = interpolate(frame, [0, 100, 200], [0, 0.3, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: `${10 + ((index * 8) % 80)}%`,
        top: `${y}%`,
        transform: `translateX(${x}px)`,
        width: 3,
        height: 3,
        background: "#ffd700",
        borderRadius: "50%",
        opacity,
        boxShadow: "0 0 6px rgba(255, 215, 0, 0.5)",
      }}
    />
  );
};

/**
 * Episode11 Opening Scene - 谋万世者
 * Enhanced with rich animations:
 * - Twinkling stars with glow effect
 * - Floating golden particles
 * - Typewriter text effect
 * - Gradient background animation
 * - Scale and fade animations
 */
export const OpeningScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Title animation with scale and glow
  const titleOpacity = interpolate(frame, [0, 30], [0, 1]);
  const titleScale = interpolate(frame, [0, 30], [0.8, 1]);
  const titleGlow = interpolate(frame, [30, 60, 90], [0.3, 0.8, 0.5], {
    extrapolateRight: "clamp",
  });

  // Subtitle animations
  const subtitleOpacity = interpolate(frame, [20, 50], [0, 1]);
  const subtitleSlide = interpolate(frame, [20, 50], [30, 0]);

  // Timeline animation
  const timelineOpacity = interpolate(frame, [30, 60], [0, 1]);
  const timelineScale = interpolate(frame, [30, 60], [0.9, 1]);

  // Quote animation with typewriter effect
  const quoteOpacity = interpolate(frame, [50, 80], [0, 1]);
  const quoteSlide = interpolate(frame, [50, 80], [20, 0]);

  // Description animation
  const descOpacity = interpolate(frame, [70, 100], [0, 1]);

  // Footer animation
  const footerOpacity = interpolate(frame, [100, 130], [0, 1]);

  // Background gradient animation
  const gradientProgress = interpolate(frame % 300, [0, 300], [0, 1]);
  const bgGradient = `linear-gradient(180deg,
    ${interpolateColors(gradientProgress, [0, 1], ["#0d1117", "#1a1a2e"])} 0%,
    ${interpolateColors(gradientProgress, [0, 1], ["#1a1a2e", "#0d1117"])} 50%,
    ${interpolateColors(gradientProgress, [0, 1], ["#0d1117", "#1a1a2e"])} 100%)`;

  return (
    <AbsoluteFill style={{ background: bgGradient }}>
      {/* Background stars with twinkling effect */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {STAR_POSITIONS.map((star, i) => (
          <TwinklingStar
            key={i}
            left={star.left}
            top={star.top}
            size={star.size}
            baseOpacity={star.opacity}
            delay={i * 10}
          />
        ))}

        {/* Floating golden particles */}
        {[...Array(8)].map((_, i) => (
          <FloatingParticle key={i} index={i} />
        ))}
      </div>

      {/* Main Title with glow effect */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "50%",
          transform: `translateX(-50%) scale(${titleScale})`,
          color: "#ffd700",
          fontSize: 56,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: `0 0 ${30 + titleGlow * 20}px rgba(255, 215, 0, ${titleGlow})`,
        }}
      >
        Episode 11
      </div>

      {/* English subtitle with slide animation */}
      <div
        style={{
          position: "absolute",
          top: "26%",
          left: "50%",
          transform: `translateX(-50%) translateY(${subtitleSlide}px)`,
          color: "#e8e8e8",
          fontSize: 36,
          opacity: subtitleOpacity,
          letterSpacing: 2,
        }}
      >
        Planning for Eternity
      </div>

      {/* Chinese subtitle with typewriter effect */}
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: `translateX(-50%) translateY(${quoteSlide}px)`,
          opacity: quoteOpacity,
        }}
      >
        <TypewriterText
          text="谋万世者"
          delay={50}
          style={{
            color: "#9ca3af",
            fontSize: 28,
          }}
        />
      </div>

      {/* Timeline with scale animation */}
      <div
        style={{
          position: "absolute",
          top: "52%",
          left: "50%",
          transform: `translateX(-50%) scale(${timelineScale})`,
          display: "flex",
          alignItems: "center",
          gap: 20,
          opacity: timelineOpacity,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 24, color: "#9ca3af" }}>1850</div>
          <div style={{ fontSize: 14, color: "#ffd700" }}>London</div>
        </div>
        <div style={{ fontSize: 24, color: "#ffd700" }}>→</div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 24, color: "#9ca3af" }}>1950</div>
          <div style={{ fontSize: 14, color: "#3b82f6" }}>New York</div>
        </div>
        <div style={{ fontSize: 24, color: "#ffd700" }}>→</div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 24, color: "#9ca3af" }}>2050</div>
          <div style={{ fontSize: 14, color: "#ef4444" }}>?</div>
        </div>
      </div>

      {/* Quote with fade animation */}
      <div
        style={{
          position: "absolute",
          top: "68%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          textAlign: "center",
          color: "#9ca3af",
          fontSize: 14,
          fontStyle: "italic",
          opacity: descOpacity,
        }}
      >
        崛起的国家总是以更旺盛的生产力创造巨大财富
        <br />
        为了保护财富不被稀释，这些地区有保持高纯度货币的内在动力
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
          opacity: footerOpacity,
        }}
      >
        中国的应对策略
      </div>
    </AbsoluteFill>
  );
};
