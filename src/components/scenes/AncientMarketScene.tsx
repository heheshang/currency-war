import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  GoldCoinRain,
  SparkleEffect,
  FloatAnimation,
} from "../animations";

/**
 * AncientMarketScene - 古代集市场景（简化版）
 *
 * 去除卡通人物，用金币和物品动画替代
 * 展现古代金币在阳光下闪耀的场景
 * 建立"货币即财富"的基本概念
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

  // 标题淡入
  const titleOpacity = interpolate(frame, [15, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 金币雨效果
  const showCoinRain = frame > 30;

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
          opacity: titleOpacity,
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
          opacity: titleOpacity,
        }}
      >
        Where gold was king
      </div>

      {/* 主金币 */}
      <FloatAnimation distance={10}>
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${coinScale})`,
          }}
        >
          <div
            style={{
              width: 180,
              height: 180,
              background:
                "radial-gradient(circle at 30% 30%, #FFD700, #B8860B)",
              borderRadius: "50%",
              boxShadow: `
                0 0 50px rgba(255,  215, 0, 0.9),
                inset 0 -8px 15px rgba(0, 0, 0, 0.3),
                inset 0 8px 15px rgba(255, 255, 255, 0.4)
              `,
              transform: `rotate(${coinRotation}deg)`,
              border: "10px solid #B8860B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 120,
                height: 120,
                border: "4px solid #8B6914",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Cinzel, serif",
                fontSize: 48,
                color: "#8B6914",
                fontWeight: 700,
              }}
            >
              $
            </div>
          </div>
        </div>
      </FloatAnimation>

      {/* 闪光效果 */}
      <SparkleEffect
        startFrame={30}
        duration={60}
      />

      {/* 背景金币装饰 */}
      {[
        { x: 20, y: 60, size: 40, delay: 0 },
        { x: 75, y: 55, size: 35, delay: 15 },
        { x: 35, y: 75, size: 30, delay: 30 },
        { x: 65, y: 70, size: 25, delay: 45 },
      ].map((coin, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${coin.x}%`,
            top: `${coin.y}%`,
            opacity: interpolate(
              frame,
              [coin.delay + 20, coin.delay + 50],
              [0, 0.6],
              { extrapolateRight: "clamp" }
            ),
          }}
        >
          <div
            style={{
              width: coin.size,
              height: coin.size,
              background:
                "radial-gradient(circle at 30% 30%, #FFD700, #B8860B)",
              borderRadius: "50%",
              boxShadow: `0 0 10px rgba(255, 215, 0, 0.5)`,
              border: "2px solid #8B6914",
            }}
          />
        </div>
      ))}

      {/* 地面 */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30%",
          background: "linear-gradient(180deg, #D2B48C 0%, #8B7355 100%)",
        }}
      />

      {/* 市场摊位背景 */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "25%",
          height: "40%",
          background: "#8B4513",
          borderRadius: "8px 8px 0 0",
          opacity: 0.7,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "35%",
          width: "30%",
          height: "35%",
          background: "#654321",
          borderRadius: "8px 8px 0 0",
          opacity: 0.7,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "25%",
          height: "38%",
          background: "#8B4513",
          borderRadius: "8px 8px 0 0",
          opacity: 0.7,
        }}
      />

      {/* 金币雨效果 */}
      {showCoinRain && (
        <GoldCoinRain intensity="light" />
      )}

      {/* 底部文字 */}
      <div
        style={{
          position: "absolute",
          bottom: "3%",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "Cinzel, serif",
          fontSize: 18,
          color: "#4a3c2a",
          textAlign: "center",
          opacity: interpolate(frame, [40, 70], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        Gold coins - the universal language of trade
      </div>
    </AbsoluteFill>
  );
};
