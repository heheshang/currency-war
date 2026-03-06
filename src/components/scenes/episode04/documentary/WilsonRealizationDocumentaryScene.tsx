import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import { ImageLayer, Vignette, FilmGrain } from "../../../documentary";

/**
 * WilsonRealizationDocumentaryScene - Wilson's Realization
 * Documentary-style scene about Wilson's regret over the Federal Reserve
 */
export const WilsonRealizationDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const quoteOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const regretOpacity = interpolate(frame, [150, 210], [0, 1], {
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
          src="/assets/images/ep04/ep04-wilson-portrait.jpg"
          kenBurns={{ panDirection: "left", intensity: "subtle" }}
          layer={{ filter: "sepia", opacity: 0.5 }}
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
          transform: `translateX(-50%) scale(${titleScale})`,
          opacity: bgOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 42,
            color: "#ef4444",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          THE REGRET
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
          Woodrow Wilson, 1919
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "10%",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            padding: "30px",
            background: "rgba(0,0,0,0.85)",
            borderLeft: "4px solid #ef4444",
            maxWidth: "45%",
          }}
        >
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 18,
              color: "#e8e8e8",
              lineHeight: 1.8,
              fontStyle: "italic",
            }}
          >
            "I am a most unhappy man. I have unwittingly ruined my country. A
            great industrial nation is controlled by its system of credit."
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
            — Woodrow Wilson, 1919
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "55%",
          right: "8%",
          width: "40%",
          opacity: regretOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "rgba(139, 0, 0, 0.6)",
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
            HIS CONFESSION
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            "No longer a government by free opinion, but a government by the
            opinion and duress of a small group of dominant men."
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: regretOpacity,
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
                fontSize: 32,
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
              Signed Fed Act
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 32,
                color: "#ef4444",
                fontWeight: 700,
              }}
            >
              1919
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 4,
              }}
            >
              Expressed Regret
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 32,
                color: "#22c55e",
                fontWeight: 700,
              }}
            >
              6 Years
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 4,
              }}
            >
              To Realize Mistake
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default WilsonRealizationDocumentaryScene;
