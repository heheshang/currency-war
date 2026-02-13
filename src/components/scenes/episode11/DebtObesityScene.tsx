import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Debt Obesity Scene - 债务货币的肥胖
 */
export const DebtObesityScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const analogyOpacity = interpolate(frame, [20, 60], [0, 1]);
  const meaningOpacity = interpolate(frame, [50, 90], [0, 1]);

  const obesityScale = interpolate(frame, [30, 60], [0, 1.3]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)" }}>
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
        Debt-Driven Growth
      </div>

      {/* Analogy */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: analogyOpacity,
        }}
      >
        {/* Person */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #f97316, #ea580c)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${obesityScale})`,
            boxShadow: "0 0 30px rgba(249, 115, 22, 0.4)",
          }}
        >
          <span style={{ fontSize: 48 }}>🧍</span>
        </div>

        <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 15 }}>→</div>

        {/* Scale */}
        <div
          style={{
            marginTop: 10,
            padding: "15px 30px",
            background: "rgba(239, 68, 68, 0.15)",
            borderRadius: 8,
            border: "2px solid #ef4444",
          }}
        >
          <div style={{ fontSize: 18, color: "#ef4444", fontWeight: 700 }}>"Weight Gain = Health"</div>
          <div style={{ fontSize: 12, color: "#9ca3af" }}>如同用体重增加来衡量健康</div>
        </div>

        <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 15 }}>→</div>

        {/* Steroid */}
        <div
          style={{
            marginTop: 10,
            padding: "15px 30px",
            background: "rgba(239, 68, 68, 0.15)",
            borderRadius: 8,
            border: "2px solid #ef4444",
          }}
        >
          <div style={{ fontSize: 18, color: "#ef4444", fontWeight: 700 }}>"Like Steroid Abuse"</div>
          <div style={{ fontSize: 12, color: "#9ca3af" }}>如同类固醇滥用</div>
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
        <div style={{ fontSize: 18, color: "#e8e8e8" }}>债务货币体系下:</div>
        <div style={{ fontSize: 16, color: "#ef4444", marginTop: 8 }}>
          GDP增长 = 更多债务 = 更多货币
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 5 }}>
          停止债务增长，经济就会萎缩
        </div>
      </div>
    </AbsoluteFill>
  );
};
