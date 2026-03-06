import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";
import EuropeanMap, { DEFAULT_CITIES } from "../../../maps/EuropeanMap";

const DocumentaryIntelligenceNetworkScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <ImageLayer
        src="/assets/images/ep02/ep02-europe-map.jpg"
        kenBurns={{ panDirection: "zoom-in", intensity: "subtle" }}
        layer={{ opacity: 0.3, blendMode: "normal", filter: "vintage" }}
        startFrame={0}
        durationFrames={1800}
      />

      <Vignette intensity={0.4} />
      <FilmGrain opacity={0.05} />

      <div style={{ position: "absolute", inset: 0, opacity: 0.7 }}>
        <EuropeanMap
          cities={DEFAULT_CITIES}
          showLabels={true}
          showBrotherNames={false}
          markerSize={20}
          animationDelay={0}
          animationDuration={60}
          theme="documentary"
        />
      </div>

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {frame < 240 && (
          <div
            style={{
              position: "absolute",
              top: "8%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [0, 30, 180, 240], [0, 1, 1, 0]),
            }}
          >
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "38px",
                color: "#ECC94B",
                marginBottom: "10px",
                letterSpacing: "2px",
                textShadow: "0 0 20px rgba(236, 201, 75, 0.4)",
              }}
            >
              THE INTELLIGENCE NETWORK
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "18px",
                color: "#e8e8e8",
              }}
            >
              先人一步的情报优势
            </p>
          </div>
        )}

        {frame >= 180 && frame < 1050 && (
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "5%",
              width: "280px",
              opacity: interpolate(frame, [180, 210, 900, 960], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                background: "rgba(26, 26, 46, 0.95)",
                border: "1px solid #ECC94B",
                borderRadius: "8px",
                padding: "20px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.6)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "14px",
                  color: "#ECC94B",
                  marginBottom: "15px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                }}
              >
                INTELLIGENCE SPEED
              </h3>

              <SpeedBar
                label="Rothschild Network"
                value="24h"
                color="#ECC94B"
                frame={frame}
                startFrame={210}
                endFrame={330}
              />

              <SpeedBar
                label="Official Channels"
                value="4-7 days"
                color="#6b7280"
                frame={frame}
                startFrame={330}
                endFrame={450}
              />
            </div>
          </div>
        )}

        {frame >= 900 && frame < 1500 && (
          <div
            style={{
              position: "absolute",
              bottom: "15%",
              right: "5%",
              width: "320px",
              opacity: interpolate(frame, [900, 930, 1410, 1500], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                background: "rgba(26, 26, 46, 0.95)",
                border: "1px solid #1e3a5a",
                borderRadius: "8px",
                padding: "20px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.6)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "12px",
                  color: "#1e3a5a",
                  marginBottom: "15px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                }}
              >
                METHODS
              </h3>

              <MethodList frame={frame} />
            </div>
          </div>
        )}

        {frame >= 1500 && (
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [1500, 1530], [0, 1], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "24px",
                color: "#ECC94B",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: 1.6,
                fontStyle: "italic",
              }}
            >
              "当官方消息还在海上漂泊时，
              <br />
              罗斯柴尔德已经掌握了真相"
            </div>
          </div>
        )}
      </div>

      <DocumentaryOverlay
        year="1815"
        title="The Intelligence Network"
        subtitle="Europe-wide Communication System"
        source="Rothschild Family Archives"
        frame={Math.max(0, frame - 1600)}
        fadeInDuration={30}
      />
    </AbsoluteFill>
  );
};

const SpeedBar: React.FC<{
  label: string;
  value: string;
  color: string;
  frame: number;
  startFrame: number;
  endFrame: number;
}> = ({ label, value, color, frame, startFrame, endFrame }) => (
  <div style={{ marginBottom: "15px" }}>
    <div
      style={{
        fontFamily: "'Noto Sans SC', sans-serif",
        fontSize: "13px",
        color: "#e8e8e8",
        marginBottom: "5px",
      }}
    >
      {label}
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div
        style={{
          flex: 1,
          height: "8px",
          background: "#1f2937",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${interpolate(frame, [startFrame, endFrame], [0, 100], {
              extrapolateRight: "clamp",
            })}%`,
            height: "100%",
            background: color,
          }}
        />
      </div>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "14px",
          color: color,
        }}
      >
        {value}
      </span>
    </div>
  </div>
);

const MethodList: React.FC<{ frame: number }> = ({ frame }) => (
  <ul
    style={{
      listStyle: "none",
      padding: 0,
      margin: 0,
      fontFamily: "'Noto Sans SC', sans-serif",
      fontSize: "13px",
      color: "#e8e8e8",
    }}
  >
    {[
      { text: "驻扎各首都的家族成员", delay: 930 },
      { text: "专属信使与快船服务", delay: 990 },
      { text: "加密通信系统", delay: 1050 },
      { text: "与政界商界的密切关系", delay: 1110 },
      { text: "提前获取战争与政策消息", delay: 1170 },
    ].map((item, i) => (
      <li
        key={i}
        style={{
          marginBottom: "12px",
          display: "flex",
          alignItems: "flex-start",
          gap: "10px",
          opacity: interpolate(frame, [item.delay, item.delay + 30], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        <span style={{ color: "#ECC94B" }}>●</span>
        <span>{item.text}</span>
      </li>
    ))}
  </ul>
);

export default DocumentaryIntelligenceNetworkScene;
