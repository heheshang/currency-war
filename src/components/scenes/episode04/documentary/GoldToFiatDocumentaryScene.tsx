import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

/**
 * GoldToFiatDocumentaryScene - From Gold to Fiat
 * Documentary-style scene about the transition from gold standard to fiat
 */
export const GoldToFiatDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const contentOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const transitionOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep04/ep04-fed-building.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "subtle" }}
          layer={{ filter: "sepia", opacity: 0.5 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.75} />
      <FilmGrain opacity={0.08} />

      <DocumentaryOverlay
        year="The Shift"
        title="From Gold to Paper"
        subtitle="The Death of Sound Money"
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
            GOLD STANDARD
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#22c55e",
              lineHeight: 1.8,
            }}
          >
            ✓ Money backed by physical gold
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#22c55e",
              lineHeight: 1.8,
            }}
          >
            ✓ Limited government spending
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#22c55e",
              lineHeight: 1.8,
            }}
          >
            ✓ Stable prices over time
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#22c55e",
              lineHeight: 1.8,
            }}
          >
            ✓ No inflation tax
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
            FIAT MONEY
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#ef4444",
              lineHeight: 1.8,
            }}
          >
            ✗ Money by government decree
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#ef4444",
              lineHeight: 1.8,
            }}
          >
            ✗ Unlimited money creation
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#ef4444",
              lineHeight: 1.8,
            }}
          >
            ✗ Hidden inflation tax
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#ef4444",
              lineHeight: 1.8,
            }}
          >
            ✗ Wealth transfer to elites
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: transitionOpacity,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 30,
          }}
        >
          <div
            style={{
              padding: "16px 24px",
              background: "rgba(255, 215, 0, 0.2)",
              border: "2px solid #ffd700",
              borderRadius: 8,
            }}
          >
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 24,
                color: "#ffd700",
                fontWeight: 700,
              }}
            >
              1913
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 4,
              }}
            >
              Fed Created
            </div>
          </div>
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 32,
              color: "#ef4444",
            }}
          >
            →
          </div>
          <div
            style={{
              padding: "16px 24px",
              background: "rgba(239, 68, 68, 0.2)",
              border: "2px solid #ef4444",
              borderRadius: 8,
            }}
          >
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 24,
                color: "#ef4444",
                fontWeight: 700,
              }}
            >
              1971
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 4,
              }}
            >
              Gold Window Closed
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: transitionOpacity,
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
          "Give me control of a nation's money, and I care not who makes its
          laws"
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#ffd700",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          — Mayer Amschel Rothschild
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default GoldToFiatDocumentaryScene;
