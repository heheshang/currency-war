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
 * GrandStrategyDocumentaryScene
 * Long-term financial strategy
 * Theme: Strategic thinking for the next century
 */
export const GrandStrategyDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      {/* Background: Strategic planning/chess imagery */}
      <ImageLayer
        src="/assets/images/ep11/ep11-grand-strategy.jpg"
        kenBurns={{
          panDirection: "zoom-in",
          intensity: "moderate",
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

      {/* Film grain */}
      <FilmGrain opacity={0.1} />

      {/* Main title */}
      <CinematicText
        text="大战略"
        fontSize={80}
        color="#ECC94B"
        frame={frame}
        fadeInDuration={60}
        position="center"
      />

      {/* English subtitle */}
      <CinematicText
        text="Grand Strategy"
        fontSize={40}
        color="#CBD5E0"
        frame={frame - 45}
        fadeInDuration={55}
        position="bottom"
      />

      {/* Documentary overlay */}
      <DocumentaryOverlay
        year="2020-2050"
        title="Planning for the Next Century"
        subtitle="谋万世者，不谋一时"
        source="Strategic Planning Division"
        frame={frame - 80}
        fadeInDuration={50}
      />
    </AbsoluteFill>
  );
};
