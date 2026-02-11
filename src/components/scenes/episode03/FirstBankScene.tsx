import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import { CartoonCharacter } from "../../characters/CartoonCharacter";

/**
 * FirstBankScene - 第一银行场景
 *
 * 汉密尔顿 vs 杰斐逊关于第一银行的辩论
 * 1791年第一银行成立，外国所有权占比70%
 */
export const FirstBankScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 角色进入动画
  const hamiltonScale = spring({ frame: frame - 30, fps: 30, config: { damping: 15, stiffness: 70 } });
  const jeffersonScale = spring({ frame: frame - 60, fps: 30, config: { damping: 15, stiffness: 70 } });

  // 文字淡入
  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const quoteOpacity = interpolate(frame, [120, 210], [0, 1], { extrapolateRight: "clamp" });
  const chartOpacity = interpolate(frame, [270, 360], [0, 1], { extrapolateRight: "clamp" });
  const resultOpacity = interpolate(frame, [480, 570], [0, 1], { extrapolateRight: "clamp" });

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
          transform: "translateX(-50%)",
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
          The First Bank of the United States
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 16,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 6,
          }}
        >
          1791 — Alexander Hamilton vs Thomas Jefferson
        </div>
      </div>

      {/* 汉密尔顿 - 左侧 */}
      <div
        style={{
          position: "absolute",
          left: "25%",
          top: "45%",
          transform: `translate(-50%, -50%) scale(${hamiltonScale})`,
        }}
      >
        <CartoonCharacter
          x={0}
          y={0}
          scale={1}
          characterType="politician"
          action="talk"
          facingRight={true}
          frame={frame}
          skinColor="#F5DEB3"
          clothColor="#1E3A5A" // 深蓝色服装
        />
        <div
          style={{
            position: "absolute",
            bottom: -25,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Cinzel, serif",
            fontSize: 14,
            color: "#1E3A5A",
            whiteSpace: "nowrap",
            fontWeight: 600,
          }}
        >
          Alexander Hamilton
        </div>
        {/* 汉密尔顿观点气泡 */}
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -100,
            background: "rgba(30, 58, 90, 0.9)",
            padding: "10px 15px",
            borderRadius: 8,
            border: "1px solid #1E3A5A",
            opacity: quoteOpacity,
          }}
        >
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 12,
              color: "#e8e8e8",
              fontStyle: "italic",
              maxWidth: 150,
            }}
          >
            "A central bank is essential for national prosperity"
          </div>
        </div>
      </div>

      {/* 杰斐逊 - 右侧 */}
      <div
        style={{
          position: "absolute",
          right: "25%",
          top: "45%",
          transform: `translate(50%, -50%) scale(${jeffersonScale})`,
        }}
      >
        <CartoonCharacter
          x={0}
          y={0}
          scale={1}
          characterType="politician"
          action="think"
          facingRight={false}
          frame={frame + 15}
          skinColor="#F5DEB3"
          clothColor="#8B4513" // 棕色服装
        />
        <div
          style={{
            position: "absolute",
            bottom: -25,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Cinzel, serif",
            fontSize: 14,
            color: "#8B4513",
            whiteSpace: "nowrap",
            fontWeight: 600,
          }}
        >
          Thomas Jefferson
        </div>
        {/* 杰斐逊警告气泡 */}
        <div
          style={{
            position: "absolute",
            top: -40,
            left: -100,
            background: "rgba(139, 69, 19, 0.9)",
            padding: "10px 15px",
            borderRadius: 8,
            border: "1px solid #8B4513",
            opacity: quoteOpacity,
          }}
        >
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 11,
              color: "#e8e8e8",
              fontStyle: "italic",
              maxWidth: 150,
            }}
          >
            "Banking institutions are more dangerous than standing armies"
          </div>
        </div>
      </div>

      {/* 所有权饼图 */}
      <div
        style={{
          position: "absolute",
          bottom: "22%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: chartOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 14,
            color: "#9ca3af",
            textAlign: "center",
            marginBottom: 15,
            letterSpacing: 1,
          }}
        >
          OWNERSHIP OF FIRST BANK
        </div>

        {/* 饼图SVG */}
        <svg width={200} height={200} viewBox="0 0 200 200">
          {/* 外国资本 70% */}
          <circle
            cx={100}
            cy={100}
            r={80}
            fill="none"
            stroke="#8b0000"
            strokeWidth={30}
            strokeDasharray={`${2 * Math.PI * 80 * 0.7} ${2 * Math.PI * 80 * 0.3}`}
            transform="rotate(-90 100 100)"
            opacity={0.9}
          />
          {/* 美国资本 20% */}
          <circle
            cx={100}
            cy={100}
            r={80}
            fill="none"
            stroke="#1e3a5a"
            strokeWidth={30}
            strokeDasharray={`${2 * Math.PI * 80 * 0.2} ${2 * Math.PI * 80 * 0.8}`}
            strokeDashoffset={-2 * Math.PI * 80 * 0.7}
            transform="rotate(-90 100 100)"
            opacity={0.9}
          />
          {/* 政府份额 10% */}
          <circle
            cx={100}
            cy={100}
            r={80}
            fill="none"
            stroke="#228B22"
            strokeWidth={30}
            strokeDasharray={`${2 * Math.PI * 80 * 0.1} ${2 * Math.PI * 80 * 0.9}`}
            strokeDashoffset={-2 * Math.PI * 80 * 0.9}
            transform="rotate(-90 100 100)"
            opacity={0.9}
          />
        </svg>

        {/* 图例 */}
        <div style={{ position: "absolute", right: -120, top: 30 }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
            <div style={{ width: 20, height: 20, background: "#8b0000", marginRight: 8, borderRadius: 3 }} />
            <span style={{ fontFamily: "Merriweather, serif", fontSize: 12, color: "#e8e8e8" }}>
              Foreign: 70%
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
            <div style={{ width: 20, height: 20, background: "#1e3a5a", marginRight: 8, borderRadius: 3 }} />
            <span style={{ fontFamily: "Merriweather, serif", fontSize: 12, color: "#e8e8e8" }}>
              American: 20%
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: 20, height: 20, background: "#228B22", marginRight: 8, borderRadius: 3 }} />
            <span style={{ fontFamily: "Merriweather, serif", fontSize: 12, color: "#e8e8e8" }}>
              Government: 10%
            </span>
          </div>
        </div>
      </div>

      {/* 结果 */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          opacity: resultOpacity,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 18,
            color: "#ffd700",
            marginBottom: 8,
          }}
        >
          February 25, 1791: 20-year charter granted
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 14,
            color: "#9ca3af",
          }}
        >
          By 1811, English bankers and Rothschilds owned 70% of the bank
        </div>
      </div>

      {/* VS 标志 */}
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 48,
            color: "#6b7280",
            fontWeight: 700,
          }}
        >
          VS
        </div>
      </div>
    </AbsoluteFill>
  );
};
