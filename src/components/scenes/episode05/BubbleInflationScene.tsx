import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * BubbleInflationScene - 场景9：泡沫膨胀
 *
 * 气球膨胀动画（多种资产类别）
 * 美元钞票增殖
 * 被忽视的警告角色
 */
export const BubbleInflationScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // 气球膨胀
  const balloonScale = interpolate(frame, [120, 720], [1, 3], { extrapolateRight: "clamp" });
  const balloonWobble = Math.sin(frame * 0.05) * 5;

  // 美元增殖
  const dollarCount = interpolate(frame, [180, 720], [1, 50], { extrapolateRight: "clamp" });

  // 警告淡入
  const warningOpacity = interpolate(frame, [540, 720], [0, 1], { extrapolateRight: "clamp" });

  // 标题
  const titleOpacity = interpolate(frame, [60, 150], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #2d1f1f 0%, #0d1117 100%)",
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
            fontSize: 38,
            color: "#ffd700",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          The Great Bubble
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
          1927-1929: Inflation Without Limit
        </div>
      </div>

      {/* 气球群 */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity,
        }}
      >
        {Array.from({ length: 7 }).map((_, i) => {
          const hue = (i * 40 + frame * 0.5) % 360;
          const size = 40 + (i % 3) * 15;
          const x = (i - 3) * 70;
          const y = Math.sin(frame * 0.03 + i * 0.5) * 10;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
                transform: `scale(${balloonScale}) rotate(${balloonWobble}deg)`,
              }}
            >
              <svg width={size} height={size * 1.2} viewBox={`0 0 ${size} ${size * 1.2}`}>
                <defs>
                  <radialGradient id={`balloonGrad${i}`}>
                    <stop offset="0%" stopColor={`hsl(${hue}, 100%, 70%)`} />
                    <stop offset="100%" stopColor={`hsl(${hue}, 100%, 40%)`} />
                  </radialGradient>
                </defs>
                <ellipse cx={size / 2} cy={size / 2.5} rx={size / 2.2} ry={size / 2.5} fill={`url(#balloonGrad${i})`} />
                <path
                  d={`M ${size / 2},${size * 0.9} Q ${size / 2 - 5},${size * 0.85} ${size / 2 - 8},${size * 0.95}`}
                  fill={`hsl(${hue}, 100%, 50%)`}
                  opacity="0.8"
                />
              </svg>

              {/* 资产标签 */}
              <div
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "10px",
                  color: "#1a1a1a",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                {i === 0 && "Stocks"}
                {i === 1 && "Real Estate"}
                {i === 2 && "Margin"}
                {i === 3 && "Bonds"}
                {i === 4 && "Speculation"}
                {i === 5 && "Credit"}
                {i === 6 && "Housing"}
              </div>
            </div>
          );
        })}
      </div>

      {/* 美元增殖 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          right: "8%",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(34, 197, 94, 0.9)",
            border: "2px solid #22c55e",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#22c55e",
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            Money Supply Explosion
          </div>

          <svg width="180" height="100" viewBox="0 0 180 100">
            {Array.from({ length: Math.min(Math.floor(dollarCount), 25) }).map((_, i) => {
              const row = Math.floor(i / 5);
              const col = i % 5;
              const x = 15 + col * 32;
              const y = 20 + row * 18;
              const scale = Math.min(1, (dollarCount - i * 2) / 10);

              return (
                <g key={i} opacity={scale}>
                  <rect x={x} y={y} width="28" height="16" rx="2" fill="#22c55e" stroke="#16a34a" strokeWidth="1" />
                  <text x={x + 14} y={y + 11} fontSize="10" fill="#16a34a" textAnchor="middle" fontWeight="600">
                    $
                  </text>
                </g>
              );
            })}
          </svg>

          <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 12, textAlign: "center" }}>
            Fed's easy money creates the bubble
          </div>
        </div>
      </div>

      {/* 被忽视的警告 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "10%",
          opacity: warningOpacity,
        }}
      >
        <div
          style={{
            padding: "16px",
            background: "rgba(239, 68, 68, 0.9)",
            border: "2px solid #ef4444",
            borderRadius: "8px",
          }}
        >
          <div style={{ fontSize: 12, color: "#fca5a5", marginBottom: 8, fontWeight: 600 }}>
            ⚠️ WARNING
          </div>
          <div style={{ fontSize: 13, color: "#e8e8e8", lineHeight: "1.6" }}>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#fbbf24" }}>Overvalued assets</span>
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#fbbf24" }}>Massive speculation</span>
            </div>
            <div>
              <span style={{ color: "#ef4444", fontWeight: 600 }}>
                No one is listening
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 底部引言 */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: warningOpacity,
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
          "Stock market: The new national obsession."
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#ffd700",
            textAlign: "center",
          }}
        >
          Fed's easy money created the bubble.
        </div>
      </div>
    </AbsoluteFill>
  );
};
