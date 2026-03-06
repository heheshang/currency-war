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
 * GrandEndingDocumentaryScene
 * Epic ending with call to action
 * Theme: The future is in our hands - a call to awareness
 */
export const GrandEndingDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      {/* Background: Sunrise/hope imagery */}
      <ImageLayer
        src="/assets/images/ep11/ep11-grand-ending.jpg"
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
      <Vignette intensity={0.6} color="#000" />

      {/* Film grain */}
      <FilmGrain opacity={0.08} />

      {/* Main title */}
      <CinematicText
        text="未来在我们手中"
        fontSize={68}
        color="#ECC94B"
        frame={frame}
        fadeInDuration={60}
        position="center"
      />

      {/* English subtitle */}
      <CinematicText
        text="The Future Is In Our Hands"
        fontSize={34}
        color="#CBD5E0"
        frame={frame - 45}
        fadeInDuration={55}
        position="bottom"
      />

      {/* Documentary overlay */}
      <DocumentaryOverlay
        year="The End"
        title="Currency Wars"
        subtitle="Knowledge is power. Awareness is the first step."
        source="Episode 11 - Planning for Eternity"
        frame={frame - 90}
        fadeInDuration={50}
      />
    </AbsoluteFill>
  );
};
