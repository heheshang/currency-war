import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * BISScene - 场景3：国际清算银行
 *
 * 介绍国际清算银行(BIS) - "巴塞尔的中央银行家的银行"
 * 展示其神秘性和全球金融控制作用
 *
 * 时长：70秒（2,100帧 @ 30fps）
 * 开始帧：5,100（170秒 @ 30fps）
 */
export const BISScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 标题淡入
  const titleOpacity = interpolate(frame, [30, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 位置信息淡入
  const locationOpacity = interpolate(frame, [150, 240], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 银行logo动画
  const logoScale = interpolate(frame, [0, 180], [0.5, 1], {
    extrapolateRight: "clamp",
  });
  const logoOpacity = interpolate(frame, [0, 90], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 功能介绍淡入
  const functionsOpacity = interpolate(frame, [300, 390], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 成员信息淡入
  const membersOpacity = interpolate(frame, [480, 570], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 秘密会议淡入
  const secretOpacity = interpolate(frame, [660, 750], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 底部引言淡入
  const quoteOpacity = interpolate(frame, [840, 930], [0, 1], {
    extrapolateRight: "clamp",
  });

  const functions = [
    { title: "Central Banker", desc: "Bank for central banks" },
    { title: "Gold Settlement", desc: "International gold transactions" },
    { title: "Financial Hub", desc: "Global money transfers" },
    { title: "Policy Coordination", desc: "Central bank cooperation" },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* 背景 - 巴塞尔城市剪影 */}
      <div
        style={{
          position: "absolute",
          bottom: "0%",
          left: "0%",
          right: "0%",
          height: "30%",
          background: "linear-gradient(to top, #1e3a5a 0%, transparent 100%)",
          opacity: locationOpacity * 0.5,
        }}
      />

      {/* 主标题 */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 48,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 3,
            textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
          }}
        >
          Bank for International Settlements
        </div>
        <div
          style={{
            fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif",
            fontSize: 28,
            color: "#d4d4d4",
            textAlign: "center",
            marginTop: 12,
            letterSpacing: 4,
          }}
        >
          国际清算银行
        </div>
      </div>

      {/* 银行标志 */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "15%",
          transform: `translate(-50%, -50%) scale(${logoScale})`,
          opacity: logoOpacity,
        }}
      >
        <div
          style={{
            width: "180px",
            height: "180px",
            border: "4px solid #ffd700",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(30, 58, 90, 0.9)",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ffd700",
              textAlign: "center",
              lineHeight: "1.4",
            }}
          >
            BIS
            <br />
            <span style={{ fontSize: 12, color: "#e8e8e8" }}>
              Basel
              <br />
              Since 1930
            </span>
          </div>
        </div>
      </div>

      {/* 位置信息 */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "35%",
          width: "30%",
          opacity: locationOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(30, 58, 90, 0.85)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ffd700",
              marginBottom: 12,
            }}
          >
            The Most Secretive Bank
          </div>
          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.7" }}>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#22c55e" }}>Location:</span> Basel, Switzerland
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#22c55e" }}>Founded:</span> 1930
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#22c55e" }}>Ownership:</span> Central banks only
            </div>
            <div>
              <span style={{ color: "#22c55e" }}>Status:</span> "Bank of Bankers"
            </div>
          </div>
        </div>
      </div>

      {/* 功能介绍 */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          right: "5%",
          width: "55%",
          opacity: functionsOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(30, 58, 90, 0.85)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ffd700",
              marginBottom: 16,
            }}
          >
            Core Functions
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {functions.map((func, index) => (
              <div
                key={index}
                style={{
                  padding: "12px",
                  background: "rgba(13, 17, 23, 0.7)",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    color: "#ffd700",
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  {func.title}
                </div>
                <div style={{ fontSize: 12, color: "#9ca3af" }}>{func.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 成员央行 */}
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "5%",
          width: "40%",
          opacity: membersOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(30, 58, 90, 0.85)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ffd700",
              marginBottom: 12,
            }}
          >
            Member Central Banks
          </div>
          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.8" }}>
            <div>🏛️ Federal Reserve (USA)</div>
            <div>🏛️ Bank of England</div>
            <div>🏛️ Bundesbank (Germany)</div>
            <div>🏛️ Bank of Japan</div>
            <div>+ 60+ more central banks</div>
          </div>
        </div>
      </div>

      {/* 秘密会议 */}
      <div
        style={{
          position: "absolute",
          top: "70%",
          right: "5%",
          width: "50%",
          opacity: secretOpacity,
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
            ⚠️ Secret "Basel Meetings"
          </div>
          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.7" }}>
            <div style={{ marginBottom: 8 }}>
              Every January, central bank governors meet in Basel
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#ef4444" }}>No minutes</span> are published
            </div>
            <div>
              <span style={{ color: "#ef4444" }}>No press</span> coverage allowed
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
          "The BIS is where the world's most powerful bankers
          make decisions that affect billions."
        </div>
      </div>
    </AbsoluteFill>
  );
};
