/**
 * HistoricalQuote.tsx
 *
 * Reusable component for displaying historical quotes and sayings
 * Features elegant typography with fade-in animations
 * Designed for serious documentary style
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export interface HistoricalQuoteProps {
  quote: string;
  author?: string;
  source?: string; // Original source/book
  year?: number;
  translation?: string; // Chinese translation
  fontScale?: number; // Scale factor for text size
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  animationDelay?: number; // frames before animation starts
  fadeInDuration?: number; // frames for fade in
  layout?: "center" | "left" | "right";
  showDecorations?: boolean;
}

const HistoricalQuote: React.FC<HistoricalQuoteProps> = ({
  quote,
  author,
  source,
  year,
  translation,
  fontScale = 1,
  backgroundColor = "#0d1117",
  textColor = "#e8e8e8",
  accentColor = "#ffd700",
  animationDelay = 0,
  fadeInDuration = 45,
  layout = "center",
  showDecorations = true,
}) => {
  const frame = useCurrentFrame();

  // Calculate animation progress
  const getOpacity = (delayOffset: number) => {
    const startFrame = animationDelay + delayOffset;
    return interpolate(
      frame,
      [startFrame, startFrame + fadeInDuration],
      [0, 1],
      {
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      },
    );
  };

  // Subtle floating animation
  const floatOffset = interpolate(frame, [0, 120], [0, 8], {
    extrapolateLeft: "wrap",
    extrapolateRight: "wrap",
    easing: (t) => Math.sin(t * Math.PI * 2),
  });

  const quoteOpacity = getOpacity(0);
  const authorOpacity = getOpacity(15);
  const decorationOpacity = getOpacity(30);

  // Layout styles
  const layoutStyles = {
    center: {
      textAlign: "center" as const,
      alignItems: "center" as const,
      padding: "0 10%",
    },
    left: {
      textAlign: "left" as const,
      alignItems: "flex-start" as const,
      padding: "0 15% 0 10%",
    },
    right: {
      textAlign: "right" as const,
      alignItems: "flex-end" as const,
      padding: "0 10% 0 15%",
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
          padding: currentLayout.padding,
        }}
      >
        {/* Decorative top line */}
        {showDecorations && (
          <div
            style={{
              width: "120px",
              height: "2px",
              background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
              marginBottom: "40px",
              opacity: decorationOpacity,
              transform: `translateY(${floatOffset * 0.5}px)`,
            }}
          />
        )}

        {/* Quote mark decoration */}
        {showDecorations && (
          <div
            style={{
              fontSize: `${80 * fontScale}px`,
              color: accentColor,
              opacity: 0.2,
              fontFamily: "Georgia, serif",
              position: "absolute",
              top: "15%",
              [layout === "left"
                ? "left"
                : layout === "right"
                  ? "right"
                  : "left"]: "15%",
            }}
          >
            "
          </div>
        )}

        {/* Main quote */}
        <div
          style={{
            opacity: quoteOpacity,
            maxWidth: "900px",
            transform: `translateY(${floatOffset}px)`,
          }}
        >
          <h2
            style={{
              fontFamily: "'Cinzel', 'Times New Roman', serif",
              fontSize: `${32 * fontScale}px`,
              fontWeight: 400,
              color: textColor,
              lineHeight: 1.5,
              fontStyle: "italic",
              textAlign: currentLayout.textAlign,
              margin: 0,
              textShadow: `0 2px 20px rgba(0, 0, 0, 0.5)`,
            }}
          >
            {quote}
          </h2>

          {/* Translation (if provided) */}
          {translation && (
            <p
              style={{
                fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif",
                fontSize: `${20 * fontScale}px`,
                color: accentColor,
                marginTop: "20px",
                opacity: 0.9,
                textAlign: currentLayout.textAlign,
                fontWeight: 300,
              }}
            >
              {translation}
            </p>
          )}
        </div>

        {/* Author and source */}
        {(author || source || year) && (
          <div
            style={{
              opacity: authorOpacity,
              marginTop: "40px",
              textAlign: currentLayout.textAlign,
            }}
          >
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: `${18 * fontScale}px`,
                color: accentColor,
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              {author && `— ${author}`}
              {author && source && " —"}
              {source && ` ${source}`}
              {year && ` (${year})`}
            </span>
          </div>
        )}

        {/* Decorative bottom line */}
        {showDecorations && (
          <div
            style={{
              width: "120px",
              height: "2px",
              background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
              marginTop: "40px",
              opacity: decorationOpacity,
              transform: `translateY(${-floatOffset * 0.5}px)`,
            }}
          />
        )}

        {/* Corner decorations for elegant look */}
        {showDecorations && layout === "center" && decorationOpacity > 0 && (
          <>
            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "10%",
                width: "40px",
                height: "40px",
                borderLeft: `1px solid ${accentColor}`,
                borderTop: `1px solid ${accentColor}`,
                opacity: decorationOpacity * 0.5,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "10%",
                right: "10%",
                width: "40px",
                height: "40px",
                borderRight: `1px solid ${accentColor}`,
                borderTop: `1px solid ${accentColor}`,
                opacity: decorationOpacity * 0.5,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "10%",
                left: "10%",
                width: "40px",
                height: "40px",
                borderLeft: `1px solid ${accentColor}`,
                borderBottom: `1px solid ${accentColor}`,
                opacity: decorationOpacity * 0.5,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "10%",
                right: "10%",
                width: "40px",
                height: "40px",
                borderRight: `1px solid ${accentColor}`,
                borderBottom: `1px solid ${accentColor}`,
                opacity: decorationOpacity * 0.5,
              }}
            />
          </>
        )}
      </div>
    </AbsoluteFill>
  );
};

export default HistoricalQuote;
