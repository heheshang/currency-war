/**
 * Enhanced Animation Hooks
 *
 * Provides reusable animation logic for scenes
 */

import { useCurrentFrame, interpolate, random } from "remotion";

/**
 * Use fade in animation
 * Returns opacity value that fades in from startFrame
 */
export function useFadeIn(delay: number = 0, duration: number = 30) {
  const frame = useCurrentFrame();
  return interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });
}

/**
 * Use scale animation with optional bounce
 */
export function useScaleIn(
  delay: number = 0,
  duration: number = 30,
  bounce: boolean = false
) {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  if (bounce) {
    // Elastic ease out
    const elasticProgress = progress === 0 ? 0 : progress === 1 ? 1 :
      Math.pow(2, -10 * progress) * Math.sin((progress * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1;
    return elasticProgress;
  }

  // Smooth ease out
  return 1 - Math.pow(1 - progress, 3);
}

/**
 * Use slide animation from any direction
 */
export function useSlideIn(
  direction: "left" | "right" | "up" | "down",
  delay: number = 0,
  duration: number = 30,
  distance: number = 100
) {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  const offset = distance * (1 - progress);

  switch (direction) {
    case "left":
      return { transform: `translateX(${offset}px)`, opacity: progress };
    case "right":
      return { transform: `translateX(${-offset}px)`, opacity: progress };
    case "up":
      return { transform: `translateY(${offset}px)`, opacity: progress };
    case "down":
      return { transform: `translateY(${-offset}px)`, opacity: progress };
  }
}

/**
 * Use breathing/pulsing animation
 */
export function useBreathing(intensity: number = 0.03, speed: number = 0.05) {
  const frame = useCurrentFrame();
  return 1 + Math.sin((frame * speed) % (Math.PI * 2)) * intensity;
}

/**
 * Use floating animation (up and down)
 */
export function useFloat(amplitude: number = 10, speed: number = 0.04) {
  const frame = useCurrentFrame();
  return Math.sin((frame * speed) % (Math.PI * 2)) * amplitude;
}

/**
 * Use spotlight effect
 */
export function useSpotlight(
  startX: number,
  endX: number,
  delay: number = 0,
  duration: number = 300
) {
  const frame = useCurrentFrame();
  return interpolate(
    frame,
    [delay, delay + duration],
    [startX, endX],
    { extrapolateRight: "clamp" }
  );
}

/**
 * Use staggered animation for lists
 */
export function useStagger<T>(
  items: T[],
  staggerDelay: number = 10,
  itemDuration: number = 20
) {
  const frame = useCurrentFrame();

  return items.map((_, index) => {
    const delay = index * staggerDelay;
    const progress = interpolate(
      frame,
      [delay, delay + itemDuration],
      [0, 1],
      { extrapolateRight: "clamp" }
    );
    return progress;
  });
}

/**
 * Use reveal animation (content reveals from behind a mask)
 */
export function useReveal(
  delay: number = 0,
  duration: number = 60,
  direction: "left" | "right" | "top" | "bottom" = "right"
) {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  const size = 100 * (1 - progress);

  switch (direction) {
    case "left":
      return { clipPath: `inset(0 0 0 ${size}%)`, opacity: progress };
    case "right":
      return { clipPath: `inset(0 ${size}% 0 0)`, opacity: progress };
    case "top":
      return { clipPath: `inset(${size}% 0 0 0)`, opacity: progress };
    case "bottom":
      return { clipPath: `inset(0 0 ${size}% 0)`, opacity: progress };
  }
}

/**
 * Use shimmer effect for text/images
 */
export function useShimmer(delay: number = 0, speed: number = 0.1) {
  const frame = useCurrentFrame();
  const shimmer = interpolate(
    Math.sin(frame * speed),
    [-1, 1],
    [0, 1],
    { extrapolateRight: "clamp" }
  );
  return {
    opacity: interpolate(frame, [delay, delay + 30], [0, 1], {
      extrapolateRight: "clamp",
    }),
    shimmer,
  };
}

/**
 * Use typing effect for text
 */
export function useTyping(delay: number = 0, charDuration: number = 3) {
  const frame = useCurrentFrame();
  const charsShown = Math.max(0, Math.floor((frame - delay) / charDuration));
  return charsShown;
}

/**
 * Use counter animation (for numbers)
 */
export function useCounter(
  endValue: number,
  delay: number = 0,
  duration: number = 60
) {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });
  return Math.round(endValue * progress);
}

/**
 * Use cinematic transition with multiple effects
 */
export function useCinematicTransition(
  delay: number = 0,
  duration: number = 45,
  type: "fade" | "zoom" | "slide" | "blur" = "fade"
) {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Smooth easing
  const eased = progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

  switch (type) {
    case "zoom":
      return {
        opacity: eased,
        transform: `scale(${0.5 + eased * 0.5})`,
      };
    case "slide":
      return {
        opacity: eased,
        transform: `translateY(${(1 - eased) * 50}px)`,
      };
    case "blur":
      return {
        opacity: eased,
        filter: `blur(${(1 - eased) * 10}px)`,
      };
    case "fade":
    default:
      return { opacity: eased };
  }
}

/**
 * Use camera movement for cinematic effects
 */
export function useCameraMovement(
  delay: number = 0,
  duration: number = 60,
  type: "pan" | "zoom" | "dolly" | "tilt" = "pan",
  direction: "left" | "right" | "up" | "down" = "right",
  amount: number = 100
) {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Ease in out
  const eased = progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

  switch (type) {
    case "pan": {
      const xOffset = direction === "left"
        ? -amount * eased
        : direction === "right"
          ? amount * eased
          : 0;
      const yOffset = direction === "up"
        ? -amount * eased
        : direction === "down"
          ? amount * eased
          : 0;
      return { transform: `translate(${xOffset}px, ${yOffset}px)` };
    }
    case "zoom": {
      const scale = 1 + (1.5 - 1) * eased;
      return { transform: `scale(${scale})` };
    }
    case "dolly": {
      const scale = 1 + (2 - 1) * eased;
      return { transform: `scale(${scale})` };
    }
    case "tilt": {
      const rotateX = direction === "up"
        ? -10 * eased
        : direction === "down"
          ? 10 * eased
          : 0;
      return { transform: `perspective(1000px) rotateX(${rotateX}deg)` };
    }
    default:
      return { transform: "none" };
  }
}

/**
 * Use emotion expression animation
 */
export function useEmotionExpression(
  emotion: "neutral" | "happy" | "sad" | "angry" | "surprised" | "thinking" = "neutral",
  delay: number = 0,
  duration: number = 30
) {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  const eased = progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

  switch (emotion) {
    case "happy":
      return {
        scale: 1 + eased * 0.1,
        rotation: 0,
        bounce: eased * 5,
      };
    case "sad":
      return {
        scale: 1 - eased * 0.05,
        rotation: 0,
        bounce: -eased * 2,
      };
    case "angry":
      return {
        scale: 1,
        rotation: eased * 3,
        bounce: eased * 8,
      };
    case "surprised":
      return {
        scale: 1 + eased * 0.15,
        rotation: 0,
        bounce: eased * 10,
      };
    case "thinking":
      return {
        scale: 0.95 + eased * 0.05,
        rotation: eased * 5,
        bounce: 0,
      };
    case "neutral":
    default:
      return {
        scale: 1,
        rotation: 0,
        bounce: 0,
      };
  }
}

/**
 * Use gesture animation
 */
export function useGestureAnimation(
  gesture: "none" | "wave" | "point" | "nod" | "shake" | "openHands" = "none",
  delay: number = 0,
  duration: number = 60
) {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  switch (gesture) {
    case "wave":
      return {
        armAngle: Math.sin(progress * Math.PI * 4) * 45,
        headTilt: 0,
        bodyTilt: Math.sin(progress * Math.PI * 2) * 3,
      };
    case "point":
      return {
        armAngle: -60,
        headTilt: 5 * progress,
        bodyTilt: 5 * progress,
      };
    case "nod":
      return {
        armAngle: 0,
        headTilt: Math.sin(progress * Math.PI * 3) * 8,
        bodyTilt: 0,
      };
    case "shake":
      return {
        armAngle: 0,
        headTilt: Math.sin(progress * Math.PI * 4) * -5,
        bodyTilt: Math.sin(progress * Math.PI * 4) * 3,
      };
    case "openHands":
      return {
        armAngle: -30 + Math.sin(progress * Math.PI * 2) * 10,
        headTilt: 0,
        bodyTilt: 0,
      };
    case "none":
    default:
      return {
        armAngle: 0,
        headTilt: 0,
        bodyTilt: 0,
      };
  }
}

/**
 * Use spotlight focus effect
 */
export function useSpotlightFocus(
  mode: "entrance" | "exit" | "focus" | "pulse" | "none" = "none",
  delay: number = 0,
  duration: number = 60
) {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  switch (mode) {
    case "entrance": {
      const radius = progress * 200;
      const opacity = progress;
      return {
        width: radius * 2,
        height: radius * 2,
        opacity,
      };
    }
    case "exit": {
      const radius = 200 - progress * 200;
      const opacity = 1 - progress;
      return {
        width: radius * 2,
        height: radius * 2,
        opacity,
      };
    }
    case "focus": {
      return {
        width: 400,
        height: 400,
        opacity: 0.3 + progress * 0.4,
      };
    }
    case "pulse": {
      const pulseScale = 1 + Math.sin(progress * Math.PI * 4) * 0.2;
      const opacity = 0.4 + Math.sin(progress * Math.PI * 4) * 0.2;
      return {
        width: 400 * pulseScale,
        height: 400 * pulseScale,
        opacity,
      };
    }
    case "none":
    default:
      return {
        width: 0,
        height: 0,
        opacity: 0,
      };
  }
}

/**
 * Use camera shake effect
 */
export function useCameraShake(
  delay: number = 0,
  duration: number = 30,
  intensity: number = 5,
  type: "subtle" | "medium" | "heavy" = "medium"
) {
  const frame = useCurrentFrame();

  // Shake progress
  const shakeProgress = interpolate(
    frame,
    [delay, delay + duration / 2, delay + duration],
    [0, 1, 0],
    { extrapolateRight: "clamp" }
  );

  const magnitude = shakeProgress * intensity;

  switch (type) {
    case "subtle":
      return {
        x: Math.sin(frame * 0.5) * magnitude * 0.3,
        y: Math.cos(frame * 0.5) * magnitude * 0.3,
      };
    case "medium":
      return {
        x: (random(frame * 1) - 0.5) * magnitude * 2,
        y: (random(frame * 2) - 0.5) * magnitude * 2,
      };
    case "heavy":
      return {
        x: (random(frame * 3) - 0.5) * magnitude * 3,
        y: (random(frame * 4) - 0.5) * magnitude * 3,
      };
    default:
      return { x: 0, y: 0 };
  }
}

/**
 * Use Ken Burns effect
 */
export function useKenBurns(
  delay: number = 0,
  duration: number = 180,
  direction: "in" | "out" = "in",
  panDirection: "left" | "right" | "up" | "down" = "right",
  panAmount: number = 50
) {
  const frame = useCurrentFrame();

  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Smooth easing
  const eased = progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

  // Scale
  const scale = direction === "in"
    ? 1 + eased * 0.3
    : 1.3 - eased * 0.3;

  // Pan
  const panX = panDirection === "left"
    ? -panAmount * eased
    : panDirection === "right"
      ? panAmount * eased
      : 0;
  const panY = panDirection === "up"
    ? -panAmount * eased
    : panDirection === "down"
      ? panAmount * eased
      : 0;

  return {
    transform: `translate(${panX}px, ${panY}px) scale(${scale})`,
  };
}
