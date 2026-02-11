import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * WhoOwnsFedScene - 谁拥有美联储场景
 *
 * 展示美联储纽约银行的股份结构
 * 6家主要银行控制40%股份
 */
export const WhoOwnsFedScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // 饼图扇区动画
  const pieSweep = interpolate(frame, [120, 480], [0, 180], { extrapolateRight: "clamp" });

  // 银行列表淡入
  const listOpacity = interpolate(frame, [300, 480], [0, 1], { extrapolateRight: "clamp" });

  // 结论淡入
  const conclusionOpacity = interpolate(frame, [660, 780], [0, 1], { extrapolateRight: "clamp" });

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
          Who Owns The Fed?
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 22,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Federal Reserve Bank of New York - 1914
        </div>
      </div>

      {/* 饼图 */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <svg width={500} height={500} viewBox="0 0 500 500">
          <defs>
            {/* 6家银行的渐变色 */}
            <linearGradient id="bank1Grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="bank2Grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#1a5f2b" />
            </linearGradient>
            <linearGradient id="bank3Grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffd700" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="bank4Grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#92400e" />
              <stop offset="100%" stopColor="#166534" />
            </linearGradient>
            <linearGradient id="bank5Grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#134064" />
            </linearGradient>
            <linearGradient id="bank6Grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0891b2" />
              <stop offset="100%" stopColor="#046a38" />
            </linearGradient>
            <linearGradient id="otherGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4b5563" />
              <stop offset="100%" stopColor="#1a202c" />
            </linearGradient>
          </defs>

          {/* 其他 */}
          <circle
            cx="250"
            cy="250"
            r="250"
            fill="url(#otherGrad)"
            opacity="0.3"
          />

          {/* 6家主要银行扇区 */}
          {/* 1. National City Bank - 30,000 shares */}
          <path
            d={`
              M 250,250
              L 250,${200 + Math.cos(pieSweep * Math.PI / 180 - Math.PI / 2) * 100}
              A ${200 + Math.sin(pieSweep * Math.PI / 180 - Math.PI / 2) * 100}
              L 250,250
            `}
            fill="url(#bank1Grad)"
            stroke="#0d1117"
            strokeWidth="1"
          />

          {/* 2. First National Bank - 15,000 shares */}
          <path
            d={`
              M 250,250
              L 250,${200 + Math.cos(pieSweep * Math.PI / 180 - Math.PI / 2 + Math.PI / 3) * 100}
              A ${200 + Math.sin(pieSweep * Math.PI / 180 - Math.PI / 2 + Math.PI / 3) * 100}
              L 250,250
            `}
            fill="url(#bank2Grad)"
            stroke="#0d1117"
            strokeWidth="1"
          />

          {/* 3. National Bank of Commerce - 21,000 shares */}
          <path
            d={`
              M 250,250
              L 250,${200 + Math.cos(pieSweep * Math.PI / 180 - Math.PI * 2 / 3 + Math.PI / 3) * 100}
              A ${200 + Math.sin(pieSweep * Math.PI / 180 - Math.PI * 2 / 3 + Math.PI / 3) * 100}
              L 250,250
            `}
            fill="url(#bank3Grad)"
            stroke="#0d1117"
            strokeWidth="1"
          />

          {/* 4. Hanover Bank - 10,000 shares */}
          <path
            d={`
              M 250,250
              L 250,${200 + Math.cos(pieSweep * Math.PI / 180 - Math.PI) * 100}
              A ${200 + Math.sin(pieSweep * Math.PI / 180 - Math.PI) * 100}
              L 250,250
            `}
            fill="url(#bank4Grad)"
            stroke="#0d1117"
            strokeWidth="1"
          />

          {/* 5. Chase Bank - 6,000 shares */}
          <path
            d={`
              M 250,250
              L 250,${200 + Math.cos(pieSweep * Math.PI / 180 + Math.PI) * 100}
              A ${200 + Math.sin(pieSweep * Math.PI / 180 + Math.PI) * 100}
              L 250,250
            `}
            fill="url(#bank5Grad)"
            stroke="#0d1117"
            strokeWidth="1"
          />

          {/* 6. Chemical Bank - 6,000 shares */}
          <path
            d={`
              M 250,250
              L 250,${200 + Math.cos(pieSweep * Math.PI / 180 + Math.PI * 1.5) * 100}
              A ${200 + Math.sin(pieSweep * Math.PI / 180 + Math.PI * 1.5) * 100}
              L 250,250
            `}
            fill="url(#bank6Grad)"
            stroke="#0d1117"
            strokeWidth="1"
          />

          {/* 中心圆 - 代表40% */}
          <circle cx="250" cy="250" r="50" fill="rgba(255, 215, 0, 0.1)" />

          {/* 标签 */}
          <text x="320" y="200" fontSize="16" fill="#ffd700" textAnchor="start" fontWeight="600">
            These 6 Banks: 40%
          </text>
        </svg>
      </div>

      {/* 银行列表 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "8%",
          width: "30%",
          opacity: listOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 18,
            color: "#ffd700",
            marginBottom: 20,
            letterSpacing: 1,
          }}
        >
          MAJOR SHAREHOLDERS (1914)
        </div>

        <div style={{ fontSize: 13, color: "#e8e8e8", lineHeight: "1.8" }}>
          <div style={{ marginBottom: 12, padding: "12px", background: "rgba(212, 175, 55, 0.2)" }}>
            <span style={{ color: "#d4af37", fontWeight: 600 }}>National City Bank</span><br />
            <span style={{ fontSize: 11 }}>Rockefeller/Kuhn Loeb</span><br />
            <span style={{ fontSize: 11 }}>30,000 shares</span>
          </div>

          <div style={{ marginBottom: 12, padding: "12px", background: "rgba(212, 175, 55, 0.2)" }}>
            <span style={{ color: "#22c55e", fontWeight: 600 }}>First National Bank</span><br />
            <span style={{ fontSize: 11 }}>J.P. Morgan</span><br />
            <span style={{ fontSize: 11 }}>15,000 shares</span>
          </div>

          <div style={{ marginBottom: 12, padding: "12px", background: "rgba(212, 175, 55, 0.2)" }}>
            <span style={{ color: "#ffd700", fontWeight: 600 }}>National Bank of Commerce</span><br />
            <span style={{ fontSize: 11 }}>Warburg</span><br />
            <span style={{ fontSize: 11 }}>21,000 shares</span>
          </div>

          <div style={{ marginBottom: 12, padding: "12px", background: "rgba(212, 175, 55, 0.2)" }}>
            <span style={{ color: "#92400e", fontWeight: 600 }}>Hanover Bank</span><br />
            <span style={{ fontSize: 11 }}>Rothschild director</span><br />
            <span style={{ fontSize: 11 }}>10,000 shares</span>
          </div>

          <div style={{ marginBottom: 12, padding: "12px", background: "rgba(212, 175, 55, 0.2)" }}>
            <span style={{ color: "#1e40af", fontWeight: 600 }}>Chase Bank</span><br />
            <span style={{ fontSize: 11 }}>6,000 shares</span>
          </div>

          <div style={{ marginBottom: 12, padding: "12px", background: "rgba(212, 175, 55, 0.2)" }}>
            <span style={{ color: "#0891b2", fontWeight: 600 }}>Chemical Bank</span><br />
            <span style={{ fontSize: 11 }}>6,000 shares</span>
          </div>
        </div>
      </div>

      {/* 关键结论 */}
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: conclusionOpacity,
        }}
      >
        <div
          style={{
            padding: "30px",
            background: "rgba(139, 0, 0, 0.4)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
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
            THE FED IS:
          </div>
          <div style={{ fontSize: 16, color: "#e8e8e8", lineHeight: "1.8" }}>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#d4af37" }}>NOT</span> Federal
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#d4af37" }}>NO</span> Reserves
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#d4af37" }}>NOT</span> a Bank
            </div>
            <div style={{ marginTop: 16, fontSize: 14 }}>
              It is a <span style={{ color: "#ffd700", fontWeight: 600 }}>PRIVATE CREDIT MONOPOLY</span>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 14,
            color: "#9ca3af",
            textAlign: "center",
          }}
        >
            Every Federal Reserve Note = Debt Owed to the Fed
          </div>
      </div>

      {/* 底部装饰 */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "250px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #ffd700, transparent)",
          opacity: opacity,
        }}
      />
    </AbsoluteFill>
  );
};
