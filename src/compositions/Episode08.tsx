import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Sequence,
} from "remotion";
import { Audio } from "../components/Audio";
import { Subtitles } from "../components/Subtitles";
import { getEpisodeBGM } from "../utils/audioConfig";

// 按Scene分离的字幕
import {
  openingSubs,
  kennedyAssassinationSubs,
  motivationSubs,
  silverHistorySubs,
  silverStandardEndSubs,
  kennedyDeathSubs,
  goldPoolSubs,
  sdrSubs,
  nixonGoldSubs,
  petrodollarSubs,
  reaganSubs,
  summarySubs,
} from "../subtitles/episode08";

/**
 * Episode08 - 第8集：诚实货币的最后抗争
 *
 * 场景字幕设计：
 * - 每个Scene有自己的字幕，从第0帧开始
 */

// ============================================
// 动画工具组件
// ============================================

/**
 * TypewriterText - 打字机效果文字
 */
const TypewriterText: React.FC<{
  text: string;
  delay?: number;
  charDuration?: number;
  style?: React.CSSProperties;
}> = ({ text, delay = 0, charDuration = 3, style }) => {
  const frame = useCurrentFrame();
  const charsShown = Math.max(0, Math.floor((frame - delay) / charDuration));
  const visibleText = text.slice(0, charsShown);
  const opacity = interpolate(frame, [delay, delay + 15], [0, 1]);

  return (
    <span style={{ ...style, opacity }}>
      {visibleText}
      {charsShown < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
};

/**
 * AnimatedNumber - 数字计数动画
 */
const AnimatedNumber: React.FC<{
  value: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
}> = ({ value, prefix = "", suffix = "", delay = 0, duration = 60, style }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });
  const displayValue = Math.round(value * progress);

  return <span style={style}>{prefix}{displayValue.toLocaleString()}{suffix}</span>;
};

/**
 * PulsingText - 脉动文字效果
 */
const PulsingText: React.FC<{
  children: React.ReactNode;
  delay?: number;
  intensity?: number;
  style?: React.CSSProperties;
}> = ({ children, delay = 0, style }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [delay, delay + 30, delay + 60],
    [0.7, 1, 0.7],
    { extrapolateRight: "clamp" }
  );

  return <span style={{ ...style, opacity }}>{children}</span>;
};

/**
 * ShimmerText - 闪烁文字效果
 */
const ShimmerText: React.FC<{
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ children, delay = 0, style }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 闪烁效果
  const shimmer = Math.sin(frame * 0.15) * 0.3 + 0.7;

  return (
    <span
      style={{
        ...style,
        opacity: progress * shimmer,
        textShadow: `0 0 10px rgba(255, 215, 0, ${shimmer * 0.5})`,
      }}
    >
      {children}
    </span>
  );
};

/**
 * BackgroundParticles - 背景粒子效果
 */
const BackgroundParticles: React.FC<{
  intensity?: number;
  color?: string;
  delay?: number;
}> = ({ intensity = 10, color = "#ffd700", delay = 0 }) => {
  const frame = useCurrentFrame();

  // 创建多个粒子
  const particles = Array.from({ length: intensity }, (_, i) => {
    const seed = i * 137.5; // 黄金角度
    const x = (Math.sin(seed) * 50 + 50 + (frame * 0.1 * (i % 3 + 1))) % 100;
    const y = (Math.cos(seed) * 50 + 50 + (frame * 0.05 * (i % 2 + 1))) % 100;
    const size = 2 + (i % 3);
    const opacity = (Math.sin(frame * 0.05 + i) + 1) / 2 * 0.5;

    return { x, y, size, opacity };
  });

  const progress = interpolate(frame, [delay, delay + 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: progress }}>
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: color,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 2}px ${color}`,
          }}
        />
      ))}
    </div>
  );
};

/**
 * GradientOverlay - 渐变叠加效果
 */
const GradientOverlay: React.FC<{
  colors?: string[];
  speed?: number;
}> = ({ colors = ["#0d1117", "#1a1a2e", "#0d1117"], speed = 0.02 }) => {
  const frame = useCurrentFrame();
  const index = Math.floor(frame * speed) % colors.length;
  const nextIndex = (index + 1) % colors.length;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(180deg, ${colors[index]} 0%, ${colors[nextIndex]} 100%)`,
        opacity: 0.3,
      }}
    />
  );
};

/**
 * VignetteEffect - 晕影效果
 */
const VignetteEffect: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
        pointerEvents: "none",
      }}
    />
  );
};

/**
 * CountdownTimer - 倒计时动画效果
 */
const CountdownTimer: React.FC<{
  from: number;
  to: number;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
}> = ({ from, to, delay = 0, duration = 60, style }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 倒计时数字
  const currentValue = Math.round(from - (from - to) * progress);

  // 闪烁效果在变化时
  const flash = Math.sin(frame * 0.3) > 0.8 ? 1.2 : 1;

  return (
    <span style={{ ...style, transform: `scale(${flash})` }}>
      {currentValue}
    </span>
  );
};

/**
 * TimelineConnector - 时间线连接器
 */
const TimelineConnector: React.FC<{
  delay?: number;
  duration?: number;
}> = ({ delay = 0, duration = 60 }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "30%",
        bottom: "30%",
        width: 2,
        background: "linear-gradient(180deg, transparent, #ffd700, transparent)",
        opacity: progress * 0.5,
        transform: "translateX(-50%)",
      }}
    />
  );
};

/**
 * ShockwaveEffect - 震动波效果
 */
const ShockwaveEffect: React.FC<{
  triggerFrame?: number;
}> = ({ triggerFrame = 0 }) => {
  const frame = useCurrentFrame();
  const distance = frame - triggerFrame;

  if (distance < 0 || distance > 30) return null;

  const progress = distance / 30;
  const size = progress * 100;
  const opacity = 1 - progress;

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: size,
        height: size,
        borderRadius: "50%",
        border: `2px solid rgba(239, 68, 68, ${opacity})`,
        pointerEvents: "none",
      }}
    />
  );
};

// ============================================
// 主场景组件
// ============================================

export const Episode08: React.FC = () => {
  const { fps } = useVideoConfig();

  const bgm = getEpisodeBGM("Episode08");

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgm && <Audio {...bgm} />}

      {/* Scene 1: Opening (30s = 900帧) */}
      <Sequence durationInFrames={30 * fps}>
        <OpeningScene />
        <Subtitles subtitles={openingSubs} />
      </Sequence>

      {/* Scene 2: Kennedy Assassination (60s = 1800帧) */}
      <Sequence from={30 * fps} durationInFrames={60 * fps}>
        <KennedyAssassinationScene />
        <Subtitles subtitles={kennedyAssassinationSubs} />
      </Sequence>

      {/* Scene 3: Motivation (60s = 1800帧) */}
      <Sequence from={90 * fps} durationInFrames={60 * fps}>
        <MotivationScene />
        <Subtitles subtitles={motivationSubs} />
      </Sequence>

      {/* Scene 4: Silver History (60s = 1800帧) */}
      <Sequence from={150 * fps} durationInFrames={60 * fps}>
        <SilverHistoryScene />
        <Subtitles subtitles={silverHistorySubs} />
      </Sequence>

      {/* Scene 5: Silver Standard End (60s = 1800帧) */}
      <Sequence from={210 * fps} durationInFrames={60 * fps}>
        <SilverStandardEndScene />
        <Subtitles subtitles={silverStandardEndSubs} />
      </Sequence>

      {/* Scene 6: Kennedy Death (60s = 1800帧) */}
      <Sequence from={270 * fps} durationInFrames={60 * fps}>
        <KennedyDeathScene />
        <Subtitles subtitles={kennedyDeathSubs} />
      </Sequence>

      {/* Scene 7: Gold Pool (60s = 1800帧) */}
      <Sequence from={330 * fps} durationInFrames={60 * fps}>
        <GoldPoolScene />
        <Subtitles subtitles={goldPoolSubs} />
      </Sequence>

      {/* Scene 8: SDR (60s = 1800帧) */}
      <Sequence from={390 * fps} durationInFrames={60 * fps}>
        <SDRScene />
        <Subtitles subtitles={sdrSubs} />
      </Sequence>

      {/* Scene 9: Nixon Gold (60s = 1800帧) */}
      <Sequence from={450 * fps} durationInFrames={60 * fps}>
        <NixonGoldScene />
        <Subtitles subtitles={nixonGoldSubs} />
      </Sequence>

      {/* Scene 10: Petrodollar (60s = 1800帧) */}
      <Sequence from={510 * fps} durationInFrames={60 * fps}>
        <PetrodollarScene />
        <Subtitles subtitles={petrodollarSubs} />
      </Sequence>

      {/* Scene 11: Reagan (60s = 1800帧) */}
      <Sequence from={570 * fps} durationInFrames={60 * fps}>
        <ReaganScene />
        <Subtitles subtitles={reaganSubs} />
      </Sequence>

      {/* Scene 12: Summary (30s = 900帧) */}
      <Sequence from={630 * fps} durationInFrames={30 * fps}>
        <SummaryScene />
        <Subtitles subtitles={summarySubs} />
      </Sequence>
    </AbsoluteFill>
  );
};

/**
 * OpeningScene - 开场场景
 * 增强版：添加粒子背景、震动效果、动态渐变
 */
const OpeningScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 背景动态渐变
  const gradientProgress = (frame * 0.01) % 1;
  const bgGradient = interpolate(gradientProgress, [0, 0.5, 1], [0, 1, 0]);
  const bgColor = interpolate(bgGradient, [0, 1], [0, 30]);

  // 震动效果（当帧数在特定范围时）
  const shakeX = frame > 150 && frame < 180 ? Math.sin(frame * 0.5) * 3 : 0;
  const shakeY = frame > 150 && frame < 180 ? Math.cos(frame * 0.5) * 3 : 0;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, #0d1117 0%, #1a1a2e ${30 + bgColor}%, #0d1117 100%)`,
      }}
    >
      <BackgroundParticles intensity={15} color="#ffd700" delay={0} />
      <VignetteEffect />

      {/* 标题 - 打字机效果 */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: `translateX(-50%) translate(${shakeX}px, ${shakeY}px)`,
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontSize: 48,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        <TypewriterText
          text="Episode 08"
          delay={0}
          charDuration={5}
          style={{
            opacity: interpolate(frame, [0, 30], [0, 1]),
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontFamily: "Merriweather, serif",
          fontSize: 32,
          textAlign: "center",
          opacity: interpolate(frame, [20, 50], [0, 1]),
        }}
      >
        <ShimmerText delay={20}>
          The Last Stand of Honest Money
        </ShimmerText>
      </div>

      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#9ca3af",
          fontFamily: "Merriweather, serif",
          fontSize: 24,
          textAlign: "center",
          opacity: interpolate(frame, [40, 70], [0, 1]),
        }}
      >
        <TypewriterText
          text="诚实货币的最后抗争"
          delay={40}
          charDuration={4}
        />
      </div>

      {/* 关键信息 - 脉动效果 */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ef4444",
            fontFamily: "JetBrains Mono, monospace",
            marginBottom: 10,
            opacity: interpolate(frame, [60, 100], [0, 1]),
            textShadow: `0 0 20px rgba(239, 68, 68, ${0.5 + Math.sin(frame * 0.1) * 0.3})`,
          }}
        >
          <CountdownTimer from={1964} to={1963} delay={60} duration={30} />
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#9ca3af",
            fontFamily: "Merriweather, serif",
            opacity: interpolate(frame, [90, 120], [0, 1]),
          }}
        >
          November 22, 1963
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Merriweather, serif",
          fontSize: 20,
          textAlign: "center",
          maxWidth: "70%",
          fontStyle: "italic",
          opacity: interpolate(frame, [120, 150], [0, 1]),
        }}
      >
        <PulsingText delay={120} intensity={0.15}>
          "In the modern history of the world, no event has been so brazen..."
        </PulsingText>
      </div>

      {/* 震动波效果 */}
      <ShockwaveEffect triggerFrame={150} />
    </AbsoluteFill>
  );
};

/**
 * KennedyAssassinationScene - 肯尼迪遇刺场景
 * 增强版：添加红色粒子、震动效果、数字动画
 */
const KennedyAssassinationScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 红色警示背景
  const redGlow = interpolate(frame, [0, 60, 120, 180], [0, 0.3, 0.1, 0.2], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, #1a1a2e 0%, rgba(139, 0, 0, ${redGlow}) 50%, #0d1117 100%)`,
      }}
    >
      <BackgroundParticles intensity={20} color="#ef4444" delay={30} />
      <VignetteEffect />

      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 48,
            color: "#ef4444",
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            marginBottom: 20,
            opacity: interpolate(frame, [0, 30], [0, 1]),
            textShadow: "30px rgba(239, 68, 68, 0.5)",
          }}
        >
          <TypewriterText text="THE ASSASSINATION" delay={0} charDuration={4} />
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#e8e8e8",
            fontFamily: "Merriweather, serif",
            opacity: interpolate(frame, [30, 60], [0, 1]),
          }}
        >
          President Kennedy was assassinated in Dallas, Texas
        </div>
      </div>

      {/* 统计 - 数字动画 */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ef4444",
            fontFamily: "JetBrains Mono, monospace",
            opacity: interpolate(frame, [60, 120], [0, 1]),
          }}
        >
          <AnimatedNumber value={18} delay={60} duration={90} />
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#9ca3af",
            fontFamily: "Merriweather, serif",
            marginTop: 10,
            opacity: interpolate(frame, [80, 140], [0, 1]),
          }}
        >
          key witnesses died within 3 years
        </div>
      </div>

      {/* 概率 - 闪烁效果 */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Merriweather, serif",
          fontSize: 18,
          textAlign: "center",
          maxWidth: "80%",
          opacity: interpolate(frame, [120, 180], [0, 1]),
        }}
      >
        <ShimmerText delay={120}>
          Probability: 10万万亿分之一
        </ShimmerText>
      </div>
    </AbsoluteFill>
  );
};

/**
 * MotivationScene - 动机分析场景
 * 增强版：添加金色粒子、重要文字打字机效果
 */
const MotivationScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <BackgroundParticles intensity={12} color="#ffd700" delay={0} />
      <GradientOverlay colors={["#0d1117", "#1a1a2e", "#0d1117"]} speed={0.01} />

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 40,
            color: "#ffd700",
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            marginBottom: 30,
            opacity: interpolate(frame, [0, 30], [0, 1]),
          }}
        >
          <TypewriterText text="Executive Order 11110" delay={0} charDuration={3} />
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#e8e8e8",
            fontFamily: "Merriweather, serif",
            maxWidth: "80%",
            lineHeight: 1.6,
            opacity: interpolate(frame, [30, 60], [0, 1]),
          }}
        >
          Signed June 4, 1963
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: interpolate(frame, [60, 120], [0, 1]),
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#ef4444",
            fontFamily: "Merriweather, serif",
            fontWeight: 600,
          }}
        >
          <ShimmerText delay={60}>
            "Authorize the Treasury to issue Silver Certificates"
          </ShimmerText>
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#9ca3af",
            fontFamily: "Merriweather, serif",
            marginTop: 20,
          }}
        >
          to reclaim monetary control from the Federal Reserve
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Merriweather, serif",
          fontSize: 18,
          textAlign: "center",
          opacity: interpolate(frame, [120, 180], [0, 1]),
        }}
      >
        <PulsingText delay={120}>
          This directly threatened the international bankers' control over money
        </PulsingText>
      </div>
    </AbsoluteFill>
  );
};

/**
 * SilverHistoryScene - 白银历史场景
 * 增强版：添加时间线、时间轴动画
 */
const SilverHistoryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#1a1a2e" }}>
      <BackgroundParticles intensity={8} color="#c0c0c0" delay={0} />
      <VignetteEffect />

      {/* 时间线连接器 */}
      <TimelineConnector delay={30} duration={90} />

      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 36,
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontWeight: 700,
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        <ShimmerText delay={0}>
          The History of Silver
        </ShimmerText>
      </div>

      {/* 1792 - 从左侧滑入 */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "20%",
          width: "30%",
          opacity: interpolate(frame, [30, 60], [0, 1]),
          transform: `translateX(${interpolate(frame, [30, 60], [-50, 0], { extrapolateRight: "clamp" })}px)`,
        }}
      >
        <div style={{ fontSize: 48, color: "#ef4444", fontWeight: 700 }}>
          <AnimatedNumber value={1792} delay={30} duration={30} />
        </div>
        <div style={{ fontSize: 16, color: "#e8e8e8", marginTop: 10 }}>
          Coinage Act establishes dollar based on silver
        </div>
      </div>

      {/* 1873 - 从右侧滑入 */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "55%",
          width: "30%",
          opacity: interpolate(frame, [60, 90], [0, 1]),
          transform: `translateX(${interpolate(frame, [60, 90], [50, 0], { extrapolateRight: "clamp" })}px)`,
        }}
      >
        <div style={{ fontSize: 48, color: "#ef4444", fontWeight: 700 }}>
          <AnimatedNumber value={1873} delay={60} duration={30} />
        </div>
        <div style={{ fontSize: 16, color: "#e8e8e8", marginTop: 10 }}>
          "Crime of 1873" - Silver货币地位 abolished
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 18,
          color: "#9ca3af",
          fontFamily: "Merriweather, serif",
          textAlign: "center",
          opacity: interpolate(frame, [90, 150], [0, 1]),
        }}
      >
        <PulsingText delay={90}>
          By 1960s, Treasury held nearly 2 billion ounces of silver
        </PulsingText>
      </div>
    </AbsoluteFill>
  );
};

/**
 * SilverStandardEndScene - 银本位终结场景
 * 增强版：添加警示效果、数字动画
 */
const SilverStandardEndScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 银色粒子
  const silverParticles = Array.from({ length: 20 }, (_, i) => {
    const seed = i * 137.5;
    const x = (Math.sin(seed) * 40 + 50 + (frame * 0.2 * (i % 3 + 1))) % 100;
    const y = (Math.cos(seed) * 40 + 50 + (frame * 0.1 * (i % 2 + 1))) % 100;

    return { x, y, opacity: (Math.sin(frame * 0.05 + i) + 1) / 2 * 0.6 };
  });

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* 银色粒子 */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {silverParticles.map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "#c0c0c0",
              opacity: p.opacity,
              boxShadow: "0 0 6px #c0c0c0",
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 36,
          color: "#ef4444",
          fontFamily: "Cinzel, serif",
          fontWeight: 700,
          opacity: interpolate(frame, [0, 30], [0, 1]),
          textShadow: "0 0 20px rgba(239, 68, 68, 0.5)",
        }}
      >
        <TypewriterText text="The End of Silver" delay={0} charDuration={4} />
      </div>

      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: interpolate(frame, [30, 90], [0, 1]),
        }}
      >
        <div style={{ fontSize: 20, color: "#e8e8e8", marginBottom: 20 }}>
          November 1961
        </div>
        <div style={{ fontSize: 24, color: "#ffd700", fontWeight: 600 }}>
          <ShimmerText delay={30}>
            Kennedy ordered Treasury to stop selling silver
          </ShimmerText>
        </div>
        <div style={{ fontSize: 18, color: "#9ca3af", marginTop: 20 }}>
          Silver prices surged to 41-year high
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 18,
          color: "#ef4444",
          fontFamily: "Merriweather, serif",
          textAlign: "center",
          opacity: interpolate(frame, [90, 150], [0, 1]),
        }}
      >
        <PulsingText delay={90} intensity={0.2}>
          This was a direct challenge to international bankers
        </PulsingText>
      </div>
    </AbsoluteFill>
  );
};

/**
 * KennedyDeathScene - 肯尼迪之死场景
 * 增强版：添加暗红色滤镜、震动效果
 */
const KennedyDeathScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 暗红色背景脉动
  const redPulse = Math.sin(frame * 0.05) * 0.1 + 0.1;

  return (
    <AbsoluteFill style={{ background: "#1a1a2e" }}>
      {/* 暗红色光晕 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, rgba(139, 0, 0, ${redPulse}) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <VignetteEffect />

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 48,
            color: "#ef4444",
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            opacity: interpolate(frame, [0, 30], [0, 1]),
            textShadow: "0 0 30px rgba(239, 68, 68, 0.6)",
          }}
        >
          <TypewriterText text="November 22, 1963" delay={0} charDuration={3} />
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#e8e8e8",
            marginTop: 20,
            opacity: interpolate(frame, [30, 60], [0, 1]),
          }}
        >
          The President was assassinated
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: interpolate(frame, [60, 120], [0, 1]),
        }}
      >
        <div style={{ fontSize: 24, color: "#ffd700", fontWeight: 600 }}>
          Johnson took over
        </div>
        <div style={{ fontSize: 18, color: "#9ca3af", marginTop: 15 }}>
          and reversed Kennedy's silver policy
        </div>
      </div>

      {/* 震动波 */}
      <ShockwaveEffect triggerFrame={30} />
    </AbsoluteFill>
  );
};

/**
 * GoldPoolScene - 黄金互助基金场景
 * 增强版：添加金色粒子、动态数字效果
 */
const GoldPoolScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <BackgroundParticles intensity={15} color="#ffd700" delay={0} />

      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 36,
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontWeight: 700,
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        <ShimmerText delay={0}>
          The London Gold Pool
        </ShimmerText>
      </div>

      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 18, color: "#9ca3af", opacity: interpolate(frame, [30, 60], [0, 1]) }}>
          1961 - Created to suppress gold prices
        </div>
        <div style={{
          fontSize: 48,
          color: "#ef4444",
          fontWeight: 700,
          marginTop: 20,
          opacity: interpolate(frame, [60, 90], [0, 1]),
          textShadow: "0 0 20px rgba(239, 68, 68, 0.5)"
        }}>
          $<AnimatedNumber value={35.2 * 10} delay={60} duration={40} suffix="" />
        </div>
        <div style={{ fontSize: 16, color: "#e8e8e8", marginTop: 10, opacity: interpolate(frame, [90, 120], [0, 1]) }}>
          Target price per ounce
        </div>
      </div>

      {/* 金钱损失动画 */}
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: interpolate(frame, [120, 180], [0, 1]),
        }}
      >
        <div style={{ fontSize: 36, color: "#ef4444", fontWeight: 700 }}>
          $<AnimatedNumber value={1} delay={120} duration={60} suffix=" Billion" />
        </div>
        <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 10 }}>
          lost by 1967
        </div>
      </div>
    </AbsoluteFill>
  );
};

/**
 * SDRScene - 特别提款权场景
 * 增强版：添加神秘感效果
 */
const SDRScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 蓝色粒子营造神秘感
  const blueParticles = Array.from({ length: 15 }, (_, i) => {
    const seed = i * 137.5;
    const x = (Math.sin(seed) * 45 + 50 + (frame * 0.15 * (i % 2 + 1))) % 100;
    const y = (Math.cos(seed) * 45 + 50 + (frame * 0.1 * (i % 3 + 1))) % 100;

    return { x, y, opacity: (Math.sin(frame * 0.04 + i) + 1) / 2 * 0.5 };
  });

  return (
    <AbsoluteFill style={{ background: "#1a1a2e" }}>
      {/* 蓝色粒子 */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {blueParticles.map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "#4a9eff",
              opacity: p.opacity,
              boxShadow: "0 0 8px #4a9eff",
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 36,
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontWeight: 700,
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        <TypewriterText text="Special Drawing Rights (SDR)" delay={0} charDuration={3} />
      </div>

      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: interpolate(frame, [30, 90], [0, 1]),
        }}
      >
        <div style={{ fontSize: 20, color: "#e8e8e8", marginBottom: 20 }}>
          "Paper Gold"
        </div>
        <div style={{ fontSize: 16, color: "#9ca3af" }}>
          Designed to hide America's monetary bankruptcy
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 24,
          color: "#ef4444",
          fontWeight: 600,
          opacity: interpolate(frame, [90, 150], [0, 1]),
        }}
      >
        <ShimmerText delay={90}>
          March 18, 1969 - The last link between gold and dollar severed
        </ShimmerText>
      </div>
    </AbsoluteFill>
  );
};

/**
 * NixonGoldScene - 尼克松关闭黄金窗口场景
 * 增强版：添加强烈震动效果、金色粒子
 */
const NixonGoldScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 强烈震动
  const shakeX = frame > 90 && frame < 150 ? Math.sin(frame * 0.8) * 4 : 0;
  const shakeY = frame > 90 && frame < 150 ? Math.cos(frame * 0.8) * 4 : 0;

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <BackgroundParticles intensity={18} color="#ffd700" delay={30} />
      <VignetteEffect />

      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: `translateX(-50%) translate(${shakeX}px, ${shakeY}px)`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 48,
            color: "#ef4444",
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            opacity: interpolate(frame, [0, 30], [0, 1]),
            textShadow: "0 0 40px rgba(239, 68, 68, 0.7)",
          }}
        >
          <TypewriterText text="August 15, 1971" delay={0} charDuration={3} />
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#e8e8e8",
            marginTop: 15,
            opacity: interpolate(frame, [30, 60], [0, 1]),
          }}
        >
          Nixon closes the gold window
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: interpolate(frame, [60, 120], [0, 1]),
        }}
      >
        <div style={{ fontSize: 28, color: "#ffd700", fontWeight: 600 }}>
          <ShimmerText delay={60}>
            America's Second Default
          </ShimmerText>
        </div>
        <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 15 }}>
          The entire world enters the era of fiat currency
        </div>
      </div>

      {/* 债务数字动画 */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 24,
          color: "#ef4444",
          fontWeight: 700,
          opacity: interpolate(frame, [120, 180], [0, 1]),
        }}
      >
        Total US Debt: $<AnimatedNumber value={44} delay={120} duration={60} suffix=" Trillion" />
        <span style={{ fontSize: 14, color: "#9ca3af", marginLeft: 10 }}>by 2006</span>
      </div>

      {/* 震动波效果 */}
      <ShockwaveEffect triggerFrame={90} />
    </AbsoluteFill>
  );
};

/**
 * PetrodollarScene - 石油美元场景
 * 增强版：添加油价上涨动画
 */
const PetrodollarScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#1a1a2e" }}>
      <BackgroundParticles intensity={12} color="#ffa500" delay={30} />
      <VignetteEffect />

      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 36,
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontWeight: 700,
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        <ShimmerText delay={0}>
          The Petrodollar System
        </ShimmerText>
      </div>

      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 18, color: "#9ca3af", opacity: interpolate(frame, [30, 60], [0, 1]) }}>
          October 6, 1973
        </div>

        {/* 油价上涨动画 */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 8,
            marginTop: 15,
            height: 100,
          }}
        >
          {[...Array(5)].map((_, i) => {
            const barHeight = interpolate(
              frame,
              [60 + i * 10, 90 + i * 10],
              [0, 30 + i * 20],
              { extrapolateRight: "clamp" }
            );
            return (
              <div
                key={i}
                style={{
                  width: 20,
                  height: barHeight,
                  background: `linear-gradient(180deg, #ef4444 0%, #ffd700 100%)`,
                  opacity: interpolate(frame, [60 + i * 10, 90 + i * 10], [0, 1], {
                    extrapolateRight: "clamp",
                  }),
                }}
              />
            );
          })}
        </div>

        <div style={{
          fontSize: 28,
          color: "#ef4444",
          fontWeight: 700,
          marginTop: 15,
          opacity: interpolate(frame, [60, 90], [0, 1]),
        }}>
          Oil Prices +<AnimatedNumber value={400} delay={60} duration={60} />%
        </div>
        <div style={{
          fontSize: 16,
          color: "#e8e8e8",
          marginTop: 15,
          opacity: interpolate(frame, [90, 120], [0, 1])
        }}>
          The dollar found a new refuge: Oil
        </div>
      </div>
    </AbsoluteFill>
  );
};

/**
 * ReaganScene - 里根遇刺场景
 * 增强版：添加紧张感效果
 */
const ReaganScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 警告闪烁效果
  const warningFlash = frame > 120 ? (Math.sin(frame * 0.3) > 0 ? 1 : 0.3) : 1;

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <BackgroundParticles intensity={15} color="#ef4444" delay={60} />

      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 48,
            color: "#ef4444",
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            opacity: interpolate(frame, [0, 30], [0, 1]),
            textShadow: "0 0 30px rgba(239, 68, 68, 0.6)",
          }}
        >
          <TypewriterText text="March 30, 1981" delay={0} charDuration={3} />
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#e8e8e8",
            marginTop: 15,
            opacity: interpolate(frame, [30, 60], [0, 1]),
          }}
        >
          Reagan was shot
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: interpolate(frame, [60, 120], [0, 1]),
        }}
      >
        <div style={{ fontSize: 20, color: "#ffd700", fontWeight: 600 }}>
          He wanted to restore the gold standard
        </div>
        <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 15 }}>
          This directly challenged the bankers' forbidden zone
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 18,
          color: "#ef4444",
          fontFamily: "Merriweather, serif",
          textAlign: "center",
          opacity: interpolate(frame, [120, 180], [0, 1]) * warningFlash,
        }}
      >
        <PulsingText delay={120} intensity={0.3}>
          The last hope for the gold standard was shattered
        </PulsingText>
      </div>
    </AbsoluteFill>
  );
};

/**
 * SummaryScene - 小结场景
 * 增强版：添加列表动画、最终总结效果
 */
const SummaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 列表项
  const summaryItems = [
    "Kennedy tried to reclaim monetary control and was assassinated",
    "Johnson abolished Silver Certificates, ending silver's monetary role",
    "Nixon closed the gold window in 1971",
    "Reagan was shot for wanting to restore the gold standard",
  ];

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle, #2d1f1f 0%, #0d0d0d 100%)",
      }}
    >
      <BackgroundParticles intensity={10} color="#ffd700" delay={30} />
      <VignetteEffect />

      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 36,
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontWeight: 700,
          opacity: interpolate(frame, [0, 30], [0, 1]),
          textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
        }}
      >
        <ShimmerText delay={0}>
          Summary
        </ShimmerText>
      </div>

      {/* 列表项 - 依次显示 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translate(-50%, 0)",
          width: "85%",
          textAlign: "left",
        }}
      >
        {summaryItems.map((item, index) => {
          const delay = 30 + index * 25;
          const opacity = interpolate(frame, [delay, delay + 30], [0, 1], {
            extrapolateRight: "clamp",
          });
          const translateX = interpolate(frame, [delay, delay + 30], [-30, 0], {
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={index}
              style={{
                fontSize: 16,
                color: "#e8e8e8",
                marginBottom: 12,
                opacity,
                transform: `translateX(${translateX}px)`,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ color: "#ffd700", fontSize: 18 }}>*</span>
              {item}
            </div>
          );
        })}

        {/* 最后一句 - 红色警示 */}
        <div
          style={{
            fontSize: 18,
            color: "#ef4444",
            marginTop: 20,
            opacity: interpolate(frame, [130, 170], [0, 1], {
              extrapolateRight: "clamp",
            }),
            fontWeight: 600,
          }}
        >
          <PulsingText delay={130} intensity={0.15}>
            No president has dared to touch the gold standard since.
          </PulsingText>
        </div>
      </div>

      {/* 系列标题 */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: interpolate(frame, [150, 200], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#ffd700",
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            textShadow: "0 0 30px rgba(255, 215, 0, 0.6)",
          }}
        >
          Currency War
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#9ca3af",
            fontFamily: "Merriweather, serif",
            fontStyle: "italic",
            marginTop: 8,
          }}
        >
          Episode 8 of 11
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Episode08;
