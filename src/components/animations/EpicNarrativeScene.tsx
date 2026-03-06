/**
 * EpicNarrativeScene - 宏大叙事场景组件
 *
 * 提供电影级的史诗叙事效果
 * 支持多层视差、史诗字幕、戏剧性揭示等
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

// ============================================
// EpicNarrativeScene - 史诗叙事场景
// ============================================

export type NarrativeTheme =
  | "ancient" // 古代/历史
  | "war" // 战争
  | "finance" // 金融
  | "conspiracy" // 阴谋
  | "triumph" // 胜利
  | "tragedy" // 悲剧
  | "mystery"; // 神秘

export interface EpicNarrativeSceneProps {
  children: React.ReactNode;
  /** 叙事主题 */
  theme?: NarrativeTheme;
  /** 标题文本 */
  title?: string;
  /** 副标题 */
  subtitle?: string;
  /** 年份/时代标记 */
  era?: string;
  /** 开始帧 */
  startFrame?: number;
  /** 是否显示粒子效果 */
  showParticles?: boolean;
  /** 额外的背景层 */
  backgroundLayers?: React.ReactNode[];
}

const themeColors: Record<
  NarrativeTheme,
  { primary: string; secondary: string; accent: string; bg: string }
> = {
  ancient: {
    primary: "#FFD700",
    secondary: "#8B7355",
    accent: "#D4AF37",
    bg: "linear-gradient(180deg, #1a1510 0%, #2d2518 50%, #1a1510 100%)",
  },
  war: {
    primary: "#8B0000",
    secondary: "#4A0000",
    accent: "#FF4500",
    bg: "linear-gradient(180deg, #1a0a0a 0%, #2d1515 50%, #1a0a0a 100%)",
  },
  finance: {
    primary: "#00FF7F",
    secondary: "#006400",
    accent: "#FFD700",
    bg: "linear-gradient(180deg, #0a1a12 0%, #152d1f 50%, #0a1a12 100%)",
  },
  conspiracy: {
    primary: "#4B0082",
    secondary: "#2E0854",
    accent: "#9932CC",
    bg: "linear-gradient(180deg, #0a0a14 0%, #151528 50%, #0a0a14 100%)",
  },
  triumph: {
    primary: "#FFD700",
    secondary: "#FFA500",
    accent: "#FFFFFF",
    bg: "linear-gradient(180deg, #1a1500 0%, #2d2800 50%, #1a1500 100%)",
  },
  tragedy: {
    primary: "#696969",
    secondary: "#2F4F4F",
    accent: "#708090",
    bg: "linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)",
  },
  mystery: {
    primary: "#483D8B",
    secondary: "#191970",
    accent: "#7B68EE",
    bg: "linear-gradient(180deg, #0a0a1a 0%, #15152d 50%, #0a0a1a 100%)",
  },
};

export const EpicNarrativeScene: React.FC<EpicNarrativeSceneProps> = ({
  children,
  theme = "ancient",
  title,
  subtitle,
  era,
  startFrame = 0,
  showParticles = true,
  backgroundLayers,
}) => {
  const frame = useCurrentFrame();
  const colors = themeColors[theme];

  // 标题动画
  const titleOpacity = interpolate(
    frame,
    [startFrame + 15, startFrame + 45],
    [0, 1],
    {
      extrapolateRight: "clamp",
    },
  );
  const titleY = interpolate(
    frame,
    [startFrame + 15, startFrame + 45],
    [50, 0],
    {
      extrapolateRight: "clamp",
    },
  );
  const titleScale = spring({
    frame: frame - startFrame,
    fps: 30,
    config: { damping: 15, stiffness: 100 },
  });

  // 副标题动画
  const subtitleOpacity = interpolate(
    frame,
    [startFrame + 45, startFrame + 75],
    [0, 1],
    {
      extrapolateRight: "clamp",
    },
  );

  // 年份标记动画
  const eraOpacity = interpolate(
    frame,
    [startFrame + 60, startFrame + 90],
    [0, 1],
    {
      extrapolateRight: "clamp",
    },
  );

  // 背景脉动
  const bgPulse = interpolate(
    frame,
    [startFrame, startFrame + 60, startFrame + 120, startFrame + 180],
    [0.3, 0.5, 0.3, 0.5],
    { extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill style={{ background: colors.bg }}>
      {/* 主题氛围光 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 30%, ${colors.primary}${Math.round(
            bgPulse * 30,
          )
            .toString(16)
            .padStart(2, "0")} 0%, transparent 60%)`,
          opacity: bgPulse,
        }}
      />

      {/* 背景层 */}
      {backgroundLayers?.map((layer, index) => (
        <div key={index} style={{ position: "absolute", inset: 0 }}>
          {layer}
        </div>
      ))}

      {/* 粒子效果 */}
      {showParticles && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 20% 80%, ${colors.accent}10 0%, transparent 30%),
                         radial-gradient(circle at 80% 20%, ${colors.secondary}15 0%, transparent 40%)`,
          }}
        />
      )}

      {/* 年份/时代标记 */}
      {era && (
        <div
          style={{
            position: "absolute",
            top: "8%",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Cinzel, serif",
            fontSize: 24,
            color: colors.accent,
            letterSpacing: 8,
            opacity: eraOpacity,
            textTransform: "uppercase",
          }}
        >
          {era}
        </div>
      )}

      {/* 主标题 */}
      {title && (
        <div
          style={{
            position: "absolute",
            top: "25%",
            left: "50%",
            transform: `translateX(-50%) translateY(${titleY}px) scale(${titleScale})`,
            fontFamily: "Cinzel, serif",
            fontSize: 72,
            fontWeight: 700,
            color: colors.primary,
            textAlign: "center",
            opacity: titleOpacity,
            textShadow: `0 0 40px ${colors.primary}40, 0 0 80px ${colors.primary}20`,
            letterSpacing: 4,
          }}
        >
          {title}
        </div>
      )}

      {/* 副标题 */}
      {subtitle && (
        <div
          style={{
            position: "absolute",
            top: "42%",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Merriweather, serif",
            fontSize: 28,
            color: colors.secondary,
            fontStyle: "italic",
            textAlign: "center",
            opacity: subtitleOpacity,
            maxWidth: "80%",
          }}
        >
          {subtitle}
        </div>
      )}

      {/* 主内容 */}
      <div style={{ position: "absolute", inset: 0 }}>{children}</div>

      {/* 底部装饰线 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: interpolate(
            frame,
            [startFrame + 30, startFrame + 90],
            [0, 300],
            {
              extrapolateRight: "clamp",
            },
          ),
          height: 2,
          background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)`,
          opacity: subtitleOpacity,
        }}
      />
    </AbsoluteFill>
  );
};

// ============================================
// HistoricalPanorama - 历史全景场景
// ============================================

export interface HistoricalPanoramaProps {
  children: React.ReactNode;
  /** 年代范围 */
  era?: { start: number; end: number };
  /** 地理位置 */
  location?: string;
  /** 全景模式 */
  mode?: "timeline" | "geographic" | "thematic";
  /** 缩放级别 */
  zoomLevel?: "wide" | "medium" | "close";
  /** 开始帧 */
  startFrame?: number;
  /** 视差层数据 */
  parallaxLayers?: Array<{
    content: React.ReactNode;
    speed: number;
    depth: number;
  }>;
}

export const HistoricalPanorama: React.FC<HistoricalPanoramaProps> = ({
  children,
  era,
  location,
  mode = "timeline",
  zoomLevel = "wide",
  startFrame = 0,
  parallaxLayers = [],
}) => {
  const frame = useCurrentFrame();

  // 缩放动画
  const zoomScales = { wide: 1, medium: 1.2, close: 1.5 };
  const targetScale = zoomScales[zoomLevel];
  const scale = interpolate(
    frame,
    [startFrame, startFrame + 90],
    [0.8, targetScale],
    { extrapolateRight: "clamp" },
  );

  // 缓慢平移
  const panX = interpolate(
    frame,
    [startFrame, startFrame + 300],
    [0, mode === "timeline" ? 100 : 50],
    { extrapolateRight: "clamp" },
  );

  // 年代显示
  const eraOpacity = interpolate(
    frame,
    [startFrame + 30, startFrame + 60],
    [0, 1],
    {
      extrapolateRight: "clamp",
    },
  );

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
        overflow: "hidden",
      }}
    >
      {/* 视差层 */}
      {parallaxLayers.map((layer, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            inset: 0,
            transform: `translateX(${panX * layer.speed}px) scale(${scale})`,
            zIndex: layer.depth,
            opacity: interpolate(
              frame,
              [startFrame + index * 10, startFrame + 60 + index * 10],
              [0, 1],
              {
                extrapolateRight: "clamp",
              },
            ),
          }}
        >
          {layer.content}
        </div>
      ))}

      {/* 时间线/地理标记 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          opacity: eraOpacity,
        }}
      >
        {era && (
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 32,
              color: "#FFD700",
              letterSpacing: 4,
            }}
          >
            {era.start} - {era.end}
          </div>
        )}
        {location && (
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 20,
              color: "#B8860B",
              fontStyle: "italic",
            }}
          >
            {location}
          </div>
        )}
      </div>

      {/* 主内容 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>

      {/* 底部渐变 */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 100,
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 100%)",
        }}
      />
    </AbsoluteFill>
  );
};

// ============================================
// GrandRevealScene - 宏大揭示场景
// ============================================

export interface GrandRevealProps {
  children: React.ReactNode;
  /** 揭示文本 */
  revealText?: string;
  /** 揭示类型 */
  revealType?: "fade" | "zoom" | "sweep" | "shatter";
  /** 开始帧 */
  startFrame?: number;
  /** 高潮帧 */
  climaxFrame?: number;
  /** 背景效果 */
  backgroundEffect?: "particles" | "lightRays" | "fog" | "none";
}

export const GrandRevealScene: React.FC<GrandRevealProps> = ({
  children,
  revealText,
  // revealType preserved for future use
  startFrame = 0,
  climaxFrame = 60,
  backgroundEffect = "particles",
}) => {
  const frame = useCurrentFrame();

  // 揭示动画
  const revealProgress = interpolate(frame, [startFrame, climaxFrame], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 内容可见性
  const contentOpacity =
    revealProgress > 0.5 ? interpolate(revealProgress, [0.5, 1], [0, 1]) : 0;
  const contentScale = interpolate(revealProgress, [0.5, 1], [0.8, 1], {
    extrapolateRight: "clamp",
  });

  // 背景效果
  const bgIntensity = interpolate(
    frame,
    [startFrame, climaxFrame, climaxFrame + 30],
    [0, 1, 0.3],
    { extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill>
      {/* 背景效果 */}
      {backgroundEffect === "particles" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 50% 50%, rgba(255,215,0,${bgIntensity * 0.3}) 0%, transparent 70%)`,
          }}
        />
      )}

      {backgroundEffect === "lightRays" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `conic-gradient(from 0deg at 50% 50%, 
              transparent 0deg, 
              rgba(255,215,0,${bgIntensity * 0.2}) 10deg, 
              transparent 20deg,
              transparent 90deg,
              rgba(255,215,0,${bgIntensity * 0.2}) 100deg,
              transparent 110deg,
              transparent 180deg,
              rgba(255,215,0,${bgIntensity * 0.2}) 190deg,
              transparent 200deg,
              transparent 270deg,
              rgba(255,215,0,${bgIntensity * 0.2}) 280deg,
              transparent 290deg
            )`,
          }}
        />
      )}

      {/* 揭示文本 */}
      {revealText && revealProgress < 0.5 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 64,
              color: "#FFD700",
              textAlign: "center",
              opacity: interpolate(revealProgress, [0, 0.3, 0.5], [0, 1, 0]),
              transform: `scale(${interpolate(revealProgress, [0, 0.5], [0.5, 2])})`,
              textShadow: "0 0 50px rgba(255,215,0,0.8)",
            }}
          >
            {revealText}
          </div>
        </div>
      )}

      {/* 主内容 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: contentOpacity,
          transform: `scale(${contentScale})`,
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};

// ============================================
// CinematicTitleSequence - 电影级标题序列
// ============================================

export interface CinematicTitleSequenceProps {
  /** 标题行 */
  lines: Array<{
    text: string;
    style?: "primary" | "secondary" | "accent";
    delay?: number;
  }>;
  /** 主题 */
  theme?: NarrativeTheme;
  /** 开始帧 */
  startFrame?: number;
  /** 行间距 */
  lineHeight?: number;
}

export const CinematicTitleSequence: React.FC<CinematicTitleSequenceProps> = ({
  lines,
  theme = "ancient",
  startFrame = 0,
  lineHeight = 80,
}) => {
  const frame = useCurrentFrame();
  const colors = themeColors[theme];

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {lines.map((line, index) => {
        const delay = line.delay ?? index * 15;
        const opacity = interpolate(
          frame,
          [startFrame + delay, startFrame + delay + 30],
          [0, 1],
          { extrapolateRight: "clamp" },
        );
        const y = interpolate(
          frame,
          [startFrame + delay, startFrame + delay + 45],
          [30, 0],
          { extrapolateRight: "clamp" },
        );

        const styleMap = {
          primary: { fontSize: 56, color: colors.primary, fontWeight: 700 },
          secondary: {
            fontSize: 32,
            color: colors.secondary,
            fontWeight: 400,
            fontStyle: "italic" as const,
          },
          accent: {
            fontSize: 28,
            color: colors.accent,
            fontWeight: 300,
            letterSpacing: 8,
          },
        };

        const textStyle = styleMap[line.style || "primary"];

        return (
          <div
            key={index}
            style={{
              fontFamily: "Cinzel, serif",
              textAlign: "center",
              opacity,
              transform: `translateY(${y}px)`,
              marginBottom: index < lines.length - 1 ? lineHeight / 4 : 0,
              ...textStyle,
            }}
          >
            {line.text}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

// ============================================
// ThemeBackground - 主题背景
// ============================================

export interface ThemeBackgroundProps {
  theme: NarrativeTheme;
  animated?: boolean;
  startFrame?: number;
}

export const ThemeBackground: React.FC<ThemeBackgroundProps> = ({
  theme,
  animated = true,
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const colors = themeColors[theme];

  const pulse = animated
    ? interpolate(
        frame,
        [startFrame, startFrame + 60, startFrame + 120],
        [0.3, 0.6, 0.3],
        { extrapolateRight: "clamp" },
      )
    : 0.5;

  return (
    <AbsoluteFill style={{ background: colors.bg }}>
      {/* 顶部光晕 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: `radial-gradient(ellipse at 50% 0%, ${colors.primary}20 0%, transparent 70%)`,
          opacity: pulse,
        }}
      />

      {/* 底部光晕 */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: `radial-gradient(ellipse at 50% 100%, ${colors.secondary}20 0%, transparent 70%)`,
          opacity: pulse * 0.7,
        }}
      />

      {/* 边缘暗角 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          boxShadow: "inset 0 0 200px 100px rgba(0,0,0,0.8)",
        }}
      />
    </AbsoluteFill>
  );
};
