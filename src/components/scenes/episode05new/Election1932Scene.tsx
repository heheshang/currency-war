import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { ImageLayer, Vignette, FilmGrain } from "../../documentary";

/**
 * Election1932Scene - 1932年总统大选
 * 胡佛与华尔街的矛盾
 */
export const Election1932Scene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [60, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  const statsOpacity = interpolate(frame, [150, 210], [0, 1], {
    extrapolateRight: "clamp",
  });

  const conflictOpacity = interpolate(frame, [450, 510], [0, 1], {
    extrapolateRight: "clamp",
  });

  const fdrOpacity = interpolate(frame, [900, 960], [0, 1], {
    extrapolateRight: "clamp",
  });

  const stats = [
    { label: "失业人口", value: "1300万", color: "#ef4444" },
    { label: "失业率", value: "25%", color: "#ef4444" },
    { label: "银行倒闭", value: "5000+", color: "#f59e0b" },
  ];

  const conflicts = [
    {
      issue: "德国赔款问题",
      hoover: "拒绝向华尔街低头",
      wallStreet: "威胁替换总统",
    },
    {
      issue: "股市做空调查",
      hoover: "穷追猛打",
      wallStreet: "拒绝配合",
    },
    {
      issue: "金融丑闻曝光",
      hoover: "揭露高盛、摩根",
      wallStreet: '"荒谬！"',
    },
  ];

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* 背景图片 - 大萧条/失业人群 */}
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/episode05/great_depression_bread_line_1_pexels.jpeg"
          kenBurns={{ panDirection: "left", intensity: "subtle" }}
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
            fontSize: 32,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          1932年总统大选
        </div>
      </div>

      {/* 统计数据 */}
      <div
        style={{
          position: "absolute",
          top: "16%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 40,
          opacity: statsOpacity,
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              background: "rgba(0, 0, 0, 0.75)",
              padding: "15px 25px",
              borderRadius: 8,
              textAlign: "center",
              border: `2px solid ${stat.color}`,
            }}
          >
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 28,
                color: stat.color,
                fontWeight: 700,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#9ca3af",
                marginTop: 4,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* 胡佛 vs 华尔街 */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "5%",
          width: "90%",
          opacity: conflictOpacity,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* 胡佛方 */}
          <div
            style={{
              width: "42%",
              background: "rgba(0, 0, 0, 0.8)",
              padding: "20px",
              borderRadius: 8,
              borderTop: "4px solid #3b82f6",
            }}
          >
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 18,
                color: "#3b82f6",
                marginBottom: 12,
              }}
            >
              胡佛总统
            </div>
            {conflicts.map((c, i) => (
              <div
                key={i}
                style={{
                  fontSize: 13,
                  color: "#e8e8e8",
                  marginBottom: 8,
                  opacity: interpolate(
                    frame,
                    [510 + i * 90, 540 + i * 90],
                    [0, 1],
                    { extrapolateRight: "clamp" },
                  ),
                }}
              >
                <span style={{ color: "#9ca3af" }}>{c.issue}：</span>
                {c.hoover}
              </div>
            ))}
          </div>

          {/* VS */}
          <div
            style={{
              padding: "20px",
              background: "rgba(127, 29, 29, 0.5)",
              borderRadius: "50%",
              marginTop: 20,
            }}
          >
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 24,
                color: "#ef4444",
                fontWeight: 700,
              }}
            >
              VS
            </div>
          </div>

          {/* 华尔街方 */}
          <div
            style={{
              width: "42%",
              background: "rgba(0, 0, 0, 0.8)",
              padding: "20px",
              borderRadius: 8,
              borderTop: "4px solid #ef4444",
            }}
          >
            <div
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 18,
                color: "#ef4444",
                marginBottom: 12,
              }}
            >
              华尔街银行家
            </div>
            {conflicts.map((c, i) => (
              <div
                key={i}
                style={{
                  fontSize: 13,
                  color: "#e8e8e8",
                  marginBottom: 8,
                  opacity: interpolate(
                    frame,
                    [510 + i * 90, 540 + i * 90],
                    [0, 1],
                    { extrapolateRight: "clamp" },
                  ),
                }}
              >
                <span style={{ color: "#9ca3af" }}>{c.issue}：</span>
                {c.wallStreet}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 罗斯福登场 */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          opacity: fdrOpacity,
        }}
      >
        <div
          style={{
            background: "rgba(30, 58, 90, 0.9)",
            padding: "15px 30px",
            borderRadius: 8,
            border: "2px solid #ffd700",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 20,
              color: "#ffd700",
            }}
          >
            登场：佛兰克林·德兰诺·罗斯福
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#9ca3af",
              marginTop: 6,
            }}
          >
            20世纪「最伟大」的总统？还是银行家的人？
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Election1932Scene;
