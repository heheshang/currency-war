import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

export const JekyllIslandDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const contentOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const attendeesOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });







  const attendees = [
    { name: "Nelson Aldrich", role: "Senator • Rockefeller's grandfather" },
    { name: "Paul Warburg", role: "Fed's Architect • Rothschild Agent" },
    { name: "Frank Vanderlip", role: "President, National City Bank" },
    { name: "Henry Davison", role: "J.P. Morgan Partner" },
    { name: "Benjamin Strong", role: "Morgan's Right Hand" },
  ];

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep04/ep04-jekyll-island.jpg"
          kenBurns={{ panDirection: "right", intensity: "subtle" }}
          layer={{ filter: "sepia", opacity: 0.6 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.75} />
      <FilmGrain opacity={0.08} />

      <DocumentaryOverlay
        year="1910"
        title="The Secret Meeting at Jekyll Island"
        subtitle="Where the Federal Reserve was conceived"
        frame={frame - 30}
        fadeInDuration={45}
      />

      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "8%",
          opacity: contentOpacity,
        }}
      >
        <div
          style={{
            padding: "20px 30px",
            background: "rgba(0,0,0,0.8)",
            border: "2px solid #ffd700",
            borderRadius: 8,
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 14,
              color: "#8b0000",
              letterSpacing: 3,
              marginBottom: 12,
            }}
          >
            TOP SECRET
          </div>
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 13,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            <div>📅 November 22, 1910</div>
            <div>🚂 Sealed train from New York</div>
            <div>🏝️ Jekyll Island, Georgia</div>
            <div>📰 No journalists within 50 miles</div>
            <div>⏱️ 9 days of secret meetings</div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "28%",
          right: "8%",
          width: "35%",
          opacity: attendeesOpacity,
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
          THE 7 MEN
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {attendees.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "10px 15px",
                background: "rgba(139, 0, 0, 0.2)",
                borderLeft: "3px solid #ffd700",
              }}
            >
              <div
                style={{
                  fontFamily: "Merriweather, serif",
                  fontSize: 14,
                  color: "#ffd700",
                  fontWeight: 600,
                }}
              >
                {item.name}
              </div>
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11,
                  color: "#9ca3af",
                  marginTop: 4,
                }}
              >
                {item.role}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: contentOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          "The world's most secret meeting in financial history"
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default JekyllIslandDocumentaryScene;
