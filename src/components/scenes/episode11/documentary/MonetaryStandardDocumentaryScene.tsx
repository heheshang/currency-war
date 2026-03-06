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
 * MonetaryStandardDocumentaryScene
 * History of monetary standards through the ages
 * Theme: The evolution of money from gold to fiat
 */
export const MonetaryStandardDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      {/* Background: Ancient coins and currency */}
      <ImageLayer
        src="/assets/images/ep11/ep11-monetary-gold.jpg"
        kenBurns={{
          panDirection: "left",
          intensity: "moderate",
        }}
        layer={{
          opacity: 1,
          blendMode: "normal",
          filter: "vintage",
        }}
        startFrame={0}
        durationFrames={900}
      />

      {/* Vignette overlay */}
      <Vignette intensity={0.65} color="#000" />

      {/* Film grain for historical feel */}
      <FilmGrain opacity={0.1} />

      {/* Main title */}
      <CinematicText
        text="货币本位的演变"
        fontSize={64}
        color="#ECC94B"
        frame={frame}
        fadeInDuration={45}
        position="center"
      />

      {/* English subtitle */}
      <CinematicText
        text="Evolution of Monetary Standards"
        fontSize={32}
        color="#CBD5E0"
        frame={frame - 30}
        fadeInDuration={40}
        position="bottom"
      />

      {/* Documentary overlay */}
      <DocumentaryOverlay
        year="Ancient → Modern"
        title="From Gold to Fiat"
        subtitle="A 5,000 year journey of money"
        source="Monetary History Archives"
        frame={frame - 60}
        fadeInDuration={35}
      />
    </AbsoluteFill>
  );
};
