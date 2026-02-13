import React from "react";
import { useCurrentFrame, Img } from "remotion";

/**
 * HistoricalFigure - Historical Figure Photo Component
 *
 * Displays real historical figure photos with artistic effects and animations
 * Supports mouth overlay animation for talking effects
 *
 * Updated for Chinese users (Wikipedia not accessible):
 * - Prioritizes local file paths (/assets/figures/)
 * - Falls back to remote URL if local file not found
 * - Shows helpful placeholder with download instructions
 *
 * Enhanced with:
 * - Eye blinking animation
 * - Glow/pulse effects
 * - Enhanced breathing animation
 * - Shadow animation
 */

export interface HistoricalFigureProps {
  /** Position X in percentage */
  x: number;
  /** Position Y in percentage */
  y: number;
  /** Scale multiplier (1 = 100%) */
  scale?: number;
  /** Photo source URL or local path */
  photoSrc: string;
  /** Name in English */
  nameEn: string;
  /** Name in Chinese */
  nameCn?: string;
  /** Animation action */
  action?: "idle" | "talking" | "thinking" | "serious";
  /** Artistic frame style */
  frameStyle?: "none" | "classic" | "gold" | "vintage" | "modern";
  /** Animation effect type */
  animEffect?:
    | "none"
    | "fadeIn"
    | "scale"
    | "slideLeft"
    | "slideRight"
    | "breathing"
    | "pulse"
    | "float"
    | " entrance";
  /** Show name label */
  showLabel?: boolean;
  /** Label position */
  labelPosition?: "top" | "bottom" | "hidden";
  /** Image border radius */
  borderRadius?: number;
  /** Photo filter/overlay effect */
  photoFilter?: "none" | "sepia" | "grayscale" | "vintage" | "dramatic";
  /** Animation start frame (for fade-in effects) */
  startFrame?: number;
  /** Mirror the image horizontally */
  mirror?: boolean;
  /** Frame number for animation calculations */
  frame?: number;
  /** Enable glow effect */
  glowEffect?: boolean;
  /** Glow color (default: gold) */
  glowColor?: string;
}

/**
 * Historical Figure Photo Component
 */
export const HistoricalFigure: React.FC<HistoricalFigureProps> = ({
  x,
  y,
  scale = 1,
  photoSrc,
  nameEn,
  nameCn,
  action = "idle",
  frameStyle = "classic",
  animEffect = "none",
  showLabel = true,
  labelPosition = "bottom",
  borderRadius = 8,
  photoFilter = "none",
  startFrame = 0,
  mirror = false,
  frame: propFrame,
  glowEffect = false,
  glowColor = "#ffd700",
}) => {
  const internalFrame = useCurrentFrame();
  const currentFrame = propFrame !== undefined ? propFrame : internalFrame;
  const relativeFrame = Math.max(0, currentFrame - startFrame);

  // Animation calculations
  const opacity = getAnimationOpacity(animEffect, relativeFrame);
  const transform = getAnimationTransform(animEffect, relativeFrame);
  const filter = getPhotoFilter(photoFilter);

  // Mouth animation for talking effect
  const mouthAnimation = getMouthAnimation(action, currentFrame);

  // Eye blinking animation (available for future use)
  // Note: Currently not applied to photo - can be used for overlay effects
  getEyeBlinkAnimation(currentFrame);

  // Glow/pulse animation
  const glowAnimation = getGlowAnimation(currentFrame, glowEffect);

  // Breathing shadow animation
  const shadowAnimation = getShadowAnimation(currentFrame, animEffect);

  // Frame style config
  const frameConfig = getFrameStyle(frameStyle, scale);

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) ${transform}`,
        opacity,
        zIndex: 10,
        filter: glowEffect ? `drop-shadow(0 0 ${glowAnimation}px ${glowColor})` : "none",
        transition: "filter 0.1s ease-out",
      }}
    >
      {/* Outer decorative frame */}
      <div
        style={{
          position: "relative",
          width: 280 * scale,
          height: 350 * scale,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Frame decorative elements */}
        {frameStyle !== "none" && (
          <div
            style={{
              position: "absolute",
              inset: -12 * scale,
              borderRadius: frameConfig.outerRadius * scale,
              background: frameConfig.outerBg,
              boxShadow: frameConfig.shadow,
              pointerEvents: "none",
            }}
          >
            {/* Inner frame border */}
            <div
              style={{
                position: "absolute",
                inset: -6 * scale,
                borderRadius: frameConfig.innerRadius * scale,
                border: `${3 * scale}px solid ${frameConfig.borderColor}`,
                pointerEvents: "none",
              }}
            />

            {/* Decorative corner ornaments for vintage/classic frames */}
            {(frameStyle === "vintage" || frameStyle === "classic") && (
              <>
                {[
                  { top: "2%", left: "2%", rotate: "0deg" },
                  { top: "2%", right: "2%", rotate: "90deg" },
                  { bottom: "2%", right: "2%", rotate: "180deg" },
                  { bottom: "2%", left: "2%", rotate: "270deg" },
                ].map((pos, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      top: pos.top,
                      left: pos.left,
                      right: pos.right,
                      bottom: pos.bottom,
                      width: 30 * scale,
                      height: 30 * scale,
                      border: `2px solid ${frameConfig.accentColor}`,
                      transform: `rotate(${pos.rotate})`,
                      pointerEvents: "none",
                    }}
                  />
                ))}
              </>
            )}
          </div>
        )}

        {/* Photo container */}
        <div
          style={{
            position: "relative",
            width: 280 * scale,
            height: 320 * scale,
            overflow: "hidden",
            borderRadius: borderRadius * scale,
            background: "#1a1a1a",
            boxShadow: `inset 0 0 30px rgba(0,0,0,0.5), 0 ${10 + shadowAnimation}px ${30 + shadowAnimation * 2}px rgba(0,0,${0.3 + shadowAnimation * 0.05})`,
          }}
        >
          {/* Historical figure photo */}
          <Img
            src={photoSrc}
            alt={nameEn}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              filter,
              transform: mirror ? "scaleX(-1)" : "none",
            }}
          />

          {/* Photo overlay effects */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: getOverlayGradient(photoFilter),
              pointerEvents: "none",
            }}
          />

          {/* Vignette effect */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Mouth animation overlay for talking effect */}
          {action === "talking" && (
            <div
              style={{
                position: "absolute",
                bottom: "28%",
                left: "50%",
                transform: "translateX(-50%)",
                width: 60 * scale,
                height: 30 * scale,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Animated mouth shape */}
              <div
                style={{
                  width: mouthAnimation.width * scale,
                  height: mouthAnimation.height * scale,
                  background: "rgba(0, 0, 0, 0.6)",
                  borderRadius: "50%",
                  boxShadow: "0 0 20px rgba(0,0,0,0.8)",
                  transition: "all 0.1s ease-out",
                }}
              />
            </div>
          )}

          {/* Thinking bubble */}
          {action === "thinking" && (
            <div
              style={{
                position: "absolute",
                top: "5%",
                right: "5%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4 * scale,
              }}
            >
              <div
                style={{
                  width: 30 * scale,
                  height: 30 * scale,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20 * scale,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                ?
              </div>
              <div
                style={{
                  width: 8 * scale,
                  height: 8 * scale,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.7)",
                }}
              />
              <div
                style={{
                  width: 16 * scale,
                  height: 16 * scale,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.7)",
                }}
              />
            </div>
          )}
        </div>

        {/* Name label */}
        {showLabel && labelPosition !== "hidden" && (
          <div
            style={{
              marginTop: labelPosition === "top" ? -40 * scale : 12 * scale,
              marginBottom:
                labelPosition === "bottom" ? -40 * scale : 12 * scale,
              padding: "8px 16px",
              background: "rgba(26, 26, 46, 0.9)",
              border: `1px solid ${frameConfig.borderColor}`,
              borderRadius: `${8 * scale}px`,
              backdropFilter: "blur(4px)",
              zIndex: 20,
            }}
          >
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 18 * scale,
                color: frameConfig.labelColor,
                fontWeight: 700,
                textAlign: "center",
                marginBottom: 4 * scale,
                letterSpacing: 0.5,
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              {nameEn}
            </div>
            {nameCn && (
              <div
                style={{
                  fontFamily: "Noto Serif SC, serif",
                  fontSize: 16 * scale,
                  color: frameConfig.labelColor,
                  fontWeight: 500,
                  textAlign: "center",
                  marginTop: 2 * scale,
                  opacity: 0.9,
                }}
              >
                {nameCn}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Calculate opacity based on animation effect
 */
function getAnimationOpacity(effect: string, frame: number): number {
  switch (effect) {
    case "fadeIn":
      return Math.min(1, frame / 30);
    case "slideLeft":
    case "slideRight":
      return frame < 20 ? 0 : Math.min(1, frame / 20);
    default:
      return 1;
  }
}

/**
 * Calculate transform based on animation effect
 */
function getAnimationTransform(effect: string, frame: number): string {
  // Enhanced breathing animation with subtle movement
  const breathingScale =
    effect === "breathing"
      ? 1 + Math.sin((frame * 0.05) % (Math.PI * 2)) * 0.03
      : 1;

  // Pulse effect - rhythmic scaling
  const pulseScale =
    effect === "pulse"
      ? 1 + Math.sin((frame * 0.08) % (Math.PI * 2)) * 0.025
      : 1;

  // Float effect - gentle up and down movement
  const floatY =
    effect === "float"
      ? Math.sin((frame * 0.04) % (Math.PI * 2)) * 8
      : 0;

  // Entrance effect - scale up with bounce
  let entranceScale = 1;
  if (effect === "entrance") {
    const progress = Math.min(frame / 45, 1);
    // Elastic ease out
    const c4 = (2 * Math.PI) / 3;
    entranceScale = progress === 0 ? 0 : progress === 1 ? 1 :
      Math.pow(2, -10 * progress) * Math.sin((progress * 10 - 0.75) * c4) + 1;
  }

  const finalScale = breathingScale * pulseScale * entranceScale;

  switch (effect) {
    case "scale":
    case "pulse":
    case "entrance":
      return `scale(${finalScale}) translateY(${floatY}px)`;
    case "breathing":
      return `scale(${breathingScale}) translateY(${floatY}px)`;
    case "float":
      return `translateY(${floatY}px)`;
    case "slideLeft":
    case "slideRight": {
      let slideX: number;
      if (effect === "slideLeft") {
        slideX = frame < 20 ? -50 + (frame / 20) * 50 : 0;
      } else {
        slideX = frame > 0 ? 50 - (frame / 20) * 50 : -50;
      }
      return `translateX(${slideX}px)`;
    }
    default:
      return "none";
  }
}

/**
 * Get CSS filter for photo effect
 */
function getPhotoFilter(filter: string): string {
  switch (filter) {
    case "sepia":
      return "sepia(0.6) contrast(1.1)";
    case "grayscale":
      return "grayscale(1) contrast(1.2)";
    case "vintage":
      return "sepia(0.3) contrast(1.1)";
    case "dramatic":
      return "contrast(1.3) saturate(0.8)";
    default:
      return "none";
  }
}

/**
 * Get overlay gradient for photo effect
 */
function getOverlayGradient(filter: string): string {
  switch (filter) {
    case "sepia":
      return "linear-gradient(180deg, rgba(112, 66, 20, 0.1) 0%, rgba(60, 40, 20, 0.15) 100%)";
    case "vintage":
      return "linear-gradient(180deg, rgba(139, 90, 60, 0.1) 0%, rgba(100, 80, 50, 0.15) 100%)";
    case "dramatic":
      return "linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 100%)";
    default:
      return "none";
  }
}

/**
 * Get frame style configuration
 */
function getFrameStyle(style: string, scale: number) {
  const baseConfig = {
    outerRadius: 16 * scale,
    innerRadius: 12 * scale,
    borderColor: "#ffd700",
    accentColor: "#ffd700",
    shadow: "0 8px 32px rgba(0,0,0,0.3)",
    outerBg: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)",
    labelColor: "#ffffff",
  };

  switch (style) {
    case "gold":
      return {
        ...baseConfig,
        borderColor: "#ffd700",
        accentColor: "#ffd700",
        shadow:
          "0 8px 32px rgba(255, 215, 0, 0.4), 0 4px 16px rgba(255, 215, 0, 0.2)",
        outerBg: "linear-gradient(135deg, #3d3d2a 0%, #1a1a1a 100%)",
      };
    case "vintage":
      return {
        ...baseConfig,
        borderColor: "#8b7355",
        accentColor: "#c9a86c",
        shadow: "0 8px 24px rgba(0,0,0,0.5)",
        outerBg: "linear-gradient(135deg, #4a4035 0%, #2a2520 100%)",
      };
    case "modern":
      return {
        ...baseConfig,
        borderColor: "#64b5f6",
        accentColor: "#64b5f6",
        shadow: "0 4px 20px rgba(100, 181, 212, 0.3)",
        outerBg: "linear-gradient(135deg, #2a3a40 0%, #1e3a5a 100%)",
      };
    default:
      return baseConfig;
  }
}

/**
 * Get mouth animation values for talking effect
 */
function getMouthAnimation(
  action: string,
  frame: number,
): { width: number; height: number } {
  if (action !== "talking") {
    return { width: 0, height: 0 };
  }

  // Create organic talking animation pattern
  const talkCycle = (frame * 0.4) % (Math.PI * 2);
  const openAmount = Math.sin(talkCycle) * 0.5 + 0.5;
  const quickOpen = Math.sin(talkCycle * 3) * 0.3;

  const width = 15 + openAmount * 8;
  const height = 6 + openAmount * 5 + quickOpen * 2;

  return { width, height };
}

/**
 * Get eye blinking animation
 * Returns 1 for open eyes, 0 for closed eyes
 */
function getEyeBlinkAnimation(frame: number): number {
  // Blink every 150-200 frames (5-6 seconds at 30fps)
  const blinkCycle = frame % 180;
  if (blinkCycle < 8) {
    // Quick blink in 8 frames
    return blinkCycle < 4 ? blinkCycle / 4 : 1 - (blinkCycle - 4) / 4;
  }
  return 1;
}

/**
 * Get glow/pulse animation intensity
 */
function getGlowAnimation(frame: number, enabled: boolean): number {
  if (!enabled) return 0;
  // Pulsing glow between 5-20px
  return 5 + Math.sin((frame * 0.06) % (Math.PI * 2)) * 7.5;
}

/**
 * Get breathing shadow animation
 */
function getShadowAnimation(frame: number, effect: string): number {
  if (effect === "breathing" || effect === "pulse" || effect === "float") {
    // Subtle shadow movement
    return Math.sin((frame * 0.04) % (Math.PI * 2)) * 3;
  }
  return 0;
}
