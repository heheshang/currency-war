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
  HonestMoneyOpeningDocumentaryScene,
  KennedyDocumentaryScene,
  SilverHistoryDocumentaryScene,
  GoldPoolDocumentaryScene,
  SDRDocumentaryScene,
  NixonGoldDocumentaryScene,
  PetrodollarDocumentaryScene,
  ReaganDocumentaryScene,
  HonestMoneySummaryDocumentaryScene,
} from "../components/scenes/episode08/documentary";

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

const VOICE_DIR = "/assets/audio/voiceover/episode08/";

// 场景主题配置 - Episode 08: 诚实货币的最后抗争（悲剧/战争主题）
const SCENE_THEMES: TransitionTheme[] = [
  "mystery", // Scene 1: 开场
  "tragedy", // Scene 2: 肯尼迪遇刺
  "conspiracy", // Scene 3: 动机
  "ancient", // Scene 4: 白银历史
  "tragedy", // Scene 5: 白银本位终结
  "tragedy", // Scene 6: 肯尼迪之死
  "finance", // Scene 7: 黄金池
  "finance", // Scene 8: SDR
  "war", // Scene 9: 尼克松黄金
  "finance", // Scene 10: 石油美元
  "war", // Scene 11: 里根
  "revelation", // Scene 12: 总结
];

function buildVoiceoverEntries() {
  const entries: { src: string; startFrame: number; durationFrames: number }[] =
    [];
  let fileIndex = 0;
  const fps = 30;

  const sceneOffsets = [
    { subs: openingSubs, offset: 0 },
    { subs: kennedyAssassinationSubs, offset: 30 * fps },
    { subs: motivationSubs, offset: 90 * fps },
    { subs: silverHistorySubs, offset: 150 * fps },
    { subs: silverStandardEndSubs, offset: 210 * fps },
    { subs: kennedyDeathSubs, offset: 270 * fps },
    { subs: goldPoolSubs, offset: 330 * fps },
    { subs: sdrSubs, offset: 390 * fps },
    { subs: nixonGoldSubs, offset: 450 * fps },
    { subs: petrodollarSubs, offset: 510 * fps },
    { subs: reaganSubs, offset: 570 * fps },
    { subs: summarySubs, offset: 630 * fps },
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

/**
 * Episode08Documentary - 第8集：诚实货币的最后抗争 (纪录片风格版本)
 *
 * 使用纪录片风格的场景组件
 * 电影级动画增强版 - 包含主题式过渡、镜头特写、戏剧性揭示
 */
export const Episode08Documentary: React.FC = () => {
  const { fps } = useVideoConfig();

  const bgm = getEpisodeBGM("Episode08");
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

      {/* Scene 1: Opening (30s = 900帧) */}
      <Sequence durationInFrames={30 * fps}>
        <ThemedTransition theme={SCENE_THEMES[0]} type="enter" duration={40}>
          <DramaticRevealShot
            revealMethod="dissolve"
            revealDuration={45}
            accentColor="#4B0082"
          >
            <HonestMoneyOpeningDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={openingSubs} />
      </Sequence>
      {/* Scene 2: Kennedy Assassination (60s = 1800帧) */}
      <Sequence from={30 * fps} durationInFrames={60 * fps}>
          <ThemedTransition theme={SCENE_THEMES[1]} type="enter" duration={35}>
            <CloseUpShot
              type="face"
              intensity="dramatic"
              focusPosition={{ x: 50, y: 40 }}
            >
              <KennedyDocumentaryScene />
            </CloseUpShot>
          </ThemedTransition>
          <Subtitles subtitles={kennedyAssassinationSubs} />
      </Sequence>
      {/* Scene 3: Motivation (60s = 1800帧) */}
      <Sequence from={90 * fps} durationInFrames={60 * fps}>
        <ThemedTransition theme={SCENE_THEMES[2]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="lightBurst"
            revealDuration={45}
            accentColor="#2F4F4F"
          >
            <KennedyDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={motivationSubs} />
      </Sequence>
      {/* Scene 4: Silver History (60s = 1800帧) */}
      <Sequence from={150 * fps} durationInFrames={60 * fps}>
        <ThemedTransition theme={SCENE_THEMES[3]} type="enter" duration={40}>
          <DramaticRevealShot
            revealMethod="zoom"
            revealDuration={50}
            accentColor="#C0C0C0"
          >
            <SilverHistoryDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={silverHistorySubs} />
      </Sequence>
      {/* Scene 5: Silver Standard End (60s = 1800帧) */}
      <Sequence from={210 * fps} durationInFrames={60 * fps}>
          <ThemedTransition theme={SCENE_THEMES[4]} type="enter" duration={30}>
            <CloseUpShot
              type="object"
              intensity="medium"
              focusPosition={{ x: 50, y: 50 }}
            >
              <SilverHistoryDocumentaryScene />
            </CloseUpShot>
          </ThemedTransition>
          <Subtitles subtitles={silverStandardEndSubs} />
      </Sequence>
      {/* Scene 6: Kennedy Death (60s = 1800帧) */}
      <Sequence from={270 * fps} durationInFrames={60 * fps}>
        <ThemedTransition theme={SCENE_THEMES[5]} type="enter" duration={45}>
          <DramaticRevealShot
            revealMethod="shatter"
            revealDuration={55}
            accentColor="#8B0000"
          >
            <KennedyDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={kennedyDeathSubs} />
      </Sequence>
      {/* Scene 7: Gold Pool (60s = 1800帧) */}
      <Sequence from={330 * fps} durationInFrames={60 * fps}>
        <ThemedTransition theme={SCENE_THEMES[6]} type="enter" duration={30}>
          <CloseUpShot
            type="object"
            intensity="subtle"
            focusPosition={{ x: 50, y: 50 }}
          >
            <GoldPoolDocumentaryScene />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={goldPoolSubs} />
      </Sequence>
      {/* Scene 8: SDR (60s = 1800帧) */}
      <Sequence from={390 * fps} durationInFrames={60 * fps}>
          <ThemedTransition theme={SCENE_THEMES[7]} type="enter" duration={30}>
            <SDRDocumentaryScene />
          </ThemedTransition>
          <Subtitles subtitles={sdrSubs} />
      </Sequence>
      {/* Scene 9: Nixon Gold (60s = 1800帧) */}
      <Sequence from={450 * fps} durationInFrames={60 * fps}>
        <ThemedTransition theme={SCENE_THEMES[8]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="lightBurst"
            revealDuration={45}
            accentColor="#FFD700"
          >
            <NixonGoldDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={nixonGoldSubs} />
      </Sequence>
      {/* Scene 10: Petrodollar (60s = 1800帧) */}
      <Sequence from={510 * fps} durationInFrames={60 * fps}>
        <ThemedTransition theme={SCENE_THEMES[9]} type="enter" duration={30}>
          <CloseUpShot
            type="object"
            intensity="medium"
            focusPosition={{ x: 50, y: 50 }}
          >
            <PetrodollarDocumentaryScene />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={petrodollarSubs} />
      </Sequence>
      {/* Scene 11: Reagan (60s = 1800帧) */}
      <Sequence from={570 * fps} durationInFrames={60 * fps}>
        <ThemedTransition theme={SCENE_THEMES[10]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="shatter"
            revealDuration={50}
            accentColor="#2F4F4F"
          >
            <ReaganDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={reaganSubs} />
      </Sequence>
      {/* Scene 12: Summary (30s = 900帧) */}
      <Sequence from={630 * fps} durationInFrames={30 * fps}>
        <ThemedTransition theme={SCENE_THEMES[11]} type="enter" duration={45}>
          <DramaticRevealShot
            revealMethod="zoom"
            revealDuration={60}
            accentColor="#FFFFFF"
            lightRays={true}
          >
            <HonestMoneySummaryDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={summarySubs} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Episode08Documentary;
