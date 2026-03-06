import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

export const HousingBubbleDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <ImageLayer
        src="/assets/images/ep10/ep10-housing-bubble.jpg"
        kenBurns={{
          panDirection: "up",
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

      <Vignette intensity={0.7} color="#000" />
      <FilmGrain opacity={0.09} />

      <CinematicText
        text="房地产泡沫"
        fontSize={64}
        color="#ECC94B"
        frame={frame}
        fadeInDuration={40}
        position="top"
      />

      <CinematicText
        text="Fannie Mae & Freddie Mac"
        fontSize={28}
        color="#CBD5E0"
        frame={frame - 25}
        fadeInDuration={35}
        position="center"
      />

      <DocumentaryOverlay
        year="2008"
        title="The Subprime Crisis"
        subtitle="Government-sponsored enterprises and the housing collapse"
        source="Financial Crisis Inquiry Commission"
        frame={frame - 50}
        fadeInDuration={30}
      />
    </AbsoluteFill>
  );
};
