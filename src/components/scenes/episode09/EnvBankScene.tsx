import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * World Environmental Bank Scene - 世界环保银行
 */
export const EnvBankScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const conceptOpacity = interpolate(frame, [20, 60], [0, 1]);
  const targetOpacity = interpolate(frame, [50, 90], [0, 1]);

  const earthScale = interpolate(frame, [30, 60], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #1a2f1a 0%, #0d1117 100%)" }}>
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#4ade80",
          fontSize: 38,
          fontWeight: 700,
          opacity: titleOpacity,
        }}
      >
        World Environmental Bank
      </div>

      {/* Earth */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${earthScale})`,
          width: 150,
          height: 150,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #22c55e, #15803d)",
          opacity: conceptOpacity,
          boxShadow: "0 0 50px rgba(34, 197, 94, 0.4)",
        }}
      />

      {/* Concept */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          textAlign: "center",
          opacity: conceptOpacity,
        }}
      >
        <div style={{ fontSize: 18, color: "#e8e8e8", marginBottom: 15 }}>
          "Debt for Nature Swaps"
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af" }}>
          债务国可以用自然资源来抵偿债务
        </div>
      </div>

      {/* Target */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: targetOpacity,
        }}
      >
        <div style={{ fontSize: 16, color: "#9ca3af", marginBottom: 10 }}>Target Areas:</div>
        <div style={{ fontSize: 48, color: "#ef4444", fontWeight: 700 }}>50M km²</div>
        <div style={{ fontSize: 14, color: "#9ca3af" }}>
          拉丁美洲、非洲和亚洲的生态土地
        </div>
      </div>
    </AbsoluteFill>
  );
};
