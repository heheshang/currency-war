import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * Episode09 Opening Scene - 不宣而战的货币战争
 *
 * Enhanced with:
 * - Dynamic star field with twinkling effect
 * - Gradient pulse animation
 * - Text typewriter effect
 * - Parallax star movement
 * - NEW: Eye scanning effect, Particle system, Deep thought visualization
 */

// Static star positions to avoid Math.random() warnings
const STAR_POSITIONS = [
  { left: 5, top: 10, size: 1.5, opacity: 0.4, speed: 1 },
  { left: 15, top: 25, size: 1, opacity: 0.3, speed: 0.8 },
  { left: 25, top: 8, size: 2, opacity: 0.5, speed: 1.2 },
  { left: 35, top: 30, size: 1, opacity: 0.2, speed: 0.6 },
  { left: 45, top: 15, size: 1.5, opacity: 0.4, speed: 1 },
  { left: 55, top: 35, size: 1, opacity: 0.3, speed: 0.9 },
  { left: 65, top: 12, size: 2, opacity: 0.5, speed: 1.1 },
  { left: 75, top: 28, size: 1, opacity: 0.2, speed: 0.7 },
  { left: 85, top: 18, size: 1.5, opacity: 0.4, speed: 1 },
  { left: 95, top: 32, size: 1, opacity: 0.3, speed: 0.85 },
  { left: 10, top: 50, size: 1, opacity: 0.2, speed: 0.5 },
  { left: 20, top: 65, size: 1.5, opacity: 0.4, speed: 1.3 },
  { left: 30, top: 55, size: 1, opacity: 0.3, speed: 0.9 },
  { left: 40, top: 70, size: 2, opacity: 0.5, speed: 1.1 },
  { left: 50, top: 58, size: 1, opacity: 0.2, speed: 0.6 },
  { left: 60, top: 75, size: 1.5, opacity: 0.4, speed: 1 },
  { left: 70, top: 52, size: 1, opacity: 0.3, speed: 0.8 },
  { left: 80, top: 68, size: 2, opacity: 0.5, speed: 1.2 },
  { left: 90, top: 45, size: 1, opacity: 0.2, speed: 0.7 },
  { left: 8, top: 82, size: 1.5, opacity: 0.4, speed: 1 },
];

// Particle system for depth
const PARTICLES = Array.from({ length: 15 }).map((_, i) => ({
  left: (i * 7) % 100,
  top: (i * 13) % 100,
  size: 2 + (i % 3),
  speed: 0.5 + (i % 5) * 0.2,
  delay: i * 5,
}));

// Typewriter effect helper
const getVisibleText = (
  text: string,
  frame: number,
  startFrame: number,
  speed: number = 2,
): string => {
  const progress = Math.max(0, frame - startFrame) / speed;
  const charCount = Math.floor(progress);
  return text.slice(0, charCount);
};

// NEW: Eye/Scanning effect component
const ScanningLine: React.FC<{ frame: number }> = ({ frame }) => {
  const scanY = interpolate(frame % 120, [0, 120], [0, 100]);
  const scanOpacity = interpolate(frame % 120, [0, 10, 110, 120], [0, 1, 1, 0]);

  return (
    <div
      style={{
        position: "absolute",
        top: `${scanY}%`,
        left: 0,
        right: 0,
        height: 2,
        background:
          "linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.5), transparent)",
        opacity: scanOpacity * 0.6,
      }}
    />
  );
};

// NEW: Deep thought ripple effect
const ThoughtRipple: React.FC<{ frame: number }> = ({ frame }) => {
  const ripples = [0, 1, 2].map((i) => {
    const progress = (frame + i * 30) % 150;
    const scale = interpolate(progress, [0, 150], [0, 3]);
    const opacity = interpolate(progress, [0, 50, 150], [0.3, 0, 0]);
    return { scale, opacity };
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        height: 400,
        pointerEvents: "none",
      }}
    >
      {ripples.map((r, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 100 * r.scale,
            height: 100 * r.scale,
            borderRadius: "50%",
            border: "1px solid rgba(255, 215, 0, 0.2)",
            transform: "translate(-50%, -50%)",
            opacity: r.opacity,
          }}
        />
      ))}
    </div>
  );
};

export const OpeningScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Title animations with spring physics
  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const subtitleOpacity = interpolate(frame, [20, 50], [0, 1], {
    extrapolateRight: "clamp",
  });
  const quoteOpacity = interpolate(frame, [40, 70], [0, 1], {
    extrapolateRight: "clamp",
  });
  const descOpacity = interpolate(frame, [60, 90], [0, 1], {
    extrapolateRight: "clamp",
  });
  const footerOpacity = interpolate(frame, [100, 130], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleScale = spring({
    frame,
    fps: 30,
    from: 0.8,
    to: 1,
    config: { damping: 15 },
  });
  const subtitleY = interpolate(frame, [20, 50], [20, 0]);

  // Star twinkle and parallax
  const stars = STAR_POSITIONS.map((star, i) => {
    const twinkle = interpolate(
      Math.sin(frame * 0.05 * star.speed + i),
      [-1, 1],
      [0.3, 1],
    );
    const parallax = interpolate(frame * 0.02 * star.speed, [0, 50], [0, 3]);
    return { ...star, twinkle, parallax };
  });

  // NEW: Particle animations
  const particles = PARTICLES.map((p) => {
    const y = interpolate((frame * p.speed + p.delay) % 100, [0, 100], [0, 30]);
    const opacity = interpolate(
      (frame * p.speed + p.delay) % 60,
      [0, 30, 60],
      [0, 0.4, 0],
    );
    return { ...p, y, opacity };
  });

  // NEW: Grid pulse effect
  const gridPulse = interpolate(Math.sin(frame * 0.05), [-1, 1], [0.3, 0.8]);
  const gridOffset = interpolate(frame * 0.5, [0, 100], [0, 20]);

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(180deg, #0d1117 0%, #1a1a2e 50%, #0d1117 100%)",
      }}
    >
      {/* NEW: Subtle grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 215, 0, ${gridPulse * 0.03}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 215, 0, ${gridPulse * 0.03}) 1px, transparent 1px)
          `,
          backgroundSize: `${50 + gridOffset}px ${50 + gridOffset}px`,
          opacity: 0.5,
        }}
      />

      {/* NEW: Scanning line effect for dramatic reveal */}
      <ScanningLine frame={frame} />

      {/* NEW: Thought ripple effect */}
      <ThoughtRipple frame={frame} />

      {/* Animated background gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at ${50 + Math.sin(frame * 0.02) * 10}% ${40 + Math.cos(frame * 0.015) * 10}%, rgba(255, 215, 0, 0.03) 0%, transparent 60%)`,
          opacity: interpolate(frame, [0, 60], [0, 1]),
        }}
      />

      {/* NEW: Particle system */}
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: `${p.top - p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "rgba(255, 215, 0, 0.4)",
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 2}px rgba(255, 215, 0, 0.3)`,
          }}
        />
      ))}

      {/* Background stars with twinkle and parallax */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {stars.map((star, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${star.left + star.parallax}%`,
              top: `${star.top + star.parallax * 0.5}%`,
              width: star.size * (0.8 + star.twinkle * 0.4),
              height: star.size * (0.8 + star.twinkle * 0.4),
              background: star.opacity > 0.4 ? "#ffd700" : "#fff",
              borderRadius: "50%",
              opacity: star.opacity * star.twinkle,
              boxShadow:
                star.opacity > 0.4
                  ? `0 0 ${star.size * 2}px rgba(255, 215, 0, 0.5)`
                  : "none",
            }}
          />
        ))}
      </div>

      {/* Title with glow effect */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: `translateX(-50%) scale(${titleScale})`,
          color: "#ffd700",
          fontSize: 56,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: `
            0 0 30px rgba(255, 215, 0, 0.5),
            0 0 60px rgba(255, 215, 0, 0.3),
            0 0 90px rgba(255, 215, 0, 0.1)
          `,
        }}
      >
        Episode 09
      </div>

      {/* Subtitle with slide up */}
      <div
        style={{
          position: "absolute",
          top: `calc(30% + ${subtitleY}px)`,
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontSize: 36,
          opacity: subtitleOpacity,
          letterSpacing: 2,
        }}
      >
        {getVisibleText("The Undeclared Currency War", frame, 20, 3)}
      </div>

      {/* Chinese subtitle with typewriter */}
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
        {getVisibleText("不宣而战的货币战争", frame, 40, 4)}
      </div>

      {/* Quote with staggered reveal */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          textAlign: "center",
          color: "#9ca3af",
          fontSize: 18,
          fontStyle: "italic",
          opacity: descOpacity,
        }}
      >
        <div
          style={{
            marginBottom: 8,
            opacity: interpolate(frame, [60, 80], [0, 1]),
          }}
        >
          {getVisibleText(
            "谁能垄断某种商品的供应，谁就能实现超级利润。",
            frame,
            55,
            2,
          )}
        </div>
        <div
          style={{
            marginBottom: 8,
            opacity: interpolate(frame, [70, 90], [0, 1]),
          }}
        >
          {getVisibleText("货币乃是一种人人都需要的商品，", frame, 65, 2)}
        </div>
        <div
          style={{
            marginBottom: 8,
            opacity: interpolate(frame, [80, 100], [0, 1]),
          }}
        >
          {getVisibleText("如果谁能垄断一国的货币发行，", frame, 75, 2)}
        </div>
        <div style={{ opacity: interpolate(frame, [90, 110], [0, 1]) }}>
          {getVisibleText(
            "谁就拥有无法限量的赚取超级利润的手段。",
            frame,
            85,
            2,
          )}
        </div>
      </div>

      {/* Footer with pulse */}
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
        <span
          style={{
            animation: "pulse 2s ease-in-out infinite",
          }}
        >
          国际银行家从70年代起发动的货币战争
        </span>
      </div>
    </AbsoluteFill>
  );
};
