import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Episode11 Ending Scene - 结尾
 */
export const EndingScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const contentOpacity = interpolate(frame, [20, 60], [0, 1]);
  const footerOpacity = interpolate(frame, [80, 120], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "radial-gradient(circle at center, #1a2f1a 0%, #0d0d0d 100%)" }}>
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
        Conclusion
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
          { icon: "📏", text: "没有稳定的货币度量衡，就没有平衡的经济", color: "#e8e8e8" },
          { icon: "🥇", text: "黄金和白银是诚实的货币", color: "#4ade80" },
          { icon: "🧱", text: "中国必须为货币战争做好准备", color: "#fbbf24" },
          { icon: "⚔️", text: "高筑墙、广积粮、缓称王", color: "#ffd700" },
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
        <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 5 }}>Episode 11 - End of Book 1</div>
        <div style={{ fontSize: 14, color: "#6b7280", marginTop: 10 }}>货币战争系列第一季完</div>
      </div>
    </AbsoluteFill>
  );
};
