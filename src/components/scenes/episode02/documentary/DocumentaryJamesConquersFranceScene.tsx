/**
 * DocumentaryJamesConquersFranceScene.tsx
 *
 * Documentary-style scene for Episode 02 - James Rothschild Conquers France
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

const DocumentaryJamesConquersFranceScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <ImageLayer
        src="/assets/images/ep02/ep02-paris-bank.jpg"
        kenBurns={{ panDirection: "left", intensity: "moderate" }}
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
              text="JAMES CONQUERS FRANCE"
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
              从拿破仑的敌人到法国的救星
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
                { year: "1812", event: "抵达巴黎" },
                { year: "1815", event: "拿破仑战败" },
                { year: "1824", event: "查理十世登基" },
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
              詹姆斯的"救援"
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
                { step: "1", title: "大举买入", desc: "在55%价格收购法国债券" },
                { step: "2", title: "稳定市场", desc: "展示信心，价格回升" },
                { step: "3", title: "获得回报", desc: "债券价格接近面值" },
              ].map((item, index) => (
                <div
                  key={item.step}
                  style={{
                    background: "rgba(26, 26, 46, 0.95)",
                    border: "1px solid #374151",
                    borderRadius: "10px",
                    padding: "25px",
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
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "#ECC94B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "18px",
                      color: "#0d1117",
                      marginBottom: "15px",
                    }}
                  >
                    {item.step}
                  </div>
                  <h4
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "15px",
                      color: "#e8e8e8",
                      marginBottom: "10px",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "13px",
                      color: "#9ca3af",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
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
              詹姆斯·德·罗斯柴尔德成为巴黎社交圈的宠儿，
              <br />
              <span style={{ color: "#ECC94B" }}>罗斯柴尔德银行</span>
              成为法国政府的首选债权人
            </p>
          </div>
        )}
      </div>

      <DocumentaryOverlay
        year="1824"
        title="James de Rothschild"
        subtitle="Savior of French Finance"
        source="Historical Archives"
        frame={Math.max(0, frame - 1500)}
        fadeInDuration={30}
      />
    </AbsoluteFill>
  );
};

export default DocumentaryJamesConquersFranceScene;
