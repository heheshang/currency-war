import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Episode06OpeningScene - 场景0：开场 - 精英俱乐部介绍
 *
 * 神秘氛围开场，展示"统治世界的精英俱乐部"主题
 * 暗色调背景、聚光灯效果
 *
 * 时长：40秒（1,200帧 @ 30fps）
 */
export const Episode06OpeningScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 标题淡入
  const titleOpacity = interpolate(frame, [30, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 副标题淡入
  const subtitleOpacity = interpolate(frame, [180, 270], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 引言淡入
  const quoteOpacity = interpolate(frame, [360, 450], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 聚光灯动画
  const spotlightX = interpolate(frame, [0, 600], [20, 80], {
    extrapolateRight: "clamp",
  });
  const spotlightIntensity = interpolate(frame, [0, 90], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 文字闪烁效果
  const flicker = interpolate(
    frame % 180,
    [0, 30, 60, 90, 120, 150, 180],
    [1, 0.9, 1, 0.85, 1, 0.95, 1],
  );

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* 聚光灯效果 */}
      <div
        style={{
          position: "absolute",
          top: "0%",
          left: `${spotlightX}%`,
          transform: "translateX(-50%)",
          width: "500px",
          height: "800px",
          background: `radial-gradient(ellipse at center, rgba(255, 215, 0, ${spotlightIntensity * 0.12}) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* 主标题 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity * flicker,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 56,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 4,
            textShadow: "0 0 40px rgba(255, 215, 0, 0.6), 0 0 80px rgba(255, 215, 0, 0.3)",
          }}
        >
          Episode 06
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 42,
            color: "#e8e8e8",
            textAlign: "center",
            marginTop: 20,
            letterSpacing: 2,
          }}
        >
          Ruling Elite Clubs
        </div>
      </div>

      {/* 中文副标题 */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: subtitleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif",
            fontSize: 36,
            color: "#d4d4d4",
            textAlign: "center",
            letterSpacing: 8,
          }}
        >
          统治世界的精英俱乐部
        </div>
      </div>

      {/* 引言 */}
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 24,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            lineHeight: "1.8",
            borderLeft: "4px solid #ffd700",
            borderRight: "4px solid #ffd700",
            padding: "20px 40px",
          }}
        >
          "Behind the throne stands a shadowy power
          <br />
          that controls the world's financial destiny."
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#ffd700",
            textAlign: "center",
            marginTop: 24,
            letterSpacing: 2,
          }}
        >
          — Currency Wars
        </div>
      </div>

      {/* 背景装饰 - 神秘圆环 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          border: "1px solid rgba(255, 215, 0, 0.1)",
          borderRadius: "50%",
          opacity: interpolate(frame, [0, 300], [0, 0.3], {
            extrapolateRight: "clamp",
          }),
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          border: "1px solid rgba(255, 215, 0, 0.15)",
          borderRadius: "50%",
          opacity: interpolate(frame, [0, 450], [0, 0.2], {
            extrapolateRight: "clamp",
          }),
        }}
      />
    </AbsoluteFill>
  );
};
