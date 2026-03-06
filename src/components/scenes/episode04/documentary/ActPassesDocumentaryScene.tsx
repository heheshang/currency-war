import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

/**
 * ActPassesDocumentaryScene - The Federal Reserve Act Passes
 * Documentary-style scene about the passage of the Federal Reserve Act
 */
export const ActPassesDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const contentOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const timelineOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const timeline = [
    { time: "Dec 23", event: "Congress adjourns for Christmas" },
    { time: "1:30 AM", event: "Senate passes the Act" },
    { time: "1:52 AM", event: "House passes the Act" },
    { time: "6:02 PM", event: "Wilson signs into law" },
  ];

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep04/ep04-fed-building.jpg"
          kenBurns={{ panDirection: "left", intensity: "dramatic" }}
          layer={{ filter: "vintage", opacity: 0.6 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.85} />
      <FilmGrain opacity={0.1} />

      <DocumentaryOverlay
        year="December 23, 1913"
        title="The Act Passes"
        subtitle="While America Sleeps"
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
            THE SNEAK ATTACK
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • Most members had gone home
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • No quorum verification
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • Voice vote only
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • No recorded roll call
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
            WHAT THEY GOT
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • Money creation monopoly
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • Control of interest rates
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • No government oversight
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • Perpetual debt system
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: timelineOpacity,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
          }}
        >
          {timeline.map((item, index) => {
            const delay = index * 15;
            const itemOpacity = interpolate(
              frame - 210 - delay,
              [0, 30],
              [0, 1],
              { extrapolateRight: "clamp" },
            );

            return (
              <div
                key={index}
                style={{
                  padding: "12px 16px",
                  background: "rgba(0,0,0,0.85)",
                  border: "2px solid #ffd700",
                  borderRadius: 8,
                  opacity: itemOpacity,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 12,
                    color: "#ffd700",
                  }}
                >
                  {item.time}
                </div>
                <div
                  style={{
                    fontFamily: "Merriweather, serif",
                    fontSize: 11,
                    color: "#e8e8e8",
                    marginTop: 6,
                    maxWidth: 120,
                  }}
                >
                  {item.event}
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
          opacity: timelineOpacity,
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
          "The greatest heist in American history — legalized"
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default ActPassesDocumentaryScene;
