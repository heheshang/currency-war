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
 * ColonelHouseDocumentaryScene
 *
 * Colonel Edward House - The "Spiritual Godfather" of American elites
 * Features: Portrait imagery, quote animation, historical context
 *
 * Duration: 60 seconds (1800 frames @ 30fps)
 */
export const ColonelHouseDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background Ken Burns - slow pan
  const bgKenBurns = {
    panDirection: "right" as const,
    intensity: "subtle" as const,
  };

  // Title animation
  const titleScale = spring({
    frame,
    fps,
    from: 0.9,
    to: 1,
    config: { damping: 12, stiffness: 100 },
  });

  // Quote typewriter effect
  const quoteProgress = interpolate(frame, [100, 250], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const quoteText =
    '"In Washington, the true rulers are invisible. They exercise power from behind the scenes."';
  const visibleChars = Math.floor(quoteProgress * quoteText.length);

  // Silhouette fade
  const silhouetteOpacity = interpolate(frame, [0, 60], [0, 0.15], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      {/* Background - vintage portrait style */}
      <ImageLayer
        src="/assets/images/ep07/vintage_portrait_man_historical_figure_sepia_1_pexels.jpeg"
        kenBurns={bgKenBurns}
        layer={{ opacity: 1, blendMode: "normal", filter: "sepia" }}
        startFrame={0}
        durationFrames={1800}
      />

      {/* Secondary layer - old paper texture */}
      <ImageLayer
        src="/assets/images/ep07/vintage_portrait_man_historical_figure_sepia_2_pexels.jpeg"
        kenBurns={{ panDirection: "zoom-in", intensity: "subtle" }}
        layer={{ opacity: 0.08, blendMode: "overlay", filter: "none" }}
        startFrame={0}
        durationFrames={1800}
      />

      {/* Silhouette overlay */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 30%, transparent 30%, rgba(0,0,0,${silhouetteOpacity}) 100%)`,
          pointerEvents: "none",
        }}
      />

      {/* Vignette */}
      <Vignette intensity={0.7} color="#000" />

      {/* Film grain */}
      <FilmGrain opacity={0.07} />

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
            transform: `scale(${titleScale})`,
            opacity: interpolate(frame, [0, 30], [0, 1], {
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
                "0 0 25px rgba(236, 201, 75, 0.5), 3px 3px 6px rgba(0,0,0,0.9)",
              letterSpacing: 4,
            }}
          >
            Colonel Edward House
          </div>
        </div>
      </AbsoluteFill>

      {/* Subtitle */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "20%",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [30, 60], [0, 1], {
              extrapolateRight: "clamp",
            }),
            textAlign: "center",
            maxWidth: "70%",
          }}
        >
          <div
            style={{
              fontSize: 22,
              color: "#ECC94B",
              fontFamily: "Merriweather, serif",
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            The "Spiritual Godfather" of American Elites
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              fontStyle: "italic",
            }}
          >
            From a wealthy Texas banking family
          </div>
        </div>
      </AbsoluteFill>

      {/* Quote box */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [80, 120], [0, 1], {
              extrapolateRight: "clamp",
            }),
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderLeft: "4px solid #ECC94B",
            padding: "30px 40px",
            maxWidth: "65%",
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              fontStyle: "italic",
              lineHeight: 1.8,
              textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
            }}
          >
            {quoteText.slice(0, visibleChars)}
            {visibleChars < quoteText.length && (
              <span style={{ opacity: 0.5 }}>|</span>
            )}
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 14,
              color: "#ECC94B",
              fontFamily: "Merriweather, serif",
              textAlign: "right",
              opacity: interpolate(frame, [280, 320], [0, 1], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            — Felix Frankfurter, Supreme Court Justice
          </div>
        </div>
      </AbsoluteFill>

      {/* Decorative elements */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: "12%",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [350, 400], [0, 1], {
              extrapolateRight: "clamp",
            }),
            display: "flex",
            gap: 10,
          }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              style={{
                width: 8,
                height: 12 + i * 6,
                backgroundColor: "#ECC94B",
                opacity: 0.3 + i * 0.15,
              }}
            />
          ))}
        </div>
      </AbsoluteFill>

      {/* Documentary overlay */}
      <DocumentaryOverlay
        year="1913"
        title="Colonel House"
        subtitle="Architect of the Invisible Government"
        frame={frame}
        fadeInDuration={40}
      />
    </AbsoluteFill>
  );
};

export default ColonelHouseDocumentaryScene;
