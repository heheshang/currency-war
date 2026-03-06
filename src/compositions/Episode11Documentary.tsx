import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Audio } from "../components/Audio";
import { Subtitles } from "../components/Subtitles";
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
  EternityOpeningDocumentaryScene,
  MonetaryStandardDocumentaryScene,
  GoldSilverStandardDocumentaryScene,
  DebtObesityDocumentaryScene,
  FinancialAirForceDocumentaryScene,
  GrandStrategyDocumentaryScene,
  WorldReserveDocumentaryScene,
  FinancialRiskDocumentaryScene,
  GrandEndingDocumentaryScene,
} from "../components/scenes/episode11/documentary";
// 按Scene分离的字幕 - 基于实际配音时长
import {
  SCENE_FRAMES,
  SCENE_OFFSETS,
  openingSubs,
  monetaryStandardSubs,
  goldSilverSubs,
  debtObesitySubs,
  financialAirForceSubs,
  strategySubs,
  worldReserveSubs,
  financialRiskSubs,
  endingSubs,
} from "../subtitles/episode11";

const VOICE_DIR = "/assets/audio/voiceover/episode11/";

// 场景主题配置 - Episode 11: 终章（揭示/胜利主题）
const SCENE_THEMES: TransitionTheme[] = [
  "revelation", // Scene 1: 开场
  "ancient", // Scene 2: 货币标准
  "ancient", // Scene 3: 金银本位
  "tragedy", // Scene 4: 债务肥胖
  "war", // Scene 5: 金融空军
  "conspiracy", // Scene 6: 大战略
  "finance", // Scene 7: 世界储备
  "tragedy", // Scene 8: 金融风险
  "triumph", // Scene 9: 终章结尾
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
    { subs: monetaryStandardSubs, offset: SCENE_OFFSETS[1] },
    { subs: goldSilverSubs, offset: SCENE_OFFSETS[2] },
    { subs: debtObesitySubs, offset: SCENE_OFFSETS[3] },
    { subs: financialAirForceSubs, offset: SCENE_OFFSETS[4] },
    { subs: strategySubs, offset: SCENE_OFFSETS[5] },
    { subs: worldReserveSubs, offset: SCENE_OFFSETS[6] },
    { subs: financialRiskSubs, offset: SCENE_OFFSETS[7] },
    { subs: endingSubs, offset: SCENE_OFFSETS[8] },
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
 * Episode11Documentary - 第11集纪录片版：黄金终极之战
 *
 * 总时长：593.6秒 = 17812帧 (@30fps)
 *
 * 场景时长（基于配音实际时长）:
 * - Scene 0: 48.4s - Opening
 * - Scene 1: 70.8s - Monetary Standard
 * - Scene 2: 69.5s - Gold Silver
 * - Scene 3: 49.6s - Debt Obesity
 * - Scene 4: 35.5s - Financial Air Force
 * - Scene 5: 145.4s - Strategy
 * - Scene 6: 60.4s - World Reserve
 * - Scene 7: 79.2s - Financial Risk
 * - Scene 8: 34.7s - Ending
 *
 * 电影级动画增强版 - 包含主题式过渡、镜头特写、戏剧性揭示
 */
export const Episode11Documentary: React.FC = () => {
  useVideoConfig();

  const bgm = getEpisodeBGM("Episode11");
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

      {/* Scene 0: Opening (48.4s = 1451帧) */}
      <Sequence durationInFrames={SCENE_FRAMES[0]}>
        <ThemedTransition theme={SCENE_THEMES[0]} type="enter" duration={45}>
          <DramaticRevealShot
            revealMethod="lightBurst"
            revealDuration={55}
            accentColor="#FFD700"
            lightRays={true}
          >
            <EternityOpeningDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={openingSubs} />
      </Sequence>
      {/* Scene 1: Monetary Standard (70.8s = 2126帧) */}
      <Sequence from={SCENE_OFFSETS[1]} durationInFrames={SCENE_FRAMES[1]}>
        <ThemedTransition theme={SCENE_THEMES[1]} type="enter" duration={40}>
          <DramaticRevealShot
            revealMethod="zoom"
            revealDuration={50}
            accentColor="#C0C0C0"
          >
            <MonetaryStandardDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={monetaryStandardSubs} />
      </Sequence>
      {/* Scene 2: Gold Silver (69.5s = 2085帧) */}
      <Sequence from={SCENE_OFFSETS[2]} durationInFrames={SCENE_FRAMES[2]}>
          <ThemedTransition theme={SCENE_THEMES[2]} type="enter" duration={30}>
            <CloseUpShot
              type="object"
              intensity="subtle"
              focusPosition={{ x: 50, y: 50 }}
            >
              <GoldSilverStandardDocumentaryScene />
            </CloseUpShot>
          </ThemedTransition>
          <Subtitles subtitles={goldSilverSubs} />
      </Sequence>
      {/* Scene 3: Debt Obesity (49.6s = 1490帧) */}
      <Sequence from={SCENE_OFFSETS[3]} durationInFrames={SCENE_FRAMES[3]}>
        <ThemedTransition theme={SCENE_THEMES[3]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="shatter"
            revealDuration={45}
            accentColor="#8B0000"
          >
            <DebtObesityDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={debtObesitySubs} />
      </Sequence>
      {/* Scene 4: Financial Air Force (35.5s = 1066帧) */}
      <Sequence from={SCENE_OFFSETS[4]} durationInFrames={SCENE_FRAMES[4]}>
          <ThemedTransition theme={SCENE_THEMES[4]} type="enter" duration={30}>
            <DramaticRevealShot
              revealMethod="lightBurst"
              revealDuration={45}
              accentColor="#FF4500"
            >
              <FinancialAirForceDocumentaryScene />
            </DramaticRevealShot>
          </ThemedTransition>
          <Subtitles subtitles={financialAirForceSubs} />
      </Sequence>
      {/* Scene 5: Strategy (145.4s = 4364帧) */}
      <Sequence from={SCENE_OFFSETS[5]} durationInFrames={SCENE_FRAMES[5]}>
        <ThemedTransition theme={SCENE_THEMES[5]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="dissolve"
            revealDuration={50}
            accentColor="#2F4F4F"
          >
            <GrandStrategyDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={strategySubs} />
      </Sequence>
      {/* Scene 6: World Reserve (60.4s = 1812帧) */}
      <Sequence from={SCENE_OFFSETS[6]} durationInFrames={SCENE_FRAMES[6]}>
        <ThemedTransition theme={SCENE_THEMES[6]} type="enter" duration={30}>
          <CloseUpShot
            type="object"
            intensity="medium"
            focusPosition={{ x: 50, y: 50 }}
          >
            <WorldReserveDocumentaryScene />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={worldReserveSubs} />
      </Sequence>
      {/* Scene 7: Financial Risk (79.2s = 2376帧) */}
      <Sequence from={SCENE_OFFSETS[7]} durationInFrames={SCENE_FRAMES[7]}>
        <ThemedTransition theme={SCENE_THEMES[7]} type="enter" duration={40}>
          <DramaticRevealShot
            revealMethod="shatter"
            revealDuration={55}
            accentColor="#8B0000"
          >
            <FinancialRiskDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={financialRiskSubs} />
      </Sequence>
      {/* Scene 8: Ending (34.7s = 1042帧) */}
      <Sequence from={SCENE_OFFSETS[8]} durationInFrames={SCENE_FRAMES[8]}>
        <ThemedTransition theme={SCENE_THEMES[8]} type="enter" duration={45}>
          <DramaticRevealShot
            revealMethod="zoom"
            revealDuration={60}
            accentColor="#FFD700"
            lightRays={true}
          >
            <GrandEndingDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={endingSubs} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Episode11Documentary;
