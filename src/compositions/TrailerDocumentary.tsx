import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Audio } from "../components/Audio";
import { Subtitles } from "../components/Subtitles";
import { Voiceover } from "../components/Voiceover";
import { getEpisodeBGM } from "../utils/audioConfig";
import { VignetteOverlay } from "../components/animations/SceneTransition";

// 电影级动画组件 - 与 EP01 一致
import {
  ThemedTransition,
  CloseUpShot,
  DramaticRevealShot,
} from "../components/animations";
import type { TransitionTheme } from "../components/animations";

// 字幕配置
import {
  SCENE_FRAMES,
  SCENE_OFFSETS,
  scene01Subs,
  scene02Subs,
  scene03Subs,
  scene04Subs,
  scene05Subs,
} from "../subtitles/trailer";

const VOICE_DIR = "/assets/audio/voiceover/trailer/";

/**
 * TrailerDocumentary - 货币战争预告片
 *
 * 风格与 EP01-EP11 保持一致
 *
 * 总时长：70.3秒（2109帧 @30fps）
 *
 * 场景结构（基于实际配音时长）：
 * - Scene 0: 开场 - 标题展示 (12.2s / 365帧)
 * - Scene 1: 问题 - 货币制度疑问 (20.1s / 603帧)
 * - Scene 2: 危机 - 2008金融危机 (15.0s / 449帧)
 * - Scene 3: 中国 - 经济崛起 (11.9s / 356帧)
 * - Scene 4: 预告 - Coming Soon (11.2s / 336帧)
 *
 * 背景图片意境匹配：
 * - Scene 0: financial-war.jpg - 战争主题 ✅
 * - Scene 1: ep09-global-map.jpg - 全球货币制度 ✅
 * - Scene 2: ep01-debt-crisis.jpg - 债务沙滩隐喻 ✅
 * - Scene 3: china-economic-rise.jpg - 中国经济 ✅
 * - Scene 4: ep11-eternity-opening.jpg - 宇宙星空 ✅
 */

// 场景主题配置 - 与 EP01 风格一致
const SCENE_THEMES: TransitionTheme[] = [
  "triumph",   // Scene 0: 开场 - 宏大
  "mystery",   // Scene 1: 问题 - 神秘
  "tragedy",   // Scene 2: 危机 - 悲剧
  "finance",   // Scene 3: 中国 - 金融
  "revelation", // Scene 4: 预告 - 揭示
];

// 过渡动画配置 - 根据场景时长动态调整
const TRANSITION_CONFIGS = [
  { enter: 30, reveal: 40 },   // Scene 0: 365帧 → 过渡占 70帧 (19%)
  { enter: 25, reveal: 35 },   // Scene 1: 603帧 → 过渡占 60帧 (10%)
  { enter: 25, reveal: 35 },   // Scene 2: 449帧 → 过渡占 60帧 (13%)
  { enter: 20, reveal: 30 },   // Scene 3: 356帧 → 过渡占 50帧 (14%)
  { enter: 20, reveal: 30 },   // Scene 4: 336帧 → 过渡占 50帧 (15%)
];

/**
 * 构建配音条目 - 与 EP01 一致的构建方式
 */
function buildTrailerVoiceoverEntries() {
  const entries: { src: string; startFrame: number; durationFrames: number }[] =
    [];

  const sceneSubs = [
    { subs: scene01Subs, offset: SCENE_OFFSETS[0] },
    { subs: scene02Subs, offset: SCENE_OFFSETS[1] },
    { subs: scene03Subs, offset: SCENE_OFFSETS[2] },
    { subs: scene04Subs, offset: SCENE_OFFSETS[3] },
    { subs: scene05Subs, offset: SCENE_OFFSETS[4] },
  ];

  let globalIndex = 0;
  for (let i = 0; i < sceneSubs.length; i++) {
    const scene = sceneSubs[i];
    for (const sub of scene.subs) {
      entries.push({
        src: `${VOICE_DIR}voice_${String(globalIndex).padStart(4, "0")}.m4a`,
        startFrame: scene.offset + sub.startFrame,
        durationFrames: sub.endFrame - sub.startFrame,
      });
      globalIndex++;
    }
  }

  return entries;
}

export const TrailerDocumentary: React.FC = () => {
  useVideoConfig();

  const bgm = getEpisodeBGM("Trailer");
  const voiceoverEntries = buildTrailerVoiceoverEntries();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* 全局暗角效果 - 与 EP01 一致 */}
      <VignetteOverlay intensity={0.25} duration={15} />

      {/* 背景音乐 */}
      {bgm && <Audio {...bgm} />}

      {/* 配音 */}
      <Voiceover entries={voiceoverEntries} volume={0.8} />

      {/* Scene 0: 开场 - 戏剧性揭示 */}
      <Sequence durationInFrames={SCENE_FRAMES[0]}>
        <ThemedTransition
          theme={SCENE_THEMES[0]}
          type="enter"
          duration={TRANSITION_CONFIGS[0].enter}
        >
          <DramaticRevealShot
            revealMethod="zoom"
            revealDuration={TRANSITION_CONFIGS[0].reveal}
            accentColor="#FFD700"
          >
            <OpeningDocumentaryScene durationFrames={SCENE_FRAMES[0]} />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene01Subs} />
      </Sequence>

      {/* Scene 1: 问题 - 特写镜头 */}
      <Sequence from={SCENE_OFFSETS[1]} durationInFrames={SCENE_FRAMES[1]}>
        <ThemedTransition
          theme={SCENE_THEMES[1]}
          type="enter"
          duration={TRANSITION_CONFIGS[1].enter}
        >
          <CloseUpShot
            type="object"
            intensity="subtle"
            focusPosition={{ x: 50, y: 40 }}
            duration={SCENE_FRAMES[1]}
          >
            <QuestionDocumentaryScene durationFrames={SCENE_FRAMES[1]} />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={scene02Subs} />
      </Sequence>

      {/* Scene 2: 危机 - 戏剧性揭示 */}
      <Sequence from={SCENE_OFFSETS[2]} durationInFrames={SCENE_FRAMES[2]}>
        <ThemedTransition
          theme={SCENE_THEMES[2]}
          type="enter"
          duration={TRANSITION_CONFIGS[2].enter}
        >
          <DramaticRevealShot
            revealMethod="lightBurst"
            revealDuration={TRANSITION_CONFIGS[2].reveal}
            accentColor="#E53E3E"
          >
            <CrisisDocumentaryScene durationFrames={SCENE_FRAMES[2]} />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene03Subs} />
      </Sequence>

      {/* Scene 3: 中国 - 特写镜头 */}
      <Sequence from={SCENE_OFFSETS[3]} durationInFrames={SCENE_FRAMES[3]}>
        <ThemedTransition
          theme={SCENE_THEMES[3]}
          type="enter"
          duration={TRANSITION_CONFIGS[3].enter}
        >
          <CloseUpShot
            type="object"
            intensity="medium"
            focusPosition={{ x: 50, y: 50 }}
            duration={SCENE_FRAMES[3]}
          >
            <ChinaDocumentaryScene durationFrames={SCENE_FRAMES[3]} />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={scene04Subs} />
      </Sequence>

      {/* Scene 4: 预告 - 戏剧性揭示 */}
      <Sequence from={SCENE_OFFSETS[4]} durationInFrames={SCENE_FRAMES[4]}>
        <ThemedTransition
          theme={SCENE_THEMES[4]}
          type="enter"
          duration={TRANSITION_CONFIGS[4].enter}
        >
          <DramaticRevealShot
            revealMethod="dissolve"
            revealDuration={TRANSITION_CONFIGS[4].reveal}
            accentColor="#FFD700"
          >
            <ComingSoonDocumentaryScene durationFrames={SCENE_FRAMES[4]} />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene05Subs} />
      </Sequence>
    </AbsoluteFill>
  );
};

// ============ 场景组件 ============

interface SceneProps {
  durationFrames: number;
}

const OpeningDocumentaryScene: React.FC<SceneProps> = ({ durationFrames }) => {
  return <OpeningSceneContent durationFrames={durationFrames} />;
};

const QuestionDocumentaryScene: React.FC<SceneProps> = ({ durationFrames }) => {
  return <QuestionSceneContent durationFrames={durationFrames} />;
};

const CrisisDocumentaryScene: React.FC<SceneProps> = ({ durationFrames }) => {
  return <CrisisSceneContent durationFrames={durationFrames} />;
};

const ChinaDocumentaryScene: React.FC<SceneProps> = ({ durationFrames }) => {
  return <ChinaSceneContent durationFrames={durationFrames} />;
};

const ComingSoonDocumentaryScene: React.FC<SceneProps> = ({ durationFrames }) => {
  return <ComingSoonSceneContent durationFrames={durationFrames} />;
};

// ============ 场景内容组件 ============

import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../components/documentary";
import { useCurrentFrame, interpolate, spring } from "remotion";

interface SceneContentProps {
  durationFrames: number;
}

/**
 * Scene 0: 开场 - 标题展示
 * 背景: financial-war.jpg (战争主题)
 * 字幕: 货币战争 / 战争已经开始 / 关乎财富 / 正在发生
 */
const OpeningSceneContent: React.FC<SceneContentProps> = ({ durationFrames }) => {
  const frame = useCurrentFrame();

  const titleScale = spring({
    frame: frame - 15,
    fps: 30,
    config: { damping: 10, stiffness: 60 },
  });

  const subtitleOpacity = interpolate(
    frame,
    [60, 100],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  const quoteOpacity = interpolate(
    frame,
    [120, 180],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  return (
    <>
      <ImageLayer
        src="/assets/images/ep01/financial-war.jpg"
        kenBurns={{ panDirection: "zoom-in", intensity: "dramatic" }}
        layer={{ filter: "dramatic", opacity: 0.7 }}
        startFrame={0}
        durationFrames={durationFrames}
        fadeOutDuration={20}
      />
      <Vignette intensity={0.7} />
      <FilmGrain opacity={0.1} />

      <DocumentaryOverlay
        year=""
        title="Currency Wars"
        subtitle="货币战争"
        frame={frame}
        fadeInDuration={45}
      />

      {/* 主标题 */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: `translateX(-50%) scale(${titleScale})`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 72,
            fontWeight: 700,
            color: "#ffd700",
            letterSpacing: 8,
            textShadow: "0 0 30px rgba(255,215,0,0.5)",
          }}
        >
          货币战争
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#e8e8e8",
            marginTop: 20,
            opacity: subtitleOpacity,
            letterSpacing: 4,
          }}
        >
          CURRENCY WARS
        </div>
      </div>

      {/* 引用文字 */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            fontSize: 26,
            color: "#ef4444",
            fontStyle: "italic",
            textShadow: "0 0 30px rgba(239,68,68,0.6)",
            maxWidth: "80%",
          }}
        >
          "战争已经开始，虽然看不见硝烟"
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#9ca3af",
            marginTop: 12,
          }}
        >
          — 宋鸿兵
        </div>
      </div>
    </>
  );
};

/**
 * Scene 1: 问题 - 货币制度疑问
 * 背景: ep09-global-map.jpg (全球地图，匹配"世界"货币制度主题)
 * 字幕: 为什么债务货币制度 / 特殊利益集团 / 夺取货币发行权
 */
const QuestionSceneContent: React.FC<SceneContentProps> = ({ durationFrames }) => {
  const frame = useCurrentFrame();

  const questions = [
    { text: "为什么世界会采取债务货币制度？", delay: 30, color: "#ffd700" },
    { text: "什么样的特殊利益集团左右着货币制度？", delay: 180, color: "#e8e8e8" },
    { text: "他们如何从政府手中夺取了货币发行大权？", delay: 330, color: "#ef4444" },
    { text: "这些问题的答案，将揭示世界经济的真正运行逻辑。", delay: 480, color: "#9ca3af" },
  ];

  return (
    <>
      {/* 全球地图背景 - 匹配"世界"货币制度主题 */}
      <ImageLayer
        src="/assets/images/ep09/ep09-global-map.jpg"
        kenBurns={{ panDirection: "right", intensity: "moderate" }}
        layer={{ filter: "dramatic", opacity: 0.6 }}
        startFrame={0}
        durationFrames={durationFrames}
        fadeOutDuration={20}
      />
      <Vignette intensity={0.8} />
      <FilmGrain opacity={0.1} />

      {/* 问号装饰 */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 100,
          color: "rgba(255, 215, 0, 0.15)",
          fontWeight: 700,
        }}
      >
        ?
      </div>

      {/* 问题列表 - 动态淡入 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "85%",
        }}
      >
        {questions.map((q, index) => {
          const opacity = interpolate(
            frame,
            [q.delay, q.delay + 40],
            [0, 1],
            { extrapolateRight: "clamp" }
          );

          const translateY = interpolate(
            frame,
            [q.delay, q.delay + 30],
            [25, 0],
            { extrapolateRight: "clamp" }
          );

          return (
            <div
              key={index}
              style={{
                marginBottom: 35,
                textAlign: "center",
                opacity,
                transform: `translateY(${translateY}px)`,
              }}
            >
              <div
                style={{
                  fontSize: index === 0 ? 30 : index === 3 ? 18 : 24,
                  color: q.color,
                  textShadow: "0 0 20px rgba(0,0,0,0.9)",
                  fontWeight: index === 0 ? 600 : 400,
                }}
              >
                {q.text}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

/**
 * Scene 2: 危机 - 债务沙滩上的货币大厦
 * 背景: ep01-debt-crisis.jpg (债务危机主题)
 * 字幕: 2008危机 / 债务沙滩 / 美元危机 / 更大危机酝酿
 * 意境: 强调结构性脆弱，而非具体统计数据
 */
const CrisisSceneContent: React.FC<SceneContentProps> = ({ durationFrames }) => {
  const frame = useCurrentFrame();

  // 大厦将倾的视觉效果
  const buildingTilt = interpolate(
    frame,
    [100, 350],
    [0, 8],
    { extrapolateRight: "clamp" }
  );

  const warningPulse = 0.7 + Math.sin(frame * 0.15) * 0.3;

  return (
    <>
      {/* 债务沙滩背景 */}
      <ImageLayer
        src="/assets/images/ep01/ep01-debt-crisis.jpg"
        kenBurns={{ panDirection: "zoom-in", intensity: "dramatic" }}
        layer={{ filter: "dramatic", opacity: 0.75 }}
        startFrame={0}
        durationFrames={durationFrames}
        fadeOutDuration={20}
      />
      <Vignette intensity={0.8} />
      <FilmGrain opacity={0.12} />

      <DocumentaryOverlay
        year="2008"
        title="The Fragile Foundation"
        subtitle="脆弱的基础"
        frame={frame}
        fadeInDuration={35}
      />

      {/* 核心隐喻：货币大厦建立在沙滩上 */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "50%",
          transform: `translateX(-50%) rotate(${buildingTilt}deg)`,
          textAlign: "center",
          opacity: interpolate(frame, [40, 90], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        {/* 大厦图标 */}
        <div
          style={{
            fontSize: 80,
            color: "#ffd700",
            textShadow: "0 0 30px rgba(255,215,0,0.6)",
            marginBottom: 10,
          }}
        >
          🏛️
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 28,
            color: "#ffd700",
            fontWeight: 700,
            letterSpacing: 3,
          }}
        >
          货币大厦
        </div>
      </div>

      {/* 沙滩基础 */}
      <div
        style={{
          position: "absolute",
          top: "48%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: interpolate(frame, [80, 130], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            fontSize: 50,
            marginBottom: 8,
          }}
        >
          🏖️
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#d4a574",
            fontWeight: 600,
          }}
        >
          债务沙滩
        </div>
      </div>

      {/* 警告文字 */}
      <div
        style={{
          position: "absolute",
          top: "62%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          maxWidth: "80%",
          padding: "18px 35px",
          background: `rgba(139, 0, 0, ${0.7 * warningPulse})`,
          border: "2px solid #ef4444",
          borderRadius: 8,
          opacity: interpolate(frame, [180, 230], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: "#e8e8e8",
            lineHeight: 1.6,
          }}
        >
          全世界的货币大厦建立在
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#ef4444",
            fontWeight: 700,
            marginTop: 8,
          }}
        >
          美国的债务沙滩之上
        </div>
      </div>

      {/* 底部警告 */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: interpolate(frame, [300, 350], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            fontSize: 18,
            color: "#f97316",
            fontStyle: "italic",
          }}
        >
          更大的危机还在酝酿之中...
        </div>
      </div>
    </>
  );
};

/**
 * Scene 3: 中国 - 经济崛起
 * 背景: china-economic-rise.jpg (中国经济)
 * 字幕: 经济航母起航 / 一帆风顺吗 / 金融战争威胁 / 如何应对
 */
const ChinaSceneContent: React.FC<SceneContentProps> = ({ durationFrames }) => {
  const frame = useCurrentFrame();

  return (
    <>
      <ImageLayer
        src="/assets/images/ep01/china-economic-rise.jpg"
        kenBurns={{ panDirection: "right", intensity: "moderate" }}
        layer={{ filter: "dramatic", opacity: 0.7 }}
        startFrame={0}
        durationFrames={durationFrames}
        fadeOutDuration={20}
      />
      <Vignette intensity={0.7} />
      <FilmGrain opacity={0.08} />

      {/* 主标题 */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: interpolate(frame, [25, 65], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 36,
            fontWeight: 700,
            color: "#ffd700",
            letterSpacing: 2,
            textShadow: "0 0 15px rgba(255,215,0,0.4)",
          }}
        >
          中国经济航母已经起航
        </div>
      </div>

      {/* 问句 */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: interpolate(frame, [90, 130], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            fontSize: 30,
            color: "#e8e8e8",
            textShadow: "0 0 20px rgba(0,0,0,0.8)",
          }}
        >
          会一帆风顺吗？
        </div>
      </div>

      {/* 警告 */}
      <div
        style={{
          position: "absolute",
          top: "52%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          maxWidth: "80%",
          opacity: interpolate(frame, [160, 200], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: "#ef4444",
            textShadow: "0 0 15px rgba(239,68,68,0.4)",
          }}
        >
          看不见硝烟的金融战争威胁日益加剧
        </div>
      </div>

      {/* 底部引言 */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          maxWidth: "70%",
          padding: "12px 25px",
          background: "rgba(0,0,0,0.7)",
          borderLeft: "4px solid #ffd700",
          opacity: interpolate(frame, [260, 300], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            fontSize: 14,
            color: "#9ca3af",
            fontStyle: "italic",
          }}
        >
          "起航的中国经济航母，将面临前所未有的金融风暴"
        </div>
      </div>
    </>
  );
};

/**
 * Scene 4: 预告 - Coming Soon
 * 背景: ep11-eternity-opening.jpg (宇宙星空，宏大主题)
 * 字幕: 11集揭示真相 / 罗斯柴尔德到美联储 / 一战到亚洲危机 / 敬请期待
 */
const ComingSoonSceneContent: React.FC<SceneContentProps> = ({ durationFrames }) => {
  const frame = useCurrentFrame();

  const episodes = [
    { ep: "EP01", title: "罗斯柴尔德家族", color: "#ffd700" },
    { ep: "EP02", title: "美联储的诞生", color: "#22c55e" },
    { ep: "EP03", title: "一战与金融", color: "#3b82f6" },
    { ep: "EP04", title: "金融危机", color: "#ef4444" },
    { ep: "EP05", title: "亚洲危机", color: "#f97316" },
  ];

  const pulseScale = 1 + Math.sin(frame * 0.1) * 0.02;

  return (
    <>
      <ImageLayer
        src="/assets/images/ep11/ep11-eternity-opening.jpg"
        kenBurns={{ panDirection: "zoom-in", intensity: "subtle" }}
        layer={{ filter: "dramatic", opacity: 0.5 }}
        startFrame={0}
        durationFrames={durationFrames}
        fadeOutDuration={20}
      />
      <Vignette intensity={0.6} />
      <FilmGrain opacity={0.08} />

      {/* 顶部说明 */}
      <div
        style={{
          position: "absolute",
          top: "16%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: interpolate(frame, [15, 50], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            fontSize: 26,
            color: "#e8e8e8",
            textShadow: "0 0 15px rgba(0,0,0,0.8)",
          }}
        >
          11集节目为你揭示真相
        </div>
      </div>

      {/* Episode 标签网格 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 10,
          maxWidth: "80%",
        }}
      >
        {episodes.map((ep, index) => {
          const delay = 50 + index * 20;
          const opacity = interpolate(
            frame,
            [delay, delay + 25],
            [0, 1],
            { extrapolateRight: "clamp" }
          );

          return (
            <div
              key={index}
              style={{
                padding: "10px 20px",
                background: "rgba(0,0,0,0.7)",
                borderRadius: 6,
                border: `2px solid ${ep.color}`,
                textAlign: "center",
                boxShadow: `0 0 12px ${ep.color}40`,
                opacity,
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  color: ep.color,
                  fontWeight: 700,
                  marginBottom: 3,
                }}
              >
                {ep.ep}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#e8e8e8",
                }}
              >
                {ep.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Coming Soon 主标题 */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: `translateX(-50%) scale(${pulseScale})`,
          textAlign: "center",
          opacity: interpolate(frame, [170, 210], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 52,
            fontWeight: 700,
            color: "#ffd700",
            letterSpacing: 6,
            textShadow: "0 0 30px rgba(255,215,0,0.5)",
          }}
        >
          Coming Soon
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#9ca3af",
            marginTop: 12,
          }}
        >
          敬请期待
        </div>
      </div>
    </>
  );
};

export default TrailerDocumentary;