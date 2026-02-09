import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * AncientMarketScene - 古代集市场景
 *
 * 展现古代金币在阳光下闪耀，人们用金币交易的场景
 * 建立"货币即财富"的基本概念
 */
export const AncientMarketScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 金币旋转
  const coinRotation = interpolate(frame, [0, 120], [0, 360]);

  // 阳光角度
  const sunAngle = interpolate(frame, [0, 120], [0, 45]);

  // 市场人群淡入
  const crowdOpacity = interpolate(frame, [30, 90], [0, 0.8]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #87CEEB 0%, #F0E68C 100%)",
      }}
    >
      {/* 太阳 */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: 120,
          height: 120,
          background:
            "radial-gradient(circle, #FFD700 0%, #FFA500 50%, transparent 70%)",
          borderRadius: "50%",
          transform: `rotate(${sunAngle}deg)`,
          opacity: 0.8,
        }}
      />

      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#1a1a1a",
          fontFamily: "Cinzel, serif",
          fontSize: 48,
          fontWeight: 700,
          textAlign: "center",
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        Ancient Marketplace
      </div>

      <div
        style={{
          position: "absolute",
          top: "23%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#4a4a4a",
          fontFamily: "Merriweather, serif",
          fontSize: 20,
          fontStyle: "italic",
          opacity: interpolate(frame, [20, 50], [0, 1]),
        }}
      >
        Where gold was king
      </div>

      {/* 金币 */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{
            width: 150,
            height: 150,
            background: "radial-gradient(circle at 30% 30%, #FFD700, #DAA520)",
            borderRadius: "50%",
            boxShadow: `
              0 0 30px rgba(255, 215, 0, 0.8),
              inset 0 -5px 10px rgba(0, 0, 0, 0.3),
              inset 0 5px 10px rgba(255, 255, 255, 0.3)
            `,
            transform: `rotate(${coinRotation}deg)`,
            border: "8px solid #B8860B",
          }}
        />
      </div>

      {/* 市场人群剪影 */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          opacity: crowdOpacity,
        }}
      >
        {/* 左侧人群 */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`left-${i}`}
            style={{
              position: "absolute",
              bottom: 0,
              left: `${10 + i * 8}%`,
              width: 40,
              height: 80 + i * 10,
              background: "rgba(26, 26, 26, 0.8)",
              borderRadius: "50% 50% 0 0",
            }}
          />
        ))}

        {/* 右侧人群 */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`right-${i}`}
            style={{
              position: "absolute",
              bottom: 0,
              right: `${10 + i * 8}%`,
              width: 40,
              height: 80 + i * 10,
              background: "rgba(26, 26, 26, 0.8)",
              borderRadius: "50% 50% 0 0",
            }}
          />
        ))}
      </div>

      {/* 说明文字 */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#1a1a1a",
          fontFamily: "Merriweather, serif",
          fontSize: 24,
          textAlign: "center",
          maxWidth: "70%",
          lineHeight: "1.6",
          opacity: interpolate(frame, [60, 90], [0, 1]),
        }}
      >
        In ancient times, gold was more than money...
        <br />
        <span
          style={{
            color: "#B8860B",
            fontWeight: 600,
          }}
        >
          It was wealth itself.
        </span>
      </div>
    </AbsoluteFill>
  );
};
