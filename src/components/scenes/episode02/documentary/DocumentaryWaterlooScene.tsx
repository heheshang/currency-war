import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

const DocumentaryWaterlooScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <ImageLayer
        src="/assets/images/ep02/ep02-waterloo-battle.jpg"
        kenBurns={{ panDirection: "zoom-in", intensity: "dramatic" }}
        layer={{ opacity: 0.8, blendMode: "normal", filter: "dramatic" }}
        startFrame={0}
        durationFrames={1800}
      />

      <Vignette intensity={0.6} color="#1a0a0a" />
      <FilmGrain opacity={0.08} />

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {frame < 240 && (
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "5%",
              opacity: interpolate(frame, [0, 30, 180, 240], [0, 1, 1, 0]),
            }}
          >
            <CinematicText
              text="BATTLE OF WATERLOO"
              fontSize={48}
              color="#ECC94B"
              frame={frame}
              fadeInDuration={20}
              position="top"
            />
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 24,
                color: "#e8e8e8",
                fontStyle: "italic",
                marginTop: 15,
                opacity: interpolate(frame, [30, 60], [0, 1], {
                  extrapolateRight: "clamp",
                }),
              }}
            >
              June 18, 1815
            </div>
          </div>
        )}

        {frame >= 180 && frame < 600 && (
          <div
            style={{
              position: "absolute",
              bottom: "25%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [180, 210, 540, 600], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                background: "rgba(13, 17, 23, 0.85)",
                border: "2px solid #8b0000",
                borderRadius: "12px",
                padding: "25px 40px",
                maxWidth: "700px",
                margin: "0 auto",
                boxShadow: "0 0 40px rgba(139, 0, 0, 0.4)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "18px",
                  color: "#8b0000",
                  marginBottom: "15px",
                  letterSpacing: "3px",
                }}
              >
                THE DECISIVE BATTLE
              </div>
              <p
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "18px",
                  color: "#e8e8e8",
                  lineHeight: 1.8,
                }}
              >
                拿破仑的最后战役，欧洲命运的转折点。
                <br />
                <span style={{ color: "#ECC94B" }}>
                  而内森·罗斯柴尔德先于所有人得知了结果。
                </span>
              </p>
            </div>
          </div>
        )}

        {frame >= 540 && frame < 1200 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              opacity: interpolate(frame, [540, 570, 1140, 1200], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "14px",
                color: "#9ca3af",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Intelligence Advantage
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "80px",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "48px",
                    color: "#ECC94B",
                    fontWeight: 700,
                    textShadow: "0 0 30px rgba(236, 201, 75, 0.6)",
                  }}
                >
                  24h
                </div>
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "14px",
                    color: "#9ca3af",
                    marginTop: "8px",
                  }}
                >
                  罗斯柴尔德情报网
                </div>
              </div>
              <div style={{ fontSize: "36px", color: "#374151" }}>vs</div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "48px",
                    color: "#6b7280",
                    fontWeight: 700,
                  }}
                >
                  4-7天
                </div>
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "14px",
                    color: "#6b7280",
                    marginTop: "8px",
                  }}
                >
                  官方消息渠道
                </div>
              </div>
            </div>
          </div>
        )}

        {frame >= 1140 && (
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [1140, 1170], [0, 1], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "24px",
                color: "#e8e8e8",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: 1.8,
                fontStyle: "italic",
              }}
            >
              "当伦敦还在等待官方消息时，
              <br />
              内森已经开始行动。"
            </p>
          </div>
        )}
      </div>

      <DocumentaryOverlay
        year="1815"
        title="Battle of Waterloo"
        subtitle="Waterloo, Belgium"
        source="Historical Painting, 19th Century"
        frame={Math.max(0, frame - 1500)}
        fadeInDuration={30}
      />
    </AbsoluteFill>
  );
};

export default DocumentaryWaterlooScene;
