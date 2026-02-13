import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { BattleOfWaterloo } from "../components/scenes/BattleOfWaterloo";
import { StockExchangeScene } from "../components/scenes/StockExchangeScene";
import { Subtitles } from "../components/Subtitles";
import { Audio } from "../components/Audio";
import { Voiceover } from "../components/Voiceover";
import { getEpisodeBGM } from "../utils/audioConfig";

const VOICE_DIR = "/assets/audio/voiceover/episode02/";

function buildVoiceoverEntries() {
  const entries: { src: string; startFrame: number; durationFrames: number }[] =
    [];
  let fileIndex = 0;
  const fps = 30;

  const sceneOffsets = [
    { subs: openingSubs, offset: 0 },
    { subs: rothschildIntroSubs, offset: 30 * fps },
    { subs: waterlooPreludeSubs, offset: 90 * fps },
    { subs: intelligenceNetworkSubs, offset: 150 * fps },
    { subs: tradingManipulationSubs, offset: 210 * fps },
    { subs: twentyTimesProfitSubs, offset: 270 * fps },
    { subs: fiveBrothersSubs, offset: 330 * fps },
    { subs: bankOfEnglandSubs, offset: 390 * fps },
    { subs: mayerRothschildSubs, offset: 450 * fps },
    { subs: nathanLondonSubs, offset: 510 * fps },
    { subs: jamesParisSubs, offset: 570 * fps },
    { subs: salomonViennaSubs, offset: 630 * fps },
    { subs: empirePeakSubs, offset: 690 * fps },
    { subs: summarySubs, offset: 750 * fps },
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

// Import scene-separated subtitles from episode02
import {
  openingSubs,
  rothschildIntroSubs,
  waterlooPreludeSubs,
  intelligenceNetworkSubs,
  tradingManipulationSubs,
  twentyTimesProfitSubs,
  fiveBrothersSubs,
  bankOfEnglandSubs,
  mayerRothschildSubs,
  nathanLondonSubs,
  jamesParisSubs,
  salomonViennaSubs,
  empirePeakSubs,
  summarySubs,
} from "../subtitles/episode02";

// Episode02 Scene Components
import InvisibleWealthScene from "../components/scenes/episode02/InvisibleWealthScene";
import FamilyIntroductionScene from "../components/scenes/episode02/FamilyIntroductionScene";
import IntelligenceNetworkScene from "../components/scenes/episode02/IntelligenceNetworkScene";
import TwentyTimesProfitScene from "../components/scenes/episode02/TwentyTimesProfitScene";
import EuropeanEmpireScene from "../components/scenes/episode02/EuropeanEmpireScene";
import BankOfEnglandScene from "../components/scenes/episode02/BankOfEnglandScene";
import MayersFirstFortuneScene from "../components/scenes/episode02/MayersFirstFortuneScene";
import NathansLondonScene from "../components/scenes/episode02/NathansLondonScene";
import JamesConquersFranceScene from "../components/scenes/episode02/JamesConquersFranceScene";
import SalomonInAustriaScene from "../components/scenes/episode02/SalomonInAustriaScene";
import FinancialEmpirePeakScene from "../components/scenes/episode02/FinancialEmpirePeakScene";
import Episode02SummaryScene from "../components/scenes/episode02/Episode02SummaryScene";

/**
 * Episode02 - 第2集：罗斯柴尔德家族："大道无形"的世界首富
 *
 * 总时长：13分钟（780秒 = 23400帧，假设30fps）
 *
 * 基于《货币战争》第一章内容设计
 *
 * 场景序列：
 * 1. [0-30s] 开场 - 大道无形的世界首富
 * 2. [30-90s] 罗斯柴尔德家族简介
 * 3. [90-150s] 滑铁卢战役 - 前奏
 * 4. [150-210s] 情报网 - 先人一步
 * 5. [210-270s] 交易所操盘 - 假情报
 * 6. [270-330s] 20倍收益 - 真相揭晓
 * 7. [330-390s] 五兄弟欧洲布局
 * 8. [390-450s] 时代背景 - 英格兰银行
 * 9. [450-510s] 老罗斯柴尔德的第一桶金
 * 10. [510-570s] 内森主宰伦敦金融城
 * 11. [570-630s] 詹姆斯征服法兰西
 * 12. [630-690s] 所罗门问鼎奥地利
 * 13. [690-750s] 金融帝国全盛
 * 14. [750-780s] 总结
 */
export const Episode02: React.FC = () => {
  const { fps } = useVideoConfig();

  const bgm = getEpisodeBGM("Episode02");
  const voiceoverEntries = buildVoiceoverEntries();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgm && <Audio {...bgm} />}

      <Voiceover
        voiceoverSrc={VOICE_DIR}
        entries={voiceoverEntries}
        volume={0.8}
      />

      {/* Scene 1: Opening - The Invisible Wealth (0-30s) */}
      <Sequence durationInFrames={30 * fps}>
        <InvisibleWealthScene />
        <Subtitles subtitles={openingSubs} />
      </Sequence>

      {/* Scene 2: Family Introduction (30-90s) */}
      <Sequence from={30 * fps} durationInFrames={60 * fps}>
        <FamilyIntroductionScene />
        <Subtitles subtitles={rothschildIntroSubs} />
      </Sequence>

      {/* Scene 3: Battle of Waterloo Prelude (90-150s) */}
      <Sequence from={90 * fps} durationInFrames={60 * fps}>
        <BattleOfWaterloo />
        <Subtitles subtitles={waterlooPreludeSubs} />
      </Sequence>

      {/* Scene 4: Intelligence Network (150-210s) */}
      <Sequence from={150 * fps} durationInFrames={60 * fps}>
        <IntelligenceNetworkScene />
        <Subtitles subtitles={intelligenceNetworkSubs} />
      </Sequence>

      {/* Scene 5: Stock Exchange Manipulation (210-270s) */}
      <Sequence from={210 * fps} durationInFrames={60 * fps}>
        <StockExchangeScene />
        <Subtitles subtitles={tradingManipulationSubs} />
      </Sequence>

      {/* Scene 6: Twenty Times Profit (270-330s) */}
      <Sequence from={270 * fps} durationInFrames={60 * fps}>
        <TwentyTimesProfitScene />
        <Subtitles subtitles={twentyTimesProfitSubs} />
      </Sequence>

      {/* Scene 7: Five Brothers European Empire (330-390s) */}
      <Sequence from={330 * fps} durationInFrames={60 * fps}>
        <EuropeanEmpireScene />
        <Subtitles subtitles={fiveBrothersSubs} />
      </Sequence>

      {/* Scene 8: Bank of England Background (390-450s) */}
      <Sequence from={390 * fps} durationInFrames={60 * fps}>
        <BankOfEnglandScene />
        <Subtitles subtitles={bankOfEnglandSubs} />
      </Sequence>

      {/* Scene 9: Mayer's First Fortune (450-510s) */}
      <Sequence from={450 * fps} durationInFrames={60 * fps}>
        <MayersFirstFortuneScene />
        <Subtitles subtitles={mayerRothschildSubs} />
      </Sequence>

      {/* Scene 10: Nathan Conquers London (510-570s) */}
      <Sequence from={510 * fps} durationInFrames={60 * fps}>
        <NathansLondonScene />
        <Subtitles subtitles={nathanLondonSubs} />
      </Sequence>

      {/* Scene 11: James Conquers France (570-630s) */}
      <Sequence from={570 * fps} durationInFrames={60 * fps}>
        <JamesConquersFranceScene />
        <Subtitles subtitles={jamesParisSubs} />
      </Sequence>

      {/* Scene 12: Salomon in Austria (630-690s) */}
      <Sequence from={630 * fps} durationInFrames={60 * fps}>
        <SalomonInAustriaScene />
        <Subtitles subtitles={salomonViennaSubs} />
      </Sequence>

      {/* Scene 13: Financial Empire Peak (690-750s) */}
      <Sequence from={690 * fps} durationInFrames={60 * fps}>
        <FinancialEmpirePeakScene />
        <Subtitles subtitles={empirePeakSubs} />
      </Sequence>

      {/* Scene 14: Episode Summary (750-780s) */}
      <Sequence from={750 * fps} durationInFrames={30 * fps}>
        <Episode02SummaryScene />
        <Subtitles subtitles={summarySubs} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default Episode02;
