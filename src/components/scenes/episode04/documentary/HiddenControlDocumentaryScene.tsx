import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

/**
 * HiddenControlDocumentaryScene - The Hidden Control
 * Documentary-style scene about the hidden mechanisms of Fed control
 */
export const HiddenControlDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const contentOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const mechanismsOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const mechanisms = [
    { title: "Interest Rates", desc: "Control borrowing costs" },
    { title: "Money Supply", desc: "Create money from nothing" },
    { title: "Bank Bailouts", desc: "Privatize gains, socialize losses" },
  ];

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep04/ep04-wall-street.jpg"
          kenBurns={{ panDirection: "right", intensity: "subtle" }}
          layer={{ filter: "sepia", opacity: 0.5 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.8} />
      <FilmGrain opacity={0.1} />

      <DocumentaryOverlay
        year="The System"
        title="Hidden Control"
        subtitle="Invisible Chains"
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
            THE ILLUSION
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • President appoints governors
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • Congress gets "reports"
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • Appears "independent"
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
            THE REALITY
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • Bankers choose candidates
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • No real oversight
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • Audits blocked by law
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: mechanismsOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 16,
            color: "#ffd700",
            marginBottom: 16,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          MECHANISMS OF CONTROL
        </div>
        <div
          style={{
            display: "flex",
            gap: 30,
            justifyContent: "center",
          }}
        >
          {mechanisms.map((mech, index) => {
            const delay = index * 10;
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
                  padding: "16px 24px",
                  background: "rgba(0,0,0,0.85)",
                  border: "2px solid #ef4444",
                  borderRadius: 8,
                  opacity: itemOpacity,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "Cinzel, serif",
                    fontSize: 16,
                    color: "#ef4444",
                  }}
                >
                  {mech.title}
                </div>
                <div
                  style={{
                    fontFamily: "Merriweather, serif",
                    fontSize: 12,
                    color: "#9ca3af",
                    marginTop: 6,
                  }}
                >
                  {mech.desc}
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
          opacity: mechanismsOpacity,
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
          "Permit me to issue and control the money of a nation..."
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default HiddenControlDocumentaryScene;
