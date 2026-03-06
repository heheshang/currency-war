/**
 * SceneTransition - 场景过渡组件
 *
 * 提供统一的电影感场景过渡效果
 * 支持多种过渡类型：淡入淡出、溶解、滑动、擦除、缩放、模糊
 */

import React from "react";
import { useCurrentFrame, interpolate, AbsoluteFill } from "remotion";

// 从 UIAnimations 重新导出暗角效果
export { VignetteOverlay } from "./UIAnimations";

export type TransitionType =
  | "fade"         // 淡入淡出（默认）
  | "dissolve"     // 溶解效果
  | "slideLeft"    // 向左滑动
  | "slideRight"   // 向右滑动
  | "slideUp"      // 向上滑动
  | "slideDown"    // 向下滑动
  | "wipeLeft"     // 从左擦除
  | "wipeRight"    // 从右擦除
  | "wipeUp"       // 从上擦除
  | "wipeDown"     // 从下擦除
  | "zoomIn"       // 缩放进入
  | "zoomOut"      // 缩放退出
  | "blur"         // 模糊过渡
  | "crossDissolve"; // 交叉溶解（双场景）

export type EasingFunction = "linear" | "easeIn" | "easeOut" | "easeInOut" | "easeInOutCubic" | "easeInOutSine";

interface SceneTransitionProps {
  /** 当前场景内容 */
  children: React.ReactNode;
  /** 下一场景内容（用于 crossDissolve） */
  nextScene?: React.ReactNode;
  /** 过渡类型 */
  type?: TransitionType;
  /** 开始帧 */
  startFrame?: number;
  /** 持续帧数 */
  duration?: number;
  /** 遮罩/背景颜色 */
  maskColor?: string;
  /** 是否反向播放（退出效果） */
  reverse?: boolean;
  /** 缓动函数 */
  easing?: EasingFunction;
  /** 自定义 className */
  className?: string;
}

/**
 * 缓动函数映射
 */
function applyEasing(progress: number, easing: EasingFunction): number {
  switch (easing) {
    case "easeIn":
      return progress * progress;
    case "easeOut":
      return 1 - (1 - progress) * (1 - progress);
    case "easeInOut":
      return progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    case "easeInOutCubic":
      return progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    case "easeInOutSine":
      return -(Math.cos(Math.PI * progress) - 1) / 2;
    case "linear":
    default:
      return progress;
  }
}

/**
 * SceneTransition - 场景过渡组件
 *
 * @example
 * // 淡入淡出过渡
 * <SceneTransition type="fade" duration={45}>
 *   <NewScene />
 * </SceneTransition>
 *
 * // 滑动过渡
 * <SceneTransition type="slideLeft" duration={30}>
 *   <NextScene />
 * </SceneTransition>
 *
 * // 交叉溶解（双场景）
 * <SceneTransition type="crossDissolve" duration={60}>
 *   <CurrentScene />
 * </SceneTransition>
 * <SceneTransition type="crossDissolve" duration={60} nextScene={<NewScene />} />
 */
export const SceneTransition: React.FC<SceneTransitionProps> = ({
  children,
  nextScene,
  type = "fade",
  startFrame = 0,
  duration = 45,
  maskColor: _maskColor = "#0d1117", // eslint-disable-line @typescript-eslint/no-unused-vars
  reverse = false,
  className,
}) => {
  const frame = useCurrentFrame();

  // 计算标准化进度（0-1）
  const normalizedProgress = interpolate(
    frame,
    [startFrame, startFrame + duration],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  // 应用缓动
  const easedProgress = applyEasing(
    reverse ? 1 - normalizedProgress : normalizedProgress,
    "easeInOutCubic"
  );

  // 交叉溶解特殊处理
  if (type === "crossDissolve" && nextScene) {
    return (
      <AbsoluteFill className={className}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 1 - easedProgress,
          }}
        >
          {children}
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: easedProgress,
          }}
        >
          {nextScene}
        </div>
      </AbsoluteFill>
    );
  }

  // 根据过渡类型计算样式
  const getTransitionStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: "absolute",
      inset: 0,
      willChange: "transform, opacity, filter",
    };

    switch (type) {
      case "fade":
        return {
          ...baseStyle,
          opacity: easedProgress,
        };

      case "dissolve": {
        // 使用 transform scale 和 opacity 结合模拟溶解
        const scale = 1 + (1 - easedProgress) * 0.3;
        const opacity = easedProgress;
        const blur = (1 - easedProgress) * 10;
        return {
          ...baseStyle,
          opacity,
          transform: `scale(${scale})`,
          filter: `blur(${blur}px)`,
        };
      }

      case "slideLeft":
        return {
          ...baseStyle,
          opacity: easedProgress,
          transform: `translateX(${(1 - easedProgress) * 100}%)`,
        };

      case "slideRight":
        return {
          ...baseStyle,
          opacity: easedProgress,
          transform: `translateX(${(easedProgress - 1) * 100}%)`,
        };

      case "slideUp":
        return {
          ...baseStyle,
          opacity: easedProgress,
          transform: `translateY(${(1 - easedProgress) * 100}%)`,
        };

      case "slideDown":
        return {
          ...baseStyle,
          opacity: easedProgress,
          transform: `translateY(${(easedProgress - 1) * 100}%)`,
        };

      case "wipeLeft": {
        // 使用 clipPath 实现擦除效果
        const clipProgress = easedProgress * 100;
        return {
          ...baseStyle,
          clipPath: `inset(0 ${100 - clipProgress}% 0 0)`,
        };
      }

      case "wipeRight": {
        const clipProgress = easedProgress * 100;
        return {
          ...baseStyle,
          clipPath: `inset(0 0 0 ${100 - clipProgress}%)`,
        };
      }

      case "wipeUp": {
        const clipProgress = easedProgress * 100;
        return {
          ...baseStyle,
          clipPath: `inset(${100 - clipProgress}% 0 0 0)`,
        };
      }

      case "wipeDown": {
        const clipProgress = easedProgress * 100;
        return {
          ...baseStyle,
          clipPath: `inset(0 0 ${100 - clipProgress}% 0)`,
        };
      }

      case "zoomIn": {
        const scale = easedProgress * 1.5 - 0.5;
        return {
          ...baseStyle,
          opacity: easedProgress,
          transform: `scale(${Math.max(0.5, scale)})`,
          transformOrigin: "center center",
        };
      }

      case "zoomOut": {
        const scale = 1.5 - easedProgress * 0.5;
        return {
          ...baseStyle,
          opacity: easedProgress,
          transform: `scale(${Math.max(0.5, scale)})`,
          transformOrigin: "center center",
        };
      }

      case "blur": {
        const blurAmount = (1 - easedProgress) * 20;
        const opacity = easedProgress;
        return {
          ...baseStyle,
          opacity,
          filter: `blur(${blurAmount}px)`,
        };
      }

      default:
        return {
          ...baseStyle,
          opacity: easedProgress,
        };
    }
  };

  return (
    <div style={getTransitionStyle()} className={className}>
      {children}
    </div>
  );
};

/**
 * TransitionOverlay - 过渡遮罩层
 *
 * 用于场景之间的遮罩过渡
 */
interface TransitionOverlayProps {
  /** 可见性 */
  visible: boolean;
  /** 过渡类型 */
  type?: "fade" | "black" | "white" | "blur";
  /** 持续时间 */
  duration?: number;
  /** 颜色（用于 black/white 类型） */
  color?: string;
}

export const TransitionOverlay: React.FC<TransitionOverlayProps> = ({
  visible,
  type = "fade",
  duration = 30,
  color = "#000",
}) => {
  const frame = useCurrentFrame();

  const getOverlayStyle = (): React.CSSProperties => {
    if (!visible) return { opacity: 0 };

    const progress = interpolate(frame, [0, duration], [0, 1], {
      extrapolateRight: "clamp",
    });

    switch (type) {
      case "fade":
        return {
          position: "absolute",
          inset: 0,
          backgroundColor: color,
          opacity: progress,
          zIndex: 100,
        };
      case "black":
        return {
          position: "absolute",
          inset: 0,
          backgroundColor: "#000",
          opacity: progress,
          zIndex: 100,
        };
      case "white":
        return {
          position: "absolute",
          inset: 0,
          backgroundColor: "#fff",
          opacity: progress,
          zIndex: 100,
        };
      case "blur": {
        const blurAmount = progress * 15;
        return {
          position: "absolute",
          inset: 0,
          backgroundColor: color,
          opacity: progress * 0.9,
          filter: `blur(${blurAmount}px)`,
          zIndex: 100,
        };
      }
      default:
        return { opacity: 0 };
    }
  };

  return <div style={getOverlayStyle()} />;
};

/**
 * SceneTransitionWithOverlay - 带遮罩的过渡
 *
 * 组合过渡效果和遮罩层，用于更复杂的过渡场景
 */
interface SceneTransitionWithOverlayProps {
  children: React.ReactNode;
  overlayType?: "fade" | "black" | "white" | "blur" | "none";
  overlayColor?: string;
  transitionType?: TransitionType;
  duration?: number;
}

export const SceneTransitionWithOverlay: React.FC<SceneTransitionWithOverlayProps> = ({
  children,
  overlayType = "black",
  overlayColor = "#0d1117",
  transitionType = "fade",
  duration = 45,
}) => {
  const frame = useCurrentFrame();
  const halfDuration = duration / 2;

  const isFirstHalf = frame < halfDuration;


  return (
    <AbsoluteFill>
      <SceneTransition
        type={transitionType}
        startFrame={isFirstHalf ? 0 : halfDuration}
        duration={halfDuration}
        reverse={isFirstHalf}
        maskColor={overlayColor}
      >
        {children}
      </SceneTransition>
      {overlayType !== "none" && (
        <TransitionOverlay
          visible={frame < duration}
          type={overlayType}
          duration={halfDuration}
          color={overlayColor}
        />
      )}
    </AbsoluteFill>
  );
};

/**
 * 预定义的过渡效果组合
 */

// 电影感淡入淡出
export const CinematicFade: React.FC<{ children: React.ReactNode; startFrame?: number; duration?: number }> = ({
  children,
  startFrame = 0,
  duration = 45,
}) => (
  <SceneTransition
    type="fade"
    startFrame={startFrame}
    duration={duration}
    easing="easeInOutCubic"
  >
    {children}
  </SceneTransition>
);

// 流畅滑动过渡
export const CinematicSlide: React.FC<{
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  startFrame?: number;
  duration?: number;
}> = ({ children, direction = "left", startFrame = 0, duration = 30 }) => {
  const typeMap = {
    left: "slideLeft",
    right: "slideRight",
    up: "slideUp",
    down: "slideDown",
  } as const;

  return (
    <SceneTransition
      type={typeMap[direction]}
      startFrame={startFrame}
      duration={duration}
      easing="easeInOutCubic"
    >
      {children}
    </SceneTransition>
  );
};

// 戏剧性缩放
export const CinematicZoom: React.FC<{
  children: React.ReactNode;
  direction?: "in" | "out";
  startFrame?: number;
}> = ({ children, direction = "in", startFrame = 0 }) => (
  <SceneTransition
    type={direction === "in" ? "zoomIn" : "zoomOut"}
    startFrame={startFrame}
    duration={40}
    easing="easeInOutCubic"
  >
    {children}
  </SceneTransition>
);

// 场景切换（带遮罩）
export const SceneCut: React.FC<{
  children: React.ReactNode;
  overlayType?: "black" | "white" | "blur";
  startFrame?: number;
}> = ({ children, overlayType = "black" }) => (
  <SceneTransitionWithOverlay
    transitionType="fade"
    overlayType={overlayType}
    duration={30}
  >
    {children}
  </SceneTransitionWithOverlay>
);
