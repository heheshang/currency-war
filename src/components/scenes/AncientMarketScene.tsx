import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Sequence } from "remotion";

/**
 * AncientMarketScene - 古代集市场景
 *
 * 展现古代金币在阳光下闪耀，人们用金币交易的场景
 * 建立"货币即财富"的基本概念
 */

/**
 * 骨骼系统接口
 */
interface SkeletonState {
  headRotation: number;
  headBobY: number;
  torsoRotation: number;
  torsoBobY: number;
  leftUpperArmRotation: number;
  leftForearmRotation: number;
  rightUpperArmRotation: number;
  rightForearmRotation: number;
  leftThighRotation: number;
  leftShinRotation: number;
  rightThighRotation: number;
  rightShinRotation: number;
  mouthOpen: number;
  eyeBlink: number;
}

/**
 * 计算骨骼动画状态 - 基于帧数和动作类型
 */
function calculateSkeletonState(
  frame: number,
  action: "walking" | "standing" | "trading" | "talking",
  bodyType: "slender" | "medium" | "heavy"
): SkeletonState {
  const speed = bodyType === "heavy" ? 0.8 : bodyType === "slender" ? 1.2 : 1;

  switch (action) {
    case "walking": {
      // 走路动作 - 协调的四肢摆动
      const walkCycle = (frame * 0.25 * speed) % (Math.PI * 2);
      const armSwing = Math.sin(walkCycle) * 30;
      const legSwing = Math.sin(walkCycle) * 25;
      const bodyBob = Math.abs(Math.sin(walkCycle * 2)) * 3;

      return {
        headRotation: Math.sin(walkCycle * 0.5) * 3,
        headBobY: bodyBob + Math.sin(frame * 0.1) * 1,
        torsoRotation: Math.sin(walkCycle * 0.5) * 2,
        torsoBobY: bodyBob * 0.5,
        leftUpperArmRotation: armSwing,
        leftForearmRotation: Math.sin(walkCycle - 0.3) * 20 + 30,
        rightUpperArmRotation: -armSwing,
        rightForearmRotation: Math.sin(walkCycle + Math.PI - 0.3) * 20 + 30,
        leftThighRotation: -legSwing,
        leftShinRotation: Math.abs(Math.sin(walkCycle)) * 15,
        rightThighRotation: legSwing,
        rightShinRotation: Math.abs(Math.sin(walkCycle + Math.PI)) * 15,
        mouthOpen: 0,
        eyeBlink: Math.sin(frame * 0.02) > 0.95 ? 0.8 : 0,
      };
    }

    case "trading": {
      // 交易动作 - 手臂向前伸展
      const tradeCycle = (frame * 0.15) % (Math.PI * 2);
      const armExtension = 45 + Math.sin(tradeCycle) * 8;
      const bodyBob = Math.sin(frame * 0.08) * 1.5;

      return {
        headRotation: Math.sin(tradeCycle * 0.5) * 5,
        headBobY: bodyBob,
        torsoRotation: Math.sin(tradeCycle * 0.3) * 3,
        torsoBobY: bodyBob * 0.3,
        leftUpperArmRotation: -armExtension,
        leftForearmRotation: 60 + Math.sin(tradeCycle) * 10,
        rightUpperArmRotation: armExtension,
        rightForearmRotation: -60 - Math.sin(tradeCycle) * 10,
        leftThighRotation: Math.sin(frame * 0.05) * 3,
        leftShinRotation: 0,
        rightThighRotation: -Math.sin(frame * 0.05) * 3,
        rightShinRotation: 0,
        mouthOpen: Math.sin(frame * 0.2) > 0.7 ? 3 : 0,
        eyeBlink: Math.sin(frame * 0.025) > 0.92 ? 0.9 : 0,
      };
    }

    case "talking": {
      // 说话动作 - 头部和手部轻微移动
      const talkCycle = (frame * 0.3) % (Math.PI * 2);
      const headTilt = Math.sin(talkCycle) * 4;
      const bodyBob = Math.sin(frame * 0.08) * 1.5;
      const handGestures = Math.sin(talkCycle * 0.5) * 15;

      return {
        headRotation: headTilt,
        headBobY: bodyBob + headTilt * 0.3,
        torsoRotation: headTilt * 0.3,
        torsoBobY: bodyBob * 0.3,
        leftUpperArmRotation: -20 + handGestures,
        leftForearmRotation: 40 + Math.sin(talkCycle * 0.7) * 10,
        rightUpperArmRotation: 20 - handGestures,
        rightForearmRotation: -40 + Math.sin(talkCycle * 0.7 + 1) * 10,
        leftThighRotation: Math.sin(frame * 0.05) * 2,
        leftShinRotation: 0,
        rightThighRotation: -Math.sin(frame * 0.05) * 2,
        rightShinRotation: 0,
        mouthOpen: 2 + Math.sin(talkCycle) * 3,
        eyeBlink: Math.sin(frame * 0.02) > 0.93 ? 0.85 : 0,
      };
    }

    default: {
      // 站立 - 轻微呼吸动作
      const breatheCycle = (frame * 0.05) % (Math.PI * 2);
      const breatheAmount = Math.sin(breatheCycle) * 2;

      return {
        headRotation: Math.sin(breatheCycle * 0.5) * 1,
        headBobY: breatheAmount * 0.5,
        torsoRotation: 0,
        torsoBobY: breatheAmount,
        leftUpperArmRotation: -10 + Math.sin(breatheCycle * 0.7) * 2,
        leftForearmRotation: 30,
        rightUpperArmRotation: 10 - Math.sin(breatheCycle * 0.7) * 2,
        rightForearmRotation: -30,
        leftThighRotation: 0,
        leftShinRotation: 0,
        rightThighRotation: 0,
        rightShinRotation: 0,
        mouthOpen: Math.sin(breatheCycle * 0.3) > 0.8 ? 1 : 0,
        eyeBlink: Math.sin(frame * 0.015) > 0.96 ? 0.9 : 0,
      };
    }
  }
}

/**
 * AnimatedCharacter - 动画人物组件
 * 支持走路、站立、交易等动作
 * 采用高度写实的风格，多层渐变和阴影
 * 使用骨骼动画系统实现更自然的动作
 */
interface AnimatedCharacterProps {
  x: number;
  y: number;
  scale: number;
  skinColor: string;
  skinColorDark?: string; // 用于阴影区域的深色皮肤
  clothColor: string;
  clothColorDark?: string; // 衣服阴影色
  frame: number;
  action?: "walking" | "standing" | "trading" | "talking";
  hasBeard?: boolean;
  hasHat?: boolean;
  hairColor?: string;
  bodyType?: "slender" | "medium" | "heavy";
}

const AnimatedCharacter: React.FC<AnimatedCharacterProps> = ({
  x,
  y,
  scale,
  skinColor,
  skinColorDark,
  clothColor,
  clothColorDark,
  frame,
  action = "standing",
  hasBeard = false,
  hasHat = false,
  hairColor = "#3D2314",
  bodyType = "medium",
}) => {
  // 使用骨骼动画系统计算所有关节状态
  const skeleton = calculateSkeletonState(frame, action, bodyType);

  // 身体类型调整
  const bodyWidth = bodyType === "slender" ? 0.85 : bodyType === "heavy" ? 1.15 : 1;
  const bodyHeight = bodyType === "slender" ? 1.05 : bodyType === "heavy" ? 0.95 : 1;

  const s = scale;
  const bw = bodyWidth;
  const bh = bodyHeight;

  // 动态皮肤阴影色
  const skinShadow = skinColorDark || adjustBrightness(skinColor, -20);

  // 动态衣服阴影色
  const clothShadow = clothColorDark || adjustBrightness(clothColor, -30);

  return (
    <svg
      width={140 * s}
      height={200 * s}
      viewBox="0 0 140 200"
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        overflow: "visible",
        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.3))",
      }}
    >
      <defs>
        {/* 皮肤渐变 - 营造立体感 */}
        <radialGradient id={`skinGradient-${x}-${y}`}>
          <stop offset="0%" stopColor={skinColor} />
          <stop offset="70%" stopColor={skinColor} />
          <stop offset="100%" stopColor={skinShadow} />
        </radialGradient>

        {/* 衣服渐变 */}
        <linearGradient id={`clothGradient-${x}-${y}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={clothShadow} />
          <stop offset="30%" stopColor={clothColor} />
          <stop offset="70%" stopColor={clothColor} />
          <stop offset="100%" stopColor={clothShadow} />
        </linearGradient>

        {/* 头发渐变 */}
        <linearGradient id={`hairGradient-${x}-${y}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={adjustBrightness(hairColor, 20)} />
          <stop offset="100%" stopColor={hairColor} />
        </linearGradient>

        {/* 眼睛高光 */}
        <radialGradient id={`eyeHighlight-${x}-${y}`}>
          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      {/* 地面阴影 - 更真实的投影 */}
      <ellipse
        cx={70}
        cy={185}
        rx={45 * s * bw}
        ry={12 * s}
        fill="rgba(0,0,0,0.25)"
        filter="blur(2px)"
      />

      {/* 腿部 - 使用骨骼动画系统 */}
      <g transform={`translate(0, ${skeleton.torsoBobY * 0.3})`}>
        {/* 左腿 */}
        <g transform={`rotate(${skeleton.leftThighRotation}, ${52 * s * bw}, ${95 * s * bh})`}>
          {/* 大腿 */}
          <path
            d={`
              M ${52 * s * bw} ${95 * s * bh}
              Q ${48 * s * bw} ${115 * s * bh}, ${50 * s * bw} ${140 * s}
              L ${58 * s * bw} ${140 * s}
              Q ${60 * s * bw} ${115 * s * bh}, ${56 * s * bw} ${95 * s * bh}
            `}
            fill={`url(#clothGradient-${x}-${y})`}
            stroke={clothShadow}
            strokeWidth={0.5}
          />
          {/* 小腿 - 带膝盖弯曲 */}
          <g transform={`translate(${50 * s * bw}, ${140 * s}) rotate(${skeleton.leftShinRotation}, ${5 * s * bw}, 0) translate(${-50 * s * bw}, ${-140 * s})`}>
            <path
              d={`
                M ${50 * s * bw} ${140 * s}
                Q ${48 * s * bw} ${160 * s}, ${50 * s * bw} ${180 * s}
                L ${60 * s * bw} ${180 * s}
                Q ${58 * s * bw} ${160 * s}, ${58 * s * bw} ${140 * s}
              `}
              fill={clothShadow}
              stroke="rgba(0,0,0,0.15)"
              strokeWidth={0.5}
            />
          </g>
        </g>

        {/* 右腿 */}
        <g transform={`rotate(${skeleton.rightThighRotation}, ${88 * s * bw}, ${95 * s * bh})`}>
          {/* 大腿 */}
          <path
            d={`
              M ${88 * s * bw} ${95 * s * bh}
              Q ${92 * s * bw} ${115 * s * bh}, ${90 * s * bw} ${140 * s}
              L ${82 * s * bw} ${140 * s}
              Q ${80 * s * bw} ${115 * s * bh}, ${84 * s * bw} ${95 * s * bh}
            `}
            fill={`url(#clothGradient-${x}-${y})`}
            stroke={clothShadow}
            strokeWidth={0.5}
          />
          {/* 小腿 - 带膝盖弯曲 */}
          <g transform={`translate(${90 * s * bw}, ${140 * s}) rotate(${skeleton.rightShinRotation}, ${-5 * s * bw}, 0) translate(${-90 * s * bw}, ${-140 * s})`}>
            <path
              d={`
                M ${90 * s * bw} ${140 * s}
                Q ${92 * s * bw} ${160 * s}, ${90 * s * bw} ${180 * s}
                L ${80 * s * bw} ${180 * s}
                Q ${82 * s * bw} ${160 * s}, ${82 * s * bw} ${140 * s}
              `}
              fill={clothShadow}
              stroke="rgba(0,0,0,0.15)"
              strokeWidth={0.5}
            />
          </g>
        </g>
      </g>

      {/* 身体主体 - 使用骨骼动画系统 */}
      <g transform={`translate(70, ${skeleton.torsoBobY + 75 * s * bh}) rotate(${skeleton.torsoRotation}, 0, 0) translate(-70, ${-skeleton.torsoBobY - 75 * s * bh})`}>
        {/* 躯干主体 */}
        <path
          d={`
            M ${45 * s * bw} ${50 * s * bh}
            L ${40 * s * bw} ${100 * s * bh}
            Q ${35 * s * bw} ${115 * s * bh}, ${50 * s * bw} ${115 * s * bh}
            L ${90 * s * bw} ${115 * s * bh}
            Q ${105 * s * bw} ${115 * s * bh}, ${100 * s * bw} ${100 * s * bh}
            L ${95 * s * bw} ${50 * s * bh}
            Q ${95 * s * bw} ${35 * s * bh}, ${70 * s * bw} ${35 * s * bh}
            L ${45 * s * bw} ${35 * s * bh}
            Q ${30 * s * bw} ${35 * s * bh}, ${30 * s * bw} ${50 * s * bh}
            Z
          `}
          fill={`url(#clothGradient-${x}-${y})`}
          stroke={clothShadow}
          strokeWidth={1}
        />

        {/* 衣服褶皱细节 */}
        <path
          d={`M ${50 * s * bw} ${70 * s * bh} Q ${70 * s * bw} ${75 * s * bh}, ${90 * s * bw} ${70 * s * bh}`}
          stroke={clothShadow}
          strokeWidth={2}
          fill="none"
          opacity={0.4}
        />
        <path
          d={`M ${45 * s * bw} ${85 * s * bh} Q ${70 * s * bw} ${90 * s * bh}, ${95 * s * bw} ${85 * s * bh}`}
          stroke={clothShadow}
          strokeWidth={2}
          fill="none"
          opacity={0.3}
        />

        {/* 高领/衣领 */}
        <path
          d={`
            M ${50 * s * bw} ${38 * s * bh}
            L ${90 * s * bw} ${38 * s * bh}
            L ${70 * s * bw} ${50 * s * bh}
            Z
          `}
          fill="rgba(255,255,255,0.2)"
          stroke={clothShadow}
          strokeWidth={0.5}
        />

        {/* 皮带 */}
        <rect
          x={40 * s * bw}
          y={82 * s * bh}
          width={60 * s * bw}
          height={10 * s}
          fill={adjustBrightness(clothColor, -40)}
          rx={2}
        />
        {/* 皮带扣 */}
        <rect
          x={65 * s * bw}
          y={82 * s * bh}
          width={10 * s}
          height={10 * s}
          fill="#D4AF37"
          stroke="#B8860B"
          strokeWidth={1}
          rx={1}
        />
      </g>

      {/* 左臂 - 使用骨骼动画系统 */}
      <g transform={`translate(0, ${skeleton.torsoBobY})`}>
        <g transform={`rotate(${skeleton.leftUpperArmRotation}, ${42 * s * bw}, ${52 * s * bh})`}>
          {/* 上臂 */}
          <path
            d={`
              M ${42 * s * bw} ${52 * s * bh}
              Q ${28 * s * bw} ${70 * s * bh}, ${25 * s * bw} ${85 * s * bh}
              L ${32 * s * bw} ${87 * s * bh}
              Q ${35 * s * bw} ${72 * s * bh}, ${48 * s * bw} ${52 * s * bh}
            `}
            fill={`url(#clothGradient-${x}-${y})`}
            stroke={clothShadow}
            strokeWidth={0.5}
          />
          {/* 前臂 - 带肘部弯曲 */}
          <g transform={`translate(${25 * s * bw}, ${85 * s * bh}) rotate(${skeleton.leftForearmRotation}, ${5 * s * bw}, 0) translate(${-25 * s * bw}, ${-85 * s * bh})`}>
            <path
              d={`
                M ${25 * s * bw} ${85 * s * bh}
                Q ${22 * s * bw} ${100 * s}, ${25 * s * bw} ${115 * s}
                L ${32 * s * bw} ${113 * s}
                Q ${30 * s * bw} ${98 * s}, ${32 * s * bw} ${87 * s}
              `}
              fill={clothShadow}
              stroke="rgba(0,0,0,0.15)"
              strokeWidth={0.5}
            />
            {/* 手 - 更细致 */}
            <ellipse
              cx={28 * s * bw}
              cy={120 * s}
              rx={10 * s}
              ry={12 * s}
              fill={`url(#skinGradient-${x}-${y})`}
              stroke={skinShadow}
              strokeWidth={0.5}
            />
            {/* 拇指 */}
            <ellipse
              cx={18 * s * bw}
              cy={112 * s}
              rx={4 * s}
              ry={6 * s}
              fill={`url(#skinGradient-${x}-${y})`}
              transform={`rotate(-30, ${18 * s * bw}, ${112 * s})`}
              stroke={skinShadow}
              strokeWidth={0.5}
            />
          </g>
        </g>
      </g>

      {/* 右臂 - 使用骨骼动画系统 */}
      <g transform={`translate(0, ${skeleton.torsoBobY})`}>
        <g transform={`rotate(${skeleton.rightUpperArmRotation}, ${98 * s * bw}, ${52 * s * bh})`}>
          {/* 上臂 */}
          <path
            d={`
              M ${98 * s * bw} ${52 * s * bh}
              Q ${112 * s * bw} ${70 * s * bh}, ${115 * s * bw} ${85 * s * bh}
              L ${108 * s * bw} ${87 * s * bh}
              Q ${105 * s * bw} ${72 * s * bh}, ${92 * s * bw} ${52 * s * bh}
            `}
            fill={`url(#clothGradient-${x}-${y})`}
            stroke={clothShadow}
            strokeWidth={0.5}
          />
          {/* 前臂 - 带肘部弯曲 */}
          <g transform={`translate(${115 * s * bw}, ${85 * s * bh}) rotate(${skeleton.rightForearmRotation}, ${-5 * s * bw}, 0) translate(${-115 * s * bw}, ${-85 * s * bh})`}>
            <path
              d={`
                M ${115 * s * bw} ${85 * s * bh}
                Q ${118 * s * bw} ${100 * s}, ${115 * s * bw} ${115 * s}
                L ${108 * s * bw} ${113 * s}
                Q ${110 * s * bw} ${98 * s}, ${108 * s * bw} ${87 * s}
              `}
              fill={clothShadow}
              stroke="rgba(0,0,0,0.15)"
              strokeWidth={0.5}
            />
            {/* 手 */}
            <ellipse
              cx={112 * s * bw}
              cy={120 * s}
              rx={10 * s}
              ry={12 * s}
              fill={`url(#skinGradient-${x}-${y})`}
              stroke={skinShadow}
              strokeWidth={0.5}
            />
            {/* 拇指 */}
            <ellipse
              cx={122 * s * bw}
              cy={112 * s}
              rx={4 * s}
              ry={6 * s}
              fill={`url(#skinGradient-${x}-${y})`}
              transform={`rotate(30, ${122 * s * bw}, ${112 * s})`}
              stroke={skinShadow}
              strokeWidth={0.5}
            />
          </g>
        </g>
      </g>

      {/* 头部 - 使用骨骼动画系统 */}
      <g transform={`translate(70, ${skeleton.headBobY + 25 * s}) rotate(${skeleton.headRotation}, 0, 0) translate(-70, ${-skeleton.headBobY - 25 * s})`}>
        {/* 脖子 - 更真实的形状 */}
        <path
          d={`
            M ${62 * s} ${35 * s * bh}
            L ${62 * s} ${45 * s * bh}
            L ${78 * s} ${45 * s * bh}
            L ${78 * s} ${35 * s * bh}
            Q ${70 * s} ${32 * s}, ${62 * s} ${35 * s}
          `}
          fill={`url(#skinGradient-${x}-${y})`}
          stroke={skinShadow}
          strokeWidth={0.5}
        />

        {/* 耳朵 - 左 */}
        <ellipse
          cx={38 * s}
          cy={25 * s}
          rx={6 * s}
          ry={10 * s}
          fill={`url(#skinGradient-${x}-${y})`}
          stroke={skinShadow}
          strokeWidth={0.5}
        />
        <ellipse
          cx={38 * s}
          cy={25 * s}
          rx={3 * s}
          ry={5 * s}
          fill={adjustBrightness(skinColor, -30)}
        />

        {/* 耳朵 - 右 */}
        <ellipse
          cx={102 * s}
          cy={25 * s}
          rx={6 * s}
          ry={10 * s}
          fill={`url(#skinGradient-${x}-${y})`}
          stroke={skinShadow}
          strokeWidth={0.5}
        />
        <ellipse
          cx={102 * s}
          cy={25 * s}
          rx={3 * s}
          ry={5 * s}
          fill={adjustBrightness(skinColor, -30)}
        />

        {/* 头型 - 更自然的脸型 */}
        <path
          d={`
            M ${45 * s} ${25 * s}
            Q ${40 * s} ${15 * s}, ${50 * s} ${5 * s}
            L ${90 * s} ${5 * s}
            Q ${100 * s} ${15 * s}, ${95 * s} ${25 * s}
            Q ${95 * s} ${40 * s}, ${85 * s} ${48 * s}
            L ${55 * s} ${48 * s}
            Q ${45 * s} ${40 * s}, ${45 * s} ${25 * s}
          `}
          fill={`url(#skinGradient-${x}-${y})`}
          stroke={skinShadow}
          strokeWidth={0.5}
        />

        {/* 头发 - 更丰富的层次 */}
        <path
          d={`
            M ${42 * s} ${20 * s}
            Q ${35 * s} ${10 * s}, ${45 * s} ${0 * s}
            L ${95 * s} ${0 * s}
            Q ${105 * s} ${10 * s}, ${98 * s} ${20 * s}
            Q ${95 * s} ${5 * s}, ${85 * s} ${-3 * s}
            Q ${70 * s} ${-5 * s}, ${55 * s} ${-3 * s}
            Q ${45 * s} ${5 * s}, ${42 * s} ${20 * s}
          `}
          fill={`url(#hairGradient-${x}-${y})`}
          stroke={adjustBrightness(hairColor, -30)}
          strokeWidth={0.5}
        />
        {/* 头发细节 */}
        <path
          d={`
            M ${48 * s} ${8 * s}
            Q ${55 * s} ${5 * s}, ${62 * s} ${8 * s}
            Q ${70 * s} ${5 * s}, ${78 * s} ${8 * s}
            Q ${85 * s} ${5 * s}, ${92 * s} ${8 * s}
          `}
          stroke={adjustBrightness(hairColor, -20)}
          strokeWidth={2}
          fill="none"
          opacity={0.6}
        />

        {/* 帽子 - 如果有 */}
        {hasHat && (
          <g>
            {/* 帽檐 */}
            <ellipse
              cx={70 * s}
              cy={-2 * s}
              rx={40 * s}
              ry={10 * s}
              fill={adjustBrightness("#8B4513", 10)}
              stroke={adjustBrightness("#8B4513", -30)}
              strokeWidth={1}
            />
            {/* 帽顶 */}
            <path
              d={`
                M ${50 * s} ${-2 * s}
                L ${55 * s} ${-25 * s}
                L ${85 * s} ${-25 * s}
                L ${90 * s} ${-2 * s}
                Q ${70 * s} ${0 * s}, ${50 * s} ${-2 * s}
              `}
              fill="#8B4513"
              stroke={adjustBrightness("#8B4513", -30)}
              strokeWidth={1}
            />
            {/* 帽带 */}
            <rect
              x={50 * s}
              y={-5 * s}
              width={40 * s}
              height={5 * s}
              fill="#D4AF37"
            />
          </g>
        )}

        {/* 胡须 - 更真实 */}
        {hasBeard && (
          <g>
            <path
              d={`
                M ${50 * s} ${42 * s}
                Q ${55 * s} ${50 * s}, ${70 * s} ${52 * s}
                Q ${85 * s} ${50 * s}, ${90 * s} ${42 * s}
              `}
              fill={adjustBrightness(hairColor, -10)}
              stroke={adjustBrightness(hairColor, -30)}
              strokeWidth={0.5}
            />
            <path
              d={`
                M ${50 * s} ${42 * s}
                Q ${52 * s} ${38 * s}, ${55 * s} ${42 * s}
              `}
              stroke={adjustBrightness(hairColor, -20)}
              strokeWidth={2}
              fill="none"
            />
            <path
              d={`
                M ${85 * s} ${42 * s}
                Q ${88 * s} ${38 * s}, ${90 * s} ${42 * s}
              `}
              stroke={adjustBrightness(hairColor, -20)}
              strokeWidth={2}
              fill="none"
            />
          </g>
        )}

        {/* 眉毛 - 更自然 */}
        <path
          d={`M ${48 * s} ${18 * s} Q ${55 * s} ${15 * s}, ${62 * s} ${18 * s}`}
          stroke={adjustBrightness(hairColor, -10)}
          strokeWidth={2.5 * s}
          fill="none"
          strokeLinecap="round"
        />
        <path
          d={`M ${78 * s} ${18 * s} Q ${85 * s} ${15 * s}, ${92 * s} ${18 * s}`}
          stroke={adjustBrightness(hairColor, -10)}
          strokeWidth={2.5 * s}
          fill="none"
          strokeLinecap="round"
        />

        {/* 眼睛 - 使用骨骼动画系统的眨眼效果 */}
        <g>
          {/* 左眼 */}
          <ellipse
            cx={55 * s}
            cy={25 * s}
            rx={7 * s}
            ry={8 * s * (1 - skeleton.eyeBlink * 0.7)}
            fill="white"
            stroke={skinShadow}
            strokeWidth={0.5}
          />
          {skeleton.eyeBlink < 0.5 && (
            <>
              <circle
                cx={55 * s}
                cy={26 * s}
                r={4 * s}
                fill="#2C1810"
              />
              <circle
                cx={53.5 * s}
                cy={24.5 * s}
                r={1.5 * s}
                fill="white"
              />
              <circle
                cx={57 * s}
                cy={27.5 * s}
                r={0.8 * s}
                fill="white"
                opacity={0.7}
              />
            </>
          )}

          {/* 右眼 */}
          <ellipse
            cx={85 * s}
            cy={25 * s}
            rx={7 * s}
            ry={8 * s * (1 - skeleton.eyeBlink * 0.7)}
            fill="white"
            stroke={skinShadow}
            strokeWidth={0.5}
          />
          {skeleton.eyeBlink < 0.5 && (
            <>
              <circle
                cx={85 * s}
                cy={26 * s}
                r={4 * s}
                fill="#2C1810"
              />
              <circle
                cx={83.5 * s}
                cy={24.5 * s}
                r={1.5 * s}
                fill="white"
              />
              <circle
                cx={87 * s}
                cy={27.5 * s}
                r={0.8 * s}
                fill="white"
                opacity={0.7}
              />
            </>
          )}
        </g>

        {/* 鼻子 */}
        <path
          d={`
            M ${70 * s} ${28 * s}
            L ${68 * s} ${35 * s}
            L ${72 * s} ${35 * s}
            L ${70 * s} ${28 * s}
          `}
          fill={adjustBrightness(skinColor, -15)}
          stroke={skinShadow}
          strokeWidth={0.5}
        />
        {/* 鼻孔 */}
        <ellipse
          cx={67 * s}
          cy={35 * s}
          rx={1.5 * s}
          ry={2 * s}
          fill={adjustBrightness(skinColor, -25)}
        />
        <ellipse
          cx={73 * s}
          cy={35 * s}
          rx={1.5 * s}
          ry={2 * s}
          fill={adjustBrightness(skinColor, -25)}
        />

        {/* 嘴巴 - 使用骨骼动画系统 */}
        <path
          d={`
            M ${60 * s} ${40 * s}
            Q ${70 * s} ${42 * s + skeleton.mouthOpen}, ${80 * s} ${40 * s}
          `}
          stroke={adjustBrightness(skinColor, -30)}
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
        />
        {/* 嘴唇内部 - 说话时显示 */}
        {skeleton.mouthOpen > 1 && (
          <ellipse
            cx={70 * s}
            cy={42 * s}
            rx={8 * s}
            ry={4 * s + skeleton.mouthOpen * 0.5}
            fill={adjustBrightness("#C97878", -10)}
            stroke={adjustBrightness("#C97878", -20)}
            strokeWidth={0.5}
          />
        )}

        {/* 脸颊红润 - 更自然 */}
        <ellipse
          cx={45 * s}
          cy={33 * s}
          rx={6 * s}
          ry={4 * s}
          fill="rgba(255,150,150,0.2)"
        />
        <ellipse
          cx={95 * s}
          cy={33 * s}
          rx={6 * s}
          ry={4 * s}
          fill="rgba(255,150,150,0.2)"
        />

        {/* 额头高光 */}
        <ellipse
          cx={70 * s}
          cy={12 * s}
          rx={15 * s}
          ry={8 * s}
          fill="rgba(255,255,255,0.1)"
        />
      </g>
    </svg>
  );
};

/**
 * 辅助函数：调整颜色亮度
 */
function adjustBrightness(color: string, amount: number): string {
  const hex = color.replace('#', '');
  const num = parseInt(hex, 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
  const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

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
        skinColorDark="#E8D4B8"
        clothColor="#8B4513"
        clothColorDark="#6B3410"
        frame={frame}
        action={frame < 60 ? "walking" : "trading"}
        hasBeard={true}
        hairColor="#4A3728"
        bodyType="medium"
      />

      {/* 卖方 - 拿着商品 */}
      <AnimatedCharacter
        x={sellerX}
        y={50}
        scale={1.2}
        skinColor="#F5DEB3"
        skinColorDark="#E8D4B8"
        clothColor="#2F4F4F"
        clothColorDark="#1A3333"
        frame={frame}
        action={frame < 60 ? "walking" : "trading"}
        hasHat={true}
        hairColor="#3D2817"
        bodyType="slender"
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
  skinColorDark?: string;
  clothColor: string;
  clothColorDark?: string;
  hairColor?: string;
  hasBeard?: boolean;
  hasHat?: boolean;
  bodyType?: "slender" | "medium" | "heavy";
}> = ({
  startX,
  endX,
  delay,
  skinColor,
  skinColorDark,
  clothColor,
  clothColorDark,
  hairColor,
  hasBeard = false,
  hasHat = false,
  bodyType = "medium"
}) => {
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
        skinColorDark={skinColorDark}
        clothColor={clothColor}
        clothColorDark={clothColorDark}
        frame={delayedFrame}
        action="walking"
        hasBeard={hasBeard}
        hasHat={hasHat}
        hairColor={hairColor}
        bodyType={bodyType}
      />

      {/* 商人携带的包裹 - 更真实的细节 */}
      <div
        style={{
          position: "absolute",
          left: `${x}%`,
          top: `${y + 8}%`,
          transform: "translateX(-50%)",
          width: 28,
          height: 22,
          background: "linear-gradient(135deg, #D2691E 0%, #8B4513 100%)",
          borderRadius: "5px",
          border: "2px solid #5D3A1A",
          boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)",
        }}
      />
    </div>
  );
};

/**
 * TalkingPair - 交谈的人群
 */
const TalkingPair: React.FC<{
  x: number;
  delay: number;
  character1Config?: {
    skinColor?: string;
    skinColorDark?: string;
    clothColor?: string;
    clothColorDark?: string;
    hairColor?: string;
    bodyType?: "slender" | "medium" | "heavy";
  };
  character2Config?: {
    skinColor?: string;
    skinColorDark?: string;
    clothColor?: string;
    clothColorDark?: string;
    hairColor?: string;
    bodyType?: "slender" | "medium" | "heavy";
  };
}> = ({
  x,
  delay,
  character1Config = {},
  character2Config = {}
}) => {
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
        skinColor={character1Config.skinColor || "#F5DEB3"}
        skinColorDark={character1Config.skinColorDark || "#E8D4B8"}
        clothColor={character1Config.clothColor || "#4A6741"}
        clothColorDark={character1Config.clothColorDark || "#3A5231"}
        frame={delayedFrame}
        action="talking"
        hairColor={character1Config.hairColor || "#3D2314"}
        bodyType={character1Config.bodyType || "medium"}
      />

      {/* 人物2 */}
      <AnimatedCharacter
        x={x + 3}
        y={68}
        scale={0.85}
        skinColor={character2Config.skinColor || "#F5DEB3"}
        skinColorDark={character2Config.skinColorDark || "#E8D4B8"}
        clothColor={character2Config.clothColor || "#6B4423"}
        clothColorDark={character2Config.clothColorDark || "#4A2F17"}
        frame={delayedFrame + 5} // 稍微错开的说话节奏
        action="talking"
        hairColor={character2Config.hairColor || "#2C1810"}
        bodyType={character2Config.bodyType || "medium"}
      />

      {/* 对话气泡 - 更真实的样式 */}
      {delayedFrame % 120 < 60 && (
        <div
          style={{
            position: "absolute",
            left: `${x}%`,
            top: "55%",
            transform: "translateX(-50%)",
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 245, 0.95) 100%)",
            padding: "10px 18px",
            borderRadius: "18px",
            fontSize: 15,
            fontWeight: 500,
            color: "#2c2c2c",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
            whiteSpace: "nowrap",
            border: "1px solid rgba(0, 0, 0, 0.1)",
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
        skinColorDark="#E8D4B8"
        clothColor="#8B4513"
        clothColorDark="#6B3410"
        hairColor="#4A3728"
        hasHat={true}
        bodyType="heavy"
      />
      <WalkingMerchant
        startX={110}
        endX={0}
        delay={150}
        skinColor="#F5DEB3"
        skinColorDark="#E8D4B8"
        clothColor="#2F4F4F"
        clothColorDark="#1A3333"
        hairColor="#3D2817"
        hasBeard={true}
        bodyType="slender"
      />
      <WalkingMerchant
        startX={-10}
        endX={100}
        delay={200}
        skinColor="#F5DEB3"
        skinColorDark="#E8D4B8"
        clothColor="#6B4423"
        clothColorDark="#4A2F17"
        hairColor="#2C1810"
        bodyType="medium"
      />

      {/* 交谈的人群 */}
      <TalkingPair
        x={25}
        delay={0}
        character1Config={{
          skinColor: "#F5DEB3",
          skinColorDark: "#E8D4B8",
          clothColor: "#4A6741",
          clothColorDark: "#3A5231",
          hairColor: "#3D2314",
          bodyType: "medium"
        }}
        character2Config={{
          skinColor: "#F5DEB3",
          skinColorDark: "#E8D4B8",
          clothColor: "#6B4423",
          clothColorDark: "#4A2F17",
          hairColor: "#2C1810",
          bodyType: "slender"
        }}
      />
      <TalkingPair
        x={75}
        delay={60}
        character1Config={{
          skinColor: "#F5DEB3",
          skinColorDark: "#E8D4B8",
          clothColor: "#5D4E37",
          clothColorDark: "#423729",
          hairColor: "#4A3728",
          bodyType: "heavy"
        }}
        character2Config={{
          skinColor: "#F5DEB3",
          skinColorDark: "#E8D4B8",
          clothColor: "#3D5A4A",
          clothColorDark: "#2A3F34",
          hairColor: "#3D2817",
          bodyType: "medium"
        }}
      />

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
