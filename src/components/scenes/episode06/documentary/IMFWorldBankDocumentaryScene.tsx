import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

/**
 * IMFWorldBankDocumentaryScene - IMF and World Bank control
 * The twin institutions of global financial control
 */
export const IMFWorldBankDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const imfOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const wbOpacity = interpolate(frame, [180, 240], [0, 1], {
    extrapolateRight: "clamp",
  });

  const controlOpacity = interpolate(frame, [270, 330], [0, 1], {
    extrapolateRight: "clamp",
  });

  const statsOpacity = interpolate(frame, [360, 420], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep06/ep06-imf-documentary.jpg"
          kenBurns={{ panDirection: "left", intensity: "moderate" }}
          layer={{ filter: "vintage", opacity: 0.65 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.8} />
      <FilmGrain opacity={0.08} />

      <DocumentaryOverlay
        year="1944"
        title="IMF & World Bank"
        subtitle="The Bretton Woods Twins"
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
            display: "flex",
            gap: 40,
          }}
        >
          <div
            style={{
              padding: "20px 40px",
              background: "rgba(0, 0, 0, 0.85)",
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
              }}
            >
              IMF
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#e8e8e8",
                marginTop: 6,
              }}
            >
              International Monetary Fund
            </div>
          </div>
          <div
            style={{
              padding: "20px 40px",
              background: "rgba(0, 0, 0, 0.85)",
              border: "3px solid #22c55e",
              borderRadius: 8,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 36,
                color: "#22c55e",
                fontWeight: 700,
              }}
            >
              WB
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#e8e8e8",
                marginTop: 6,
              }}
            >
              World Bank
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "5%",
          opacity: imfOpacity,
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
              marginBottom: 12,
              letterSpacing: 2,
            }}
          >
            IMF ROLE
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            <div style={{ marginBottom: 8 }}>
              • Global monetary surveillance
            </div>
            <div style={{ marginBottom: 8 }}>• Emergency loans to nations</div>
            <div style={{ marginBottom: 8 }}>
              • Structural adjustment programs
            </div>
            <div>• Currency stabilization</div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "38%",
          right: "5%",
          opacity: wbOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(30, 58, 90, 0.9)",
            border: "2px solid #22c55e",
            borderRadius: 8,
            width: "280px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#22c55e",
              marginBottom: 12,
              letterSpacing: 2,
            }}
          >
            WORLD BANK ROLE
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            <div style={{ marginBottom: 8 }}>• Development loans</div>
            <div style={{ marginBottom: 8 }}>• Infrastructure projects</div>
            <div style={{ marginBottom: 8 }}>• Poverty reduction programs</div>
            <div>• Technical assistance</div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "28%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: controlOpacity,
        }}
      >
        <div
          style={{
            padding: "20px 40px",
            background: "rgba(139, 0, 0, 0.75)",
            border: "2px solid #ef4444",
            borderRadius: 8,
            textAlign: "center",
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
            ⚠️ THE REAL AGENDA
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            Loans create debt → Debt creates control → Control creates
            dependency
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "12%",
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
                fontSize: 32,
                color: "#ffd700",
                fontWeight: 700,
              }}
            >
              190
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              Member Countries
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
              $1T+
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              Loans Outstanding
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
              US Veto
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              De Facto Control
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default IMFWorldBankDocumentaryScene;
