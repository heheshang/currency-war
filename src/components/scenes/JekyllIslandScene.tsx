import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * JekyllIslandScene - 哲基尔岛场景
 *
 * 展现1910年11月，7位银行家前往哲基尔岛的神秘旅程
 * 孤岛豪华会所的秘密会议
 */
export const JekyllIslandScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 海浪动画
  const waveOffset = interpolate(frame, [0, 120], [0, 30]);

  // 火车光
  const trainLightOpacity = interpolate(frame % 30, [0, 15, 30], [0, 1, 0]);

  // 建筑淡入
  const buildingOpacity = interpolate(frame, [30, 90], [0, 0.8]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0a0a15 0%, #1a1a2e 100%)",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontSize: 42,
          fontWeight: 700,
          textAlign: "center",
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        Jekyll Island
      </div>

      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#9ca3af",
          fontFamily: "Merriweather, serif",
          fontSize: 18,
          fontStyle: "italic",
          opacity: interpolate(frame, [20, 50], [0, 1]),
        }}
      >
        November 1910
      </div>

      {/* 海洋 */}
      <svg
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
        }}
        viewBox="0 0 1920 400"
        preserveAspectRatio="none"
      >
        {/* 波浪 */}
        {Array.from({ length: 5 }).map((_, i) => (
          <path
            key={i}
            d={`M 0 ${200 + i * 10} Q 480 ${150 + i * 5}, 960 ${200 + i * 10} T 1920 ${200 + i * 10}`}
            fill="none"
            stroke="rgba(30, 58, 90, 0.3)"
            strokeWidth={2}
            transform={`translateY(${waveOffset + i * 10}px)`}
          />
        ))}
      </svg>

      {/* 岛屿轮廓 */}
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: buildingOpacity,
        }}
      >
        <svg width={400} height={200} viewBox="0 0 400 200">
          {/* 岛屿形状 */}
          <ellipse
            cx="200"
            cy="120"
            rx="180"
            ry="60"
            fill="rgba(26, 26, 46, 0.9)"
          />
          {/* 建筑物 */}
          <rect
            x="150"
            y="60"
            width="100"
            height="80"
            fill="rgba(15, 15, 25, 0.95)"
          />
          {/* 窗户灯光 */}
          <rect
            x="170"
            y="80"
            width="15"
            height="15"
            fill="#ffd700"
            opacity={trainLightOpacity}
          />
          <rect
            x="215"
            y="80"
            width="15"
            height="15"
            fill="#ffd700"
            opacity={trainLightOpacity}
          />
        </svg>
      </div>

      {/* 说明文字 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontFamily: "Merriweather, serif",
          fontSize: 20,
          textAlign: "center",
          maxWidth: "70%",
          lineHeight: "1.6",
          opacity: interpolate(frame, [60, 90], [0, 1]),
        }}
      >
        An isolated island... where 7 powerful men gathered in secret
        <br />
        <span
          style={{
            color: "#ffd700",
            fontWeight: 600,
          }}
        >
          ...to change history forever.
        </span>
      </div>
    </AbsoluteFill>
  );
};
