import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, random } from "remotion";
import { FloatAnimation, ElasticText, PulseAnimation } from "../animations";

/**
 * ChinaAircraftCarrierScene - 中国经济航母场景
 *
 * 基于《货币战争》序言内容：
 * "起航的中国经济航母，会一帆风顺吗？"
 *
 * 展示中国经济作为一艘巨型航母的崛起，以及潜在的金融战争威胁
 */

interface ShipProps {
  x: number;
  y: number;
  scale: number;
  frame: number;
}

const AircraftCarrierShip: React.FC<ShipProps> = ({ x, y, scale, frame }) => {
  // 船只摇摆动画
  const rockAngle = Math.sin(frame * 0.03) * 2;
  const bobY = Math.sin(frame * 0.02) * 5;

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) scale(${scale})`,
      }}
    >
      <svg
        width={400}
        height={200}
        viewBox="0 0 400 200"
        style={{
          transform: `rotate(${rockAngle}deg) translateY(${bobY}px)`,
          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.4))",
        }}
      >
        <defs>
          {/* 船体金属渐变 */}
          <linearGradient id="shipHull" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A5568" />
            <stop offset="50%" stopColor="#2D3748" />
            <stop offset="100%" stopColor="#1A202C" />
          </linearGradient>

          {/* 甲板渐变 */}
          <linearGradient id="deckGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#718096" />
            <stop offset="100%" stopColor="#4A5568" />
          </linearGradient>

          {/* 旗帜渐变 */}
          <linearGradient id="flagRed" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E53E3E" />
            <stop offset="100%" stopColor="#C53030" />
          </linearGradient>

          {/* 金色装饰 */}
          <linearGradient id="goldTrim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D69E2E" />
            <stop offset="50%" stopColor="#ECC94B" />
            <stop offset="100%" stopColor="#D69E2E" />
          </linearGradient>
        </defs>

        {/* 船体 - 航空母舰造型 */}
        <path
          d="
            M 50 120
            L 70 140
            L 330 140
            L 370 120
            L 370 100
            L 350 90
            L 80 90
            L 50 100
            Z
          "
          fill="url(#shipHull)"
          stroke="#1A202C"
          strokeWidth={2}
        />

        {/* 船体细节 - 吃水线 */}
        <path
          d="M 60 130 L 360 130"
          stroke="#D69E2E"
          strokeWidth={2}
          opacity={0.8}
        />

        {/* 甲板 */}
        <rect x={80} y={85} width={280} height={10} fill="url(#deckGradient)" />

        {/* 舰岛 - 指挥塔 */}
        <path
          d="
            M 200 85
            L 200 50
            L 220 45
            L 220 85
            Z
          "
          fill="#2D3748"
          stroke="#1A202C"
          strokeWidth={1}
        />

        {/* 雷达天线 */}
        <line
          x1={210}
          y1={45}
          x2={210}
          y2={30}
          stroke="#4A5568"
          strokeWidth={2}
        />
        <circle
          cx={210}
          cy={28}
          r={5}
          fill="#E53E3E"
          opacity={0.8 + Math.sin(frame * 0.1) * 0.2}
        />

        {/* 跑道标记 */}
        <line
          x1={90}
          y1={80}
          x2={350}
          y2={80}
          stroke="#D69E2E"
          strokeWidth={2}
          strokeDasharray="20,10"
        />

        {/* 飞机停放区 */}
        <g>
          {/* 飞机1 */}
          <g transform={`translate(${120 + Math.sin(frame * 0.02) * 2}, 75)`}>
            <polygon
              points="0,0 15,3 0,6"
              fill="#718096"
              stroke="#4A5568"
              strokeWidth={0.5}
            />
          </g>
          {/* 飞机2 */}
          <g
            transform={`translate(${150 + Math.sin(frame * 0.02 + 1) * 2}, 75)`}
          >
            <polygon
              points="0,0 15,3 0,6"
              fill="#718096"
              stroke="#4A5568"
              strokeWidth={0.5}
            />
          </g>
          {/* 飞机3 */}
          <g
            transform={`translate(${280 + Math.sin(frame * 0.02 + 2) * 2}, 75)`}
          >
            <polygon
              points="0,0 15,3 0,6"
              fill="#718096"
              stroke="#4A5568"
              strokeWidth={0.5}
            />
          </g>
        </g>

        {/* 舰旗 - 中国国旗元素 */}
        <g transform="translate(230, 35)">
          <rect
            x={0}
            y={0}
            width={30}
            height={20}
            fill="url(#flagRed)"
            opacity={0.9}
          />
          {/* 大星星 */}
          <polygon
            points="7,5 8,8 11,8 9,10 10,13 7,11 4,13 5,10 3,8 6,8"
            fill="#ECC94B"
            transform="scale(1.2) translate(1, 1)"
          />
        </g>

        {/* 船首波浪 */}
        <path
          d={`
            M 370 120
            Q 390 115, 400 120
            Q 390 125, 370 120
          `}
          fill="rgba(255, 255, 255, 0.6)"
        />

        {/* 中国经济标识 */}
        <text
          x={200}
          y={125}
          textAnchor="middle"
          fill="#ECC94B"
          fontSize={10}
          fontWeight="bold"
          fontFamily="Cinzel, serif"
        >
          CHINA
        </text>
      </svg>

      {/* 船后的尾迹 */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: -50 - i * 30,
            top: 50 + i * 5,
            width: 40 - i * 5,
            height: 20 - i * 3,
            background: "rgba(255, 255, 255, 0.3)",
            borderRadius: "50%",
            filter: "blur(2px)",
            opacity: 1 - i * 0.15,
          }}
        />
      ))}
    </div>
  );
};

/**
 * 旋转的地球背景
 */
const SpinningGlobe: React.FC<{ frame: number }> = ({ frame }) => {
  const rotation = frame * 0.2;

  return (
    <div
      style={{
        position: "absolute",
        right: "10%",
        top: "30%",
        transform: "translateY(-50%)",
      }}
    >
      <svg
        width={200}
        height={200}
        viewBox="0 0 200 200"
        style={{
          transform: `rotate(${rotation}deg)`,
          filter: "drop-shadow(0 0 30px rgba(66, 153, 225, 0.5))",
        }}
      >
        <defs>
          <radialGradient id="globeGradient">
            <stop offset="0%" stopColor="#4299E1" />
            <stop offset="70%" stopColor="#2B6CB0" />
            <stop offset="100%" stopColor="#1A365D" />
          </radialGradient>
        </defs>

        {/* 地球 */}
        <circle
          cx={100}
          cy={100}
          r={80}
          fill="url(#globeGradient)"
          stroke="#2C5282"
          strokeWidth={2}
        />

        {/* 经纬线 */}
        {[...Array(6)].map((_, i) => (
          <ellipse
            key={i}
            cx={100}
            cy={100}
            rx={80}
            ry={20}
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={1}
            transform={`rotate(${i * 30}, 100, 100)`}
          />
        ))}

        {/* 中国高亮 */}
        <circle cx={130} cy={70} r={12} fill="#E53E3E" opacity={0.8}>
          <animate
            attributeName="opacity"
            values="0.8;1;0.8"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

/**
 * 经济数据可视化
 */
const EconomicStats: React.FC<{ frame: number }> = ({ frame }) => {
  const stats = [
    { label: "GDP Growth", value: "5.2%", color: "#48BB78" },
    { label: "Trade Volume", value: "$6.3T", color: "#4299E1" },
    { label: "Global Rank", value: "#2", color: "#ECC94B" },
  ];

  return (
    <div
      style={{
        position: "absolute",
        left: "5%",
        top: "25%",
        display: "flex",
        flexDirection: "column",
        gap: 15,
      }}
    >
      {stats.map((stat, i) => {
        const delay = i * 15;
        const opacity = interpolate(frame, [delay, delay + 30], [0, 1], {
          extrapolateRight: "clamp",
        });
        const x = interpolate(frame, [delay, delay + 30], [-50, 0], {
          extrapolateRight: "clamp",
        });

        return (
          <div
            key={i}
            style={{
              opacity,
              transform: `translateX(${x}px)`,
              background: "rgba(0, 0, 0, 0.6)",
              padding: "10px 15px",
              borderRadius: "8px",
              border: `1px solid ${stat.color}`,
              minWidth: "150px",
            }}
          >
            <div
              style={{
                color: "#A0AEC0",
                fontSize: 12,
                fontFamily: "Merriweather, serif",
              }}
            >
              {stat.label}
            </div>
            <div
              style={{
                color: stat.color,
                fontSize: 20,
                fontWeight: "bold",
                fontFamily: "Cinzel, serif",
              }}
            >
              {stat.value}
            </div>
          </div>
        );
      })}
    </div>
  );
};

/**
 * 标题动画
 */
const TitleAnimation: React.FC<{ frame: number }> = ({ frame }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: 42,
          color: "#ECC94B",
          fontFamily: "Cinzel, serif",
          fontWeight: 700,
          marginBottom: 15,
          textShadow: "0 0 20px rgba(236, 201, 75, 0.5)",
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        <ElasticText text="China's Economic Rise" delay={0} stagger={3} />
      </div>
      <div
        style={{
          fontSize: 18,
          color: "#CBD5E0",
          fontFamily: "Merriweather, serif",
          fontStyle: "italic",
          opacity: interpolate(frame, [20, 50], [0, 1]),
        }}
      >
        <ElasticText
          text="The aircraft carrier has set sail..."
          delay={15}
          stagger={2}
        />
      </div>
    </div>
  );
};

/**
 * 警示文字
 */
const WarningText: React.FC<{ frame: number }> = ({ frame }) => {
  const warningOpacity = interpolate(frame, [120, 150], [0, 1]);

  return (
    <div
      style={{
        position: "absolute",
        bottom: "15%",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
        opacity: warningOpacity,
      }}
    >
      <PulseAnimation>
        <div
          style={{
            fontSize: 28,
            color: "#FC8181",
            fontFamily: "Merriweather, serif",
            fontWeight: 600,
            maxWidth: "80%",
            lineHeight: "1.6",
          }}
        >
          <ElasticText
            text="But will the journey be smooth?"
            delay={0}
            stagger={2}
          />
        </div>
      </PulseAnimation>
    </div>
  );
};

/**
 * 主场景组件
 */
export const ChinaAircraftCarrierScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 船只从左向右移动
  const shipX = interpolate(frame, [0, 90, 900], [-20, 50, 50]);
  const shipScale = interpolate(frame, [0, 60], [0.3, 1], {
    extrapolateRight: "clamp",
  });

  // 海洋背景渐变
  const t = Math.min(1, Math.max(0, frame / 60));
  const oceanColor = `rgb(${Math.round(26 + (15 - 26) * t)}, ${Math.round(32 + (23 - 32) * t)}, ${Math.round(44 + (42 - 44) * t)})`;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, #1a202c 0%, ${oceanColor} 100%)`,
      }}
    >
      {/* 星空背景 */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${random(null) * 100}%`,
            top: `${random(null) * 40}%`,
            width: random(null) * 3 + 1,
            height: random(null) * 3 + 1,
            background: "white",
            borderRadius: "50%",
            opacity: random(null) * 0.8 + 0.2,
            animation: `twinkle ${2 + random(null) * 3}s infinite`,
          }}
        />
      ))}

      <SpinningGlobe frame={frame} />
      <EconomicStats frame={frame} />
      <TitleAnimation frame={frame} />

      <FloatAnimation distance={8}>
        <AircraftCarrierShip x={shipX} y={55} scale={shipScale} frame={frame} />
      </FloatAnimation>

      {/* 海洋波浪效果 */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "25%",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(26, 32, 44, 0.8) 100%)",
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: -10 + i * 20,
              left: `${i * 10}%`,
              width: "80%",
              height: 40,
              background: "rgba(66, 153, 225, 0.1)",
              borderRadius: "50%",
              filter: "blur(10px)",
              transform: `translateX(${Math.sin(frame * 0.02 + i) * 20}px)`,
            }}
          />
        ))}
      </div>

      <WarningText frame={frame} />
    </AbsoluteFill>
  );
};
