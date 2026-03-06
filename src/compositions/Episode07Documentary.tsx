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

// Documentary scenes from episode07/documentary
import {
  NewWorldOrderOpeningDocumentaryScene,
  BrettonWoodsDocumentaryScene,
  ColonelHouseDocumentaryScene,
  CFRDocumentaryScene,
  BISDocumentaryScene,
  BilderbergDocumentaryScene,
  TrilateralDocumentaryScene,
} from "../components/scenes/episode07/documentary";
import {
  SCENE_FRAMES,
  SCENE_OFFSETS,
  openingSubs,
  brettonWoodsSubs,
  houseColonelSubs,
  cfrEliteSubs,
  bisSubs,
  bilderbergSubs,
  trilateralSubs,
} from "../subtitles/episode07";

const VOICE_DIR = "/assets/audio/voiceover/episode07/";

// 场景主题配置 - Episode 07: 统治世界的精英俱乐部（阴谋/神秘主题）
const SCENE_THEMES: TransitionTheme[] = [
  "mystery", // Scene 1: 新世界秩序开场
  "finance", // Scene 2: 布雷顿森林会议
  "conspiracy", // Scene 3: 豪斯上校
  "conspiracy", // Scene 4: 外交协会
  "conspiracy", // Scene 5: 国际清算银行
  "mystery", // Scene 6: 彼尔德伯格俱乐部
  "revelation", // Scene 7: 三边委员会
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
    { subs: brettonWoodsSubs, offset: SCENE_OFFSETS[1] },
    { subs: houseColonelSubs, offset: SCENE_OFFSETS[2] },
    { subs: cfrEliteSubs, offset: SCENE_OFFSETS[3] },
    { subs: bisSubs, offset: SCENE_OFFSETS[4] },
    { subs: bilderbergSubs, offset: SCENE_OFFSETS[5] },
    { subs: trilateralSubs, offset: SCENE_OFFSETS[6] },
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
 * Episode07Documentary - 第7集纪录片版：统治世界的精英俱乐部
 *
 * 总时长：374.9秒 = 11250帧 (@30fps)
 *
 * 基于《货币战争》book1-第六章：统治世界的精英俱乐部
 *
 * 场景序列（基于实际配音时长）:
 * 1. [0-44.1s] 开场 - 新世界秩序
 * 2. [44.1-86.5s] 布雷顿森林会议
 * 3. [86.5-151.8s] 豪斯上校
 * 4. [151.8-224.2s] 外交协会
 * 5. [224.2-292.4s] 国际清算银行
 * 6. [292.4-335.0s] 彼尔德伯格俱乐部
 * 7. [335.0-375.0s] 三边委员会
 *
 * 电影级动画增强版 - 包含主题式过渡、镜头特写、戏剧性揭示
 */
export const Episode07Documentary: React.FC = () => {
  useVideoConfig();

  const bgm = getEpisodeBGM("Episode07");
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

      {/* 场景0: 开场 - 新世界秩序 (44.1s) */}
      <Sequence durationInFrames={SCENE_FRAMES[0]}>
        <ThemedTransition theme={SCENE_THEMES[0]} type="enter" duration={45}>
          <DramaticRevealShot
            revealMethod="dissolve"
            revealDuration={50}
            accentColor="#4B0082"
          >
            <NewWorldOrderOpeningDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={openingSubs} />
      </Sequence>
      {/* 场景1: 布雷顿森林会议 (42.4s) */}
      <Sequence from={SCENE_OFFSETS[1]} durationInFrames={SCENE_FRAMES[1]}>
          <ThemedTransition theme={SCENE_THEMES[1]} type="enter" duration={30}>
            <CloseUpShot
              type="object"
              intensity="medium"
              focusPosition={{ x: 50, y: 50 }}
            >
              <BrettonWoodsDocumentaryScene />
            </CloseUpShot>
          </ThemedTransition>
          <Subtitles subtitles={brettonWoodsSubs} />
      </Sequence>
      {/* 场景2: 豪斯上校 (65.3s) */}
      <Sequence from={SCENE_OFFSETS[2]} durationInFrames={SCENE_FRAMES[2]}>
        <ThemedTransition theme={SCENE_THEMES[2]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="lightBurst"
            revealDuration={45}
            accentColor="#2F4F4F"
          >
            <ColonelHouseDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={houseColonelSubs} />
      </Sequence>
      {/* 场景3: 外交协会 (72.4s) */}
      <Sequence from={SCENE_OFFSETS[3]} durationInFrames={SCENE_FRAMES[3]}>
        <ThemedTransition theme={SCENE_THEMES[3]} type="enter" duration={35}>
          <CloseUpShot
            type="face"
            intensity="dramatic"
            focusPosition={{ x: 50, y: 45 }}
          >
            <CFRDocumentaryScene />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={cfrEliteSubs} />
      </Sequence>
      {/* 场景4: 国际清算银行 (68.2s) */}
      <Sequence from={SCENE_OFFSETS[4]} durationInFrames={SCENE_FRAMES[4]}>
          <ThemedTransition theme={SCENE_THEMES[4]} type="enter" duration={30}>
            <DramaticRevealShot
              revealMethod="shatter"
              revealDuration={40}
              accentColor="#483D8B"
            >
              <BISDocumentaryScene />
            </DramaticRevealShot>
          </ThemedTransition>
          <Subtitles subtitles={bisSubs} />
      </Sequence>
      {/* 场景5: 彼尔德伯格俱乐部 (42.6s) */}
      <Sequence from={SCENE_OFFSETS[5]} durationInFrames={SCENE_FRAMES[5]}>
        <ThemedTransition theme={SCENE_THEMES[5]} type="enter" duration={40}>
          <DramaticRevealShot
            revealMethod="zoom"
            revealDuration={55}
            accentColor="#4B0082"
          >
            <BilderbergDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={bilderbergSubs} />
      </Sequence>
      {/* 场景6: 三边委员会 (40.0s) */}
      <Sequence from={SCENE_OFFSETS[6]} durationInFrames={SCENE_FRAMES[6]}>
        <ThemedTransition theme={SCENE_THEMES[6]} type="enter" duration={45}>
          <DramaticRevealShot
            revealMethod="lightBurst"
            revealDuration={60}
            accentColor="#FFD700"
            lightRays={true}
          >
            <TrilateralDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={trilateralSubs} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Episode07Documentary;
