import React from "react";
import { AbsoluteFill, useCurrentFrame, Sequence, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

const fps = 30;

export const KennedyDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      {/* Background - JFK Portrait */}
      <ImageLayer
        src="/assets/images/ep08/president_kennedy_portrait_historical_black_white_2_pexels.jpeg"
        kenBurns={{ panDirection: "right", intensity: "subtle" }}
        layer={{ opacity: 1, blendMode: "normal", filter: "grayscale" }}
        startFrame={0}
        durationFrames={fps * 10}
      />

      {/* Year Stamp */}
      <Sequence from={fps * 0.5} durationInFrames={fps * 9}>
        <DocumentaryOverlay
          year="1963"
          title="约翰·F·肯尼迪"
          subtitle="Executive Order 11110"
          frame={frame - fps * 0.5}
          fadeInDuration={fps * 0.6}
        />
      </Sequence>

      {/* Main Narrative */}
      <Sequence from={fps * 2} durationInFrames={fps * 6}>
        <CinematicText
          text="白银券的最后守护者"
          fontSize={42}
          color="#ECC94B"
          frame={frame - fps * 2}
          fadeInDuration={fps * 0.8}
          position="top"
        />
      </Sequence>

      {/* Key Quote */}
      <Sequence from={fps * 4} durationInFrames={fps * 5}>
        <AbsoluteFill
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "0 15%",
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              fontStyle: "italic",
              textAlign: "center",
              opacity: interpolate(
                frame - fps * 4,
                [0, fps * 0.5, fps * 4.5, fps * 5],
                [0, 1, 1, 0],
                { extrapolateRight: "clamp" },
              ),
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              lineHeight: 1.6,
            }}
          >
            "我们今天面临的挑战是确保货币的诚实性，让自由与繁荣得以延续。"
          </div>
        </AbsoluteFill>
      </Sequence>

      <Vignette intensity={0.65} />
      <FilmGrain opacity={0.08} />
    </AbsoluteFill>
  );
};

export default KennedyDocumentaryScene;
