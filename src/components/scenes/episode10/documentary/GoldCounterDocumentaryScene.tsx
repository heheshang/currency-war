import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

export const GoldCounterDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <ImageLayer
        src="/assets/images/ep10/ep10-gold-coins.jpg"
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

      <Vignette intensity={0.65} color="#000" />
      <FilmGrain opacity={0.08} />

      <CinematicText
        text="黄金一阳指"
        fontSize={68}
        color="#ECC94B"
        frame={frame}
        fadeInDuration={45}
        position="center"
      />

      <CinematicText
        text="Gold's Counter to the Dollar"
        fontSize={28}
        color="#CBD5E0"
        frame={frame - 30}
        fadeInDuration={40}
        position="bottom"
      />

      <DocumentaryOverlay
        year="2010"
        title="Gold's Resurgence"
        subtitle="The ultimate hedge against fiat currency"
        source="World Gold Council"
        frame={frame - 55}
        fadeInDuration={35}
      />
    </AbsoluteFill>
  );
};
