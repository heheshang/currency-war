import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

export const ColonialAmericaDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const contentOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const textScale = spring({
    frame: frame - 90,
    fps: 30,
    config: { damping: 15, stiffness: 60 },
  });

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep03/ep03-colonial-documentary.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "subtle" }}
          layer={{ filter: "vintage", opacity: 0.7 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.7} />
      <FilmGrain opacity={0.06} />

      <DocumentaryOverlay
        year="1776"
        title="The Birth of American Banking"
        subtitle="Colonial resistance to British monetary control"
        frame={frame - 30}
        fadeInDuration={45}
      />

      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: `translateX(-50%) scale(${textScale})`,
          opacity: contentOpacity,
          width: "70%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 24,
            color: "#e8e8e8",
            lineHeight: 1.8,
            fontStyle: "italic",
          }}
        >
          "The colonies would have born little tax without the Bank of England's
          interference."
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 16,
            color: "#9ca3af",
            marginTop: 20,
            letterSpacing: 2,
          }}
        >
          — Benjamin Franklin
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: contentOpacity,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 40,
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 32,
                color: "#ffd700",
                fontWeight: 700,
              }}
            >
              13
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 4,
              }}
            >
              Colonies
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 32,
                color: "#ffd700",
                fontWeight: 700,
              }}
            >
              £0
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 4,
              }}
            >
              Debt to Bank of England
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 32,
                color: "#ffd700",
                fontWeight: 700,
              }}
            >
              100%
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 4,
              }}
            >
              Colonial Currency Control
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default ColonialAmericaDocumentaryScene;
