import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

export const LincolnDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const quoteOpacity = interpolate(frame, [90, 150], [0, 1], {
    extrapolateRight: "clamp",
  });

  const statsOpacity = interpolate(frame, [180, 240], [0, 1], {
    extrapolateRight: "clamp",
  });

  const portraitScale = spring({
    frame: frame - 30,
    fps: 30,
    config: { damping: 12, stiffness: 50 },
  });

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep03/ep03-lincoln-documentary.jpg"
          kenBurns={{ panDirection: "right", intensity: "subtle" }}
          layer={{ filter: "grayscale", opacity: 0.5 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.75} />
      <FilmGrain opacity={0.08} />

      <DocumentaryOverlay
        year="1864"
        title="Abraham Lincoln"
        subtitle="16th President of the United States"
        frame={frame - 30}
        fadeInDuration={45}
      />

      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "10%",
          transform: `scale(${portraitScale})`,
          opacity: bgOpacity,
        }}
      >
        <div
          style={{
            width: 200,
            height: 280,
            background: "linear-gradient(180deg, #2d3748 0%, #1a202c 100%)",
            border: "3px solid #ffd700",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 48,
              color: "#ffd700",
              fontWeight: 700,
            }}
          >
            AL
          </div>
        </div>
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 12,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 12,
          }}
        >
          1809 - 1865
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "8%",
          width: "45%",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 22,
            color: "#e8e8e8",
            lineHeight: 1.8,
            fontStyle: "italic",
          }}
        >
          "I have two great enemies: the Southern army in front of me, and the
          financial institutions behind me."
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#ffd700",
            marginTop: 16,
          }}
        >
          "Of the two, the latter is my greatest foe."
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: statsOpacity,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 60,
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 36,
                color: "#22c55e",
                fontWeight: 700,
              }}
            >
              $450M
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 13,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              Greenbacks Issued
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 36,
                color: "#ef4444",
                fontWeight: 700,
              }}
            >
              0%
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 13,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              Interest to Bankers
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 36,
                color: "#ffd700",
                fontWeight: 700,
              }}
            >
              April 14
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 13,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              1865 - Assassinated
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default LincolnDocumentaryScene;
