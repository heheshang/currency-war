import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
  CinematicText,
} from "../../../documentary";

/**
 * 开场场景 - 战争序幕
 * 引用约翰·海兰的名言
 */
export const OpeningDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const quoteOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const authorOpacity = interpolate(frame, [150, 200], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/episode05/wwi-cemetery.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "subtle" }}
          layer={{ filter: "sepia", opacity: 0.5 }}
          startFrame={0}
          durationFrames={300}
        />
      </div>

      <Vignette intensity={0.8} />
      <FilmGrain opacity={0.1} />

      <DocumentaryOverlay
        year="1927"
        title="The Invisible Government"
        subtitle="A Warning Unheeded"
        frame={frame - 30}
        fadeInDuration={45}
      />

      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: quoteOpacity,
          maxWidth: "80%",
        }}
      >
        <CinematicText
          text='"The real threat to our republic is this invisible government..."'
          fontSize={28}
          color="#ECC94B"
          frame={frame - 60}
          fadeInDuration={45}
        />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: authorOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#9ca3af",
            fontStyle: "italic",
          }}
        >
          — John Hylan, Mayor of New York, 1927
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default OpeningDocumentaryScene;
