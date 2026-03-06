import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

export const FractionalReserveDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <ImageLayer
        src="/assets/images/ep10/ep10-fractional-reserve.jpg"
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

      <Vignette intensity={0.65} color="#000" />
      <FilmGrain opacity={0.08} />

      <CinematicText
        text="部分准备金制度"
        fontSize={64}
        color="#ECC94B"
        frame={frame}
        fadeInDuration={40}
        position="top"
      />

      <CinematicText
        text="Fractional Reserve Banking"
        fontSize={32}
        color="#CBD5E0"
        frame={frame - 25}
        fadeInDuration={35}
        position="center"
      />

      <DocumentaryOverlay
        year="1694"
        title="Bank of England"
        subtitle="The birth of fractional reserve banking"
        source="Bank of England Historical Archives"
        frame={frame - 50}
        fadeInDuration={30}
      />
    </AbsoluteFill>
  );
};
