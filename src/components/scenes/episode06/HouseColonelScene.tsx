import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { HistoricalFigure } from "../../characters/HistoricalFigure";
import { getFigure } from "../../characters/historicalFigures";

/**
 * HouseColonelScene - 场景1：豪斯上校与《菲利浦·杜：管理者》
 *
 * 介绍爱德华·豪斯上校和他的神秘著作
 * 展示"精神教父"的概念
 *
 * 时长：60秒（1,800帧 @ 30fps）
 * 开始帧：1,200（40秒 @ 30fps）
 */
export const HouseColonelScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Get historical figure config
  const houseFigure = getFigure("edward_house");
  const housePhoto = houseFigure?.photoSrc || "";

  // 聚光灯效果
  const spotlightX = interpolate(frame, [0, 300], [30, 50], {
    extrapolateRight: "clamp",
  });
  const spotlightIntensity = interpolate(frame, [0, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 角色淡入
  const characterOpacity = interpolate(frame, [90, 180], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 标题淡入
  const titleOpacity = interpolate(frame, [180, 270], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 描述淡入
  const descOpacity = interpolate(frame, [300, 390], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 书名淡入
  const bookOpacity = interpolate(frame, [480, 570], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 引言淡入
  const quoteOpacity = interpolate(frame, [660, 750], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Action based on frame
  const getAction = (): "serious" | "thinking" | "talking" => {
    if (frame > 600 && frame < 900) return "talking";
    if (frame > 270) return "thinking";
    return "serious";
  };

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
          width: "400px",
          height: "600px",
          background: `radial-gradient(ellipse at center, rgba(255, 215, 0, ${spotlightIntensity * 0.15}) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* 主标题 */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 44,
            color: "#ffd700",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 3,
            textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
          }}
        >
          Colonel Edward House
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 22,
            color: "#e8e8e8",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          1858-1944
        </div>
      </div>

      {/* 豪斯上校角色 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "35%",
          transform: "translate(-50%, -50%)",
          opacity: characterOpacity,
        }}
      >
        <HistoricalFigure
          x={0}
          y={0}
          scale={1.1}
          photoSrc={housePhoto}
          nameEn="Colonel Edward House"
          nameCn="爱德华·豪斯上校"
          action={getAction()}
          frameStyle="classic"
          photoFilter="grayscale"
          showLabel={false}
          frame={frame}
          startFrame={90}
          animEffect="fadeIn"
        />
      </div>

      {/* 右侧信息面板 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          right: "5%",
          width: "45%",
          opacity: descOpacity,
        }}
      >
        <div
          style={{
            padding: "28px",
            background: "rgba(30, 58, 90, 0.9)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 20,
              color: "#ffd700",
              marginBottom: 16,
              letterSpacing: 1,
            }}
          >
            The "Spiritual Godfather"
          </div>
          <div style={{ fontSize: 16, color: "#e8e8e8", lineHeight: "1.8" }}>
            <div style={{ marginBottom: 16 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>
                Nickname:
              </span>{" "}
              "Colonel House"
            </div>
            <div style={{ marginBottom: 16 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>
                Role:
              </span>{" "}
              Advisor to President Woodrow Wilson
            </div>
            <div style={{ marginBottom: 16 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>
                Influence:
              </span>{" "}
              Shadow ruler behind American policy
            </div>
            <div>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>
                Known for:
              </span>{" "}
              Writing "Philip Dru: Administrator"
            </div>
          </div>
        </div>
      </div>

      {/* 书籍展示 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          opacity: bookOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "linear-gradient(135deg, #1e3a5a 0%, #0d1117 100%)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 22,
              color: "#ffd700",
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            Philip Dru: Administrator
          </div>
          <div
            style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              fontSize: 18,
              color: "#e8e8e8",
              marginBottom: 16,
            }}
          >
            菲利浦·杜：管理者
          </div>
          <div style={{ fontSize: 14, color: "#9ca3af", fontStyle: "italic" }}>
            Published 1912
          </div>
        </div>
      </div>

      {/* 底部引言 */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 20,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            lineHeight: "1.6",
            maxWidth: "70%",
          }}
        >
          "The book outlines a plan for world government through
          financial control."
        </div>
      </div>
    </AbsoluteFill>
  );
};
