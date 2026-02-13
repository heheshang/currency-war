/**
 * Enhanced UI Animation Components
 *
 * Ready-to-use animated UI components for scenes
 */

import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

/**
 * Animated Title - Enhanced title with multiple animation effects
 */
interface AnimatedTitleProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  effect?: "fade" | "slide" | "scale" | "bounce";
  direction?: "left" | "right" | "center";
  className?: string;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  children,
  delay = 0,
  duration = 45,
  effect = "fade",
  direction = "center",
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  const getTransform = () => {
    const offset = 50 * (1 - progress);

    switch (effect) {
      case "slide":
        if (direction === "left") return `translateX(${-offset}px)`;
        if (direction === "right") return `translateX(${offset}px)`;
        return "none";
      case "scale":
        return `scale(${0.5 + progress * 0.5})`;
      case "bounce": {
        const bounce = progress < 0.6 ? progress / 0.6 : 1 + Math.sin(progress * 10) * 0.1 * (1 - progress);
        return `scale(${bounce})`;
      }
      default:
        return "none";
    }
  };

  return (
    <div
      style={{
        opacity: progress,
        transform: getTransform(),
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};

/**
 * Animated Card - Card with entrance animation
 */
interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  delay = 0,
  duration = 45,
  style,
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        ...style,
        opacity: progress,
        transform: `scale(${0.8 + progress * 0.2}) translateY(${20 * (1 - progress)}px)`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};

/**
 * Animated List - Staggered list animation
 */
interface AnimatedListProps {
  children: React.ReactNode[];
  delay?: number;
  staggerDelay?: number;
  duration?: number;
}

export const AnimatedList: React.FC<AnimatedListProps> = ({
  children,
  delay = 0,
  staggerDelay = 12,
  duration = 30,
}) => {
  const frame = useCurrentFrame();

  return (
    <>
      {React.Children.map(children, (child, index) => {
        const itemDelay = delay + index * staggerDelay;
        const progress = interpolate(
          frame,
          [itemDelay, itemDelay + duration],
          [0, 1],
          { extrapolateRight: "clamp" }
        );

        return (
          <div
            style={{
              opacity: progress,
              transform: `translateX(${-20 * (1 - progress)}px)`,
              willChange: "transform, opacity",
            }}
          >
            {child}
          </div>
        );
      })}
    </>
  );
};

/**
 * Animated Stat - Animated number/stat display
 */
interface AnimatedStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
  duration?: number;
  label?: string;
  color?: string;
}

export const AnimatedStat: React.FC<AnimatedStatProps> = ({
  value,
  suffix = "",
  prefix = "",
  delay = 0,
  duration = 60,
  label,
  color = "#ffd700",
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  const displayValue = Math.round(value * progress);

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "Cinzel, serif",
          fontSize: 36,
          color: color,
          fontWeight: 700,
          opacity: progress,
        }}
      >
        {prefix}
        {displayValue.toLocaleString()}
        {suffix}
      </div>
      {label && (
        <div
          style={{
            fontSize: 14,
            color: "#9ca3af",
            marginTop: 4,
            opacity: progress,
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

/**
 * Animated Divider - Animated line/separator
 */
interface AnimatedDividerProps {
  delay?: number;
  duration?: number;
  width?: string;
  color?: string;
}

export const AnimatedDivider: React.FC<AnimatedDividerProps> = ({
  delay = 0,
  duration = 30,
  width = "60%",
  color = "#ffd700",
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: width,
        height: 2,
        background: color,
        opacity: progress,
        transform: `scaleX(${progress})`,
        transformOrigin: "center",
        willChange: "transform, opacity",
      }}
    />
  );
};

/**
 * Animated Quote - Styled quote with animation
 */
interface AnimatedQuoteProps {
  children: React.ReactNode;
  delay?: number;
  author?: string;
}

export const AnimatedQuote: React.FC<AnimatedQuoteProps> = ({
  children,
  delay = 0,
  author,
}) => {
  const frame = useCurrentFrame();

  const quoteOpacity = interpolate(frame, [delay, delay + 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const borderProgress = interpolate(frame, [delay, delay + 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity: quoteOpacity,
        borderLeft: `${4 * borderProgress}px solid #ffd700`,
        borderRight: `${4 * borderProgress}px solid #ffd700`,
        padding: "20px 40px",
        transform: `translateY(${10 * (1 - quoteOpacity)}px)`,
        willChange: "transform, opacity, border",
      }}
    >
      <div
        style={{
          fontFamily: "Merriweather, serif",
          fontSize: 22,
          color: "#e8e8e8",
          textAlign: "center",
          fontStyle: "italic",
          lineHeight: "1.6",
        }}
      >
        {children}
      </div>
      {author && (
        <div
          style={{
            fontSize: 16,
            color: "#ffd700",
            textAlign: "center",
            marginTop: 16,
            letterSpacing: 2,
          }}
        >
          — {author}
        </div>
      )}
    </div>
  );
};

/**
 * Pulsing Dot - Attention-grabbing dot animation
 */
interface PulsingDotProps {
  color?: string;
  size?: number;
}

export const PulsingDot: React.FC<PulsingDotProps> = ({
  color = "#ffd700",
  size = 12,
}) => {
  const frame = useCurrentFrame();
  const scale = 1 + Math.sin((frame * 0.1) % (Math.PI * 2)) * 0.3;
  const opacity = 0.6 + Math.sin((frame * 0.1) % (Math.PI * 2)) * 0.4;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        transform: `scale(${scale})`,
        opacity,
        boxShadow: `0 0 ${size * scale}px ${color}`,
        willChange: "transform, opacity",
      }}
    />
  );
};

/**
 * Rotating Border - Decorative rotating border
 */
interface RotatingBorderProps {
  size?: number;
  color?: string;
  speed?: number;
}

export const RotatingBorder: React.FC<RotatingBorderProps> = ({
  size = 300,
  color = "rgba(255, 215, 0, 0.1)",
  speed = 0.05,
}) => {
  const frame = useCurrentFrame();
  const rotation = frame * speed * 30;

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        width: size,
        height: size,
        border: `1px solid ${color}`,
        borderRadius: "50%",
        pointerEvents: "none",
        willChange: "transform",
      }}
    />
  );
};
