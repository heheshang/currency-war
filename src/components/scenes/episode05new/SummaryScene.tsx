import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { ImageLayer, Vignette, FilmGrain } from "../../documentary";

/**
 * SummaryScene - 总结
 * 昂贵的战争与廉价的货币
 */
export const SummaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const debtOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const conclusionOpacity = interpolate(frame, [450, 510], [0, 1], {
    extrapolateRight: "clamp",
  });

  const finalOpacity = interpolate(frame, [750, 810], [0, 1], {
    extrapolateRight: "clamp",
  });

  const debt = {
    before: { year: 1930, amount: 160, unit: "亿" },
    after: { year: 1946, amount: 2690, unit: "亿" },
    increase: "1681%",
  };

  const keyPoints = [
    "凯恩斯的廉价货币思想得到银行家大力支持",
    "胡佛因与华尔街对立而断送仕途",
    "罗斯福表面为民，实际与银行家关系深厚",
    "金本位被废除，人民失去财富保护",
    "华尔街资助希特勒，铺平二战道路",
  ];

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* 背景图片 - 战争/货币 */}
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/episode05/ep05-ww1.jpg"
          kenBurns={{ panDirection: "zoom-out", intensity: "dramatic" }}
          layer={{ filter: "vintage", opacity: 0.5 }}
          startFrame={0}
          durationFrames={1050}
        />
      </div>

      <Vignette intensity={0.85} />
      <FilmGrain opacity={0.1} />

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
            fontSize: 32,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          昂贵的战争，廉价的货币
        </div>
      </div>

      {/* 国债对比 */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: debtOpacity,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 40,
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "rgba(0, 0, 0, 0.8)",
              padding: "20px 30px",
              borderRadius: 8,
              textAlign: "center",
              border: "2px solid #3b82f6",
            }}
          >
            <div style={{ fontSize: 14, color: "#9ca3af" }}>
              {debt.before.year}年
            </div>
            <div
              style={{
                fontSize: 40,
                color: "#3b82f6",
                fontFamily: "Cinzel, serif",
                fontWeight: 700,
              }}
            >
              {debt.before.amount}
            </div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>
              {debt.before.unit}美元
            </div>
          </div>

          <div
            style={{
              background: "rgba(127, 29, 29, 0.7)",
              padding: "15px 20px",
              borderRadius: 8,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 14, color: "#ef4444" }}>增长</div>
            <div style={{ fontSize: 32, color: "#ef4444", fontWeight: 700 }}>
              {debt.increase}
            </div>
          </div>

          <div
            style={{
              background: "rgba(0, 0, 0, 0.8)",
              padding: "20px 30px",
              borderRadius: 8,
              textAlign: "center",
              border: "2px solid #ef4444",
            }}
          >
            <div style={{ fontSize: 14, color: "#9ca3af" }}>
              {debt.after.year}年
            </div>
            <div
              style={{
                fontSize: 40,
                color: "#ef4444",
                fontFamily: "Cinzel, serif",
                fontWeight: 700,
              }}
            >
              {debt.after.amount}
            </div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>
              {debt.after.unit}美元
            </div>
          </div>
        </div>
      </div>

      {/* 关键点总结 */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          opacity: conclusionOpacity,
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.8)",
            padding: "20px 30px",
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
            第五章要点
          </div>
          {keyPoints.map((point, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: 10,
                opacity: interpolate(
                  frame,
                  [510 + index * 40, 540 + index * 40],
                  [0, 1],
                  { extrapolateRight: "clamp" },
                ),
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#ffd700",
                  marginTop: 6,
                  marginRight: 12,
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  fontSize: 14,
                  color: "#e8e8e8",
                  lineHeight: 1.5,
                }}
              >
                {point}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 最终结论 */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          opacity: finalOpacity,
        }}
      >
        <div
          style={{
            background: "rgba(30, 58, 90, 0.9)",
            padding: "18px 30px",
            borderRadius: 8,
            border: "2px solid #ffd700",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: 16,
              color: "#e8e8e8",
              fontStyle: "italic",
            }}
          >
            "新政从来不是为了帮助人民。它是为了解除黄金的保护，打开债务货币的闸门。"
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#ffd700",
              marginTop: 10,
            }}
          >
            这才是真正的「新政」。
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default SummaryScene;
