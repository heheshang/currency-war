import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import { HistoricalFigure } from "../../characters/HistoricalFigure";
import { getFigure } from "../../characters/historicalFigures";

/**
 * JacksonBankWarScene - 杰克逊银行战场景
 *
 * 安德鲁·杰克逊与第二银行的战争
 * "The Bank wants to kill me, but I will kill it!"
 * 1832年否决，1836年银行死亡
 *
 * Updated to use real historical figure photos instead of cartoon characters
 */
export const JacksonBankWarScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Get historical figure configs
  const jacksonFigure = getFigure("andrew_jackson");
  const jacksonPhoto = jacksonFigure?.photoSrc || "";

  // 动画时序
  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const jacksonEnter = spring({ frame: frame - 45, fps: 30, config: { damping: 12, stiffness: 80 } });
  const biddleEnter = spring({ frame: frame - 90, fps: 30, config: { damping: 12, stiffness: 80 } });
  const quoteOpacity = interpolate(frame, [150, 240], [0, 1], { extrapolateRight: "clamp" });
  const vetoOpacity = interpolate(frame, [300, 390], [0, 1], { extrapolateRight: "clamp" });
  const victoryOpacity = interpolate(frame, [510, 600], [0, 1], { extrapolateRight: "clamp" });

  // 抖动效果 - 紧张时刻
  const shake = interpolate(frame, [360, 375], [0, 5], { extrapolateRight: "clamp" }) *
    Math.sin(frame * 0.5);

  // Mouth animation for talking effect
  const jacksonTalking = frame > 180 && frame < 300 ? "talking" as const : "serious" as const;
  const biddleTalking = frame > 120 ? "talking" as const : "serious" as const;

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "6%",
          left: "50%",
          transform: `translateX(-50%, ${shake}px)`,
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 32,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          "The Bank wants to kill me..."
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 36,
            color: "#ef4444",
            fontWeight: 700,
            textAlign: "center",
            marginTop: 5,
          }}
        >
          "...but I will kill it!"
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 14,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Andrew Jackson vs The Second Bank — 1832
        </div>
      </div>

      {/* 杰克逊 - 左侧，真实照片 */}
      <div
        style={{
          position: "absolute",
          left: "30%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${jacksonEnter})`,
        }}
      >
        <HistoricalFigure
          x={0}
          y={0}
          scale={0.9}
          photoSrc={jacksonPhoto}
          nameEn="Andrew Jackson"
          nameCn="安德鲁·杰克逊"
          action={jacksonTalking}
          frameStyle="classic"
          photoFilter="grayscale"
          showLabel={false}
          frame={frame}
          startFrame={45}
          animEffect="slideLeft"
        />
      </div>

      {/* 比德尔 - 右侧，银行家（使用通用银行家照片或插画） */}
      <div
        style={{
          position: "absolute",
          right: "25%",
          top: "50%",
          transform: `translate(50%, -50%) scale(${biddleEnter})`,
        }}
      >
        {/* Using a placeholder for Nicholas Biddle - banker from the era */}
        <HistoricalFigure
          x={0}
          y={0}
          scale={0.85}
          photoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Nicholas_Biddle_-_Brady-Handy.jpg/400px-Nicholas_Biddle_-_Brady-Handy.jpg"
          nameEn="Nicholas Biddle"
          nameCn="尼古拉斯·比德尔"
          action={biddleTalking}
          frameStyle="vintage"
          photoFilter="vintage"
          showLabel={true}
          labelPosition="bottom"
          frame={frame}
          startFrame={90}
          animEffect="slideRight"
        />
        <div
          style={{
            position: "absolute",
            top: "-8%",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Merriweather, serif",
            fontSize: 11,
            color: "#e8e8e8",
            fontStyle: "italic",
            whiteSpace: "nowrap",
            background: "rgba(139, 0, 0, 0.8)",
            padding: "5px 10px",
            borderRadius: 4,
            opacity: quoteOpacity,
          }}
        >
          "If Jackson vetoes, I will veto him!"
        </div>
      </div>

      {/* VS 标志 */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: biddleEnter,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 36,
            color: "#ef4444",
            fontWeight: 700,
          }}
        >
          ⚔
        </div>
      </div>

      {/* 1832年否决公告 */}
      <div
        style={{
          position: "absolute",
          bottom: "28%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: vetoOpacity,
          padding: "15px 30px",
          background: "rgba(255, 215, 0, 0.1)",
          border: "2px solid #ffd700",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 16,
            color: "#ffd700",
            textAlign: "center",
            letterSpacing: 1,
          }}
        >
          1832: Jackson Vetoes Bank Renewal
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 13,
            color: "#e8e8e8",
            textAlign: "center",
            marginTop: 6,
          }}
        >
          "The Constitution authorizes Congress to coin money— not to delegate that power to private banks"
        </div>
      </div>

      {/* 胜利信息 */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: victoryOpacity,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 20,
            color: "#228B22",
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          1835: National Debt Reduced to ZERO
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 16,
            color: "#e8e8e8",
            marginBottom: 8,
          }}
        >
          1836: The Second Bank Dies
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 14,
            color: "#9ca3af",
            fontStyle: "italic",
          }}
        >
          Jackson's tombstone: "I killed the bank"
        </div>
      </div>

      {/* 时间线 */}
      <div
        style={{
          position: "absolute",
          bottom: "3%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 40,
          opacity: victoryOpacity,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 14, color: "#ffd700" }}>1828</div>
          <div style={{ fontFamily: "Merriweather, serif", fontSize: 11, color: "#6b7280" }}>Elected</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 14, color: "#ffd700" }}>1832</div>
          <div style={{ fontFamily: "Merriweather, serif", fontSize: 11, color: "#6b7280" }}>Veto</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 14, color: "#228B22" }}>1835</div>
          <div style={{ fontFamily: "Merriweather, serif", fontSize: 11, color: "#6b7280" }}>Debt Free</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 14, color: "#228B22" }}>1836</div>
          <div style={{ fontFamily: "Merriweather, serif", fontSize: 11, color: "#6b7280" }}>Victory</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
