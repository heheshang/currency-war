import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

/**
 * Election1912DocumentaryScene - The 1912 Election
 * Documentary-style scene about the pivotal 1912 presidential election
 */
export const Election1912DocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const contentOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const candidatesOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const candidates = [
    {
      name: "Woodrow Wilson",
      party: "Democrat",
      percent: 42,
      color: "#3b82f6",
    },
    {
      name: "Theodore Roosevelt",
      party: "Progressive",
      percent: 27,
      color: "#f59e0b",
    },
    {
      name: "William Taft",
      party: "Republican",
      percent: 23,
      color: "#ef4444",
    },
  ];

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep04/ep04-wilson-portrait.jpg"
          kenBurns={{ panDirection: "right", intensity: "subtle" }}
          layer={{ filter: "sepia", opacity: 0.6 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.75} />
      <FilmGrain opacity={0.08} />

      <DocumentaryOverlay
        year="1912"
        title="The Pivotal Election"
        subtitle="A Three-Way Split"
        frame={frame - 30}
        fadeInDuration={45}
      />

      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "8%",
          opacity: contentOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "rgba(0,0,0,0.85)",
            border: "2px solid #ffd700",
            borderRadius: 8,
            maxWidth: "42%",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ffd700",
              marginBottom: 16,
              letterSpacing: 2,
            }}
          >
            THE SETUP
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • Roosevelt splits Republican vote
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • Wilson wins with only 42%
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • Bankers back all three candidates
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "25%",
          right: "8%",
          opacity: contentOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "rgba(139, 0, 0, 0.7)",
            border: "2px solid #ef4444",
            borderRadius: 8,
            maxWidth: "42%",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ef4444",
              marginBottom: 16,
              letterSpacing: 2,
            }}
          >
            THE RESULT
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • Wilson signs Fed Act
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • December 23, 1913
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • Most Congress members away
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: candidatesOpacity,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            justifyContent: "center",
          }}
        >
          {candidates.map((candidate, index) => {
            const delay = index * 10;
            const barWidth = interpolate(
              frame - 210 - delay,
              [0, 60],
              [0, candidate.percent * 3],
              { extrapolateRight: "clamp" },
            );

            return (
              <div key={index} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "Cinzel, serif",
                    fontSize: 14,
                    color: candidate.color,
                    marginBottom: 8,
                  }}
                >
                  {candidate.name}
                </div>
                <div
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 11,
                    color: "#9ca3af",
                    marginBottom: 8,
                  }}
                >
                  {candidate.party}
                </div>
                <div
                  style={{
                    width: barWidth,
                    height: 20,
                    background: candidate.color,
                    borderRadius: 4,
                  }}
                />
                <div
                  style={{
                    fontFamily: "Cinzel, serif",
                    fontSize: 20,
                    color: "#e8e8e8",
                    marginTop: 8,
                  }}
                >
                  {candidate.percent}%
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "6%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: candidatesOpacity,
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
          "No matter who wins, the bankers always win"
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Election1912DocumentaryScene;
