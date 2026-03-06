import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { ImageLayer, Vignette, FilmGrain } from "../../../documentary";

/**
 * SummaryDocumentaryScene - Episode 4 Summary
 * Documentary-style summary scene for the Federal Reserve episode
 */
export const SummaryDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const pointsOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const keyPoints = [
    "Secret meeting at Jekyll Island (1910)",
    "Bankers created their own central bank",
    "Passed while Congress was away (1913)",
    "Private ownership, public deception",
    "Wilson's regret came too late",
  ];

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep04/ep04-fed-building.jpg"
          kenBurns={{ panDirection: "zoom-out", intensity: "subtle" }}
          layer={{ filter: "sepia", opacity: 0.4 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.75} />
      <FilmGrain opacity={0.08} />

      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 42,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 3,
          }}
        >
          THE FEDERAL RESERVE
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          A Private Central Bank
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          opacity: pointsOpacity,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {keyPoints.map((point, index) => {
            const delay = index * 10;
            const itemOpacity = interpolate(
              frame - 210 - delay,
              [0, 30],
              [0, 1],
              { extrapolateRight: "clamp" },
            );
            const itemX = interpolate(frame - 210 - delay, [0, 30], [-30, 0], {
              extrapolateRight: "clamp",
            });

            return (
              <div
                key={index}
                style={{
                  padding: "16px 24px",
                  background: "rgba(0,0,0,0.85)",
                  borderLeft: "4px solid #ffd700",
                  opacity: itemOpacity,
                  transform: `translateX(${itemX}px)`,
                }}
              >
                <div
                  style={{
                    fontFamily: "Merriweather, serif",
                    fontSize: 16,
                    color: "#e8e8e8",
                  }}
                >
                  {index + 1}. {point}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: pointsOpacity,
        }}
      >
        <div
          style={{
            padding: "20px 40px",
            background: "rgba(139, 0, 0, 0.7)",
            border: "2px solid #ef4444",
            borderRadius: 8,
          }}
        >
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 16,
              color: "#e8e8e8",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            "The name says Federal, but the owners are private"
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default SummaryDocumentaryScene;
