import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Audio } from "../components/Audio";
import { Subtitles } from "../components/Subtitles";
import { Voiceover } from "../components/Voiceover";
import { getEpisodeBGM } from "../utils/audioConfig";
import { VignetteOverlay } from "../components/animations/SceneTransition";

import {
  ThemedTransition,
  CloseUpShot,
  DramaticRevealShot,
} from "../components/animations";
import type { TransitionTheme } from "../components/animations";

import {
  DocumentaryFamilyIntroScene,
  DocumentaryMayersFirstFortuneScene,
  DocumentaryBankOfEnglandScene,
  DocumentaryWaterlooScene,
  DocumentaryTwentyTimesProfitScene,
  DocumentaryEuropeanEmpireScene,
  DocumentaryStockExchangeScene,
  DocumentaryInvisibleWealthScene,
} from "../components/scenes/episode02/documentary";

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
} from "../subtitles/episode02";

const VOICE_DIR = "/assets/audio/voiceover/episode02/";

/**
 * Episode02Documentary - 第2集纪录片版：罗斯柴尔德家族
 *
 * 全面优化版 - 动画与字幕情感匹配
 *
 * 动画语义:
 * - dissolve + #4B0082: 深紫溶解 - 神秘揭示
 * - dissolve + #2F4F4F: 深灰溶解 - 隐形财富
 * - shatter + #8B0000: 血红破碎 - 战争阴谋
 * - shatter + #4B0082: 深紫破碎 - 操纵阴谋
 * - lightBurst + #8B0000: 血红光芒 - 血色利润
 * - zoom + #483D8B: 皇室紫放大 - 帝国扩张
 * - zoom + #FFD700: 金色放大 - 权力巅峰
 */

const SCENE_THEMES: TransitionTheme[] = [
  "revelation", // Scene 0: 开场 - 揭示
  "mystery", // Scene 1: 隐形首富 - 神秘
  "ancient", // Scene 2: 第一桶金 - 历史
  "war", // Scene 3: 滑铁卢 - 战争
  "finance", // Scene 4: 股票操纵 - 金融
  "triumph", // Scene 5: 二十倍利润 - 胜利
  "ancient", // Scene 6: 五兄弟 - 历史
  "triumph", // Scene 7: 帝国巅峰 - 权力
  "mystery", // Scene 8: 隐形财富 - 神秘
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

export const Episode02Documentary: React.FC = () => {
  useVideoConfig();
  const bgm = getEpisodeBGM("Episode02");
  const voiceoverEntries = buildVoiceoverEntries();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <VignetteOverlay intensity={0.25} duration={15} />
      {bgm && <Audio {...bgm} />}
      <Voiceover entries={voiceoverEntries} volume={0.8} />

      {/* Scene 0: 开场 - 深紫溶解揭示神秘家族 */}
      <Sequence durationInFrames={SCENE_FRAMES[0]}>
        <ThemedTransition theme={SCENE_THEMES[0]} type="enter" duration={45}>
          <DramaticRevealShot
            revealMethod="dissolve"
            revealDuration={50}
            accentColor="#4B0082"
          >
            <DocumentaryFamilyIntroScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene01Subs} />
      </Sequence>

      {/* Scene 1: 隐形的世界首富 - 深灰溶解暗示隐形财富 */}
      <Sequence from={SCENE_OFFSETS[1]} durationInFrames={SCENE_FRAMES[1]}>
        <ThemedTransition theme={SCENE_THEMES[1]} type="enter" duration={30}>
          <DramaticRevealShot
            revealMethod="dissolve"
            revealDuration={40}
            accentColor="#2F4F4F"
          >
            <DocumentaryInvisibleWealthScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene02Subs} />
      </Sequence>

      {/* Scene 2: 梅耶的第一桶金 - 宁静历史叙述 */}
      <Sequence from={SCENE_OFFSETS[2]} durationInFrames={SCENE_FRAMES[2]}>
        <ThemedTransition theme={SCENE_THEMES[2]} type="enter" duration={35}>
          <CloseUpShot
            type="object"
            intensity="subtle"
            focusPosition={{ x: 50, y: 40 }}
          >
            <DocumentaryMayersFirstFortuneScene />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={scene03Subs} />
      </Sequence>

      {/* Scene 3: 滑铁卢与情报网络 - 血红破碎揭示战争阴谋 */}
      <Sequence from={SCENE_OFFSETS[3]} durationInFrames={SCENE_FRAMES[3]}>
        <ThemedTransition theme={SCENE_THEMES[3]} type="enter" duration={40}>
          <DramaticRevealShot
            revealMethod="shatter"
            revealDuration={50}
            accentColor="#8B0000"
          >
            <DocumentaryWaterlooScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene04Subs} />
      </Sequence>

      {/* Scene 4: 股票交易所操纵 - 深紫破碎揭示操纵阴谋 */}
      <Sequence from={SCENE_OFFSETS[4]} durationInFrames={SCENE_FRAMES[4]}>
        <ThemedTransition theme={SCENE_THEMES[4]} type="enter" duration={30}>
          <DramaticRevealShot
            revealMethod="shatter"
            revealDuration={45}
            accentColor="#4B0082"
          >
            <DocumentaryStockExchangeScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene05Subs} />
      </Sequence>

      {/* Scene 5: 二十倍利润 - 血红光芒象征血色利润 */}
      <Sequence from={SCENE_OFFSETS[5]} durationInFrames={SCENE_FRAMES[5]}>
        <ThemedTransition theme={SCENE_THEMES[5]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="lightBurst"
            revealDuration={55}
            accentColor="#8B0000"
          >
            <DocumentaryTwentyTimesProfitScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene06Subs} />
      </Sequence>

      {/* Scene 6: 五兄弟征服欧洲 - 皇室紫放大展示帝国扩张 */}
      <Sequence from={SCENE_OFFSETS[6]} durationInFrames={SCENE_FRAMES[6]}>
        <ThemedTransition theme={SCENE_THEMES[6]} type="enter" duration={30}>
          <DramaticRevealShot
            revealMethod="zoom"
            revealDuration={50}
            accentColor="#483D8B"
          >
            <DocumentaryEuropeanEmpireScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene07Subs} />
      </Sequence>

      {/* Scene 7: 金融帝国巅峰 - 金色放大展示权力巅峰 */}
      <Sequence from={SCENE_OFFSETS[7]} durationInFrames={SCENE_FRAMES[7]}>
        <ThemedTransition theme={SCENE_THEMES[7]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="zoom"
            revealDuration={60}
            accentColor="#FFD700"
          >
            <DocumentaryBankOfEnglandScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene08Subs} />
      </Sequence>

      {/* Scene 8: 隐形财富 - 深灰溶解回归神秘 */}
      <Sequence from={SCENE_OFFSETS[8]} durationInFrames={SCENE_FRAMES[8]}>
        <ThemedTransition theme={SCENE_THEMES[8]} type="enter" duration={45}>
          <DramaticRevealShot
            revealMethod="dissolve"
            revealDuration={50}
            accentColor="#2F4F4F"
          >
            <DocumentaryInvisibleWealthScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={scene09Subs} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Episode02Documentary;
