import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * BattleOfWaterloo - 滑铁卢战场场景
 *
 * 展现1815年6月18日滑铁卢战役的紧张氛围
 * 包含炮火、烟雾、军队等元素
 */
export const BattleOfWaterloo: React.FC = () => {
  const frame = useCurrentFrame();

  // 烟雾透明度动画
  const smokeOpacity = interpolate(frame, [0, 30, 60], [0, 0.6, 0.3], {
    extrapolateRight: "clamp",
  });

  // 炮火闪烁
  const cannonFlash = interpolate(
    frame % 30, // 每30帧闪烁一次
    [0, 5, 10],
    [0, 1, 0],
  );

  // 背景渐变
  const backgroundGradient = `linear-gradient(180deg,
    #1a1a1a 0%,
    #2d1f1f 30%,
    #4a2c2c 60%,
    #1a0a0a 100%
  )`;

  return (
    <AbsoluteFill style={{ background: backgroundGradient }}>
      {/* 烟雾层 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 70%, rgba(100, 80, 60, 0.4) 0%, transparent 70%)",
          opacity: smokeOpacity,
          animation: "float 8s ease-in-out infinite",
        }}
      />

      {/* 炮火效果 */}
      {cannonFlash > 0.1 && (
        <div
          style={{
            position: "absolute",
            bottom: "30%",
            left: "40%",
            width: 200,
            height: 200,
            background:
              "radial-gradient(circle, rgba(255, 150, 50, 0.8) 0%, transparent 70%)",
            opacity: cannonFlash,
            filter: "blur(20px)",
          }}
        />
      )}

      {/* 地面 */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: "linear-gradient(180deg, #2d1f1f 0%, #1a0a0a 100%)",
        }}
      />

      {/* 战场标题 */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontSize: 48,
          fontWeight: 700,
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
          opacity: interpolate(frame, [0, 20], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        Battle of Waterloo
      </div>

      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "5%",
          color: "#e8e8e8",
          fontFamily: "Merriweather, serif",
          fontSize: 24,
          fontStyle: "italic",
          opacity: interpolate(frame, [20, 40], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        June 18, 1815
      </div>

      {/* 军队剪影 */}
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "10%",
          width: 150,
          height: 80,
          background: "rgba(20, 20, 20, 0.8)",
          clipPath:
            "polygon(0% 100%, 20% 60%, 40% 80%, 60% 50%, 80% 70%, 100% 100%)",
          opacity: 0.7,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "15%",
          width: 200,
          height: 100,
          background: "rgba(20, 20, 20, 0.8)",
          clipPath:
            "polygon(0% 100%, 15% 70%, 35% 85%, 55% 55%, 75% 75%, 100% 100%)",
          opacity: 0.6,
        }}
      />
    </AbsoluteFill>
  );
};
