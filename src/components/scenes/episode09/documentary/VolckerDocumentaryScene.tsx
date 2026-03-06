import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";


export const VolckerDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();


  const rateProgress = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });
  const rateValue = (8 + rateProgress * 12).toFixed(1);


  const impactOpacity = interpolate(frame, [100, 130], [0, 1], {
    extrapolateRight: "clamp",
  });

  const rateScale = spring({
    frame: frame - 60,
    fps: 30,
    from: 0.5,
    to: 1,
    config: { damping: 8, stiffness: 80 },
  });

  return (
    <AbsoluteFill>

      <ImageLayer
        src="/assets/images/ep09/ep09-volcker-fed.jpg"
        kenBurns={{
          panDirection: "up",
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
        src="/assets/images/ep09/ep09-volcker-rates.jpg"
        kenBurns={{
          panDirection: "zoom-in",
          intensity: "subtle",
        }}
        layer={{
          opacity: 0.2,
          blendMode: "overlay",
          filter: "grayscale",
        }}
        startFrame={0}
        durationFrames={300}
      />


      <Vignette intensity={0.7} />


      <FilmGrain opacity={0.06} />


      <CinematicText
        text="沃尔克冲击"
        fontSize={48}
        color="#ECC94B"
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
            Federal Funds Rate
          </div>
          <div
            style={{
              fontSize: 96,
              color: "#EF4444",
              fontFamily: "Cinzel, serif",
              fontWeight: 700,
              transform: `scale(${rateScale})`,
              textShadow: "0 0 40px rgba(239, 68, 68, 0.5)",
            }}
          >
            {rateValue}%
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              marginTop: 12,
            }}
          >
            Peak: 20% - June 1981
          </div>
        </div>
      </AbsoluteFill>


      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: 180,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 60,
            opacity: impactOpacity,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 32,
                color: "#ECC94B",
                fontFamily: "Cinzel, serif",
                fontWeight: 700,
              }}
            >
              10.8%
            </div>
            <div
              style={{
                fontSize: 14,
                color: "#9CA3AF",
                fontFamily: "Merriweather, serif",
              }}
            >
              Unemployment
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 32,
                color: "#ECC94B",
                fontFamily: "Cinzel, serif",
                fontWeight: 700,
              }}
            >
              -2.2%
            </div>
            <div
              style={{
                fontSize: 14,
                color: "#9CA3AF",
                fontFamily: "Merriweather, serif",
              }}
            >
              GDP 1982
            </div>
          </div>
        </div>
      </AbsoluteFill>


      <DocumentaryOverlay
        title="Volcker Shock"
        subtitle="Federal Reserve Chairman Paul Volcker"
        year="1979"
        source="Federal Reserve History"
        frame={frame}
        fadeInDuration={40}
      />
    </AbsoluteFill>
  );
};
