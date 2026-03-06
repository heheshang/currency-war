import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";


export const AsianCrisisDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();


  const devalProgress = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });
  const devalValue = Math.floor(devalProgress * 80);


  const countriesOpacity = interpolate(frame, [90, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = spring({
    frame: frame - 50,
    fps: 30,
    from: 0.5,
    to: 1,
    config: { damping: 10, stiffness: 80 },
  });

  return (
    <AbsoluteFill>

      <ImageLayer
        src="/assets/images/ep09/ep09-asian-mountains.jpg"
        kenBurns={{
          panDirection: "left",
          intensity: "moderate",
        }}
        layer={{
          opacity: 1,
          blendMode: "normal",
          filter: "dramatic",
        }}
        startFrame={0}
        durationFrames={300}
      />


      <ImageLayer
        src="/assets/images/ep09/ep09-opening-market.jpg"
        kenBurns={{
          panDirection: "zoom-out",
          intensity: "subtle",
        }}
        layer={{
          opacity: 0.15,
          blendMode: "overlay",
          filter: "grayscale",
        }}
        startFrame={0}
        durationFrames={300}
      />


      <Vignette intensity={0.7} />


      <FilmGrain opacity={0.07} />


      <CinematicText
        text="亚洲金融危机"
        fontSize={48}
        color="#EF4444"
        frame={frame - 20}
        fadeInDuration={35}
        position="top"
      />


      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [40, 70], [0, 1], {
              extrapolateRight: "clamp",
            }),
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "#9CA3AF",
              fontFamily: "Merriweather, serif",
              marginBottom: 16,
              letterSpacing: 1,
            }}
          >
            Thai Baht Devaluation
          </div>
          <div
            style={{
              fontSize: 96,
              color: "#EF4444",
              fontFamily: "Cinzel, serif",
              fontWeight: 700,
              transform: `scale(${scale})`,
              textShadow: "0 0 40px rgba(239, 68, 68, 0.5)",
            }}
          >
            -{devalValue}%
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              marginTop: 8,
            }}
          >
            July 2, 1997 - The Trigger
          </div>
        </div>
      </AbsoluteFill>


      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: 150,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            opacity: countriesOpacity,
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: 600,
          }}
        >
          {[
            { name: "Thailand", value: "-56%" },
            { name: "Indonesia", value: "-85%" },
            { name: "South Korea", value: "-58%" },
            { name: "Malaysia", value: "-48%" },
          ].map((country) => (
            <div key={country.name} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: 24,
                  color: "#EF4444",
                  fontFamily: "Cinzel, serif",
                  fontWeight: 700,
                }}
              >
                {country.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#9CA3AF",
                  fontFamily: "Merriweather, serif",
                }}
              >
                {country.name}
              </div>
            </div>
          ))}
        </div>
      </AbsoluteFill>


      <DocumentaryOverlay
        title="Asian Financial Crisis"
        subtitle="Currency Collapse Across Southeast Asia"
        year="1997"
        source="IMF Crisis Report"
        frame={frame}
        fadeInDuration={40}
      />
    </AbsoluteFill>
  );
};
