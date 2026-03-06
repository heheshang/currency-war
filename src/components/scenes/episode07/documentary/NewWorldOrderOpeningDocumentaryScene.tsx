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
 * NewWorldOrderOpeningDocumentaryScene
 *
 * Opening scene for Episode 07 - The New World Order
 * Dramatic visuals with global conspiracy theme
 *
 * Duration: 60 seconds (1800 frames @ 30fps)
 */
export const NewWorldOrderOpeningDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background image with Ken Burns zoom-in effect
  const bgKenBurns = {
    panDirection: "zoom-in" as const,
    intensity: "dramatic" as const,
  };

  // Title animation
  const titleScale = spring({
    frame,
    fps,
    from: 0.8,
    to: 1,
    config: { damping: 12, stiffness: 100 },
  });

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Warning text blink effect
  const warningBlink = interpolate(
    frame,
    [60, 65, 70, 75, 80, 85, 90],
    [0.3, 1, 0.3, 1, 0.3, 1, 0.8],
    { extrapolateRight: "clamp" },
  );

  // Subtitle fade in
  const subtitleOpacity = interpolate(frame, [40, 70], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      {/* Background layer - dramatic global imagery */}
      <ImageLayer
        src="/assets/images/ep07/digital_earth_global_network_technology_dark_2_pexels.jpeg"
        kenBurns={bgKenBurns}
        layer={{ opacity: 1, blendMode: "normal", filter: "dramatic" }}
        startFrame={0}
        durationFrames={1800}
      />

      {/* Secondary overlay - world map texture */}
      <ImageLayer
        src="/assets/images/ep07/triangle_network_connection_global_links_world_map_3_pexels.jpeg"
        kenBurns={{ panDirection: "right", intensity: "subtle" }}
        layer={{ opacity: 0.15, blendMode: "overlay", filter: "none" }}
        startFrame={0}
        durationFrames={1800}
      />

      {/* Vignette effect */}
      <Vignette intensity={0.7} color="#000" />

      {/* Film grain overlay */}
      <FilmGrain opacity={0.06} />

      {/* Main title */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            transform: `scale(${titleScale})`,
            opacity: titleOpacity,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ECC94B",
              fontFamily: "Cinzel, serif",
              textShadow:
                "0 0 40px rgba(236, 201, 75, 0.6), 3px 3px 6px rgba(0,0,0,0.9)",
              letterSpacing: 8,
              marginBottom: 20,
            }}
          >
            THE NEW WORLD ORDER
          </div>

          {/* Decorative line */}
          <div
            style={{
              width: interpolate(frame, [20, 60], [0, 400]),
              height: 2,
              backgroundColor: "#ECC94B",
              margin: "0 auto",
              opacity: titleOpacity,
            }}
          />
        </div>
      </AbsoluteFill>

      {/* Subtitle with typewriter effect */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: "30%",
        }}
      >
        <div
          style={{
            opacity: subtitleOpacity,
            textAlign: "center",
            maxWidth: "70%",
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              fontStyle: "italic",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              lineHeight: 1.6,
            }}
          >
            A massive plan has been underway for decades...
          </div>
        </div>
      </AbsoluteFill>

      {/* Warning text */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: "18%",
        }}
      >
        <div
          style={{
            opacity: warningBlink,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#EF4444",
              fontFamily: "Merriweather, serif",
              textShadow:
                "0 0 20px rgba(239, 68, 68, 0.8), 2px 2px 4px rgba(0,0,0,0.9)",
            }}
          >
            And China knows very little about it.
          </div>
        </div>
      </AbsoluteFill>

      {/* Documentary overlay with source */}
      <DocumentaryOverlay
        title="Episode 7"
        subtitle="The Elite Clubs That Rule the World"
        frame={frame}
        fadeInDuration={45}
      />
    </AbsoluteFill>
  );
};

export default NewWorldOrderOpeningDocumentaryScene;
