import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Strategy Scene - 高筑墙、广积粮、缓称王
 */
export const StrategyScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const strategiesOpacity = interpolate(frame, [20, 60], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)" }}>
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
        }}
      >
        China's Strategy
      </div>

      {/* Three strategies */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          display: "flex",
          justifyContent: "center",
          gap: 20,
          opacity: strategiesOpacity,
        }}
      >
        {/* High Walls */}
        <div
          style={{
            flex: 1,
            padding: "25px 20px",
            background: "rgba(59, 130, 246, 0.15)",
            borderRadius: 12,
            border: "2px solid #3b82f6",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 36, marginBottom: 10 }}>🧱</div>
          <div style={{ fontSize: 24, color: "#3b82f6", fontWeight: 700, marginBottom: 8 }}>高筑墙</div>
          <div style={{ fontSize: 14, color: "#9ca3af" }}>Build financial defense</div>
          <div style={{ fontSize: 12, color: "#6b7280", marginTop: 10 }}>
            建立金融防御系统
            <br />
            防止外国银行控制货币供应
          </div>
        </div>

        {/* Store Grain */}
        <div
          style={{
            flex: 1,
            padding: "25px 20px",
            background: "rgba(251, 191, 36, 0.15)",
            borderRadius: 12,
            border: "2px solid #fbbf24",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 36, marginBottom: 10 }}>🌾</div>
          <div style={{ fontSize: 24, color: "#fbbf24", fontWeight: 700, marginBottom: 8 }}>广积粮</div>
          <div style={{ fontSize: 14, color: "#9ca3af" }}>Accumulate gold & silver</div>
          <div style={{ fontSize: 12, color: "#6b7280", marginTop: 10 }}>
            积累黄金和白银储备
            <br />
            增强货币信心
          </div>
        </div>

        {/* Delay Kingship */}
        <div
          style={{
            flex: 1,
            padding: "25px 20px",
            background: "rgba(34, 197, 94, 0.15)",
            borderRadius: 12,
            border: "2px solid #22c55e",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 36, marginBottom: 10 }}>🐉</div>
          <div style={{ fontSize: 24, color: "#22c55e", fontWeight: 700, marginBottom: 8 }}>缓称王</div>
          <div style={{ fontSize: 14, color: "#9ca3af" }}>Gradual reform</div>
          <div style={{ fontSize: 12, color: "#6b7280", marginTop: 10 }}>
            渐进式改革
            <br />
            数十年积累实力
          </div>
        </div>
      </div>

      {/* Summary */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: interpolate(frame, [70, 100], [0, 1]),
        }}
      >
        <div style={{ fontSize: 20, color: "#ffd700", fontWeight: 600 }}>Three Principles for Currency War</div>
      </div>
    </AbsoluteFill>
  );
};
