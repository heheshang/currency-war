import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Gold Silver Scene - 金银定海神针
 */
export const GoldSilverScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const historyOpacity = interpolate(frame, [20, 60], [0, 1]);
  const summaryOpacity = interpolate(frame, [50, 90], [0, 1]);

  const goldScale = interpolate(frame, [30, 60], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #0d1117 0%, #1f1f1f 100%)" }}>
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
        }}
      >
        Gold & Silver: Nature's Currency
      </div>

      {/* Gold and Silver */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          gap: 40,
          opacity: historyOpacity,
        }}
      >
        {/* Gold */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #fbbf24, #d97706)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `scale(${goldScale})`,
              boxShadow: "0 0 30px rgba(251, 191, 36, 0.4)",
              margin: "0 auto",
            }}
          >
            <span style={{ fontSize: 32, color: "#1a1a2e" }}>Au</span>
          </div>
          <div style={{ fontSize: 16, color: "#fbbf24", marginTop: 10 }}>黄金</div>
        </div>

        {/* Silver */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #94a3b8, #64748b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `scale(${goldScale})`,
              boxShadow: "0 0 30px rgba(148, 163, 184, 0.4)",
              margin: "0 auto",
            }}
          >
            <span style={{ fontSize: 32, color: "#1a1a2e" }}>Ag</span>
          </div>
          <div style={{ fontSize: 16, color: "#94a3b8", marginTop: 10 }}>白银</div>
        </div>
      </div>

      {/* History */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: historyOpacity,
        }}
      >
        <div style={{ fontSize: 24, color: "#e8e8e8", fontWeight: 600 }}>Britain 1664-1914</div>
        <div style={{ fontSize: 18, color: "#ffd700", marginTop: 8 }}>Prices Remained Stable</div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>在金本位制度下</div>
      </div>

      {/* Summary */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: summaryOpacity,
        }}
      >
        <div style={{ fontSize: 20, color: "#4ade80", fontWeight: 600 }}>Honest Money</div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>
          金银是诚实的货币 - 供给有限，无法被任意增发
        </div>
      </div>
    </AbsoluteFill>
  );
};
