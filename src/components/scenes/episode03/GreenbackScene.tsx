import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import { CartoonCharacter } from "../../characters/CartoonCharacter";
import { CurrencyBill } from "../../documents/CurrencyBill";

/**
 * GreenbackScene - 林肯绿钞场景
 *
 * 展示林肯政府发行的无债务货币
 * 1862年法币法案授权财政部发行绿钞
 */
export const GreenbackScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 动画时序
  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const lincolnScale = spring({ frame: frame - 45, fps: 30, config: { damping: 15, stiffness: 60 } });
  const greenbillEnter = interpolate(frame, [120, 210], [0, 1], { extrapolateRight: "clamp" });
  const quoteOpacity = interpolate(frame, [240, 330], [0, 1], { extrapolateRight: "clamp" });
  const statsOpacity = interpolate(frame, [390, 480], [0, 1], { extrapolateRight: "clamp" });
  const resultOpacity = interpolate(frame, [540, 630], [0, 1], { extrapolateRight: "clamp" });

  // 绿钞飘落效果
  const fallingBills = Array.from({ length: 8 }).map((_, i) => {
    const startY = -100 - i * 80;
    const endY = 900;
    const delay = i * 30;
    const progress = interpolate(
      frame,
      [120 + delay, 120 + delay + 300],
      [0, 1],
      { extrapolateRight: "clamp" }
    );
    const y = startY + (endY - startY) * progress;
    const x = 15 + (i * 10) % 70;
    const rotation = progress * 360;

    return { y, x, rotation, opacity: progress < 0.1 || progress > 0.9 ? 0 : 1 };
  });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1a2e1a 0%, #0d1117 100%)",
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
            fontSize: 36,
            color: "#228B22",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          Lincoln's Greenback
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
          Debt-Free Money for the People — 1862
        </div>
      </div>

      {/* 林肯 - 左侧 */}
      <div
        style={{
          position: "absolute",
          left: "22%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${lincolnScale})`,
        }}
      >
        <CartoonCharacter
          x={0}
          y={0}
          scale={1.2}
          characterType="politician"
          action="point"
          facingRight={true}
          frame={frame}
          skinColor="#F5DEB3"
          clothColor="#2F4F4F"
        />
        <div
          style={{
            position: "absolute",
            bottom: -25,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Cinzel, serif",
            fontSize: 14,
            color: "#ffd700",
            whiteSpace: "nowrap",
            fontWeight: 600,
          }}
        >
          Abraham Lincoln
        </div>
      </div>

      {/* 绿钞展示 - 右侧 */}
      <div
        style={{
          position: "absolute",
          right: "15%",
          top: "35%",
          opacity: greenbillEnter,
          transform: `scale(${spring({ frame: frame - 150, fps: 30, config: { damping: 12, stiffness: 80 } })})`,
        }}
      >
        <CurrencyBill
          denomination="$100"
          currencyName="UNITED STATES NOTE"
          year="1862"
          color="#228B22"
          scale={1}
          showDetails={true}
        />
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 12,
            color: "#228B22",
            textAlign: "center",
            marginTop: 10,
            fontWeight: 600,
          }}
        >
          GREENBACK
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 11,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 5,
            fontStyle: "italic",
          }}
        >
          Debt-free. Interest-free. Constitutional.
        </div>
      </div>

      {/* 飘落的绿钞背景 */}
      {fallingBills.map((bill, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${bill.x}%`,
            top: `${bill.y}px`,
            transform: `rotate(${bill.rotation}deg)`,
            opacity: bill.opacity * 0.15,
            pointerEvents: "none",
          }}
        >
          <CurrencyBill
            denomination="$10"
            currencyName="GREENBACK"
            color="#228B22"
            scale={0.3}
            showDetails={false}
          />
        </div>
      ))}

      {/* 核心引言 */}
      <div
        style={{
          position: "absolute",
          bottom: "32%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "65%",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 14,
            color: "#9ca3af",
            textAlign: "center",
            marginBottom: 10,
            letterSpacing: 2,
          }}
        >
          LEGAL TENDER ACT — 1862
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#e8e8e8",
            textAlign: "center",
            lineHeight: "1.6",
            fontStyle: "italic",
          }}
        >
          "The power to coin money belongs to the people"
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 16,
            color: "#228B22",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          — U.S. Constitution, Article I, Section 8
        </div>
      </div>

      {/* 统计数据 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 60,
          opacity: statsOpacity,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 36,
              color: "#228B22",
              fontWeight: 700,
            }}
          >
            $450M
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 13,
              color: "#9ca3af",
              marginTop: 5,
            }}
          >
            Issued during Civil War
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 36,
              color: "#ffd700",
              fontWeight: 700,
            }}
          >
            $40B
          </div>
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 13,
              color: "#9ca3af",
              marginTop: 5,
            }}
          >
            Interest saved for taxpayers
          </div>
        </div>
      </div>

      {/* 关键结果 */}
      <div
        style={{
          position: "absolute",
          bottom: "4%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: resultOpacity,
          textAlign: "center",
          padding: "12px 25px",
          background: "rgba(34, 139, 34, 0.15)",
          border: "1px solid #228B22",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 14,
            color: "#e8e8e8",
          }}
        >
          <span style={{ color: "#228B22", fontWeight: 600 }}>Result:</span> Greenbacks funded the Union victory
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 12,
            color: "#6b7280",
            marginTop: 4,
            fontStyle: "italic",
          }}
        >
          Without borrowing from foreign banks
        </div>
      </div>
    </AbsoluteFill>
  );
};
