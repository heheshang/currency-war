import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * AssassinationScene - 林肯刺杀场景
 *
 * 1865年4月14日福特剧院
 * 展示刺杀事件与货币政策的关联
 * 严肃、沉思的氛围
 */
export const AssassinationScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 动画时序
  const titleOpacity = interpolate(frame, [0, 60], [0, 1], { extrapolateRight: "clamp" });
  const theaterOpacity = interpolate(frame, [90, 180], [0, 1], { extrapolateRight: "clamp" });
  const dateOpacity = interpolate(frame, [120, 210], [0, 1], { extrapolateRight: "clamp" });
  const questionOpacity = interpolate(frame, [270, 360], [0, 1], { extrapolateRight: "clamp" });
  const connectionOpacity = interpolate(frame, [420, 510], [0, 1], { extrapolateRight: "clamp" });
  const aftermathOpacity = interpolate(frame, [570, 660], [0, 1], { extrapolateRight: "clamp" });

  // 红色警报效果 - 暗示危险
  const redPulse = interpolate(
    frame % 60,
    [0, 30, 60],
    [0, 0.1, 0],
    { extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at center, #1a0a0a 0%, #0d1117 100%)`,
      }}
    >
      {/* 红色警报层 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `rgba(139, 0, 0, ${redPulse})`,
          pointerEvents: "none",
        }}
      />

      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 42,
            color: "#8b0000",
            fontWeight: 700,
            letterSpacing: 3,
          }}
        >
          ASSASSINATION
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#9ca3af",
            marginTop: 8,
          }}
        >
          April 14, 1865 — Ford's Theatre
        </div>
      </div>

      {/* 剧院剪影 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: theaterOpacity,
        }}
      >
        <svg width={500} height={350} viewBox="0 0 500 350">
          <defs>
            <linearGradient id="theaterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2d3748" />
              <stop offset="100%" stopColor="#1a202c" />
            </linearGradient>
          </defs>

          {/* 剧院建筑轮廓 */}
          <path
            d="M 50 300 L 50 150 L 100 100 L 150 100 L 150 80 L 200 80 L 200 100 L 300 100 L 300 80 L 350 80 L 350 100 L 400 100 L 450 150 L 450 300 Z"
            fill="url(#theaterGrad)"
            stroke="#4a5568"
            strokeWidth={2}
          />

          {/* 圆顶 */}
          <ellipse
            cx={250}
            cy={80}
            rx={100}
            ry={30}
            fill="#1a202c"
            stroke="#4a5568"
            strokeWidth={2}
          />

          {/* 柱子 */}
          <g fill="#2d3748" stroke="#4a5568" strokeWidth={1}>
            <rect x={120} y={150} width={15} height={150} />
            <rect x={180} y={150} width={15} height={150} />
            <rect x={240} y={150} width={15} height={150} />
            <rect x={300} y={150} width={15} height={150} />
            <rect x={360} y={150} width={15} height={150} />
          </g>

          {/* 窗户 */}
          <g fill="#0a0e17" stroke="#4a5568" strokeWidth={1}>
            <rect x={130} y={170} width={30} height={50} />
            <rect x={190} y={170} width={30} height={50} />
            <rect x={250} y={170} width={30} height={50} />
            <rect x={310} y={170} width={30} height={50} />
            <rect x={370} y={170} width={30} height={50} />
          </g>

          {/* 包厢 - 刺杀发生地 */}
          <rect
            x={340}
            y={100}
            width={80}
            height={60}
            fill="#8b0000"
            stroke="#ffd700"
            strokeWidth={2}
            opacity={0.8}
          />
        </svg>

        {/* 枪声效果 */}
        {frame > 210 && frame < 270 && (
          <div
            style={{
              position: "absolute",
              top: "35%",
              left: "75%",
              width: 60,
              height: 60,
              background: "radial-gradient(circle, rgba(255,255,0,0.8) 0%, transparent 70%)",
              borderRadius: "50%",
              animation: "flash 0.5s ease-out",
            }}
          />
        )}
      </div>

      {/* 日期和时间 */}
      <div
        style={{
          position: "absolute",
          bottom: "35%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: dateOpacity,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 24,
            color: "#ffd700",
            fontWeight: 700,
          }}
        >
          April 14, 1865
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 16,
            color: "#9ca3af",
            marginTop: 8,
          }}
        >
          10:15 PM — Ford's Theatre, Washington
        </div>
      </div>

      {/* 疑问 */}
      <div
        style={{
          position: "absolute",
          bottom: "22%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          opacity: questionOpacity,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#e8e8e8",
            lineHeight: "1.6",
            fontStyle: "italic",
          }}
        >
          Official story: Revenge for the South
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 20,
            color: "#ffd700",
            marginTop: 12,
            fontWeight: 600,
          }}
        >
          But who really benefited?
        </div>
      </div>

      {/* 与货币政策的关联 */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "75%",
          opacity: connectionOpacity,
          textAlign: "center",
          padding: "15px 25px",
          background: "rgba(139, 0, 0, 0.15)",
          border: "1px solid #8b0000",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 14,
            color: "#8b0000",
            letterSpacing: 2,
            marginBottom: 8,
          }}
        >
          THE CONNECTION
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 15,
            color: "#e8e8e8",
            lineHeight: "1.5",
          }}
        >
          Lincoln's Greenbacks threatened the banking establishment
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 14,
            color: "#9ca3af",
            marginTop: 8,
            fontStyle: "italic",
          }}
        >
          41 days after his second inauguration — he was dead
        </div>
      </div>

      {/* 后续 */}
      <div
        style={{
          position: "absolute",
          bottom: "3%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: aftermathOpacity,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 14,
            color: "#6b7280",
          }}
        >
          Greenbacks were soon withdrawn • National Bank Act became permanent
        </div>
      </div>

      {/* 悲伤的视觉效果 */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          opacity: aftermathOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 72,
            color: "rgba(139, 0, 0, 0.15)",
          }}
        >
          †
        </div>
      </div>
    </AbsoluteFill>
  );
};
