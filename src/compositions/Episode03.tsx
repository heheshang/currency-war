import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { Subtitles, episode03Subtitles } from "../components/Subtitles";
import { Audio } from "../components/Audio";
import { getEpisodeBGM } from "../utils/audioConfig";
import {
  OpeningLincolnScene,
  ColonialCurrencyScene,
  FirstBankScene,
  CharterExpirationScene,
  JacksonBankWarScene,
  IndependentTreasuryScene,
  Panic1857Scene,
  CivilWarPreludeScene,
  GreenbackScene,
  RussianAllianceScene,
  AssassinationScene,
  NationalBankActScene,
  SummaryScene,
} from "../components/scenes/episode03";

/**
 * Episode03 - 第3集：国际银行家和美国总统的百年战争
 *
 * 基于《货币战争》第二章内容
 * 严肃历史纪录片风格，展示货币发行权争夺战
 *
 * 总时长：约10-12分钟（600-720秒 = 18000-21600帧 @ 30fps）
 *
 * 场景序列：
 * 0. [0-30s] 开场 - 林肯名言
 * 1. [30-80s] 殖民地货币与独立战争
 * 2. [80-140s] 第一银行战役 - 汉密尔顿vs杰斐逊
 * 3. [140-200s] 特许权到期 - 1811年胜利
 * 4. [200-280s] 杰克逊银行战
 * 5. [280-340s] 独立财政系统
 * 6. [340-400s] 1857年恐慌
 * 7. [400-460s] 内战前奏 - 分而治之
 * 8. [460-520s] 林肯的绿钞
 * 9. [520-580s] 俄国同盟
 * 10. [580-640s] 林肯刺杀
 * 11. [640-700s] 1863年国民银行法
 * 12. [700-720s] 总结
 */
export const Episode03: React.FC = () => {
  const { fps } = useVideoConfig();

  const bgm = getEpisodeBGM("Episode03");

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgm && <Audio {...bgm} />}
      {/* 场景0: 开场 - 林肯名言 (0-30s = 帧 0-900) */}
      <Sequence durationInFrames={30 * fps}>
        <OpeningLincolnScene />
      </Sequence>

      {/* 场景1: 殖民地货币与独立战争 (30-80s = 帧 900-2400) */}
      <Sequence from={30 * fps} durationInFrames={50 * fps}>
        <ColonialCurrencyScene />
      </Sequence>

      {/* 场景2: 第一银行战役 (80-140s = 帧 2400-4200) */}
      <Sequence from={80 * fps} durationInFrames={60 * fps}>
        <FirstBankScene />
      </Sequence>

      {/* 场景3: 特许权到期 (140-200s = 帧 4200-6000) */}
      <Sequence from={140 * fps} durationInFrames={60 * fps}>
        <CharterExpirationScene />
      </Sequence>

      {/* 场景4: 杰克逊银行战 (200-280s = 帧 6000-8400) */}
      <Sequence from={200 * fps} durationInFrames={80 * fps}>
        <JacksonBankWarScene />
      </Sequence>

      {/* 场景5: 独立财政系统 (280-340s = 帧 8400-10200) */}
      <Sequence from={280 * fps} durationInFrames={60 * fps}>
        <IndependentTreasuryScene />
      </Sequence>

      {/* 场景6: 1857年恐慌 (340-400s = 帧 10200-12000) */}
      <Sequence from={340 * fps} durationInFrames={60 * fps}>
        <Panic1857Scene />
      </Sequence>

      {/* 场景7: 内战前奏 (400-460s = 帧 12000-13800) */}
      <Sequence from={400 * fps} durationInFrames={60 * fps}>
        <CivilWarPreludeScene />
      </Sequence>

      {/* 场景8: 林肯的绿钞 (460-520s = 帧 13800-15600) */}
      <Sequence from={460 * fps} durationInFrames={60 * fps}>
        <GreenbackScene />
      </Sequence>

      {/* 场景9: 俄国同盟 (520-580s = 帧 15600-17400) */}
      <Sequence from={520 * fps} durationInFrames={60 * fps}>
        <RussianAllianceScene />
      </Sequence>

      {/* 场景10: 林肯刺杀 (580-640s = 帧 17400-19200) */}
      <Sequence from={580 * fps} durationInFrames={60 * fps}>
        <AssassinationScene />
      </Sequence>

      {/* 场景11: 1863年国民银行法 (640-700s = 帧 19200-21000) */}
      <Sequence from={640 * fps} durationInFrames={60 * fps}>
        <NationalBankActScene />
      </Sequence>

      {/* 场景12: 总结 (700-720s = 帧 21000-21600) */}
      <Sequence from={700 * fps} durationInFrames={20 * fps}>
        <SummaryScene />
      </Sequence>

      {/* 字幕层 - 覆盖整个视频 */}
      <Subtitles subtitles={episode03Subtitles} />
    </AbsoluteFill>
  );
};

// 默认导出
export default Episode03;
