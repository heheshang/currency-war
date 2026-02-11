import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { CartoonCharacter } from "../../characters/CartoonCharacter";

/**
 * MorganFamilyScene - 摩根家族兴起场景
 *
 * 展示乔治·皮博迪从伦敦到摩根家族继承罗斯柴尔德联系的历史
 */
export const MorganFamilyScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 场景淡入
  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // 时间线滑入
  const timelineX = interpolate(frame, [60, 300], [-200, 50], { extrapolateRight: "clamp" });

  // 财富条动画
  const wealthBarWidth = interpolate(frame, [120, 900], [0, 600], { extrapolateRight: "clamp" });

  // 人物淡入
  const characterOpacity = interpolate(frame, [180, 300], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "#0d1117",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: opacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 36,
            color: "#ffd700",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          The Rise of the Morgan Family
        </div>
      </div>

      {/* 时间轴 */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            width: "800px",
            height: "4px",
            background: "rgba(255, 215, 0, 0.2)",
            position: "relative",
          }}
        >
          {/* 时间线刻度 */}
          <div style={{ position: "absolute", top: "-8px", left: "50px", fontSize: 12, color: "#9ca3af" }}>
            1835
          </div>
          <div style={{ position: "absolute", top: "-8px", left: "200px", fontSize: 12, color: "#9ca3af" }}>
            1854
          </div>
          <div style={{ position: "absolute", top: "-8px", left: "400px", fontSize: 14, color: "#ffd700", fontWeight: 600 }}>
            1857
          </div>
          <div style={{ position: "absolute", top: "-8px", right: "100px", fontSize: 12, color: "#9ca3af" }}>
            1869
          </div>
          <div style={{ position: "absolute", top: "-8px", right: "50px", fontSize: 12, color: "#9ca3af" }}>
            1899
          </div>

          {/* 移动的指示器 */}
          <div
            style={{
              position: "absolute",
              top: "-3px",
              left: timelineX,
              width: "4px",
              height: "10px",
              background: "#ffd700",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>

      {/* 主要内容区 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "10%",
          width: "40%",
        }}
      >
        {/* 皮博迪时代 */}
        <div
          style={{
            opacity: interpolate(frame, [120, 270], [0, 1], { extrapolateRight: "clamp" }),
            marginBottom: 30,
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#9ca3af",
              marginBottom: 10,
            }}
          >
            1835: George Peabody Arrives in London
          </div>
          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.6" }}>
            A dry goods merchant becomes a merchant banker. Receives invitation
            from Nathan Rothschild himself.
          </div>
        </div>

        {/* 1857年救援 */}
        <div
          style={{
            opacity: interpolate(frame, [330, 480], [0, 1], { extrapolateRight: "clamp" }),
            marginBottom: 30,
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#9ca3af",
              marginBottom: 10,
            }}
          >
            1857: The Engineered Crisis
          </div>
          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.6" }}>
            During the panic, the Bank of England provides Peabody with
            £80,000 "emergency credit" at the perfect moment. Peabody buys
            distressed American bonds.
          </div>
        </div>

        {/* 摩根继承 */}
        <div
          style={{
            opacity: interpolate(frame, [540, 690], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#9ca3af",
              marginBottom: 10,
            }}
          >
            Junius Morgan Inherits It All
          </div>
          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.6" }}>
            J.P. Morgan continues the legacy. Becomes Rothschild's chief
            agent in America. Controls American railroads.
          </div>
        </div>

        {/* 财富增长条 */}
        <div
          style={{
            opacity: interpolate(frame, [600, 900], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ffd700",
              marginBottom: 10,
            }}
          >
            Morgan Family Wealth Growth
          </div>
          <div
            style={{
              height: "20px",
              background: "rgba(30, 58, 138, 0.3)",
              borderRadius: "4px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: wealthBarWidth,
                height: "100%",
                background: "linear-gradient(90deg, #ffd700, #f59e0b)",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 8 }}>
            From Merchant to Banking Dynasty
          </div>
        </div>
      </div>

      {/* 人物动画 */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "60%",
          opacity: characterOpacity,
        }}
      >
        <CartoonCharacter
          x={0}
          y={0}
          scale={1.2}
          characterType="banker"
          action="talk"
          facingRight={true}
          frame={frame}
        />
      </div>

      {/* 右侧关键信息 */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "10%",
          width: "35%",
          opacity: characterOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 16,
            color: "#d4af37",
            marginBottom: 20,
            letterSpacing: 1,
          }}
        >
          THE CONNECTION
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#e8e8e8",
            lineHeight: "1.8",
          }}
        >
          <div style={{ marginBottom: 16 }}>
            <span style={{ color: "#ffd700" }}>London</span> → Rothschild Family
          </div>
          <div style={{ marginBottom: 16 }}>
            <span style={{ color: "#ffd700" }}>New York</span> → J.P. Morgan & Co.
          </div>
          <div>
            <span style={{ color: "#ffd700" }}>1899:</span> Morgan appointed as
            Rothschild's chief U.S. agent
          </div>
          <div>
            Forms U.S. Steel — first billion-dollar company
          </div>
        </div>
      </div>

      {/* 底部装饰 */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "300px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #ffd700, transparent)",
          opacity: opacity,
        }}
      />
    </AbsoluteFill>
  );
};
