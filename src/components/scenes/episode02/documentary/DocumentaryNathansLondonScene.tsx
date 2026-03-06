/**
 * DocumentaryNathansLondonScene.tsx
 *
 * Documentary-style scene for Episode 02 - Nathan Rothschild Conquers London
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

const DocumentaryNathansLondonScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <ImageLayer
        src="/assets/images/ep02/ep02-london-city.jpg"
        kenBurns={{ panDirection: "zoom-in", intensity: "moderate" }}
        layer={{ opacity: 0.7, blendMode: "normal", filter: "vintage" }}
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
              text="NATHAN CONQUERS LONDON"
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
              从新来者到英格兰银行的实际控制者
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
              width: "85%",
              opacity: interpolate(frame, [180, 210, 540, 600], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "60px",
                alignItems: "center",
              }}
            >
              {[
                { year: "1798", event: "抵达伦敦" },
                { year: "1809", event: "创立 N.M. Rothschild" },
                { year: "1815", event: "滑铁卢战役" },
              ].map((item, index) => (
                <div
                  key={item.year}
                  style={{
                    textAlign: "center",
                    opacity: interpolate(
                      frame,
                      [210 + index * 60, 240 + index * 60],
                      [0, 1],
                      {
                        extrapolateRight: "clamp",
                      },
                    ),
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "32px",
                      color: "#ECC94B",
                      fontWeight: 700,
                    }}
                  >
                    {item.year}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "14px",
                      color: "#e8e8e8",
                      marginTop: "10px",
                    }}
                  >
                    {item.event}
                  </div>
                </div>
              ))}
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
              width: "85%",
              opacity: interpolate(frame, [540, 570, 990, 1050], [0, 1, 1, 0]),
            }}
          >
            <h3
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "22px",
                color: "#ECC94B",
                textAlign: "center",
                marginBottom: "30px",
                fontWeight: 600,
              }}
            >
              控制英国政府财政
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "25px",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              {[
                { value: "50%", label: "政府债券由罗家承销" },
                { value: "No.1", label: "伦敦金融城首富" },
                { value: "£100M", label: "个人财富(1820年代)" },
              ].map((item, index) => (
                <div
                  key={item.value}
                  style={{
                    background: "rgba(26, 26, 46, 0.9)",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    padding: "20px",
                    textAlign: "center",
                    opacity: interpolate(
                      frame,
                      [600 + index * 60, 630 + index * 60],
                      [0, 1],
                      {
                        extrapolateRight: "clamp",
                      },
                    ),
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "28px",
                      color: "#ECC94B",
                      fontWeight: 700,
                      marginBottom: "8px",
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "12px",
                      color: "#9ca3af",
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
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
              "我不在乎什么样的英格兰政府掌权，
              <br />
              只要让我控制<span style={{ color: "#ECC94B" }}>英国的货币</span>
              。"
            </p>
          </div>
        )}
      </div>

      <DocumentaryOverlay
        year="1815"
        title="Nathan Rothschild"
        subtitle="Master of London Finance"
        source="Historical Archives"
        frame={Math.max(0, frame - 1500)}
        fadeInDuration={30}
      />
    </AbsoluteFill>
  );
};

export default DocumentaryNathansLondonScene;
