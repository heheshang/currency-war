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
 * EternityOpeningDocumentaryScene
 * Grand opening with cosmic/historical imagery
 * Theme: Planning for Eternity - The grand finale introduction
 */
export const EternityOpeningDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      {/* Background image with dramatic ken burns zoom-in */}
      <ImageLayer
        src="/assets/images/ep11/ep11-eternity-opening.jpg"
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

      {/* Vignette overlay for cinematic depth */}
      <Vignette intensity={0.75} color="#000" />

      {/* Film grain for documentary authenticity */}
      <FilmGrain opacity={0.12} />

      {/* Main title - Chinese */}
      <CinematicText
        text="谋万世者"
        fontSize={96}
        color="#ECC94B"
        frame={frame}
        fadeInDuration={60}
        position="center"
      />

      {/* English subtitle */}
      <CinematicText
        text="Planning for Eternity"
        fontSize={42}
        color="#CBD5E0"
        frame={frame - 40}
        fadeInDuration={50}
        position="bottom"
      />

      {/* Documentary overlay with episode context */}
      <DocumentaryOverlay
        year="Episode 11"
        title="The Grand Finale"
        subtitle="China's Strategic Response"
        source="Currency Wars Series"
        frame={frame - 80}
        fadeInDuration={45}
      />
    </AbsoluteFill>
  );
};
