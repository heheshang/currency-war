import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { CartoonCharacter } from "../../characters/CartoonCharacter";

/**
 * NewDealScene - 场景14：罗斯福新政
 *
 * FDR角色（轮椅上的politician）
 * 新政机构列表（A-Z动画）
 * 黄金没收令（6102号）
 */
export const NewDealScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // FDR角色淡入
  const fdrOpacity = interpolate(frame, [60, 180], [0, 1], { extrapolateRight: "clamp" });

  // 机构列表动画
  const agenciesAppear = interpolate(frame, [180, 720], [0, 1], { extrapolateRight: "clamp" });
  const agencyCount = Math.floor(agenciesAppear * 15);

  // 黄金没收令淡入
  const goldOrderOpacity = interpolate(frame, [540, 720], [0, 1], { extrapolateRight: "clamp" });

  // 标题
  const titleOpacity = interpolate(frame, [60, 150], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1e3a5f 0%, #0d1117 100%)",
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
            color: "#1E3A8E",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          The New Deal
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
          Salvation or Trap? — 1933-1939
        </div>
      </div>

      {/* FDR角色 */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "25%",
          opacity: fdrOpacity,
        }}
      >
        {/* 轮椅 */}
        <div
          style={{
            position: "absolute",
            bottom: "-20px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <svg width="100" height="40" viewBox="0 0 100 40">
            <rect x="10" y="25" width="80" height="15" rx="5" fill="#4b5563" />
            <circle cx="25" cy="25" r="8" fill="#4b5563" />
            <circle cx="75" cy="25" r="8" fill="#4b5563" />
          </svg>
        </div>

        <CartoonCharacter
          x={0}
          y={0}
          scale={1.1}
          characterType="politician"
          action="talk"
          facingRight={true}
          frame={frame}
        />

        {/* 标签 */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#1E3A8E",
              textAlign: "center",
              marginBottom: 4,
            }}
          >
            Franklin D. Roosevelt
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#e8e8e8",
              textAlign: "center",
            }}
          >
            "The only thing we have to fear is fear itself."
          </div>
        </div>
      </div>

      {/* 新政机构列表 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "8%",
          opacity: agenciesAppear > 0 ? 1 : 0,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(30, 58, 90, 0.9)",
            border: "2px solid #1E3A8E",
            borderRadius: "8px",
            maxWidth: "280px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#1E3A8E",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            New Deal Agencies
          </div>

          <div style={{ fontSize: 11, color: "#e8e8e8", lineHeight: "1.8" }}>
            <div style={{ opacity: agencyCount >= 1 ? 1 : 0.3, marginBottom: 6 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>AAA</span> — Agricultural Adjustment Act
            </div>
            <div style={{ opacity: agencyCount >= 2 ? 1 : 0.3, marginBottom: 6 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>CCC</span> — Civilian Conservation Corps
            </div>
            <div style={{ opacity: agencyCount >= 3 ? 1 : 0.3, marginBottom: 6 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>PWA</span> — Public Works Administration
            </div>
            <div style={{ opacity: agencyCount >= 4 ? 1 : 0.3, marginBottom: 6 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>FDIC</span> — Deposit Insurance Corp
            </div>
            <div style={{ opacity: agencyCount >= 5 ? 1 : 0.3, marginBottom: 6 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>SEC</span> — Securities & Exchange
            </div>
            <div style={{ opacity: agencyCount >= 6 ? 1 : 0.3, marginBottom: 6 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>TVA</span> — Tennessee Valley Auth
            </div>
            <div style={{ marginTop: 12, color: "#ffd700", fontWeight: 600 }}>
              + Hundreds more
            </div>
            <div style={{ marginTop: 8, color: "#9ca3af", fontSize: 10 }}>
              Bank credit monopoly expanded further
            </div>
          </div>
        </div>
      </div>

      {/* 黄金没收令 */}
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "15%",
          opacity: goldOrderOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(139, 0, 0, 0.9)",
            border: "3px solid #ffd700",
            borderRadius: "4px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 14,
              color: "#ffd700",
              marginBottom: 12,
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            Executive Order 6102
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#e8e8e8",
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            April 5, 1933
          </div>
          <div
            style={{
              borderTop: "2px solid #ffd700",
              paddingTop: "12px",
              fontSize: 11,
              color: "#9ca3af",
              lineHeight: "1.6",
            }}
          >
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#ef4444" }}>Required:</span> All gold coins, gold bullion,
              and gold certificates surrendered
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#ef4444" }}>Penalty:</span> Up to $10,000 fine + 10 years prison
            </div>
            <div style={{ color: "#f87171", fontWeight: 600 }}>
              "Confiscation of the people's gold"
            </div>
          </div>
        </div>

        {/* 金币图标 */}
        <svg
          style={{
            position: "absolute",
            top: "-30px",
            right: "-20px",
          }}
          width="60"
          height="60"
          viewBox="0 0 60 60"
        >
          <defs>
            <radialGradient id="coinGrad">
              <stop offset="0%" stopColor="#ffd700" />
              <stop offset="100%" stopColor="#fbbf24" />
            </radialGradient>
          </defs>
          <circle cx="30" cy="30" r="25" fill="url(#coinGrad)" stroke="#d4af37" strokeWidth="2" />
          <text x="30" y="35" fontSize="12" fill="#1a1a1a" textAnchor="middle" fontWeight="700">
            $
          </text>
        </svg>
      </div>

      {/* 底部信息 */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: goldOrderOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            marginBottom: 12,
          }}
        >
          "The New Deal expanded government control."
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#ffd700",
            textAlign: "center",
          }}
        >
          Bankers gained more power than ever.
        </div>
      </div>
    </AbsoluteFill>
  );
};
