/**
 * Enhanced Animation Hooks
 *
 * Provides reusable animation logic for scenes
 */

import { useCurrentFrame, interpolate } from "remotion";

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
