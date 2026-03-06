import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";
import EuropeanMap, {
  DEFAULT_CITIES,
  DEFAULT_ROUTES,
} from "../../../maps/EuropeanMap";

const DocumentaryEuropeanEmpireScene: React.FC = () => {
  const frame = useCurrentFrame();

  const getVisibleCities = () => {
    if (frame < 60) return [];
    if (frame < 180) return ["frankfurt"];
    if (frame < 300) return ["frankfurt", "london"];
    if (frame < 420) return ["frankfurt", "london", "paris"];
    if (frame < 540) return ["frankfurt", "london", "paris", "vienna"];
    return DEFAULT_CITIES.map((c) => c.id);
  };

  const getVisibleRoutes = () => {
    if (frame < 360) return [];
    if (frame < 540) return ["frankfurt-london", "frankfurt-paris"];
    if (frame < 720)
      return ["frankfurt-london", "frankfurt-paris", "frankfurt-vienna"];
    if (frame < 900)
      return [
        "frankfurt-london",
        "frankfurt-paris",
        "frankfurt-vienna",
        "frankfurt-naples",
      ];
    return DEFAULT_ROUTES.map((r) => `${r.from}-${r.to}`);
  };

  const visibleCities = getVisibleCities();
  const visibleRoutes = getVisibleRoutes();

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

      <div style={{ position: "absolute", inset: 0, opacity: 0.8 }}>
        <EuropeanMap
          cities={DEFAULT_CITIES}
          routes={DEFAULT_ROUTES}
          visibleCityIds={visibleCities}
          visibleRouteIds={visibleRoutes}
          showLabels={true}
          showBrotherNames={true}
          markerSize={22}
          animationDelay={0}
          animationDuration={120}
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
            <CinematicText
              text="THE EUROPEAN EMPIRE"
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
              五兄弟，五座城，统治欧洲金融
            </p>
          </div>
        )}

        {frame >= 840 && (
          <div
            style={{
              position: "absolute",
              bottom: "10%",
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
                fontFamily: "'Cinzel', serif",
                fontSize: "14px",
                color: "#ECC94B",
                marginBottom: "20px",
                letterSpacing: "2px",
              }}
            >
              TRANSNATIONAL NETWORK
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "80px",
                alignItems: "center",
              }}
            >
              <NetworkStat value="5" label="金融中心" />
              <NetworkStat value="24h" label="情报传递" />
              <NetworkStat value="同步" label="联合行动" />
            </div>
          </div>
        )}

        {frame >= 1200 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              opacity: interpolate(frame, [1200, 1230], [0, 1], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "24px",
                color: "#e8e8e8",
                maxWidth: "700px",
                lineHeight: 1.8,
                fontStyle: "italic",
              }}
            >
              "五兄弟如同一人的五只手，
              <br />
              同时掌控着欧洲的脉搏"
            </p>
          </div>
        )}
      </div>

      <DocumentaryOverlay
        year="1820"
        title="European Empire"
        subtitle="Five Brothers, Five Cities"
        source="Historical Archives"
        frame={Math.max(0, frame - 1500)}
        fadeInDuration={30}
      />
    </AbsoluteFill>
  );
};

const NetworkStat: React.FC<{ value: string; label: string }> = ({
  value,
  label,
}) => (
  <div
    style={{
      background: "rgba(26, 26, 46, 0.9)",
      border: "1px solid #374151",
      borderRadius: "8px",
      padding: "15px 25px",
      textAlign: "center",
    }}
  >
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "32px",
        color: "#ECC94B",
        fontWeight: 700,
      }}
    >
      {value}
    </div>
    <div
      style={{
        fontFamily: "'Noto Sans SC', sans-serif",
        fontSize: "12px",
        color: "#9ca3af",
      }}
    >
      {label}
    </div>
  </div>
);

export default DocumentaryEuropeanEmpireScene;
