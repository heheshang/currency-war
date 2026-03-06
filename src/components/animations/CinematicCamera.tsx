/**
 * CinematicCamera - 电影感镜头组件
 *
 * 模拟电影镜头语言，提供平移、变焦、推拉、倾斜、焦点切换等效果
 */

import React from "react";
import { useCurrentFrame, interpolate, random } from "remotion";

export type CameraMovementType =
  | "pan"        // 平移镜头
  | "zoom"       // 变焦镜头
  | "dolly"      // 推拉镜头
  | "tilt"       // 倾斜镜头
  | "rackFocus"  // 焦点切换
  | "tracking"   // 跟踪镜头
  | "orbital";   // 环绕镜头

export type CameraDirection = "left" | "right" | "up" | "down";
export type EasingType = "linear" | "easeIn" | "easeOut" | "easeInOut" | "smooth";

interface CinematicCameraProps {
  /** 子元素 */
  children: React.ReactNode;
  /** 镜头运动类型 */
  movement?: CameraMovementType;
  /** 运动方向（用于 pan/tilt） */
  direction?: CameraDirection;
  /** 开始帧 */
  startFrame?: number;
  /** 持续帧数 */
  duration?: number;
  /** 运动幅度（像素或百分比） */
  amount?: number;
  /** 缩放比例（用于 zoom/dolly） */
  zoomScale?: number;
  /** 是否往返运动（来回） */
  pingPong?: boolean;
  /** 缓动类型 */
  easing?: EasingType;
  /** 焦点目标索引（用于 rackFocus） */
  focusTarget?: number;
  /** 焦点过渡时长 */
  focusDuration?: number;
  /** 自定义 className */
  className?: string;
}

/**
 * 缓动函数
 */
function applyEasing(progress: number, easing: EasingType): number {
  switch (easing) {
    case "easeIn":
      return progress * progress;
    case "easeOut":
      return 1 - (1 - progress) * (1 - progress);
    case "easeInOut":
      return progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    case "smooth":
      return progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    case "linear":
    default:
      return progress;
  }
}

/**
 * 计算镜头位置和变换
 */
function calculateCameraTransform(
  progress: number,
  movement: CameraMovementType,
  direction: CameraDirection,
  amount: number,
  zoomScale: number,
  pingPong: boolean,
  easing: EasingType
): { transform: string; origin: string } {
  const easedProgress = applyEasing(progress, easing);

  // 往返运动的进度计算
  const actualProgress = pingPong
    ? easedProgress < 0.5
      ? easedProgress * 2
      : 2 - easedProgress * 2
    : easedProgress;

  switch (movement) {
    case "pan": {
      const xOffset = direction === "left"
        ? -amount * actualProgress
        : direction === "right"
          ? amount * actualProgress
          : 0;
      const yOffset = direction === "up"
        ? -amount * actualProgress
        : direction === "down"
          ? amount * actualProgress
          : 0;
      return {
        transform: `translate(${xOffset}px, ${yOffset}px)`,
        origin: "center center",
      };
    }

    case "zoom": {
      const scale = 1 + (zoomScale - 1) * actualProgress;
      return {
        transform: `scale(${scale})`,
        origin: "center center",
      };
    }

    case "dolly": {
      // 推拉：向目标移动（zoom in）或远离目标（zoom out）
      const scale = zoomScale > 1
        ? 1 + (zoomScale - 1) * actualProgress
        : 1 - (1 - zoomScale) * actualProgress;
      return {
        transform: `scale(${scale})`,
        origin: "center center",
      };
    }

    case "tilt": {
      const rotateX = direction === "up"
        ? -amount * actualProgress
        : direction === "down"
          ? amount * actualProgress
          : 0;
      return {
        transform: `perspective(1000px) rotateX(${rotateX}deg)`,
        origin: "center center",
      };
    }

    case "tracking": {
      // 跟踪：平滑的横向移动
      const xOffset = direction === "left"
        ? -amount * actualProgress
        : direction === "right"
          ? amount * actualProgress
          : 0;
      return {
        transform: `translateX(${xOffset}px)`,
        origin: "center center",
      };
    }

    case "orbital": {
      // 环绕：圆形运动
      const angle = actualProgress * Math.PI * 2;
      const xOffset = Math.sin(angle) * amount;
      const yOffset = Math.cos(angle) * amount - amount;
      return {
        transform: `translate(${xOffset}px, ${yOffset}px) rotate(${actualProgress * 360}deg)`,
        origin: "center center",
      };
    }

    case "rackFocus":
    default:
      return {
        transform: "none",
        origin: "center center",
      };
  }
}

/**
 * CinematicCamera - 电影感镜头组件
 *
 * @example
 * // 平移镜头
 * <CinematicCamera movement="pan" direction="left" amount={100} duration={60}>
 *   <Scene />
 * </CinematicCamera>
 *
 * // 变焦镜头
 * <CinematicCamera movement="zoom" zoomScale={1.5} duration={45}>
 *   <Scene />
 * </CinematicCamera>
 *
 * // 推拉镜头
 * <CinematicCamera movement="dolly" zoomScale={2} duration={60}>
 *   <Scene />
 * </CinematicCamera>
 */
export const CinematicCamera: React.FC<CinematicCameraProps> = ({
  children,
  movement = "pan",
  direction = "right",
  startFrame = 0,
  duration = 60,
  amount = 100,
  zoomScale = 1.5,
  pingPong = false,
  easing = "easeInOut",
  className,
}) => {
  const frame = useCurrentFrame();

  // 计算进度
  const progress = interpolate(
    frame,
    [startFrame, startFrame + duration],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  // 计算变换
  const { transform, origin } = calculateCameraTransform(
    progress,
    movement,
    direction,
    amount,
    zoomScale,
    pingPong,
    easing
  );

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        transform,
        transformOrigin: origin,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

/**
 * MultiFocusContainer - 多焦点容器（用于 rackFocus）
 */
interface MultiFocusContainerProps {
  children: React.ReactNode[];
  /** 当前焦点索引 */
  currentFocus: number;
  /** 焦点切换时长 */
  transitionDuration?: number;
  /** 背景模糊程度 */
  blurAmount?: number;
}

export const MultiFocusContainer: React.FC<MultiFocusContainerProps> = ({
  children,
  currentFocus,
  transitionDuration = 30,
  blurAmount = 5,
}) => {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      {React.Children.map(children, (child, index) => {
        const isFocused = index === currentFocus;
        const isTransitioning = Math.abs(index - currentFocus) <= 1;

        // 计算模糊和缩放
        const blur = isFocused ? 0 : isTransitioning ? blurAmount * 0.5 : blurAmount;
        const scale = isFocused ? 1 : isTransitioning ? 0.95 : 0.9;
        const opacity = isFocused ? 1 : isTransitioning ? 0.5 : 0.2;

        return (
          <div
            style={{
              position: "absolute",
              inset: 0,
              filter: `blur(${blur}px)`,
              transform: `scale(${scale})`,
              opacity,
              transition: `all ${transitionDuration / 30}s ease-in-out`,
              willChange: "filter, transform, opacity",
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

/**
 * RackFocusCamera - 焦点切换镜头
 */
interface RackFocusCameraProps {
  children: React.ReactNode[];
  /** 当前焦点索引 */
  focusIndex: number;
  /** 切换持续帧数 */
  duration?: number;
}

export const RackFocusCamera: React.FC<RackFocusCameraProps> = ({
  children,
  focusIndex,
  duration = 30,
}) => {
  return (
    <MultiFocusContainer
      currentFocus={focusIndex}
      transitionDuration={duration}
      blurAmount={3}
    >
      {children}
    </MultiFocusContainer>
  );
};

/**
 * CameraShake - 镜头震动效果
 */
interface CameraShakeProps {
  /** 子元素 */
  children: React.ReactNode;
  /** 触发帧 */
  startFrame?: number;
  /** 震动持续帧数 */
  duration?: number;
  /** 震动强度 */
  intensity?: number;
  /** 震动类型 */
  type?: "subtle" | "medium" | "heavy" | "earthquake";
}

export const CameraShake: React.FC<CameraShakeProps> = ({
  children,
  startFrame = 0,
  duration = 30,
  intensity = 5,
  type = "medium",
}) => {
  const frame = useCurrentFrame();

  // 震动进度
  const shakeProgress = interpolate(
    frame,
    [startFrame, startFrame + duration / 2, startFrame + duration],
    [0, 1, 0],
    { extrapolateRight: "clamp" }
  );

  // 根据类型调整震动模式
  const getShakeOffset = (progress: number): { x: number; y: number } => {
    const magnitude = progress * intensity;

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
      case "earthquake":
        return {
          x: Math.sin(frame * 0.3) * magnitude * 2 + (random(frame * 5) - 0.5) * magnitude,
          y: Math.cos(frame * 0.4) * magnitude * 2 + (random(frame * 6) - 0.5) * magnitude,
        };
      default:
        return { x: 0, y: 0 };
    }
  };

  const { x, y } = getShakeOffset(shakeProgress);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        transform: `translate(${x}px, ${y}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

/**
 * KenBurnsEffect - 肯·布朗斯效果（缓慢的缩放和平移）
 */
interface KenBurnsEffectProps {
  children: React.ReactNode;
  /** 缩放方向 */
  direction?: "in" | "out";
  /** 持续帧数 */
  duration?: number;
  /** 平移方向 */
  panDirection?: CameraDirection;
  /** 平移幅度 */
  panAmount?: number;
  /** 缓动类型 */
  easing?: EasingType;
}

export const KenBurnsEffect: React.FC<KenBurnsEffectProps> = ({
  children,
  direction = "in",
  duration = 180,
  panDirection = "right",
  panAmount = 50,
  easing = "smooth",
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [0, duration],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  const easedProgress = applyEasing(progress, easing);

  // 缩放
  const scale = direction === "in"
    ? 1 + easedProgress * 0.3
    : 1.3 - easedProgress * 0.3;

  // 平移
  const panX = panDirection === "left"
    ? -panAmount * easedProgress
    : panDirection === "right"
      ? panAmount * easedProgress
      : 0;
  const panY = panDirection === "up"
    ? -panAmount * easedProgress
    : panDirection === "down"
      ? panAmount * easedProgress
      : 0;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        transform: `translate(${panX}px, ${panY}px) scale(${scale})`,
        transformOrigin: "center center",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

/**
 * 预定义的镜头效果
 */

// 缓慢的平移镜头
export const SlowPan: React.FC<{
  children: React.ReactNode;
  direction?: CameraDirection;
  amount?: number;
  duration?: number;
}> = ({ children, direction = "right", amount = 50, duration = 120 }) => (
  <CinematicCamera
    movement="pan"
    direction={direction}
    amount={amount}
    duration={duration}
    easing="smooth"
  >
    {children}
  </CinematicCamera>
);

// 推进镜头
export const DollyIn: React.FC<{
  children: React.ReactNode;
  scale?: number;
  duration?: number;
}> = ({ children, scale = 1.5, duration = 60 }) => (
  <CinematicCamera
    movement="dolly"
    zoomScale={scale}
    duration={duration}
    easing="easeInOut"
  >
    {children}
  </CinematicCamera>
);

// 拉出镜头
export const DollyOut: React.FC<{
  children: React.ReactNode;
  scale?: number;
  duration?: number;
}> = ({ children, scale = 0.7, duration = 60 }) => (
  <CinematicCamera
    movement="dolly"
    zoomScale={scale}
    duration={duration}
    easing="easeInOut"
  >
    {children}
  </CinematicCamera>
);

// 震动效果
export const ImpactShake: React.FC<{
  children: React.ReactNode;
  intensity?: "subtle" | "medium" | "heavy";
  duration?: number;
}> = ({ children, intensity = "medium", duration = 30 }) => (
  <CameraShake type={intensity} duration={duration}>
    {children}
  </CameraShake>
);

// 肯·布朗斯效果
export const CinematicKenBurns: React.FC<{
  children: React.ReactNode;
  direction?: "in" | "out";
  panDirection?: CameraDirection;
  duration?: number;
}> = ({ children, direction = "in", panDirection = "right", duration = 180 }) => (
  <KenBurnsEffect
    direction={direction}
    panDirection={panDirection}
    duration={duration}
  >
    {children}
  </KenBurnsEffect>
);
