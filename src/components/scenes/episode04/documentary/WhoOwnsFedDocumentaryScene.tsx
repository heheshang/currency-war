import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

/**
 * WhoOwnsFedDocumentaryScene - Who Owns the Federal Reserve?
 * Documentary-style scene revealing the Fed's ownership structure
 */
export const WhoOwnsFedDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const contentOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const banksOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const shareholdingBanks = [
    { name: "Citibank", owner: "Rockefeller" },
    { name: "JPMorgan Chase", owner: "Morgan" },
    { name: "Bank of America", owner: "Various" },
    { name: "Wells Fargo", owner: "Various" },
  ];

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep04/ep04-federal-reserve.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "subtle" }}
          layer={{ filter: "sepia", opacity: 0.5 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.75} />
      <FilmGrain opacity={0.08} />

      <DocumentaryOverlay
        year="The Truth"
        title="Who Owns the Fed?"
        subtitle="Not the Government"
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
            THE MYTH
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            "The Federal Reserve is a government agency"
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#ef4444",
              lineHeight: 1.8,
              marginTop: 12,
            }}
          >
            ✗ FALSE
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
            border: "2px solid #22c55e",
            borderRadius: 8,
            maxWidth: "42%",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#22c55e",
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
            • Private corporation
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • Stock owned by banks
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            • Profits to shareholders
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#22c55e",
              lineHeight: 1.8,
              marginTop: 12,
            }}
          >
            ✓ TRUE
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: banksOpacity,
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
          MAJOR SHAREHOLDER BANKS
        </div>
        <div
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
          }}
        >
          {shareholdingBanks.map((bank, index) => {
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
                    fontFamily: "Cinzel, serif",
                    fontSize: 14,
                    color: "#ffd700",
                  }}
                >
                  {bank.name}
                </div>
                <div
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 11,
                    color: "#9ca3af",
                    marginTop: 4,
                  }}
                >
                  {bank.owner}
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
          opacity: banksOpacity,
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
          "The name is a masterstroke of deception"
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default WhoOwnsFedDocumentaryScene;
