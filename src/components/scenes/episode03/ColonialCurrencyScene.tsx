import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import { CartoonCharacter } from "../../characters/CartoonCharacter";
import { CurrencyBill } from "../../documents/CurrencyBill";

/**
 * ColonialCurrencyScene - 殖民地货币场景
 *
 * 展示殖民地时期的货币(Colonial Script)和1764年货币法案
 * 核心内容：富兰克林解释殖民地繁荣的原因
 */
export const ColonialCurrencyScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 动画时序
  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const franklinEnter = spring({ frame: frame - 60, fps: 30, config: { damping: 15, stiffness: 60 } });
  const currencyShow = interpolate(frame, [120, 180], [0, 1], { extrapolateRight: "clamp" });
  const actShow = interpolate(frame, [300, 390], [0, 1], { extrapolateRight: "clamp" });
  const quoteOpacity = interpolate(frame, [210, 300], [0, 1], { extrapolateRight: "clamp" });

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
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 36,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          Colonial Script & Currency Rights
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          1750s — 1764
        </div>
      </div>

      {/* 左侧：富兰克林角色 */}
      <div
        style={{
          position: "absolute",
          left: "20%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${franklinEnter})`,
        }}
      >
        <CartoonCharacter
          x={0}
          y={0}
          scale={1.2}
          characterType="politician"
          action="talk"
          facingRight={true}
          frame={frame}
          skinColor="#F5DEB3"
          clothColor="#4A6741" // 富兰克林常穿的绿色
        />
        {/* 名字标签 */}
        <div
          style={{
            position: "absolute",
            bottom: -30,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Cinzel, serif",
            fontSize: 16,
            color: "#ffd700",
            whiteSpace: "nowrap",
          }}
        >
          Benjamin Franklin
        </div>
      </div>

      {/* 右侧：殖民地货币展示 */}
      <div
        style={{
          position: "absolute",
          right: "15%",
          top: "35%",
          opacity: currencyShow,
          transform: `translateY(${interpolate(frame, [120, 180], [50, 0], { extrapolateRight: "clamp" })}px)`,
        }}
      >
        <CurrencyBill
          denomination="$10"
          currencyName="COLONIAL SCRIPT"
          year="1763"
          color="#228B22"
          scale={0.8}
          showDetails={true}
        />
        {/* 说明文字 */}
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 14,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 15,
            fontStyle: "italic",
          }}
        >
          Debt-free money issued by colonial governments
        </div>
      </div>

      {/* 富兰克林名言 */}
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 20,
            color: "#e8e8e8",
            textAlign: "center",
            lineHeight: "1.6",
            fontStyle: "italic",
          }}
        >
          "In the colonies, we issue our own money, called Colonial Script. We issue it in proper proportion to the demands of trade and industry."
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#ffd700",
            textAlign: "center",
            marginTop: 12,
          }}
        >
          "It creates no debt. Pays no interest."
        </div>
      </div>

      {/* 1764年货币法案 - 红色警告风格 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: actShow,
          padding: "15px 30px",
          background: "rgba(139, 0, 0, 0.2)",
          border: "2px solid #8b0000",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 14,
            color: "#ef4444",
            textAlign: "center",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          1764 Currency Act
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 14,
            color: "#e8e8e8",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Britain bans colonial currency
        </div>
      </div>

      {/* 结果说明 */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: interpolate(frame, [450, 540], [0, 1], { extrapolateRight: "clamp" }),
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 16,
            color: "#9ca3af",
          }}
        >
          <span style={{ color: "#ffd700", fontWeight: 600 }}>Result:</span> Colonial prosperity collapses. Unemployment spreads.
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 14,
            color: "#6b7280",
            marginTop: 5,
            fontStyle: "italic",
          }}
        >
          "The primary cause of the American Revolution"
        </div>
      </div>
    </AbsoluteFill>
  );
};
