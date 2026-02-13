import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Financial Air Force Scene - 金融是战略空军
 */
export const FinancialAirForceScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const analogyOpacity = interpolate(frame, [20, 60], [0, 1]);
  const meaningOpacity = interpolate(frame, [50, 90], [0, 1]);

  const planeScale = interpolate(frame, [30, 60], [0, 1]);

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
        Finance: Strategic Air Force
      </div>

      {/* Air Force analogy */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: analogyOpacity,
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${planeScale})`,
            boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)",
            margin: "0 auto 20px",
          }}
        >
          <span style={{ fontSize: 48 }}>✈️</span>
        </div>

        <div style={{ fontSize: 18, color: "#e8e8e8", marginBottom: 10 }}>
          没有金融空军掩护
        </div>
        <div style={{ fontSize: 24, color: "#ef4444", fontWeight: 700 }}>
          国家只能在价格层面竞争
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>
          无法在货币层面获得优势
        </div>
      </div>

      {/* Quote */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          textAlign: "center",
          opacity: meaningOpacity,
        }}
      >
        <div style={{ fontSize: 18, color: "#ffd700", fontWeight: 600 }}>
          金融是现代战争的核心
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>
          而货币是金融战争的武器
        </div>
      </div>
    </AbsoluteFill>
  );
};
