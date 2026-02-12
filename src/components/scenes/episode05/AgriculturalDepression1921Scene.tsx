import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { CartoonCharacter } from "../../characters/CartoonCharacter";

/**
 * AgriculturalDepression1921Scene - Scene 6: 1921 Agricultural Depression
 *
 * Farm scene with foreclosure notice animation
 * "Shearing" metaphor animation (sheep being sheared)
 * Land ownership concentration chart
 */
export const AgriculturalDepression1921Scene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // Farm fade-in
  const farmOpacity = interpolate(frame, [60, 180], [0, 1], { extrapolateRight: "clamp" });

  // Foreclosure notice fade-in
  const noticeOpacity = interpolate(frame, [120, 270], [0, 1], { extrapolateRight: "clamp" });
  const noticeShake = Math.sin(frame * 0.3) * 2;

  // Sheep fade-in
  const sheepOpacity = interpolate(frame, [240, 390], [0, 1], { extrapolateRight: "clamp" });
  const sheepBounce = Math.sin(frame * 0.05) * 3;

  // Shears animation
  const shearsProgress = interpolate(frame, [450, 630], [0, 1], { extrapolateRight: "clamp" });
  const shearsX = interpolate(frame, [450, 540], [30, 70], { extrapolateRight: "clamp" });

  // Land acquisition chart
  const chartOpacity = interpolate(frame, [570, 720], [0, 1], { extrapolateRight: "clamp" });
  const chartBar = interpolate(frame, [660, 900], [0, 100], { extrapolateRight: "clamp" });

  // Title
  const titleOpacity = interpolate(frame, [60, 150], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #2d1f1f 0%, #0d1117 100%)",
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
            color: "#D2B48C",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          The First Shearing
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
          Agricultural Depression of 1920-1921
        </div>
      </div>

      {/* Farm scene */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "10%",
          opacity: farmOpacity,
        }}
      >
        <svg width="300" height="200" viewBox="0 0 300 200">
          <defs>
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#87ceeb" />
              <stop offset="100%" stopColor="#f0e68c" />
            </linearGradient>
            <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#90EE90" />
              <stop offset="100%" stopColor="#228B22" />
            </linearGradient>
          </defs>

          {/* Sky */}
          <rect width="300" height="120" fill="url(#skyGrad)" opacity="0.3" />

          {/* Ground */}
          <rect y="120" width="300" height="80" fill="url(#groundGrad)" />

          {/* Barn */}
          <rect x="200" y="60" width="80" height="80" fill="#8B4513" opacity="0.8" />
          <rect x="210" y="70" width="15" height="15" fill="#654321" opacity="0.5" />
          <rect x="230" y="70" width="15" height="15" fill="#654321" opacity="0.5" />
          <rect x="210" y="95" width="15" height="15" fill="#654321" opacity="0.5" />
          <rect x="230" y="95" width="15" height="15" fill="#654321" opacity="0.5" />
        </svg>
      </div>

      {/* Foreclosure notice */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "15%",
          opacity: noticeOpacity,
          transform: `translateX(${noticeShake}px)`,
        }}
      >
        <div
          style={{
            padding: "16px 20px",
            background: "#f5f5f4",
            border: "2px solid #8b0000",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            transform: "rotate(-5deg)",
          }}
        >
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 12,
              color: "#dc2626",
              marginBottom: 8,
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            NOTICE OF FORECLOSURE
          </div>
          <div
            style={{
              fontSize: 11,
              color: "#78350f",
              textAlign: "center",
            }}
          >
            Property: Johnson Farm
          </div>
          <div
            style={{
              fontSize: 11,
              color: "#78350f",
              textAlign: "center",
            }}
          >
            Date: March 15, 1921
          </div>
          <div
            style={{
              marginTop: 12,
              padding: "8px",
              background: "rgba(220, 38, 38, 0.1)",
              fontSize: 10,
              color: "#9ca3af",
              textAlign: "center",
            }}
          >
            Bank demands full payment
          </div>
        </div>
      </div>

      {/* Farmer character */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "22%",
          opacity: farmOpacity,
        }}
      >
        <CartoonCharacter
          x={0}
          y={0}
          scale={0.9}
          characterType="victim"
          action="idle"
          facingRight={true}
          frame={frame}
          clothColor="#6B4423"
        />
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            style={{
              fontSize: 14,
              color: "#e8e8e8",
              textAlign: "center",
            }}
          >
            Distraught Farmer
          </div>
        </div>
      </div>

      {/* Shearing animation */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "20%",
          opacity: sheepOpacity,
        }}
      >
        <svg width="200" height="150" viewBox="0 0 200 150">
          {/* Sheep */}
          <g transform={`translate(80, ${60 + sheepBounce})`}>
            <ellipse cx="40" cy="35" rx="30" ry="25" fill="#f5f5f4" stroke="#e5e7eb" strokeWidth="2" />
            <circle cx="55" cy="15" r="12" fill="#1a1a1a" />
            <circle cx="28" cy="18" r="10" fill="#1a1a1a" />
            <ellipse cx="40" cy="50" rx="8" ry="5" fill="#1a1a1a" />
            <ellipse cx="30" cy="48" rx="8" ry="5" fill="#1a1a1a" />
            <ellipse cx="50" cy="48" rx="8" ry="5" fill="#1a1a1a" />
          </g>

          {/* Shears */}
          <g transform={`translate(${shearsX}, 30)`}>
            <ellipse cx="20" cy="40" rx="15" ry="25" fill="#c0c0c0" stroke="#ffd700" strokeWidth="2" />
            <rect x="10" y="25" width="40" height="10" fill="#ffd700" />
            <text x="20" y="60" fontSize="12" fill="#ffd700" textAnchor="middle">
              Shearing
            </text>
            <text x="20" y="75" fontSize="10" fill="#ffd700" textAnchor="middle">
              Farmers
            </text>

            {/* Gold coins (wool) being sheared */}
            {shearsProgress > 0.3 && (
              <>
                <circle cx="130" cy="70" r="10" fill="#ffd700" stroke="#d4af37" strokeWidth="2" opacity={shearsProgress * 0.8} />
                <circle cx="150" cy="80" r="10" fill="#ffd700" stroke="#d4af37" strokeWidth="2" opacity={shearsProgress * 0.6} />
                <circle cx="170" cy="70" r="10" fill="#ffd700" stroke="#d4af37" strokeWidth="2" opacity={shearsProgress * 0.4} />
                <text x="150" y="100" fontSize="12" fill="#ffd700" textAnchor="middle">
                  Shearing
                </text>
                <text x="150" y="115" fontSize="10" fill="#ffd700" textAnchor="middle">
                  Farmers
                </text>
              </>
            )}
          </g>
        </svg>
      </div>

      {/* Land acquisition chart */}
      <div
        style={{
          position: "absolute",
          bottom: "18%",
          right: "8%",
          opacity: chartOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(30, 58, 90, 0.9)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ffd700",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Land Ownership Shift
          </div>

          <svg width="250" height="120" viewBox="0 0 250 120">
            <defs>
              <linearGradient id="barGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>

            {/* Bar chart */}
            <rect x="30" y={90 - chartBar * 0.5} width="35" height={chartBar * 0.5} fill="url(#barGrad)" />
            <rect x="80" y={90 - chartBar * 0.7} width="35" height={chartBar * 0.7} fill="url(#barGrad)" />
            <rect x="130" y={90 - chartBar * 0.9} width="35" height={chartBar * 0.9} fill="url(#barGrad)" />

            {/* Labels */}
            <text x="47" y="110" fontSize="11" fill="#9ca3af" textAnchor="middle">
              1910
            </text>
            <text x="97" y="110" fontSize="11" fill="#9ca3af" textAnchor="middle">
              1920
            </text>
            <text x="147" y="110" fontSize="11" fill="#9ca3af" textAnchor="middle">
              1925
            </text>

            <text x="65" y="30" fontSize="12" fill="#ffd700" textAnchor="middle" fontWeight="600">
              Farmers' Land Share
            </text>
          </svg>

          <div style={{ fontSize: 12, color: "#e8e8e8", marginTop: 12, lineHeight: "1.6" }}>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#ef4444" }}>1920:</span> Farm prices collapse 50%
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#ef4444" }}>1921:</span> 30% of farms face foreclosure
            </div>
            <div style={{ color: "#22c55e", fontWeight: 600 }}>
              Banks acquire millions of acres
            </div>
          </div>
        </div>
      </div>

      {/* Bottom caption */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            marginBottom: 12,
          }}
        >
          "Targeted financial bombing: Farmers driven into bankruptcy."
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#ffd700",
            textAlign: "center",
          }}
        >
          Their land was acquired for pennies on the dollar.
        </div>
      </div>
    </AbsoluteFill>
  );
};
