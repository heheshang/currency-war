import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Gold Prison Scene - 被软禁的黄金
 */
export const GoldPrisonScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const contentOpacity = interpolate(frame, [20, 60], [0, 1]);
  const priceOpacity = interpolate(frame, [50, 90], [0, 1]);

  const goldScale = interpolate(frame, [30, 60], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #1f1f1f 0%, #0d0d0d 100%)" }}>
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#fbbf24",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
        }}
      >
        Gold Imprisoned
      </div>

      {/* Gold bars */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          gap: 10,
          opacity: contentOpacity,
        }}
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              width: 60,
              height: 30,
              background: "linear-gradient(135deg, #fbbf24, #d97706)",
              borderRadius: 2,
              transform: `scale(${goldScale})`,
              boxShadow: "0 5px 15px rgba(251, 191, 36, 0.3)",
            }}
          />
        ))}
      </div>

      {/* 1999 event */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: contentOpacity,
        }}
      >
        <div style={{ fontSize: 28, color: "#e8e8e8", fontWeight: 600 }}>1999: England Sold Half Its Gold</div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 8 }}>
          英国财政部在黄金历史最低点出售了一半的黄金储备
        </div>
      </div>

      {/* Price */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: priceOpacity,
        }}
      >
        <div style={{ fontSize: 56, color: "#ef4444", fontWeight: 700 }}>$280/oz</div>
        <div style={{ fontSize: 16, color: "#9ca3af" }}>Near Historic Lows / 接近历史低点</div>
        <div style={{ fontSize: 14, color: "#6b7280", marginTop: 10 }}>
          国际银行家刻意压低金价
        </div>
      </div>
    </AbsoluteFill>
  );
};
