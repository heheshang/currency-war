import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";


export const OilCrisisDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();


  const priceProgress = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });
  const priceValue = Math.floor(3 + priceProgress * 9);


  const statsOpacity = interpolate(frame, [90, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const priceScale = spring({
    frame: frame - 60,
    fps: 30,
    from: 0.5,
    to: 1,
    config: { damping: 10, stiffness: 100 },
  });

  return (
    <AbsoluteFill>

      <ImageLayer
        src="/assets/images/ep09/ep09-oil-refinery.jpg"
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
        src="/assets/images/ep09/ep09-oil-barrels.jpg"
        kenBurns={{
          panDirection: "zoom-out",
          intensity: "subtle",
        }}
        layer={{
          opacity: 0.25,
          blendMode: "overlay",
          filter: "sepia",
        }}
        startFrame={0}
        durationFrames={300}
      />


      <Vignette intensity={0.65} />


      <FilmGrain opacity={0.07} />


      <CinematicText
        text="石油危机"
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
              fontSize: 20,
              color: "#9CA3AF",
              fontFamily: "Merriweather, serif",
              marginBottom: 20,
            }}
          >
            Oil Price Shock
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 30,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 36,
                  color: "#9CA3AF",
                  fontFamily: "Cinzel, serif",
                }}
              >
                $3
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#6B7280",
                  fontFamily: "Merriweather, serif",
                }}
              >
                Before 1973
              </div>
            </div>
            <div
              style={{
                fontSize: 40,
                color: "#ECC94B",
                transform: `scale(${priceScale})`,
              }}
            >
              →
            </div>
            <div>
              <div
                style={{
                  fontSize: 48,
                  color: "#EF4444",
                  fontFamily: "Cinzel, serif",
                  fontWeight: 700,
                  textShadow: "0 0 20px rgba(239, 68, 68, 0.5)",
                }}
              >
                ${priceValue}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#EF4444",
                  fontFamily: "Merriweather, serif",
                }}
              >
                1974
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: 30,
              fontSize: 56,
              color: "#EF4444",
              fontWeight: 700,
              fontFamily: "Cinzel, serif",
              opacity: statsOpacity,
              textShadow: "0 0 30px rgba(239, 68, 68, 0.6)",
            }}
          >
            +400%
          </div>
        </div>
      </AbsoluteFill>


      <DocumentaryOverlay
        title="OPEC Oil Embargo"
        subtitle="Fourth Arab-Israeli War"
        year="1973"
        source="OPEC Historical Data"
        frame={frame}
        fadeInDuration={40}
      />
    </AbsoluteFill>
  );
};
