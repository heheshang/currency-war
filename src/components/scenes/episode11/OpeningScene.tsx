import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

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
 * Episode11 Opening Scene - 谋万世者
 */
export const OpeningScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1]);
  const timelineOpacity = interpolate(frame, [20, 50], [0, 1]);
  const quoteOpacity = interpolate(frame, [40, 70], [0, 1]);
  const descOpacity = interpolate(frame, [60, 90], [0, 1]);

  const titleScale = interpolate(frame, [0, 30], [0.8, 1]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #0d1117 0%, #1a1a2e 50%, #0d1117 100%)" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {STAR_POSITIONS.map((star, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size,
              height: star.size,
              background: "#ffd700",
              borderRadius: "50%",
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Title */}
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
          textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
        }}
      >
        Episode 11
      </div>

      {/* Subtitle */}
      <div
        style={{
          position: "absolute",
          top: "26%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontSize: 36,
          opacity: titleOpacity,
          letterSpacing: 2,
        }}
      >
        Planning for Eternity
      </div>

      {/* Chinese subtitle */}
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#9ca3af",
          fontSize: 28,
          opacity: quoteOpacity,
        }}
      >
        谋万世者
      </div>

      {/* Timeline */}
      <div
        style={{
          position: "absolute",
          top: "52%",
          left: "50%",
          transform: "translateX(-50%)",
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

      {/* Quote */}
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
          opacity: interpolate(frame, [120, 150], [0, 1]),
        }}
      >
        中国的应对策略
      </div>
    </AbsoluteFill>
  );
};
