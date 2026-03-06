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
 * FinancialAirForceDocumentaryScene
 * Financial warfare as air force metaphor
 * Theme: Currency wars as invisible military campaigns
 */
export const FinancialAirForceDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      {/* Background: Military/strategic imagery */}
      <ImageLayer
        src="/assets/images/ep11/ep11-financial-airforce.jpg"
        kenBurns={{
          panDirection: "up",
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
      <FilmGrain opacity={0.12} />

      {/* Main title */}
      <CinematicText
        text="金融空军"
        fontSize={72}
        color="#ECC94B"
        frame={frame}
        fadeInDuration={55}
        position="center"
      />

      {/* English subtitle */}
      <CinematicText
        text="Financial Air Force"
        fontSize={36}
        color="#CBD5E0"
        frame={frame - 40}
        fadeInDuration={50}
        position="bottom"
      />

      {/* Documentary overlay */}
      <DocumentaryOverlay
        year="Modern Era"
        title="Invisible Warfare"
        subtitle="Currency as the ultimate weapon"
        source="Financial Warfare Studies"
        frame={frame - 75}
        fadeInDuration={45}
      />
    </AbsoluteFill>
  );
};
