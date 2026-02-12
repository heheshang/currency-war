import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { ElasticText, ShakeAnimation } from "../animations";

/**
 * InvisibleBattlefieldScene - 看不见的战场
 *
 * 基于《货币战争》序言内容：
 * "中国能否在21世纪中叶成为世界经济真正强国的最主要隐患，
 *  更有可能来自于一个看不见硝烟的战场，即潜在的'金融大战'的威胁。"
 *
 * 展示金融战争的隐蔽性和危险性
 */

/**
 * 数字流动效果 - 代表资金的秘密流动
 */
const DigitalFlow: React.FC<{
  frame: number;
  direction: "left" | "right";
  delay: number;
}> = ({ frame, direction, delay }) => {
  const actualFrame = Math.max(0, frame - delay);
  const startX = direction === "left" ? -10 : 110;
  const endX = direction === "left" ? 110 : -10;

  const x = interpolate(actualFrame, [0, 180], [startX, endX], {
    extrapolateRight: "clamp",
  });
  const y = 50 + Math.sin(actualFrame * 0.05) * 20;
  const opacity = interpolate(actualFrame, [0, 30, 150, 180], [0, 1, 1, 0]);

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        opacity,
      }}
    >
      {/* 资金流动路径 */}
      <svg width={100} height={60}>
        <defs>
          <linearGradient id={`flow-${direction}-${delay}`}>
            <stop offset="0%" stopColor="rgba(66, 153, 225, 0)" />
            <stop offset="50%" stopColor="rgba(66, 153, 225, 0.8)" />
            <stop offset="100%" stopColor="rgba(66, 153, 225, 0)" />
          </linearGradient>
        </defs>
        <path
          d="M 0 30 Q 50 20, 100 30"
          stroke={`url(#flow-${direction}-${delay})`}
          strokeWidth={2}
          fill="none"
        />
      </svg>

      {/* 数据点 */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: 14,
          color: "#4299E1",
          fontFamily: "monospace",
          fontWeight: "bold",
        }}
      >
        $
      </div>
    </div>
  );
};

/**
 * 隐形的武器 - 金融衍生工具
 */
const InvisibleWeapon: React.FC<{
  frame: number;
  x: number;
  y: number;
  delay: number;
  icon: string;
}> = ({ frame, x, y, delay, icon }) => {
  const actualFrame = Math.max(0, frame - delay);
  const scale = interpolate(actualFrame, [0, 30, 60], [0, 1.2, 1], {
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(actualFrame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const glowIntensity = Math.sin(actualFrame * 0.1) * 0.3 + 0.7;

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        opacity,
      }}
    >
      <div
        style={{
          width: 80 * scale,
          height: 80 * scale,
          background:
            "radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 36 * scale,
            opacity: glowIntensity,
            filter: "drop-shadow(0 0 10px rgba(239, 68, 68, 0.8))",
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

/**
 * 金融战网络图
 */
const FinancialNetwork: React.FC<{ frame: number }> = ({ frame }) => {
  const nodes = [
    { x: 50, y: 50, label: "TARGET", color: "#E53E3E" },
    { x: 20, y: 30, label: "HEDGE FUND", color: "#4A5568" },
    { x: 80, y: 30, label: "BANK", color: "#4A5568" },
    { x: 30, y: 70, label: "DERIVATIVES", color: "#4A5568" },
    { x: 70, y: 70, label: "CURRENCY", color: "#4A5568" },
  ];

  const networkOpacity = interpolate(frame, [0, 60], [0, 1]);

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        opacity: networkOpacity,
      }}
    >
      <svg width={400} height={400} viewBox="0 0 400 400">
        {/* 连接线 */}
        {nodes.slice(1).map((node, i) => {
          const pulse = Math.sin(frame * 0.05 + i) * 0.5 + 0.5;
          return (
            <line
              key={i}
              x1={nodes[0].x * 4}
              y1={nodes[0].y * 4}
              x2={node.x * 4}
              y2={node.y * 4}
              stroke="#E53E3E"
              strokeWidth={1 + pulse * 2}
              opacity={0.3 + pulse * 0.4}
            />
          );
        })}

        {/* 节点 */}
        {nodes.map((node, i) => (
          <g key={i}>
            <circle
              cx={node.x * 4}
              cy={node.y * 4}
              r={i === 0 ? 30 : 20}
              fill={node.color}
              opacity={0.8}
            />
            {i === 0 && (
              <circle
                cx={node.x * 4}
                cy={node.y * 4}
                r={30 + Math.sin(frame * 0.1) * 5}
                fill="none"
                stroke="#E53E3E"
                strokeWidth={2}
                opacity={0.5}
              />
            )}
            <text
              x={node.x * 4}
              y={node.y * 4 + (i === 0 ? 50 : 35)}
              textAnchor="middle"
              fill="#CBD5E0"
              fontSize={10}
              fontFamily="Merriweather, serif"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

/**
 * 警示文字 - 层层递进
 */
const WarningMessages: React.FC<{ frame: number }> = ({ frame }) => {
  const messages = [
    {
      text: "An invisible battlefield...",
      startFrame: 0,
      color: "#ECC94B",
    },
    {
      text: "Where money becomes a weapon",
      startFrame: 60,
      color: "#FC8181",
    },
    {
      text: "And trade is warfare",
      startFrame: 120,
      color: "#F687B3",
    },
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: "15%",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
        width: "80%",
      }}
    >
      {messages.map((msg, i) => {
        const opacity = interpolate(
          frame,
          [msg.startFrame, msg.startFrame + 30],
          [0, 1],
          { extrapolateRight: "clamp" },
        );

        return (
          <div
            key={i}
            style={{
              fontSize: 28 - i * 3,
              color: msg.color,
              fontFamily: "Merriweather, serif",
              fontWeight: 600,
              marginBottom: i < messages.length - 1 ? 15 : 0,
              opacity,
              textShadow: `0 0 20px ${msg.color}80`,
            }}
          >
            <ElasticText text={msg.text} delay={msg.startFrame} stagger={2} />
          </div>
        );
      })}
    </div>
  );
};

/**
 * 底部警示
 */
const BottomWarning: React.FC<{ frame: number }> = ({ frame }) => {
  const opacity = interpolate(frame, [180, 210], [0, 1]);
  const shakeIntensity = interpolate(frame, [180, 210, 900], [0, 3, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: "12%",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
        opacity,
      }}
    >
      <ShakeAnimation intensity={shakeIntensity}>
        <div
          style={{
            fontSize: 24,
            color: "#FC8181",
            fontFamily: "Merriweather, serif",
            maxWidth: "85%",
            lineHeight: "1.6",
            background: "rgba(0, 0, 0, 0.6)",
            padding: "20px 30px",
            borderRadius: "10px",
            border: "2px solid #FC8181",
          }}
        >
          <ElasticText
            text="No smoke. No fire. No warning."
            delay={0}
            stagger={2}
          />
          <br />
          <ElasticText
            text="Just the silent destruction of wealth."
            delay={15}
            stagger={2}
          />
        </div>
      </ShakeAnimation>
    </div>
  );
};

/**
 * 红色警报效果
 */
const RedAlert: React.FC<{ frame: number }> = ({ frame }) => {
  const alertOpacity = Math.sin(frame * 0.05) * 0.15;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `rgba(239, 68, 68, ${alertOpacity})`,
        pointerEvents: "none",
      }}
    />
  );
};

/**
 * 主场景组件
 */
export const InvisibleBattlefieldScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #1A202C 0%, #0D1117 100%)",
      }}
    >
      {/* 背景网格 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          backgroundImage: `
            linear-gradient(rgba(66, 153, 225, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(66, 153, 225, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <RedAlert frame={frame} />

      {/* 数字资金流动 */}
      <DigitalFlow frame={frame} direction="left" delay={0} />
      <DigitalFlow frame={frame} direction="right" delay={30} />
      <DigitalFlow frame={frame} direction="left" delay={60} />
      <DigitalFlow frame={frame} direction="right" delay={90} />

      {/* 隐形武器 */}
      <InvisibleWeapon frame={frame} x={20} y={35} delay={120} icon="📊" />
      <InvisibleWeapon frame={frame} x={80} y={35} delay={150} icon="💱" />
      <InvisibleWeapon frame={frame} x={20} y={65} delay={180} icon="📈" />
      <InvisibleWeapon frame={frame} x={80} y={65} delay={210} icon="💰" />

      <FinancialNetwork frame={frame} />
      <WarningMessages frame={frame} />
      <BottomWarning frame={frame} />

      {/* 闪烁的数据代码效果 */}
      <div
        style={{
          position: "absolute",
          right: "5%",
          top: "20%",
          fontFamily: "monospace",
          fontSize: 12,
          color: "#4299E1",
          opacity: 0.5,
          lineHeight: 1.8,
        }}
      >
        {[
          "DERIVATIVES: $600T+",
          "HOT FLOW: $$$",
          "SHORT POSITIONS: ↑",
          "CURRENCY SWAP: ACTIVE",
          "LEVERAGE: 100x",
          "CREDIT DEFAULT: SWAP",
        ].map((line, i) => {
          const blink = Math.sin(frame * 0.1 + i) > 0.5 ? 1 : 0.3;
          return (
            <div key={i} style={{ opacity: blink }}>
              {line}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
