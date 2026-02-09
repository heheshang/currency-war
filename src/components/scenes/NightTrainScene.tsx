import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, random } from "remotion";

/**
 * NightTrainScene - 夜行火车场景
 *
 * 展现1910年11月22日，银行家们乘坐私人火车前往哲基尔岛
 * 神秘的夜行氛围
 */
export const NightTrainScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 火车速度（前景移动）
  const trainPosition = interpolate(frame, [0, 120], [-50, 1200]);

  // 铁轨移动
  const trackOffset = interpolate(frame, [0, 120], [0, -400]);

  // 星星闪烁
  const starTwinkle = Math.sin(frame * 0.1) * 0.5 + 0.5;

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0a0a15 0%, #1a1a2e 100%)",
      }}
    >
      {/* 星空 */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${10 + (i % 5) * 15}%`,
            left: `${10 + i * 18}%`,
            width: 3,
            height: 3,
            background: "#fff",
            borderRadius: "50%",
            opacity: starTwinkle * (0.3 + random(null) * 0.3),
          }}
        />
      ))}

      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontSize: 36,
          fontWeight: 700,
          textAlign: "center",
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        The Secret Journey
      </div>

      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#9ca3af",
          fontFamily: "Merriweather, serif",
          fontSize: 16,
          fontStyle: "italic",
          opacity: interpolate(frame, [20, 50], [0, 1]),
        }}
      >
        November 22, 1910
      </div>

      {/* 铁轨 */}
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          left: 0,
          right: 0,
          height: 100,
        }}
      >
        {/* 铁轨线 */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: 0,
          }}
        >
          <div
            style={{
              width: "200%",
              height: 8,
              background:
                "repeating-linear-gradient(90deg, #3a3a3a 0px, #4a4a4a 30px, #3a3a3a 60px)",
              transform: `translateX(${trackOffset}px)`,
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 38,
            left: 0,
          }}
        >
          <div
            style={{
              width: "200%",
              height: 8,
              background:
                "repeating-linear-gradient(90deg, #3a3a3a 0px, #4a4a4a 30px, #3a3a3a 60px)",
              transform: `translateX(${trackOffset}px)`,
            }}
          />
        </div>
      </div>

      {/* 火车 */}
      <div
        style={{
          position: "absolute",
          bottom: "38%",
          left: `${trainPosition}px`,
        }}
      >
        {/* 车身 */}
        <div
          style={{
            width: 300,
            height: 100,
            background: "linear-gradient(180deg, #1a1a2e 0%, #0d0d1a 100%)",
            borderRadius: "10px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            border: "2px solid #2d3748",
          }}
        >
          {/* 窗户 */}
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              width: 40,
              height: 30,
              background: "rgba(255, 215, 0, 0.8)",
              borderRadius: 4,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 40,
              height: 30,
              background: "rgba(255, 215, 0, 0.8)",
              borderRadius: 4,
            }}
          />
        </div>

        {/* 车头 */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 50,
            width: 20,
            height: 40,
            background: "#2d3748",
            borderRadius: "0 0 5px 5px",
          }}
        />
      </div>

      {/* 说明文字 */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontFamily: "Merriweather, serif",
          fontSize: 18,
          textAlign: "center",
          maxWidth: "70%",
          opacity: interpolate(frame, [60, 90], [0, 1]),
        }}
      >
        Traveling in disguise to avoid detection...
        <br />
        <span
          style={{
            color: "#ffd700",
            fontWeight: 600,
          }}
        >
          ...to their secret destination.
        </span>
      </div>
    </AbsoluteFill>
  );
};
