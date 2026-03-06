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
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

/**
 * BrettonWoodsDocumentaryScene
 *
 * The 1944 Bretton Woods Conference - establishing the post-war economic order
 * Features: Conference imagery, timeline animation, key statistics
 *
 * Duration: 60 seconds (1800 frames @ 30fps)
 */
export const BrettonWoodsDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background Ken Burns
  const bgKenBurns = {
    panDirection: "left" as const,
    intensity: "moderate" as const,
  };

  // Year display animation
  const yearScale = spring({
    frame,
    fps,
    from: 0.5,
    to: 1,
    config: { damping: 10, stiffness: 80 },
  });

  // Timeline nodes
  const timelineNodes = [
    { year: "1944", label: "Conference", active: frame > 60 },
    { year: "1945", label: "IMF Created", active: frame > 120 },
    { year: "1946", label: "World Bank", active: frame > 180 },
    { year: "1947", label: "System Active", active: frame > 240 },
  ];

  // Counter animation for statistics
  const countriesCount = Math.min(
    44,
    Math.floor(
      interpolate(frame, [150, 220], [0, 44], { extrapolateRight: "clamp" }),
    ),
  );

  const imfMembers = Math.min(
    190,
    Math.floor(
      interpolate(frame, [200, 280], [0, 190], { extrapolateRight: "clamp" }),
    ),
  );

  return (
    <AbsoluteFill>
      {/* Background - historic conference imagery */}
      <ImageLayer
        src="/assets/images/ep07/ep07-bretton-woods.jpg"
        kenBurns={bgKenBurns}
        layer={{ opacity: 1, blendMode: "normal", filter: "vintage" }}
        startFrame={0}
        durationFrames={1800}
      />

      {/* Secondary layer - documents/papers texture */}
      <ImageLayer
        src="/assets/images/ep07/ep07-war-bonds.jpg"
        kenBurns={{ panDirection: "zoom-in", intensity: "subtle" }}
        layer={{ opacity: 0.1, blendMode: "overlay", filter: "grayscale" }}
        startFrame={0}
        durationFrames={1800}
      />

      {/* Vignette */}
      <Vignette intensity={0.65} color="#000" />

      {/* Film grain */}
      <FilmGrain opacity={0.05} />

      {/* Year display */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "8%",
        }}
      >
        <div
          style={{
            transform: `scale(${yearScale})`,
            opacity: interpolate(frame, [0, 30], [0, 1], {
              extrapolateRight: "clamp",
            }),
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#ECC94B",
              fontFamily: "Cinzel, serif",
              textShadow:
                "0 0 30px rgba(236, 201, 75, 0.5), 3px 3px 6px rgba(0,0,0,0.9)",
              letterSpacing: 12,
            }}
          >
            JULY 1944
          </div>
        </div>
      </AbsoluteFill>

      {/* Title */}
      <CinematicText
        text="Bretton Woods Conference"
        fontSize={42}
        color="#fff"
        frame={frame - 30}
        fadeInDuration={40}
        position="top"
      />

      {/* Subtitle */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "28%",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [50, 80], [0, 1], {
              extrapolateRight: "clamp",
            }),
            textAlign: "center",
            maxWidth: "70%",
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              lineHeight: 1.6,
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            44 nations gathered to design the post-war economic order
          </div>
        </div>
      </AbsoluteFill>

      {/* Timeline */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "15%",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [80, 120], [0, 1], {
              extrapolateRight: "clamp",
            }),
            display: "flex",
            alignItems: "center",
            gap: 60,
          }}
        >
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              width: "60%",
              height: 2,
              backgroundColor: "rgba(236, 201, 75, 0.3)",
            }}
          />

          {timelineNodes.map((node, index) => {
            const nodeOpacity = interpolate(
              frame,
              [100 + index * 30, 130 + index * 30],
              [0, 1],
              { extrapolateRight: "clamp" },
            );

            return (
              <div
                key={node.year}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  opacity: nodeOpacity,
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundColor: node.active ? "#ECC94B" : "#4A5568",
                    border: "2px solid #ECC94B",
                    boxShadow: node.active
                      ? "0 0 15px rgba(236, 201, 75, 0.6)"
                      : "none",
                  }}
                />
                <div
                  style={{
                    marginTop: 12,
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#ECC94B",
                    fontFamily: "Cinzel, serif",
                  }}
                >
                  {node.year}
                </div>
                <div
                  style={{
                    marginTop: 4,
                    fontSize: 12,
                    color: "#CBD5E0",
                    fontFamily: "Merriweather, serif",
                  }}
                >
                  {node.label}
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>

      {/* Statistics */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: "25%",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [140, 180], [0, 1], {
              extrapolateRight: "clamp",
            }),
            display: "flex",
            gap: 80,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: "#ECC94B",
                fontFamily: "JetBrains Mono, monospace",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              {countriesCount}+
            </div>
            <div
              style={{
                fontSize: 14,
                color: "#CBD5E0",
                fontFamily: "Merriweather, serif",
                marginTop: 8,
              }}
            >
              Countries
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: "#ECC94B",
                fontFamily: "JetBrains Mono, monospace",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              {imfMembers}
            </div>
            <div
              style={{
                fontSize: 14,
                color: "#CBD5E0",
                fontFamily: "Merriweather, serif",
                marginTop: 8,
              }}
            >
              IMF Members Today
            </div>
          </div>
        </div>
      </AbsoluteFill>

      {/* Key outcome */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: "10%",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [250, 290], [0, 1], {
              extrapolateRight: "clamp",
            }),
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontStyle: "italic",
              color: "#ECC94B",
              fontFamily: "Merriweather, serif",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            The Dollar became the world's reserve currency
          </div>
        </div>
      </AbsoluteFill>

      {/* Documentary overlay */}
      <DocumentaryOverlay
        year="1944"
        title="Bretton Woods, New Hampshire"
        subtitle="The Birth of the Modern Financial System"
        frame={frame}
        fadeInDuration={40}
      />
    </AbsoluteFill>
  );
};

export default BrettonWoodsDocumentaryScene;
