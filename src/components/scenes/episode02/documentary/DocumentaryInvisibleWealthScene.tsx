/**
 * DocumentaryInvisibleWealthScene.tsx
 *
 * Documentary-style opening scene for Episode 02
 * Features historical imagery with Ken Burns effects and vintage filters
 *
 * Uses ImageLayer for historical painting/portrait backgrounds
 * Uses DocumentaryOverlay for year and source credits
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

const DocumentaryInvisibleWealthScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* Layer 1: Historical Rothschild portrait with Ken Burns zoom */}
      <ImageLayer
        src="/assets/images/ep02/ep02-rothschild-portrait.jpg"
        kenBurns={{ panDirection: "zoom-in", intensity: "subtle" }}
        layer={{ opacity: 0.7, blendMode: "normal", filter: "vintage" }}
        startFrame={0}
        durationFrames={900}
      />

      {/* Vignette overlay for documentary feel */}
      <Vignette intensity={0.5} />

      {/* Film grain for vintage aesthetic */}
      <FilmGrain opacity={0.06} />

      {/* Content Layer */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Episode Title Card (0-5s) */}
        {frame < 150 && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: interpolate(frame, [0, 30, 120, 150], [0, 1, 1, 0], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            <CinematicText
              text="Episode 2"
              fontSize={56}
              color="#ECC94B"
              frame={frame}
              fadeInDuration={30}
              position="center"
            />
            <div
              style={{
                marginTop: 30,
                textAlign: "center",
                opacity: interpolate(frame, [30, 60], [0, 1], {
                  extrapolateRight: "clamp",
                }),
              }}
            >
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: 42,
                  color: "#e8e8e8",
                  marginBottom: 15,
                }}
              >
                罗斯柴尔德家族
              </div>
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: 28,
                  color: "#9ca3af",
                  fontStyle: "italic",
                }}
              >
                "大道无形"的世界首富
              </div>
            </div>
          </div>
        )}

        {/* Mayer's Quote (5-12s) - Documentary style with attribution */}
        {frame >= 120 && frame < 360 && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 15%",
              opacity: interpolate(frame, [120, 150, 300, 360], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                fontSize: "100px",
                color: "#ECC94B",
                opacity: 0.15,
                fontFamily: "Georgia, serif",
                position: "absolute",
                top: "15%",
                left: "8%",
              }}
            >
              "
            </div>

            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "34px",
                color: "#e8e8e8",
                textAlign: "center",
                fontStyle: "italic",
                lineHeight: 1.6,
                marginBottom: "25px",
                textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
              }}
            >
              "Give me control of a nation's money,
              <br />
              and I care not who makes its laws."
            </h2>

            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "22px",
                color: "#ECC94B",
                opacity: 0.9,
                textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
              }}
            >
              "让我控制一个国家的货币，
              <br />
              我不在乎谁制定法律。"
            </p>

            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "18px",
                color: "#ECC94B",
                marginTop: "30px",
                letterSpacing: "2px",
                textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
              }}
            >
              — Mayer Amschel Rothschild, 1790
            </div>
          </div>
        )}

        {/* Wealth Comparison (12-30s) - Documentary infographic style */}
        {frame >= 300 && (
          <AbsoluteFill>
            {/* Modern Billionaires Comparison */}
            <div
              style={{
                position: "absolute",
                top: "12%",
                left: "0",
                right: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: interpolate(frame, [300, 330], [0, 1], {
                  extrapolateRight: "clamp",
                }),
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "14px",
                  color: "#9ca3af",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "25px",
                }}
              >
                2010s Wealth Comparison
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "80px",
                  alignItems: "flex-end",
                }}
              >
                {/* Bill Gates */}
                <div
                  style={{
                    textAlign: "center",
                    opacity: interpolate(frame, [330, 360], [0, 1], {
                      extrapolateRight: "clamp",
                    }),
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "28px",
                      color: "#e8e8e8",
                      fontWeight: 600,
                    }}
                  >
                    $500亿
                  </div>
                  <div
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "14px",
                      color: "#6b7280",
                      marginTop: "8px",
                    }}
                  >
                    比尔·盖茨
                  </div>
                </div>

                {/* Elon Musk */}
                <div
                  style={{
                    textAlign: "center",
                    opacity: interpolate(frame, [360, 390], [0, 1], {
                      extrapolateRight: "clamp",
                    }),
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "32px",
                      color: "#e8e8e8",
                      fontWeight: 600,
                    }}
                  >
                    $2000亿
                  </div>
                  <div
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "14px",
                      color: "#6b7280",
                      marginTop: "8px",
                    }}
                  >
                    埃隆·马斯克
                  </div>
                </div>
              </div>
            </div>

            {/* Rothschild Wealth Counter */}
            <div
              style={{
                position: "absolute",
                bottom: "25%",
                left: "0",
                right: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: interpolate(frame, [420, 450], [0, 1], {
                  extrapolateRight: "clamp",
                }),
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "14px",
                  color: "#ECC94B",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "15px",
                }}
              >
                罗斯柴尔德家族 (1815-2025)
              </div>

              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "80px",
                  fontWeight: 700,
                  color: "#ECC94B",
                  textShadow: "0 0 50px rgba(236, 201, 75, 0.5)",
                  textAlign: "center",
                }}
              >
                {`$${Math.round(
                  interpolate(frame, [450, 600], [0, 300], {
                    extrapolateRight: "clamp",
                  }),
                ).toLocaleString()}万亿`}
              </div>

              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "18px",
                  color: "#9ca3af",
                  marginTop: "15px",
                  fontStyle: "italic",
                }}
              >
                隐形财富，难以估量
              </div>
            </div>
          </AbsoluteFill>
        )}
      </div>

      {/* Documentary Overlay - Year and Source */}
      <DocumentaryOverlay
        year="2025"
        title="The Invisible Wealth"
        subtitle="Rothschild Family Fortune"
        source="Historical estimates vary"
        frame={Math.max(0, frame - 600)}
        fadeInDuration={30}
      />
    </AbsoluteFill>
  );
};

export default DocumentaryInvisibleWealthScene;
