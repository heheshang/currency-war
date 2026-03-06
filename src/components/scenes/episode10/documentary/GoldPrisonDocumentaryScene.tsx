import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

export const GoldPrisonDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <ImageLayer
        src="/assets/images/ep10/ep10-gold-coins.jpg"
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

      <Vignette intensity={0.75} color="#000" />
      <FilmGrain opacity={0.11} />

      <CinematicText
        text="黄金囚笼"
        fontSize={68}
        color="#ECC94B"
        frame={frame}
        fadeInDuration={45}
        position="center"
      />

      <CinematicText
        text="Gold Price Suppression"
        fontSize={30}
        color="#CBD5E0"
        frame={frame - 30}
        fadeInDuration={40}
        position="bottom"
      />

      <DocumentaryOverlay
        year="1961"
        title="London Gold Pool"
        subtitle="Coordinated gold price suppression"
        source="Bank for International Settlements"
        frame={frame - 60}
        fadeInDuration={35}
      />
    </AbsoluteFill>
  );
};
