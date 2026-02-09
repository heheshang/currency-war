import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Sequence } from "remotion";

/**
 * AncientMarketScene - 古代集市场景
 *
 * 展现古代金币在阳光下闪耀，人们用金币交易的场景
 * 建立"货币即财富"的基本概念
 */

/**
 * AnimatedCharacter - 动画人物组件
 * 支持走路、站立、交易等动作
 * 采用现代扁平化卡通风格
 */
interface AnimatedCharacterProps {
  x: number;
  y: number;
  scale: number;
  skinColor: string;
  clothColor: string;
  frame: number;
  action?: "walking" | "standing" | "trading" | "talking";
  hasBeard?: boolean;
  hasHat?: boolean;
}

const AnimatedCharacter: React.FC<AnimatedCharacterProps> = ({
  x,
  y,
  scale,
  skinColor,
  clothColor,
  frame,
  action = "standing",
  hasBeard = false,
  hasHat = false,
}) => {
  // 身体上下浮动（模拟呼吸和行走）
  const bodyBob = action === "walking"
    ? Math.sin((frame * 0.3) % (Math.PI * 2)) * 3
    : Math.sin((frame * 0.1) % (Math.PI * 2)) * 1;

  // 手臂摆动
  const armSwing = action === "walking"
    ? Math.sin((frame * 0.3) % (Math.PI * 2)) * 20
    : action === "trading"
      ? Math.sin((frame * 0.15) % (Math.PI * 2)) * 5
      : Math.sin((frame * 0.05) % (Math.PI * 2)) * 2;

  // 说话时头部轻微移动
  const headBob = action === "talking"
    ? Math.sin((frame * 0.2) % (Math.PI * 2)) * 2
    : 0;

  const s = scale; // 简写
  const centerY = bodyBob;

  return (
    <svg
      width={120 * s}
      height={160 * s}
      viewBox="0 0 120 160"
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        overflow: "visible",
      }}
    >
      {/* 身体阴影 */}
      <ellipse
        cx={60}
        cy={145}
        rx={35 * s}
        ry={8 * s}
        fill="rgba(0,0,0,0.2)"
      />

      {/* 腿部 - 动态走路姿态 */}
      <g transform={`translate(0, ${centerY})`}>
        {/* 左腿 */}
        <path
          d={`
            M ${45 * s} ${100 * s}
            Q ${40 * s} ${120 * s}, ${42 * s} ${145 * s}
            L ${48 * s} ${145 * s}
            Q ${50 * s} ${120 * s}, ${45 * s} ${100 * s}
          `}
          fill={clothColor}
          stroke="rgba(0,0,0,0.1)"
          strokeWidth={1}
          transform={action === "walking" ? `rotate(${Math.sin(frame * 0.3) * 10}, ${45 * s}, ${100 * s})` : ""}
        />

        {/* 右腿 */}
        <path
          d={`
            M ${75 * s} ${100 * s}
            Q ${80 * s} ${120 * s}, ${78 * s} ${145 * s}
            L ${72 * s} ${145 * s}
            Q ${70 * s} ${120 * s}, ${75 * s} ${100 * s}
          `}
          fill={clothColor}
          stroke="rgba(0,0,0,0.1)"
          strokeWidth={1}
          transform={action === "walking" ? `rotate(${-Math.sin(frame * 0.3) * 10}, ${75 * s}, ${100 * s})` : ""}
        />
      </g>

      {/* 身体主体 */}
      <path
        d={`
          M ${35 * s} ${60 * s}
          L ${35 * s} ${110 * s}
          Q ${35 * s} ${120 * s}, ${45 * s} ${120 * s}
          L ${75 * s} ${120 * s}
          Q ${85 * s} ${120 * s}, ${85 * s} ${110 * s}
          L ${85 * s} ${60 * s}
          Q ${85 * s} ${45 * s}, ${70 * s} ${45 * s}
          L ${50 * s} ${45 * s}
          Q ${35 * s} ${45 * s}, ${35 * s} ${60 * s}
        `}
        fill={clothColor}
        stroke="rgba(0,0,0,0.1)"
        strokeWidth={1}
      />

      {/* 衣服细节 - 领口 */}
      <path
        d={`
          M ${50 * s} ${45 * s}
          L ${70 * s} ${45 * s}
          L ${60 * s} ${55 * s}
          Z
        `}
        fill="rgba(255,255,255,0.3)"
      />

      {/* 腰带 */}
      <rect
        x={35 * s}
        y={85 * s}
        width={50 * s}
        height={8 * s}
        fill="rgba(0,0,0,0.2)"
        rx={4}
      />

      {/* 左臂 */}
      <g transform={`translate(0, ${centerY})`}>
        <path
          d={`
            M ${35 * s} ${50 * s}
            Q ${25 * s} ${70 * s}, ${20 * s} ${85 * s}
            L ${22 * s} ${85 * s}
            Q ${28 * s} ${70 * s}, ${38 * s} ${50 * s}
          `}
          fill={clothColor}
          stroke="rgba(0,0,0,0.1)"
          strokeWidth={1}
          transform={action === "walking" || action === "trading" ? `rotate(${armSwing}, ${35 * s}, ${50 * s})` : ""}
          style={{ transformOrigin: `${35 * s}px ${50 * s}px` }}
        />
        {/* 手 */}
        <circle
          cx={20 * s}
          cy={87 * s}
          r={8 * s}
          fill={skinColor}
          transform={`translate(0, ${centerY})`}
        />
      </g>

      {/* 右臂 */}
      <g transform={`translate(0, ${centerY})`}>
        <path
          d={`
            M ${85 * s} ${50 * s}
            Q ${95 * s} ${70 * s}, ${100 * s} ${85 * s}
            L ${98 * s} ${85 * s}
            Q ${92 * s} ${70 * s}, ${82 * s} ${50 * s}
          `}
          fill={clothColor}
          stroke="rgba(0,0,0,0.1)"
          strokeWidth={1}
          transform={action === "walking" || action === "trading" ? `rotate(${-armSwing}, ${85 * s}, ${50 * s})` : ""}
          style={{ transformOrigin: `${85 * s}px ${50 * s}px` }}
        />
        {/* 手 */}
        <circle
          cx={100 * s}
          cy={87 * s}
          r={8 * s}
          fill={skinColor}
        />
      </g>

      {/* 头部 */}
      <g transform={`translate(0, ${headBob})`}>
        {/* 脖子 */}
        <rect
          x={52 * s}
          y={40 * s}
          width={16 * s}
          height={10 * s}
          fill={skinColor}
        />

        {/* 头型 */}
        <ellipse
          cx={60 * s}
          cy={30 * s}
          rx={28 * s}
          ry={30 * s}
          fill={skinColor}
        />

        {/* 头发 */}
        <ellipse
          cx={60 * s}
          cy={22 * s}
          rx={30 * s}
          ry={20 * s}
          fill="#3D2314"
        />
        <ellipse
          cx={60 * s}
          cy={35 * s}
          rx={26 * s}
          ry={8 * s}
          fill="#3D2314"
        />

        {/* 帽子 */}
        {hasHat && (
          <>
            <ellipse
              cx={60 * s}
              cy={18 * s}
              rx={32 * s}
              ry={8 * s}
              fill="#8B4513"
            />
            <rect
              x={55 * s}
              y={8 * s}
              width={10 * s}
              height={10 * s}
              fill="#8B4513"
            />
          </>
        )}

        {/* 胡须 */}
        {hasBeard && (
          <path
            d={`
              M ${45 * s} ${35 * s}
              Q ${60 * s} ${50 * s}, ${75 * s} ${35 * s}
            `}
            stroke="#4A3728"
            strokeWidth={3 * s}
            fill="none"
          />
        )}

        {/* 眼睛 */}
        <ellipse
          cx={50 * s}
          cy={28 * s}
          rx={5 * s}
          ry={6 * s}
          fill="white"
        />
        <ellipse
          cx={70 * s}
          cy={28 * s}
          rx={5 * s}
          ry={6 * s}
          fill="white"
        />
        <circle
          cx={50 * s}
          cy={29 * s}
          r={2.5 * s}
          fill="#2C1810"
        />
        <circle
          cx={70 * s}
          cy={29 * s}
          r={2.5 * s}
          fill="#2C1810"
        />

        {/* 眉毛 */}
        <path
          d={`M ${42 * s} ${22 * s} Q ${50 * s} ${20 * s}, ${58 * s} ${22 * s}`}
          stroke="#3D2314"
          strokeWidth={2 * s}
          fill="none"
        />
        <path
          d={`M ${62 * s} ${22 * s} Q ${70 * s} ${20 * s}, ${78 * s} ${22 * s}`}
          stroke="#3D2314"
          strokeWidth={2 * s}
          fill="none"
        />

        {/* 嘴巴 - 说话时张开 */}
        <ellipse
          cx={60 * s}
          cy={40 * s}
          rx={4 * s}
          ry={action === "talking" ? 4 * s + Math.sin(frame * 0.3) * 2 : 3 * s}
          fill="#C97878"
        />

        {/* 脸红 */}
        <ellipse
          cx={42 * s}
          cy={36 * s}
          rx={5 * s}
          ry={3 * s}
          fill="rgba(255,150,150,0.3)"
        />
        <ellipse
          cx={78 * s}
          cy={36 * s}
          rx={5 * s}
          ry={3 * s}
          fill="rgba(255,150,150,0.3)"
        />
      </g>
    </svg>
  );
};

/**
 * TradingScene - 交易场景动画
 * 展示两个人物进行金币交易
 */
const TradingScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 人物位置动画
  const buyerX = interpolate(frame, [0, 60, 120], [15, 35, 35]);
  const sellerX = interpolate(frame, [0, 60, 120], [65, 45, 45]);

  // 金币传递动画
  const coinX = interpolate(frame, [60, 90], [35, 45]);
  const coinY = interpolate(frame, [60, 90], [55, 45]);
  const coinScale = interpolate(frame, [60, 75, 90], [1, 1.5, 1]);

  // 交易完成后的满足感
  const satisfactionScale = interpolate(frame, [90, 120], [1, 1.1]);

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      {/* 买方 - 带着金币 */}
      <AnimatedCharacter
        x={buyerX}
        y={50}
        scale={1.2}
        skinColor="#F5DEB3"
        clothColor="#8B4513"
        frame={frame}
        action={frame < 60 ? "walking" : "trading"}
        hasBeard={true}
      />

      {/* 卖方 - 拿着商品 */}
      <AnimatedCharacter
        x={sellerX}
        y={50}
        scale={1.2}
        skinColor="#F5DEB3"
        clothColor="#2F4F4F"
        frame={frame}
        action={frame < 60 ? "walking" : "trading"}
        hasHat={true}
      />

      {/* 交易中的金币 */}
      {frame >= 60 && frame < 120 && (
        <div
          style={{
            position: "absolute",
            left: `${coinX}%`,
            top: `${coinY}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            style={{
              width: 30 * coinScale,
              height: 30 * coinScale,
              background: "radial-gradient(circle at 30% 30%, #FFD700, #DAA520)",
              borderRadius: "50%",
              boxShadow: `0 0 20px rgba(255, 215, 0, 0.8)`,
              border: "3px solid #B8860B",
              transform: `rotate(${frame * 5}deg)`,
            }}
          />
        </div>
      )}

      {/* 交易完成特效 */}
      {frame >= 90 && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "30%",
            transform: "translate(-50%, -50%)",
            opacity: interpolate(frame, [90, 110], [1, 0]),
          }}
        >
          <div
            style={{
              fontSize: 36 * satisfactionScale,
              color: "#FFD700",
              fontFamily: "Cinzel, serif",
              fontWeight: 700,
              textShadow: "0 0 20px rgba(255, 215, 0, 0.8)",
              textAlign: "center",
            }}
          >
            ✓ Trade Complete
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * WalkingMerchant - 行走的商人
 */
const WalkingMerchant: React.FC<{
  startX: number;
  endX: number;
  delay: number;
  skinColor: string;
  clothColor: string;
  hasBeard?: boolean;
  hasHat?: boolean;
}> = ({ startX, endX, delay, skinColor, clothColor, hasBeard = false, hasHat = false }) => {
  const frame = useCurrentFrame();
  const delayedFrame = Math.max(0, frame - delay);

  const x = interpolate(delayedFrame, [0, 180], [startX, endX]);
  const y = 65 + Math.sin(delayedFrame * 0.05) * 2; // 轻微上下移动，模拟行走

  const opacity = interpolate(delayedFrame, [0, 30], [0, 1]);

  return (
    <div style={{ opacity }}>
      <AnimatedCharacter
        x={x}
        y={y}
        scale={0.9}
        skinColor={skinColor}
        clothColor={clothColor}
        frame={delayedFrame}
        action="walking"
        hasBeard={hasBeard}
        hasHat={hasHat}
      />

      {/* 商人携带的包裹 */}
      <div
        style={{
          position: "absolute",
          left: `${x}%`,
          top: `${y + 8}%`,
          transform: "translateX(-50%)",
          width: 25,
          height: 20,
          background: "#D2691E",
          borderRadius: "5px",
          border: "2px solid #8B4513",
        }}
      />
    </div>
  );
};

/**
 * TalkingPair - 交谈的人群
 */
const TalkingPair: React.FC<{ x: number; delay: number }> = ({ x, delay }) => {
  const frame = useCurrentFrame();
  const delayedFrame = Math.max(0, frame - delay);

  const opacity = interpolate(delayedFrame, [0, 30], [0, 1]);

  return (
    <div style={{ opacity }}>
      {/* 人物1 */}
      <AnimatedCharacter
        x={x - 3}
        y={68}
        scale={0.8}
        skinColor="#F5DEB3"
        clothColor="#4A6741"
        frame={delayedFrame}
        action="talking"
      />

      {/* 人物2 */}
      <AnimatedCharacter
        x={x + 3}
        y={68}
        scale={0.85}
        skinColor="#F5DEB3"
        clothColor="#6B4423"
        frame={delayedFrame + 5} // 稍微错开的说话节奏
        action="talking"
      />

      {/* 对话气泡 */}
      {delayedFrame % 120 < 60 && (
        <div
          style={{
            position: "absolute",
            left: `${x}%`,
            top: "55%",
            transform: "translateX(-50%)",
            background: "rgba(255, 255, 255, 0.9)",
            padding: "8px 15px",
            borderRadius: "15px",
            fontSize: 14,
            color: "#333",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            whiteSpace: "nowrap",
          }}
        >
          Gold! 💰
        </div>
      )}
    </div>
  );
};

/**
 * 主场景组件
 */
export const AncientMarketScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 金币旋转
  const coinRotation = interpolate(frame, [0, 120], [0, 360]);
  const coinScale = interpolate(frame, [0, 30], [0.8, 1], {
    extrapolateRight: "clamp",
  });

  // 阳光角度
  const sunAngle = interpolate(frame, [0, 120], [0, 45]);

  // 市场摊位淡入
  const stallsOpacity = interpolate(frame, [20, 60], [0, 0.6]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #87CEEB 0%, #F0E68C 100%)",
      }}
    >
      {/* 太阳 */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: 120,
          height: 120,
          background:
            "radial-gradient(circle, #FFD700 0%, #FFA500 50%, transparent 70%)",
          borderRadius: "50%",
          transform: `rotate(${sunAngle}deg)`,
          opacity: 0.8,
        }}
      />

      {/* 云朵 */}
      {[
        { x: 15, y: 8, scale: 1 },
        { x: 60, y: 12, scale: 0.8 },
        { x: 80, y: 5, scale: 1.2 },
      ].map((cloud, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            transform: `translateX(-50%) scale(${cloud.scale})`,
            opacity: 0.7,
          }}
        >
          <div
            style={{
              width: 100,
              height: 40,
              background: "rgba(255, 255, 255, 0.8)",
              borderRadius: "50px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 50,
                height: 30,
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: "50%",
                top: -15,
                left: 15,
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 40,
                height: 25,
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: "50%",
                top: -10,
                left: 50,
              }}
            />
          </div>
        </div>
      ))}

      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#1a1a1a",
          fontFamily: "Cinzel, serif",
          fontSize: 48,
          fontWeight: 700,
          textAlign: "center",
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        Ancient Marketplace
      </div>

      <div
        style={{
          position: "absolute",
          top: "23%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#4a4a4a",
          fontFamily: "Merriweather, serif",
          fontSize: 20,
          fontStyle: "italic",
          opacity: interpolate(frame, [20, 50], [0, 1]),
        }}
      >
        Where gold was king
      </div>

      {/* 中央金币 */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${coinScale})`,
        }}
      >
        <div
          style={{
            width: 150,
            height: 150,
            background: "radial-gradient(circle at 30% 30%, #FFD700, #DAA520)",
            borderRadius: "50%",
            boxShadow: `
              0 0 30px rgba(255, 215, 0, 0.8),
              inset 0 -5px 10px rgba(0, 0, 0, 0.3),
              inset 0 5px 10px rgba(255, 255, 255, 0.3)
            `,
            transform: `rotate(${coinRotation}deg)`,
            border: "8px solid #B8860B",
          }}
        />
      </div>

      {/* 市场摊位背景 */}
      <div style={{ opacity: stallsOpacity }}>
        {[
          { x: 10, color: "#8B4513" },
          { x: 30, color: "#A0522D" },
          { x: 70, color: "#6B4423" },
          { x: 90, color: "#8B4513" },
        ].map((stall, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: 0,
              left: `${stall.x}%`,
              width: 80,
              height: 120,
              background: stall.color,
              borderRadius: "5px 5px 0 0",
              opacity: 0.5,
            }}
          >
            {/* 摊位遮阳 */}
            <div
              style={{
                position: "absolute",
                top: -20,
                left: -10,
                width: 100,
                height: 25,
                background: "#D2691E",
                borderRadius: "5px",
              }}
            />
          </div>
        ))}
      </div>

      {/* 交易场景序列 */}
      <Sequence durationInFrames={120}>
        <TradingScene />
      </Sequence>

      {/* 行走的商人 */}
      <WalkingMerchant
        startX={-10}
        endX={100}
        delay={120}
        skinColor="#F5DEB3"
        clothColor="#8B4513"
        hasHat={true}
      />
      <WalkingMerchant
        startX={110}
        endX={0}
        delay={150}
        skinColor="#F5DEB3"
        clothColor="#2F4F4F"
        hasBeard={true}
      />
      <WalkingMerchant
        startX={-10}
        endX={100}
        delay={200}
        skinColor="#F5DEB3"
        clothColor="#6B4423"
      />

      {/* 交谈的人群 */}
      <TalkingPair x={25} delay={0} />
      <TalkingPair x={75} delay={60} />

      {/* 说明文字 */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#1a1a1a",
          fontFamily: "Merriweather, serif",
          fontSize: 24,
          textAlign: "center",
          maxWidth: "70%",
          lineHeight: "1.6",
          opacity: interpolate(frame, [60, 90], [0, 1]),
        }}
      >
        In ancient times, gold was more than money...
        <br />
        <span
          style={{
            color: "#B8860B",
            fontWeight: 600,
          }}
        >
          It was wealth itself.
        </span>
      </div>
    </AbsoluteFill>
  );
};
