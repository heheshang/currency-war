import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * DebtSpiralScene - 债务螺旋场景
 *
 * 可视化债务像锁链一样缠绕货币的动画
 * 展示债务货币系统的扩张
 */
export const DebtSpiralScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 螺旋旋转
  const spiralRotation = interpolate(frame, [0, 180], [0, 720]);

  // 债务增长
  const debtGrowth = interpolate(frame, [0, 180], [0, 100]);

  // 锁链数量增长
  const chainCount = Math.floor(interpolate(frame, [0, 180], [3, 12]));

  // 颜色从绿变红
  const r = interpolate(frame, [0, 90, 180], [34, 251, 239]);
  const g = interpolate(frame, [0, 90, 180], [188, 191, 68]);
  const b = interpolate(frame, [0, 90, 180], [34, 35, 68]);

  const getColor = (red: number, green: number, blue: number) => {
    return `rgb(${Math.floor(red)}, ${Math.floor(green)}, ${Math.floor(blue)})`;
  };

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle, #1a1a2e 0%, #0d1117 70%)",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontSize: 42,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        The Debt Spiral
      </div>

      {/* 中央硬币 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            background: "radial-gradient(circle at 30% 30%, #FFD700, #B8860B)",
            borderRadius: "50%",
            boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)",
            border: "5px solid #DAA520",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#0d1117",
            fontFamily: "Cinzel, serif",
            fontSize: 24,
            fontWeight: 700,
            whiteSpace: "nowrap",
          }}
        >
          $
        </div>
      </div>

      {/* 螺旋债务锁链 */}
      <svg
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
        }}
        viewBox="0 0 600 600"
      >
        {Array.from({ length: chainCount }).map((_, i) => {
          const angle = (i / chainCount) * 360 + spiralRotation;
          const radius = 80 + i * 15;

          return (
            <g key={i} transform={`rotate(${angle}, 300, 300)`}>
              <path
                d={`M ${300 + radius} 300 L ${300 + radius + 50} 300`}
                stroke={getColor(r, g, b)}
                strokeWidth={3}
                fill="none"
                opacity={0.7}
              />
            </g>
          );
        })}
      </svg>

      {/* 债务数字 */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: getColor(r, g, b),
            fontFamily: "JetBrains Mono, monospace",
            textShadow: `0 0 30px ${getColor(r, g, b)}`,
          }}
        >
          ${debtGrowth.toFixed(1)}T
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#e8e8e8",
            fontFamily: "Merriweather, serif",
            marginTop: 10,
          }}
        >
          Global Debt
        </div>
      </div>

      {/* 警告文字 */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ef4444",
          fontFamily: "Merriweather, serif",
          fontSize: 18,
          textAlign: "center",
          maxWidth: "70%",
          fontStyle: "italic",
          opacity: interpolate(frame, [120, 150], [0, 1]),
        }}
      >
        "Debt that cannot be paid... will not be paid."
      </div>
    </AbsoluteFill>
  );
};
