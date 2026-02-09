import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, random } from "remotion";

/**
 * StockExchangeScene - 伦敦股票交易所场景
 *
 * 展现内森·罗斯柴尔德在交易所制造恐慌的场景
 * 包含股价下跌、人群恐慌、价格图表等元素
 */
export const StockExchangeScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 股价从100跌到5
  const stockPrice = interpolate(frame, [0, 180], [100, 5], {
    extrapolateRight: "clamp",
  });

  // 价格颜色渐变：绿 -> 黄 -> 红
  const priceColor = interpolate(
    frame,
    [0, 90, 180],
    [0, 120, 0], // RGB插值
  );

  const getHexColor = (value: number) => {
    if (value < 60) return "#22c55e"; // 绿色
    if (value < 100) return "#fbbf24"; // 黄色
    return "#ef4444"; // 红色
  };

  const currentColor = getHexColor(priceColor);

  // 人群恐慌密度
  const crowdOpacity = interpolate(frame, [30, 120], [0, 0.8], {
    extrapolateRight: "clamp",
  });

  // 交易所背景
  const backgroundStyle = {
    background: `linear-gradient(180deg,
      #1a1a2e 0%,
      #16213e 50%,
      #0f3460 100%
    )`,
  };

  return (
    <AbsoluteFill style={backgroundStyle}>
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontSize: 42,
          fontWeight: 700,
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
        }}
      >
        London Stock Exchange
      </div>

      {/* 日期 */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontFamily: "Merriweather, serif",
          fontSize: 20,
          fontStyle: "italic",
        }}
      >
        June 20, 1815
      </div>

      {/* 价格显示 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 700,
            color: currentColor,
            fontFamily: "JetBrains Mono, monospace",
            textShadow: `0 0 30px ${currentColor}`,
          }}
        >
          {stockPrice.toFixed(0)}
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#e8e8e8",
            fontFamily: "Merriweather, serif",
            marginTop: 10,
          }}
        >
          Consols Price
        </div>
      </div>

      {/* 价格趋势箭头 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          right: "20%",
          fontSize: 80,
          color: currentColor,
          transform: `rotate(${interpolate(frame, [0, 180], [0, 180])}deg)`,
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        ⬇
      </div>

      {/* 价格曲线图 */}
      <svg
        style={{
          position: "absolute",
          bottom: "15%",
          left: "10%",
          width: "80%",
          height: 200,
        }}
        viewBox="0 0 800 200"
      >
        {/* 网格线 */}
        {[0, 50, 100, 150, 200].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="800"
            y2={y}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />
        ))}

        {/* 价格曲线 */}
        <path
          d={`M 0 ${interpolate(frame, [0, 180], [20, 180], {
            extrapolateRight: "clamp",
          })} Q 200 100, 400 ${interpolate(frame, [0, 180], [60, 140], {
            extrapolateRight: "clamp",
          })} T 800 ${interpolate(frame, [0, 180], [20, 180], {
            extrapolateRight: "clamp",
          })}`}
          stroke={currentColor}
          strokeWidth="4"
          fill="none"
          style={{
            filter: `drop-shadow(0 0 10px ${currentColor})`,
          }}
        />
      </svg>

      {/* 恐慌人群 */}
      {crowdOpacity > 0 && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "30%",
            background: `radial-gradient(circle at 50% 100%, rgba(139, 0, 0, ${crowdOpacity}) 0%, transparent 70%)`,
          }}
        />
      )}

      {/* 人群剪影 */}
      {Array.from({ length: 20 }).map((_, i) => {
        const seed = `person-${i}`;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: "5%",
              left: `${5 + i * 4.5}%`,
              width: 30,
              height: 60 + random(seed) * 20,
              background: "rgba(20, 20, 20, 0.9)",
              borderRadius: "50% 50% 0 0",
              opacity: crowdOpacity * (0.5 + random(seed + "opacity") * 0.5),
              transform: `translateX(${Math.sin(frame * 0.1 + i) * 5}px)`,
            }}
          />
        );
      })}

      {/* 内森剪影 */}
      {frame > 120 && (
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 80,
            height: 150,
            background: "rgba(0, 0, 0, 0.9)",
            clipPath:
              "polygon(30% 0%, 70% 0%, 85% 40%, 100% 100%, 0% 100%, 15% 40%)",
            opacity: interpolate(frame, [120, 150], [0, 1], {
              extrapolateRight: "clamp",
            }),
          }}
        />
      )}
    </AbsoluteFill>
  );
};
