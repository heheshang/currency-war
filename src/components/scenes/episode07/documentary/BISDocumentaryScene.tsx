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
 * BISDocumentaryScene
 *
 * Bank for International Settlements - The "Bankers' Bank"
 * Features: Gold vault imagery, financial statistics, historical secrets
 *
 * Duration: 60 seconds (1800 frames @ 30fps)
 */
export const BISDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();


  // Background Ken Burns
  const bgKenBurns = {
    panDirection: "zoom-in" as const,
    intensity: "dramatic" as const,
  };

  // Gold shimmer effect
  const goldShimmer = interpolate(frame % 150, [0, 150], [0, 1]);

  // Counter animations
  const cashBonds = Math.min(
    40,
    Math.floor(
      interpolate(frame, [150, 220], [0, 40], { extrapolateRight: "clamp" }),
    ),
  );

  const worldGold = Math.min(
    10,
    Math.floor(
      interpolate(frame, [200, 260], [0, 10], { extrapolateRight: "clamp" }),
    ),
  );

  const yearsSecret = Math.min(
    76,
    Math.floor(
      interpolate(frame, [280, 360], [0, 76], { extrapolateRight: "clamp" }),
    ),
  );

  return (
    <AbsoluteFill>
      {/* Background - vault/bank imagery */}
      <ImageLayer
        src="/assets/images/ep07/bank_vault_gold_bars_swiss_bank_secure_1_pexels.jpeg"
        kenBurns={bgKenBurns}
        layer={{ opacity: 1, blendMode: "normal", filter: "dramatic" }}
        startFrame={0}
        durationFrames={1800}
      />

      {/* Gold shimmer overlay */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at ${50 + goldShimmer * 20}% ${30 + goldShimmer * 20}%, rgba(236, 201, 75, 0.15) 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      />

      {/* Vignette */}
      <Vignette intensity={0.7} color="#000" />

      {/* Film grain */}
      <FilmGrain opacity={0.06} />

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
              fontSize: 38,
              fontWeight: 700,
              color: "#ECC94B",
              fontFamily: "Cinzel, serif",
              textShadow:
                "0 0 25px rgba(236, 201, 75, 0.5), 2px 2px 4px rgba(0,0,0,0.9)",
              letterSpacing: 2,
            }}
          >
            Bank for International Settlements
          </div>
        </div>
      </AbsoluteFill>

      {/* Location */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "15%",
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
              fontSize: 20,
              color: "#ECC94B",
              fontFamily: "Merriweather, serif",
              fontWeight: 600,
            }}
          >
            Basel, Switzerland
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              fontStyle: "italic",
              marginTop: 8,
            }}
          >
            "The Bankers' Bank"
          </div>
        </div>
      </AbsoluteFill>

      {/* Gold vault visualization */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [50, 90], [0, 1], {
              extrapolateRight: "clamp",
            }),
            width: 200,
            height: 120,
          }}
        >
          <svg viewBox="0 0 200 120" style={{ width: "100%", height: "100%" }}>
            {/* Vault door circles */}
            <circle
              cx="100"
              cy="60"
              r="50"
              fill="none"
              stroke="#ECC94B"
              strokeWidth={3}
              opacity={0.8}
            />
            <circle
              cx="100"
              cy="60"
              r="40"
              fill="none"
              stroke="#ECC94B"
              strokeWidth={2}
              opacity={0.6}
            />
            <circle
              cx="100"
              cy="60"
              r="30"
              fill="none"
              stroke="#ECC94B"
              strokeWidth={1}
              opacity={0.4}
            />

            {/* Gold bars */}
            <rect
              x="70"
              y="45"
              width="25"
              height="8"
              fill="#ECC94B"
              opacity={0.7}
            />
            <rect
              x="98"
              y="45"
              width="25"
              height="8"
              fill="#ECC94B"
              opacity={0.7}
            />
            <rect
              x="82"
              y="55"
              width="25"
              height="8"
              fill="#ECC94B"
              opacity={0.7}
            />
            <rect
              x="82"
              y="65"
              width="25"
              height="8"
              fill="#ECC94B"
              opacity={0.5}
            />
          </svg>
        </div>
      </AbsoluteFill>

      {/* Financial statistics */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "42%",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [100, 140], [0, 1], {
              extrapolateRight: "clamp",
            }),
            display: "flex",
            gap: 60,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 42,
                fontWeight: 700,
                color: "#ECC94B",
                fontFamily: "JetBrains Mono, monospace",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              ${cashBonds}B
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#CBD5E0",
                fontFamily: "Merriweather, serif",
                marginTop: 6,
              }}
            >
              Cash & Bonds
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 42,
                fontWeight: 700,
                color: "#ECC94B",
                fontFamily: "JetBrains Mono, monospace",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              {worldGold}%
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#CBD5E0",
                fontFamily: "Merriweather, serif",
                marginTop: 6,
              }}
            >
              World Gold
            </div>
          </div>
        </div>
      </AbsoluteFill>

      {/* Secret status warning */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "58%",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [180, 220], [0, 1], {
              extrapolateRight: "clamp",
            }),
            backgroundColor: "rgba(239, 68, 68, 0.15)",
            border: "1px solid #EF4444",
            borderRadius: 8,
            padding: "12px 24px",
            textAlign: "center",
          }}
        >
          <div style={{ color: "#EF4444", fontSize: 14 }}>
            Never published accounts in{" "}
            <span style={{ fontWeight: 700, fontSize: 20 }}>
              {yearsSecret}+
            </span>{" "}
            years
          </div>
        </div>
      </AbsoluteFill>

      {/* Historical note */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: "8%",
        }}
      >
        <div
          style={{
            opacity: interpolate(frame, [300, 340], [0, 1], {
              extrapolateRight: "clamp",
            }),
            textAlign: "center",
            maxWidth: "70%",
          }}
        >
          <div
            style={{
              fontSize: 14,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              lineHeight: 1.6,
            }}
          >
            <span style={{ color: "#718096" }}>During WWII,</span> American &
            British bankers used BIS
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#EF4444",
              fontFamily: "Merriweather, serif",
              fontWeight: 600,
              marginTop: 8,
            }}
          >
            to fund Nazi Germany
          </div>
        </div>
      </AbsoluteFill>

      {/* Documentary overlay */}
      <DocumentaryOverlay
        year="1930"
        title="BIS Headquarters"
        subtitle="The Most Secret Bank in the World"
        frame={frame}
        fadeInDuration={40}
      />
    </AbsoluteFill>
  );
};

export default BISDocumentaryScene;
