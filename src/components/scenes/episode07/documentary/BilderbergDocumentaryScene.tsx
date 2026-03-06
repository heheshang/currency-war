import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

/**
 * BilderbergDocumentaryScene
 *
 * The Bilderberg Group - Secret annual meetings of global elites
 * Features: Private meeting atmosphere, prediction patterns
 *
 * Duration: 60 seconds (1800 frames @ 30fps)
 */
export const BilderbergDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();


  // Background Ken Burns - slow, mysterious
  const bgKenBurns = {
    panDirection: "zoom-in" as const,
    intensity: "subtle" as const,
  };

  // Spotlight effect
  const spotlightX = interpolate(frame, [50, 150, 250], [20, 50, 80], {
    extrapolateRight: "clamp",
  });

  // Curtain reveal
  const curtainOpacity = interpolate(frame, [0, 40], [0.9, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      {/* Background - private meeting atmosphere */}
      <ImageLayer
        src="/assets/images/ep07/secret_meeting_conference_hotel_room_dark_1_pexels.jpeg"
        kenBurns={bgKenBurns}
        layer={{ opacity: 1, blendMode: "normal", filter: "dramatic" }}
        startFrame={0}
        durationFrames={1800}
      />

      {/* Spotlight effect */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at ${spotlightX}% 40%, transparent 20%, rgba(0, 0, 0, 0.85) 100%)`,
          pointerEvents: "none",
        }}
      />

      {/* Curtain reveal effect */}
      <AbsoluteFill
        style={{
          backgroundColor: "#0d1117",
          opacity: curtainOpacity,
          pointerEvents: "none",
        }}
      />

      {/* Vignette */}
      <Vignette intensity={0.75} color="#000" />

      {/* Film grain */}
      <FilmGrain opacity={0.08} />

      {/* Title */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "8%",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [10, 50], [0, 1], {
              extrapolateRight: "clamp",
            }),
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#ECC94B",
              fontFamily: "Cinzel, serif",
              textShadow:
                "0 0 30px rgba(236, 201, 75, 0.6), 3px 3px 6px rgba(0,0,0,0.9)",
              letterSpacing: 4,
            }}
          >
            The Bilderberg Group
          </div>
        </div>
      </AbsoluteFill>

      {/* Founding info */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "20%",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [40, 80], [0, 1], {
              extrapolateRight: "clamp",
            }),
            textAlign: "center",
            maxWidth: "70%",
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              lineHeight: 1.8,
            }}
          >
            Founded{" "}
            <span style={{ color: "#ECC94B", fontWeight: 600 }}>1954</span> —
            Named after hotel in Netherlands
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#718096",
              fontFamily: "Merriweather, serif",
              marginTop: 8,
            }}
          >
            Europe's and America's most powerful figures
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#EF4444",
              fontFamily: "Merriweather, serif",
              fontStyle: "italic",
              marginTop: 12,
            }}
          >
            Meet annually in secret. No press. No records.
          </div>
        </div>
      </AbsoluteFill>

      {/* 1975 prediction */}
      <AbsoluteFill
        style={{
          alignItems: "flex-start",
          justifyContent: "flex-start",
          paddingLeft: "10%",
          paddingTop: "38%",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [80, 120], [0, 1], {
              extrapolateRight: "clamp",
            }),
            maxWidth: "35%",
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#ECC94B",
              fontFamily: "Merriweather, serif",
              marginBottom: 10,
            }}
          >
            1975 Meeting Agenda:
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              lineHeight: 1.8,
              paddingLeft: 12,
              borderLeft: "2px solid #4A90D9",
            }}
          >
            "Western Europe"
            <br />
            "Japan's growing role"
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#4ADE80",
              fontFamily: "Merriweather, serif",
              marginTop: 12,
              opacity: interpolate(frame, [140, 170], [0, 1], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            1976: Thatcher elected
            <br />
            1985: Plaza Accord
          </div>
        </div>
      </AbsoluteFill>

      {/* Arrow */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [120, 150], [0, 1], {
              extrapolateRight: "clamp",
            }),
            fontSize: 28,
            color: "#ECC94B",
          }}
        >
          →
        </div>
      </AbsoluteFill>

      {/* 1986 prediction */}
      <AbsoluteFill
        style={{
          alignItems: "flex-end",
          justifyContent: "flex-start",
          paddingRight: "10%",
          paddingTop: "38%",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [130, 170], [0, 1], {
              extrapolateRight: "clamp",
            }),
            maxWidth: "35%",
            textAlign: "right",
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#ECC94B",
              fontFamily: "Merriweather, serif",
              marginBottom: 10,
            }}
          >
            1986 Meeting Agenda:
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              lineHeight: 1.8,
              paddingRight: 12,
              borderRight: "2px solid #4A90D9",
            }}
          >
            "US-Soviet relations"
            <br />
            "global financial system"
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#EF4444",
              fontFamily: "Merriweather, serif",
              marginTop: 12,
              opacity: interpolate(frame, [190, 220], [0, 1], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            1989: Berlin Wall falls
            <br />
            1991: USSR collapses
          </div>
        </div>
      </AbsoluteFill>

      {/* Pattern recognition */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: "8%",
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
              fontSize: 13,
              color: "#ECC94B",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            Pattern recognition: What they discuss → What happens globally
          </div>
        </div>
      </AbsoluteFill>

      {/* Documentary overlay */}
      <DocumentaryOverlay
        year="1954"
        title="Bilderberg Hotel"
        subtitle="Oosterbeek, Netherlands"
        frame={frame}
        fadeInDuration={40}
      />
    </AbsoluteFill>
  );
};

export default BilderbergDocumentaryScene;
