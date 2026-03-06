import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

/**
 * EliteClubsOpeningDocumentaryScene - Documentary-style opening
 * Dramatic zoom on elite meeting imagery with cinematic atmosphere
 */
export const EliteClubsOpeningDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const quoteOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const clubsOpacity = interpolate(frame, [240, 300], [0, 1], {
    extrapolateRight: "clamp",
  });

  const eliteClubs = [
    { name: "CFR", year: "1921", desc: "Council on Foreign Relations" },
    { name: "BIS", year: "1930", desc: "Bank for International Settlements" },
    { name: "Bilderberg", year: "1954", desc: "Bilderberg Group" },
    { name: "Trilateral", year: "1973", desc: "Trilateral Commission" },
  ];

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep06/ep06-elite-opening.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "dramatic" }}
          layer={{ filter: "vintage", opacity: 0.7 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.85} />
      <FilmGrain opacity={0.1} />

      <DocumentaryOverlay
        year="Episode 06"
        title="Elite Clubs that Rule the World"
        subtitle="统治世界的精英俱乐部"
        frame={frame - 30}
        fadeInDuration={45}
      />

      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            padding: "30px 60px",
            background: "rgba(0, 0, 0, 0.85)",
            border: "3px solid #ffd700",
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 52,
              color: "#ffd700",
              fontWeight: 700,
              letterSpacing: 4,
            }}
          >
            THE HIDDEN HAND
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 18,
              color: "#e8e8e8",
              marginTop: 16,
            }}
          >
            Behind every government, a shadow power
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 22,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            lineHeight: 1.8,
            borderLeft: "4px solid #ffd700",
            borderRight: "4px solid #ffd700",
            padding: "20px 40px",
          }}
        >
          "The real rulers in Washington are invisible and exercise power from
          behind the scenes."
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#ffd700",
            textAlign: "center",
            marginTop: 16,
            letterSpacing: 2,
          }}
        >
          — Felix Frankfurter, Supreme Court Justice
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: clubsOpacity,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            justifyContent: "center",
          }}
        >
          {eliteClubs.map((club, index) => (
            <div
              key={index}
              style={{
                padding: "16px 24px",
                background: "rgba(30, 58, 90, 0.9)",
                border: "2px solid #ffd700",
                borderRadius: 8,
                textAlign: "center",
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
                {club.name}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#9ca3af",
                  marginTop: 4,
                }}
              >
                Est. {club.year}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#e8e8e8",
                  marginTop: 6,
                }}
              >
                {club.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default EliteClubsOpeningDocumentaryScene;
