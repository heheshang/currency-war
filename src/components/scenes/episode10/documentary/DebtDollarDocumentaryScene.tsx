import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

export const DebtDollarDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <ImageLayer
        src="/assets/images/ep10/ep10-debt-crisis.jpg"
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

      <Vignette intensity={0.75} color="#000" />
      <FilmGrain opacity={0.12} />

      <CinematicText
        text="债务美元"
        fontSize={68}
        color="#ECC94B"
        frame={frame}
        fadeInDuration={45}
        position="center"
      />

      <CinematicText
        text="Every Dollar is Debt"
        fontSize={28}
        color="#CBD5E0"
        frame={frame - 30}
        fadeInDuration={40}
        position="bottom"
      />

      <DocumentaryOverlay
        year="1913"
        title="Federal Reserve Act"
        subtitle="Creating money from nothing"
        source="Federal Reserve History"
        frame={frame - 60}
        fadeInDuration={35}
      />
    </AbsoluteFill>
  );
};
