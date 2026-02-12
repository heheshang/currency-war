import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Sequence,
} from "remotion";
import { JekyllIslandScene } from "../components/scenes/JekyllIslandScene";
import { NightTrainScene } from "../components/scenes/NightTrainScene";
import { SecretMeetingScene } from "../components/scenes/SecretMeetingScene";
import { CongressScene } from "../components/scenes/CongressScene";
import { TruthRevealScene } from "../components/data-viz/TruthRevealScene";
import { Audio } from "../components/Audio";
import { getEpisodeBGM } from "../utils/audioConfig";

/**
 * Episode07 - 第7集：美联储成立 - 哲基尔岛密谋
 *
 * 总时长：8分钟（480秒）
 *
 * 场景序列：
 * 1. [0-60s] 开场铺垫 - 20世纪初的美国金融环境
 * 2. [60-105s] 神秘火车 - 1910年11月22日夜行
 * 3. [105-135s] 孤岛会所 - 哲基尔岛外观
 * 4. [135-225s] 秘密会议 - 7位银行家的剪影风格
 * 5. [225-285s] 国会通过 - 1913年12月23日
 * 6. [285-330s] 真相揭露 - 信息图表风格
 * 7. [330-360s] 结尾 - 对未来的警示
 */
export const Episode07: React.FC = () => {
  const { fps } = useVideoConfig();

  const bgm = getEpisodeBGM("Episode07");

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgm && <Audio {...bgm} />}
      {/* 场景1: 开场铺垫 (0-60s) */}
      <Sequence durationInFrames={60 * fps}>
        <OpeningScene />
      </Sequence>

      {/* 场景2: 夜行火车 (60-105s) */}
      <Sequence from={60 * fps} durationInFrames={45 * fps}>
        <NightTrainScene />
      </Sequence>

      {/* 场景3: 哲基尔岛外观 (105-135s) */}
      <Sequence from={105 * fps} durationInFrames={30 * fps}>
        <JekyllIslandScene />
      </Sequence>

      {/* 场景4: 秘密会议 (135-225s) */}
      <Sequence from={135 * fps} durationInFrames={90 * fps}>
        <SecretMeetingScene />
      </Sequence>

      {/* 场景5: 国会通过 (225-285s) */}
      <Sequence from={225 * fps} durationInFrames={60 * fps}>
        <CongressScene />
      </Sequence>

      {/* 场景6: 真相揭露 (285-330s) */}
      <Sequence from={285 * fps} durationInFrames={45 * fps}>
        <TruthRevealScene />
      </Sequence>

      {/* 场景7: 结尾警示 (330-360s) */}
      <Sequence from={330 * fps} durationInFrames={30 * fps}>
        <FinalWarningScene />
      </Sequence>
    </AbsoluteFill>
  );
};

/**
 * OpeningScene - 开场铺垫场景
 *
 * 展现20世纪初美国金融环境
 * 为美联储成立做背景铺垫
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
        The Early 1900s
      </div>

      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontFamily: "Merriweather, serif",
          fontSize: 24,
          textAlign: "center",
          maxWidth: "70%",
          lineHeight: "1.6",
          opacity: interpolate(frame, [20, 50], [0, 1]),
        }}
      >
        America was in financial crisis...
        <br />
        <span
          style={{
            color: "#ef4444",
            fontWeight: 600,
            fontSize: 28,
          }}
        >
          ...and powerful bankers saw an opportunity.
        </span>
      </div>

      {/* 金融恐慌统计 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity: interpolate(frame, [50, 80], [0, 1]),
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
          1907
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#9ca3af",
            fontFamily: "Merriweather, serif",
            marginBottom: 20,
          }}
        >
          Panic of 1907
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#e8e8e8",
            fontFamily: "Merriweather, serif",
            maxWidth: "500px",
            lineHeight: "1.5",
          }}
        >
          Stock market crash, bank runs,
          <br />
          economic chaos...
        </div>
      </div>

      {/* 钩对动机暗示 */}
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
          opacity: interpolate(frame, [80, 110], [0, 1]),
        }}
      >
        "We need a central bank to stabilize the system..."
        <br />
        ...or so they claimed.
      </div>
    </AbsoluteFill>
  );
};

/**
 * FinalWarningScene - 结尾警示场景
 *
 * 对未来的警示
 */
const FinalWarningScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle, #2d1f1f 0%, #0d0d0d 100%)",
      }}
    >
      {/* 警告标识 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 150,
          height: 150,
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        <div
          style={{
            width: 150,
            height: 150,
            background: "none",
            border: "8px solid #ef4444",
            borderRadius: "50%",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      </div>

      {/* 文字 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 36,
            color: "#ef4444",
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            marginBottom: 20,
            opacity: interpolate(frame, [30, 60], [0, 1]),
          }}
        >
          AMERICA HIJACKED
        </div>

        <div
          style={{
            fontSize: 20,
            color: "#e8e8e8",
            fontFamily: "Merriweather, serif",
            textAlign: "center",
            maxWidth: "70%",
            lineHeight: "1.6",
            opacity: interpolate(frame, [60, 90], [0, 1]),
          }}
        >
          On December 23, 1913, America lost its financial sovereignty
        </div>

        <div
          style={{
            fontSize: 24,
            color: "#ffd700",
            fontFamily: "Merriweather, serif",
            fontWeight: 600,
            marginTop: 30,
            opacity: interpolate(frame, [90, 120], [0, 1]),
          }}
        >
          To private banking interests.
        </div>
      </div>

      {/* 系列标题 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
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
            marginBottom: 10,
          }}
        >
          Currency War
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#9ca3af",
            fontFamily: "Merriweather, serif",
            fontStyle: "italic",
          }}
        >
          Episode 7 of 10
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 默认导出
export default Episode07;
