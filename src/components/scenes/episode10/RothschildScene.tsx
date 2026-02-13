import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Rothschild Scene - 罗斯柴尔德退出黄金
 */
export const RothschildScene: React.FC = () => {
  const frame = useCurrentFrame();

  const dateOpacity = interpolate(frame, [0, 20], [0, 1]);
  const rothschildOpacity = interpolate(frame, [20, 60], [0, 1]);
  const meaningOpacity = interpolate(frame, [50, 90], [0, 1]);

  const crestScale = interpolate(frame, [30, 60], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)" }}>
      {/* Date */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ef4444",
          fontSize: 48,
          fontWeight: 700,
          opacity: dateOpacity,
        }}
      >
        April 14, 2004
      </div>

      {/* Rothschild crest */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${crestScale})`,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: rothschildOpacity,
          boxShadow: "0 0 40px rgba(124, 58, 237, 0.4)",
        }}
      >
        <span style={{ fontSize: 36, fontWeight: 700, color: "#ffd700" }}>R</span>
      </div>

      {/* Text */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          textAlign: "center",
          opacity: rothschildOpacity,
        }}
      >
        <div style={{ fontSize: 28, color: "#ffd700", fontWeight: 700, marginBottom: 10 }}>Rothschild Exits Gold</div>
        <div style={{ fontSize: 14, color: "#9ca3af" }}>
          罗斯柴尔德家族在控制黄金定价200年后
        </div>
      </div>

      {/* Meaning */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: meaningOpacity,
        }}
      >
        <div style={{ fontSize: 20, color: "#ef4444", fontWeight: 600 }}>A Major Signal!</div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>
          黄金价格即将开始长期上涨
        </div>
      </div>
    </AbsoluteFill>
  );
};
