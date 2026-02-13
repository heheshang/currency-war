import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * CouncilForeignRelationsScene - 场景2：外交协会
 *
 * 介绍美国外交协会(CFR) - "美国政治精英的中央党校"
 * 展示其成员构成和影响力
 *
 * 时长：70秒（2,100帧 @ 30fps）
 * 开始帧：3,000（100秒 @ 30fps）
 */
export const CouncilForeignRelationsScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 标题淡入
  const titleOpacity = interpolate(frame, [30, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 组织介绍淡入
  const orgOpacity = interpolate(frame, [150, 240], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 成员列表淡入
  const membersOpacity = interpolate(frame, [300, 390], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 影响力描述淡入
  const influenceOpacity = interpolate(frame, [540, 630], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 关键数据淡入
  const statsOpacity = interpolate(frame, [720, 810], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 底部引言淡入
  const quoteOpacity = interpolate(frame, [900, 990], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 背景装饰动画
  const lineRotate = interpolate(frame, [0, 600], [0, 360], {
    extrapolateRight: "clamp",
  });

  const members = [
    { name: "Presidents", count: 11, color: "#ffd700" },
    { name: "Secretaries of State", count: 8, color: "#22c55e" },
    { name: "CIA Directors", count: 6, color: "#3b82f6" },
    { name: "Media Moguls", count: 20, color: "#ef4444" },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* 背景装饰 - 旋转线条 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) rotate(${lineRotate}deg)`,
          width: "700px",
          height: "700px",
          border: "2px solid rgba(255, 215, 0, 0.08)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) rotate(${-lineRotate * 0.7}deg)`,
          width: "500px",
          height: "500px",
          border: "1px solid rgba(255, 215, 0, 0.12)",
          borderRadius: "50%",
        }}
      />

      {/* 主标题 */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 48,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 3,
            textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
          }}
        >
          Council on Foreign Relations
        </div>
        <div
          style={{
            fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif",
            fontSize: 28,
            color: "#d4d4d4",
            textAlign: "center",
            marginTop: 12,
            letterSpacing: 4,
          }}
        >
          外交协会
        </div>
      </div>

      {/* 组织介绍 */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "5%",
          width: "55%",
          opacity: orgOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "rgba(30, 58, 90, 0.85)",
            border: "2px solid #ffd700",
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
            "The Central Party School of American Politics"
          </div>
          <div style={{ fontSize: 15, color: "#e8e8e8", lineHeight: "1.8" }}>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>
                Founded:
              </span>{" "}
              1921, New York City
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>
                Mission:
              </span>{" "}
              Shape U.S. foreign policy
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>
                Status:
              </span>{" "}
              Most powerful policy group in America
            </div>
            <div>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>
                Influence:
              </span>{" "}
              Controls key government positions
            </div>
          </div>
        </div>
      </div>

      {/* 成员统计 */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "5%",
          width: "35%",
          opacity: membersOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "rgba(30, 58, 90, 0.85)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ffd700",
              marginBottom: 20,
              letterSpacing: 1,
            }}
          >
            Elite Membership
          </div>
          {members.map((member, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 14,
                paddingBottom: 14,
                borderBottom: "1px solid rgba(255, 215, 0, 0.2)",
              }}
            >
              <span style={{ color: "#e8e8e8", fontSize: 15 }}>
                {member.name}
              </span>
              <span
                style={{
                  color: member.color,
                  fontSize: 20,
                  fontWeight: 700,
                  fontFamily: "Cinzel, serif",
                }}
              >
                {member.count}+
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 影响力描述 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          opacity: influenceOpacity,
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "24px",
            background: "rgba(13, 17, 23, 0.9)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 215, 0, 0.3)",
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: "#e8e8e8",
              lineHeight: "1.8",
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          >
            外交协会成员占据了美国
            <span style={{ color: "#ffd700", fontWeight: 700 }}> 国务院</span>、
            <span style={{ color: "#ffd700", fontWeight: 700 }}> 国防部</span>、
            <span style={{ color: "#ffd700", fontWeight: 700 }}> 中情局</span>
            <br />
            等关键部门的高层职位
          </div>
        </div>
      </div>

      {/* 关键数据 */}
      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "60px",
          opacity: statsOpacity,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 36,
              color: "#ffd700",
              fontWeight: 700,
            }}
          >
            100+
          </div>
          <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 4 }}>
            Years of Influence
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 36,
              color: "#ffd700",
              fontWeight: 700,
            }}
          >
            5,000+
          </div>
          <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 4 }}>
            Elite Members
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 36,
              color: "#ffd700",
              fontWeight: 700,
            }}
          >
            90%
          </div>
          <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 4 }}>
            Policy Makers
          </div>
        </div>
      </div>

      {/* 底部引言 */}
      <div
        style={{
          position: "absolute",
          bottom: "3%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: quoteOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            lineHeight: "1.6",
          }}
        >
          "The CFR is the closest thing there is to a
          shadow government."
        </div>
      </div>
    </AbsoluteFill>
  );
};
