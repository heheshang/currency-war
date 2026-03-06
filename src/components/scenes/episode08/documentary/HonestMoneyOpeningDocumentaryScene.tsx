import React from "react";
import { AbsoluteFill, useCurrentFrame, Sequence } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

const fps = 30;

export const HonestMoneyOpeningDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      {/* Background Image - Currency/Honest Money Theme */}
      <ImageLayer
        src="/assets/images/ep08/ep08-gold-standard.jpg"
        kenBurns={{ panDirection: "zoom-in", intensity: "moderate" }}
        layer={{ opacity: 1, blendMode: "normal", filter: "vintage" }}
        startFrame={0}
        durationFrames={fps * 8}
      />

      {/* Title Card Sequence */}
      <Sequence from={fps * 1} durationInFrames={fps * 4}>
        <CinematicText
          text="诚实货币的最后抗争"
          fontSize={56}
          color="#ECC94B"
          frame={frame - fps * 1}
          fadeInDuration={fps * 0.5}
          position="center"
        />
      </Sequence>

      {/* Episode Number */}
      <Sequence from={fps * 5} durationInFrames={fps * 3}>
        <CinematicText
          text="第八章"
          fontSize={36}
          color="#CBD5E0"
          frame={frame - fps * 5}
          fadeInDuration={fps * 0.5}
          position="center"
        />
      </Sequence>

      {/* Overlay Info */}
      <Sequence from={fps * 3} durationInFrames={fps * 5}>
        <DocumentaryOverlay
          title="The Last Stand for Honest Money"
          subtitle="货币与权力的终极博弈"
          frame={frame - fps * 3}
          fadeInDuration={fps * 0.8}
        />
      </Sequence>

      <Vignette intensity={0.7} />
      <FilmGrain opacity={0.06} />
    </AbsoluteFill>
  );
};

export default HonestMoneyOpeningDocumentaryScene;
