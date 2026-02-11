/**
 * Episode02SummaryScene.tsx
 *
 * Scene 14 (750-780s): Episode 02 Summary
 *
 * Concludes the episode with key takeaways and preview of next episode
 *
 * Duration: 30 seconds (900 frames) - but scene covers frames 22500-23400
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const Episode02SummaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* Animated background - subtle particles */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.3,
        }}
      >
        {Array.from({ length: 30 }).map((_, i) => {
          // Use deterministic positions based on index
          const left = (i * 37) % 100;
          const top = (i * 53) % 100;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${left}%`,
                top: `${top}%`,
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: "#ffd700",
                opacity: interpolate(
                  frame + i * 30,
                  [0, 450, 900],
                  [0, 0.8, 0],
                  { extrapolateRight: "clamp" }
                ),
                transform: `translateY(${interpolate(frame, [0, 900], [0, -200], {
                  extrapolateRight: "clamp",
                })}px)`,
              }}
            />
          );
        })}
      </div>

      {/* Content Layer */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Episode End Title */}
        {frame < 150 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              opacity: interpolate(frame, [0, 30, 90, 150], [0, 1, 1, 0]),
            }}
          >
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "36px",
                color: "#ffd700",
                marginBottom: "15px",
                letterSpacing: "3px",
                textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
              }}
            >
              第二集 完
            </h2>
            <div
              style={{
                width: "100px",
                height: "2px",
                background: "#ffd700",
                margin: "0 auto",
              }}
            />
          </div>
        )}

        {/* Key Takeaways */}
        {frame >= 120 && frame < 540 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "85%",
              opacity: interpolate(frame, [120, 150, 480, 540], [0, 1, 1, 0]),
            }}
          >
            <h3
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "24px",
                color: "#ffd700",
                textAlign: "center",
                marginBottom: "30px",
                fontWeight: 600,
              }}
            >
              本集要点
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "25px",
                maxWidth: "900px",
                margin: "0 auto",
              }}
            >
              {[
                {
                  title: "隐形财富",
                  text: "罗斯柴尔德家族的真实财富远超现代世界首富",
                  delay: 150,
                },
                {
                  title: "情报优势",
                  text: "建立欧洲最快的情报网络，先人一步获取信息",
                  delay: 210,
                },
                {
                  title: "滑铁卢战役",
                  text: "利用假消息赚取20倍收益，奠定金融霸主地位",
                  delay: 270,
                },
                {
                  title: "五兄弟帝国",
                  text: "在欧洲五大金融中心同时运营，实现跨国统治",
                  delay: 330,
                },
                {
                  title: "控制政府",
                  text: "成为多国皇室御用银行家，影响国家政策",
                  delay: 390,
                },
                {
                  title: "家族传承",
                  text: "梅耶的智慧：团结、信任、血脉维系权力",
                  delay: 450,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "rgba(26, 26, 46, 0.95)",
                    border: "1px solid #374151",
                    borderRadius: "10px",
                    padding: "20px",
                    opacity: interpolate(
                      frame,
                      [item.delay, item.delay + 30],
                      [0, 1],
                      { extrapolateRight: "clamp" }
                    ),
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "14px",
                      color: "#ffd700",
                      marginBottom: "8px",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "13px",
                      color: "#e8e8e8",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* The Family Will */}
        {frame >= 510 && frame < 720 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              opacity: interpolate(frame, [510, 540, 660, 720], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                background: "rgba(26, 26, 46, 0.98)",
                border: "2px solid #ffd700",
                borderRadius: "12px",
                padding: "35px",
                boxShadow: "0 8px 40px rgba(255, 215, 0, 0.3)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "18px",
                  color: "#ffd700",
                  textAlign: "center",
                  marginBottom: "20px",
                  fontWeight: 600,
                }}
              >
                家族遗嘱的核心原则
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "40px",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { icon: "🤝", text: "所有关键职位由家族成员担任" },
                  { icon: "💰", text: "财富只在男性后代中传承" },
                  { icon: "🔒", text: "家族内部通婚保持血统纯正" },
                  { icon: "📊", text: "所有业务合并统一管理" },
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      textAlign: "center",
                      opacity: interpolate(frame, [540 + index * 30, 570 + index * 30], [0, 1], {
                        extrapolateRight: "clamp",
                      }),
                    }}
                  >
                    <div style={{ fontSize: "32px", marginBottom: "8px" }}>{item.icon}</div>
                    <div
                      style={{
                        fontFamily: "'Noto Sans SC', sans-serif",
                        fontSize: "13px",
                        color: "#e8e8e8",
                      }}
                    >
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Next Episode Preview */}
        {frame >= 690 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              opacity: interpolate(frame, [690, 720], [0, 1], { extrapolateRight: "clamp" }),
            }}
          >
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "16px",
                color: "#9ca3af",
                marginBottom: "15px",
                letterSpacing: "2px",
              }}
            >
              下集预告
            </div>

            <h3
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "32px",
                color: "#ffd700",
                marginBottom: "20px",
                fontWeight: 600,
              }}
            >
              第三集：百年战争
            </h3>

            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "16px",
                color: "#e8e8e8",
                maxWidth: "600px",
                margin: "0 auto 25px",
                lineHeight: 1.7,
              }}
            >
              从殖民地货币到林肯遇刺——
              <br />
              国际银行家与美国总统的货币发行权争夺战
              <br />
              <span style={{ color: "#ffd700" }}>七位总统因此遇刺</span>
            </p>

            <div
              style={{
                padding: "15px 30px",
                background: "rgba(139, 0, 0, 0.2)",
                border: "1px solid #8b0000",
                borderRadius: "5px",
                display: "inline-block",
              }}
            >
              <span
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "14px",
                  color: "#ef4444",
                }}
              >
                "我有两个最大的敌人：南方的军队，还有背后的金融机构"
              </span>
            </div>

            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "13px",
                color: "#9ca3af",
                marginTop: "15px",
                fontStyle: "italic",
                textAlign: "center",
              }}
            >
              —— 亚伯拉罕·林肯，1864年
            </div>
          </div>
        )}

        {/* End credits */}
        {frame >= 810 && (
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [810, 840], [0, 1], { extrapolateRight: "clamp" }),
            }}
          >
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "12px",
                color: "#6b7280",
              }}
            >
              基于《货币战争》一书制作
            </div>
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "12px",
                color: "#6b7280",
                marginTop: "5px",
              }}
            >
              货币战争系列纪录片 · Episode 02
            </div>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

export default Episode02SummaryScene;
