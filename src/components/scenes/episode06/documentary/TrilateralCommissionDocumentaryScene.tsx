import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

/**
 * TrilateralCommissionDocumentaryScene - Trilateral Commission
 * David Rockefeller's vision for trilateral global governance
 */
export const TrilateralCommissionDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const founderOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const regionsOpacity = interpolate(frame, [240, 300], [0, 1], {
    extrapolateRight: "clamp",
  });

  const influenceOpacity = interpolate(frame, [330, 390], [0, 1], {
    extrapolateRight: "clamp",
  });

  const statsOpacity = interpolate(frame, [420, 480], [0, 1], {
    extrapolateRight: "clamp",
  });

  const regions = [
    { name: "North America", members: "US, Canada, Mexico", color: "#22c55e" },
    { name: "Europe", members: "EU Nations", color: "#ffd700" },
    {
      name: "Asia-Pacific",
      members: "Japan, Korea, Australia",
      color: "#ef4444",
    },
  ];

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep06/ep06-trilateral-global.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "moderate" }}
          layer={{ filter: "vintage", opacity: 0.65 }}
          startFrame={0}
          durationFrames={900}
        />
      </div>

      <Vignette intensity={0.8} />
      <FilmGrain opacity={0.08} />

      <DocumentaryOverlay
        year="1973"
        title="Trilateral Commission"
        subtitle="David Rockefeller's Global Vision"
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
              fontSize: 38,
              color: "#ffd700",
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            TRILATERAL COMMISSION
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 14,
              color: "#e8e8e8",
              marginTop: 8,
            }}
          >
            Three Regions, One Vision
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "36%",
          left: "5%",
          opacity: founderOpacity,
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
            FOUNDER
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#e8e8e8",
              fontWeight: 600,
              marginBottom: 8,
            }}
          >
            David Rockefeller
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#9ca3af",
              lineHeight: 1.7,
            }}
          >
            "We are on the verge of a global transformation. All we need is the
            right major crisis."
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "36%",
          right: "5%",
          opacity: regionsOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(0, 0, 0, 0.85)",
            border: "2px solid #ffd700",
            borderRadius: 8,
            width: "300px",
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
            THE THREE REGIONS
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {regions.map((region, index) => (
              <div
                key={index}
                style={{
                  padding: "12px",
                  background: "rgba(30, 58, 90, 0.7)",
                  borderRadius: 6,
                  borderLeft: `4px solid ${region.color}`,
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    color: "#e8e8e8",
                    fontWeight: 600,
                  }}
                >
                  {region.name}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#9ca3af",
                    marginTop: 4,
                  }}
                >
                  {region.members}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: influenceOpacity,
        }}
      >
        <div
          style={{
            padding: "20px 40px",
            background: "rgba(139, 0, 0, 0.7)",
            border: "2px solid #ef4444",
            borderRadius: 8,
            textAlign: "center",
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
            POLITICAL INFLUENCE
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#e8e8e8",
              lineHeight: 1.8,
            }}
          >
            Jimmy Carter's entire cabinet were Trilateral members
            <br />
            Every administration since has included members
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "10%",
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
              400+
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              Elite Members
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
              50+
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              Years Active
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
              3
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              Global Regions
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default TrilateralCommissionDocumentaryScene;
