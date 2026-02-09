import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useCurrentFrame, interpolate } from "remotion";

/**
 * SpringAnimation - 物理弹簧动画组件
 *
 * 使用react-spring创建基于物理的动画效果
 * 包括弹性、摆动、弹跳等自然动画
 */
interface SpringAnimationProps {
  children: React.ReactNode;
  type?: "bounce" | "swing" | "elastic" | "wobble";
  delay?: number;
  tension?: number;
  friction?: number;
}

export const SpringAnimation: React.FC<SpringAnimationProps> = ({
  children,
  type = "bounce",
  delay = 0,
  tension = 300,
  friction = 10,
}) => {
  const frame = useCurrentFrame();
  const shouldAnimate = frame >= delay;

  const spring = useSpring({
    from: {
      scale: 0,
      rotate: 0,
      opacity: 0,
    },
    to: shouldAnimate
      ? {
          scale: 1,
          rotate: 0,
          opacity: 1,
        }
      : {
          scale: 0,
          rotate: type === "swing" ? -15 : 0,
          opacity: 0,
        },
    config: {
      tension,
      friction,
    },
    delay: delay * 16.67, // 转换为毫秒
  });

  const getTransform = () => {
    switch (type) {
      case "bounce":
        return {
          transform: spring.scale.to((s) => `scale(${s})`),
          opacity: spring.opacity,
        };

      case "swing":
        return {
          transform: spring.rotate.to((r) => `rotate(${r}deg)`),
          opacity: spring.opacity,
        };

      case "elastic":
        return {
          transform: spring.scale.to((s) => `scale(${0.8 + s * 0.2})`),
          opacity: spring.opacity,
        };

      case "wobble":
        return {
          transform: spring.scale.to(
            (s) => `scale(${1 + Math.sin(s * Math.PI * 2) * 0.1})`,
          ),
          opacity: spring.opacity,
        };

      default:
        return {
          transform: spring.scale.to((s) => `scale(${s})`),
          opacity: spring.opacity,
        };
    }
  };

  return <animated.div style={getTransform()}>{children}</animated.div>;
};

/**
 * ElasticText - 弹性文字效果
 *
 * 文字字符逐个弹性出现
 */
export const ElasticText: React.FC<{
  text: string;
  delay?: number;
  stagger?: number;
  className?: string;
}> = ({ text, delay = 0, stagger = 3, className = "" }) => {
  const frame = useCurrentFrame();

  return (
    <span className={className}>
      {text.split("").map((char, index) => {
        const charDelay = delay + index * stagger;
        const progress = interpolate(
          frame,
          [charDelay, charDelay + 20],
          [0, 1],
          {
            extrapolateRight: "clamp",
          },
        );

        const yOffset = interpolate(progress, [0, 1], [-50, 0], {
          extrapolateRight: "clamp",
        });
        const rotate = interpolate(progress, [0, 1], [-15, 0], {
          extrapolateRight: "clamp",
        });

        return (
          <span
            key={index}
            style={{
              display: "inline-block",
              transform: `translateY(${yOffset}px) rotate(${rotate}deg)`,
              opacity: progress,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
};

/**
 * PulseAnimation - 脉冲动画
 *
 * 持续的缩放脉冲效果
 */
export const PulseAnimation: React.FC<{
  children: React.ReactNode;
  minScale?: number;
  maxScale?: number;
}> = ({ children, minScale = 0.95, maxScale = 1.05 }) => {
  const frame = useCurrentFrame();

  const scale = interpolate(
    frame % 120,
    [0, 60, 120],
    [minScale, maxScale, minScale],
    { extrapolateRight: "clamp" },
  );

  return (
    <animated.div
      style={{
        transform: `scale(${scale})`,
        display: "inline-block",
      }}
    >
      {children}
    </animated.div>
  );
};

/**
 * ShakeAnimation - 抖动动画
 *
 * 警告或强调时使用
 */
export const ShakeAnimation: React.FC<{
  children: React.ReactNode;
  intensity?: number;
}> = ({ children, intensity = 10 }) => {
  const frame = useCurrentFrame();

  const x = interpolate(
    frame % 30,
    [0, 7.5, 15, 22.5, 30],
    [0, intensity, 0, -intensity, 0],
    { extrapolateRight: "clamp" },
  );

  return (
    <animated.div
      style={{
        transform: `translateX(${x}px)`,
        display: "inline-block",
      }}
    >
      {children}
    </animated.div>
  );
};

/**
 * FloatAnimation - 浮动动画
 *
 * 元素上下浮动，营造漂浮感
 */
export const FloatAnimation: React.FC<{
  children: React.ReactNode;
  distance?: number;
  delay?: number;
}> = ({ children, distance = 20, delay = 0 }) => {
  const frame = useCurrentFrame();
  const adjustedFrame = frame - delay;

  if (adjustedFrame < 0) {
    return <>{children}</>;
  }

  const y = interpolate(adjustedFrame % 120, [0, 60, 120], [0, -distance, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <animated.div
      style={{
        transform: `translateY(${y}px)`,
        display: "inline-block",
      }}
    >
      {children}
    </animated.div>
  );
};

/**
 * RotateAnimation - 旋转动画
 *
 * 持续旋转效果
 */
export const RotateAnimation: React.FC<{
  children: React.ReactNode;
  speed?: number;
  delay?: number;
}> = ({ children, speed = 1, delay = 0 }) => {
  const frame = useCurrentFrame();
  const adjustedFrame = Math.max(0, frame - delay);

  const rotate = interpolate(adjustedFrame, [0, 60], [0, 360 * speed]);

  return (
    <animated.div
      style={{
        transform: `rotate(${rotate}deg)`,
        display: "inline-block",
      }}
    >
      {children}
    </animated.div>
  );
};
