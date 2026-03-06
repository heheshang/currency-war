import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

/**
 * HouseColonelDocumentaryScene - Colonel House and secret diplomacy
 * The man behind Woodrow Wilson who shaped the Federal Reserve
 */
export const HouseColonelDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const profileOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const influenceOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const quoteOpacity = interpolate(frame, [240, 300], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep06/ep06-house-colonel.jpg"
          kenBurns={{ panDirection: "right", intensity: "moderate" }}
          layer={{ filter: "sepia", opacity: 0.65 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.8} />
      <FilmGrain opacity={0.08} />

      <DocumentaryOverlay
        year="1912-1919"
        title="Colonel Edward M. House"
        subtitle="The Silent Architect of Power"
        frame={frame - 30}
        fadeInDuration={45}
      />

      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "8%",
          opacity: profileOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "rgba(0, 0, 0, 0.85)",
            border: "2px solid #ffd700",
            borderRadius: 8,
            width: "320px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ffd700",
              marginBottom: 16,
              letterSpacing: 2,
            }}
          >
            THE COLONEL
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#22c55e" }}>Role:</span> Wilson's closest
              advisor
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#22c55e" }}>Power:</span> Never elected,
              but ruled
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#22c55e" }}>Nickname:</span> "Silent
              Partner"
            </div>
            <div>
              <span style={{ color: "#22c55e" }}>Mission:</span> Create the Fed
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "25%",
          right: "8%",
          opacity: influenceOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "rgba(139, 0, 0, 0.7)",
            border: "2px solid #ef4444",
            borderRadius: 8,
            width: "340px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ef4444",
              marginBottom: 16,
              letterSpacing: 2,
            }}
          >
            HIDDEN INFLUENCE
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            <div style={{ marginBottom: 8 }}>
              • Selected Wilson as President
            </div>
            <div style={{ marginBottom: 8 }}>• Orchestrated Fed creation</div>
            <div style={{ marginBottom: 8 }}>
              • Attended Jekyll Island meeting
            </div>
            <div style={{ marginBottom: 8 }}>• Shaped WWI policy</div>
            <div>• Founded CFR in 1921</div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            padding: "24px 40px",
            background: "rgba(0, 0, 0, 0.85)",
            borderLeft: "4px solid #ffd700",
            maxWidth: "700px",
          }}
        >
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 18,
              color: "#e8e8e8",
              fontStyle: "italic",
              lineHeight: 1.7,
            }}
          >
            "Colonel House was the most powerful man in America, yet most
            Americans never knew his name."
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#ffd700",
              marginTop: 12,
              letterSpacing: 1,
            }}
          >
            — Historical Record
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default HouseColonelDocumentaryScene;
