import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

const DocumentaryStockExchangeScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <ImageLayer
        src="/assets/images/ep02/ep02-london-exchange.jpg"
        kenBurns={{ panDirection: "zoom-in", intensity: "moderate" }}
        layer={{ opacity: 0.75, blendMode: "normal", filter: "dramatic" }}
        startFrame={0}
        durationFrames={1800}
      />

      <Vignette intensity={0.5} />
      <FilmGrain opacity={0.07} />

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {frame < 300 && (
          <div
            style={{
              position: "absolute",
              top: "12%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [0, 30, 240, 300], [0, 1, 1, 0]),
            }}
          >
            <CinematicText
              text="THE LONDON STOCK EXCHANGE"
              fontSize={36}
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
              1815年6月20日，历史性的一天
            </p>
          </div>
        )}

        {frame >= 180 && frame < 600 && (
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "16px",
                color: "#ef4444",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "20px",
                opacity: interpolate(frame, [180, 210], [0, 1], {
                  extrapolateRight: "clamp",
                }),
              }}
            >
              恐慌蔓延
            </div>

            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "80px",
                fontWeight: 700,
                color: "#ef4444",
                textShadow: "0 0 30px rgba(239, 68, 68, 0.6)",
                opacity: interpolate(frame, [210, 240], [0, 1], {
                  extrapolateRight: "clamp",
                }),
              }}
            >
              {interpolate(frame, [240, 480], [100, 5], {
                extrapolateRight: "clamp",
              }).toFixed(0)}
              <span style={{ fontSize: "40px" }}>%</span>
            </div>
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "18px",
                color: "#9ca3af",
                marginTop: "10px",
                opacity: interpolate(frame, [270, 300], [0, 1], {
                  extrapolateRight: "clamp",
                }),
              }}
            >
              英国债券价格
            </div>
          </div>
        )}

        {frame >= 480 && frame < 900 && (
          <div
            style={{
              position: "absolute",
              top: "35%",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              opacity: interpolate(frame, [480, 510, 840, 900], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                background: "rgba(13, 17, 23, 0.9)",
                border: "2px solid #ECC94B",
                borderRadius: "12px",
                padding: "30px 50px",
                boxShadow: "0 0 40px rgba(236, 201, 75, 0.3)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "16px",
                  color: "#ECC94B",
                  letterSpacing: "2px",
                  marginBottom: "15px",
                }}
              >
                NATHAN'S MOVE
              </div>
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "36px",
                  color: "#ECC94B",
                  fontWeight: 600,
                  textShadow: "0 0 30px rgba(236, 201, 75, 0.6)",
                }}
              >
                "全部买入！"
              </div>
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "16px",
                  color: "#9ca3af",
                  marginTop: "15px",
                }}
              >
                当所有人都在抛售时
              </div>
            </div>
          </div>
        )}

        {frame >= 840 && (
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [840, 870], [0, 1], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "20px",
                color: "#e8e8e8",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              内森知道真相：
              <span style={{ color: "#ECC94B" }}> 威灵顿获胜了。</span>
              <br />
              他开始疯狂买入贬值的英国债券。
            </div>
          </div>
        )}
      </div>

      <DocumentaryOverlay
        year="1815"
        title="London Stock Exchange"
        subtitle="June 20, 1815"
        source="Historical Illustration"
        frame={Math.max(0, frame - 1500)}
        fadeInDuration={30}
      />
    </AbsoluteFill>
  );
};

export default DocumentaryStockExchangeScene;
