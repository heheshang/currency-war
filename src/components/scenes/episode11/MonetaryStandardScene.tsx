import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Monetary Standard Scene - 货币度量衡
 */
export const MonetaryStandardScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const analogyOpacity = interpolate(frame, [20, 60], [0, 1]);
  const problemOpacity = interpolate(frame, [50, 90], [0, 1]);

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
        Currency as Measurement
      </div>

      {/* Analogy */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          textAlign: "center",
          opacity: analogyOpacity,
        }}
      >
        <div style={{ fontSize: 18, color: "#e8e8e8", marginBottom: 20 }}>
          货币是经济领域的"度量衡"
        </div>

        {/* Ruler analogy */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginBottom: 20,
          }}
        >
          {["📏 米", "⚖️ 千克", "⏱️ 秒"].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "15px 25px",
                background: "rgba(59, 130, 246, 0.15)",
                borderRadius: 8,
                border: "1px solid #3b82f6",
                fontSize: 16,
                color: "#3b82f6",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <div style={{ fontSize: 16, color: "#9ca3af", fontStyle: "italic" }}>
          一个每天都在剧烈动荡的货币体系
          <br />
          就如同米和秒的定义时时刻都不停地变化一样荒谬
        </div>
      </div>

      {/* Problem */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          textAlign: "center",
          opacity: problemOpacity,
        }}
      >
        <div style={{ fontSize: 24, color: "#ef4444", fontWeight: 700, marginBottom: 10 }}>
          Since 1971, Dollar Lost 94.4% Purchasing Power
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af" }}>
          自1971年以来，美元丧失了94.4%的购买力
        </div>
      </div>
    </AbsoluteFill>
  );
};
