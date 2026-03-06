import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

export const DollarFlawSummaryDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <ImageLayer
        src="/assets/images/ep10/ep10-opening-gold.jpg"
        kenBurns={{
          panDirection: "zoom-out",
          intensity: "subtle",
        }}
        layer={{
          opacity: 1,
          blendMode: "normal",
          filter: "dramatic",
        }}
        startFrame={0}
        durationFrames={900}
      />

      <Vignette intensity={0.7} color="#000" />
      <FilmGrain opacity={0.1} />

      <CinematicText
        text="总结"
        fontSize={72}
        color="#ECC94B"
        frame={frame}
        fadeInDuration={45}
        position="top"
      />

      <CinematicText
        text="The Dollar's Fatal Flaw"
        fontSize={36}
        color="#CBD5E0"
        frame={frame - 30}
        fadeInDuration={40}
        position="center"
      />

      <CinematicText
        text="And Gold's Counter"
        fontSize={28}
        color="#ECC94B"
        frame={frame - 55}
        fadeInDuration={35}
        position="bottom"
      />

      <DocumentaryOverlay
        year="2024"
        title="The Future of Money"
        subtitle="Debt, gold, and the battle for monetary supremacy"
        source="Currency Wars Analysis"
        frame={frame - 80}
        fadeInDuration={30}
      />
    </AbsoluteFill>
  );
};
