import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";
import EuropeanMap, { DEFAULT_CITIES } from "../../../maps/EuropeanMap";

const DocumentaryFamilyIntroScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <ImageLayer
        src="/assets/images/ep02/ep02-europe-map.jpg"
        kenBurns={{ panDirection: "right", intensity: "subtle" }}
        layer={{ opacity: 0.4, blendMode: "normal", filter: "vintage" }}
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
          markerSize={18}
          animationDelay={0}
          animationDuration={90}
          theme="documentary"
        />
      </div>

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {frame < 300 && (
          <div
            style={{
              position: "absolute",
              top: "8%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [0, 30, 240, 300], [0, 1, 1, 0]),
            }}
          >
            <CinematicText
              text="THE ROTHSCHILD DYNASTY"
              fontSize={42}
              color="#ECC94B"
              frame={frame}
              fadeInDuration={30}
              position="top"
            />
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "20px",
                color: "#e8e8e8",
                marginTop: 15,
              }}
            >
              五兄弟统治欧洲金融
            </p>
          </div>
        )}

        {frame >= 180 && frame < 1500 && (
          <>
            <div
              style={{
                position: "absolute",
                left: "55%",
                top: "32%",
                opacity: interpolate(frame, [180, 210, 330, 360], [0, 1, 1, 0]),
                transform: "translate(-50%, -50%)",
              }}
            >
              <BrotherCard
                name="阿姆斯洛·罗斯柴尔德"
                location="法兰克福 - 家族起源"
                year="1760年建立"
                delay={180}
                frame={frame}
              />
            </div>

            <div
              style={{
                position: "absolute",
                left: "35%",
                top: "25%",
                opacity: interpolate(frame, [300, 330, 450, 480], [0, 1, 1, 0]),
                transform: "translate(-50%, -50%)",
              }}
            >
              <BrotherCard
                name="内森·罗斯柴尔德"
                location="伦敦 - 金融中心"
                year="1809年建立"
                delay={300}
                frame={frame}
              />
            </div>

            <div
              style={{
                position: "absolute",
                left: "36%",
                top: "42%",
                opacity: interpolate(frame, [420, 450, 570, 600], [0, 1, 1, 0]),
                transform: "translate(-50%, -50%)",
              }}
            >
              <BrotherCard
                name="詹姆斯·罗斯柴尔德"
                location="巴黎 - 银行业"
                year="1812年建立"
                delay={420}
                frame={frame}
              />
            </div>

            <div
              style={{
                position: "absolute",
                left: "62%",
                top: "40%",
                opacity: interpolate(frame, [540, 570, 690, 720], [0, 1, 1, 0]),
                transform: "translate(-50%, -50%)",
              }}
            >
              <BrotherCard
                name="所罗门·罗斯柴尔德"
                location="维也纳 - 皇室银行"
                year="1820年建立"
                delay={540}
                frame={frame}
              />
            </div>

            <div
              style={{
                position: "absolute",
                left: "65%",
                top: "58%",
                opacity: interpolate(frame, [660, 690, 810, 840], [0, 1, 1, 0]),
                transform: "translate(-50%, -50%)",
              }}
            >
              <BrotherCard
                name="卡尔·罗斯柴尔德"
                location="那不勒斯 - 贸易"
                year="1821年建立"
                delay={660}
                frame={frame}
              />
            </div>
          </>
        )}

        {frame >= 1200 && (
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [1200, 1230], [0, 1], {
                extrapolateRight: "clamp",
              }),
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
              <StatCard value="5" label="欧洲金融中心" />
              <div
                style={{ width: "1px", height: "60px", background: "#374151" }}
              />
              <StatCard value="19" label="世纪主宰欧洲" />
              <div
                style={{ width: "1px", height: "60px", background: "#374151" }}
              />
              <StatCard value="∞" label="财富难以估量" />
            </div>
          </div>
        )}
      </div>

      <DocumentaryOverlay
        year="1810"
        title="Five Brothers"
        subtitle="A European Financial Empire"
        source="Rothschild Family Archives"
        frame={Math.max(0, frame - 1500)}
        fadeInDuration={30}
      />
    </AbsoluteFill>
  );
};

const BrotherCard: React.FC<{
  name: string;
  location: string;
  year: string;
  delay: number;
  frame: number;
}> = ({ name, location, year }) => (
  <div
    style={{
      background: "rgba(26, 26, 46, 0.9)",
      border: "1px solid #ECC94B",
      borderRadius: "8px",
      padding: "15px 20px",
      minWidth: "180px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
    }}
  >
    <div
      style={{
        fontFamily: "'Noto Sans SC', sans-serif",
        fontSize: "14px",
        color: "#ECC94B",
        marginBottom: "8px",
        fontWeight: 600,
      }}
    >
      {name}
    </div>
    <div
      style={{
        fontFamily: "'Noto Sans SC', sans-serif",
        fontSize: "12px",
        color: "#9ca3af",
      }}
    >
      {location}
    </div>
    <div
      style={{
        fontFamily: "'Noto Sans SC', sans-serif",
        fontSize: "11px",
        color: "#6b7280",
        marginTop: "5px",
      }}
    >
      {year}
    </div>
  </div>
);

const StatCard: React.FC<{ value: string; label: string }> = ({
  value,
  label,
}) => (
  <div style={{ textAlign: "center" }}>
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "48px",
        color: "#ECC94B",
        fontWeight: 700,
        textShadow: "0 0 20px rgba(236, 201, 75, 0.4)",
      }}
    >
      {value}
    </div>
    <div
      style={{
        fontFamily: "'Noto Sans SC', sans-serif",
        fontSize: "14px",
        color: "#9ca3af",
        marginTop: "5px",
      }}
    >
      {label}
    </div>
  </div>
);

export default DocumentaryFamilyIntroScene;
