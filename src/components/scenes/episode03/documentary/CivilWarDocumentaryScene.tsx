import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import {
  ImageLayer,
  Vignette,
  FilmGrain,
} from "../../../documentary";

export const CivilWarDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const mapOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const quoteOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const axisOpacity = interpolate(frame, [240, 300], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleScale = spring({
    frame: frame - 30,
    fps: 30,
    config: { damping: 15, stiffness: 60 },
  });

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep03/ep03-civil-war-documentary.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "moderate" }}
          layer={{ filter: "grayscale", opacity: 0.6 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.8} />
      <FilmGrain opacity={0.1} />

      <div
        style={{
          position: "absolute",
          top: "6%",
          left: "50%",
          transform: `translateX(-50%) scale(${titleScale})`,
          opacity: bgOpacity,
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
          1861 - 1865
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 28,
            color: "#e8e8e8",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          The American Civil War
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "8%",
          opacity: mapOpacity,
        }}
      >
        <div
          style={{
            padding: "20px 30px",
            background: "rgba(0,0,0,0.7)",
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
            EUROPEAN FINANCING
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { city: "London", amount: "£25M", flag: "🇬🇧" },
              { city: "Paris", amount: "₣50M", flag: "🇫🇷" },
              { city: "Frankfurt", amount: "ℳ10M", flag: "🇩🇪" },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "8px 12px",
                  background: "rgba(139, 0, 0, 0.3)",
                  borderRadius: 4,
                }}
              >
                <span style={{ fontSize: 20 }}>{item.flag}</span>
                <span
                  style={{
                    fontFamily: "Merriweather, serif",
                    fontSize: 14,
                    color: "#e8e8e8",
                    flex: 1,
                  }}
                >
                  {item.city}
                </span>
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 14,
                    color: "#ffd700",
                    fontWeight: 600,
                  }}
                >
                  {item.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "25%",
          right: "8%",
          width: "35%",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "rgba(0,0,0,0.8)",
            borderLeft: "4px solid #ffd700",
          }}
        >
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 18,
              color: "#e8e8e8",
              lineHeight: 1.7,
              fontStyle: "italic",
            }}
          >
            "The division of the United States was decided upon in European
            financial circles long before the first shot was fired."
          </div>
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 14,
              color: "#9ca3af",
              marginTop: 16,
              letterSpacing: 1,
            }}
          >
            — Otto von Bismarck, German Chancellor
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: axisOpacity,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 50,
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 36,
                color: "#ef4444",
                fontWeight: 700,
              }}
            >
              620,000
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 13,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              American Lives Lost
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 36,
                color: "#ffd700",
                fontWeight: 700,
              }}
            >
              Divide
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 13,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              & Conquer Strategy
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
              Union
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 13,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              Preserved Against Odds
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default CivilWarDocumentaryScene;
