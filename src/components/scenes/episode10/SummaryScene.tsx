import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Episode10 Summary Scene - 总结
 */
export const SummaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const contentOpacity = interpolate(frame, [20, 60], [0, 1]);
  const footerOpacity = interpolate(frame, [80, 120], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "radial-gradient(circle at center, #2d1f1f 0%, #0d0d0d 100%)" }}>
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
        }}
      >
        Summary
      </div>

      {/* Content */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          opacity: contentOpacity,
        }}
      >
        {[
          { icon: "🏦", text: "部分储备金 + 债务货币 = 通货膨胀", color: "#ffd700" },
          { icon: "📈", text: "债务永远无法偿还，利率必然越来越低", color: "#fbbf24" },
          { icon: "⚠️", text: "中国美国陷入金融恐怖平衡", color: "#ef4444" },
          { icon: "🥇", text: "黄金是唯一解决方案", color: "#4ade80" },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 18,
              padding: "10px 20px",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: 8,
            }}
          >
            <span style={{ fontSize: 24, marginRight: 15 }}>{item.icon}</span>
            <span style={{ fontSize: 18, color: item.color }}>{item.text}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: footerOpacity,
        }}
      >
        <div style={{ fontSize: 32, color: "#ffd700", fontWeight: 700 }}>Currency War</div>
        <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 5 }}>Episode 10 of 11</div>
      </div>
    </AbsoluteFill>
  );
};
