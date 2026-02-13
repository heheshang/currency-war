import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * RadiatingRing - 辐射环组件
 */
const RadiatingRing: React.FC<{
  delay?: number;
  color: string;
  size: number;
}> = ({ delay = 0, color, size }) => {
  const frame = useCurrentFrame();
  const ringProgress = (frame + delay) % 60;
  const ringOpacity = interpolate(ringProgress, [0, 30, 60], [0.8, 0, 0], {
    extrapolateRight: "clamp",
  });
  const ringScale = interpolate(ringProgress, [0, 60], [1, 2], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        border: `2px solid ${color}`,
        transform: `scale(${ringScale})`,
        opacity: ringOpacity,
      }}
    />
  );
};

/**
 * Gold Silver Scene - 金银定海神针
 * Enhanced with rich animations:
 * - Glowing orbs with pulse effect
 * - Radiating rings animation
 * - Staggered fade-in for content
 * - Background shimmer effect
 */
export const GoldSilverScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Title animation
  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const titleScale = interpolate(frame, [0, 20], [0.8, 1]);

  // Gold/Silver orbs animation
  const orbDelay = 20;
  const orbOpacity = interpolate(frame, [orbDelay, orbDelay + 30], [0, 1]);
  const orbScale = interpolate(frame, [orbDelay, orbDelay + 40], [0, 1], {
    extrapolateRight: "clamp",
  });

  // History section
  const historyOpacity = interpolate(frame, [40, 70], [0, 1]);
  const historySlide = interpolate(frame, [40, 70], [20, 0]);

  // Summary section
  const summaryOpacity = interpolate(frame, [70, 100], [0, 1]);
  const summarySlide = interpolate(frame, [70, 100], [20, 0]);

  // Background shimmer
  const shimmer = interpolate(frame % 180, [0, 90, 180], [0, 0.03, 0]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #0d1117 0%, #1f1f1f 100%)" }}>
      {/* Background shimmer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 50%, rgba(251, 191, 36, ${shimmer}) 0%, transparent 60%)`,
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: `translateX(-50%) scale(${titleScale})`,
          color: "#ffd700",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: "0 0 30px rgba(255, 215, 0, 0.4)",
        }}
      >
        Gold & Silver: Nature's Currency
      </div>

      {/* Gold and Silver with glowing effect */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          gap: 60,
          opacity: orbOpacity,
        }}
      >
        {/* Gold */}
        <div style={{ textAlign: "center", position: "relative" }}>
          <RadiatingRing delay={30} color="rgba(251, 191, 36, 0.5)" size={100} />
          <RadiatingRing delay={50} color="rgba(251, 191, 36, 0.3)" size={120} />
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #fbbf24, #d97706)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `scale(${orbScale})`,
              boxShadow: "0 0 40px rgba(251, 191, 36, 0.6)",
              margin: "0 auto",
            }}
          >
            <span style={{ fontSize: 32, color: "#1a1a2e" }}>Au</span>
          </div>
          <div style={{ fontSize: 16, color: "#fbbf24", marginTop: 10 }}>黄金</div>
        </div>

        {/* Silver */}
        <div style={{ textAlign: "center", position: "relative" }}>
          <RadiatingRing delay={40} color="rgba(148, 163, 184, 0.5)" size={100} />
          <RadiatingRing delay={60} color="rgba(148, 163, 184, 0.3)" size={120} />
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #94a3b8, #64748b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `scale(${orbScale})`,
              boxShadow: "0 0 40px rgba(148, 163, 184, 0.6)",
              margin: "0 auto",
            }}
          >
            <span style={{ fontSize: 32, color: "#1a1a2e" }}>Ag</span>
          </div>
          <div style={{ fontSize: 16, color: "#94a3b8", marginTop: 10 }}>白银</div>
        </div>
      </div>

      {/* History with slide animation */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: `translate(-50%, -50%) translateY(${historySlide}px)`,
          textAlign: "center",
          opacity: historyOpacity,
        }}
      >
        <div style={{ fontSize: 24, color: "#e8e8e8", fontWeight: 600 }}>Britain 1664-1914</div>
        <div style={{ fontSize: 18, color: "#ffd700", marginTop: 8 }}>
          Prices Remained Stable
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>在金本位制度下</div>
      </div>

      {/* Summary with slide animation */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: `translateX(-50%) translateY(${summarySlide}px)`,
          textAlign: "center",
          opacity: summaryOpacity,
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: "#4ade80",
            fontWeight: 600,
            textShadow: "0 0 15px rgba(74, 222, 128, 0.4)",
          }}
        >
          Honest Money
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>
          金银是诚实的货币 - 供给有限，无法被任意增发
        </div>
      </div>
    </AbsoluteFill>
  );
};
