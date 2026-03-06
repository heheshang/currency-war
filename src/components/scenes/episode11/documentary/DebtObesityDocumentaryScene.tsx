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
 * DebtObesityDocumentaryScene
 * Debt as national obesity metaphor
 * Theme: The weight of national debt crushing economies
 */
export const DebtObesityDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      {/* Background: Financial charts and debt imagery */}
      <ImageLayer
        src="/assets/images/ep11/ep11-debt-obesity.jpg"
        kenBurns={{
          panDirection: "zoom-out",
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
      <Vignette intensity={0.8} color="#000" />

      {/* Film grain */}
      <FilmGrain opacity={0.1} />

      {/* Main title */}
      <CinematicText
        text="债务肥胖症"
        fontSize={68}
        color="#ECC94B"
        frame={frame}
        fadeInDuration={50}
        position="center"
      />

      {/* English subtitle */}
      <CinematicText
        text="Debt Obesity"
        fontSize={34}
        color="#CBD5E0"
        frame={frame - 35}
        fadeInDuration={45}
        position="bottom"
      />

      {/* Documentary overlay */}
      <DocumentaryOverlay
        year="$31+ Trillion"
        title="The American Debt Crisis"
        subtitle="A nation drowning in obligations"
        source="US Treasury Data"
        frame={frame - 70}
        fadeInDuration={40}
      />
    </AbsoluteFill>
  );
};
