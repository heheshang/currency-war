import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * RotatingCoin - 旋转的货币组件
 */
const RotatingCoin: React.FC<{
  size: number;
  color: string;
  label: string;
  labelColor: string;
  delay: number;
  position: "top" | "bottom";
}> = ({ size, color, label, labelColor, delay, position }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 40], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Rotation animation
  const rotation = interpolate(frame % 120, [0, 120], [0, 360]);

  // Entrance animation
  const entranceY = position === "top" ? -30 : 30;
  const translateY = interpolate(progress, [0, 1], [entranceY, 0]);

  // Glow pulse
  const glow = Math.sin(frame * 0.08 + delay) * 0.2 + 0.8;

  return (
    <div
      style={{
        position: "absolute",
        top: position === "top" ? "30%" : "60%",
        left: "50%",
        transform: `translate(-50%, -50%) translateY(${translateY}px)`,
        textAlign: "center",
        opacity: progress,
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `rotateX(${rotation}deg)`,
          boxShadow: `0 0 ${size * 0.5 * glow}px ${color}`,
          margin: "0 auto 15px",
        }}
      >
        <span style={{ fontSize: size * 0.25, color: "#1a1a2e", fontWeight: 700 }}>
          {label}
        </span>
      </div>
      <div style={{ fontSize: 20, color: labelColor, fontWeight: 600 }}>{label}</div>
    </div>
  );
};

/**
 * FloatingParticles - 漂浮粒子效果
 */
const FloatingParticles: React.FC<{ color: string }> = ({ color }) => {
  const frame = useCurrentFrame();

  return (
    <>
      {[...Array(6)].map((_, i) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const x = interpolate((frame + i * 20) % 150, [0, 150], [0, 100]);
        const y = interpolate((frame + i * 20) % 100, [0, 100], [0, -50]);
        const opacity = interpolate(frame % 100, [0, 50, 100], [0, 0.5, 0]);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${10 + i * 15}%`,
              top: `${20 + y}%`,
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: color,
              opacity,
              boxShadow: `0 0 6px ${color}`,
            }}
          />
        );
      })}
    </>
  );
};

/**
 * World Reserve Scene - 世界储备货币
 * Enhanced with rich animations:
 * - Rotating coin animations
 * - Floating particles
 * - Slide and fade transitions
 * - Glowing effects
 * - Background gradient animation
 */
export const WorldReserveScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Title animation
  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const titleSlide = interpolate(frame, [0, 20], [-30, 0]);

  // Content fade in (kept for potential use)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const contentOpacity = interpolate(frame, [20, 50], [0, 1]);

  // Future section
  const futureOpacity = interpolate(frame, [60, 90], [0, 1]);
  const futureSlide = interpolate(frame, [60, 90], [20, 0]);

  // Background shimmer
  const shimmer = interpolate(frame % 200, [0, 100, 200], [0, 0.03, 0]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #0d1117 0%, #1a1a2e 100%)" }}>
      {/* Background shimmer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 50%, rgba(251, 191, 36, ${shimmer}) 0%, transparent 50%)`,
        }}
      />

      {/* Floating particles */}
      <FloatingParticles color="rgba(251, 191, 36, 0.5)" />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: `translateX(-50%) translateX(${titleSlide}px)`,
          color: "#ffd700",
          fontSize: 38,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: "0 0 25px rgba(255, 215, 0, 0.4)",
        }}
      >
        World Reserve Currency
      </div>

      {/* Gold Yuan */}
      <RotatingCoin
        size={120}
        color="linear-gradient(135deg, #fbbf24, #d97706)"
        label="金元"
        labelColor="#fbbfbf24"
        delay={20}
        position="top"
      />

      {/* Silver Yuan */}
      <RotatingCoin
        size={100}
        color="linear-gradient(135deg, #94a3b8, #64748b)"
        label="银元"
        labelColor="#94a3b8"
        delay={40}
        position="bottom"
      />

      {/* Future section */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: `translateX(-50%) translateY(${futureSlide}px)`,
          textAlign: "center",
          opacity: futureOpacity,
        }}
      >
        <div
          style={{
            fontSize: 18,
            color: "#4ade80",
            fontWeight: 600,
            textShadow: "0 0 15px rgba(74, 222, 128, 0.4)",
          }}
        >
          Future: Multiple Reserve Currencies
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>
          未来：多种储备货币并存的格局
        </div>
      </div>
    </AbsoluteFill>
  );
};
