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
 * CFRDocumentaryScene
 *
 * Council on Foreign Relations - The "Central Party School" of American Elites
 * Features: Network visualization, influence statistics, media control
 *
 * Duration: 60 seconds (1800 frames @ 30fps)
 */
export const CFRDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background Ken Burns
  const bgKenBurns = {
    panDirection: "zoom-in" as const,
    intensity: "moderate" as const,
  };

  // Network nodes data
  const networkNodes = [
    { x: 20, y: 25, label: "Presidents", color: "#ECC94B" },
    { x: 80, y: 25, label: "Secretaries", color: "#4A90D9" },
    { x: 50, y: 50, label: "CFR", color: "#ECC94B", isCenter: true },
    { x: 25, y: 75, label: "Media", color: "#4A90D9" },
    { x: 75, y: 75, label: "Military", color: "#4A90D9" },
  ];

  // Data bars
  const dataBars = [
    { label: "US Presidents (since WWII)", value: 13, max: 15 },
    { label: "Secretaries of State", value: 14, max: 15 },
    { label: "Defense Secretaries", value: 11, max: 15 },
    { label: "CIA Directors", value: 9, max: 15 },
  ];

  // Media outlets
  const mediaOutlets = [
    "CBS",
    "ABC",
    "NBC",
    "NYT",
    "Washington Post",
    "Time",
    "Newsweek",
  ];

  return (
    <AbsoluteFill>
      {/* Background - institutional imagery */}
      <ImageLayer
        src="/assets/images/ep07/government_building_power_institution_washington_1_pexels.jpeg"
        kenBurns={bgKenBurns}
        layer={{ opacity: 1, blendMode: "normal", filter: "dramatic" }}
        startFrame={0}
        durationFrames={1800}
      />

      {/* Grid overlay */}
      <AbsoluteFill
        style={{
          backgroundImage: `
            linear-gradient(rgba(236, 201, 75, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 201, 75, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          opacity: interpolate(frame, [0, 40], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      />

      {/* Vignette */}
      <Vignette intensity={0.6} color="#000" />

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
              fontSize: 42,
              fontWeight: 700,
              color: "#ECC94B",
              fontFamily: "Cinzel, serif",
              textShadow:
                "0 0 20px rgba(236, 201, 75, 0.5), 2px 2px 4px rgba(0,0,0,0.9)",
              letterSpacing: 3,
            }}
          >
            Council on Foreign Relations
          </div>
        </div>
      </AbsoluteFill>

      {/* Subtitle */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "14%",
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
              fontSize: 22,
              fontWeight: 600,
              color: "#EF4444",
              fontFamily: "Merriweather, serif",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            The "Central Party School" of American Elites
          </div>
        </div>
      </AbsoluteFill>

      {/* Network visualization */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "22%",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "80%",
            height: 150,
            opacity: interpolate(frame, [40, 80], [0, 1], {
              extrapolateRight: "clamp",
            }),
          }}
        >
          {/* Connection lines */}
          <svg
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          >
            {networkNodes.slice(0, -1).map((node, i) => {
              const nextNode = networkNodes[i + 1];
              const lineProgress = interpolate(
                frame,
                [60 + i * 20, 90 + i * 20],
                [0, 1],
                { extrapolateRight: "clamp" },
              );

              return (
                <line
                  key={i}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${node.x + (nextNode.x - node.x) * lineProgress}%`}
                  y2={`${node.y + (nextNode.y - node.y) * lineProgress}%`}
                  stroke="#ECC94B"
                  strokeWidth={2}
                  strokeDasharray="5,5"
                  opacity={0.4}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {networkNodes.map((node, i) => {
            const nodeScale = spring({
              frame: frame - 50 - i * 10,
              fps,
              from: 0,
              to: 1,
              config: { damping: 10, stiffness: 100 },
            });

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: node.isCenter ? 20 : 14,
                    height: node.isCenter ? 20 : 14,
                    borderRadius: "50%",
                    backgroundColor: node.color,
                    border: "2px solid #ECC94B",
                    transform: `scale(${nodeScale})`,
                    boxShadow: node.isCenter
                      ? "0 0 20px rgba(236, 201, 75, 0.6)"
                      : "none",
                    margin: "0 auto",
                  }}
                />
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 11,
                    color: "#CBD5E0",
                    fontFamily: "Merriweather, serif",
                    opacity: nodeScale,
                  }}
                >
                  {node.label}
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>

      {/* Data bars */}
      <AbsoluteFill
        style={{
          alignItems: "flex-start",
          justifyContent: "flex-start",
          paddingTop: "42%",
          paddingLeft: "15%",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [100, 140], [0, 1], {
              extrapolateRight: "clamp",
            }),
            width: "70%",
          }}
        >
          {dataBars.map((bar, i) => {
            const barWidth = interpolate(
              frame,
              [120 + i * 15, 160 + i * 15],
              [0, (bar.value / bar.max) * 100],
              { extrapolateRight: "clamp" },
            );

            return (
              <div key={bar.label} style={{ marginBottom: 12 }}>
                <div
                  style={{
                    fontSize: 12,
                    color: "#CBD5E0",
                    fontFamily: "Merriweather, serif",
                    marginBottom: 4,
                  }}
                >
                  {bar.label}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: `${barWidth}%`,
                      height: 14,
                      backgroundColor: "#ECC94B",
                      borderRadius: 2,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 12,
                      color: "#ECC94B",
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    {bar.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>

      {/* Media control */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: "8%",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [200, 240], [0, 1], {
              extrapolateRight: "clamp",
            }),
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: "#718096",
              fontFamily: "Merriweather, serif",
              marginBottom: 10,
            }}
          >
            They control major media:
          </div>
          <div
            style={{
              display: "flex",
              gap: 15,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {mediaOutlets.map((media, i) => (
              <span
                key={media}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#CBD5E0",
                  fontFamily: "Merriweather, serif",
                  opacity: interpolate(
                    frame,
                    [220 + i * 5, 240 + i * 5],
                    [0, 1],
                    { extrapolateRight: "clamp" },
                  ),
                }}
              >
                {media}
              </span>
            ))}
          </div>
        </div>
      </AbsoluteFill>

      {/* Documentary overlay */}
      <DocumentaryOverlay
        year="1921"
        title="Council on Foreign Relations"
        subtitle="New York City"
        frame={frame}
        fadeInDuration={40}
      />
    </AbsoluteFill>
  );
};

export default CFRDocumentaryScene;
