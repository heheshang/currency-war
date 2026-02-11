import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * GoldToFiatScene - 金本位到法定货币场景
 *
 * 展示银行家世界观的重大转变
 * 从黄金卫道士到黄金破坏者
 */
export const GoldToFiatScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // 金币旋转
  const goldRotation = spring({
    frame: frame >= 60 ? frame - 60 : 0,
    fps: 30,
    config: { damping: 10, stiffness: 50 },
  });

  // 法币淡入
  const fiatOpacity = interpolate(frame, [240, 420], [0, 1], { extrapolateRight: "clamp" });

  // 凯恩斯名言淡入
  const quoteOpacity = interpolate(frame, [540, 660], [0, 1], { extrapolateRight: "clamp" });

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
            fontSize: 34,
            color: "#ffd700",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          From Gold Standard to Fiat Money
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 22,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          The Great Shift in Banker Worldview
        </div>
      </div>

      {/* 对比展示 */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "100px",
          alignItems: "center",
        }}
      >
        {/* 旧系统 - 金本位 */}
        <div
          style={{
            flex: 1,
            padding: "30px",
            background: "rgba(30, 58, 138, 0.2)",
            border: "2px solid rgba(255, 215, 0, 0.3)",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 20,
              color: "#ffd700",
              marginBottom: 16,
            }}
          >
            OLD SYSTEM
          </div>
          <div
            style={{
              width: "80px",
              height: "80px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <svg
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `rotate(${goldRotation}deg) translate(-50%, -50%)`,
              }}
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
            >
              <defs>
                <radialGradient id="goldGrad" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#ffd700" />
                  <stop offset="70%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#b8860b" />
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="45" fill="url(#goldGrad)" />
              <text
                x="50"
                y="52"
                fontSize="12"
                fill="#0d1117"
                textAnchor="middle"
                fontWeight="600"
              >
                GOLD
              </text>
            </svg>
          </div>
          <div style={{ fontSize: 13, color: "#e8e8e8", lineHeight: "1.6", marginTop: 12 }}>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#ffd700", fontWeight: 600 }}>✓</span> Money backed by gold
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#ffd700", fontWeight: 600 }}>✓</span> Limited money supply
            </div>
            <div>
              <span style={{ color: "#22c55e" }}>✗</span> Inflation hurts interest income
            </div>
          </div>
        </div>

        {/* 新系统 - 法定货币 */}
        <div
          style={{
            flex: 1,
            padding: "30px",
            background: "rgba(220, 38, 38, 0.2)",
            border: "2px solid rgba(34, 197, 94, 0.3)",
            borderRadius: "12px",
            opacity: fiatOpacity,
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 20,
              color: "#22c55e",
              marginBottom: 16,
            }}
          >
            NEW SYSTEM
          </div>
          <div
            style={{
              width: "80px",
              height: "80px",
              margin: "0 auto",
              position: "relative",
              background: "linear-gradient(135deg, #1a1a2e 0%, #2d1f1e 100%)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 36, color: "#9ca3af", fontWeight: 700 }}>
              $
            </div>
            <div style={{ fontSize: 12, color: "#e8e8e8", lineHeight: "1.6", marginTop: 8 }}>
              <div style={{ marginBottom: 8 }}>
                <span style={{ color: "#22c55e", fontWeight: 600 }}>✓</span> Money backed by NOTHING
              </div>
              <div style={{ marginBottom: 8 }}>
                <span style={{ color: "#22c55e", fontWeight: 600 }}>✓</span> Unlimited money supply
              </div>
              <div>
                <span style={{ color: "#ffd700", fontWeight: 600 }}>✓</span> Inflation creates profit
              </div>
            </div>
          </div>
        </div>

        {/* 箭头指示转变 */}
        <svg
          style={{
            position: "absolute",
            top: "calc(35% + 80px)",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: fiatOpacity,
          }}
          width="120"
          height="60"
        >
          <defs>
            <marker id="arrowhead" markerWidth="12" markerHeight="12" refX="10" refY="4">
              <path d="M 0,0 L 12,8 L 5,12 z" fill="#ffd700" />
            </marker>
          </defs>
          <path
            d="M 20,40 L 100,20"
            fill="none"
            stroke="#ffd700"
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
          <text x="60" y="15" fontSize="12" fill="#ffd700" textAnchor="middle">
            TRANSFORMATION
          </text>
        </svg>
      </div>

      {/* 凯恩斯名言 */}
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "75%",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 24,
            color: "#e8e8e8",
            fontWeight: 300,
            textAlign: "center",
            fontStyle: "italic",
            lineHeight: "1.8",
          }}
        >
          "By this method, the government can secretly and unobsured,
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#ffd700",
            fontWeight: 600,
            textAlign: "center",
            marginTop: 12,
          }}
        >
          confiscate the wealth of the people.
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 16,
          }}
        >
          "Not one man in a million will detect the theft."
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 18,
            color: "#d4af37",
            textAlign: "center",
            marginTop: 20,
            letterSpacing: 2,
          }}
        >
          — John Maynard Keynes
        </div>
      </div>

      {/* 底部装饰 */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
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
