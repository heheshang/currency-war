import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * WarProfiteeringScene - 场景4：大发战争财的银行家们
 *
 * 分屏对比：士兵阵亡 vs 银行家数金币
 * 战争期间利润增长图表
 * 金币雨特效
 */
export const WarProfiteeringScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 士兵剪影淡入
  const soldiersOpacity = interpolate(frame, [60, 180], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 银行家淡入
  const bankerOpacity = interpolate(frame, [120, 240], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 金币堆增长
  const goldStack = interpolate(frame, [180, 720], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 利润图表上升
  const profitRise = interpolate(frame, [300, 600], [0, 100], {
    extrapolateRight: "clamp",
  });

  // 金币雨
  const coins = Array.from({ length: 15 }).map((_, i) => {
    const startFrame = 360 + i * 30;
    const yProgress = interpolate(
      frame,
      [startFrame, startFrame + 180],
      [0, 1],
      { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
    );

    if (yProgress <= 0 || yProgress >= 1) return null;

    const x = 55 + (i % 5) * 8 + Math.sin(frame * 0.05 + i) * 3;
    const y = 40 + yProgress * 50;
    const rotation = (frame - startFrame) * 5;

    return (
      <div
        key={i}
        style={{
          position: "absolute",
          left: `${x}%`,
          top: `${y}%`,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            background: "radial-gradient(circle at 30% 30%, #ffd700, #fbbf24)",
            borderRadius: "50%",
            border: "2px solid #d4af37",
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        />
      </div>
    );
  });

  // 标题
  const titleOpacity = interpolate(frame, [60, 150], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at center, #1a0508 0%, #0d1117 100%)",
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
            fontSize: 36,
            color: "#ffd700",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          War Profiteers
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Bankers Harvest Unprecedented Profits
        </div>
      </div>

      {/* 左侧 - 战场士兵 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "5%",
          opacity: soldiersOpacity,
        }}
      >
        {/* 士兵剪影 */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${i * 18}%`,
              bottom: `${20 + (i % 2) * 15}%`,
              width: "35px",
              height: "70px",
              background: "rgba(0, 0, 0, 0.4)",
              borderRadius: "8px 8px 0 0",
            }}
          />
        ))}

        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 48,
              color: "rgba(139, 0, 0, 0.3)",
              fontWeight: 700,
            }}
          >
            116,516
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#9ca3af",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            American Soldiers Died
          </div>
        </div>
      </div>

      {/* 右侧 - 银行家数金币 */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          right: "8%",
          opacity: bankerOpacity,
        }}
      >
        {/* 抽象银行家剪影 */}
        <div
          style={{
            position: "absolute",
            width: 90,
            height: 130,
            background:
              "linear-gradient(180deg, rgba(139, 0, 0, 0.8) 0%, rgba(30, 58, 90, 0.6) 100%)",
            borderRadius: "50% 50% 25px 25px",
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6)",
          }}
        />

        {/* 金币堆 */}
        <svg
          style={{
            position: "absolute",
            top: "20px",
            left: "80px",
          }}
          width="100"
          height="80"
          viewBox="0 0 100 80"
        >
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffd700" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>

          {/* 金币堆叠 */}
          <ellipse
            cx="50"
            cy="65"
            rx="40"
            ry="10"
            fill="url(#goldGrad)"
            opacity={goldStack}
          />
          <ellipse
            cx="50"
            cy="55"
            rx="35"
            ry="10"
            fill="url(#goldGrad)"
            opacity={goldStack * 0.9}
          />
          <ellipse
            cx="50"
            cy="45"
            rx="30"
            ry="10"
            fill="url(#goldGrad)"
            opacity={goldStack * 0.8}
          />
          <ellipse
            cx="50"
            cy="35"
            rx="25"
            ry="10"
            fill="url(#goldGrad)"
            opacity={goldStack * 0.7}
          />
          <ellipse
            cx="50"
            cy="25"
            rx="20"
            ry="10"
            fill="url(#goldGrad)"
            opacity={goldStack * 0.6}
          />

          <text
            x="50"
            y="15"
            fontSize="12"
            fill="#ffd700"
            textAnchor="middle"
            fontWeight="600"
          >
            WAR PROFITS
          </text>
        </svg>
      </div>

      {/* 中间利润图表 */}
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: bankerOpacity,
        }}
      >
        <svg width="400" height="200" viewBox="0 0 400 200">
          <defs>
            <linearGradient id="chartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#ffd700" />
            </linearGradient>
          </defs>

          {/* 坐标轴 */}
          <line
            x1="50"
            y1="170"
            x2="350"
            y2="170"
            stroke="#4b5563"
            strokeWidth="1"
          />
          <line
            x1="50"
            y1="30"
            x2="50"
            y2="170"
            stroke="#4b5563"
            strokeWidth="1"
          />

          {/* Y轴标签 */}
          <text x="35" y="100" fontSize="12" fill="#9ca3af" textAnchor="end">
            Profit
          </text>

          {/* 利润柱状图 */}
          <rect
            x="80"
            y={170 - profitRise * 0.8}
            width="40"
            height={profitRise * 0.8}
            fill="url(#chartGrad)"
          />
          <rect
            x="150"
            y={170 - profitRise * 1}
            width="40"
            height={profitRise * 1}
            fill="url(#chartGrad)"
          />
          <rect
            x="220"
            y={170 - profitRise * 1.2}
            width="40"
            height={profitRise * 1.2}
            fill="url(#chartGrad)"
          />
          <rect
            x="290"
            y={170 - profitRise * 1.5}
            width="40"
            height={profitRise * 1.5}
            fill="url(#chartGrad)"
          />

          {/* X轴标签 */}
          <text
            x="100"
            y="190"
            fontSize="12"
            fill="#9ca3af"
            textAnchor="middle"
          >
            1914
          </text>
          <text
            x="170"
            y="190"
            fontSize="12"
            fill="#9ca3af"
            textAnchor="middle"
          >
            1915
          </text>
          <text
            x="240"
            y="190"
            fontSize="12"
            fill="#9ca3af"
            textAnchor="middle"
          >
            1916
          </text>
          <text
            x="310"
            y="190"
            fontSize="12"
            fill="#9ca3af"
            textAnchor="middle"
          >
            1917
          </text>
        </svg>
      </div>

      {/* 底部引言 */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 20,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            marginBottom: 12,
          }}
        >
          "War is consumption at combustion speed."
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#ffd700",
            textAlign: "center",
          }}
        >
          Bankers harvested unprecedented wealth.
        </div>
      </div>

      {/* 金币雨 */}
      {coins}
    </AbsoluteFill>
  );
};
