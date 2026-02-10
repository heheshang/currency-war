import React from "react";
import { AbsoluteFill, useVideoConfig, Sequence } from "remotion";
import { BattleOfWaterloo } from "../components/scenes/BattleOfWaterloo";
import { AncientMarketScene } from "../components/scenes/AncientMarketScene";
import { StockExchangeScene } from "../components/scenes/StockExchangeScene";
import { Subtitles, episode02Subtitles } from "../components/Subtitles";

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

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* 场景1: 开场 - 大道无形的世界首富 (0-30s) */}
      <Sequence durationInFrames={30 * fps}>
        <AncientMarketScene />
      </Sequence>

      {/* 场景2: 罗斯柴尔德家族简介 (30-90s) */}
      <Sequence from={30 * fps} durationInFrames={60 * fps}>
        <AncientMarketScene />
      </Sequence>

      {/* 场景3: 滑铁卢战役 - 前奏 (90-150s) */}
      <Sequence from={90 * fps} durationInFrames={60 * fps}>
        <BattleOfWaterloo />
      </Sequence>

      {/* 场景4: 情报网 - 先人一步 (150-210s) */}
      <Sequence from={150 * fps} durationInFrames={60 * fps}>
        <BattleOfWaterloo />
      </Sequence>

      {/* 场景5: 交易所操盘 - 假情报 (210-270s) */}
      <Sequence from={210 * fps} durationInFrames={60 * fps}>
        <StockExchangeScene />
      </Sequence>

      {/* 场景6: 20倍收益 - 真相揭晓 (270-330s) */}
      <Sequence from={270 * fps} durationInFrames={60 * fps}>
        <StockExchangeScene />
      </Sequence>

      {/* 场景7: 五兄弟欧洲布局 (330-390s) */}
      <Sequence from={330 * fps} durationInFrames={60 * fps}>
        <AncientMarketScene />
      </Sequence>

      {/* 场景8: 时代背景 - 英格兰银行 (390-450s) */}
      <Sequence from={390 * fps} durationInFrames={60 * fps}>
        <AncientMarketScene />
      </Sequence>

      {/* 场景9: 老罗斯柴尔德的第一桶金 (450-510s) */}
      <Sequence from={450 * fps} durationInFrames={60 * fps}>
        <AncientMarketScene />
      </Sequence>

      {/* 场景10: 内森主宰伦敦金融城 (510-570s) */}
      <Sequence from={510 * fps} durationInFrames={60 * fps}>
        <StockExchangeScene />
      </Sequence>

      {/* 场景11: 詹姆斯征服法兰西 (570-630s) */}
      <Sequence from={570 * fps} durationInFrames={60 * fps}>
        <StockExchangeScene />
      </Sequence>

      {/* 场景12: 所罗门问鼎奥地利 (630-690s) */}
      <Sequence from={630 * fps} durationInFrames={60 * fps}>
        <AncientMarketScene />
      </Sequence>

      {/* 场景13: 金融帝国全盛 (690-750s) */}
      <Sequence from={690 * fps} durationInFrames={60 * fps}>
        <AncientMarketScene />
      </Sequence>

      {/* 场景14: 总结 (750-780s) */}
      <Sequence from={750 * fps} durationInFrames={30 * fps}>
        <AncientMarketScene />
      </Sequence>

      {/* 字幕层 - 覆盖整个视频 */}
      <Subtitles subtitles={episode02Subtitles} />
    </AbsoluteFill>
  );
};

export default Episode02;
