import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * High Interest Rates Scene - 高利率战争
 */
export const HighRatesScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const debtOpacity = interpolate(frame, [20, 60], [0, 1]);
  const trapOpacity = interpolate(frame, [50, 90], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)" }}>
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ef4444",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
        }}
      >
        Third World Debt Crisis
      </div>

      {/* Debt numbers */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: debtOpacity,
        }}
      >
        <div style={{ fontSize: 18, color: "#9ca3af", marginBottom: 20 }}>Developing Nations Debt</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40 }}>
          <div>
            <div style={{ fontSize: 36, color: "#9ca3af" }}>$130B</div>
            <div style={{ fontSize: 12, color: "#6b7280" }}>1970</div>
          </div>
          <div style={{ fontSize: 36, color: "#ffd700" }}>→</div>
          <div>
            <div style={{ fontSize: 48, color: "#ef4444", fontWeight: 700 }}>$1.3T</div>
            <div style={{ fontSize: 12, color: "#ef4444" }}>1982</div>
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#ef4444", marginTop: 15, fontWeight: 700 }}>10x Increase</div>
      </div>

      {/* Trap */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          textAlign: "center",
          opacity: trapOpacity,
        }}
      >
        <div
          style={{
            padding: "20px 40px",
            background: "rgba(239, 68, 68, 0.15)",
            borderRadius: 12,
            border: "2px solid #ef4444",
          }}
        >
          <div style={{ fontSize: 18, color: "#e8e8e8", marginBottom: 10 }}>At 20% Interest Rate:</div>
          <div style={{ fontSize: 20, color: "#ef4444", fontWeight: 700 }}>The Debt Trap</div>
          <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 10 }}>
            发展中国家成为国际银行家刀板上的鱼肉
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
