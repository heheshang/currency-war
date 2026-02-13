import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { HistoricalFigure } from "../../characters/HistoricalFigure";
import { getFigure } from "../../characters/historicalFigures";

/**
 * TrilateralCommissionScene - 场景6：三边委员会
 *
 * 介绍三边委员会 - 世界政府的推手
 * 展示其成员和全球治理计划
 *
 * 时长：60秒（1,800帧 @ 30fps）
 * 开始帧：11,100（370秒 @ 30fps）
 */
export const TrilateralCommissionScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Get historical figures
  const brzezinskiFigure = getFigure("zbigniew_brzezinski");
  const rockefellerFigure = getFigure("david_rockefeller");
  const brzezinskiPhoto = brzezinskiFigure?.photoSrc || "";
  const rockefellerPhoto = rockefellerFigure?.photoSrc || "";

  // 标题淡入
  const titleOpacity = interpolate(frame, [30, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 介绍淡入
  const introOpacity = interpolate(frame, [150, 240], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 人物淡入
  const figuresOpacity = interpolate(frame, [270, 360], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 使命淡入
  const missionOpacity = interpolate(frame, [450, 540], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 成果淡入
  const resultOpacity = interpolate(frame, [630, 720], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 底部引言淡入
  const quoteOpacity = interpolate(frame, [810, 900], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* 主标题 */}
      <div
        style={{
          position: "absolute",
          top: "3%",
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
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 3,
            textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
          }}
        >
          Trilateral Commission
        </div>
        <div
          style={{
            fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif",
            fontSize: 28,
            color: "#d4d4d4",
            textAlign: "center",
            marginTop: 10,
            letterSpacing: 4,
          }}
        >
          三边委员会 — 世界政府之路
        </div>
      </div>

      {/* 介绍 */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "5%",
          width: "55%",
          opacity: introOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "rgba(30, 58, 90, 0.9)",
            border: "3px solid #ffd700",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ffd700",
              marginBottom: 16,
            }}
          >
            "The Road to World Government"
          </div>
          <div style={{ fontSize: 15, color: "#e8e8e8", lineHeight: "1.8" }}>
            <div style={{ marginBottom: 10 }}>
              <span style={{ color: "#22c55e" }}>Founded:</span> 1973, David Rockefeller
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ color: "#22c55e" }}>Purpose:</span> Coordinate North America, Europe, Japan
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ color: "#22c55e" }}>Members:</span> 350+ global elites
            </div>
            <div>
              <span style={{ color: "#22c55e" }}>Focus:</span> Global governance architecture
            </div>
          </div>
        </div>
      </div>

      {/* 创始人介绍 */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          right: "5%",
          width: "35%",
          opacity: introOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(30, 58, 90, 0.9)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ffd700",
              marginBottom: 12,
            }}
          >
            Founders
          </div>
          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.7" }}>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#3b82f6" }}>David Rockefeller</span>
              <br />
              <span style={{ color: "#9ca3af" }}>Chairman, Chase Manhattan Bank</span>
            </div>
            <div>
              <span style={{ color: "#3b82f6" }}>Zbigniew Brzezinski</span>
              <br />
              <span style={{ color: "#9ca3af" }}>First Executive Director</span>
            </div>
          </div>
        </div>
      </div>

      {/* 关键人物 */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "60px",
          opacity: figuresOpacity,
        }}
      >
        {/* 布热津斯基 */}
        <div style={{ textAlign: "center" }}>
          <HistoricalFigure
            x={0}
            y={0}
            scale={0.8}
            photoSrc={brzezinskiPhoto}
            nameEn="Zbigniew Brzezinski"
            nameCn="兹比格涅夫·布热津斯基"
            action="thinking"
            frameStyle="modern"
            photoFilter="none"
            showLabel={true}
            frame={frame}
            startFrame={270}
            animEffect="fadeIn"
          />
        </div>

        {/* 戴维·洛克菲勒 */}
        <div style={{ textAlign: "center" }}>
          <HistoricalFigure
            x={0}
            y={0}
            scale={0.8}
            photoSrc={rockefellerPhoto}
            nameEn="David Rockefeller"
            nameCn="戴维·洛克菲勒"
            action="serious"
            frameStyle="modern"
            photoFilter="none"
            showLabel={true}
            frame={frame}
            startFrame={270}
            animEffect="fadeIn"
          />
        </div>
      </div>

      {/* 使命 */}
      <div
        style={{
          position: "absolute",
          top: "68%",
          left: "5%",
          width: "55%",
          opacity: missionOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(30, 58, 90, 0.85)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ffd700",
              marginBottom: 12,
            }}
          >
            Mission Statement
          </div>
          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.7" }}>
            <div style={{ marginBottom: 8 }}>
              ▸ Foster closer cooperation among North America, Western Europe, and Japan
            </div>
            <div style={{ marginBottom: 8 }}>
              ▸ Create a new international economic order
            </div>
            <div>
              ▸ Build global governance institutions
            </div>
          </div>
        </div>
      </div>

      {/* 成果 */}
      <div
        style={{
          position: "absolute",
          top: "68%",
          right: "5%",
          width: "35%",
          opacity: resultOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(34, 197, 94, 0.2)",
            border: "2px solid #22c55e",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#22c55e",
              marginBottom: 12,
            }}
          >
            ✓ Achievements
          </div>
          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.7" }}>
            <div style={{ marginBottom: 8 }}>
              ▸ G7/G8 summits initiated
            </div>
            <div style={{ marginBottom: 8 }}>
              ▸ Global governance frameworks
            </div>
            <div>
              ▸ International policy coordination
            </div>
          </div>
        </div>
      </div>

      {/* 底部引言 */}
      <div
        style={{
          position: "absolute",
          bottom: "3%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            lineHeight: "1.6",
          }}
        >
          "The Trilateral Commission is the visible instrument
          <br />
          of a world planner elite."
        </div>
      </div>
    </AbsoluteFill>
  );
};
