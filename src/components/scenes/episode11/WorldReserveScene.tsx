import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * World Reserve Scene - 世界储备货币
 */
export const WorldReserveScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const contentOpacity = interpolate(frame, [20, 60], [0, 1]);
  const futureOpacity = interpolate(frame, [50, 90], [0, 1]);

  const yuanScale = interpolate(frame, [30, 60], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #0d1117 0%, #1a1a2e 100%)" }}>
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontSize: 38,
          fontWeight: 700,
          opacity: titleOpacity,
        }}
      >
        World Reserve Currency
      </div>

      {/* Gold Yuan */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: contentOpacity,
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #fbbf24, #d97706)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${yuanScale})`,
            boxShadow: "0 0 40px rgba(251, 191, 36, 0.4)",
            margin: "0 auto 15px",
          }}
        >
          <span style={{ fontSize: 28, color: "#1a1a2e", fontWeight: 700 }}>金元</span>
        </div>
        <div style={{ fontSize: 20, color: "#fbbf24", fontWeight: 600 }}>Gold Yuan</div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>黄金支撑的货币</div>
      </div>

      {/* Silver Yuan */}
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: contentOpacity,
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #94a3b8, #64748b)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${yuanScale})`,
            boxShadow: "0 0 30px rgba(148, 163, 184, 0.4)",
            margin: "0 auto 15px",
          }}
        >
          <span style={{ fontSize: 24, color: "#1a1a2e", fontWeight: 700 }}>银元</span>
        </div>
        <div style={{ fontSize: 20, color: "#94a3b8", fontWeight: 600 }}>Silver Yuan</div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>白银支撑的货币</div>
      </div>

      {/* Future */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: futureOpacity,
        }}
      >
        <div style={{ fontSize: 18, color: "#4ade80", fontWeight: 600 }}>
          Future: Multiple Reserve Currencies
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>
          未来：多种储备货币并存的格局
        </div>
      </div>
    </AbsoluteFill>
  );
};
