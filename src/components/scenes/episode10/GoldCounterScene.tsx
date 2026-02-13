import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Gold Counter Scene - 黄金反击
 */
export const GoldCounterScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const strategyOpacity = interpolate(frame, [20, 60], [0, 1]);
  const profitOpacity = interpolate(frame, [50, 90], [0, 1]);

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
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
        }}
      >
        Gold Counter-Attack
      </div>

      {/* Strategy */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          textAlign: "center",
          opacity: strategyOpacity,
        }}
      >
        <div style={{ fontSize: 18, color: "#e8e8e8", marginBottom: 20 }}>Central Banks' Strategy:</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 15,
            alignItems: "center",
          }}
        >
          <div
            style={{
              padding: "12px 24px",
              background: "rgba(251, 191, 36, 0.15)",
              borderRadius: 8,
              border: "1px solid #fbbf24",
            }}
          >
            <div style={{ fontSize: 16, color: "#fbbf24" }}>1. "Rent" Gold at 1% Interest</div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>以1%利息"租借"黄金</div>
          </div>
          <div style={{ fontSize: 24, color: "#ffd700" }}>↓</div>
          <div
            style={{
              padding: "12px 24px",
              background: "rgba(239, 68, 68, 0.15)",
              borderRadius: 8,
              border: "1px solid #ef4444",
            }}
          >
            <div style={{ fontSize: 16, color: "#ef4444" }}>2. Sell Gold, Buy US Bonds at 5%</div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>出售黄金，买入5%收益的美国债券</div>
          </div>
        </div>
      </div>

      {/* Profit */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: profitOpacity,
        }}
      >
        <div style={{ fontSize: 48, color: "#4ade80", fontWeight: 700 }}>4% Spread!</div>
        <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 10 }}>4%的利差收益！</div>
        <div style={{ fontSize: 14, color: "#6b7280", marginTop: 5 }}>
          这是无本万利的生意
        </div>
      </div>
    </AbsoluteFill>
  );
};
