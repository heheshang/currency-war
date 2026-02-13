import React from "react";
import {
  AbsoluteFill,
  useVideoConfig,
  Sequence,
  useCurrentFrame,
  interpolate,
} from "remotion";
import { Audio } from "../components/Audio";
import { Subtitles } from "../components/Subtitles";
import { Voiceover } from "../components/Voiceover";
import { getEpisodeBGM } from "../utils/audioConfig";
import { trailerSubtitles } from "../subtitles/trailer";

const VOICE_DIR = "/assets/audio/voiceover/trailer/";

function buildTrailerVoiceoverEntries() {
  const entries: { src: string; startFrame: number; durationFrames: number }[] =
    [];

  const subtitleTimings = [
    { start: 0, end: 90 },
    { start: 90, end: 210 },
    { start: 210, end: 330 },
    { start: 450, end: 570 },
    { start: 570, end: 690 },
    { start: 690, end: 810 },
    { start: 900, end: 1020 },
    { start: 1020, end: 1140 },
    { start: 1140, end: 1260 },
    { start: 1350, end: 1470 },
    { start: 1470, end: 1590 },
    { start: 1590, end: 1710 },
    { start: 1800, end: 1920 },
    { start: 1920, end: 2040 },
    { start: 2040, end: 2160 },
    { start: 2160, end: 2250 },
  ];

  for (let i = 0; i < subtitleTimings.length; i++) {
    const timing = subtitleTimings[i];
    entries.push({
      src: `${VOICE_DIR}voice_${String(i).padStart(4, "0")}.m4a`,
      startFrame: timing.start,
      durationFrames: timing.end - timing.start,
    });
  }

  return entries;
}

/**
 * Trailer - 货币战争①预告片
 *
 * 总时长：约75秒（2250帧 @30fps）
 */
export const Trailer: React.FC = () => {
  const { fps } = useVideoConfig();

  const bgm = getEpisodeBGM("Trailer");
  const voiceoverEntries = buildTrailerVoiceoverEntries();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {bgm && <Audio {...bgm} />}

      <Voiceover
        voiceoverSrc={VOICE_DIR}
        entries={voiceoverEntries}
        volume={0.8}
      />


      {/* 场景1: 开场 (0-15s) */}
      <Sequence durationInFrames={15 * fps}>
        <OpeningScene />
      </Sequence>

      {/* 场景2: 问题 (15-30s) */}
      <Sequence from={15 * fps} durationInFrames={15 * fps}>
        <QuestionScene />
      </Sequence>

      {/* 场景3: 危机 (30-45s) */}
      <Sequence from={30 * fps} durationInFrames={15 * fps}>
        <CrisisScene />
      </Sequence>

      {/* 场景4: 中国 (45-60s) */}
      <Sequence from={45 * fps} durationInFrames={15 * fps}>
        <ChinaScene />
      </Sequence>

      {/* 场景5: 预告 (60-75s) */}
      <Sequence from={60 * fps} durationInFrames={15 * fps}>
        <ComingSoonScene />
      </Sequence>

      <Subtitles subtitles={trailerSubtitles} />
    </AbsoluteFill>
  );
};

const OpeningScene: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0d1117 0%, #1a1a2e 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          opacity,
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffd700",
            textShadow: "0 0 30px rgba(255,215,0,0.5)",
          }}
        >
          Currency Wars
        </div>
        <div style={{ fontSize: 36, color: "#e8e8e8", marginTop: 20 }}>
          货币战争
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#ef4444",
            marginTop: 40,
            fontStyle: "italic",
          }}
        >
          "战争已经开始，虽然看不见硝烟"
        </div>
      </div>
    </AbsoluteFill>
  );
};

const QuestionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          textAlign: "center",
          opacity,
        }}
      >
        <div style={{ fontSize: 28, color: "#ffd700", marginBottom: 30 }}>
          为什么世界会采取债务货币制度？
        </div>
        <div style={{ fontSize: 20, color: "#9ca3af", marginBottom: 20 }}>
          什么样的特殊利益集团左右着货币制度？
        </div>
        <div style={{ fontSize: 20, color: "#9ca3af" }}>
          他们如何从政府手中夺取了货币发行大权？
        </div>
      </div>
    </AbsoluteFill>
  );
};

const CrisisScene: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #1f1f1f 0%, #0d0d0d 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          textAlign: "center",
          opacity,
        }}
      >
        <div
          style={{
            fontSize: 48,
            color: "#ef4444",
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          2008 Global Financial Crisis
        </div>
        <div style={{ fontSize: 24, color: "#e8e8e8", marginBottom: 15 }}>
          危机的根源：债务货币体系
        </div>
        <div style={{ fontSize: 24, color: "#e8e8e8", marginBottom: 15 }}>
          货币大厦建立在债务沙滩之上
        </div>
        <div style={{ fontSize: 20, color: "#9ca3af" }}>
          美元危机波及整个世界
        </div>
      </div>
    </AbsoluteFill>
  );
};

const ChinaScene: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0d1117 0%, #1a2f1a 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          textAlign: "center",
          opacity,
        }}
      >
        <div style={{ fontSize: 36, color: "#ffd700", marginBottom: 30 }}>
          中国经济航母已经起航
        </div>
        <div style={{ fontSize: 28, color: "#e8e8e8", marginBottom: 20 }}>
          会一帆风顺吗？
        </div>
        <div style={{ fontSize: 20, color: "#ef4444", marginTop: 30 }}>
          看不见硝烟的金融战争威胁日益加剧
        </div>
      </div>
    </AbsoluteFill>
  );
};

const ComingSoonScene: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);
  const footerOpacity = interpolate(frame, [60, 90], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          textAlign: "center",
          opacity,
        }}
      >
        <div style={{ fontSize: 32, color: "#e8e8e8", marginBottom: 30 }}>
          11集节目为你揭示真相
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          {["罗斯柴尔德", "美联储", "一战", "金融危机", "亚洲危机"].map(
            (item, i) => (
              <div
                key={i}
                style={{
                  padding: "10px 20px",
                  background: "rgba(255,215,0,0.15)",
                  borderRadius: 8,
                  border: "1px solid #ffd700",
                  color: "#ffd700",
                  fontSize: 16,
                }}
              >
                {item}
              </div>
            ),
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: footerOpacity,
        }}
      >
        <div style={{ fontSize: 48, color: "#ffd700", fontWeight: 700 }}>
          Coming Soon
        </div>
        <div style={{ fontSize: 24, color: "#9ca3af", marginTop: 10 }}>
          敬请期待
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Trailer;
