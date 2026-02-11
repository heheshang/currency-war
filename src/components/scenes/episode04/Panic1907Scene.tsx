import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { CartoonCharacter } from "../../characters/CartoonCharacter";

/**
 * Panic1907Scene - 1907年恐慌场景
 *
 * 展示银行家人为制造的金融危机，摩根成为"救世主"
 */
export const Panic1907Scene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // 股价下跌动画
  const stockDrop = interpolate(frame, [120, 420], [0, 200], { extrapolateRight: "clamp" });

  // 人群恐慌动画
  const crowdOpacity = interpolate(frame, [180, 300], [0, 1], { extrapolateRight: "clamp" });

  // 摩根救世主淡入
  const morganOpacity = interpolate(frame, [480, 660], [0, 1], { extrapolateRight: "clamp" });

  // 田纳西公司淡入
  const tennesseeOpacity = interpolate(frame, [600, 780], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1a0000 0%, #0d1117 100%)",
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
            fontSize: 38,
            color: "#8b0000",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          1907 Panic
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 24,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          The Precursor to the Federal Reserve
        </div>
      </div>

      {/* 股价下跌图表 */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <svg width={500} height={250} viewBox="0 0 500 250">
          <defs>
            <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#8b0000" />
            </linearGradient>
          </defs>

          {/* 坐标轴 */}
          <line x1="50" y1="200" x2="450" y2="200" stroke="#4b5563" strokeWidth="1" />
          <line x1="50" y1="50" x2="50" y2="190" stroke="#4b5563" strokeWidth="1" />

          {/* 股价下跌曲线 - 红色 */}
          <path
            d="M 50,190 Q 150,180 250,150 Q 350,50 450,180"
            fill="none"
            stroke="url(#chartGrad)"
            strokeWidth="3"
          />

          {/* 当前价格指示器 */}
          <g transform={`translate(${250 + stockDrop}, 180)`}>
            <circle r="6" fill="#8b0000" />
            <text x="0" y="-15" fontSize="10" fill="#8b0000" textAnchor="middle">
              CRASH
            </text>
          </g>

          {/* 标签 */}
          <text x="250" y="230" fontSize="14" fill="#9ca3af" textAnchor="middle">
            Stock Market Collapse
          </text>
          <text x="250" y="30" fontSize="12" fill="#6b7280" textAnchor="middle">
            Bank Runs • Panic Selling
          </text>
        </svg>
      </div>

      {/* 银行门口排队的人群 */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "10%",
          opacity: crowdOpacity,
        }}
      >
        {/* 多个人物剪影表示人群 */}
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${i * 18}%`,
              bottom: "20%",
              width: "40px",
              height: "80px",
              background: "rgba(0, 0, 0, 0.3)",
              borderRadius: "20px 20px 0 0",
            }}
          />
        ))}
      </div>

      {/* 摩根救世主 */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          right: "15%",
          opacity: morganOpacity,
        }}
      >
        <CartoonCharacter
          x={0}
          y={0}
          scale={1.3}
          characterType="banker"
          action="think"
          facingRight={false}
          frame={frame}
        />
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
              fontSize: 16,
              color: "#ffd700",
              textAlign: "center",
              marginBottom: 8,
            }}
          >
            J.P. MORGAN "SAVES THE DAY"
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#e8e8e8",
              textAlign: "center",
            }}
          >
            With $25 Million Emergency Fund
          </div>
        </div>
      </div>

      {/* 田纳西矿业和制铁公司 */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          right: "45%",
          opacity: tennesseeOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(139, 69, 19, 0.9)",
            border: "2px solid #d4af37",
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
            Tennessee Coal & Iron Company
          </div>
          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.6" }}>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>Value:</span> $1 Billion
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#d4af37", fontWeight: 600 }}>Morgan's Cost:</span> $45 Million
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#ffd700", fontWeight: 600 }}>Return:</span> 2,000%
            </div>
          </div>
        </div>

        {/* 连接线 */}
        <svg
          style={{
            position: "absolute",
            top: "50%",
            left: "-20px",
            opacity: 0.5,
          }}
          width="200"
          height="100"
        >
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3">
              <path d="M 0,0 L 0,10 L 3,5 z" fill="#ffd700" />
            </marker>
          </defs>
          <path
            d="M 180,20 Q 100,50 50,60"
            fill="none"
            stroke="#ffd700"
            strokeWidth="2"
            strokeDasharray="4,4"
            markerEnd="url(#arrow)"
          />
        </svg>
      </div>

      {/* 底部信息 */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: tennesseeOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 22,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            lineHeight: "1.6",
          }}
        >
          "A panic scientifically engineered to create demand for central bank."
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#ffd700",
            textAlign: "center",
            marginTop: 16,
          }}
        >
          Create the problem. Offer the solution. Acquire assets.
        </div>
      </div>
    </AbsoluteFill>
  );
};
