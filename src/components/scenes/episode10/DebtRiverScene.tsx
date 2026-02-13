import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Debt River Scene - 债务悬河
 */
export const DebtRiverScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const debtOpacity = interpolate(frame, [20, 60], [0, 1]);

  const riverHeight = interpolate(frame, [30, 60], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #1f1f1f 0%, #0d0d0d 100%)" }}>
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ef4444",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
        }}
      >
        US National Debt Crisis
      </div>

      {/* Debt River */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: `${250 * riverHeight}px`,
          background: "linear-gradient(180deg, #dc2626 0%, #7f1d1d 100%)",
          opacity: debtOpacity,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
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
          <div style={{ fontSize: 36, color: "#fff", fontWeight: 700 }}>$44 Trillion</div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>Total US Debt by 2006</div>
        </div>
      </div>

      {/* Per capita */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: debtOpacity,
        }}
      >
        <div style={{ fontSize: 24, color: "#e8e8e8" }}>$150,000 per American</div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>每个美国人承担</div>
      </div>

      {/* Warning */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          background: "rgba(239, 68, 68, 0.2)",
          borderRadius: 8,
          border: "1px solid #ef4444",
          opacity: interpolate(frame, [50, 80], [0, 1]),
        }}
      >
        <div style={{ fontSize: 18, color: "#ef4444", fontWeight: 700 }}>Debt Can Never Be Repaid!</div>
        <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 5 }}>债务永远无法偿还！因为还债需要更多债务</div>
      </div>
    </AbsoluteFill>
  );
};
