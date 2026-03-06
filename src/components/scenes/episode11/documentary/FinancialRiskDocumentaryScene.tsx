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
 * FinancialRiskDocumentaryScene
 * Modern financial risks
 * Theme: The dangers lurking in the modern financial system
 */
export const FinancialRiskDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      {/* Background: Risk/uncertainty imagery */}
      <ImageLayer
        src="/assets/images/ep11/ep11-financial-risk.jpg"
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
      <FilmGrain opacity={0.12} />

      {/* Main title */}
      <CinematicText
        text="金融风险"
        fontSize={72}
        color="#ECC94B"
        frame={frame}
        fadeInDuration={50}
        position="center"
      />

      {/* English subtitle */}
      <CinematicText
        text="Financial Risk"
        fontSize={36}
        color="#CBD5E0"
        frame={frame - 35}
        fadeInDuration={45}
        position="bottom"
      />

      {/* Documentary overlay */}
      <DocumentaryOverlay
        year="2024+"
        title="Systemic Vulnerabilities"
        subtitle="Derivatives, debt, and digital disruption"
        source="Financial Stability Reports"
        frame={frame - 70}
        fadeInDuration={40}
      />
    </AbsoluteFill>
  );
};
