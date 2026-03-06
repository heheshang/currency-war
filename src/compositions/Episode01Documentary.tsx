import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Subtitles } from "../components/Subtitles";
import { Audio } from "../components/Audio";
import { Voiceover } from "../components/Voiceover";
import { getEpisodeBGM } from "../utils/audioConfig";
import { VignetteOverlay } from "../components/animations/SceneTransition";

// 电影级动画组件
import {
  ThemedTransition,
  CloseUpShot,
  DramaticRevealShot,
} from "../components/animations";
import type { TransitionTheme } from "../components/animations";

// Documentary scenes from episode01/documentary
import {
  // 新增组件 (修复场景-字幕不匹配)
  AuthorWarningDocumentary,
  PaperMoneyEvolutionDocumentary,
  ChinaFinancialRiskDocumentary,
  // 原有组件
  AncientMarketDocumentary,
  ChinaRiseDocumentary,
  DebtTrapDocumentary,
  ProphecyDocumentary,
  HistoryWarningDocumentary,
  WarBeginsDocumentary,
} from "../components/scenes/episode01/documentary";


// Per-scene subtitles (9个场景字幕)
import {
  SCENE_FRAMES,
  SCENE_OFFSETS,
  scene01Subs,
  scene02Subs,
  scene03Subs,
  scene04Subs,
  scene05Subs,
  scene06Subs,
  scene07Subs,
  scene08Subs,
  scene09Subs,
} from "../subtitles/episode01";

const VOICE_DIR = "/assets/audio/voiceover/episode01/";

/**
 * Episode01Documentary - 第1集纪录片版：货币战争的序幕
 *
 * 全面优化版 - 动画与字幕情感匹配
 *
 * revealMethod 语义:
 * - zoom: 放大揭示 - 开场、权力
 * - lightBurst: 光芒希望 - 积极转折、财富
 * - shatter: 破碎危机 - 悲剧、阴谋揭示
 * - dissolve: 溶解历史 - 历史背景
 *
 * accentColor 语义:
 * - #FFD700: 金色 - 财富、希望
 * - #4B0082: 深紫 - 阴谋、神秘
 * - #8B0000: 血红 - 悲剧、危机
 * - #E53E3E: 警告红 - 危险
 * - #2F4F4F: 深灰 - 阴影、隐形
 */

// 场景主题配置 (已优化匹配)
const SCENE_THEMES: TransitionTheme[] = [
  "revelation", // Scene 0: 作者2006年的忧虑与预言
  "ancient",   // Scene 1: 黄金白银的终极地位
  "conspiracy", // Scene 2: 纸币演变与1971年转折
  "mystery",   // Scene 3: 债务货币的陷阱
  "revelation", // Scene 4: 金融危机推论成真
  "finance",   // Scene 5: 中国经济航母起航
  "war",       // Scene 6: 中国面临的金融战争风险
  "tragedy",   // Scene 7: 历史的警示
  "triumph",   // Scene 8: 战争已经开始
];

function buildVoiceoverEntries() {
  const entries: { src: string; startFrame: number; durationFrames: number }[] =
    [];

  const sceneSubs = [
    { subs: scene01Subs, offset: SCENE_OFFSETS[0] },
    { subs: scene02Subs, offset: SCENE_OFFSETS[1] },
    { subs: scene03Subs, offset: SCENE_OFFSETS[2] },
    { subs: scene04Subs, offset: SCENE_OFFSETS[3] },
    { subs: scene05Subs, offset: SCENE_OFFSETS[4] },
    { subs: scene06Subs, offset: SCENE_OFFSETS[5] },
    { subs: scene07Subs, offset: SCENE_OFFSETS[6] },
    { subs: scene08Subs, offset: SCENE_OFFSETS[7] },
    { subs: scene09Subs, offset: SCENE_OFFSETS[8] },
  ];

  let globalIndex = 0;
  for (const scene of sceneSubs) {
    for (const sub of scene.subs) {
      entries.push({
        src: `${VOICE_DIR}voice_${String(globalIndex).padStart(4, "0")}.mp3`,
        startFrame: scene.offset + sub.startFrame,
        durationFrames: sub.endFrame - sub.startFrame,
      });
      globalIndex++;
    }
  }

  return entries;
}

export const Episode01Documentary: React.FC = () => {
  useVideoConfig();

  const bgm = getEpisodeBGM("Episode01");
  const voiceoverEntries = buildVoiceoverEntries();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <VignetteOverlay intensity={0.25} duration={15} />
      {bgm && <Audio {...bgm} />}
      <Voiceover entries={voiceoverEntries} volume={0.8} />

      {/* Scene 0: 作者2006年的忧虑与预言 */}
      <Sequence durationInFrames={SCENE_FRAMES[0]}>
        <ThemedTransition theme={SCENE_THEMES[0]} type="enter" duration={45}>
          <DramaticRevealShot
            revealMethod="lightBurst"
            revealDuration={60}
            accentColor="#ECC94B"
          >
            <AuthorWarningDocumentary durationFrames={SCENE_FRAMES[0]} />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene01Subs} />
      </Sequence>

      {/* Scene 1: 黄金白银的终极地位 */}
      <Sequence from={SCENE_OFFSETS[1]} durationInFrames={SCENE_FRAMES[1]}>
        <ThemedTransition theme={SCENE_THEMES[1]} type="enter" duration={30}>
          <CloseUpShot
            type="object"
            intensity="subtle"
            focusPosition={{ x: 50, y: 40 }}
          >
            <AncientMarketDocumentary durationFrames={SCENE_FRAMES[1]} />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={scene02Subs} />
      </Sequence>

      {/* Scene 2: 纸币演变与1971年转折 */}
      <Sequence from={SCENE_OFFSETS[2]} durationInFrames={SCENE_FRAMES[2]}>
        <ThemedTransition theme={SCENE_THEMES[2]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="dissolve"
            revealDuration={50}
            accentColor="#4B0082"
          >
            <PaperMoneyEvolutionDocumentary durationFrames={SCENE_FRAMES[2]} />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene03Subs} />
      </Sequence>

      {/* Scene 3: 债务货币的陷阱 - 血红破碎展示陷阱 */}
      <Sequence from={SCENE_OFFSETS[3]} durationInFrames={SCENE_FRAMES[3]}>
        <ThemedTransition theme={SCENE_THEMES[3]} type="enter" duration={40}>
          <DramaticRevealShot
            revealMethod="shatter"
            revealDuration={50}
            accentColor="#8B0000"
          >
            <DebtTrapDocumentary durationFrames={SCENE_FRAMES[3]} />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene04Subs} />
      </Sequence>

      {/* Scene 4: 金融危机推论 - 警告红光芒预示危机 */}
      <Sequence from={SCENE_OFFSETS[4]} durationInFrames={SCENE_FRAMES[4]}>
        <ThemedTransition theme={SCENE_THEMES[4]} type="enter" duration={30}>
          <DramaticRevealShot
            revealMethod="lightBurst"
            revealDuration={45}
            accentColor="#E53E3E"
          >
            <ProphecyDocumentary durationFrames={SCENE_FRAMES[4]} />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene05Subs} />
      </Sequence>

      {/* Scene 5: 中国经济航母起航 - 金色光芒象征希望 */}
      <Sequence from={SCENE_OFFSETS[5]} durationInFrames={SCENE_FRAMES[5]}>
        <ThemedTransition theme={SCENE_THEMES[5]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="lightBurst"
            revealDuration={50}
            accentColor="#FFD700"
          >
            <ChinaRiseDocumentary durationFrames={SCENE_FRAMES[5]} />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene06Subs} />
      </Sequence>

      {/* Scene 6: 中国面临的金融战争风险 */}
      <Sequence from={SCENE_OFFSETS[6]} durationInFrames={SCENE_FRAMES[6]}>
        <ThemedTransition theme={SCENE_THEMES[6]} type="enter" duration={40}>
          <DramaticRevealShot
            revealMethod="shatter"
            revealDuration={50}
            accentColor="#E53E3E"
          >
            <ChinaFinancialRiskDocumentary durationFrames={SCENE_FRAMES[6]} />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene07Subs} />
      </Sequence>

      {/* Scene 7: 历史的警示 - 红色破碎警示悲剧 */}
      <Sequence from={SCENE_OFFSETS[7]} durationInFrames={SCENE_FRAMES[7]}>
        <ThemedTransition theme={SCENE_THEMES[7]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="shatter"
            revealDuration={55}
            accentColor="#E53E3E"
          >
            <HistoryWarningDocumentary durationFrames={SCENE_FRAMES[7]} />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene08Subs} />
      </Sequence>

      {/* Scene 8: 战争已经开始 - 血红放大警示 */}
      <Sequence from={SCENE_OFFSETS[8]} durationInFrames={SCENE_FRAMES[8]}>
        <ThemedTransition theme={SCENE_THEMES[8]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="zoom"
            revealDuration={55}
            accentColor="#8B0000"
          >
            <WarBeginsDocumentary durationFrames={SCENE_FRAMES[8]} />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene09Subs} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Episode01Documentary;
