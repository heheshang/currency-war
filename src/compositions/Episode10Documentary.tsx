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

import {
  DollarFlawOpeningDocumentaryScene,
  FractionalReserveDocumentaryScene,
  DebtDollarDocumentaryScene,
  DerivativesDocumentaryScene,
  HousingBubbleDocumentaryScene,
  GoldPrisonDocumentaryScene,
  GoldCounterDocumentaryScene,
  RothschildDocumentaryScene,
  DollarFlawSummaryDocumentaryScene,
} from "../components/scenes/episode10/documentary";

// 按Scene分离的字幕 - 基于实际配音时长
import {
  SCENE_FRAMES,
  SCENE_OFFSETS,
  openingSubs,
  fractionalReserveSubs,
  debtDollarSubs,
  derivativesSubs,
  fannieFreddieSubs,
  goldPrisonSubs,
  goldCounterSubs,
  rothschildSubs,
  summarySubs,
} from "../subtitles/episode10";

const VOICE_DIR = "/assets/audio/voiceover/episode10/";

// 场景主题配置 - Episode 10: 美元死穴与黄金一阳指（金融/悲剧主题）
const SCENE_THEMES: TransitionTheme[] = [
  "mystery", // Scene 1: 开场
  "finance", // Scene 2: 部分准备金
  "tragedy", // Scene 3: 债务美元
  "conspiracy", // Scene 4: 衍生品
  "tragedy", // Scene 5: 房地产泡沫
  "tragedy", // Scene 6: 黄金监狱
  "triumph", // Scene 7: 黄金反击
  "conspiracy", // Scene 8: 罗斯柴尔德
  "revelation", // Scene 9: 总结
];

/**
 * 构建配音条目 - 根据字幕时间点同步播放配音文件
 */
function buildVoiceoverEntries() {
  const entries: { src: string; startFrame: number; durationFrames: number }[] =
    [];
  let fileIndex = 0;

  const sceneSubs = [
    { subs: openingSubs, offset: SCENE_OFFSETS[0] },
    { subs: fractionalReserveSubs, offset: SCENE_OFFSETS[1] },
    { subs: debtDollarSubs, offset: SCENE_OFFSETS[2] },
    { subs: derivativesSubs, offset: SCENE_OFFSETS[3] },
    { subs: fannieFreddieSubs, offset: SCENE_OFFSETS[4] },
    { subs: goldPrisonSubs, offset: SCENE_OFFSETS[5] },
    { subs: goldCounterSubs, offset: SCENE_OFFSETS[6] },
    { subs: rothschildSubs, offset: SCENE_OFFSETS[7] },
    { subs: summarySubs, offset: SCENE_OFFSETS[8] },
  ];

  for (const scene of sceneSubs) {
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

/**
 * Episode10Documentary - 第10集纪录片版：美元死穴与黄金一阳指
 *
 * 总时长：568.2秒 = 17045帧 (@30fps)
 *
 * 场景时长（基于配音实际时长）:
 * - Scene 0: 48.7s - Opening
 * - Scene 1: 68.6s - Fractional Reserve
 * - Scene 2: 67.6s - Debt Dollar
 * - Scene 3: 54.0s - Derivatives
 * - Scene 4: 47.2s - Fannie/Freddie
 * - Scene 5: 111.4s - Gold Prison
 * - Scene 6: 73.5s - Gold Counter
 * - Scene 7: 39.7s - Rothschild
 * - Scene 8: 57.5s - Summary
 *
 * 电影级动画增强版 - 包含主题式过渡、镜头特写、戏剧性揭示
 */
export const Episode10Documentary: React.FC = () => {
  useVideoConfig();

  const bgm = getEpisodeBGM("Episode10");
  const voiceoverEntries = buildVoiceoverEntries();
  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <VignetteOverlay intensity={0.25} duration={15} />
      {bgm && <Audio {...bgm} />}

      <Voiceover
        voiceoverSrc={VOICE_DIR}
        entries={voiceoverEntries}
        volume={0.8}
      />

      {/* Scene 0: Dollar Flaw Opening (48.7s = 1460帧) */}
      <Sequence durationInFrames={SCENE_FRAMES[0]}>
        <ThemedTransition theme={SCENE_THEMES[0]} type="enter" duration={45}>
          <DramaticRevealShot
            revealMethod="dissolve"
            revealDuration={50}
            accentColor="#4B0082"
          >
            <DollarFlawOpeningDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={openingSubs} />
      </Sequence>
      {/* Scene 1: Fractional Reserve (68.6s = 2060帧) */}
      <Sequence from={SCENE_OFFSETS[1]} durationInFrames={SCENE_FRAMES[1]}>
        <ThemedTransition theme={SCENE_THEMES[1]} type="enter" duration={30}>
          <CloseUpShot
            type="object"
            intensity="medium"
            focusPosition={{ x: 50, y: 50 }}
          >
            <FractionalReserveDocumentaryScene />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={fractionalReserveSubs} />
      </Sequence>
      {/* Scene 2: Debt Dollar (67.6s = 2027帧) */}
      <Sequence from={SCENE_OFFSETS[2]} durationInFrames={SCENE_FRAMES[2]}>
          <ThemedTransition theme={SCENE_THEMES[2]} type="enter" duration={35}>
            <DramaticRevealShot
              revealMethod="shatter"
              revealDuration={45}
              accentColor="#8B0000"
            >
              <DebtDollarDocumentaryScene />
            </DramaticRevealShot>
          </ThemedTransition>
          <Subtitles subtitles={debtDollarSubs} />
      </Sequence>
      {/* Scene 3: Derivatives (54.0s = 1618帧) */}
      <Sequence from={SCENE_OFFSETS[3]} durationInFrames={SCENE_FRAMES[3]}>
        <ThemedTransition theme={SCENE_THEMES[3]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="lightBurst"
            revealDuration={45}
            accentColor="#2F4F4F"
          >
            <DerivativesDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={derivativesSubs} />
      </Sequence>
      {/* Scene 4: Housing Bubble (47.2s = 1418帧) */}
      <Sequence from={SCENE_OFFSETS[4]} durationInFrames={SCENE_FRAMES[4]}>
          <ThemedTransition theme={SCENE_THEMES[4]} type="enter" duration={30}>
            <CloseUpShot
              type="object"
              intensity="dramatic"
              focusPosition={{ x: 50, y: 50 }}
            >
              <HousingBubbleDocumentaryScene />
            </CloseUpShot>
          </ThemedTransition>
          <Subtitles subtitles={fannieFreddieSubs} />
      </Sequence>
      {/* Scene 5: Gold Prison (111.4s = 3342帧) - 黄金操纵阴谋 */}
      <Sequence from={SCENE_OFFSETS[5]} durationInFrames={SCENE_FRAMES[5]}>
        <ThemedTransition theme={SCENE_THEMES[5]} type="enter" duration={40}>
          <DramaticRevealShot
            revealMethod="shatter"
            revealDuration={55}
            accentColor="#8B0000"
          >
            <GoldPrisonDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={goldPrisonSubs} />
      </Sequence>
      {/* Scene 6: Gold Counter (73.5s = 2205帧) */}
      <Sequence from={SCENE_OFFSETS[6]} durationInFrames={SCENE_FRAMES[6]}>
        <ThemedTransition theme={SCENE_THEMES[6]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="lightBurst"
            revealDuration={55}
            accentColor="#FFD700"
            lightRays={true}
          >
            <GoldCounterDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={goldCounterSubs} />
      </Sequence>
      {/* Scene 7: Rothschild (39.7s = 1191帧) */}
      <Sequence from={SCENE_OFFSETS[7]} durationInFrames={SCENE_FRAMES[7]}>
          <ThemedTransition theme={SCENE_THEMES[7]} type="enter" duration={30}>
            <CloseUpShot
              type="face"
              intensity="dramatic"
              focusPosition={{ x: 50, y: 40 }}
            >
              <RothschildDocumentaryScene />
            </CloseUpShot>
          </ThemedTransition>
          <Subtitles subtitles={rothschildSubs} />
      </Sequence>
      {/* Scene 8: Dollar Flaw Summary (57.5s = 1724帧) */}
      <Sequence from={SCENE_OFFSETS[8]} durationInFrames={SCENE_FRAMES[8]}>
        <ThemedTransition theme={SCENE_THEMES[8]} type="enter" duration={45}>
          <DramaticRevealShot
            revealMethod="zoom"
            revealDuration={60}
            accentColor="#FFFFFF"
            lightRays={true}
          >
            <DollarFlawSummaryDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={summarySubs} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Episode10Documentary;
