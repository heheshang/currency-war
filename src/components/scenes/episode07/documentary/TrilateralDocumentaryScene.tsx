import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

/**
 * TrilateralDocumentaryScene
 *
 * The Trilateral Commission - Connecting North America, Europe, and Japan
 * Features: Triangular network visualization, Carter case study
 *
 * Duration: 60 seconds (1800 frames @ 30fps)
 */
export const TrilateralDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background Ken Burns
  const bgKenBurns = {
    panDirection: "zoom-in" as const,
    intensity: "moderate" as const,
  };

  // Network expansion animation
  const networkScale = spring({
    frame,
    fps,
    from: 0.3,
    to: 1,
    config: { damping: 12, stiffness: 60 },
  });

  // Carter appointments counter
  const carterAppointments = Math.min(
    14,
    Math.floor(
      interpolate(frame, [200, 280], [0, 14], { extrapolateRight: "clamp" }),
    ),
  );

  // Final thought pulse
  const thoughtPulse = interpolate(frame, [350, 370, 390], [1, 1.08, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      {/* Background - global network imagery */}
      <ImageLayer
        src="/assets/images/ep07/triangle_network_connection_global_links_world_map_1_pexels.jpeg"
        kenBurns={bgKenBurns}
        layer={{ opacity: 1, blendMode: "normal", filter: "dramatic" }}
        startFrame={0}
        durationFrames={1800}
      />

      {/* Expanding network circles */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 400 * networkScale,
            height: 400 * networkScale,
            borderRadius: "50%",
            border: "1px solid rgba(236, 201, 75, 0.2)",
            position: "absolute",
          }}
        />
        <div
          style={{
            width: 280 * networkScale,
            height: 280 * networkScale,
            borderRadius: "50%",
            border: "1px solid rgba(236, 201, 75, 0.3)",
            position: "absolute",
          }}
        />
      </AbsoluteFill>

      {/* Vignette */}
      <Vignette intensity={0.65} color="#000" />

      {/* Film grain */}
      <FilmGrain opacity={0.05} />

      {/* Title */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "5%",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [0, 30], [0, 1], {
              extrapolateRight: "clamp",
            }),
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: "#ECC94B",
              fontFamily: "Cinzel, serif",
              textShadow:
                "0 0 25px rgba(236, 201, 75, 0.5), 2px 2px 4px rgba(0,0,0,0.9)",
              letterSpacing: 3,
            }}
          >
            The Trilateral Commission
          </div>
        </div>
      </AbsoluteFill>

      {/* Founding info */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "16%",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [20, 50], [0, 1], {
              extrapolateRight: "clamp",
            }),
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
            }}
          >
            Founded{" "}
            <span style={{ color: "#ECC94B", fontWeight: 600 }}>1973</span>
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#718096",
              fontFamily: "Merriweather, serif",
              marginTop: 8,
            }}
          >
            By banker{" "}
            <span style={{ color: "#4A90D9" }}>David Rockefeller</span> &{" "}
            <span style={{ color: "#4A90D9" }}>Zbigniew Brzezinski</span>
          </div>
        </div>
      </AbsoluteFill>

      {/* Triangular network nodes */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "50%",
            height: 140,
            opacity: interpolate(frame, [50, 90], [0, 1], {
              extrapolateRight: "clamp",
            }),
          }}
        >
          {/* North America */}
          <div
            style={{
              position: "absolute",
              left: "0%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                backgroundColor: "#ECC94B",
                boxShadow: "0 0 20px rgba(236, 201, 75, 0.6)",
                margin: "0 auto 8px",
              }}
            />
            <div
              style={{
                fontSize: 12,
                color: "#CBD5E0",
                fontFamily: "Merriweather, serif",
              }}
            >
              North America
            </div>
          </div>

          {/* Europe */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "0%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                backgroundColor: "#4A90D9",
                boxShadow: "0 0 20px rgba(74, 144, 217, 0.6)",
                margin: "0 auto 8px",
              }}
            />
            <div
              style={{
                fontSize: 12,
                color: "#CBD5E0",
                fontFamily: "Merriweather, serif",
              }}
            >
              Europe
            </div>
          </div>

          {/* Asia */}
          <div
            style={{
              position: "absolute",
              left: "100%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                backgroundColor: "#EF4444",
                boxShadow: "0 0 20px rgba(239, 68, 68, 0.6)",
                margin: "0 auto 8px",
              }}
            />
            <div
              style={{
                fontSize: 12,
                color: "#CBD5E0",
                fontFamily: "Merriweather, serif",
              }}
            >
              Asia
            </div>
          </div>

          {/* Center node */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                backgroundColor: "#ECC94B",
                boxShadow: "0 0 25px rgba(236, 201, 75, 0.8)",
              }}
            />
          </div>
        </div>
      </AbsoluteFill>

      {/* Carter case study */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "42%",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [120, 160], [0, 1], {
              extrapolateRight: "clamp",
            }),
            backgroundColor: "rgba(236, 201, 75, 0.08)",
            border: "1px solid rgba(236, 201, 75, 0.25)",
            borderRadius: 8,
            padding: "18px 30px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: "#718096",
              fontFamily: "Merriweather, serif",
              marginBottom: 10,
            }}
          >
            Case Study: Jimmy Carter
          </div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "#EF4444",
              fontFamily: "Merriweather, serif",
            }}
          >
            Vetted by Trilateral Commission
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              marginTop: 10,
            }}
          >
            He appointed{" "}
            <span style={{ color: "#ECC94B", fontWeight: 700, fontSize: 18 }}>
              {carterAppointments}
            </span>{" "}
            members to key positions
          </div>
        </div>
      </AbsoluteFill>

      {/* Final thought */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: "10%",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [300, 340], [0, 1], {
              extrapolateRight: "clamp",
            }),
            transform: `scale(${thoughtPulse})`,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#ECC94B",
              fontFamily: "Cinzel, serif",
              textShadow:
                "0 0 20px rgba(236, 201, 75, 0.5), 2px 2px 4px rgba(0,0,0,0.9)",
              marginBottom: 12,
            }}
          >
            Who really rules the world?
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              fontStyle: "italic",
            }}
          >
            The answer lies in understanding these elite networks
          </div>
        </div>
      </AbsoluteFill>

      {/* Documentary overlay */}
      <DocumentaryOverlay
        year="1973"
        title="Trilateral Commission"
        subtitle="Connecting Three Regions, One Vision"
        frame={frame}
        fadeInDuration={40}
      />
    </AbsoluteFill>
  );
};

export default TrilateralDocumentaryScene;
