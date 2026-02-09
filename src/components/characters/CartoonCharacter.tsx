import React from "react";
import { interpolate } from "remotion";

/**
 * CartoonCharacter - 卡通人物组件
 *
 * 使用SVG创建简洁可爱的卡通人物
 * 支持多种角色类型和动作
 */
export interface CartoonCharacterProps {
  x: number;
  y: number;
  scale?: number;
  characterType:
    | "merchant" // 商人
    | "banker" // 银行家
    | "citizen" // 市民
    | "politician" // 政客
    | "victim" // 受害者
    | "narrator"; // 叙述者
  action?: "idle" | "walk" | "talk" | "wave" | "point" | "think";
  skinColor?: string;
  clothColor?: string;
  facingRight?: boolean;
  frame: number;
}

export const CartoonCharacter: React.FC<CartoonCharacterProps> = ({
  x,
  y,
  scale = 1,
  characterType,
  action = "idle",
  skinColor = "#F5DEB3",
  clothColor,
  facingRight = true,
  frame,
}) => {
  // 根据角色类型设置默认服装颜色
  const defaultClothColor = {
    merchant: "#8B4513",
    banker: "#1E3A5A",
    citizen: "#4A6741",
    politician: "#2F4F4F",
    victim: "#6B4423",
    narrator: "#3D2314",
  }[characterType];

  const finalClothColor = clothColor || defaultClothColor;

  // 动画计算
  const bounce = interpolate(frame % 30, [0, 15, 30], [0, 5, 0]);
  const armWave = Math.sin((frame * 0.2) % (Math.PI * 2)) * 15;
  const mouthOpen = action === "talk" ? 3 + Math.sin(frame * 0.5) * 2 : 0;
  const eyeBlink = Math.sin(frame * 0.02) > 0.95 ? 1 : 0;

  // 角色特定属性
  const hasHat = characterType === "merchant" || characterType === "banker";
  const hasTie = characterType === "banker" || characterType === "politician";
  const hasGlasses = characterType === "banker";
  const hasBeard =
    characterType === "merchant" || characterType === "politician";

  const s = scale;

  return (
    <svg
      width={120 * s}
      height={180 * s}
      viewBox="0 0 120 180"
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) scaleX(${facingRight ? 1 : -1})`,
        overflow: "visible",
        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
      }}
    >
      <defs>
        {/* 皮肤渐变 */}
        <radialGradient id={`skinGrad-${x}-${y}`}>
          <stop offset="0%" stopColor={skinColor} />
          <stop offset="100%" stopColor={adjustColor(skinColor, -20)} />
        </radialGradient>

        {/* 衣服渐变 */}
        <linearGradient
          id={`clothGrad-${x}-${y}`}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor={adjustColor(finalClothColor, 20)} />
          <stop offset="100%" stopColor={finalClothColor} />
        </linearGradient>
      </defs>

      {/* 身体 */}
      <g transform={`translate(0, ${bounce * 0.5})`}>
        {/* 腿部 */}
        <rect
          x={45 * s}
          y={110 * s}
          width={12 * s}
          height={50 * s}
          rx={5}
          fill={adjustColor(finalClothColor, -30)}
        />
        <rect
          x={63 * s}
          y={110 * s}
          width={12 * s}
          height={50 * s}
          rx={5}
          fill={adjustColor(finalClothColor, -30)}
        />

        {/* 鞋子 */}
        <ellipse
          cx={51 * s}
          cy={165 * s}
          rx={10 * s}
          ry={6 * s}
          fill="#2C1810"
        />
        <ellipse
          cx={69 * s}
          cy={165 * s}
          rx={10 * s}
          ry={6 * s}
          fill="#2C1810"
        />

        {/* 躯干 */}
        <path
          d={`
            M ${30 * s} ${70 * s}
            L ${30 * s} ${120 * s}
            Q ${30 * s} ${130 * s}, ${60 * s} ${130 * s}
            Q ${90 * s} ${130 * s}, ${90 * s} ${120 * s}
            L ${90 * s} ${70 * s}
            Q ${90 * s} ${55 * s}, ${60 * s} ${55 * s}
            L ${30 * s} ${55 * s}
            Q ${20 * s} ${55 * s}, ${20 * s} ${70 * s}
            Z
          `}
          fill={`url(#clothGrad-${x}-${y})`}
          stroke={adjustColor(finalClothColor, -30)}
          strokeWidth={1}
        />

        {/* 领带 */}
        {hasTie && (
          <path
            d={`M ${57 * s} ${55 * s} L ${63 * s} ${55 * s} L ${60 * s} ${85 * s} Z`}
            fill="#D32F2F"
          />
        )}

        {/* 左臂 */}
        <g
          transform={`translate(${35 * s}, ${75 * s}) rotate(${-armWave * 0.3})`}
        >
          <rect
            x={-5 * s}
            y={0}
            width={10 * s}
            height={35 * s}
            rx={5}
            fill={adjustColor(finalClothColor, -20)}
          />
          <circle cx={0} cy={38 * s} r={7 * s} fill={skinColor} />
        </g>

        {/* 右臂 - 根据动作调整 */}
        <g
          transform={`translate(${85 * s}, ${75 * s}) rotate(${action === "wave" ? armWave : action === "point" ? -60 : armWave * 0.5})`}
        >
          <rect
            x={-5 * s}
            y={0}
            width={10 * s}
            height={35 * s}
            rx={5}
            fill={adjustColor(finalClothColor, -20)}
          />
          <circle cx={0} cy={38 * s} r={7 * s} fill={skinColor} />
          {/* 手指 - 指点动作 */}
          {action === "point" && (
            <rect
              x={-2 * s}
              y={40 * s}
              width={4 * s}
              height={12 * s}
              fill={skinColor}
            />
          )}
        </g>

        {/* 头部 */}
        <g transform={`translate(60, ${30 + bounce * 0.3})`}>
          {/* 脖子 */}
          <rect
            x={-5 * s}
            y={20 * s}
            width={10 * s}
            height={10 * s}
            fill={skinColor}
          />

          {/* 脸 */}
          <ellipse
            cx={0}
            cy={0}
            rx={28 * s}
            ry={25 * s}
            fill={`url(#skinGrad-${x}-${y})`}
          />

          {/* 耳朵 */}
          <ellipse cx={-28 * s} cy={0} rx={5 * s} ry={8 * s} fill={skinColor} />
          <ellipse cx={28 * s} cy={0} rx={5 * s} ry={8 * s} fill={skinColor} />

          {/* 头发 */}
          <ellipse cx={0} cy={-20 * s} rx={30 * s} ry={15 * s} fill="#3D2314" />

          {/* 帽子 */}
          {hasHat && (
            <g>
              <ellipse
                cx={0}
                cy={-25 * s}
                rx={35 * s}
                ry={8 * s}
                fill={adjustColor("#8B4513", 10)}
              />
              <rect
                x={-20 * s}
                y={-45 * s}
                width={40 * s}
                height={20 * s}
                fill="#8B4513"
                rx={3}
              />
              <rect
                x={-22 * s}
                y={-38 * s}
                width={44 * s}
                height={5 * s}
                fill="#D4AF37"
              />
            </g>
          )}

          {/* 胡须 */}
          {hasBeard && (
            <path
              d={`M ${-15 * s} ${15 * s} Q ${0 * s} ${25 * s}, ${15 * s} ${15 * s}`}
              fill={adjustColor("#3D2314", -10)}
              stroke={adjustColor("#3D2314", -30)}
              strokeWidth={1}
            />
          )}

          {/* 眼镜 */}
          {hasGlasses && (
            <g stroke="#1a1a1a" strokeWidth={2} fill="none">
              <circle cx={-10 * s} cy={0} r={8 * s} />
              <circle cx={10 * s} cy={0} r={8 * s} />
              <line x1={-2 * s} y1={0} x2={2 * s} y2={0} />
            </g>
          )}

          {/* 眼睛 */}
          <circle
            cx={-10 * s}
            cy={0}
            r={5 * s * (1 - eyeBlink * 0.8)}
            fill="white"
          />
          <circle
            cx={10 * s}
            cy={0}
            r={5 * s * (1 - eyeBlink * 0.8)}
            fill="white"
          />
          {eyeBlink < 0.5 && (
            <>
              <circle cx={-10 * s} cy={1 * s} r={2.5 * s} fill="#2C1810" />
              <circle cx={10 * s} cy={1 * s} r={2.5 * s} fill="#2C1810" />
              <circle
                cx={-11 * s}
                cy={0}
                r={1 * s}
                fill="white"
                opacity={0.8}
              />
              <circle cx={9 * s} cy={0} r={1 * s} fill="white" opacity={0.8} />
            </>
          )}

          {/* 眉毛 */}
          <path
            d={`M ${-18 * s} ${-8 * s} Q ${-10 * s} ${-12 * s}, ${-2 * s} ${-8 * s}`}
            stroke="#3D2314"
            strokeWidth={2}
            fill="none"
          />
          <path
            d={`M ${2 * s} ${-8 * s} Q ${10 * s} ${-12 * s}, ${18 * s} ${-8 * s}`}
            stroke="#3D2314"
            strokeWidth={2}
            fill="none"
          />

          {/* 鼻子 */}
          <ellipse
            cx={0}
            cy={8 * s}
            rx={3 * s}
            ry={4 * s}
            fill={adjustColor(skinColor, -15)}
          />

          {/* 嘴巴 */}
          <path
            d={`M ${-8 * s} ${15 * s} Q ${0 * s} ${18 + mouthOpen * s}, ${8 * s} ${15 * s}`}
            stroke={adjustColor("#C97878", -20)}
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
          />
          {action === "talk" && mouthOpen > 2 && (
            <ellipse
              cx={0}
              cy={17 * s}
              rx={6 * s}
              ry={3 * s + mouthOpen * 0.5}
              fill="#C97878"
            />
          )}

          {/* 思考气泡 */}
          {action === "think" && (
            <g transform={`translate(${35 * s}, ${-30 * s})`}>
              <circle cx={0} cy={0} r={5} fill="rgba(255,255,255,0.8)" />
              <circle cx={10} cy={-10} r={7} fill="rgba(255,255,255,0.8)" />
              <circle cx={22} cy={-22} r={10} fill="rgba(255,255,255,0.8)" />
              <text
                x={22}
                y={-18}
                fontSize={12}
                textAnchor="middle"
                fill="#1a1a1a"
              >
                ?
              </text>
            </g>
          )}
        </g>
      </g>
    </svg>
  );
};

/**
 * 调整颜色亮度的辅助函数
 */
function adjustColor(color: string, amount: number): string {
  const hex = color.replace("#", "");
  const num = parseInt(hex, 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amount));
  const b = Math.min(255, Math.max(0, (num & 0x0000ff) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}
