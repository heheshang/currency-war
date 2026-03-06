import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

/**
 * DollarFlawOpeningDocumentaryScene
 * Opening scene with dollar imagery and ken burns effect
 * Theme: Introduction to the dollar's fatal weakness
 */
export const DollarFlawOpeningDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      {/* Background image with ken burns zoom-in */}
      <ImageLayer
        src="/assets/images/ep10/ep10-opening-gold.jpg"
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
        durationFrames={900}
      />

      {/* Vignette overlay */}
      <Vignette intensity={0.7} color="#000" />

      {/* Film grain effect */}
      <FilmGrain opacity={0.1} />

      {/* Cinematic title */}
      <CinematicText
        text="美元死穴"
        fontSize={72}
        color="#ECC94B"
        frame={frame}
        fadeInDuration={45}
        position="center"
      />

      {/* Secondary title */}
      <CinematicText
        text="The Dollar's Fatal Flaw"
        fontSize={36}
        color="#CBD5E0"
        frame={frame - 30}
        fadeInDuration={40}
        position="bottom"
      />

      {/* Documentary overlay with year and title */}
      <DocumentaryOverlay
        year="1971"
        title="The End of the Gold Standard"
        subtitle="Nixon closes the gold window"
        source="Federal Reserve Archives"
        frame={frame - 60}
        fadeInDuration={35}
      />
    </AbsoluteFill>
  );
};
