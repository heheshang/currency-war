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

// ============================================
// 增强的电影感 UI 动画组件
// ============================================

/**
 * CinematicDivider - 电影感分割线
 *
 * 带光效的装饰性分割线
 */
interface CinematicDividerProps {
  delay?: number;
  duration?: number;
  width?: string;
  color?: string;
  glowColor?: string;
  type?: "simple" | "glow" | "ornate";
}

export const CinematicDivider: React.FC<CinematicDividerProps> = ({
  delay = 0,
  duration = 30,
  width = "60%",
  color = "#ffd700",
  glowColor = "rgba(255, 215, 0, 0.5)",
  type = "glow",
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  const getDividerStyle = (): React.CSSProperties => {
    switch (type) {
      case "glow": {
        const lineWidth = width === "60%" ? "60%" : width;
        return {
          width: lineWidth,
          height: 2,
          background: `linear-gradient(90deg, transparent 0%, ${color} 20%, ${color} 80%, transparent 100%)`,
          opacity: progress,
          transform: `scaleX(${progress})`,
          transformOrigin: "center",
          boxShadow: `0 0 ${10 * progress}px ${glowColor}, 0 0 ${20 * progress}px ${glowColor}`,
          willChange: "transform, opacity, box-shadow",
        };
      }
      case "ornate": {
        return {
          width: width,
          height: 20,
          opacity: progress,
          background: `linear-gradient(90deg, transparent 0%, ${color} 10%, ${color} 90%, transparent 100%)`,
          maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20'%3E%3Cpath d='M0,10 L30,10 L35,5 L40,10 L60,10 L65,5 L70,10 L100,10' stroke='${color}' strokeWidth='2' fill='none'/%3E%3Ccircle cx='50' cy='10' r='4' fill='${color}'/%3E%3C/svg%3E")`,
          maskSize: "100% 100%",
          willChange: "opacity",
        };
      }
      case "simple":
      default:
        return {
          width: width,
          height: 2,
          background: color,
          opacity: progress,
          transform: `scaleX(${progress})`,
          transformOrigin: "center",
          willChange: "transform, opacity",
        };
    }
  };

  return <div style={getDividerStyle()} />;
};

/**
 * Enhanced AnimatedTitle - 增强的电影感标题
 */
interface CinematicTitleProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  effect?: "fade" | "slide" | "scale" | "bounce" | "cinematic";
  direction?: "left" | "right" | "center";
  textShadow?: string;
  className?: string;
}

export const CinematicTitle: React.FC<CinematicTitleProps> = ({
  children,
  delay = 0,
  duration = 45,
  effect = "fade",
  direction = "center",
  textShadow = "0 0 20px rgba(255, 215, 0, 0.5)",
  className,
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Smooth easing
  const eased = progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

  const getTransform = (): string => {
    const offset = 50 * (1 - eased);

    switch (effect) {
      case "slide":
        if (direction === "left") return `translateX(${-offset}px)`;
        if (direction === "right") return `translateX(${offset}px)`;
        return "none";
      case "scale":
        return `scale(${0.5 + eased * 0.5})`;
      case "bounce": {
        const bounce = eased < 0.6 ? eased / 0.6 : 1 + Math.sin(eased * 10) * 0.1 * (1 - eased);
        return `scale(${bounce})`;
      }
      case "cinematic": {
        // Cinematic: scale from 0.8 + slight blur + glow
        const blur = (1 - eased) * 10;
        return `scale(${0.8 + eased * 0.2}) blur(${blur}px)`;
      }
      default:
        return "none";
    }
  };

  return (
    <div
      className={className}
      style={{
        opacity: progress,
        transform: getTransform(),
        textShadow: effect === "cinematic" ? textShadow : "none",
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </div>
  );
};

/**
 * AnimatedStat - 增强的统计数据动画
 */
interface CinematicStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
  duration?: number;
  label?: string;
  color?: string;
  showCounting?: boolean;
  format?: "number" | "currency" | "percentage";
}

export const CinematicStat: React.FC<CinematicStatProps> = ({
  value,
  suffix = "",
  prefix = "",
  delay = 0,
  duration = 60,
  label,
  color = "#ffd700",
  showCounting = true,
  format = "number",
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Ease out
  const eased = 1 - Math.pow(1 - progress, 3);

  // Calculate display value
  const displayValue = showCounting
    ? Math.round(value * eased)
    : value;

  // Format based on type
  const formatValue = (val: number): string => {
    switch (format) {
      case "currency":
        return val.toLocaleString();
      case "percentage":
        return `${val}%`;
      case "number":
      default:
        return val.toLocaleString();
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "Cinzel, serif",
          fontSize: 48,
          color: color,
          fontWeight: 700,
          opacity: progress,
          textShadow: `0 0 ${20 * progress}px ${color}`,
          willChange: "opacity, text-shadow",
        }}
      >
        {prefix}
        {formatValue(displayValue)}
        {suffix}
      </div>
      {label && (
        <div
          style={{
            fontSize: 16,
            color: "#9ca3af",
            marginTop: 8,
            opacity: progress,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

/**
 * AnimatedQuote - 增强的引言动画
 */
interface CinematicQuoteProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  author?: string;
  showBorder?: boolean;
  borderColor?: string;
}

export const CinematicQuote: React.FC<CinematicQuoteProps> = ({
  children,
  delay = 0,
  duration = 30,
  author,
  showBorder = true,
  borderColor = "#ffd700",
}) => {
  const frame = useCurrentFrame();

  const quoteOpacity = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  const borderProgress = interpolate(frame, [delay, delay + 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Glow effect
  const glowIntensity = borderProgress * 0.5;

  return (
    <div
      style={{
        opacity: quoteOpacity,
        borderLeft: showBorder ? `${4 * borderProgress}px solid ${borderColor}` : "none",
        borderRight: showBorder ? `${4 * borderProgress}px solid ${borderColor}` : "none",
        padding: "30px 50px",
        transform: `translateY(${10 * (1 - quoteOpacity)}px)`,
        boxShadow: showBorder
          ? `0 0 ${30 * glowIntensity}px rgba(255, 215, 0, ${glowIntensity * 0.3})`
          : "none",
        background: "rgba(0, 0, 0, 0.3)",
        borderRadius: "4px",
        willChange: "transform, opacity, border, box-shadow",
      }}
    >
      <div
        style={{
          fontFamily: "Merriweather, serif",
          fontSize: 24,
          color: "#e8e8e8",
          textAlign: "center",
          fontStyle: "italic",
          lineHeight: "1.8",
        }}
      >
        "{children}"
      </div>
      {author && (
        <div
          style={{
            fontSize: 16,
            color: borderColor,
            textAlign: "center",
            marginTop: 20,
            letterSpacing: 2,
            opacity: borderProgress,
          }}
        >
          — {author}
        </div>
      )}
    </div>
  );
};

/**
 * GlowText - 发光文字效果
 */
interface GlowTextProps {
  children: React.ReactNode;
  color?: string;
  glowColor?: string;
  delay?: number;
  duration?: number;
  intensity?: number;
}

export const GlowText: React.FC<GlowTextProps> = ({
  children,
  color = "#ffd700",
  glowColor,
  delay = 0,
  duration = 30,
  intensity = 1,
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  const effectiveGlowColor = glowColor || color;

  return (
    <div
      style={{
        color: color,
        fontSize: 32,
        fontWeight: 700,
        textShadow: `
          0 0 ${10 * progress * intensity}px ${effectiveGlowColor},
          0 0 ${20 * progress * intensity}px ${effectiveGlowColor},
          0 0 ${40 * progress * intensity}px ${effectiveGlowColor}
        `,
        opacity: progress,
        willChange: "opacity, text-shadow",
      }}
    >
      {children}
    </div>
  );
};

/**
 * AnimatedBar - 电影感进度条
 */
interface AnimatedBarProps {
  progress: number; // 0-100
  delay?: number;
  duration?: number;
  color?: string;
  height?: number;
  showLabel?: boolean;
}

export const AnimatedBar: React.FC<AnimatedBarProps> = ({
  progress,
  delay = 0,
  duration = 60,
  color = "#ffd700",
  height = 8,
  showLabel = true,
}) => {
  const frame = useCurrentFrame();
  const animatedProgress = interpolate(frame, [delay, delay + duration], [0, progress], {
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ width: "100%" }}>
      {showLabel && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 8,
            fontSize: 14,
            color: "#9ca3af",
          }}
        >
          <span>Progress</span>
          <span>{Math.round(animatedProgress)}%</span>
        </div>
      )}
      <div
        style={{
          width: "100%",
          height: height,
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: height / 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${animatedProgress}%`,
            height: "100%",
            background: `linear-gradient(90deg, ${color} 0%, ${color}cc 100%)`,
            borderRadius: height / 2,
            boxShadow: `0 0 10px ${color}, 0 0 20px ${color}50`,
            transition: "width 0.1s ease-out",
          }}
        />
      </div>
    </div>
  );
};

/**
 * VignetteOverlay - 暗角效果
 */
interface VignetteOverlayProps {
  intensity?: number;
  delay?: number;
  duration?: number;
}

export const VignetteOverlay: React.FC<VignetteOverlayProps> = ({
  intensity = 0.5,
  delay = 0,
  duration = 30,
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `radial-gradient(ellipse at center, transparent 0%, transparent ${30 * (1 - progress)}%, rgba(0, 0, 0, ${intensity * progress}) 100%)`,
        pointerEvents: "none",
        zIndex: 50,
        willChange: "background",
      }}
    />
  );
};
