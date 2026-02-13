import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * BilderbergScene - 场景5：彼尔德伯格俱乐部
 *
 * 介绍最秘密的精英俱乐部 - 彼尔德伯格会议
 * 展示其成员构成和全球影响力
 *
 * 时长：60秒（1,800帧 @ 30fps）
 * 开始帧：9,300（310秒 @ 30fps）
 */
export const BilderbergScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 标题淡入
  const titleOpacity = interpolate(frame, [30, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 介绍淡入
  const introOpacity = interpolate(frame, [150, 240], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 神秘性描述淡入
  const mysteryOpacity = interpolate(frame, [300, 390], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 成员名单淡入
  const membersOpacity = interpolate(frame, [480, 570], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 议题淡入
  const agendaOpacity = interpolate(frame, [660, 750], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 底部引言淡入
  const quoteOpacity = interpolate(frame, [840, 930], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 锁形图标动画
  const lockPulse = interpolate(frame % 300, [0, 150, 300], [1, 1.1, 1], {
    extrapolateRight: "clamp",
  });

  const keyMembers = [
    { name: "David Rockefeller", role: "Charter Member" },
    { name: "Henry Kissinger", role: "Regular Attendee" },
    { name: "George Soros", role: "Frequent Guest" },
    { name: "Queen Beatrix", role: "Royal Participant" },
  ];

  const topics = [
    "Global Economy",
    "World Order",
    "Currency Systems",
    "Geopolitics",
  ];

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* 背景装饰 - 神秘锁 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${lockPulse})`,
          fontSize: "300px",
          color: "rgba(255, 215, 0, 0.05)",
          pointerEvents: "none",
        }}
      >
        🔒
      </div>

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
            fontSize: 52,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 4,
            textShadow: "0 0 40px rgba(255, 215, 0, 0.6)",
          }}
        >
          BILDERBERG CLUB
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
          彼尔德伯格俱乐部
        </div>
      </div>

      {/* 介绍 */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "5%",
          width: "55%",
          opacity: introOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "rgba(30, 58, 90, 0.9)",
            border: "3px solid #ffd700",
            borderRadius: "8px",
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
            "The Most Secret Club in the World"
          </div>
          <div style={{ fontSize: 15, color: "#e8e8e8", lineHeight: "1.8" }}>
            <div style={{ marginBottom: 10 }}>
              <span style={{ color: "#22c55e" }}>Founded:</span> 1954, Hotel de Bilderberg, Netherlands
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ color: "#22c55e" }}>Meetings:</span> Annual, rotating locations
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ color: "#22c55e" }}>Participants:</span> 120-150 elites per year
            </div>
            <div>
              <span style={{ color: "#22c55e" }}>Ages:</span> 60+ years of age minimum
            </div>
          </div>
        </div>
      </div>

      {/* 神秘性 */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          right: "5%",
          width: "35%",
          opacity: mysteryOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "rgba(139, 0, 0, 0.8)",
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
            }}
          >
            ⚠️ Strict Secrecy Rules
          </div>
          <div style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.8" }}>
            <div style={{ marginBottom: 8 }}>
              ❌ No minutes published
            </div>
            <div style={{ marginBottom: 8 }}>
              ❌ No media allowed
            </div>
            <div style={{ marginBottom: 8 }}>
              ❌ Chattel is forbidden
            </div>
            <div>
              ❌ Off-the-record discussions
            </div>
          </div>
        </div>
      </div>

      {/* 关键成员 */}
      <div
        style={{
          position: "absolute",
          top: "48%",
          left: "5%",
          width: "55%",
          opacity: membersOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
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
            }}
          >
            Key Members (Past & Present)
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {keyMembers.map((member, index) => (
              <div
                key={index}
                style={{
                  padding: "10px",
                  background: "rgba(13, 17, 23, 0.7)",
                  borderRadius: "6px",
                }}
              >
                <div style={{ fontSize: 14, color: "#ffd700", fontWeight: 600 }}>
                  {member.name}
                </div>
                <div style={{ fontSize: 12, color: "#9ca3af" }}>{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 讨论议题 */}
      <div
        style={{
          position: "absolute",
          top: "48%",
          right: "5%",
          width: "35%",
          opacity: agendaOpacity,
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "rgba(30, 58, 90, 0.85)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 16,
              color: "#ffd700",
              marginBottom: 14,
            }}
          >
            Discussion Topics
          </div>
          {topics.map((topic, index) => (
            <div
              key={index}
              style={{
                fontSize: 14,
                color: "#e8e8e8",
                marginBottom: 8,
                padding: "8px",
                background: "rgba(13, 17, 23, 0.6)",
                borderRadius: "4px",
                textAlign: "center",
              }}
            >
              {topic}
            </div>
          ))}
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
          "The Bilderberg Group is a secret conspiracy
          <br />
          of the most powerful people in the world."
        </div>
      </div>
    </AbsoluteFill>
  );
};
