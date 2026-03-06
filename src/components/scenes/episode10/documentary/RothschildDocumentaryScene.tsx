import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

export const RothschildDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <ImageLayer
        src="/assets/images/ep10/ep10-rothschild-portrait.jpg"
        kenBurns={{
          panDirection: "left",
          intensity: "moderate",
        }}
        layer={{
          opacity: 1,
          blendMode: "normal",
          filter: "sepia",
        }}
        startFrame={0}
        durationFrames={900}
      />

      <Vignette intensity={0.8} color="#000" />
      <FilmGrain opacity={0.15} />

      <CinematicText
        text="罗斯柴尔德家族"
        fontSize={60}
        color="#ECC94B"
        frame={frame}
        fadeInDuration={40}
        position="top"
      />

      <CinematicText
        text="The Rothschild Dynasty"
        fontSize={32}
        color="#CBD5E0"
        frame={frame - 25}
        fadeInDuration={35}
        position="center"
      />

      <DocumentaryOverlay
        year="1815"
        title="Nathan Mayer Rothschild"
        subtitle="He who controls gold, controls nations"
        source="Historical Archives"
        frame={frame - 50}
        fadeInDuration={30}
      />
    </AbsoluteFill>
  );
};
