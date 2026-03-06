import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

export const DerivativesDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <ImageLayer
        src="/assets/images/ep10/ep10-debt-crisis.jpg"
        kenBurns={{
          panDirection: "right",
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

      <Vignette intensity={0.7} color="#000" />
      <FilmGrain opacity={0.1} />

      <CinematicText
        text="金融衍生品泡沫"
        fontSize={60}
        color="#ECC94B"
        frame={frame}
        fadeInDuration={40}
        position="top"
      />

      <CinematicText
        text="The Derivatives Bubble"
        fontSize={32}
        color="#CBD5E0"
        frame={frame - 25}
        fadeInDuration={35}
        position="center"
      />

      <DocumentaryOverlay
        year="2008"
        title="$600 Trillion Derivatives Market"
        subtitle="The largest bubble in history"
        source="Bank for International Settlements"
        frame={frame - 55}
        fadeInDuration={30}
      />
    </AbsoluteFill>
  );
};
