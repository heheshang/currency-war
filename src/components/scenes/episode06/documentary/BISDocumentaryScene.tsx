import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

/**
 * BISDocumentaryScene - Bank for International Settlements
 * The central bank of central banks - the most powerful financial institution
 */
export const BISDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const functionsOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const secretsOpacity = interpolate(frame, [240, 300], [0, 1], {
    extrapolateRight: "clamp",
  });

  const statsOpacity = interpolate(frame, [330, 390], [0, 1], {
    extrapolateRight: "clamp",
  });

  const functions = [
    { title: "Bank for Central Banks", icon: "🏦" },
    { title: "Gold Settlement Hub", icon: "🥇" },
    { title: "Policy Coordination", icon: "🤝" },
    { title: "Financial Intelligence", icon: "📊" },
  ];

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep06/ep06-bis-documentary.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "dramatic" }}
          layer={{ filter: "sepia", opacity: 0.6 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.85} />
      <FilmGrain opacity={0.1} />

      <DocumentaryOverlay
        year="1930"
        title="Bank for International Settlements"
        subtitle="The Central Bank of Central Banks"
        frame={frame - 30}
        fadeInDuration={45}
      />

      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            padding: "24px 50px",
            background: "rgba(0, 0, 0, 0.9)",
            border: "3px solid #ffd700",
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 48,
              color: "#ffd700",
              fontWeight: 700,
              letterSpacing: 4,
            }}
          >
            BIS
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              marginTop: 8,
            }}
          >
            Basel, Switzerland
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "5%",
          opacity: functionsOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(30, 58, 90, 0.9)",
            border: "2px solid #ffd700",
            borderRadius: 8,
            width: "280px",
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
            CORE FUNCTIONS
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            {functions.map((func, index) => (
              <div
                key={index}
                style={{
                  padding: "12px",
                  background: "rgba(13, 17, 23, 0.7)",
                  borderRadius: 6,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 24 }}>{func.icon}</div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#e8e8e8",
                    marginTop: 6,
                  }}
                >
                  {func.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "5%",
          opacity: secretsOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(139, 0, 0, 0.75)",
            border: "2px solid #ef4444",
            borderRadius: 8,
            width: "300px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ef4444",
              marginBottom: 12,
              letterSpacing: 2,
            }}
          >
            ⚠️ SECRECY
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            <div style={{ marginBottom: 8 }}>• No public accountability</div>
            <div style={{ marginBottom: 8 }}>• Immune from all laws</div>
            <div style={{ marginBottom: 8 }}>• Secret Basel meetings</div>
            <div style={{ marginBottom: 8 }}>• No press allowed</div>
            <div>• Minutes never published</div>
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
            gap: 50,
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
              60+
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              Central Banks
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
              95+
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              Years of Power
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
              Immune
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              From All Laws
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default BISDocumentaryScene;
