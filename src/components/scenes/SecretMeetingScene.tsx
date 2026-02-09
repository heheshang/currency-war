import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * SecretMeetingScene - 秘密会议场景
 *
 * 展现7位银行家在哲基尔岛的9天秘密会议
 * 使用剪影风格营造神秘氛围
 */
export const SecretMeetingScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 烛光闪烁
  const fireFlicker = interpolate(frame % 20, [0, 10, 20], [0.5, 1, 0.5]);

  // 阴影渐入
  const shadowOpacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #2d1f1f 0%, #0d0d0d 100%)",
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
        The Secret Meeting
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
        Jekyll Island, Georgia
      </div>

      {/* 会议桌 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          height: 200,
          opacity: shadowOpacity,
        }}
      >
        {/* 桌子 */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 300,
            height: 40,
            background: "#1a1a1a",
            borderRadius: "5px",
          }}
        />

        {/* 火光 */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 20,
            width: 40,
            height: 60,
            background: `radial-gradient(circle at 50% 0%, rgba(255, 215, 0, ${fireFlicker}), transparent 70%)`,
            filter: "blur(20px)",
          }}
        />

        {/* 银行家剪影 */}
        {Array.from({ length: 7 }).map((_, i) => {
          const angle = (i / 6) * 180 - 90;
          const radius = 100;
          const x = 200 + Math.cos((angle * Math.PI) / 180) * radius;
          const y = 100 + Math.sin((angle * Math.PI) / 180) * radius * 0.3;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* 身体剪影 */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 40,
                  height: 80,
                  background: "rgba(10, 10, 10, 0.9)",
                  borderRadius: "20px 20px 0 0",
                  transform: `translate(${x - 20}px, ${y - 40}px)`,
                }}
              />
              {/* 头部剪影 */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 25,
                  height: 25,
                  background: "rgba(10, 10, 10, 0.9)",
                  borderRadius: "50%",
                  transform: `translate(${x - 12.5}px, ${y - 70}px)`,
                }}
              />
            </div>
          );
        })}

        {/* 文件 */}
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 60,
            height: 40,
            background: "#ffd700",
            opacity: 0.8,
            borderRadius: 2,
          }}
        />
      </div>

      {/* 参与者名单 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#9ca3af",
          fontFamily: "Merriweather, serif",
          fontSize: 14,
          textAlign: "center",
          maxWidth: "70%",
          lineHeight: "1.6",
          opacity: interpolate(frame, [90, 120], [0, 1]),
        }}
      >
        Nelson Aldrich • Frank Vanderlip • Paul Warburg •
        <br />
        Henry Davison • Benjamin Strong • Charles Norton • Abraham Piatt
      </div>

      {/* 日期计数 */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 24,
          fontWeight: 700,
          textAlign: "center",
          opacity: interpolate(frame, [120, 150], [0, 1]),
        }}
      >
        {Math.floor(interpolate(frame, [0, 180], [0, 9]))} Days of Secrecy
      </div>
    </AbsoluteFill>
  );
};
