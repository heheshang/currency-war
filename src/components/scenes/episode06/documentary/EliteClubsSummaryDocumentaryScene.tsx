import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

/**
 * EliteClubsSummaryDocumentaryScene - Summary of elite control
 * Connecting all the pieces of the global power structure
 */
export const EliteClubsSummaryDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const networkOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const conclusionOpacity = interpolate(frame, [240, 300], [0, 1], {
    extrapolateRight: "clamp",
  });

  const quoteOpacity = interpolate(frame, [330, 390], [0, 1], {
    extrapolateRight: "clamp",
  });

  const clubs = [
    { name: "CFR", year: "1921", role: "Policy Shaping" },
    { name: "BIS", year: "1930", role: "Financial Control" },
    { name: "IMF/WB", year: "1944", role: "Global Debt" },
    { name: "Bilderberg", year: "1954", role: "Elite Consensus" },
    { name: "Trilateral", year: "1973", role: "Regional Unity" },
  ];

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep06/ep06-trilateral-global.jpg"
          kenBurns={{ panDirection: "zoom-out", intensity: "dramatic" }}
          layer={{ filter: "vintage", opacity: 0.6 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.85} />
      <FilmGrain opacity={0.1} />

      <DocumentaryOverlay
        year="Summary"
        title="The Network of Power"
        subtitle="Connecting the Dots"
        frame={frame - 30}
        fadeInDuration={45}
      />

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            padding: "20px 50px",
            background: "rgba(0, 0, 0, 0.9)",
            border: "3px solid #ffd700",
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 36,
              color: "#ffd700",
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            THE INVISIBLE GOVERNMENT
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              marginTop: 8,
            }}
          >
            Five Organizations, One Agenda
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: networkOpacity,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
          }}
        >
          {clubs.map((club, index) => (
            <div
              key={index}
              style={{
                padding: "16px 20px",
                background: "rgba(30, 58, 90, 0.9)",
                border: "2px solid #ffd700",
                borderRadius: 8,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Cinzel, serif",
                  fontSize: 18,
                  color: "#ffd700",
                  fontWeight: 700,
                }}
              >
                {club.name}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#9ca3af",
                  marginTop: 4,
                }}
              >
                {club.year}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "#e8e8e8",
                  marginTop: 6,
                }}
              >
                {club.role}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "32%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: conclusionOpacity,
        }}
      >
        <div
          style={{
            padding: "24px 40px",
            background: "rgba(139, 0, 0, 0.75)",
            border: "2px solid #ef4444",
            borderRadius: 8,
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ef4444",
              marginBottom: 12,
              letterSpacing: 2,
            }}
          >
            THE PATTERN
          </div>
          <div
            style={{
              fontSize: 15,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            Each organization serves a specific purpose in the global control
            structure. Together, they form an interconnected web of influence
            that shapes world events, monetary policy, and the future of
            humanity.
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            padding: "20px 40px",
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
            "The real truth of the matter is that a financial element in the
            large centers has owned the government since the days of Andrew
            Jackson."
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#ffd700",
              marginTop: 12,
              letterSpacing: 1,
            }}
          >
            — Franklin D. Roosevelt, 1933
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default EliteClubsSummaryDocumentaryScene;
