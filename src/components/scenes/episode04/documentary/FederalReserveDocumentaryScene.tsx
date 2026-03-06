import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

export const FederalReserveDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const contentOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const statsOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });







  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep04/ep04-fed-documentary.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "subtle" }}
          layer={{ filter: "sepia", opacity: 0.5 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.7} />
      <FilmGrain opacity={0.06} />

      <DocumentaryOverlay
        year="1913"
        title="The Federal Reserve Act"
        subtitle="December 23, 1913 — While Congress was away"
        frame={frame - 30}
        fadeInDuration={45}
      />

      <div
        style={{
          position: "absolute",
          top: "30%",
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
            WHAT THEY PROMISED
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#22c55e",
              lineHeight: 1.8,
            }}
          >
            ✓ Prevent bank panics
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#22c55e",
              lineHeight: 1.8,
            }}
          >
            ✓ Stabilize prices
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#22c55e",
              lineHeight: 1.8,
            }}
          >
            ✓ Full employment
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "30%",
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
            WHAT THEY DELIVERED
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#ef4444",
              lineHeight: 1.8,
            }}
          >
            ✗ 1929 Market Crash
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#ef4444",
              lineHeight: 1.8,
            }}
          >
            ✗ Great Depression
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#ef4444",
              lineHeight: 1.8,
            }}
          >
            ✗ 97% dollar devaluation
          </div>
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
                color: "#ffd700",
                fontWeight: 700,
              }}
            >
              12
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 13,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              Regional Banks
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
              Government Ownership
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 36,
                color: "#22c55e",
                fontWeight: 700,
              }}
            >
              100%
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 13,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              Private Banker Control
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "6%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: statsOpacity,
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
          "A private corporation with the power to create money from nothing"
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default FederalReserveDocumentaryScene;
