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
 * GoldSilverStandardDocumentaryScene
 * Gold and silver through history
 * Theme: The eternal value of precious metals
 */
export const GoldSilverStandardDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      {/* Background: Gold bars and precious metals */}
      <ImageLayer
        src="/assets/images/ep11/ep11-monetary-gold.jpg"
        kenBurns={{
          panDirection: "right",
          intensity: "moderate",
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
      <Vignette intensity={0.7} color="#000" />

      {/* Film grain */}
      <FilmGrain opacity={0.08} />

      {/* Main title */}
      <CinematicText
        text="金银本位"
        fontSize={72}
        color="#ECC94B"
        frame={frame}
        fadeInDuration={50}
        position="center"
      />

      {/* English subtitle */}
      <CinematicText
        text="The Gold & Silver Standard"
        fontSize={36}
        color="#CBD5E0"
        frame={frame - 35}
        fadeInDuration={45}
        position="bottom"
      />

      {/* Documentary overlay */}
      <DocumentaryOverlay
        year="1816-1971"
        title="The Golden Era of Money"
        subtitle="When currency had real value"
        source="Bank of England Archives"
        frame={frame - 70}
        fadeInDuration={40}
      />
    </AbsoluteFill>
  );
};
