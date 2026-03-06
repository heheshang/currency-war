import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";


export const JapanBubbleDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();


  const nikkeiProgress = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });
  const nikkeiValue = Math.floor(10000 + nikkeiProgress * 29000);


  const collapseOpacity = interpolate(frame, [100, 130], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = spring({
    frame: frame - 50,
    fps: 30,
    from: 0.5,
    to: 1,
    config: { damping: 10, stiffness: 80 },
  });

  return (
    <AbsoluteFill>

      <ImageLayer
        src="/assets/images/ep09/ep09-japan-tokyo.jpg"
        kenBurns={{
          panDirection: "zoom-in",
          intensity: "moderate",
        }}
        layer={{
          opacity: 1,
          blendMode: "normal",
          filter: "dramatic",
        }}
        startFrame={0}
        durationFrames={300}
      />


      <ImageLayer
        src="/assets/images/ep09/ep09-japan-temple.jpg"
        kenBurns={{
          panDirection: "left",
          intensity: "subtle",
        }}
        layer={{
          opacity: 0.15,
          blendMode: "overlay",
          filter: "sepia",
        }}
        startFrame={0}
        durationFrames={300}
      />


      <Vignette intensity={0.6} />


      <FilmGrain opacity={0.05} />


      <CinematicText
        text="日本泡沫经济"
        fontSize={48}
        color="#ECC94B"
        frame={frame - 20}
        fadeInDuration={35}
        position="top"
      />


      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [40, 70], [0, 1], {
              extrapolateRight: "clamp",
            }),
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "#9CA3AF",
              fontFamily: "Merriweather, serif",
              marginBottom: 16,
              letterSpacing: 1,
            }}
          >
            Nikkei 225 Index
          </div>
          <div
            style={{
              fontSize: 72,
              color: "#10B981",
              fontFamily: "Cinzel, serif",
              fontWeight: 700,
              transform: `scale(${scale})`,
              textShadow: "0 0 30px rgba(16, 185, 129, 0.4)",
            }}
          >
            {nikkeiValue.toLocaleString()}
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              marginTop: 8,
            }}
          >
            December 1989 Peak
          </div>
        </div>
      </AbsoluteFill>


      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: 160,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 50,
            opacity: collapseOpacity,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 28,
                color: "#EF4444",
                fontFamily: "Cinzel, serif",
                fontWeight: 700,
              }}
            >
              -60%
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#9CA3AF",
                fontFamily: "Merriweather, serif",
              }}
            >
              Stock Market
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 28,
                color: "#EF4444",
                fontFamily: "Cinzel, serif",
                fontWeight: 700,
              }}
            >
              -70%
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#9CA3AF",
                fontFamily: "Merriweather, serif",
              }}
            >
              Land Prices
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 28,
                color: "#ECC94B",
                fontFamily: "Cinzel, serif",
                fontWeight: 700,
              }}
            >
              1985
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#9CA3AF",
                fontFamily: "Merriweather, serif",
              }}
            >
              Plaza Accord
            </div>
          </div>
        </div>
      </AbsoluteFill>


      <DocumentaryOverlay
        title="Japan's Bubble Economy"
        subtitle="Asset Price Inflation & Collapse"
        year="1980s"
        source="Bank of Japan Archives"
        frame={frame}
        fadeInDuration={40}
      />
    </AbsoluteFill>
  );
};
