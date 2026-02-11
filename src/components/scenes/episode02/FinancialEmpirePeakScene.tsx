/**
 * FinancialEmpirePeakScene.tsx
 *
 * Scene 13 (690-750s): The Peak of the Financial Empire
 *
 * Shows the Rothschild family at the height of their power in the 19th century
 * controlling European finance and influencing world events
 *
 * Duration: 60 seconds (1800 frames) - but scene covers frames 20700-22500
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import EuropeanMap, { DEFAULT_CITIES } from "../../maps/EuropeanMap";

const FinancialEmpirePeakScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* European Map with full network */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.5,
        }}
      >
        <EuropeanMap
          cities={DEFAULT_CITIES}
          showLabels={true}
          showBrotherNames={false}
          markerSize={25}
          animationDelay={0}
          animationDuration={60}
          theme="documentary"
        />
      </div>

      {/* Golden overlay effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%)`,
          opacity: interpolate(frame, [0, 60], [0, 1], { extrapolateRight: "clamp" }),
        }}
      />

      {/* Content Layer */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Title (0-8s) */}
        {frame < 240 && (
          <div
            style={{
              position: "absolute",
              top: "8%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [0, 30, 180, 240], [0, 1, 1, 0]),
            }}
          >
            <h2
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "42px",
                color: "#ffd700",
                marginBottom: "15px",
                letterSpacing: "3px",
                textShadow: "0 0 40px rgba(255, 215, 0, 0.6)",
              }}
            >
              金融帝国全盛
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "20px",
                color: "#e8e8e8",
              }}
            >
              19世纪欧洲的无冕之王
            </p>
          </div>
        )}

        {/* Key statistics (8-25s) */}
        {frame >= 180 && frame < 750 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              opacity: interpolate(frame, [180, 210, 690, 750], [0, 1, 1, 0]),
            }}
          >
            {/* Stats grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "30px",
                maxWidth: "1000px",
                margin: "0 auto 40px",
              }}
            >
              {/* Stat 1 */}
              <div
                style={{
                  background: "rgba(26, 26, 46, 0.95)",
                  border: "2px solid #ffd700",
                  borderRadius: "12px",
                  padding: "25px",
                  textAlign: "center",
                  opacity: interpolate(frame, [210, 240], [0, 1], { extrapolateRight: "clamp" }),
                  transform: `scale(${interpolate(frame, [210, 240], [0.9, 1], { extrapolateRight: "clamp" })})`,
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "42px",
                    color: "#ffd700",
                    fontWeight: 700,
                    marginBottom: "10px",
                    textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
                  }}
                >
                  5
                </div>
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "14px",
                    color: "#e8e8e8",
                    marginBottom: "5px",
                  }}
                >
                  欧洲金融中心
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#9ca3af" }}
                >
                  法兰克福·伦敦·巴黎·维也纳·那不勒斯
                </div>
              </div>

              {/* Stat 2 */}
              <div
                style={{
                  background: "rgba(26, 26, 46, 0.95)",
                  border: "2px solid #ffd700",
                  borderRadius: "12px",
                  padding: "25px",
                  textAlign: "center",
                  opacity: interpolate(frame, [270, 300], [0, 1], { extrapolateRight: "clamp" }),
                  transform: `scale(${interpolate(frame, [270, 300], [0.9, 1], { extrapolateRight: "clamp" })})`,
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "42px",
                    color: "#ffd700",
                    fontWeight: 700,
                    marginBottom: "10px",
                    textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
                  }}
                >
                  50%
                </div>
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "14px",
                    color: "#e8e8e8",
                    marginBottom: "5px",
                  }}
                >
                  欧洲投资
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#9ca3af" }}
                >
                  控制欧洲一半的投资资本
                </div>
              </div>

              {/* Stat 3 */}
              <div
                style={{
                  background: "rgba(26, 26, 46, 0.95)",
                  border: "2px solid #ffd700",
                  borderRadius: "12px",
                  padding: "25px",
                  textAlign: "center",
                  opacity: interpolate(frame, [330, 360], [0, 1], { extrapolateRight: "clamp" }),
                  transform: `scale(${interpolate(frame, [330, 360], [0.9, 1], { extrapolateRight: "clamp" })})`,
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "42px",
                    color: "#ffd700",
                    fontWeight: 700,
                    marginBottom: "10px",
                    textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
                  }}
                >
                  100年
                </div>
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "14px",
                    color: "#e8e8e8",
                    marginBottom: "5px",
                  }}
                >
                  金融霸权
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#9ca3af" }}
                >
                  从拿破仑战争到一战前夕
                </div>
              </div>
            </div>

            {/* Governments served */}
            <div
              style={{
                maxWidth: "900px",
                margin: "0 auto",
                opacity: interpolate(frame, [390, 420], [0, 1], { extrapolateRight: "clamp" }),
              }}
            >
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "16px",
                  color: "#ffd700",
                  textAlign: "center",
                  marginBottom: "20px",
                  fontWeight: 600,
                }}
              >
                服务过的政府
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "15px",
                }}
              >
                {[
                  "英国",
                  "法国",
                  "奥地利",
                  "普鲁士",
                  "西班牙",
                  "葡萄牙",
                  "那不勒斯",
                  "教皇国",
                  "俄罗斯",
                  "巴西",
                ].map((country, index) => (
                  <div
                    key={country}
                    style={{
                      padding: "10px 20px",
                      background: "rgba(255, 215, 0, 0.1)",
                      border: "1px solid rgba(255, 215, 0, 0.3)",
                      borderRadius: "20px",
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "13px",
                      color: "#e8e8e8",
                      opacity: interpolate(
                        frame,
                        [420 + index * 15, 450 + index * 15],
                        [0, 1],
                        { extrapolateRight: "clamp" }
                      ),
                    }}
                  >
                    {country}
                  </div>
                ))}
              </div>
            </div>

            {/* Famous quote */}
            <div
              style={{
                maxWidth: "800px",
                margin: "40px auto 0",
                opacity: interpolate(frame, [570, 600], [0, 1], { extrapolateRight: "clamp" }),
              }}
            >
              <div
                style={{
                  background: "rgba(26, 26, 46, 0.95)",
                  border: "1px solid #ffd700",
                  borderRadius: "12px",
                  padding: "30px",
                }}
              >
                <div
                  style={{
                    fontSize: "50px",
                    color: "#ffd700",
                    opacity: 0.3,
                    fontFamily: "Georgia, serif",
                    position: "absolute",
                    top: "-10px",
                    left: "20px",
                  }}
                >
                  "
                </div>
                <p
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "18px",
                    color: "#e8e8e8",
                    lineHeight: 1.8,
                    fontStyle: "italic",
                  }}
                >
                  世界上有六大强国：英格兰、法兰西、普鲁士、奥地利、俄罗斯，
                  <span style={{ color: "#ffd700" }}>以及罗斯柴尔德家族</span>。
                  <br />—— 虽是虚构，却道出了真相
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Family wealth comparison (25-45s) */}
        {frame >= 720 && frame < 1350 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "85%",
              opacity: interpolate(frame, [720, 750], [0, 1], { extrapolateRight: "clamp" }),
            }}
          >
            <h3
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "22px",
                color: "#ffd700",
                textAlign: "center",
                marginBottom: "35px",
                fontWeight: 600,
              }}
            >
              财富对比：1850年代
            </h3>

            {/* Comparison visualization */}
            <div
              style={{
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              {/* Rothschild bar */}
              <div
                style={{
                  marginBottom: "25px",
                  opacity: interpolate(frame, [750, 780], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "14px",
                      color: "#ffd700",
                      fontWeight: 600,
                    }}
                  >
                    罗斯柴尔德家族
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "14px",
                      color: "#ffd700",
                    }}
                  >
                    £600万 (年收入)
                  </span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "30px",
                    background: "#1f2937",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${interpolate(frame, [780, 900], [0, 100], { extrapolateRight: "clamp" })}%`,
                      height: "100%",
                      background: "linear-gradient(90deg, #ffd700, #f0e68c)",
                      boxShadow: "0 0 20px rgba(255, 215, 0, 0.6)",
                    }}
                  />
                </div>
              </div>

              {/* Comparison bars */}
              {[
                { name: "英国王室年收入", value: 40, color: "#1e3a5a" },
                { name: "梵蒂冈年收入", value: 20, color: "#8b0000" },
                { name: "美国联邦预算", value: 60, color: "#3b82f6" },
              ].map((item, index) => (
                <div
                  key={item.name}
                  style={{
                    marginBottom: "20px",
                    opacity: interpolate(
                      frame,
                      [900 + index * 60, 930 + index * 60],
                      [0, 1],
                      { extrapolateRight: "clamp" }
                    ),
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "5px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Noto Sans SC', sans-serif",
                        fontSize: "12px",
                        color: "#9ca3af",
                      }}
                    >
                      {item.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "12px",
                        color: "#9ca3af",
                      }}
                    >
                      {item.value}%
                    </span>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "12px",
                      background: "#1f2937",
                      borderRadius: "3px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${item.value}%`,
                        height: "100%",
                        background: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div
              style={{
                marginTop: "25px",
                textAlign: "center",
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "13px",
                color: "#9ca3af",
                opacity: interpolate(frame, [1140, 1170], [0, 1], { extrapolateRight: "clamp" }),
              }}
            >
              罗斯柴尔德家族年收入超过许多国家的国家预算
            </div>
          </div>
        )}

        {/* Summary (45-60s) */}
        {frame >= 1320 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              maxWidth: "800px",
              opacity: interpolate(frame, [1320, 1350], [0, 1], { extrapolateRight: "clamp" }),
            }}
          >
            <div
              style={{
                background: "rgba(26, 26, 46, 0.95)",
                border: "2px solid #ffd700",
                borderRadius: "12px",
                padding: "35px",
                boxShadow: "0 8px 40px rgba(255, 215, 0, 0.3)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "20px",
                  color: "#ffd700",
                  marginBottom: "20px",
                  fontWeight: 600,
                }}
              >
                看不见的帝国
              </div>
              <p
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "16px",
                  color: "#e8e8e8",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                罗斯柴尔德家族不追求国王的头衔，
                <br />
                因为他们知道：控制金钱的人，
                <br />
                <span style={{ color: "#ffd700" }}>才是真正的统治者</span>
              </p>
              <div
                style={{
                  padding: "15px",
                  background: "rgba(139, 0, 0, 0.1)",
                  borderLeft: "3px solid #8b0000",
                  textAlign: "left",
                }}
              >
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af" }}
                >
                  "虽然我们没有国王的头衔，但我们的财富让我们成为真正的贵族。"
                  <br />
                  —— 梅耶·阿姆谢尔·罗斯柴尔德
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

export default FinancialEmpirePeakScene;
