import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

/**
 * AnimatedTransition - 动画过渡组件
 *
 * 使用framer-motion创建平滑的过渡效果
 * 支持淡入淡出、缩放、滑动等多种过渡方式
 */
interface AnimatedTransitionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  type?: "fade" | "scale" | "slide" | "bounce";
  direction?: "up" | "down" | "left" | "right";
}

export const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({
  children,
  delay = 0,
  duration = 30,
  type = "fade",
  direction = "up",
}) => {
  const frame = useCurrentFrame();

  // 计算动画进度
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  const getTransform = () => {
    switch (type) {
      case "fade":
        return { opacity: progress };
      case "scale":
        return {
          opacity: progress,
          transform: `scale(${0.5 + progress * 0.5})`,
        };
      case "slide": {
        const offset = 100 * (1 - progress);
        const position =
          direction === "up"
            ? `translateY(${offset}px)`
            : direction === "down"
              ? `translateY(${-offset}px)`
              : direction === "left"
                ? `translateX(${offset}px)`
                : `translateX(${-offset}px)`;
        return {
          opacity: progress,
          transform: position,
        };
      }
      case "bounce": {
        const bounceProgress =
          progress < 0.5 ? progress * 2 * 1.2 : 1 - (1 - progress) * 2 * 0.2;
        return {
          opacity: progress,
          transform: `scale(${bounceProgress})`,
        };
      }
      default:
        return { opacity: progress };
    }
  };

  return <div style={getTransform()}>{children}</div>;
};

/**
 * StaggerTransition - 交错过渡效果
 *
 * 用于列表或多个元素的交错动画
 */
interface StaggerTransitionProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  itemDelay?: number;
  type?: "fade" | "scale" | "slide";
}

export const StaggerTransition: React.FC<StaggerTransitionProps> = ({
  children,
  staggerDelay = 5,
  itemDelay = 10,
  type = "fade",
}) => {
  const frame = useCurrentFrame();

  return (
    <>
      {React.Children.map(children, (child, index) => {
        const delay = staggerDelay + index * itemDelay;
        const progress = interpolate(frame, [delay, delay + 30], [0, 1], {
          extrapolateRight: "clamp",
        });

        const getTransform = () => {
          switch (type) {
            case "fade":
              return { opacity: progress };
            case "scale":
              return {
                opacity: progress,
                transform: `scale(${0.5 + progress * 0.5})`,
              };
            case "slide":
              return {
                opacity: progress,
                transform: `translateY(${(1 - progress) * 50}px)`,
              };
            default:
              return { opacity: progress };
          }
        };

        return <div style={getTransform()}>{child}</div>;
      })}
    </>
  );
};

/**
 * ZoomInTransition - 缩放进入效果
 * 适用于强调重要内容
 */
export const ZoomInTransition: React.FC<{
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}> = ({ children, delay = 0, duration = 30 }) => {
  return (
    <AnimatedTransition type="scale" delay={delay} duration={duration}>
      {children}
    </AnimatedTransition>
  );
};

/**
 * FadeInTransition - 淡入效果
 * 最常用的过渡方式
 */
export const FadeInTransition: React.FC<{
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}> = ({ children, delay = 0, duration = 30 }) => {
  return (
    <AnimatedTransition type="fade" delay={delay} duration={duration}>
      {children}
    </AnimatedTransition>
  );
};

/**
 * SlideInTransition - 滑动进入效果
 * 适用于侧边栏或从边缘进入的内容
 */
export const SlideInTransition: React.FC<{
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}> = ({ children, delay = 0, duration = 30, direction = "up" }) => {
  return (
    <AnimatedTransition
      type="slide"
      delay={delay}
      duration={duration}
      direction={direction}
    >
      {children}
    </AnimatedTransition>
  );
};

/**
 * ParallaxLayer - 视差滚动层
 *
 * 创建多层视差效果，增强场景深度感
 */
export const ParallaxLayer: React.FC<{
  children: React.ReactNode;
  speed?: number;
  offset?: number;
}> = ({ children, speed = 1, offset = 0 }) => {
  const frame = useCurrentFrame();

  const y = interpolate(frame, [0, 120], [offset, offset + speed * 100]);

  return (
    <div
      style={{
        position: "absolute",
        transform: `translateY(${y}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};
