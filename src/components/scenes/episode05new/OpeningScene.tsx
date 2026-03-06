import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../documentary";

/**
 * OpeningScene - 第五章开场
 * 黄金与货币自由
 */
export const OpeningScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const quoteOpacity = interpolate(frame, [150, 240], [0, 1], {
    extrapolateRight: "clamp",
  });

  const authorOpacity = interpolate(frame, [300, 360], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* 背景图片 - 黄金/金币 */}
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep02/ep02-gold-coins-wealth.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "dramatic" }}
          layer={{ filter: "vintage", opacity: 0.7 }}
          startFrame={0}
          durationFrames={1350}
        />
      </div>

      <Vignette intensity={0.85} />
      <FilmGrain opacity={0.1} />

      <DocumentaryOverlay
        year="Chapter 5"
        title="Cheap Money and the New Deal"
        subtitle="廉价货币的「新政」"
        frame={frame - 30}
        fadeInDuration={45}
      />

      {/* 主标题 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            padding: "30px 60px",
            background: "rgba(0, 0, 0, 0.85)",
            border: "3px solid #ffd700",
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 48,
              color: "#ffd700",
              fontWeight: 700,
              letterSpacing: 4,
            }}
          >
            黄金与自由
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 18,
              color: "#e8e8e8",
              marginTop: 16,
            }}
          >
            Gold and Freedom
          </div>
        </div>
      </div>

      {/* 凯恩斯名言 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "75%",
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
            lineHeight: 1.8,
            borderLeft: "4px solid #ffd700",
            borderRight: "4px solid #ffd700",
            padding: "20px 40px",
          }}
        >
          "颠覆资本主义制度最好的办法就是使其货币贬值。通过连续的通货膨胀过程，
          政府可以秘密地、不为人知地没收公民财富的一部分。"
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#ffd700",
            textAlign: "center",
            marginTop: 16,
            letterSpacing: 2,
            opacity: authorOpacity,
          }}
        >
          —— 凯恩斯，1919年
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default OpeningScene;
