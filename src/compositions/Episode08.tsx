import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Sequence,
} from "remotion";
import { Audio } from "../components/Audio";
import { Subtitles } from "../components/Subtitles";
import { getEpisodeBGM } from "../utils/audioConfig";
import { episode08Subtitles } from "../subtitles/episode08";

/**
 * Episode08 - 第8集：诚实货币的最后抗争
 *
 * 总时长：11分钟（660秒 = 19800帧 @30fps）
 *
 * 场景序列：
 * 1. [0-30s] 开场 - 肯尼迪遇刺
 * 2. [30-90s] 肯尼迪遇刺真相
 * 3. [90-150s] 动机分析 - 总统令11110
 * 4. [150-210s] 白银的历史
 * 5. [210-270s] 银本位终结
 * 6. [270-330s] 肯尼迪之死
 * 7. [330-390s] 黄金互助基金
 * 8. [390-450s] 特别提款权
 * 9. [450-510s] 尼克松关闭黄金窗口
 * 10. [510-570s] 石油美元
 * 11. [570-630s] 里根遇刺
 * 12. [630-660s] 小结
 */
export const Episode08: React.FC = () => {
  const { fps } = useVideoConfig();

  const bgm = getEpisodeBGM("Episode08");

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgm && <Audio {...bgm} />}

      {/* 场景1: 开场 (0-30s) */}
      <Sequence durationInFrames={30 * fps}>
        <OpeningScene />
      </Sequence>

      {/* 场景2: 肯尼迪遇刺 (30-90s) */}
      <Sequence from={30 * fps} durationInFrames={60 * fps}>
        <KennedyAssassinationScene />
      </Sequence>

      {/* 场景3: 动机分析 (90-150s) */}
      <Sequence from={90 * fps} durationInFrames={60 * fps}>
        <MotivationScene />
      </Sequence>

      {/* 场景4: 白银历史 (150-210s) */}
      <Sequence from={150 * fps} durationInFrames={60 * fps}>
        <SilverHistoryScene />
      </Sequence>

      {/* 场景5: 银本位终结 (210-270s) */}
      <Sequence from={210 * fps} durationInFrames={60 * fps}>
        <SilverStandardEndScene />
      </Sequence>

      {/* 场景6: 肯尼迪之死 (270-330s) */}
      <Sequence from={270 * fps} durationInFrames={60 * fps}>
        <KennedyDeathScene />
      </Sequence>

      {/* 场景7: 黄金互助基金 (330-390s) */}
      <Sequence from={330 * fps} durationInFrames={60 * fps}>
        <GoldPoolScene />
      </Sequence>

      {/* 场景8: 特别提款权 (390-450s) */}
      <Sequence from={390 * fps} durationInFrames={60 * fps}>
        <SDRScene />
      </Sequence>

      {/* 场景9: 尼克松关闭黄金窗口 (450-510s) */}
      <Sequence from={450 * fps} durationInFrames={60 * fps}>
        <NixonGoldScene />
      </Sequence>

      {/* 场景10: 石油美元 (510-570s) */}
      <Sequence from={510 * fps} durationInFrames={60 * fps}>
        <PetrodollarScene />
      </Sequence>

      {/* 场景11: 里根遇刺 (570-630s) */}
      <Sequence from={570 * fps} durationInFrames={60 * fps}>
        <ReaganScene />
      </Sequence>

      {/* 场景12: 小结 (630-660s) */}
      <Sequence from={630 * fps} durationInFrames={30 * fps}>
        <SummaryScene />
      </Sequence>

      {/* 字幕层 - 覆盖整个视频 */}
      <Subtitles subtitles={episode08Subtitles} />
    </AbsoluteFill>
  );
};

/**
 * OpeningScene - 开场场景
 */
const OpeningScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0d1117 0%, #1a1a2e 100%)",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontSize: 48,
          fontWeight: 700,
          textAlign: "center",
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        Episode 08
      </div>

      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontFamily: "Merriweather, serif",
          fontSize: 32,
          textAlign: "center",
          opacity: interpolate(frame, [20, 50], [0, 1]),
        }}
      >
        The Last Stand of Honest Money
      </div>

      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#9ca3af",
          fontFamily: "Merriweather, serif",
          fontSize: 24,
          textAlign: "center",
          opacity: interpolate(frame, [40, 70], [0, 1]),
        }}
      >
        诚实货币的最后抗争
      </div>

      {/* 关键信息 */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: interpolate(frame, [60, 100], [0, 1]),
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ef4444",
            fontFamily: "JetBrains Mono, monospace",
            marginBottom: 10,
          }}
        >
          1963
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#9ca3af",
            fontFamily: "Merriweather, serif",
          }}
        >
          November 22, 1963
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Merriweather, serif",
          fontSize: 20,
          textAlign: "center",
          maxWidth: "70%",
          fontStyle: "italic",
          opacity: interpolate(frame, [120, 150], [0, 1]),
        }}
      >
        "In the modern history of the world, no event has been so brazen..."
      </div>
    </AbsoluteFill>
  );
};

/**
 * KennedyAssassinationScene - 肯尼迪遇刺场景
 */
const KennedyAssassinationScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 48,
            color: "#ef4444",
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            marginBottom: 20,
            opacity: interpolate(frame, [0, 30], [0, 1]),
          }}
        >
          THE ASSASSINATION
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#e8e8e8",
            fontFamily: "Merriweather, serif",
            opacity: interpolate(frame, [30, 60], [0, 1]),
          }}
        >
          President Kennedy was assassinated in Dallas, Texas
        </div>
      </div>

      {/* 统计 */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: interpolate(frame, [60, 120], [0, 1]),
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ef4444",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          18
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#9ca3af",
            fontFamily: "Merriweather, serif",
            marginTop: 10,
          }}
        >
          key witnesses died within 3 years
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Merriweather, serif",
          fontSize: 18,
          textAlign: "center",
          maxWidth: "80%",
          opacity: interpolate(frame, [120, 180], [0, 1]),
        }}
      >
        Probability: 10万万亿分之一
      </div>
    </AbsoluteFill>
  );
};

/**
 * MotivationScene - 动机分析场景
 */
const MotivationScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 40,
            color: "#ffd700",
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            marginBottom: 30,
            opacity: interpolate(frame, [0, 30], [0, 1]),
          }}
        >
          Executive Order 11110
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#e8e8e8",
            fontFamily: "Merriweather, serif",
            maxWidth: "80%",
            lineHeight: 1.6,
            opacity: interpolate(frame, [30, 60], [0, 1]),
          }}
        >
          Signed June 4, 1963
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: interpolate(frame, [60, 120], [0, 1]),
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#ef4444",
            fontFamily: "Merriweather, serif",
            fontWeight: 600,
          }}
        >
          "Authorize the Treasury to issue Silver Certificates"
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#9ca3af",
            fontFamily: "Merriweather, serif",
            marginTop: 20,
          }}
        >
          to reclaim monetary control from the Federal Reserve
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Merriweather, serif",
          fontSize: 18,
          textAlign: "center",
          opacity: interpolate(frame, [120, 180], [0, 1]),
        }}
      >
        This directly threatened the international bankers' control over money
      </div>
    </AbsoluteFill>
  );
};

/**
 * SilverHistoryScene - 白银历史场景
 */
const SilverHistoryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#1a1a2e" }}>
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 36,
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontWeight: 700,
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        The History of Silver
      </div>

      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "20%",
          width: "30%",
          opacity: interpolate(frame, [30, 60], [0, 1]),
        }}
      >
        <div style={{ fontSize: 48, color: "#ef4444", fontWeight: 700 }}>1792</div>
        <div style={{ fontSize: 16, color: "#e8e8e8", marginTop: 10 }}>
          Coinage Act establishes dollar based on silver
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "55%",
          width: "30%",
          opacity: interpolate(frame, [60, 90], [0, 1]),
        }}
      >
        <div style={{ fontSize: 48, color: "#ef4444", fontWeight: 700 }}>1873</div>
        <div style={{ fontSize: 16, color: "#e8e8e8", marginTop: 10 }}>
          "Crime of 1873" - Silver货币地位 abolished
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 18,
          color: "#9ca3af",
          fontFamily: "Merriweather, serif",
          textAlign: "center",
          opacity: interpolate(frame, [90, 150], [0, 1]),
        }}
      >
        By 1960s, Treasury held nearly 2 billion ounces of silver
      </div>
    </AbsoluteFill>
  );
};

/**
 * SilverStandardEndScene - 银本位终结场景
 */
const SilverStandardEndScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 36,
          color: "#ef4444",
          fontFamily: "Cinzel, serif",
          fontWeight: 700,
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        The End of Silver
      </div>

      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: interpolate(frame, [30, 90], [0, 1]),
        }}
      >
        <div style={{ fontSize: 20, color: "#e8e8e8", marginBottom: 20 }}>
          November 1961
        </div>
        <div style={{ fontSize: 24, color: "#ffd700", fontWeight: 600 }}>
          Kennedy ordered Treasury to stop selling silver
        </div>
        <div style={{ fontSize: 18, color: "#9ca3af", marginTop: 20 }}>
          Silver prices surged to 41-year high
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 18,
          color: "#ef4444",
          fontFamily: "Merriweather, serif",
          textAlign: "center",
          opacity: interpolate(frame, [90, 150], [0, 1]),
        }}
      >
        This was a direct challenge to international bankers
      </div>
    </AbsoluteFill>
  );
};

/**
 * KennedyDeathScene - 肯尼迪之死场景
 */
const KennedyDeathScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#1a1a2e" }}>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 48,
            color: "#ef4444",
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            opacity: interpolate(frame, [0, 30], [0, 1]),
          }}
        >
          November 22, 1963
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#e8e8e8",
            marginTop: 20,
            opacity: interpolate(frame, [30, 60], [0, 1]),
          }}
        >
          The President was assassinated
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: interpolate(frame, [60, 120], [0, 1]),
        }}
      >
        <div style={{ fontSize: 24, color: "#ffd700", fontWeight: 600 }}>
          Johnson took over
        </div>
        <div style={{ fontSize: 18, color: "#9ca3af", marginTop: 15 }}>
          and reversed Kennedy's silver policy
        </div>
      </div>
    </AbsoluteFill>
  );
};

/**
 * GoldPoolScene - 黄金互助基金场景
 */
const GoldPoolScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 36,
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontWeight: 700,
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        The London Gold Pool
      </div>

      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 18, color: "#9ca3af", opacity: interpolate(frame, [30, 60], [0, 1]) }}>
          1961 - Created to suppress gold prices
        </div>
        <div style={{ fontSize: 48, color: "#ef4444", fontWeight: 700, marginTop: 20, opacity: interpolate(frame, [60, 90], [0, 1]) }}>
          $35.20
        </div>
        <div style={{ fontSize: 16, color: "#e8e8e8", marginTop: 10, opacity: interpolate(frame, [90, 120], [0, 1]) }}>
          Target price per ounce
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: interpolate(frame, [120, 180], [0, 1]),
        }}
      >
        <div style={{ fontSize: 36, color: "#ef4444", fontWeight: 700 }}>$1 Billion</div>
        <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 10 }}>
          lost by 1967
        </div>
      </div>
    </AbsoluteFill>
  );
};

/**
 * SDRScene - 特别提款权场景
 */
const SDRScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#1a1a2e" }}>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 36,
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontWeight: 700,
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        Special Drawing Rights (SDR)
      </div>

      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: interpolate(frame, [30, 90], [0, 1]),
        }}
      >
        <div style={{ fontSize: 20, color: "#e8e8e8", marginBottom: 20 }}>
          "Paper Gold"
        </div>
        <div style={{ fontSize: 16, color: "#9ca3af" }}>
          Designed to hide America's monetary bankruptcy
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 24,
          color: "#ef4444",
          fontWeight: 600,
          opacity: interpolate(frame, [90, 150], [0, 1]),
        }}
      >
        March 18, 1969 - The last link between gold and dollar severed
      </div>
    </AbsoluteFill>
  );
};

/**
 * NixonGoldScene - 尼克松关闭黄金窗口场景
 */
const NixonGoldScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 48,
            color: "#ef4444",
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            opacity: interpolate(frame, [0, 30], [0, 1]),
          }}
        >
          August 15, 1971
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#e8e8e8",
            marginTop: 15,
            opacity: interpolate(frame, [30, 60], [0, 1]),
          }}
        >
          Nixon closes the gold window
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: interpolate(frame, [60, 120], [0, 1]),
        }}
      >
        <div style={{ fontSize: 28, color: "#ffd700", fontWeight: 600 }}>
          America's Second Default
        </div>
        <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 15 }}>
          The entire world enters the era of fiat currency
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 24,
          color: "#ef4444",
          fontWeight: 700,
          opacity: interpolate(frame, [120, 180], [0, 1]),
        }}
      >
        Total US Debt: $44 Trillion by 2006
      </div>
    </AbsoluteFill>
  );
};

/**
 * PetrodollarScene - 石油美元场景
 */
const PetrodollarScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#1a1a2e" }}>
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 36,
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontWeight: 700,
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        The Petrodollar System
      </div>

      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 18, color: "#9ca3af", opacity: interpolate(frame, [30, 60], [0, 1]) }}>
          October 6, 1973
        </div>
        <div style={{ fontSize: 28, color: "#ef4444", fontWeight: 700, marginTop: 15, opacity: interpolate(frame, [60, 90], [0, 1]) }}>
          Oil Prices +400%
        </div>
        <div style={{ fontSize: 16, color: "#e8e8e8", marginTop: 15, opacity: interpolate(frame, [90, 120], [0, 1]) }}>
          The dollar found a new refuge: Oil
        </div>
      </div>
    </AbsoluteFill>
  );
};

/**
 * ReaganScene - 里根遇刺场景
 */
const ReaganScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 48,
            color: "#ef4444",
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            opacity: interpolate(frame, [0, 30], [0, 1]),
          }}
        >
          March 30, 1981
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#e8e8e8",
            marginTop: 15,
            opacity: interpolate(frame, [30, 60], [0, 1]),
          }}
        >
          Reagan was shot
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: interpolate(frame, [60, 120], [0, 1]),
        }}
      >
        <div style={{ fontSize: 20, color: "#ffd700", fontWeight: 600 }}>
          He wanted to restore the gold standard
        </div>
        <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 15 }}>
          This directly challenged the bankers' forbidden zone
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 18,
          color: "#ef4444",
          fontFamily: "Merriweather, serif",
          textAlign: "center",
          opacity: interpolate(frame, [120, 180], [0, 1]),
        }}
      >
        The last hope for the gold standard was shattered
      </div>
    </AbsoluteFill>
  );
};

/**
 * SummaryScene - 小结场景
 */
const SummaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle, #2d1f1f 0%, #0d0d0d 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 36,
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontWeight: 700,
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        Summary
      </div>

      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          textAlign: "left",
          opacity: interpolate(frame, [30, 90], [0, 1]),
        }}
      >
        <div style={{ fontSize: 18, color: "#e8e8e8", marginBottom: 15 }}>
          ★ Kennedy tried to reclaim monetary control and was assassinated
        </div>
        <div style={{ fontSize: 18, color: "#e8e8e8", marginBottom: 15 }}>
          ★ Johnson abolished Silver Certificates, ending silver's monetary role
        </div>
        <div style={{ fontSize: 18, color: "#e8e8e8", marginBottom: 15 }}>
          ★ Nixon closed the gold window in 1971
        </div>
        <div style={{ fontSize: 18, color: "#e8e8e8", marginBottom: 15 }}>
          ★ Reagan was shot for wanting to restore the gold standard
        </div>
        <div style={{ fontSize: 18, color: "#ef4444", marginTop: 20 }}>
          No president has dared to touch the gold standard since.
        </div>
      </div>

      {/* 系列标题 */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: interpolate(frame, [120, 150], [0, 1]),
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#ffd700",
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
          }}
        >
          Currency War
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#9ca3af",
            fontFamily: "Merriweather, serif",
            fontStyle: "italic",
          }}
        >
          Episode 8 of 11
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Episode08;
