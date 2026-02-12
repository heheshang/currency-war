import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import { HistoricalFigure } from "../../characters/HistoricalFigure";
import { getFigure } from "../../characters/historicalFigures";

/**
 * IndependentTreasuryScene - 独立国库场景
 *
 * 马丁·范布伦建立独立财政系统
 * 政府资金与私人银行系统分离
 */
export const IndependentTreasuryScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 获取范布伦配置
  const vanBurenFigure = getFigure("martin_van_buren");
  const vanBurenPhoto = vanBurenFigure?.photoSrc || "";

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const vanBurenScale = spring({
    frame: frame - 45,
    fps: 30,
    config: { damping: 15, stiffness: 60 },
  });
  const buildingShow = interpolate(frame, [120, 210], [0, 1], {
    extrapolateRight: "clamp",
  });
  const quoteOpacity = interpolate(frame, [270, 360], [0, 1], {
    extrapolateRight: "clamp",
  });
  const resultOpacity = interpolate(frame, [450, 540], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at center, #1a1a2e 0%, #0d1117 100%)",
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
            fontSize: 32,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          Independent Treasury System
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
          1837 — Van Buren's Financial Independence
        </div>
      </div>

      {/* 范·布伦 */}
      <div
        style={{
          position: "absolute",
          left: "22%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${vanBurenScale})`,
        }}
      >
        <HistoricalFigure
          x={0}
          y={0}
          scale={1.1}
          photoSrc={vanBurenPhoto}
          nameEn="Martin Van Buren"
          nameCn="马丁·范布伦"
          action="talking"
          frameStyle="classic"
          photoFilter="grayscale"
          showLabel={true}
          frame={frame}
          animEffect="fadeIn"
        />
      </div>

      {/* 独立国库建筑 */}
      <div
        style={{
          position: "absolute",
          right: "15%",
          top: "40%",
          opacity: buildingShow,
          transform: `scale(${spring({ frame: frame - 150, fps: 30, config: { damping: 12, stiffness: 80 } })})`,
        }}
      >
        <svg width={250} height={200} viewBox="0 0 250 200">
          <defs>
            <linearGradient
              id="treasuryGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#b8860b" />
            </linearGradient>
          </defs>

          {/* 建筑主体 */}
          <rect
            x={30}
            y={80}
            width={190}
            height={110}
            fill="#f5e6d3"
            stroke="#8b5a2b"
            strokeWidth={3}
          />

          {/* 三角形屋顶 */}
          <path
            d="M 20,80 L 125,20 L 230,80 Z"
            fill="url(#treasuryGrad)"
            stroke="#8b5a2b"
            strokeWidth={2}
          />

          {/* 柱子 */}
          <g fill="#e8dcc8" stroke="#8b5a2b" strokeWidth={1}>
            <rect x={50} y={90} width={12} height={90} />
            <rect x={75} y={90} width={12} height={90} />
            <rect x={100} y={90} width={12} height={90} />
            <rect x={125} y={90} width={12} height={90} />
            <rect x={150} y={90} width={12} height={90} />
            <rect x={175} y={90} width={12} height={90} />
          </g>

          {/* 门 */}
          <rect
            x={105}
            y={130}
            width={40}
            height={50}
            fill="#3d2817"
            stroke="#8b5a2b"
            strokeWidth={2}
          />

          {/* 文字 */}
          <text
            x={125}
            y={60}
            fontSize={10}
            fill="#3d2817"
            fontWeight={700}
            textAnchor="middle"
            fontFamily="Cinzel, serif"
          >
            INDEPENDENT
          </text>
          <text
            x={125}
            y={75}
            fontSize={10}
            fill="#3d2817"
            fontWeight={700}
            textAnchor="middle"
            fontFamily="Cinzel, serif"
          >
            TREASURY
          </text>
        </svg>

        {/* 分离图标 */}
        <div
          style={{
            position: "absolute",
            bottom: -30,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              padding: "5px 12px",
              background: "rgba(34, 139, 34, 0.3)",
              border: "1px solid #228B22",
              borderRadius: 4,
              fontSize: 11,
              color: "#e8e8e8",
              fontFamily: "Merriweather, serif",
            }}
          >
            Government
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#ffd700",
            }}
          >
            ≠
          </div>
          <div
            style={{
              padding: "5px 12px",
              background: "rgba(139, 0, 0, 0.3)",
              border: "1px solid #8b0000",
              borderRadius: 4,
              fontSize: 11,
              color: "#e8e8e8",
              fontFamily: "Merriweather, serif",
            }}
          >
            Private Banks
          </div>
        </div>
      </div>

      {/* 核心概念 */}
      <div
        style={{
          position: "absolute",
          bottom: "32%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          opacity: quoteOpacity,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 14,
            color: "#9ca3af",
            letterSpacing: 2,
            marginBottom: 10,
          }}
        >
          "DIVORCE" OF GOVERNMENT MONEY FROM PRIVATE BANKS
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 15,
            color: "#e8e8e8",
            lineHeight: "1.6",
          }}
        >
          Government funds stored in Treasury's own system
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 14,
            color: "#228B22",
            marginTop: 8,
          }}
        >
          Only gold and silver accepted
        </div>
      </div>

      {/* 亨利·克莱反对 */}
      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "75%",
          opacity: resultOpacity,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 13,
            color: "#9ca3af",
            fontStyle: "italic",
          }}
        >
          Henry Clay and the Whig Party opposed: "A dangerous experiment"
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 12,
            color: "#ef4444",
            marginTop: 6,
          }}
        >
          European bankers retaliate: 1837 Panic follows
        </div>
      </div>

      {/* 时间标记 */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: resultOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 14,
            color: "#6b7280",
          }}
        >
          1837 — 1841: The Independent Treasury Experiment
        </div>
      </div>
    </AbsoluteFill>
  );
};
