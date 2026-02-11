import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * SummaryScene - 总结场景
 *
 * 回顾关键要点，预告下一集（Episode04: 美联储的秘密）
 */
export const SummaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const pointsStagger = Array.from({ length: 5 }).map((_, i) =>
    spring({ frame: frame - 60 - i * 30, fps: 30, config: { damping: 15, stiffness: 80 } })
  );
  const nextOpacity = interpolate(frame, [300, 390], [0, 1], { extrapolateRight: "clamp" });

  const keyPoints = [
    "Currency control is the ultimate power",
    "7 presidents assassinated for resisting central banks",
    "The battle continues to this day",
    "Understanding history is key to survival",
    "Next: The Federal Reserve — Jekyll Island Secret",
  ];

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1a1a2e 0%, #0d1117 100%)",
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
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 36,
            color: "#ffd700",
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          Key Takeaways
        </div>
      </div>

      {/* 要点列表 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
        }}
      >
        {keyPoints.map((point, index) => {
          const scale = pointsStagger[index] || 0;
          const isLast = index === keyPoints.length - 1;

          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 25,
                opacity: scale,
                transform: `translateX(${(1 - scale) * -50}px)`,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: isLast ? "#8b0000" : "#ffd700",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 20,
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "Cinzel, serif",
                    fontSize: 18,
                    color: "#0d1117",
                    fontWeight: 700,
                  }}
                >
                  {index + 1}
                </span>
              </div>
              <div
                style={{
                  fontFamily: "Merriweather, serif",
                  fontSize: isLast ? 20 : 18,
                  color: isLast ? "#ffd700" : "#e8e8e8",
                  fontWeight: isLast ? 600 : 400,
                }}
              >
                {point}
              </div>
            </div>
          );
        })}
      </div>

      {/* 分隔线 */}
      <div
        style={{
          position: "absolute",
          bottom: "28%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #ffd700, transparent)",
          opacity: nextOpacity,
        }}
      />

      {/* 下集预告 - 扩展版 */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: nextOpacity,
          textAlign: "center",
          width: "85%",
        }}
      >
        {/* 标签 */}
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 14,
            color: "#9ca3af",
            letterSpacing: 3,
            marginBottom: 12,
          }}
        >
          COMING IN EPISODE 4
        </div>

        {/* 主标题 */}
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 32,
            color: "#ffd700",
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          The Federal Reserve
        </div>

        {/* 副标题 */}
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 16,
            color: "#e8e8e8",
            fontStyle: "italic",
            marginBottom: 20,
          }}
        >
          Jekyll Island Secret — 1910
        </div>

        {/* 预告内容卡片 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            marginTop: 20,
          }}
        >
          {/* 左侧：关键问题 */}
          <div
            style={{
              background: "rgba(139, 0, 0, 0.15)",
            border: "1px solid #8b0000",
            borderRadius: 8,
              padding: "15px 20px",
              flex: 1,
            }}
          >
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 13,
                color: "#ef4444",
                marginBottom: 10,
                fontWeight: 600,
              }}
            >
              THE TRUTH
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#e8e8e8",
                lineHeight: "1.5",
              }}
            >
              Who owns the Federal Reserve?
              <br />
              Is it really "federal" or
              <br />
              <span style={{ color: "#ffd700" }}>private?</span>
            </div>
          </div>

          {/* 右侧：秘密会议 */}
          <div
            style={{
              background: "rgba(30, 58, 90, 0.15)",
            border: "1px solid #1e3a5a",
              borderRadius: 8,
              padding: "15px 20px",
              flex: 1,
            }}
          >
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 13,
                color: "#1e3a5a",
                marginBottom: 10,
                fontWeight: 600,
              }}
            >
              THE SECRET
            </div>
            <div
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: 12,
                color: "#e8e8e8",
                lineHeight: "1.5",
              }}
            >
              Jekyll Island, Georgia
              <br />
              November 1910
              <br />
              <span style={{ color: "#ffd700" }}>
                7 days that changed
                <br />
                America forever
              </span>
            </div>
          </div>
        </div>

        {/* 底部提示 */}
        <div
          style={{
            marginTop: 20,
            fontFamily: "Merriweather, serif",
            fontSize: 13,
            color: "#9ca3af",
            fontStyle: "italic",
          }}
        >
          The greatest crime in American history
        </div>
      </div>

      {/* 结束文字 */}
      <div
        style={{
          position: "absolute",
          bottom: "2%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: nextOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 14,
            color: "#6b7280",
            letterSpacing: 2,
          }}
        >
          The War That Never Ended • To Be Continued...
        </div>
      </div>
    </AbsoluteFill>
  );
};
