import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import { ImageLayer, Vignette, FilmGrain } from "../../../documentary";

/**
 * SevenTycoonsDocumentaryScene - The 7 Wall Street Titans
 * Documentary-style scene showing the banking dynasties
 */
export const SevenTycoonsDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const tycoonsOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const tycoons = [
    { name: "J.P. Morgan", empire: "Banking & Railroads" },
    { name: "John D. Rockefeller", empire: "Standard Oil" },
    { name: "Jacob Schiff", empire: "Kuhn, Loeb & Co." },
    { name: "Paul Warburg", empire: "Hamburg Banking" },
    { name: "James Stillman", empire: "National City Bank" },
    { name: "George F. Baker", empire: "First National Bank" },
    { name: "William Rockefeller", empire: "National City Bank" },
  ];

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep04/ep04-wall-street.jpg"
          kenBurns={{ panDirection: "left", intensity: "subtle" }}
          layer={{ filter: "sepia", opacity: 0.6 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.75} />
      <FilmGrain opacity={0.08} />

      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
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
          THE SEVEN TITANS
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 16,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Wall Street Banking Dynasties
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "85%",
          opacity: tycoonsOpacity,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
        >
          {tycoons.map((tycoon, index) => {
            const delay = index * 8;
            const itemOpacity = interpolate(
              frame - 210 - delay,
              [0, 30],
              [0, 1],
              { extrapolateRight: "clamp" },
            );
            const itemScale = spring({
              frame: frame - 210 - delay,
              fps: 30,
              config: { damping: 12, stiffness: 80 },
            });

            return (
              <div
                key={index}
                style={{
                  padding: "16px",
                  background: "rgba(0,0,0,0.85)",
                  border: "2px solid #ffd700",
                  borderRadius: 8,
                  opacity: itemOpacity,
                  transform: `scale(${itemScale})`,
                }}
              >
                <div
                  style={{
                    fontFamily: "Cinzel, serif",
                    fontSize: 14,
                    color: "#ffd700",
                    fontWeight: 600,
                  }}
                >
                  {tycoon.name}
                </div>
                <div
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 11,
                    color: "#9ca3af",
                    marginTop: 6,
                  }}
                >
                  {tycoon.empire}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            padding: "20px 40px",
            background: "rgba(139, 0, 0, 0.7)",
            border: "2px solid #ef4444",
            borderRadius: 8,
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
            "Together, they controlled 1/6 of the world's wealth"
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default SevenTycoonsDocumentaryScene;
