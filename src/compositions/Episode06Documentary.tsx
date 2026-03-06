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

// Documentary scenes from episode06/documentary - 廉价货币的新政
import {
  OpeningDocumentaryScene,
  KeynesDocumentaryScene,
  Election1932DocumentaryScene,
  GoldStandardDocumentaryScene,
  HitlerSelectedDocumentaryScene,
  WallStreetNaziDocumentaryScene,
  WarAndMoneyDocumentaryScene,
  SummaryDocumentaryScene,
} from "../components/scenes/episode06/documentary";

// Per-scene subtitles (廉价货币的新政)
import {
  SCENE_FRAMES,
  SCENE_OFFSETS,
  openingSubs,
  keynesSubs,
  election1932Subs,
  goldStandardSubs,
  hitlerSelectedSubs,
  wallStreetNaziSubs,
  warAndMoneySubs,
  summarySubs,
} from "../subtitles/episode06";

const VOICE_DIR = "/assets/audio/voiceover/episode06/";

function buildVoiceoverEntries() {
  const entries: { src: string; startFrame: number; durationFrames: number }[] =
    [];
  let fileIndex = 0;

  const sceneSubs = [
    { subs: openingSubs, offset: SCENE_OFFSETS[0] },
    { subs: keynesSubs, offset: SCENE_OFFSETS[1] },
    { subs: election1932Subs, offset: SCENE_OFFSETS[2] },
    { subs: goldStandardSubs, offset: SCENE_OFFSETS[3] },
    { subs: hitlerSelectedSubs, offset: SCENE_OFFSETS[4] },
    { subs: wallStreetNaziSubs, offset: SCENE_OFFSETS[5] },
    { subs: warAndMoneySubs, offset: SCENE_OFFSETS[6] },
    { subs: summarySubs, offset: SCENE_OFFSETS[7] },
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

// 场景主题配置 - 廉价货币的新政
const SCENE_THEMES: TransitionTheme[] = [
  "revelation", // Scene 0: 开场 - 凯恩斯的警告
  "finance", // Scene 1: 凯恩斯的廉价货币理论
  "conspiracy", // Scene 2: 1932年总统大选
  "finance", // Scene 3: 废除金本位
  "conspiracy", // Scene 4: 华尔街选中希特勒
  "conspiracy", // Scene 5: 华尔街资助纳粹
  "war", // Scene 6: 战争与货币
  "revelation", // Scene 7: 总结
];

/**
 * Episode06Documentary - 第6集纪录片版：廉价货币的新政
 *
 * 基于《货币战争》book1-第五章：廉价货币的新政
 * 主题：国际银行家如何通过废除金本位铺平通往第二次世界大战的道路
 *
 * 总时长：11,340帧 (@ 30fps) ≈ 378秒
 *
 * 场景序列（基于实际配音时长）:
 * 0. [0-30s] 开场 - 凯恩斯的警告
 * 1. [30-90s] 凯恩斯的"廉价货币"理论
 * 2. [90-138s] 1932年总统大选
 * 3. [138-192s] 罗斯福与废除金本位
 * 4. [192-240s] 华尔街选中希特勒
 * 5. [240-288s] 华尔街资助纳粹德国
 * 6. [288-336s] 昂贵的战争与廉价的货币
 * 7. [336-378s] 总结
 */
export const Episode06Documentary: React.FC = () => {
  useVideoConfig();

  const bgm = getEpisodeBGM("Episode06");
  const voiceoverEntries = buildVoiceoverEntries();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <VignetteOverlay intensity={0.25} duration={15} />
      {bgm && <Audio {...bgm} />}

      <Voiceover entries={voiceoverEntries} volume={0.8} />

      {/* Scene 0: 开场 - 凯恩斯的警告 */}
      <Sequence durationInFrames={SCENE_FRAMES[0]}>
        <ThemedTransition theme={SCENE_THEMES[0]} type="enter" duration={45}>
          <DramaticRevealShot
            revealMethod="dissolve"
            revealDuration={50}
            accentColor="#4B0082"
          >
            <OpeningDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={openingSubs} />
      </Sequence>

      {/* Scene 1: 凯恩斯的廉价货币理论 */}
      <Sequence from={SCENE_OFFSETS[1]} durationInFrames={SCENE_FRAMES[1]}>
        <ThemedTransition theme={SCENE_THEMES[1]} type="enter" duration={40}>
          <CloseUpShot
            type="object"
            intensity="medium"
            focusPosition={{ x: 50, y: 45 }}
          >
            <KeynesDocumentaryScene />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={keynesSubs} />
      </Sequence>

      {/* Scene 2: 1932年总统大选 */}
      <Sequence from={SCENE_OFFSETS[2]} durationInFrames={SCENE_FRAMES[2]}>
        <ThemedTransition theme={SCENE_THEMES[2]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="zoom"
            revealDuration={45}
            accentColor="#8B4513"
          >
            <Election1932DocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={election1932Subs} />
      </Sequence>

      {/* Scene 3: 废除金本位 */}
      <Sequence from={SCENE_OFFSETS[3]} durationInFrames={SCENE_FRAMES[3]}>
        <ThemedTransition theme={SCENE_THEMES[3]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="shatter"
            revealDuration={50}
            accentColor="#FFD700"
          >
            <GoldStandardDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={goldStandardSubs} />
      </Sequence>

      {/* Scene 4: 华尔街选中希特勒 */}
      <Sequence from={SCENE_OFFSETS[4]} durationInFrames={SCENE_FRAMES[4]}>
        <ThemedTransition theme={SCENE_THEMES[4]} type="enter" duration={40}>
          <DramaticRevealShot
            revealMethod="lightBurst"
            revealDuration={55}
            accentColor="#8B0000"
          >
            <HitlerSelectedDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={hitlerSelectedSubs} />
      </Sequence>

      {/* Scene 5: 华尔街资助纳粹德国 */}
      <Sequence from={SCENE_OFFSETS[5]} durationInFrames={SCENE_FRAMES[5]}>
        <ThemedTransition theme={SCENE_THEMES[5]} type="enter" duration={35}>
          <CloseUpShot
            type="object"
            intensity="dramatic"
            focusPosition={{ x: 50, y: 40 }}
          >
            <WallStreetNaziDocumentaryScene />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={wallStreetNaziSubs} />
      </Sequence>

      {/* Scene 6: 战争与货币 */}
      <Sequence from={SCENE_OFFSETS[6]} durationInFrames={SCENE_FRAMES[6]}>
        <ThemedTransition theme={SCENE_THEMES[6]} type="enter" duration={45}>
          <DramaticRevealShot
            revealMethod="shatter"
            revealDuration={60}
            accentColor="#DC143C"
          >
            <WarAndMoneyDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={warAndMoneySubs} />
      </Sequence>

      {/* Scene 7: 总结 */}
      <Sequence from={SCENE_OFFSETS[7]} durationInFrames={SCENE_FRAMES[7]}>
        <ThemedTransition theme={SCENE_THEMES[7]} type="enter" duration={50}>
          <DramaticRevealShot
            revealMethod="zoom"
            revealDuration={60}
            accentColor="#FFFFFF"
            lightRays={true}
          >
            <SummaryDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={summarySubs} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Episode06Documentary;
