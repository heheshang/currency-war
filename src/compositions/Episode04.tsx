import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Subtitles } from "../components/Subtitles";
import { Audio } from "../components/Audio";
import { Voiceover } from "../components/Voiceover";
import { getEpisodeBGM } from "../utils/audioConfig";

const VOICE_DIR = "/assets/audio/voiceover/episode04/";

function buildVoiceoverEntries() {
  const entries: { src: string; startFrame: number; durationFrames: number }[] =
    [];
  let fileIndex = 0;
  const fps = 30;

  const sceneOffsets = [
    { subs: OpeningSceneSubtitles, offset: 0 },
    { subs: JekyllIslandSceneSubtitles, offset: 35 * fps },
    { subs: WallStreetTycoonsSceneSubtitles, offset: 95 * fps },
    { subs: MorganRiseSceneSubtitles, offset: 170 * fps },
    { subs: RockefellerEmpireSceneSubtitles, offset: 240 * fps },
    { subs: Panic1907SceneSubtitles, offset: 310 * fps },
    { subs: GoldToFiatSceneSubtitles, offset: 370 * fps },
    { subs: Election1912SceneSubtitles, offset: 430 * fps },
    { subs: PlanBSceneSubtitles, offset: 490 * fps },
    { subs: ActPassesSceneSubtitles, offset: 550 * fps },
    { subs: WhoOwnsFedSceneSubtitles, offset: 630 * fps },
    { subs: HiddenControlSceneSubtitles, offset: 700 * fps },
    { subs: WilsonRealizationSceneSubtitles, offset: 760 * fps },
    { subs: SummarySceneSubtitles, offset: 810 * fps },
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
import {
  OpeningWilsonScene,
  JekyllIslandScene,
  SevenTycoonsScene,
  MorganFamilyScene,
  RockefellerScene,
  Panic1907Scene,
  GoldToFiatScene,
  Election1912Scene,
  PlanBScene,
  ActPassesScene,
  WhoOwnsFedScene,
  HiddenControlScene,
  WilsonRealizationScene,
  SummaryScene,
} from "../components/scenes/episode04";
import {
  OpeningSceneSubtitles,
  JekyllIslandSceneSubtitles,
  WallStreetTycoonsSceneSubtitles,
  MorganRiseSceneSubtitles,
  RockefellerEmpireSceneSubtitles,
  Panic1907SceneSubtitles,
  GoldToFiatSceneSubtitles,
  Election1912SceneSubtitles,
  PlanBSceneSubtitles,
  ActPassesSceneSubtitles,
  WhoOwnsFedSceneSubtitles,
  HiddenControlSceneSubtitles,
  WilsonRealizationSceneSubtitles,
  SummarySceneSubtitles,
} from "../subtitles/episode04";

/**
 * Episode04 - 第4集：美联储——私有的中央银行
 *
 * 基于《货币战争》第三章内容
 * 严肃历史纪录片风格，揭示美联储成立的秘密历史
 *
 * 总时长：约12-14分钟（720-840秒 = 21600-25200帧 @ 30fps）
 *
 * 场景序列：
 * 0. [0-35s] 开场 - 威尔逊的悔恨
 * 1. [35-95s] 哲基尔岛秘密会议
 * 2. [95-170s] 华尔街7巨头
 * 3. [170-240s] 摩根家族兴起
 * 4. [240-310s] 洛克菲勒帝国
 * 5. [310-370s] 1907年恐慌 - 前奏
 * 6. [370-430s] 金本位到法定货币
 * 7. [430-490s] 1912年大选
 * 8. [490-550s] B计划 - 两套方案
 * 9. [550-630s] 法案通过
 * 10. [630-700s] 谁拥有美联储
 * 11. [700-760s] 隐藏的控制
 * 12. [760-810s] 威尔逊的醒悟
 * 13. [810-840s] 总结
 */
export const Episode04: React.FC = () => {
  const { fps } = useVideoConfig();

  const bgm = getEpisodeBGM("Episode04");
  const voiceoverEntries = buildVoiceoverEntries();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgm && <Audio {...bgm} />}

      <Voiceover
        voiceoverSrc={VOICE_DIR}
        entries={voiceoverEntries}
        volume={0.8}
      />

      {/* Scene 0: 开场 - 威尔逊的悔恨 (0-35s = 帧 0-1050) */}
      <Sequence durationInFrames={35 * fps}>
        <OpeningWilsonScene />
        <Subtitles subtitles={OpeningSceneSubtitles} />
      </Sequence>

      {/* Scene 1: 哲基尔岛秘密会议 (35-95s = 帧 1050-2850) */}
      <Sequence from={35 * fps} durationInFrames={60 * fps}>
        <JekyllIslandScene />
        <Subtitles subtitles={JekyllIslandSceneSubtitles} />
      </Sequence>

      {/* Scene 2: 华尔街7巨头 (95-170s = 帧 2850-5100) */}
      <Sequence from={95 * fps} durationInFrames={75 * fps}>
        <SevenTycoonsScene />
        <Subtitles subtitles={WallStreetTycoonsSceneSubtitles} />
      </Sequence>

      {/* Scene 3: 摩根家族兴起 (170-240s = 帧 5100-7200) */}
      <Sequence from={170 * fps} durationInFrames={70 * fps}>
        <MorganFamilyScene />
        <Subtitles subtitles={MorganRiseSceneSubtitles} />
      </Sequence>

      {/* Scene 4: 洛克菲勒帝国 (240-310s = 帧 7200-9300) */}
      <Sequence from={240 * fps} durationInFrames={70 * fps}>
        <RockefellerScene />
        <Subtitles subtitles={RockefellerEmpireSceneSubtitles} />
      </Sequence>

      {/* Scene 5: 1907年恐慌 - 前奏 (310-370s = 帧 9300-11100) */}
      <Sequence from={310 * fps} durationInFrames={60 * fps}>
        <Panic1907Scene />
        <Subtitles subtitles={Panic1907SceneSubtitles} />
      </Sequence>

      {/* Scene 6: 金本位到法定货币 (370-430s = 帧 11100-12900) */}
      <Sequence from={370 * fps} durationInFrames={60 * fps}>
        <GoldToFiatScene />
        <Subtitles subtitles={GoldToFiatSceneSubtitles} />
      </Sequence>

      {/* Scene 7: 1912年大选 (430-490s = 帧 12900-14700) */}
      <Sequence from={430 * fps} durationInFrames={60 * fps}>
        <Election1912Scene />
        <Subtitles subtitles={Election1912SceneSubtitles} />
      </Sequence>

      {/* Scene 8: B计划 - 两套方案 (490-550s = 帧 14700-16500) */}
      <Sequence from={490 * fps} durationInFrames={60 * fps}>
        <PlanBScene />
        <Subtitles subtitles={PlanBSceneSubtitles} />
      </Sequence>

      {/* Scene 9: 法案通过 (550-630s = 帧 16500-18900) */}
      <Sequence from={550 * fps} durationInFrames={80 * fps}>
        <ActPassesScene />
        <Subtitles subtitles={ActPassesSceneSubtitles} />
      </Sequence>

      {/* Scene 10: 谁拥有美联储 (630-700s = 帧 18900-21000) */}
      <Sequence from={630 * fps} durationInFrames={70 * fps}>
        <WhoOwnsFedScene />
        <Subtitles subtitles={WhoOwnsFedSceneSubtitles} />
      </Sequence>

      {/* Scene 11: 隐藏的控制 (700-760s = 帧 21000-22800) */}
      <Sequence from={700 * fps} durationInFrames={60 * fps}>
        <HiddenControlScene />
        <Subtitles subtitles={HiddenControlSceneSubtitles} />
      </Sequence>

      {/* Scene 12: 威尔逊的醒悟 (760-810s = 帧 22800-24300) */}
      <Sequence from={760 * fps} durationInFrames={50 * fps}>
        <WilsonRealizationScene />
        <Subtitles subtitles={WilsonRealizationSceneSubtitles} />
      </Sequence>

      {/* Scene 13: 总结 (810-840s = 帧 24300-25200) */}
      <Sequence from={810 * fps} durationInFrames={30 * fps}>
        <SummaryScene />
        <Subtitles subtitles={SummarySceneSubtitles} />
      </Sequence>
    </AbsoluteFill>
  );
};

// 默认导出
export default Episode04;
