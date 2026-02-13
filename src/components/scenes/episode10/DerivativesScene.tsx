import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Derivatives Scene - 金融衍生品
 */
export const DerivativesScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const numberOpacity = interpolate(frame, [20, 60], [0, 1]);
  const dangerOpacity = interpolate(frame, [50, 90], [0, 1]);

  const bubbleScale = interpolate(frame, [30, 60], [0, 1.2]);

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
        Financial Derivatives
      </div>

      {/* Bubble visualization */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${bubbleScale})`,
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239, 68, 68, 0.3), rgba(239, 68, 68, 0.1))",
          border: "3px dashed #ef4444",
          opacity: numberOpacity,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 48, color: "#ef4444", fontWeight: 700 }}>$370T</div>
          <div style={{ fontSize: 14, color: "#9ca3af" }}>Notional Value</div>
        </div>
      </div>

      {/* Comparison */}
      <div
        style={{
          position: "absolute",
          top: "65%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 40,
          opacity: numberOpacity,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 32, color: "#ef4444", fontWeight: 700 }}>$370T</div>
          <div style={{ fontSize: 12, color: "#9ca3af" }}>Derivatives</div>
        </div>
        <div style={{ fontSize: 32, color: "#ffd700", marginTop: 5 }}>vs</div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 32, color: "#3b82f6", fontWeight: 700 }}>$45T</div>
          <div style={{ fontSize: 12, color: "#9ca3af" }}>Global GDP</div>
        </div>
      </div>

      {/* Warning */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: dangerOpacity,
        }}
      >
        <div style={{ fontSize: 20, color: "#ef4444", fontWeight: 700 }}>8× Global GDP!</div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>
          一个没有规则、没有监管、没有任何中央清算机制的巨大赌场
        </div>
      </div>
    </AbsoluteFill>
  );
};
