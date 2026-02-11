/**
 * WealthCounter.tsx
 *
 * Animated wealth number counter component
 * Features rolling number animation, currency formatting, and comparison display
 * Designed for dramatic wealth visualization in documentary style
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

export interface WealthCounterProps {
  startValue: number; // Starting wealth value
  endValue: number; // Final wealth value
  currency?: string; // Currency symbol ($, €, £, etc.)
  suffix?: string; // Suffix (trillion, billion, etc.)
  label?: string; // Label text
  comparisonLabel?: string; // Comparison text (e.g., "vs Bill Gates")
  comparisonValue?: number; // Value for comparison bar
  fontSize?: number;
  fontScale?: number;
  textColor?: string;
  accentColor?: string;
  backgroundColor?: string;
  animationStartFrame?: number;
  animationDuration?: number;
  showComparisonBar?: boolean;
  formatAsHumanReadable?: boolean; // Use "30 Trillion" instead of "30000000000000"
  layout?: "center" | "left" | "right";
  pulseOnComplete?: boolean;
}

// Format large numbers in human-readable format
const formatNumber = (
  num: number,
  formatAsHumanReadable: boolean,
  currency: string
): string => {
  if (formatAsHumanReadable) {
    const trillions = num / 1e12;
    const billions = num / 1e9;
    const millions = num / 1e6;

    if (trillions >= 1) {
      return `${currency}${trillions.toFixed(trillions < 10 ? 1 : 0)}万亿`;
    }
    if (billions >= 1) {
      return `${currency}${billions.toFixed(billions < 10 ? 1 : 0)}亿`;
    }
    if (millions >= 1) {
      return `${currency}${millions.toFixed(millions < 10 ? 1 : 0)}百万`;
    }
    return `${currency}${num.toLocaleString()}`;
  }

  return `${currency}${num.toLocaleString()}`;
};

const WealthCounter: React.FC<WealthCounterProps> = ({
  startValue,
  endValue,
  currency = "$",
  suffix = "",
  label = "家族财富",
  comparisonLabel,
  comparisonValue,
  fontSize = 72,
  fontScale = 1,
  textColor = "#ffd700",
  accentColor = "#ffd700",
  backgroundColor = "#0d1117",
  animationStartFrame = 0,
  animationDuration = 90,
  showComparisonBar = false,
  formatAsHumanReadable = true,
  layout = "center",
  pulseOnComplete = true,
}) => {
  const frame = useCurrentFrame();

  // Calculate animation progress using spring for smooth effect
  const springValue = spring({
    frame: frame - animationStartFrame,
    fps: 30,
    config: { damping: 15, stiffness: 60 },
  });

  // Apply spring to value range
  const currentValue = interpolate(
    springValue,
    [0, 1],
    [startValue, endValue],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  // Fade in animation
  const opacity = interpolate(
    frame,
    [animationStartFrame, animationStartFrame + 30],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  // Pulse animation when complete
  const pulseScale = pulseOnComplete
    ? interpolate(
        frame,
        [animationStartFrame + animationDuration, animationStartFrame + animationDuration + 60],
        [1, 1.05, 1],
        { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
      )
    : 1;

  // Comparison bar width
  const comparisonBarWidth = showComparisonBar && comparisonValue
    ? Math.min((currentValue / comparisonValue) * 100, 100)
    : 0;

  const layoutStyles = {
    center: {
      textAlign: "center" as const,
      alignItems: "center" as const,
    },
    left: {
      textAlign: "left" as const,
      alignItems: "flex-start" as const,
    },
    right: {
      textAlign: "right" as const,
      alignItems: "flex-end" as const,
    },
  };

  const currentLayout = layoutStyles[layout];

  return (
    <AbsoluteFill style={{ backgroundColor }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity,
        }}
      >
        {/* Main counter display */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: currentLayout.alignItems,
            transform: `scale(${pulseScale})`,
            transformOrigin: "center",
          }}
        >
          {/* Label */}
          {label && (
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: `${20 * fontScale}px`,
                color: "#9ca3af",
                marginBottom: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                textAlign: currentLayout.textAlign,
              }}
            >
              {label}
            </div>
          )}

          {/* Main number */}
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: `${fontSize * fontScale}px`,
              fontWeight: 700,
              color: textColor,
              textAlign: currentLayout.textAlign,
              textShadow: `0 0 30px ${accentColor}40, 0 4px 20px rgba(0, 0, 0, 0.8)`,
              lineHeight: 1.1,
              minWidth: "300px",
            }}
          >
            {formatNumber(Math.round(currentValue), formatAsHumanReadable, currency)}
            {suffix && (
              <span style={{ fontSize: `${fontSize * fontScale * 0.6}px`, marginLeft: "10px" }}>
                {suffix}
              </span>
            )}
          </div>

          {/* Comparison bar */}
          {showComparisonBar && comparisonValue && (
            <div
              style={{
                marginTop: "30px",
                width: "400px",
                maxWidth: "80%",
              }}
            >
              {/* Background bar */}
              <div
                style={{
                  width: "100%",
                  height: "8px",
                  background: "#1f2937",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                {/* Animated fill bar */}
                <div
                  style={{
                    width: `${comparisonBarWidth}%`,
                    height: "100%",
                    background: `linear-gradient(90deg, ${accentColor}, ${accentColor}dd)`,
                    borderRadius: "4px",
                    transition: "width 0.3s ease-out",
                    boxShadow: `0 0 20px ${accentColor}80`,
                  }}
                />
              </div>

              {/* Comparison labels */}
              {comparisonLabel && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "14px",
                    color: "#9ca3af",
                  }}
                >
                  <span>{formatNumber(startValue, formatAsHumanReadable, currency)}</span>
                  <span style={{ color: accentColor }}>{comparisonLabel}</span>
                </div>
              )}
            </div>
          )}

          {/* Additional info text */}
          {comparisonLabel && !showComparisonBar && (
            <div
              style={{
                marginTop: "20px",
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: `${18 * fontScale}px`,
                color: accentColor,
                textAlign: currentLayout.textAlign,
              }}
            >
              {comparisonLabel}
            </div>
          )}
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: `${600 * fontScale}px`,
            height: `${600 * fontScale}px`,
            borderRadius: "50%",
            border: `1px solid ${accentColor}20`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: `${500 * fontScale}px`,
            height: `${500 * fontScale}px`,
            borderRadius: "50%",
            border: `1px solid ${accentColor}15`,
            pointerEvents: "none",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

export default WealthCounter;
