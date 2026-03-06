/**
 * DocumentaryMayersFirstFortuneScene.tsx
 *
 * Documentary-style scene for Episode 02 - Mayer Rothschild's First Fortune
 * Features historical imagery with Ken Burns effects and vintage filters
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

const DocumentaryMayersFirstFortuneScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <ImageLayer
        src="/assets/images/ep02/ep02-mayer-rothschild.jpg"
        kenBurns={{ panDirection: "right", intensity: "subtle" }}
        layer={{ opacity: 0.6, blendMode: "normal", filter: "vintage" }}
        startFrame={0}
        durationFrames={1800}
      />

      <Vignette intensity={0.5} />
      <FilmGrain opacity={0.06} />

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {frame < 300 && (
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [0, 30, 240, 300], [0, 1, 1, 0]),
            }}
          >
            <CinematicText
              text="MAYER'S FIRST FORTUNE"
              fontSize={38}
              color="#ECC94B"
              frame={frame}
              fadeInDuration={30}
              position="top"
            />
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "18px",
                color: "#e8e8e8",
                marginTop: 15,
              }}
            >
              从古钱币商到皇室银行家
            </p>
          </div>
        )}

        {frame >= 180 && frame < 600 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              opacity: interpolate(frame, [180, 210, 540, 600], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                background: "rgba(26, 26, 46, 0.95)",
                border: "1px solid #ECC94B",
                borderRadius: "10px",
                padding: "30px",
                boxShadow: "0 4px 30px rgba(236, 201, 75, 0.2)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "18px",
                  color: "#ECC94B",
                  marginBottom: "20px",
                  fontWeight: 600,
                }}
              >
                法兰克福的犹太区
              </h3>
              <p
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "15px",
                  color: "#e8e8e8",
                  lineHeight: 1.8,
                }}
              >
                1744年，梅耶·阿姆谢尔·罗斯柴尔德出生于法兰克福犹太区。
                <br />
                他从古钱币生意起家，凭借专业知识和诚信声誉，
                <br />
                逐渐吸引了贵族客户，包括黑森-卡塞尔的威廉王子。
              </p>
            </div>
          </div>
        )}

        {frame >= 540 && frame < 1050 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              opacity: interpolate(frame, [540, 570, 990, 1050], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "14px",
                color: "#9ca3af",
                letterSpacing: "3px",
                marginBottom: "20px",
              }}
            >
              PRINCE WILLIAM'S TRUST
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "72px",
                fontWeight: 700,
                color: "#ECC94B",
                textShadow: "0 0 40px rgba(236, 201, 75, 0.6)",
              }}
            >
              £
              {interpolate(frame, [570, 720], [0, 300], {
                extrapolateRight: "clamp",
              }).toFixed(0)}
              万
            </div>
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "16px",
                color: "#9ca3af",
                marginTop: "15px",
              }}
            >
              委托管理的财富
            </div>
          </div>
        )}

        {frame >= 990 && (
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [990, 1020], [0, 1], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "20px",
                color: "#e8e8e8",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: 1.8,
                fontStyle: "italic",
              }}
            >
              他将这笔资金派往五个儿子即将建立银行的五个欧洲城市，
              <br />
              成为<span style={{ color: "#ECC94B" }}>罗斯柴尔德金融帝国</span>
              的启动资本
            </p>
          </div>
        )}
      </div>

      <DocumentaryOverlay
        year="1760"
        title="Mayer Rothschild"
        subtitle="From Coin Dealer to Royal Banker"
        source="Historical Archives"
        frame={Math.max(0, frame - 1500)}
        fadeInDuration={30}
      />
    </AbsoluteFill>
  );
};

export default DocumentaryMayersFirstFortuneScene;
