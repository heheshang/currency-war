import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";
import { GoldCoinRain } from "../../../animations/ParticleEffect";

const DocumentaryTwentyTimesProfitScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <ImageLayer
        src="/assets/images/ep02/ep02-london-exchange.jpg"
        kenBurns={{ panDirection: "zoom-out", intensity: "moderate" }}
        layer={{ opacity: 0.6, blendMode: "normal", filter: "dramatic" }}
        startFrame={0}
        durationFrames={1800}
      />

      <Vignette intensity={0.5} />
      <FilmGrain opacity={0.06} />

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {frame >= 840 && frame < 1500 && <GoldCoinRain intensity="medium" />}

        {frame < 300 && (
          <div
            style={{
              position: "absolute",
              top: "15%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [0, 30, 240, 300], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "32px",
                color: "#ef4444",
                marginBottom: "10px",
                letterSpacing: "2px",
              }}
            >
              恐慌蔓延
            </div>
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "16px",
                color: "#e8e8e8",
              }}
            >
              假消息：威灵顿战败，英国债券崩盘
            </p>
          </div>
        )}

        {frame >= 240 && frame < 600 && (
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              opacity: interpolate(frame, [240, 270, 540, 600], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "20px",
                color: "#e8e8e8",
                marginBottom: "20px",
                letterSpacing: "2px",
              }}
            >
              NATHAN'S STRATEGY
            </div>
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "48px",
                color: "#ECC94B",
                fontWeight: 600,
                textShadow: "0 0 30px rgba(236, 201, 75, 0.6)",
                marginBottom: "20px",
              }}
            >
              "全部买入！"
            </div>
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "18px",
                color: "#9ca3af",
                maxWidth: "500px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              当所有人都在抛售时，
              <br />
              内森开始疯狂买入英国债券
            </div>
          </div>
        )}

        {frame >= 540 && frame < 900 && (
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [540, 570, 780, 840], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "28px",
                color: "#ECC94B",
                marginBottom: "10px",
                letterSpacing: "2px",
                textShadow: "0 0 30px rgba(236, 201, 75, 0.6)",
              }}
            >
              真相揭晓
            </div>
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "18px",
                color: "#e8e8e8",
              }}
            >
              威灵顿获胜！英国赢得战争！
            </p>
          </div>
        )}

        {frame >= 840 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: `${
                  200 *
                  interpolate(frame, [840, 900], [0.5, 1], {
                    extrapolateRight: "clamp",
                  })
                }px`,
                fontWeight: 700,
                color: "#ECC94B",
                textShadow:
                  "0 0 60px rgba(236, 201, 75, 0.8), 0 0 120px rgba(236, 201, 75, 0.4)",
                opacity: interpolate(frame, [840, 870], [0, 1], {
                  extrapolateRight: "clamp",
                }),
                letterSpacing: "10px",
              }}
            >
              20×
            </div>
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "28px",
                color: "#e8e8e8",
                marginTop: "30px",
                opacity: interpolate(frame, [900, 930], [0, 1], {
                  extrapolateRight: "clamp",
                }),
              }}
            >
              二十倍收益
            </div>
          </div>
        )}

        {frame >= 960 && frame < 1500 && (
          <div
            style={{
              position: "absolute",
              bottom: "15%",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              opacity: interpolate(frame, [960, 990], [0, 1], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "12px",
                color: "#9ca3af",
                letterSpacing: "2px",
                marginBottom: "15px",
              }}
            >
              INVESTMENT RETURN
            </div>
            <div
              style={{
                display: "flex",
                gap: "40px",
                justifyContent: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "32px",
                    color: "#e8e8e8",
                    fontWeight: 600,
                  }}
                >
                  £100万
                </div>
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "14px",
                    color: "#9ca3af",
                  }}
                >
                  初始投资
                </div>
              </div>
              <div style={{ fontSize: "32px", color: "#ECC94B" }}>→</div>
              <div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "32px",
                    color: "#ECC94B",
                    fontWeight: 600,
                    textShadow: "0 0 20px rgba(236, 201, 75, 0.6)",
                  }}
                >
                  £2000万
                </div>
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "14px",
                    color: "#ECC94B",
                  }}
                >
                  最终收益
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <DocumentaryOverlay
        year="1815"
        title="20x Profit"
        subtitle="One Day, One Trade"
        source="Historical Records"
        frame={Math.max(0, frame - 1500)}
        fadeInDuration={30}
      />
    </AbsoluteFill>
  );
};

export default DocumentaryTwentyTimesProfitScene;
