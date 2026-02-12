import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * RealPlotScene - Scene 13: The Real Plot Revealed
 *
 * Fed action flowchart (engineered depression)
 * Money supply collapse chart
 * Hidden agenda reveal flash
 */
export const RealPlotScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Flowchart fade-in
  const flowchartOpacity = interpolate(frame, [60, 180], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Flow line animation
  const flowProgress = interpolate(frame, [180, 720], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Money supply chart
  const moneySupplyDrop = interpolate(frame, [300, 540], [0, 100], {
    extrapolateRight: "clamp",
  });

  // Reveal flash
  const revealOpacity = interpolate(frame, [600, 750], [0, 1], {
    extrapolateRight: "clamp",
  });
  const revealFlash = Math.sin(frame * 0.1) > 0.5 ? 1 : 0.3;

  // Title
  const titleOpacity = interpolate(frame, [60, 150], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at center, #1a0d0d 0%, #0d1117 100%)",
      }}
    >
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 36,
            color: "#ffd700",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          The Real Plot Revealed
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Crisis by Design, Not by Accident
        </div>
      </div>

      {/* Flowchart */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: flowchartOpacity,
        }}
      >
        <svg width="500" height="200" viewBox="0 0 500 200">
          <defs>
            <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#8b0000" />
            </linearGradient>
          </defs>

          {/* Flow steps */}
          {/* Step 1: Create bubble */}
          <g opacity={flowchartOpacity > 0.1 ? 1 : 0.3}>
            <rect
              x="30"
              y="30"
              width="100"
              height="50"
              rx="8"
              fill="url(#flowGrad)"
              opacity="0.9"
            />
            <text
              x="80"
              y="55"
              fontSize="12"
              fill="#fff"
              textAnchor="middle"
              fontWeight="600"
            >
              CREATE BUBBLE
            </text>
            <text
              x="80"
              y="72"
              fontSize="10"
              fill="#ffd700"
              textAnchor="middle"
            >
              Easy money, low rates
            </text>
          </g>

          {/* Arrow 1 */}
          <path
            d="M 130,55 L 180,55"
            fill="none"
            stroke="#ffd700"
            strokeWidth="2"
            strokeDasharray="4,4"
            opacity="0.8"
          />

          {/* Step 2: Wait for peak */}
          <g opacity={flowchartOpacity > 0.3 ? 1 : 0.3}>
            <rect
              x="180"
              y="30"
              width="100"
              height="50"
              rx="8"
              fill="url(#flowGrad)"
              opacity="0.9"
            />
            <text
              x="230"
              y="55"
              fontSize="12"
              fill="#fff"
              textAnchor="middle"
              fontWeight="600"
            >
              WAIT FOR PEAK
            </text>
            <text
              x="230"
              y="72"
              fontSize="10"
              fill="#ffd700"
              textAnchor="middle"
            >
              Maximal speculation
            </text>
          </g>

          {/* Arrow 2 */}
          <path
            d="M 280,55 L 330,55"
            fill="none"
            stroke="#ffd700"
            strokeWidth="2"
            strokeDasharray="4,4"
            opacity="0.8"
          />

          {/* Step 3: Tighten credit */}
          <g opacity={flowchartOpacity > 0.5 ? 1 : 0.3}>
            <rect
              x="330"
              y="30"
              width="100"
              height="50"
              rx="8"
              fill="url(#flowGrad)"
              opacity="0.9"
            />
            <text
              x="380"
              y="55"
              fontSize="12"
              fill="#fff"
              textAnchor="middle"
              fontWeight="600"
            >
              TIGHTEN CREDIT
            </text>
            <text
              x="380"
              y="72"
              fontSize="10"
              fill="#ffd700"
              textAnchor="middle"
            >
              Pop the bubble
            </text>
          </g>

          {/* Arrow 3 */}
          <path
            d="M 430,55 L 480,30"
            fill="none"
            stroke="#ffd700"
            strokeWidth="2"
            strokeDasharray="4,4"
            opacity="0.8"
          />

          {/* Step 4: Buy assets */}
          <g opacity={flowchartOpacity > 0.7 ? 1 : 0.3}>
            <rect
              x="430"
              y="100"
              width="100"
              height="50"
              rx="8"
              fill="#22c55e"
              opacity="0.9"
            />
            <text
              x="480"
              y="125"
              fontSize="12"
              fill="#fff"
              textAnchor="middle"
              fontWeight="600"
            >
              BUY ASSETS
            </text>
            <text
              x="480"
              y="142"
              fontSize="10"
              fill="#ffd700"
              textAnchor="middle"
            >
              Pennies on the dollar
            </text>
          </g>

          {/* Progress indicator circle */}
          <circle
            cx={30 + flowProgress * 150}
            cy="55"
            r="10"
            fill="none"
            stroke="#ffd700"
            strokeWidth="3"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Money supply chart */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "15%",
          opacity: flowchartOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(30, 58, 90, 0.9)",
            border: "2px solid #ef4444",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ef4444",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Money Supply Collapsed
          </div>

          <svg width="250" height="120" viewBox="0 0 250 120">
            <defs>
              <linearGradient id="moneyGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>

            {/* Axis */}
            <line
              x1="40"
              y1="100"
              x2="220"
              y2="100"
              stroke="#4b5563"
              strokeWidth="1"
            />

            {/* Money supply curve */}
            <path
              d="M 40,100 Q 80,90 130,70 220,30"
              fill="none"
              stroke="url(#moneyGrad)"
              strokeWidth="4"
            />

            {/* Current value indicator */}
            <circle
              cx={40 + moneySupplyDrop * 1.8}
              cy={100 - moneySupplyDrop}
              r="8"
              fill="#ef4444"
              opacity="0.8"
            />

            {/* Labels */}
            <text
              x="40"
              y="115"
              fontSize="11"
              fill="#9ca3af"
              textAnchor="middle"
            >
              1929
            </text>
            <text
              x="130"
              y="85"
              fontSize="11"
              fill="#22c55e"
              textAnchor="middle"
            >
              Before
            </text>
            <text
              x="220"
              y="50"
              fontSize="11"
              fill="#ef4444"
              textAnchor="middle"
            >
              After
            </text>
            <text
              x="130"
              y="115"
              fontSize="11"
              fill="#ef4444"
              textAnchor="middle"
            >
              1933
            </text>
            <text
              x="130"
              y="30"
              fontSize="12"
              fill="#ffd700"
              textAnchor="middle"
              fontWeight="600"
            >
              -33% Drop
            </text>
          </svg>
        </div>
      </div>

      {/* Reveal text */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: revealOpacity,
        }}
      >
        <div
          style={{
            padding: "24px 32px",
            background: `rgba(255, 215, 0, ${revealFlash * 0.15})`,
            border: "3px solid #ffd700",
            borderRadius: "8px",
            boxShadow: `0 0 ${30 + revealFlash * 20}px rgba(255, 215, 0, ${revealFlash * 0.5})`,
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 24,
              color: "#ffd700",
              marginBottom: 12,
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            THE TRUTH REVEALED
          </div>
          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.6" }}>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#ef4444" }}>
                The crisis was deliberate.
              </span>
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#ef4444" }}>
                Economic devastation serves
              </span>
            </div>
            <div style={{ color: "#22c55e", fontWeight: 600 }}>
              banking elite
            </div>
          </div>
        </div>
      </div>

      {/* Bottom quote */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: revealOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 20,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            marginBottom: 12,
          }}
        >
          "The crisis was deliberately engineered."
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#ffd700",
            textAlign: "center",
          }}
        >
          Understanding is our first defense.
        </div>
      </div>
    </AbsoluteFill>
  );
};
