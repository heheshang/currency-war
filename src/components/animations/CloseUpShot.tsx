/**
 * CloseUpShot - 镜头特写系统
 *
 * 提供电影级的镜头特写效果
 * 支持焦点切换、戏剧性揭示、面部特写等
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

// ============================================
// CloseUpShot - 镜头特写
// ============================================

export interface CloseUpShotProps {
  children: React.ReactNode;
  /** 特写类型 */
  type?: "face" | "object" | "text" | "symbol";
  /** 特写强度 */
  intensity?: "subtle" | "medium" | "dramatic" | "extreme";
  /** 目标位置 */
  focusPosition?: { x: number; y: number };
  /** 开始帧 */
  startFrame?: number;
  /** 持续帧数 */
  duration?: number;
  /** 是否添加暗角 */
  vignette?: boolean;
  /** 是否添加景深模糊 */
  depthOfField?: boolean;
}

export const CloseUpShot: React.FC<CloseUpShotProps> = ({
  children,
  type = "object",
  intensity = "medium",
  focusPosition = { x: 50, y: 50 },
  startFrame = 0,
  duration = 60,
  vignette = true,
  depthOfField = true,
}) => {
  const frame = useCurrentFrame();

  // 强度对应的缩放值
  const intensityScales = {
    subtle: 1.1,
    medium: 1.3,
    dramatic: 1.5,
    extreme: 2,
  };

  // 计算缩放动画
  const progress = interpolate(
    frame,
    [
      startFrame,
      startFrame + duration * 0.3,
      startFrame + duration * 0.7,
      startFrame + duration,
    ],
    [0, 1, 1, 0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
  );

  const scale = interpolate(progress, [0, 1], [1, intensityScales[intensity]]);

  // 焦点偏移
  const focusOffset = {
    x: (50 - focusPosition.x) * (scale - 1) * 0.5,
    y: (50 - focusPosition.y) * (scale - 1) * 0.5,
  };

  // 暗角强度
  const vignetteIntensity = vignette
    ? interpolate(progress, [0, 1], [0, intensity === "extreme" ? 0.7 : 0.4])
    : 0;

  // 使用 type 进行条件判断（保留参数以备将来扩展）
  void type;

  return (
    <AbsoluteFill>
      {/* 主内容 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${scale}) translate(${focusOffset.x}px, ${focusOffset.y}px)`,
          transformOrigin: `${focusPosition.x}% ${focusPosition.y}%`,
        }}
      >
        {children}
      </div>

      {/* 景深模糊边缘 */}
      {depthOfField && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at ${focusPosition.x}% ${focusPosition.y}%, 
              transparent 20%, 
              rgba(0,0,0,${0.1 * progress}) 70%, 
              rgba(0,0,0,${0.3 * progress}) 100%)`,
            pointerEvents: "none",
          }}
        />
      )}

      {/* 暗角 */}
      {vignette && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            boxShadow: `inset 0 0 ${100 + 50 * vignetteIntensity}px ${50 * vignetteIntensity}px rgba(0,0,0,${vignetteIntensity})`,
            pointerEvents: "none",
          }}
        />
      )}
    </AbsoluteFill>
  );
};

// ============================================
// RackFocusReveal - 焦点切换揭示
// ============================================

export interface RackFocusRevealProps {
  /** 多个焦点内容 */
  focusPoints: Array<{
    content: React.ReactNode;
    position: { x: number; y: number };
    label?: string;
  }>;
  /** 当前焦点索引 */
  activeIndex: number;
  /** 切换持续帧数 */
  transitionDuration?: number;
  /** 模糊强度 */
  blurIntensity?: number;
  /** 开始帧 */
  startFrame?: number;
}

export const RackFocusReveal: React.FC<RackFocusRevealProps> = ({
  focusPoints,
  activeIndex,
  transitionDuration = 20,
  blurIntensity = 8,
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      {focusPoints.map((point, index) => {
        const isActive = index === activeIndex;
        const distance = Math.abs(index - activeIndex);

        // 模糊程度基于与焦点的距离
        const blur = isActive ? 0 : blurIntensity * distance;

        // 缩放和透明度
        const scale = isActive ? 1 : 0.95 - distance * 0.02;
        const opacity = isActive ? 1 : 0.6 - distance * 0.1;

        // 焦点过渡动画
        const transitionProgress = interpolate(
          frame,
          [startFrame, startFrame + transitionDuration],
          [0, 1],
          { extrapolateRight: "clamp" },
        );

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              filter: `blur(${blur}px)`,
              transform: `scale(${scale})`,
              opacity: opacity * transitionProgress,
              transition: `all ${transitionDuration / 30}s ease-out`,
            }}
          >
            {point.content}

            {/* 焦点标签 */}
            {point.label && isActive && (
              <div
                style={{
                  position: "absolute",
                  bottom: "10%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontFamily: "Cinzel, serif",
                  fontSize: 24,
                  color: "#FFD700",
                  textShadow: "0 0 20px rgba(255,215,0,0.5)",
                  opacity: transitionProgress,
                }}
              >
                {point.label}
              </div>
            )}
          </div>
        );
      })}

      {/* 焦点指示器 */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 12,
        }}
      >
        {focusPoints.map((_, index) => (
          <div
            key={index}
            style={{
              width: index === activeIndex ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: index === activeIndex ? "#FFD700" : "#666",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};

// ============================================
// DramaticRevealShot - 戏剧性揭示镜头
// ============================================

export interface DramaticRevealShotProps {
  children: React.ReactNode;
  /** 揭示方式 */
  revealMethod?: "zoom" | "sweep" | "shatter" | "dissolve" | "lightBurst";
  /** 开始帧 */
  startFrame?: number;
  /** 揭示持续帧数 */
  revealDuration?: number;
  /** 高潮帧（用于特效触发） */
  climaxFrame?: number;
  /** 是否添加光芒效果 */
  lightRays?: boolean;
  /** 颜色主题 */
  accentColor?: string;
}

export const DramaticRevealShot: React.FC<DramaticRevealShotProps> = ({
  children,
  revealMethod = "zoom",
  startFrame = 0,
  revealDuration = 45,
  climaxFrame,
  lightRays = true,
  accentColor = "#FFD700",
}) => {
  const frame = useCurrentFrame();
  const actualClimax = climaxFrame ?? startFrame + revealDuration * 0.7;

  // 揭示进度
  const revealProgress = interpolate(
    frame,
    [startFrame, startFrame + revealDuration],
    [0, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
  );

  // 高潮时刻的光芒强度
  const climaxIntensity = interpolate(
    frame,
    [actualClimax - 15, actualClimax, actualClimax + 30],
    [0, 1, 0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
  );

  // 根据揭示方法计算样式
  const getRevealStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: "absolute",
      inset: 0,
    };

    switch (revealMethod) {
      case "zoom": {
        const scale = interpolate(revealProgress, [0, 1], [1.5, 1]);
        const opacity = interpolate(revealProgress, [0, 0.3, 1], [0, 0.5, 1]);
        return { ...baseStyle, transform: `scale(${scale})`, opacity };
      }

      case "sweep": {
        const clipPath = `inset(0 ${(1 - revealProgress) * 100}% 0 0)`;
        return { ...baseStyle, clipPath, opacity: revealProgress };
      }

      case "shatter": {
        const scale = interpolate(revealProgress, [0, 0.5, 1], [0.8, 1.1, 1]);
        const blur = interpolate(revealProgress, [0, 0.5], [10, 0]);
        return {
          ...baseStyle,
          transform: `scale(${scale})`,
          filter: `blur(${blur}px)`,
        };
      }

      case "dissolve": {
        const opacity = revealProgress;
        const blur = interpolate(revealProgress, [0, 0.5], [20, 0]);
        return { ...baseStyle, opacity, filter: `blur(${blur}px)` };
      }

      case "lightBurst": {
        const scale = interpolate(revealProgress, [0, 0.5, 1], [0.3, 1.2, 1]);
        return {
          ...baseStyle,
          transform: `scale(${scale})`,
          opacity: revealProgress,
        };
      }

      default:
        return { ...baseStyle, opacity: revealProgress };
    }
  };

  return (
    <AbsoluteFill>
      {/* 光芒效果 */}
      {lightRays && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 50% 50%, 
              ${accentColor}${Math.round(climaxIntensity * 40)
                .toString(16)
                .padStart(2, "0")} 0%, 
              transparent 50%)`,
            pointerEvents: "none",
          }}
        />
      )}

      {/* 光线散射 */}
      {revealProgress > 0.5 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `conic-gradient(from 0deg at 50% 50%,
              transparent 0deg,
              ${accentColor}${Math.round((revealProgress - 0.5) * 20)
                .toString(16)
                .padStart(2, "0")} 10deg,
              transparent 20deg,
              transparent 90deg,
              ${accentColor}${Math.round((revealProgress - 0.5) * 20)
                .toString(16)
                .padStart(2, "0")} 100deg,
              transparent 110deg
            )`,
            opacity: climaxIntensity,
            pointerEvents: "none",
          }}
        />
      )}

      {/* 主内容 */}
      <div style={getRevealStyle()}>{children}</div>

      {/* 暗角 - 降低强度以显示更多内容 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          boxShadow: "inset 0 0 100px 50px rgba(0,0,0,0.4)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

// ============================================
// FaceReveal - 面部特写揭示
// ============================================

export interface FaceRevealProps {
  children: React.ReactNode;
  /** 人物名称 */
  name?: string;
  /** 人物头衔/描述 */
  title?: string;
  /** 开始帧 */
  startFrame?: number;
  /** 持续帧数 */
  duration?: number;
  /** 特写位置 */
  position?: "left" | "center" | "right";
  /** 是否添加聚光灯效果 */
  spotlight?: boolean;
}

export const FaceReveal: React.FC<FaceRevealProps> = ({
  children,
  name,
  title,
  startFrame = 0,
  duration = 90,
  position = "center",
  spotlight = true,
}) => {
  const frame = useCurrentFrame();

  // 入场动画
  const entryProgress = interpolate(
    frame,
    [startFrame, startFrame + 30],
    [0, 1],
    { extrapolateRight: "clamp" },
  );

  // 信息显示
  const infoProgress = interpolate(
    frame,
    [startFrame + 45, startFrame + 75],
    [0, 1],
    { extrapolateRight: "clamp" },
  );

  // 位置偏移
  const positionOffset = {
    left: { x: "20%", y: "50%" },
    center: { x: "50%", y: "50%" },
    right: { x: "80%", y: "50%" },
  };

  const springScale = spring({
    frame: frame - startFrame,
    fps: 30,
    config: { damping: 12, stiffness: 100 },
  });

  // 使用 duration 进行计算（保留参数）
  void duration;

  return (
    <AbsoluteFill>
      {/* 聚光灯效果 */}
      {spotlight && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at ${positionOffset[position].x} ${positionOffset[position].y}, 
              rgba(255,255,255,${entryProgress * 0.1}) 0%, 
              transparent 50%)`,
            pointerEvents: "none",
          }}
        />
      )}

      {/* 主内容 */}
      <div
        style={{
          position: "absolute",
          left: positionOffset[position].x,
          top: positionOffset[position].y,
          transform: `translate(-50%, -50%) scale(${springScale})`,
          opacity: entryProgress,
        }}
      >
        {children}
      </div>

      {/* 名字 */}
      {name && (
        <div
          style={{
            position: "absolute",
            bottom: "30%",
            left: positionOffset[position].x,
            transform: "translateX(-50%)",
            fontFamily: "Cinzel, serif",
            fontSize: 48,
            fontWeight: 700,
            color: "#FFD700",
            textShadow: "0 0 30px rgba(255,215,0,0.5)",
            opacity: infoProgress,
            textAlign: "center",
          }}
        >
          {name}
        </div>
      )}

      {/* 头衔 */}
      {title && (
        <div
          style={{
            position: "absolute",
            bottom: "22%",
            left: positionOffset[position].x,
            transform: "translateX(-50%)",
            fontFamily: "Merriweather, serif",
            fontSize: 24,
            fontStyle: "italic",
            color: "#B8860B",
            opacity: infoProgress,
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          {title}
        </div>
      )}

      {/* 装饰线 */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: interpolate(infoProgress, [0, 1], [0, 200]),
          height: 1,
          background:
            "linear-gradient(90deg, transparent, #FFD700, transparent)",
        }}
      />
    </AbsoluteFill>
  );
};

// ============================================
// CinematicZoom - 电影级缩放
// ============================================

export interface CinematicZoomProps {
  children: React.ReactNode;
  /** 缩放类型 */
  zoomType?: "dollyIn" | "dollyOut" | "crashZoom" | "slowReveal";
  /** 开始帧 */
  startFrame?: number;
  /** 持续帧数 */
  duration?: number;
  /** 缩放目标 */
  targetPosition?: { x: number; y: number };
  /** 缩放强度 */
  intensity?: number;
}

export const CinematicZoom: React.FC<CinematicZoomProps> = ({
  children,
  zoomType = "dollyIn",
  startFrame = 0,
  duration = 60,
  targetPosition = { x: 50, y: 50 },
  intensity = 1,
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [startFrame, startFrame + duration],
    [0, 1],
    { extrapolateRight: "clamp" },
  );

  const getZoomStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: "absolute",
      inset: 0,
      transformOrigin: `${targetPosition.x}% ${targetPosition.y}%`,
    };

    switch (zoomType) {
      case "dollyIn": {
        const scale = 1 + progress * 0.5 * intensity;
        return { ...baseStyle, transform: `scale(${scale})` };
      }

      case "dollyOut": {
        const scale = 1.5 - progress * 0.5 * intensity;
        return { ...baseStyle, transform: `scale(${scale})` };
      }

      case "crashZoom": {
        const crashProgress = Math.min(1, progress * 3);
        const scale = interpolate(crashProgress, [0, 0.5, 1], [1, 1.8, 1.3]);
        const overshoot =
          progress > 0.33 ? Math.sin((progress - 0.33) * 10) * 0.02 : 0;
        return { ...baseStyle, transform: `scale(${scale + overshoot})` };
      }

      case "slowReveal": {
        const scale = 1 + progress * 0.3 * intensity;
        const blur = interpolate(progress, [0, 0.5], [5, 0]);
        return {
          ...baseStyle,
          transform: `scale(${scale})`,
          filter: `blur(${blur}px)`,
        };
      }

      default:
        return baseStyle;
    }
  };

  return (
    <AbsoluteFill>
      <div style={getZoomStyle()}>{children}</div>
    </AbsoluteFill>
  );
};

// ============================================
// PullFocus - 焦点拉引
// ============================================

export interface PullFocusProps {
  children: React.ReactNode;
  /** 焦点路径 */
  focusPath: Array<{
    position: { x: number; y: number };
    duration: number;
  }>;
  /** 开始帧 */
  startFrame?: number;
  /** 模糊强度 */
  blurStrength?: number;
}

export const PullFocus: React.FC<PullFocusProps> = ({
  children,
  focusPath,
  startFrame = 0,
  blurStrength = 5,
}) => {
  const frame = useCurrentFrame();

  // 计算当前焦点位置
  let currentFocus = focusPath[0]?.position ?? { x: 50, y: 50 };
  let elapsedFrames = frame - startFrame;

  for (let i = 0; i < focusPath.length; i++) {
    if (elapsedFrames < focusPath[i].duration) {
      const nextPoint = focusPath[i + 1]?.position ?? focusPath[i].position;
      const segmentProgress = elapsedFrames / focusPath[i].duration;
      currentFocus = {
        x:
          focusPath[i].position.x +
          (nextPoint.x - focusPath[i].position.x) * segmentProgress,
        y:
          focusPath[i].position.y +
          (nextPoint.y - focusPath[i].position.y) * segmentProgress,
      };
      break;
    }
    elapsedFrames -= focusPath[i].duration;
    currentFocus = focusPath[i].position;
  }

  return (
    <AbsoluteFill>
      {/* 模糊遮罩 - 中心清晰，边缘模糊 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backdropFilter: `blur(${blurStrength}px)`,
          WebkitBackdropFilter: `blur(${blurStrength}px)`,
          maskImage: `radial-gradient(circle at ${currentFocus.x}% ${currentFocus.y}%, transparent 20%, black 50%)`,
          WebkitMaskImage: `radial-gradient(circle at ${currentFocus.x}% ${currentFocus.y}%, transparent 20%, black 50%)`,
        }}
      />

      {/* 清晰区域 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          clipPath: `circle(25% at ${currentFocus.x}% ${currentFocus.y}%)`,
        }}
      >
        {children}
      </div>

      {/* 过渡区域 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          clipPath: `circle(35% at ${currentFocus.x}% ${currentFocus.y}%)`,
          filter: `blur(${blurStrength * 0.5}px)`,
          opacity: 0.7,
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};
