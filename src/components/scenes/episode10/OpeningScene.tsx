import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

// Static star positions
const STAR_POSITIONS = [
  { left: 8, top: 12, size: 2, opacity: 0.5 },
  { left: 18, top: 28, size: 1.5, opacity: 0.4 },
  { left: 28, top: 8, size: 1, opacity: 0.3 },
  { left: 38, top: 35, size: 2.5, opacity: 0.5 },
  { left: 48, top: 18, size: 1.5, opacity: 0.4 },
  { left: 58, top: 32, size: 1, opacity: 0.3 },
  { left: 68, top: 10, size: 2, opacity: 0.5 },
  { left: 78, top: 25, size: 1.5, opacity: 0.4 },
  { left: 88, top: 38, size: 1, opacity: 0.3 },
  { left: 12, top: 55, size: 1.5, opacity: 0.4 },
  { left: 22, top: 68, size: 2, opacity: 0.5 },
  { left: 32, top: 52, size: 1, opacity: 0.3 },
  { left: 42, top: 72, size: 1.5, opacity: 0.4 },
  { left: 52, top: 58, size: 2, opacity: 0.5 },
  { left: 62, top: 75, size: 1, opacity: 0.3 },
];

/**
 * Episode10 Opening Scene - 美元死穴与黄金一阳指
 */
export const OpeningScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1]);
  const subtitleOpacity = interpolate(frame, [20, 50], [0, 1]);
  const quoteOpacity = interpolate(frame, [40, 70], [0, 1]);
  const descOpacity = interpolate(frame, [60, 90], [0, 1]);

  const titleScale = interpolate(frame, [0, 30], [0.8, 1]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #0d1117 0%, #1a1a2e 50%, #0d1117 100%)" }}>
      {/* Background gold particles */}
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
          top: "15%",
          left: "50%",
          transform: `translateX(-50%) scale(${titleScale})`,
          color: "#ffd700",
          fontSize: 56,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
        }}
      >
        Episode 10
      </div>

      {/* Subtitle */}
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
        The Dollar's Fatal Weakness
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
        美元死穴与黄金一阳指
      </div>

      {/* Quote */}
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
        货币就其本质而言，可分为债务货币与非债务货币两大类。
        <br />
        美元在债务产生的同时被创造出来，在债务偿还的同时被销毁。
        <br />
        流通中的每一个美元，都是一张债务欠条。
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
        美元的死穴与黄金的反击
      </div>
    </AbsoluteFill>
  );
};
