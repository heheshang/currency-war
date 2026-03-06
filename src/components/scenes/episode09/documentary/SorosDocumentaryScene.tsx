import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";


export const SorosDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();


  const profitProgress = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });
  const profitValue = Math.floor(profitProgress * 1000);


  const impactOpacity = interpolate(frame, [100, 130], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = spring({
    frame: frame - 50,
    fps: 30,
    from: 0.5,
    to: 1,
    config: { damping: 8, stiffness: 100 },
  });

  return (
    <AbsoluteFill>

      <ImageLayer
        src="/assets/images/ep09/ep09-soros-trading.jpg"
        kenBurns={{
          panDirection: "down",
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
        src="/assets/images/ep09/ep09-soros-trading.jpg"
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
        text="索罗斯与英镑危机"
        fontSize={44}
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
            Soros Fund Management Profit
          </div>
          <div
            style={{
              fontSize: 80,
              color: "#10B981",
              fontFamily: "Cinzel, serif",
              fontWeight: 700,
              transform: `scale(${scale})`,
              textShadow: "0 0 40px rgba(16, 185, 129, 0.5)",
            }}
          >
            ${profitValue}M
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              marginTop: 8,
            }}
          >
            Single Day - September 16, 1992
          </div>
        </div>
      </AbsoluteFill>


      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: 160,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 50,
            opacity: impactOpacity,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 28,
                color: "#EF4444",
                fontFamily: "Cinzel, serif",
                fontWeight: 700,
              }}
            >
              £3.3B
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#9CA3AF",
                fontFamily: "Merriweather, serif",
              }}
            >
              UK Losses
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 28,
                color: "#ECC94B",
                fontFamily: "Cinzel, serif",
                fontWeight: 700,
              }}
            >
              15%
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#9CA3AF",
                fontFamily: "Merriweather, serif",
              }}
            >
              Interest Rates
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 28,
                color: "#EF4444",
                fontFamily: "Cinzel, serif",
                fontWeight: 700,
              }}
            >
              ERM Exit
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#9CA3AF",
                fontFamily: "Merriweather, serif",
              }}
            >
              Black Wednesday
            </div>
          </div>
        </div>
      </AbsoluteFill>


      <DocumentaryOverlay
        title="Black Wednesday"
        subtitle="The Man Who Broke the Bank of England"
        year="1992"
        source="Financial Times Archives"
        frame={frame}
        fadeInDuration={40}
      />
    </AbsoluteFill>
  );
};
