import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { ImageLayer, Vignette, FilmGrain } from "../../documentary";

/**
 * AbolishGoldStandardScene - 废除金本位
 * 1933年历史转折
 */
export const AbolishGoldStandardScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const timelineOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const theftOpacity = interpolate(frame, [900, 960], [0, 1], {
    extrapolateRight: "clamp",
  });

  const quoteOpacity = interpolate(frame, [1200, 1280], [0, 1], {
    extrapolateRight: "clamp",
  });

  const timeline = [
    {
      date: "1933.3.4",
      event: "罗斯福就任总统",
      detail: "宣布全国银行停业整顿",
    },
    {
      date: "1933.3.11",
      event: "停止黄金兑换",
      detail: "以稳定经济为名",
    },
    {
      date: "1933.4.5",
      event: "强制上缴黄金",
      detail: "价格：$20.67/盎司",
    },
    {
      date: "1934.1",
      event: "黄金储备法案",
      detail: "金价定为$35/盎司",
    },
  ];

  const theft = {
    before: 20.67,
    after: 35,
    loss: 69,
    punishment: "私藏黄金：10年监禁 + 25万美元罚款",
  };

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* 背景图片 - 黄金/金币 */}
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/ep02/ep02-gold-coins-wealth.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "dramatic" }}
          layer={{ filter: "vintage", opacity: 0.65 }}
          startFrame={0}
          durationFrames={1500}
        />
      </div>

      <Vignette intensity={0.8} />
      <FilmGrain opacity={0.08} />

      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "6%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 30,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          废除金本位
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 4,
          }}
        >
          The End of Gold Standard
        </div>
      </div>

      {/* 时间线 */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "5%",
          width: "50%",
          opacity: timelineOpacity,
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.8)",
            padding: "18px 22px",
            borderRadius: 8,
            borderLeft: "4px solid #ffd700",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ffd700",
              marginBottom: 16,
            }}
          >
            1933年历史转折
          </div>
          {timeline.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                marginBottom: 14,
                opacity: interpolate(
                  frame,
                  [210 + index * 80, 250 + index * 80],
                  [0, 1],
                  { extrapolateRight: "clamp" },
                ),
              }}
            >
              <div
                style={{
                  width: 85,
                  fontFamily: "Cinzel, serif",
                  fontSize: 13,
                  color: "#ffd700",
                  flexShrink: 0,
                }}
              >
                {item.date}
              </div>
              <div
                style={{
                  borderLeft: "2px solid #ffd700",
                  paddingLeft: 12,
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    color: "#e8e8e8",
                  }}
                >
                  {item.event}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#9ca3af",
                  }}
                >
                  {item.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 盗窃图解 */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          right: "5%",
          width: "38%",
          opacity: theftOpacity,
        }}
      >
        <div
          style={{
            background: "rgba(127, 29, 29, 0.75)",
            padding: "18px 22px",
            borderRadius: 8,
            border: "2px solid #ef4444",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ef4444",
              marginBottom: 16,
            }}
          >
            财富转移
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: 16,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 12, color: "#9ca3af" }}>收购价</div>
              <div
                style={{
                  fontSize: 28,
                  color: "#e8e8e8",
                  fontFamily: "Cinzel, serif",
                }}
              >
                ${theft.before}
              </div>
            </div>
            <div style={{ fontSize: 28, color: "#ffd700", marginTop: 8 }}>
              →
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 12, color: "#9ca3af" }}>定价</div>
              <div
                style={{
                  fontSize: 28,
                  color: "#ef4444",
                  fontFamily: "Cinzel, serif",
                }}
              >
                ${theft.after}
              </div>
            </div>
          </div>

          <div
            style={{
              background: "rgba(239, 68, 68, 0.3)",
              padding: "10px 15px",
              borderRadius: 6,
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            <div style={{ fontSize: 12, color: "#9ca3af" }}>人民损失</div>
            <div style={{ fontSize: 32, color: "#ef4444", fontWeight: 700 }}>
              {theft.loss}%
            </div>
          </div>

          <div
            style={{
              fontSize: 12,
              color: "#9ca3af",
              textAlign: "center",
            }}
          >
            {theft.punishment}
          </div>
        </div>
      </div>

      {/* 参议员名言 */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "75%",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.8)",
            padding: "15px 25px",
            borderRadius: 8,
            borderLeft: "4px solid #ef4444",
            borderRight: "4px solid #ef4444",
          }}
        >
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 16,
              color: "#e8e8e8",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            "这不是明摆着偷窃吗，总统先生？"
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#ffd700",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            —— 盲人参议员托马斯·戈尔
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default AbolishGoldStandardScene;
