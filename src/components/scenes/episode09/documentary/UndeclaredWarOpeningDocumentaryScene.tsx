import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

export const UndeclaredWarOpeningDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const subtitleOpacity = interpolate(frame, [60, 90], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleScale = spring({
    frame,
    fps: 30,
    from: 0.8,
    to: 1,
    config: { damping: 12 },
  });

  return (
    <AbsoluteFill>
      <ImageLayer
        src="/assets/images/ep09/ep09-opening-market.jpg"
        kenBurns={{
          panDirection: "zoom-in",
          intensity: "dramatic",
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
        src="/assets/images/ep09/ep09-portrait-dark.jpg"
        kenBurns={{
          panDirection: "right",
          intensity: "subtle",
        }}
        layer={{
          opacity: 0.3,
          blendMode: "overlay",
          filter: "grayscale",
        }}
        startFrame={0}
        durationFrames={300}
      />

      <Vignette intensity={0.7} />
      <FilmGrain opacity={0.06} />

      <CinematicText
        text="不宣而战的货币战争"
        fontSize={52}
        color="#ECC94B"
        frame={frame - 30}
        fadeInDuration={40}
        position="center"
      />

      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 180,
        }}
      >
        <div
          style={{
            opacity: subtitleOpacity,
            transform: `scale(${titleScale})`,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 28,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              letterSpacing: 2,
            }}
          >
            The Undeclared Currency War
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#718096",
              fontFamily: "Merriweather, serif",
              marginTop: 16,
              fontStyle: "italic",
            }}
          >
            1970s - Present
          </div>
        </div>
      </AbsoluteFill>

      <DocumentaryOverlay
        title="Episode 09"
        subtitle="International Bankers' Currency War"
        year="1970s"
        frame={frame}
        fadeInDuration={45}
      />
    </AbsoluteFill>
  );
};
