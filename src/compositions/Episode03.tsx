import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Subtitles } from "../components/Subtitles";
import { Audio } from "../components/Audio";
import { Voiceover } from "../components/Voiceover";
import { getEpisodeBGM } from "../utils/audioConfig";

const VOICE_DIR = "/assets/audio/voiceover/episode03/";

function buildVoiceoverEntries() {
  const entries: { src: string; startFrame: number; durationFrames: number }[] =
    [];
  let fileIndex = 0;
  const fps = 30;

  const sceneOffsets = [
    { subs: openingLincolnSubs, offset: 0 },
    { subs: colonialCurrencySubs, offset: 15 * fps },
    { subs: firstBankSubs, offset: 45 * fps },
    { subs: charterExpirationSubs, offset: 75 * fps },
    { subs: jacksonBankWarSubs, offset: 105 * fps },
    { subs: civilWarPreludeSubs, offset: 135 * fps },
    { subs: greenbackSubs, offset: 165 * fps },
    { subs: russianAllianceSubs, offset: 195 * fps },
    { subs: assassinationSubs, offset: 225 * fps },
    { subs: nationalBankActSubs, offset: 255 * fps },
    { subs: summarySubs, offset: 285 * fps },
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
  OpeningLincolnScene,
  ColonialCurrencyScene,
  FirstBankScene,
  CharterExpirationScene,
  JacksonBankWarScene,
  CivilWarPreludeScene,
  GreenbackScene,
  RussianAllianceScene,
  AssassinationScene,
  NationalBankActScene,
  SummaryScene,
} from "../components/scenes/episode03";
// 按Scene分离的字幕
import {
  openingLincolnSubs,
  colonialCurrencySubs,
  firstBankSubs,
  charterExpirationSubs,
  jacksonBankWarSubs,
  civilWarPreludeSubs,
  greenbackSubs,
  russianAllianceSubs,
  assassinationSubs,
  nationalBankActSubs,
  summarySubs,
} from "../subtitles/episode03";

/**
 * Episode03 - 第3集：国际银行家和美国总统的百年战争
 *
 * 总时长：6分钟（360秒 = 10800帧 @30fps）
 *
 * 场景字幕设计：
 * - 每个Scene有自己的字幕，从第0帧开始
 * - 字幕时长自动与Scene时长匹配
 */
export const Episode03: React.FC = () => {
  const { fps } = useVideoConfig();
  const bgm = getEpisodeBGM("Episode03");
  const voiceoverEntries = buildVoiceoverEntries();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgm && <Audio {...bgm} />}

      <Voiceover
        voiceoverSrc={VOICE_DIR}
        entries={voiceoverEntries}
        volume={0.8}
      />

      {/* 场景0: 开场 - 林肯名言 (15s = 450帧) */}
      <Sequence durationInFrames={15 * fps}>
        <OpeningLincolnScene />
        <Subtitles subtitles={openingLincolnSubs} />
      </Sequence>

      {/* 场景1: 殖民地货币 (30s = 900帧) */}
      <Sequence from={15 * fps} durationInFrames={30 * fps}>
        <ColonialCurrencyScene />
        <Subtitles subtitles={colonialCurrencySubs} />
      </Sequence>

      {/* 场景2: 第一银行 (30s = 900帧) */}
      <Sequence from={45 * fps} durationInFrames={30 * fps}>
        <FirstBankScene />
        <Subtitles subtitles={firstBankSubs} />
      </Sequence>

      {/* 场景3: 特许权到期 (30s = 900帧) */}
      <Sequence from={75 * fps} durationInFrames={30 * fps}>
        <CharterExpirationScene />
        <Subtitles subtitles={charterExpirationSubs} />
      </Sequence>

      {/* 场景4: 杰克逊银行战 (30s = 900帧) */}
      <Sequence from={105 * fps} durationInFrames={30 * fps}>
        <JacksonBankWarScene />
        <Subtitles subtitles={jacksonBankWarSubs} />
      </Sequence>

      {/* 场景5: 内战前奏 (30s = 900帧) */}
      <Sequence from={135 * fps} durationInFrames={30 * fps}>
        <CivilWarPreludeScene />
        <Subtitles subtitles={civilWarPreludeSubs} />
      </Sequence>

      {/* 场景6: 林肯绿钞 (30s = 900帧) */}
      <Sequence from={165 * fps} durationInFrames={30 * fps}>
        <GreenbackScene />
        <Subtitles subtitles={greenbackSubs} />
      </Sequence>

      {/* 场景7: 俄国同盟 (30s = 900帧) */}
      <Sequence from={195 * fps} durationInFrames={30 * fps}>
        <RussianAllianceScene />
        <Subtitles subtitles={russianAllianceSubs} />
      </Sequence>

      {/* 场景8: 林肯刺杀 (30s = 900帧) */}
      <Sequence from={225 * fps} durationInFrames={30 * fps}>
        <AssassinationScene />
        <Subtitles subtitles={assassinationSubs} />
      </Sequence>

      {/* 场景9: 国民银行法 (30s = 900帧) */}
      <Sequence from={255 * fps} durationInFrames={30 * fps}>
        <NationalBankActScene />
        <Subtitles subtitles={nationalBankActSubs} />
      </Sequence>

      {/* 场景10-11: 总结 (60s = 1800帧) */}
      <Sequence from={285 * fps} durationInFrames={75 * fps}>
        <SummaryScene />
        <Subtitles subtitles={summarySubs} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Episode03;
