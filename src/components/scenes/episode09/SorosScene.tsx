import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Soros Scene - 索罗斯
 */
export const SorosScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const quoteOpacity = interpolate(frame, [20, 60], [0, 1]);
  const profitOpacity = interpolate(frame, [50, 90], [0, 1]);

  const sorosScale = interpolate(frame, [30, 60], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)" }}>
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
        George Soros
      </div>

      {/* Soros */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${sorosScale})`,
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6366f1, #4338ca)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: quoteOpacity,
          boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)",
        }}
      >
        <span style={{ fontSize: 36, fontWeight: 700, color: "#fff" }}>S</span>
      </div>

      {/* Quote */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          textAlign: "center",
          opacity: quoteOpacity,
        }}
      >
        <div style={{ fontSize: 20, color: "#e8e8e8", fontStyle: "italic" }}>
          "The Financial Hitman"
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 10 }}>
          运用游离于监管体系之外的巨额对冲基金
        </div>
      </div>

      {/* Profit */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: profitOpacity,
        }}
      >
        <div style={{ fontSize: 16, color: "#9ca3af", marginBottom: 10 }}>1992: Black Wednesday</div>
        <div style={{ fontSize: 48, color: "#4ade80", fontWeight: 700 }}>$1.1 Billion</div>
        <div style={{ fontSize: 14, color: "#9ca3af" }}>from attacking British Pound</div>
      </div>
    </AbsoluteFill>
  );
};
