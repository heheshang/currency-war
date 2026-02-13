import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * IMFWorldBankScene - 场景4：IMF与世界银行
 *
 * 介绍国际货币基金组织和世界银行
 * 揭示其作为美元霸权工具的本质
 *
 * 时长：70秒（2,100帧 @ 30fps）
 * 开始帧：7,200（240秒 @ 30fps）
 */
export const IMFWorldBankScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 标题淡入
  const titleOpacity = interpolate(frame, [30, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  // IMF介绍淡入
  const imfOpacity = interpolate(frame, [150, 240], [0, 1], {
    extrapolateRight: "clamp",
  });

  // World Bank介绍淡入
  const wbOpacity = interpolate(frame, [330, 420], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 美元霸权淡入
  const dollarOpacity = interpolate(frame, [510, 600], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 条件贷款淡入
  const loanOpacity = interpolate(frame, [690, 780], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 底部引言淡入
  const quoteOpacity = interpolate(frame, [870, 960], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 美元符号旋转
  const dollarRotate = interpolate(frame, [0, 600], [0, 360], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* 背景 - 旋转的美元符号 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) rotate(${dollarRotate}deg)`,
          fontSize: "600px",
          color: "rgba(255, 215, 0, 0.03)",
          fontWeight: 700,
          pointerEvents: "none",
        }}
      >
        $
      </div>

      {/* 主标题 */}
      <div
        style={{
          position: "absolute",
          top: "3%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 44,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 2,
            textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
          }}
        >
          IMF & World Bank
        </div>
        <div
          style={{
            fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif",
            fontSize: 26,
            color: "#d4d4d4",
            textAlign: "center",
            marginTop: 8,
            letterSpacing: 4,
          }}
        >
          美元霸权的工具
        </div>
      </div>

      {/* IMF介绍 */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "5%",
          width: "42%",
          opacity: imfOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "rgba(30, 58, 90, 0.9)",
            border: "3px solid #3b82f6",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 22,
              color: "#3b82f6",
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            IMF
            <span style={{ fontSize: 14, color: "#9ca3af", marginLeft: 8 }}>
              International Monetary Fund
            </span>
          </div>
          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.8" }}>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#22c55e" }}>Founded:</span> 1944, Bretton Woods
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#22c55e" }}>Purpose:</span> "Stabilize" currencies
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#22c55e" }}>Voting:</span> Based on financial contributions
            </div>
            <div>
              <span style={{ color: "#22c55e" }}>Real Role:</span> Enforce US dollar dominance
            </div>
          </div>
        </div>
      </div>

      {/* World Bank介绍 */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          right: "5%",
          width: "42%",
          opacity: wbOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "rgba(30, 58, 90, 0.9)",
            border: "3px solid #22c55e",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 22,
              color: "#22c55e",
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            World Bank
            <span style={{ fontSize: 14, color: "#9ca3af", marginLeft: 8 }}>
              International Bank for Reconstruction
            </span>
          </div>
          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.8" }}>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#22c55e" }}>Founded:</span> 1944, Bretton Woods
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#22c55e" }}>Purpose:</span> "Development" loans
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#22c55e" }}>Lending:</span> $100+ billion annually
            </div>
            <div>
              <span style={{ color: "#22c55e" }}>Real Role:</span> Open markets for Western banks
            </div>
          </div>
        </div>
      </div>

      {/* 美元霸权图表 */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          opacity: dollarOpacity,
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            background: "rgba(13, 17, 23, 0.9)",
            borderRadius: "12px",
            border: "2px solid rgba(255, 215, 0, 0.5)",
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "#ffd700",
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            Dollar Dominance Mechanism
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                padding: "12px 20px",
                background: "#1e3a5a",
                borderRadius: "8px",
                border: "2px solid #ffd700",
              }}
            >
              <span style={{ color: "#ffd700", fontWeight: 600 }}>IMF/World Bank</span>
            </div>
            <div style={{ color: "#9ca3af", fontSize: 20 }}>→</div>
            <div
              style={{
                padding: "12px 20px",
                background: "#1e3a5a",
                borderRadius: "8px",
                border: "2px solid #3b82f6",
              }}
            >
              <span style={{ color: "#3b82f6", fontWeight: 600 }}>Loan Conditions</span>
            </div>
            <div style={{ color: "#9ca3af", fontSize: 20 }}>→</div>
            <div
              style={{
                padding: "12px 20px",
                background: "#1e3a5a",
                borderRadius: "8px",
                border: "2px solid #22c55e",
              }}
            >
              <span style={{ color: "#22c55e", fontWeight: 600 }}>Market Access</span>
            </div>
            <div style={{ color: "#9ca3af", fontSize: 20 }}>→</div>
            <div
              style={{
                padding: "12px 20px",
                background: "#1e3a5a",
                borderRadius: "8px",
                border: "2px solid #ffd700",
              }}
            >
              <span style={{ color: "#ffd700", fontWeight: 600 }}>$ Dollar Hegemony</span>
            </div>
          </div>
        </div>
      </div>

      {/* 条件贷款 */}
      <div
        style={{
          position: "absolute",
          top: "65%",
          left: "5%",
          width: "90%",
          opacity: loanOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(139, 0, 0, 0.7)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ffd700",
              marginBottom: 12,
            }}
          >
            ⚠️ Loan Conditions Exposed
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "16px",
              fontSize: 14,
            }}
          >
            <div style={{ color: "#e8e8e8" }}>
              <div style={{ color: "#ef4444", marginBottom: 4 }}>Privatization</div>
              Sell state assets to Western corporations
            </div>
            <div style={{ color: "#e8e8e8" }}>
              <div style={{ color: "#ef4444", marginBottom: 4 }}>Deregulation</div>
              Open markets to foreign banks
            </div>
            <div style={{ color: "#e8e8e8" }}>
              <div style={{ color: "#ef4444", marginBottom: 4 }}>Austerity</div>
              Cut social spending, raise taxes
            </div>
          </div>
        </div>
      </div>

      {/* 底部引言 */}
      <div
        style={{
          position: "absolute",
          bottom: "3%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            lineHeight: "1.6",
          }}
        >
          "The IMF is not a financial institution,
          but a political weapon dressed in economic theory."
        </div>
      </div>
    </AbsoluteFill>
  );
};
