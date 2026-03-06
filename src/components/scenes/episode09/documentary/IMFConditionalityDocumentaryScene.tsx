import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";


export const IMFConditionalityDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();


  const loanProgress = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });
  const loanValue = Math.floor(loanProgress * 100);


  const conditionsOpacity = interpolate(frame, [90, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = spring({
    frame: frame - 40,
    fps: 30,
    from: 0.8,
    to: 1,
    config: { damping: 12 },
  });

  return (
    <AbsoluteFill>

      <ImageLayer
        src="/assets/images/ep09/ep09-imf-data.jpg"
        kenBurns={{
          panDirection: "right",
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
        src="/assets/images/ep09/ep09-global-map.jpg"
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


      <Vignette intensity={0.65} />


      <FilmGrain opacity={0.06} />


      <CinematicText
        text="IMF条件贷款"
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
            transform: `scale(${scale})`,
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
            Developing Nations in Debt
          </div>
          <div
            style={{
              fontSize: 72,
              color: "#ECC94B",
              fontFamily: "Cinzel, serif",
              fontWeight: 700,
              textShadow: "0 0 30px rgba(236, 201, 75, 0.4)",
            }}
          >
            {loanValue}+
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              marginTop: 8,
            }}
          >
            Countries Under IMF Programs
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
            flexDirection: "column",
            gap: 12,
            opacity: conditionsOpacity,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 16,
              color: "#EF4444",
              fontFamily: "Merriweather, serif",
            }}
          >
            Structural Adjustment Conditions:
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#9CA3AF",
              fontFamily: "Merriweather, serif",
              lineHeight: 1.8,
            }}
          >
            Privatization • Austerity • Market Liberalization
          </div>
        </div>
      </AbsoluteFill>


      <DocumentaryOverlay
        title="IMF Structural Adjustment"
        subtitle="Conditional Loans & Economic Reform"
        year="1980s"
        source="IMF Archives"
        frame={frame}
        fadeInDuration={40}
      />
    </AbsoluteFill>
  );
};
