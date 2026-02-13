import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Financial Risk Scene - 金融开放风险
 */
export const FinancialRiskScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const riskOpacity = interpolate(frame, [20, 60], [0, 1]);
  const warningOpacity = interpolate(frame, [50, 90], [0, 1]);

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
        Financial Opening Risks
      </div>

      {/* Risk */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          textAlign: "center",
          opacity: riskOpacity,
        }}
      >
        <div style={{ fontSize: 24, color: "#e8e8e8", marginBottom: 20 }}>The Biggest Risk:</div>

        <div
          style={{
            padding: "20px 40px",
            background: "rgba(239, 68, 68, 0.2)",
            borderRadius: 12,
            border: "2px solid #ef4444",
          }}
        >
          <div style={{ fontSize: 32, color: "#ef4444", fontWeight: 700 }}>Lack of "War" Awareness</div>
          <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 10 }}>缺乏"战争"意识</div>
        </div>
      </div>

      {/* Warning */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          textAlign: "center",
          opacity: warningOpacity,
        }}
      >
        <div style={{ fontSize: 18, color: "#fbbf24", marginBottom: 15 }}>
          货币战争不宣而战
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af" }}>
          金融开放必须谨慎推进
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>
          必须在建立强大金融防御体系之后
        </div>
      </div>
    </AbsoluteFill>
  );
};
