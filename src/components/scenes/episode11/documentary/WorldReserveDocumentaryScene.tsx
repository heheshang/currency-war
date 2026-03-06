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
 * WorldReserveDocumentaryScene
 * Reserve currency battles
 * Theme: The fight for global monetary dominance
 */
export const WorldReserveDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      {/* Background: Global finance/world map imagery */}
      <ImageLayer
        src="/assets/images/ep11/ep11-world-reserve.jpg"
        kenBurns={{
          panDirection: "down",
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
      <Vignette intensity={0.75} color="#000" />

      {/* Film grain */}
      <FilmGrain opacity={0.1} />

      {/* Main title */}
      <CinematicText
        text="世界储备货币之战"
        fontSize={64}
        color="#ECC94B"
        frame={frame}
        fadeInDuration={50}
        position="center"
      />

      {/* English subtitle */}
      <CinematicText
        text="Battle for World Reserve Currency"
        fontSize={32}
        color="#CBD5E0"
        frame={frame - 35}
        fadeInDuration={45}
        position="bottom"
      />

      {/* Documentary overlay */}
      <DocumentaryOverlay
        year="1944-Present"
        title="From Bretton Woods to Today"
        subtitle="The struggle for monetary supremacy"
        source="IMF Historical Archives"
        frame={frame - 70}
        fadeInDuration={40}
      />
    </AbsoluteFill>
  );
};
