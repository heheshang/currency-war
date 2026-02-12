import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { HistoricalFigure } from "../../characters/HistoricalFigure";
import { getFigure } from "../../characters/historicalFigures";

/**
 * BenjaminStrongScene - 场景0：本杰明·斯特朗肖像
 *
 * 聚光灯效果介绍本杰明·斯特朗
 * 银行家角色（think动作）
 * 标题："控制美国货币的人"
 *
 * Updated to use real historical figure photo instead of cartoon character
 */
export const BenjaminStrongScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Get historical figure config
  const strongFigure = getFigure("benjamin_strong");
  const strongPhoto = strongFigure?.photoSrc || "";

  // 淡入效果
  // const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // 聚光灯移动
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

  // 副标题淡入
  const subtitleOpacity = interpolate(frame, [300, 390], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Action based on frame
  const getAction = (): "serious" | "thinking" | "talking" => {
    if (frame > 420 && frame < 600) return "talking";
    if (frame > 270) return "thinking";
    return "serious";
  };

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at center, #1a1a2e 0%, #0d1117 100%)",
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
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 48,
            color: "#ffd700",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 3,
            textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
          }}
        >
          Benjamin Strong
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 24,
            color: "#e8e8e8",
            textAlign: "center",
            marginTop: 12,
          }}
        >
          1872-1928
        </div>
      </div>

      {/* 斯特朗角色 - 使用真实照片 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: characterOpacity,
        }}
      >
        <HistoricalFigure
          x={0}
          y={0}
          scale={1}
          photoSrc={strongPhoto}
          nameEn="Benjamin Strong Jr."
          nameCn="本杰明·斯特朗"
          action={getAction()}
          frameStyle="classic"
          photoFilter="grayscale"
          showLabel={false}
          frame={frame}
          startFrame={90}
          animEffect="fadeIn"
        />
      </div>

      {/* 单位描述 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "10%",
          opacity: subtitleOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
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
            The Real Power Behind Fed
          </div>
          <div style={{ fontSize: 15, color: "#e8e8e8", lineHeight: "1.8" }}>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>
                Position:
              </span>{" "}
              Governor, Federal Reserve Bank of New York
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>
                Influence:
              </span>{" "}
              Controlled entire Fed system
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>
                Known as:
              </span>{" "}
              "The Fed of Fed"
            </div>
            <div>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>
                Former J.P. Morgan lieutenant
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 底部引言 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: subtitleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 22,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            lineHeight: "1.6",
          }}
        >
          "The power to issue money is supreme authority."
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#ffd700",
            textAlign: "center",
            marginTop: 16,
          }}
        >
          And Benjamin Strong held that power for America.
        </div>
      </div>
    </AbsoluteFill>
  );
};
