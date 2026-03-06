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
  UndeclaredWarOpeningDocumentaryScene,
  OilCrisisDocumentaryScene,
  VolckerDocumentaryScene,
  IMFConditionalityDocumentaryScene,
  JapanBubbleDocumentaryScene,
  SorosDocumentaryScene,
  AsianCrisisDocumentaryScene,
  UndeclaredWarSummaryDocumentaryScene,
} from "../components/scenes/episode09/documentary";

// 按Scene分离的字幕
import {
  openingSubs,
  oilCrisisSubs,
  volckerSubs,
  imfSubs,
  japanBubbleSubs,
  sorosSubs,
  asiaCrisisSubs,
  summarySubs,
} from "../subtitles/episode09";

const VOICE_DIR = "/assets/audio/voiceover/episode09/";

// 场景主题配置 - Episode 09: 不宣而战的货币战争（战争/金融主题）
const SCENE_THEMES: TransitionTheme[] = [
  "war", // Scene 1: 开场
  "war", // Scene 2: 石油危机
  "finance", // Scene 3: 沃尔克
  "conspiracy", // Scene 4: IMF条件性
  "tragedy", // Scene 5: 日本泡沫
  "finance", // Scene 6: 索罗斯
  "tragedy", // Scene 7: 亚洲危机
  "revelation", // Scene 8: 总结
];

function buildVoiceoverEntries() {
  const entries: { src: string; startFrame: number; durationFrames: number }[] =
    [];
  let fileIndex = 0;
  const fps = 30;

  const sceneOffsets = [
    { subs: openingSubs, offset: 0 },
    { subs: oilCrisisSubs, offset: 30 * fps },
    { subs: volckerSubs, offset: 90 * fps },
    { subs: imfSubs, offset: 150 * fps },
    { subs: japanBubbleSubs, offset: 210 * fps },
    { subs: sorosSubs, offset: 270 * fps },
    { subs: asiaCrisisSubs, offset: 330 * fps },
    { subs: summarySubs, offset: 390 * fps },
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
 * Episode09Documentary - 第9集：不宣而战的货币战争 (纪录片风格)
 *
 * 使用纪录片风格的场景组件
 * 场景字幕设计：
 * - 每个Scene有自己的字幕，从第0帧开始
 *
 * 电影级动画增强版 - 包含主题式过渡、镜头特写、戏剧性揭示
 */
export const Episode09Documentary: React.FC = () => {
  const { fps } = useVideoConfig();
  const bgm = getEpisodeBGM("Episode09");
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
        <ThemedTransition theme={SCENE_THEMES[0]} type="enter" duration={45}>
          <DramaticRevealShot
            revealMethod="shatter"
            revealDuration={50}
            accentColor="#8B0000"
          >
            <UndeclaredWarOpeningDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={openingSubs} />
      </Sequence>
      {/* Scene 2: Oil Crisis (60s = 1800帧) */}
      <Sequence from={30 * fps} durationInFrames={60 * fps}>
          <ThemedTransition theme={SCENE_THEMES[1]} type="enter" duration={30}>
            <DramaticRevealShot
              revealMethod="lightBurst"
              revealDuration={45}
              accentColor="#FF4500"
            >
              <OilCrisisDocumentaryScene />
            </DramaticRevealShot>
          </ThemedTransition>
          <Subtitles subtitles={oilCrisisSubs} />
      </Sequence>
      {/* Scene 3: Volcker (60s = 1800帧) */}
      <Sequence from={90 * fps} durationInFrames={60 * fps}>
        <ThemedTransition theme={SCENE_THEMES[2]} type="enter" duration={35}>
          <CloseUpShot
            type="face"
            intensity="medium"
            focusPosition={{ x: 50, y: 45 }}
          >
            <VolckerDocumentaryScene />
          </CloseUpShot>
        </ThemedTransition>
        <Subtitles subtitles={volckerSubs} />
      </Sequence>
      {/* Scene 4: IMF Conditionality (60s = 1800帧) */}
      <Sequence from={150 * fps} durationInFrames={60 * fps}>
        <ThemedTransition theme={SCENE_THEMES[3]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="dissolve"
            revealDuration={45}
            accentColor="#2F4F4F"
          >
            <IMFConditionalityDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={imfSubs} />
      </Sequence>
      {/* Scene 5: Japan Bubble (60s = 1800帧) */}
      <Sequence from={210 * fps} durationInFrames={60 * fps}>
          <ThemedTransition theme={SCENE_THEMES[4]} type="enter" duration={30}>
            <CloseUpShot
              type="object"
              intensity="dramatic"
              focusPosition={{ x: 50, y: 50 }}
            >
              <JapanBubbleDocumentaryScene />
            </CloseUpShot>
          </ThemedTransition>
          <Subtitles subtitles={japanBubbleSubs} />
      </Sequence>
      {/* Scene 6: Soros (60s = 1800帧) */}
      <Sequence from={270 * fps} durationInFrames={60 * fps}>
        <ThemedTransition theme={SCENE_THEMES[5]} type="enter" duration={35}>
          <DramaticRevealShot
            revealMethod="zoom"
            revealDuration={50}
            accentColor="#FFD700"
          >
            <SorosDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={sorosSubs} />
      </Sequence>
      {/* Scene 7: Asian Crisis (60s = 1800帧) */}
      <Sequence from={330 * fps} durationInFrames={60 * fps}>
        <ThemedTransition theme={SCENE_THEMES[6]} type="enter" duration={40}>
          <DramaticRevealShot
            revealMethod="shatter"
            revealDuration={55}
            accentColor="#8B0000"
          >
            <AsianCrisisDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={asiaCrisisSubs} />
      </Sequence>
      {/* Scene 8: Summary (30s = 900帧) */}
      <Sequence from={390 * fps} durationInFrames={30 * fps}>
        <ThemedTransition theme={SCENE_THEMES[7]} type="enter" duration={45}>
          <DramaticRevealShot
            revealMethod="zoom"
            revealDuration={60}
            accentColor="#FFFFFF"
            lightRays={true}
          >
            <UndeclaredWarSummaryDocumentaryScene />
          </DramaticRevealShot>
        </ThemedTransition>
        <Subtitles subtitles={summarySubs} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Episode09Documentary;
