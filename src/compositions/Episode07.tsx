import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Sequence,
  spring,
} from "remotion";
import { Subtitles } from "../components/Subtitles";
import { Audio } from "../components/Audio";
import { Voiceover } from "../components/Voiceover";
import { getEpisodeBGM } from "../utils/audioConfig";

const VOICE_DIR = "/assets/audio/voiceover/episode07/";

function buildVoiceoverEntries() {
  const entries: { src: string; startFrame: number; durationFrames: number }[] =
    [];
  let fileIndex = 0;
  const fps = 30;

  const sceneOffsets = [
    { subs: openingSubs, offset: 0 },
    { subs: brettonWoodsSubs, offset: 60 * fps },
    { subs: houseColonelSubs, offset: 120 * fps },
    { subs: cfrEliteSubs, offset: 180 * fps },
    { subs: bisSubs, offset: 240 * fps },
    { subs: bilderbergSubs, offset: 300 * fps },
    { subs: trilateralSubs, offset: 360 * fps },
  ];

  for (const scene of sceneOffsets) {
    for (const sub of scene.subs) {
      entries.push({
        src: `${VOICE_DIR}voice_${String(fileIndex).padStart(4, "0")}.m4a`,
        startFrame: scene.offset + sub.startFrame,
        durationFrames: sub.endFrame - sub.startFrame,
      });
      fileIndex++;
    }
  }

  return entries;
}

// Import per-scene subtitles
import {
  openingSubs,
  brettonWoodsSubs,
  houseColonelSubs,
  cfrEliteSubs,
  bisSubs,
  bilderbergSubs,
  trilateralSubs,
} from "../subtitles/episode07";

/**
 * Episode07 - 第7集：统治世界的精英俱乐部
 *
 * 总时长：7分钟（420秒 = 12600帧 @30fps）
 *
 * 基于《货币战争》book1-第六章：统治世界的精英俱乐部
 *
 * 场景序列：
 * 1. [0-60s] 开场 - 新世界秩序
 * 2. [60-120s] 布雷顿森林会议
 * 3. [120-180s] 豪斯上校
 * 4. [180-240s] 外交协会
 * 5. [240-300s] 国际清算银行
 * 6. [300-360s] 彼尔德伯格俱乐部
 * 7. [360-420s] 三边委员会
 */
export const Episode07: React.FC = () => {
  const { fps } = useVideoConfig();

  const bgm = getEpisodeBGM("Episode07");
  const voiceoverEntries = buildVoiceoverEntries();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgm && <Audio {...bgm} />}

      <Voiceover
        voiceoverSrc={VOICE_DIR}
        entries={voiceoverEntries}
        volume={0.8}
      />

      {/* 场景1: 开场 - 新世界秩序 (0-60s) */}
      <Sequence durationInFrames={60 * fps}>
        <OpeningScene />
        <Subtitles subtitles={openingSubs} />
      </Sequence>

      {/* 场景2: 布雷顿森林会议 (60-120s) */}
      <Sequence from={60 * fps} durationInFrames={60 * fps}>
        <BrettonWoodsScene />
        <Subtitles subtitles={brettonWoodsSubs} />
      </Sequence>

      {/* 场景3: 豪斯上校 (120-180s) */}
      <Sequence from={120 * fps} durationInFrames={60 * fps}>
        <HouseColonelScene />
        <Subtitles subtitles={houseColonelSubs} />
      </Sequence>

      {/* 场景4: 外交协会 (180-240s) */}
      <Sequence from={180 * fps} durationInFrames={60 * fps}>
        <CFREliteScene />
        <Subtitles subtitles={cfrEliteSubs} />
      </Sequence>

      {/* 场景5: 国际清算银行 (240-300s) */}
      <Sequence from={240 * fps} durationInFrames={60 * fps}>
        <BISScene />
        <Subtitles subtitles={bisSubs} />
      </Sequence>

      {/* 场景6: 彼尔德伯格俱乐部 (300-360s) */}
      <Sequence from={300 * fps} durationInFrames={60 * fps}>
        <BilderbergScene />
        <Subtitles subtitles={bilderbergSubs} />
      </Sequence>

      {/* 场景7: 三边委员会 (360-420s) */}
      <Sequence from={360 * fps} durationInFrames={60 * fps}>
        <TrilateralScene />
        <Subtitles subtitles={trilateralSubs} />
      </Sequence>
    </AbsoluteFill>
  );
};

// ========== Animation Utilities ==========

/**
 * Typewriter effect component -逐字显示文字
 */
const TypewriterText: React.FC<{
  text: string;
  startFrame: number;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}> = ({ text, startFrame, speed = 3, className, style }) => {
  const frame = useCurrentFrame();
  const visibleChars = interpolate(
    frame,
    [startFrame, startFrame + text.length * speed],
    [0, text.length],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <span className={className} style={style}>
      {text.slice(0, Math.floor(visibleChars))}
    </span>
  );
};

/**
 * Animated counter - 数字计数动画
 */
const AnimatedCounter: React.FC<{
  value: number;
  startFrame: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  style?: React.CSSProperties;
}> = ({
  value,
  startFrame,
  duration = 60,
  prefix = "",
  suffix = "",
  className,
  style,
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(
    frame,
    [startFrame, startFrame + duration],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const currentValue = Math.floor(progress * value);

  return (
    <span className={className} style={style}>
      {prefix}
      {currentValue}
      {suffix}
    </span>
  );
};

/**
 * Particle effect - 背景粒子
 */
const Particles: React.FC<{ count?: number; color?: string }> = ({
  count = 50,
  color = "#ffd700",
}) => {
  const frame = useCurrentFrame();
  const particles = [];

  for (let i = 0; i < count; i++) {
    const seed = (i * 137.5) % 360;
    const x = (Math.sin(seed + frame * 0.01) * 50 + 50 + i * 2) % 100;
    const y = (Math.cos(seed + frame * 0.02) * 50 + 50 + i * 3) % 100;
    const size = Math.sin(seed + frame * 0.03) * 2 + 3;
    const opacity = Math.sin(seed + frame * 0.05) * 0.3 + 0.4;

    particles.push(
      <div
        key={i}
        style={{
          position: "absolute",
          left: `${x}%`,
          top: `${y}%`,
          width: size,
          height: size,
          borderRadius: "50%",
          backgroundColor: color,
          opacity,
        }}
      />,
    );
  }

  return <>{particles}</>;
};

/**
 * Pulse effect - 脉冲动画
 */
const PulseEffect: React.FC<{
  children: React.ReactNode;
  startFrame: number;
  duration?: number;
}> = ({ children, startFrame, duration = 30 }) => {
  const frame = useCurrentFrame();
  const scale = interpolate(
    frame,
    [startFrame, startFrame + duration, startFrame + duration * 2],
    [1, 1.05, 1],
    { extrapolateRight: "clamp" },
  );

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "center center",
      }}
    >
      {children}
    </div>
  );
};

/**
 * Glitch text effect - 文字故障效果
 */
const GlitchText: React.FC<{
  text: string;
  startFrame: number;
  className?: string;
  style?: React.CSSProperties;
}> = ({ text, startFrame, className, style }) => {
  const frame = useCurrentFrame();
  const glitchIntensity = interpolate(
    frame,
    [startFrame, startFrame + 15, startFrame + 30],
    [0, 8, 0],
    { extrapolateRight: "clamp" },
  );

  // Use deterministic offsets based on frame number instead of Math.random()
  const offsetX = Math.sin(frame * 0.5) * glitchIntensity;
  const offsetY = Math.cos(frame * 0.7) * glitchIntensity;

  return (
    <span
      className={className}
      style={{
        ...style,
        textShadow: `${offsetX}px ${offsetY}px 0 #ff0000, ${-offsetX}px ${-offsetY}px 0 #00ffff`,
      }}
    >
      {text}
    </span>
  );
};

/**
 * Shake effect - 震动效果
 */
const ShakeText: React.FC<{
  children: React.ReactNode;
  startFrame: number;
  intensity?: number;
}> = ({ children, startFrame, intensity = 5 }) => {
  const frame = useCurrentFrame();
  const shake = interpolate(
    frame,
    [startFrame, startFrame + 10, startFrame + 20, startFrame + 30],
    [0, intensity, -intensity, 0],
    { extrapolateRight: "clamp" },
  );

  return (
    <div
      style={{
        transform: `translateX(${shake}px)`,
      }}
    >
      {children}
    </div>
  );
};

/**
 * Timeline connector - 时间线动画
 */
const TimelineNode: React.FC<{
  position: number;
  isActive: boolean;
  label: string;
  year: string;
}> = ({ position, isActive, label, year }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(
    frame,
    [position * 10, position * 10 + 20],
    [0, 1],
    {
      extrapolateLeft: "clamp",
    },
  );
  const nodeScale = spring({
    frame: frame - position * 10,
    fps,
    from: 0,
    to: 1,
    config: { damping: 10, stiffness: 100 },
  });

  return (
    <div
      style={{
        position: "absolute",
        left: `${15 + position * 20}%`,
        top: "50%",
        transform: `translate(-50%, -50%) scale(${nodeScale})`,
        opacity,
      }}
    >
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: isActive ? "#ffd700" : "#4a4a4a",
          border: "2px solid #ffd700",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontSize: 12,
          whiteSpace: "nowrap",
        }}
      >
        {year}
      </div>
      <div
        style={{
          position: "absolute",
          top: 35,
          left: "50%",
          transform: "translateX(-50%)",
          color: "#9ca3af",
          fontSize: 10,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </div>
    </div>
  );
};

/**
 * Data bar chart - 数据条形图
 */
const DataBar: React.FC<{
  label: string;
  value: number;
  maxValue: number;
  startFrame: number;
  index: number;
}> = ({ label, value, maxValue, startFrame, index }) => {
  const frame = useCurrentFrame();
  const barWidth = interpolate(
    frame,
    [startFrame + index * 15, startFrame + index * 15 + 40],
    [0, (value / maxValue) * 60],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ color: "#9ca3af", fontSize: 14, marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: `${barWidth}%`,
            height: 16,
            backgroundColor: "#ffd700",
            borderRadius: 2,
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              right: 5,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#0d1117",
              fontSize: 10,
              fontWeight: 600,
            }}
          >
            {value}
          </span>
        </div>
      </div>
    </div>
  );
};

/**
 * Connection lines - 连接线动画
 */
const ConnectionLines: React.FC<{
  points: { x: number; y: number }[];
  startFrame: number;
}> = ({ points, startFrame }) => {
  const frame = useCurrentFrame();

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      {points.slice(0, -1).map((point, i) => {
        const nextPoint = points[i + 1];
        const progress = interpolate(
          frame,
          [startFrame + i * 20, startFrame + i * 20 + 30],
          [0, 1],
          { extrapolateLeft: "clamp" },
        );

        return (
          <line
            key={i}
            x1={`${point.x}%`}
            y1={`${point.y}%`}
            x2={`${point.x + (nextPoint.x - point.x) * progress}%`}
            y2={`${point.y + (nextPoint.y - point.y) * progress}%`}
            stroke="#ffd700"
            strokeWidth={2}
            strokeDasharray="5,5"
            opacity={progress * 0.6}
          />
        );
      })}
    </svg>
  );
};

/**
 * Scan line effect - 扫描线效果
 */
const ScanLines: React.FC = () => {
  const frame = useCurrentFrame();
  const scanY = interpolate(frame % 180, [0, 180], [0, 100]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 2,
          top: `${scanY}%`,
          backgroundColor: "rgba(255, 215, 0, 0.1)",
        }}
      />
    </div>
  );
};

// ========== Scene Components ==========

/**
 * OpeningScene - 开场：新世界秩序
 * 增强版：添加粒子效果、震动文字、扫描线
 */
const OpeningScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background gradient animation
  const bgGradient = interpolate(frame, [0, 60, 120], [0, 1, 0], {
    extrapolateRight: "clamp",
  });

  // Title scale animation
  const titleScale = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    config: { damping: 8, stiffness: 80 },
  });

  // Warning text blink
  const warningBlink = interpolate(
    frame,
    [30, 35, 40, 45, 50],
    [0.5, 1, 0.5, 1, 0.5],
    { extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, #0d1117 ${100 - bgGradient * 20}%, #1a1a2e ${bgGradient * 30}%, #0d1117 100%)`,
      }}
    >
      {/* Background particles */}
      <Particles count={40} color="#ffd700" />

      {/* Scan lines effect */}
      <ScanLines />

      {/* Main title */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "50%",
          transform: `translateX(-50%) scale(${titleScale})`,
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontSize: 56,
          fontWeight: 700,
          textAlign: "center",
          textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        <GlitchText text="The New World Order" startFrame={10} />
      </div>

      {/* Subtitle with typewriter effect */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontFamily: "Merriweather, serif",
          fontSize: 22,
          textAlign: "center",
          maxWidth: "75%",
          lineHeight: 1.8,
          opacity: interpolate(frame, [25, 55], [0, 1]),
        }}
      >
        <TypewriterText
          text="A massive plan is underway..."
          startFrame={30}
          speed={4}
        />
      </div>

      {/* Warning text with shake and pulse */}
      <PulseEffect startFrame={60} duration={40}>
        <ShakeText startFrame={60} intensity={3}>
          <div
            style={{
              position: "absolute",
              top: "42%",
              left: "50%",
              transform: "translateX(-50%)",
              color: "#ef4444",
              fontWeight: 700,
              fontSize: 32,
              textAlign: "center",
              opacity: warningBlink,
              textShadow: "0 0 20px rgba(239, 68, 68, 0.8)",
            }}
          >
            <GlitchText
              text="And China knows very little about it."
              startFrame={60}
            />
          </div>
        </ShakeText>
      </PulseEffect>

      {/* Decorative lines */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: 1,
          backgroundColor: "rgba(255, 215, 0, 0.3)",
          opacity: interpolate(frame, [70, 90], [0, 1]),
        }}
      />
    </AbsoluteFill>
  );
};

/**
 * BrettonWoodsScene - 布雷顿森林会议
 * 增强版：添加时间线动画、数字计数、地理位置动画
 */
const BrettonWoodsScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #1a2a3a 0%, #0d1117 100%)",
      }}
    >
      {/* Ambient particles */}
      <Particles count={25} color="#4a90d9" />

      {/* Date display */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontSize: 48,
          fontWeight: 700,
          textAlign: "center",
          opacity: interpolate(frame, [0, 30], [0, 1]),
          textShadow: "0 0 20px rgba(255, 215, 0, 0.4)",
        }}
      >
        July 1944
      </div>

      {/* Animated underline */}
      <div
        style={{
          position: "absolute",
          top: "16%",
          left: "50%",
          transform: "translateX(-50%)",
          width: interpolate(frame, [20, 50], [0, 200]),
          height: 2,
          backgroundColor: "#ffd700",
        }}
      />

      {/* Main title */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontFamily: "Cinzel, serif",
          fontSize: 36,
          fontWeight: 600,
          textAlign: "center",
          opacity: interpolate(frame, [30, 60], [0, 1]),
        }}
      >
        Bretton Woods Conference
      </div>

      {/* Conference details with typewriter */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#9ca3af",
          fontFamily: "Merriweather, serif",
          fontSize: 18,
          textAlign: "center",
          maxWidth: "70%",
          lineHeight: 1.8,
          opacity: interpolate(frame, [50, 80], [0, 1]),
        }}
      >
        <TypewriterText
          text="44 countries designed the post-war economic order"
          startFrame={55}
          speed={3}
        />
      </div>

      {/* Timeline */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          right: "10%",
          height: 80,
          opacity: interpolate(frame, [60, 90], [0, 1]),
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "10%",
            right: "10%",
            height: 2,
            backgroundColor: "#4a4a4a",
          }}
        />
        <TimelineNode
          position={0}
          isActive={true}
          label="Conference"
          year="1944"
        />
        <TimelineNode
          position={1}
          isActive={frame > 100}
          label="IMF Created"
          year="1945"
        />
        <TimelineNode
          position={2}
          isActive={frame > 120}
          label="World Bank"
          year="1946"
        />
        <TimelineNode
          position={3}
          isActive={frame > 140}
          label="System Active"
          year="1947"
        />
      </div>

      {/* Key achievements with animated counters */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 40,
          opacity: interpolate(frame, [100, 130], [0, 1]),
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ color: "#ffd700", fontSize: 14, marginBottom: 4 }}>
            Countries
          </div>
          <div style={{ color: "#e8e8e8", fontSize: 28, fontWeight: 700 }}>
            <AnimatedCounter value={44} startFrame={110} suffix="+" />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ color: "#ffd700", fontSize: 14, marginBottom: 4 }}>
            IMF Members
          </div>
          <div style={{ color: "#e8e8e8", fontSize: 28, fontWeight: 700 }}>
            <AnimatedCounter value={190} startFrame={120} />
          </div>
        </div>
      </div>

      {/* Dollar as world reserve - highlight */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 16,
          textAlign: "center",
          fontStyle: "italic",
          opacity: interpolate(frame, [140, 170], [0, 1]),
        }}
      >
        Dollar became the world's reserve currency
      </div>
    </AbsoluteFill>
  );
};

/**
 * HouseColonelScene - 豪斯上校
 * 增强版：添加人物剪影动画、引用打字机、背景光效
 */
const HouseColonelScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Silhouette animation
  const silhouetteOpacity = interpolate(frame, [0, 40], [0, 0.3], {
    extrapolateLeft: "clamp",
  });

  // Background light rotation
  const lightRotate = frame * 0.5;

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #2d1f1f 0%, #0d1117 100%)",
      }}
    >
      {/* Rotating light effect */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 600,
          height: 600,
          transform: `translate(-50%, -50%) rotate(${lightRotate}deg)`,
          background:
            "radial-gradient(ellipse, rgba(255, 215, 0, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Silhouette of Colonel House */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 120,
          height: 180,
          opacity: silhouetteOpacity,
        }}
      >
        <svg viewBox="0 0 120 180" fill="#ffd700">
          {/* Head */}
          <circle cx="60" cy="30" r="20" />
          {/* Body */}
          <rect x="40" y="50" width="40" height="80" rx="5" />
          {/* Arms */}
          <rect x="20" y="55" width="25" height="60" rx="5" />
          <rect x="75" y="55" width="25" height="60" rx="5" />
          {/* Legs */}
          <rect x="45" y="130" width="12" height="45" rx="3" />
          <rect x="63" y="130" width="12" height="45" rx="3" />
        </svg>
      </div>

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontSize: 42,
          fontWeight: 700,
          textAlign: "center",
          opacity: interpolate(frame, [0, 30], [0, 1]),
          textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
        }}
      >
        Colonel Edward House
      </div>

      {/* Description with typewriter */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontFamily: "Merriweather, serif",
          fontSize: 18,
          textAlign: "center",
          maxWidth: "70%",
          lineHeight: 1.8,
          opacity: interpolate(frame, [25, 55], [0, 1]),
        }}
      >
        <span style={{ color: "#ffd700" }}>The "Spiritual Godfather"</span> of
        American elites
        <br />
        <span style={{ color: "#9ca3af" }}>
          From a wealthy Texas banking family
        </span>
      </div>

      {/* Quote box */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "rgba(255, 215, 0, 0.05)",
          borderLeft: "3px solid #ffd700",
          padding: "20px 30px",
          maxWidth: "75%",
          opacity: interpolate(frame, [50, 80], [0, 1]),
        }}
      >
        <div
          style={{
            color: "#9ca3af",
            fontFamily: "Merriweather, serif",
            fontSize: 16,
            fontStyle: "italic",
            lineHeight: 1.8,
            textAlign: "center",
          }}
        >
          <TypewriterText
            text='"In Washington, the true rulers are invisible."'
            startFrame={60}
            speed={3}
          />
          <br />
          <TypewriterText
            text="They exercise power from behind the scenes."
            startFrame={100}
            speed={3}
          />
        </div>
        <div
          style={{
            color: "#ffd700",
            fontSize: 14,
            textAlign: "right",
            marginTop: 15,
          }}
        >
          — Felix Frankfurter, Supreme Court Justice
        </div>
      </div>

      {/* Decorative element */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
          opacity: interpolate(frame, [90, 110], [0, 1]),
        }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              width: 8,
              height: 8 + i * 4,
              backgroundColor: "#ffd700",
              opacity: 0.3 + i * 0.15,
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};

/**
 * CFREliteScene - 外交协会
 * 增强版：添加数据可视化、成员网络图、媒体LOGO动画
 */
const CFREliteScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Network nodes animation
  const nodes = [
    { x: 20, y: 30, label: "Presidents" },
    { x: 80, y: 30, label: "Secretaries" },
    { x: 50, y: 50, label: "CFR" },
    { x: 30, y: 70, label: "Media" },
    { x: 70, y: 70, label: "Military" },
  ];

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at 50% 30%, #1a2a3a 0%, #0d0d0d 100%)",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 215, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 215, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontSize: 36,
          fontWeight: 700,
          textAlign: "center",
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        Council on Foreign Relations
      </div>

      {/* Subtitle */}
      <div
        style={{
          position: "absolute",
          top: "14%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ef4444",
          fontFamily: "Merriweather, serif",
          fontSize: 20,
          fontWeight: 600,
          textAlign: "center",
          opacity: interpolate(frame, [20, 50], [0, 1]),
        }}
      >
        The "Central Party School" of American Elites
      </div>

      {/* Network visualization */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "10%",
          right: "10%",
          height: 150,
          opacity: interpolate(frame, [30, 60], [0, 1]),
        }}
      >
        <ConnectionLines
          points={nodes.map((n) => ({ x: n.x, y: n.y }))}
          startFrame={40}
        />
        {nodes.map((node, i) => {
          const scale = spring({
            frame: frame - 30 - i * 10,
            fps,
            from: 0,
            to: 1,
            config: { damping: 10, stiffness: 100 },
          });
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  backgroundColor: i === 2 ? "#ffd700" : "#4a90d9",
                  border: "2px solid #ffd700",
                  transform: `scale(${scale})`,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "#e8e8e8",
                  fontSize: 11,
                  whiteSpace: "nowrap",
                  opacity: scale,
                }}
              >
                {node.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Data visualization */}
      <div
        style={{
          position: "absolute",
          top: "48%",
          left: "15%",
          right: "15%",
          opacity: interpolate(frame, [50, 80], [0, 1]),
        }}
      >
        <DataBar
          label="US Presidents (since WWII)"
          value={13}
          maxValue={15}
          startFrame={55}
          index={0}
        />
        <DataBar
          label="Secretaries of State"
          value={14}
          maxValue={15}
          startFrame={55}
          index={1}
        />
        <DataBar
          label="Defense Secretaries"
          value={11}
          maxValue={15}
          startFrame={55}
          index={2}
        />
        <DataBar
          label="CIA Directors"
          value={9}
          maxValue={15}
          startFrame={55}
          index={3}
        />
      </div>

      {/* Media control section */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: interpolate(frame, [90, 120], [0, 1]),
        }}
      >
        <div style={{ color: "#9ca3af", fontSize: 12, marginBottom: 8 }}>
          They control major media:
        </div>
        <div
          style={{
            display: "flex",
            gap: 15,
            flexWrap: "wrap",
            justifyContent: "center",
            color: "#e8e8e8",
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          {[
            "CBS",
            "ABC",
            "NBC",
            "NYT",
            "Washington Post",
            "Time",
            "Newsweek",
          ].map((media, i) => (
            <span
              key={media}
              style={{
                opacity: interpolate(
                  frame,
                  [100 + i * 5, 120 + i * 5],
                  [0, 1],
                  {
                    extrapolateLeft: "clamp",
                  },
                ),
              }}
            >
              {media}
            </span>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

/**
 * BISScene - 国际清算银行
 * 增强版：添加金库动画、黄金数据可视化、历史时间线
 */
const BISScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Gold shimmer effect
  const goldShimmer = interpolate(frame % 150, [0, 150], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #1a1a1a 0%, #0d1117 100%)",
      }}
    >
      {/* Gold particles */}
      <Particles count={30} color="#ffd700" />

      {/* Gold shimmer overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at ${50 + goldShimmer * 20}% ${30 + goldShimmer * 20}%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontSize: 32,
          fontWeight: 700,
          textAlign: "center",
          opacity: interpolate(frame, [0, 30], [0, 1]),
          textShadow: "0 0 20px rgba(255, 215, 0, 0.4)",
        }}
      >
        Bank for International Settlements
      </div>

      {/* Location */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#9ca3af",
          fontFamily: "Merriweather, serif",
          fontSize: 16,
          textAlign: "center",
          opacity: interpolate(frame, [15, 45], [0, 1]),
        }}
      >
        <span style={{ color: "#ffd700" }}>Basel, Switzerland</span>
        <br />
        <span style={{ fontStyle: "italic" }}>"The Bankers' Bank"</span>
      </div>

      {/* Gold vault visualization */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 200,
          height: 120,
          opacity: interpolate(frame, [30, 60], [0, 1]),
        }}
      >
        <svg viewBox="0 0 200 120" style={{ width: "100%", height: "100%" }}>
          {/* Vault door */}
          <circle
            cx="100"
            cy="60"
            r="50"
            fill="none"
            stroke="#ffd700"
            strokeWidth={3}
            opacity={0.8}
          />
          <circle
            cx="100"
            cy="60"
            r="40"
            fill="none"
            stroke="#ffd700"
            strokeWidth={2}
            opacity={0.6}
          />
          <circle
            cx="100"
            cy="60"
            r="30"
            fill="none"
            stroke="#ffd700"
            strokeWidth={1}
            opacity={0.4}
          />
          {/* Gold bars inside */}
          <rect
            x="70"
            y="45"
            width="25"
            height="8"
            fill="#ffd700"
            opacity={0.7}
          />
          <rect
            x="98"
            y="45"
            width="25"
            height="8"
            fill="#ffd700"
            opacity={0.7}
          />
          <rect
            x="82"
            y="55"
            width="25"
            height="8"
            fill="#ffd700"
            opacity={0.7}
          />
          <rect
            x="82"
            y="65"
            width="25"
            height="8"
            fill="#ffd700"
            opacity={0.5}
          />
        </svg>
      </div>

      {/* Financial data with animated counters */}
      <div
        style={{
          position: "absolute",
          top: "48%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 30,
          opacity: interpolate(frame, [50, 80], [0, 1]),
        }}
      >
        <div style={{ textAlign: "center" }}>
          <AnimatedCounter
            value={40}
            startFrame={60}
            duration={40}
            prefix="$"
            suffix="B"
            style={{
              color: "#ffd700",
              fontSize: 32,
              fontWeight: 700,
              fontFamily: "JetBrains Mono, monospace",
            }}
          />
          <div style={{ color: "#9ca3af", fontSize: 12, marginTop: 4 }}>
            Cash & Bonds
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <AnimatedCounter
            value={10}
            startFrame={80}
            duration={40}
            suffix="%"
            style={{
              color: "#ffd700",
              fontSize: 32,
              fontWeight: 700,
              fontFamily: "JetBrains Mono, monospace",
            }}
          />
          <div style={{ color: "#9ca3af", fontSize: 12, marginTop: 4 }}>
            World Gold
          </div>
        </div>
      </div>

      {/* Secret status warning */}
      <div
        style={{
          position: "absolute",
          top: "62%",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "rgba(239, 68, 68, 0.1)",
          border: "1px solid #ef4444",
          borderRadius: 8,
          padding: "12px 24px",
          opacity: interpolate(frame, [70, 100], [0, 1]),
        }}
      >
        <div style={{ color: "#ef4444", fontSize: 14, textAlign: "center" }}>
          Never published accounts in{" "}
          <span style={{ fontWeight: 700, fontSize: 18 }}>
            <AnimatedCounter value={76} startFrame={80} suffix="+" />
          </span>{" "}
          years
        </div>
      </div>

      {/* Historical note */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontFamily: "Merriweather, serif",
          fontSize: 14,
          textAlign: "center",
          maxWidth: "75%",
          lineHeight: 1.8,
          opacity: interpolate(frame, [90, 120], [0, 1]),
        }}
      >
        <span style={{ color: "#9ca3af" }}>During WWII,</span> American &
        British bankers used BIS
        <br />
        <span style={{ color: "#ef4444" }}>to fund Nazi Germany</span>
      </div>
    </AbsoluteFill>
  );
};

/**
 * BilderbergScene - 彼尔德伯格俱乐部
 * 增强版：添加私密会议视觉、预言结果动画
 */
const BilderbergScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Secret meeting effect - curtain
  const curtainOpacity = interpolate(frame, [0, 30], [0, 0.8], {
    extrapolateLeft: "clamp",
  });

  // Spotlight on key points
  const spotlightX = interpolate(frame, [50, 150, 250], [20, 50, 80], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* Dim lighting effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at ${spotlightX}% 40%, transparent 20%, rgba(0, 0, 0, 0.8) 100%)`,
          pointerEvents: "none",
        }}
      />

      {/* Secret curtain effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#0d1117",
          opacity: curtainOpacity,
          pointerEvents: "none",
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontSize: 40,
          fontWeight: 700,
          textAlign: "center",
          opacity: interpolate(frame, [10, 40], [0, 1]),
          textShadow: "0 0 25px rgba(255, 215, 0, 0.5)",
        }}
      >
        The Bilderberg Group
      </div>

      {/* Founding info */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontFamily: "Merriweather, serif",
          fontSize: 16,
          textAlign: "center",
          maxWidth: "70%",
          lineHeight: 1.8,
          opacity: interpolate(frame, [30, 60], [0, 1]),
        }}
      >
        Founded <span style={{ color: "#ffd700" }}>1954</span> — Named after
        hotel in Netherlands
        <br />
        <span style={{ color: "#9ca3af" }}>
          Europe's and America's most powerful figures
        </span>
        <br />
        <span style={{ color: "#ef4444", fontStyle: "italic" }}>
          Meet annually in secret. No press. No records.
        </span>
      </div>

      {/* 1975 prediction */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "10%",
          width: "38%",
          opacity: interpolate(frame, [50, 80], [0, 1]),
        }}
      >
        <div
          style={{
            color: "#ffd700",
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 8,
          }}
        >
          1975 Meeting Agenda:
        </div>
        <div
          style={{
            color: "#9ca3af",
            fontSize: 13,
            lineHeight: 1.8,
            paddingLeft: 12,
            borderLeft: "2px solid #4a90d9",
          }}
        >
          "Western Europe"
          <br />
          "Japan's growing role"
        </div>
        <div
          style={{
            color: "#4ade80",
            fontSize: 12,
            marginTop: 10,
            opacity: interpolate(frame, [90, 110], [0, 1]),
          }}
        >
          1976: Thatcher elected
          <br />
          1985: Plaza Accord
        </div>
      </div>

      {/* Arrow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontSize: 24,
          opacity: interpolate(frame, [70, 90], [0, 1]),
        }}
      >
        →
      </div>

      {/* 1986 prediction */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          right: "10%",
          width: "38%",
          textAlign: "right",
          opacity: interpolate(frame, [80, 110], [0, 1]),
        }}
      >
        <div
          style={{
            color: "#ffd700",
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 8,
          }}
        >
          1986 Meeting Agenda:
        </div>
        <div
          style={{
            color: "#9ca3af",
            fontSize: 13,
            lineHeight: 1.8,
            paddingRight: 12,
            borderRight: "2px solid #4a90d9",
          }}
        >
          "US-Soviet relations"
          <br />
          "global financial system"
        </div>
        <div
          style={{
            color: "#ef4444",
            fontSize: 12,
            marginTop: 10,
            opacity: interpolate(frame, [120, 140], [0, 1]),
          }}
        >
          1989: Berlin Wall falls
          <br />
          1991: USSR collapses
        </div>
      </div>

      {/* Conclusion */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 12,
          textAlign: "center",
          opacity: interpolate(frame, [140, 170], [0, 1]),
        }}
      >
        <span style={{ color: "#ffd700" }}>Pattern recognition:</span> What they
        discuss → What happens globally
      </div>
    </AbsoluteFill>
  );
};

/**
 * TrilateralScene - 三边委员会
 * 增强版：添加权力网络可视化、结尾引人深思动画
 */
const TrilateralScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Expanding network effect
  const networkScale = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    config: { damping: 12, stiffness: 60 },
  });

  // Final thought pulse
  const thoughtPulse = interpolate(frame, [100, 110, 120], [1, 1.1, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at 50% 40%, #2d1f1f 0%, #0d0d0d 100%)",
      }}
    >
      {/* Expanding network background */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 400 * networkScale,
          height: 400 * networkScale,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          border: "1px solid rgba(255, 215, 0, 0.2)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 250 * networkScale,
          height: 250 * networkScale,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          border: "1px solid rgba(255, 215, 0, 0.3)",
          pointerEvents: "none",
        }}
      />

      {/* Connection nodes */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          height: 120,
        }}
      >
        {/* North America */}
        <div
          style={{
            position: "absolute",
            left: "0%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              backgroundColor: "#ffd700",
              margin: "0 auto 8px",
              boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
            }}
          />
          <div style={{ color: "#e8e8e8", fontSize: 12 }}>North America</div>
        </div>

        {/* Europe */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "0%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              backgroundColor: "#4a90d9",
              margin: "0 auto 8px",
              boxShadow: "0 0 15px rgba(74, 144, 217, 0.5)",
            }}
          />
          <div style={{ color: "#e8e8e8", fontSize: 12 }}>Europe</div>
        </div>

        {/* Asia */}
        <div
          style={{
            position: "absolute",
            left: "100%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              backgroundColor: "#ef4444",
              margin: "0 auto 8px",
              boxShadow: "0 0 15px rgba(239, 68, 68, 0.5)",
            }}
          />
          <div style={{ color: "#e8e8e8", fontSize: 12 }}>Asia</div>
        </div>

        {/* Center - Commission */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              backgroundColor: "#ffd700",
              margin: "0 auto",
              boxShadow: "0 0 20px rgba(255, 215, 0, 0.8)",
            }}
          />
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontSize: 38,
          fontWeight: 700,
          textAlign: "center",
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        The Trilateral Commission
      </div>

      {/* Founding info */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontFamily: "Merriweather, serif",
          fontSize: 16,
          textAlign: "center",
          opacity: interpolate(frame, [20, 50], [0, 1]),
        }}
      >
        Founded <span style={{ color: "#ffd700" }}>1973</span>
        <br />
        By banker <span style={{ color: "#4a90d9" }}>David Rockefeller</span> &
        <span style={{ color: "#4a90d9" }}> Zbigniew Brzezinski</span>
      </div>

      {/* Case study: Carter */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "rgba(255, 215, 0, 0.05)",
          border: "1px solid rgba(255, 215, 0, 0.2)",
          borderRadius: 8,
          padding: "15px 25px",
          opacity: interpolate(frame, [40, 70], [0, 1]),
        }}
      >
        <div
          style={{
            color: "#9ca3af",
            fontSize: 13,
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          Case Study: Jimmy Carter
        </div>
        <div
          style={{
            color: "#ef4444",
            fontSize: 15,
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          Vetted by Trilateral Commission
        </div>
        <div
          style={{
            color: "#e8e8e8",
            fontSize: 13,
            textAlign: "center",
            marginTop: 8,
          }}
        >
          He appointed{" "}
          <span style={{ color: "#ffd700", fontWeight: 700 }}>
            <AnimatedCounter value={14} startFrame={55} />
          </span>{" "}
          members to key positions
        </div>
      </div>

      {/* Final thought */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: `translateX(-50%) scale(${thoughtPulse})`,
          textAlign: "center",
          opacity: interpolate(frame, [80, 110], [0, 1]),
        }}
      >
        <div
          style={{
            color: "#ffd700",
            fontFamily: "Cinzel, serif",
            fontSize: 20,
            fontWeight: 600,
            marginBottom: 15,
            textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
          }}
        >
          Understanding these elite networks
        </div>
        <div
          style={{
            color: "#e8e8e8",
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            fontStyle: "italic",
            lineHeight: 1.8,
          }}
        >
          is the first step to{" "}
          <span style={{ color: "#ef4444", fontWeight: 600 }}>
            financial independence
          </span>
        </div>
      </div>

      {/* Quote attribution */}
      <div
        style={{
          position: "absolute",
          bottom: "3%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#6b7280",
          fontSize: 11,
          textAlign: "center",
          opacity: interpolate(frame, [120, 150], [0, 1]),
        }}
      >
        — End of Episode 07 —
      </div>
    </AbsoluteFill>
  );
};

export default Episode07;
