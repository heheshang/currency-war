import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * ActPassesScene - 法案通过场景
 *
 * 展示1913年12月23日仓促通过美联储法案的历史时刻
 * 圣诞节前匆忙投票，威尔逊一小时内签署
 */
export const ActPassesScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // 时间线动画
  const clockRotation = interpolate(frame, [60, 900], [0, 360], { extrapolateRight: "clamp" });

  // 文件淡入
  const documentOpacity = interpolate(frame, [120, 270], [0, 1], { extrapolateRight: "clamp" });

  // 投票计数动画
  const voteYes = interpolate(frame, [420, 660], [0, 298], { extrapolateRight: "clamp" });
  const voteNo = interpolate(frame, [420, 660], [0, 60], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "#0a0a0",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: opacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 38,
            color: "#8b0000",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          December 1913
        </div>
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 24,
            color: "#d4af37",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          The Crime of the Century
        </div>
      </div>

      {/* 国会钟楼背景 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%, -50%)",
        }}
      >
        <svg width={400} height={400} viewBox="0 0 400 400">
          {/* 时钟外框 */}
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="#4b5563"
            strokeWidth="3"
          />
          <circle
            cx="200"
            cy="200"
            r="140"
            fill="rgba(30, 58, 138, 0.2)"
          />

          {/* 时钟刻度 */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const x1 = 200 + Math.cos(angle) * 100;
            const y1 = 200 + Math.sin(angle) * 100;
            const x2 = 200 + Math.cos(angle) * 120;
            const y2 = 200 + Math.sin(angle) * 120;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#9ca3af"
                strokeWidth="2"
              />
            );
          })}

          {/* 时针 - 随时间旋转 */}
          <g transform={`translate(200, 200) rotate(${clockRotation}deg)`}>
            <line x1="0" y1="0" x2="0" y2="-60" stroke="#8b0000" strokeWidth="4" />
            <polygon
              points="0,-5 -8,0 0,-5"
              fill="#8b0000"
            />
          </g>
        </svg>
      </div>

      {/* 时间线事件 */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "center",
          }}
        >
          {/* 12月20日星期六 */}
          <div
            style={{
              padding: "16px 24px",
              background: "rgba(139, 69, 19, 0.3)",
              borderLeft: "4px solid #ffd700",
              opacity: documentOpacity,
            }}
          >
            <div style={{ fontSize: 20, color: "#ffd700", fontWeight: 600, marginBottom: 8 }}>
              Dec 20, Saturday
            </div>
            <div style={{ fontSize: 14, color: "#e8e8e8" }}>
              Conference meets all day
            </div>
          </div>

          {/* 12月21日星期日 */}
          <div
            style={{
              padding: "16px 24px",
              background: "rgba(139, 69, 19, 0.3)",
              borderLeft: "4px solid #ffd700",
              opacity: documentOpacity,
            }}
          >
            <div style={{ fontSize: 20, color: "#ffd700", fontWeight: 600, marginBottom: 8 }}>
              Dec 21, Sunday (Unprecedented!)
            </div>
            <div style={{ fontSize: 14, color: "#e8e8e8" }}>
              Continues meeting
            </div>
          </div>

          {/* 12月22日星期一 */}
          <div
            style={{
              padding: "16px 24px",
              background: "rgba(139, 69, 19, 0.3)",
              borderLeft: "4px solid #ffd700",
              opacity: documentOpacity,
            }}
          >
            <div style={{ fontSize: 20, color: "#ffd700", fontWeight: 600, marginBottom: 8 }}>
              Dec 22, Monday
            </div>
            <div style={{ fontSize: 14, color: "#e8e8e8" }}>
              <div>1:30 AM - Differences resolved</div>
              <div>4:30 AM - Final document sent to print</div>
              <div>7:00 AM - Final proofread</div>
              <div>2:00 PM - On representatives' desks</div>
              <div>4:00 PM - Session begins</div>
            </div>
          </div>
        </div>
      </div>

      {/* 投票结果 */}
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "10%",
          opacity: documentOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "rgba(30, 58, 138, 0.3)",
            border: "2px solid rgba(255, 215, 0, 0.3)",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ffd700",
              marginBottom: 16,
              letterSpacing: 1,
            }}
          >
            DECEMBER 23, 1913
          </div>

          <div
            style={{
              display: "flex",
              gap: "30px",
              marginTop: 16,
            }}
          >
            <div>
              <div style={{ fontSize: 28, color: "#22c55e", fontWeight: 600, marginBottom: 8 }}>
                {Math.floor(voteYes)}
              </div>
              <div style={{ fontSize: 14, color: "#9ca3af" }}>House: YES</div>
            </div>

            <div>
              <div style={{ fontSize: 28, color: "#22c55e", fontWeight: 600, marginBottom: 8 }}>
                {Math.floor(voteNo)}
              </div>
              <div style={{ fontSize: 14, color: "#9ca3af" }}>Senate: YES (27 absent!)</div>
            </div>
          </div>

          <div style={{ fontSize: 14, color: "#e8e8e8", marginTop: 16, lineHeight: "1.6" }}>
            Wilson signs within <span style={{ color: "#ffd700", fontWeight: 600 }}>ONE HOUR</span>
          </div>
        </div>
      </div>

      {/* 底部信息 */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          opacity: documentOpacity,
          maxWidth: "400px",
        }}
      >
        <div
          style={{
            fontSize: 14,
            color: "#e8e8e8",
            lineHeight: "1.6",
          }}
        >
          <div style={{ marginBottom: 12 }}>
            <span style={{ color: "#ffd700", fontWeight: 600 }}>The Crime:</span>
          </div>
          <div style={{ marginBottom: 12 }}>
            Passed when opponents away for Christmas
          </div>
          <div style={{ marginBottom: 12 }}>
            Most representatives never read final version
          </div>
          <div style={{ fontSize: 13, color: "#9ca3af" }}>
            Not one understood the full implications
          </div>
        </div>
      </div>

      {/* 参议院警告 */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          opacity: documentOpacity,
          maxWidth: "400px",
        }}
      >
        <div
          style={{
            fontSize: 14,
            color: "#e8e8e8",
            lineHeight: "1.6",
            fontStyle: "italic",
          }}
        >
          <div style={{ marginBottom: 12 }}>
            <span style={{ color: "#d4af37", fontWeight: 600 }}>Charles Lindbergh, Congressman:</span>
          </div>
          <div style={{ marginBottom: 12 }}>
            "This is the greatest legislative crime of the age."
          </div>
        </div>
      </div>

      {/* 底部装饰 */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "300px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #ffd700, transparent)",
          opacity: opacity,
        }}
      />
    </AbsoluteFill>
  );
};
