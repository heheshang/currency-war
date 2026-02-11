/**
 * SalomonInAustriaScene.tsx
 *
 * Scene 12 (630-690s): Salomon Rothschild in Austria
 *
 * Shows how Salomon established banking dominance in Vienna
 * and became the financier to the Habsburg monarchy
 *
 * Duration: 60 seconds (1800 frames) - but scene covers frames 18900-20700
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const SalomonInAustriaScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* Background - Vienna/Habsburg silhouette */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          opacity: 0.15,
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1920 400" preserveAspectRatio="xMidYMax slice">
          {/* Hofburg Palace suggestion */}
          <rect x="200" y="200" width="300" height="200" fill="#1a1a2e" />
          <rect x="150" y="150" width="400" height="50" fill="#1a1a2e" />
          <polygon points="350,80 250,150 450,150" fill="#1a1a2e" />

          {/* Austrian imperial buildings */}
          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={i}
              x={600 + i * 200}
              y={220 - (i % 2) * 40}
              width="140"
              height="180"
              fill="#1e3a5a"
            />
          ))}

          {/* St. Stephen's Cathedral suggestion */}
          <polygon points="1700,100 1600,350 1800,350" fill="#2d3748" />
        </svg>
      </div>

      {/* Austrian imperial colors accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #ed1c24, #ffffff)",
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
                fontSize: "38px",
                color: "#ffd700",
                marginBottom: "10px",
                letterSpacing: "2px",
                textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
              }}
            >
              所罗门问鼎奥地利
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "18px",
                color: "#e8e8e8",
              }}
            >
              哈布斯堡王朝的御用银行家
            </p>
          </div>
        )}

        {/* Arrival in Vienna (8-18s) */}
        {frame >= 180 && frame < 540 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "85%",
              opacity: interpolate(frame, [180, 210, 480, 540], [0, 1, 1, 0]),
            }}
          >
            <div style={{ display: "flex", gap: "80px", alignItems: "center" }}>
              {/* Timeline */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "22px",
                    color: "#ed1c24",
                    marginBottom: "30px",
                    fontWeight: 600,
                  }}
                >
                  所罗门在维也纳
                </h3>

                {/* Milestone 1 */}
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    marginBottom: "25px",
                    opacity: interpolate(frame, [210, 240], [0, 1], { extrapolateRight: "clamp" }),
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "#ed1c24",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "14px",
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    1820
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Noto Sans SC', sans-serif",
                        fontSize: "15px",
                        color: "#e8e8e8",
                        marginBottom: "5px",
                        fontWeight: 600,
                      }}
                    >
                      抵达维也纳
                    </div>
                    <div
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af" }}
                    >
                      在维也纳开设办事处
                    </div>
                  </div>
                </div>

                {/* Milestone 2 */}
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    marginBottom: "25px",
                    opacity: interpolate(frame, [270, 300], [0, 1], { extrapolateRight: "clamp" }),
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "#ed1c24",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "14px",
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    1822
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Noto Sans SC', sans-serif",
                        fontSize: "15px",
                        color: "#e8e8e8",
                        marginBottom: "5px",
                        fontWeight: 600,
                      }}
                    >
                      结识梅特涅
                    </div>
                    <div
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af" }}
                    >
                      奥地利宰相兼外相
                    </div>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    opacity: interpolate(frame, [330, 360], [0, 1], { extrapolateRight: "clamp" }),
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "#ffd700",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "14px",
                      color: "#0d1117",
                      flexShrink: 0,
                    }}
                  >
                    1830s
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Noto Sans SC', sans-serif",
                        fontSize: "15px",
                        color: "#ffd700",
                        marginBottom: "5px",
                        fontWeight: 600,
                      }}
                    >
                      哈布斯堡御用
                    </div>
                    <div
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af" }}
                    >
                      皇帝弗兰茨二世的银行家
                    </div>
                  </div>
                </div>
              </div>

              {/* Austria info box */}
              <div
                style={{
                  flex: 1,
                  background: "rgba(26, 26, 46, 0.95)",
                  border: "1px solid #ed1c24",
                  borderRadius: "10px",
                  padding: "25px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "16px",
                    color: "#ed1c24",
                    marginBottom: "15px",
                    fontWeight: 600,
                  }}
                >
                  维也纳：帝国心脏
                </div>
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "13px",
                    color: "#e8e8e8",
                    lineHeight: 1.8,
                    marginBottom: "15px",
                  }}
                >
                  神圣罗马帝国的首都，欧洲政治中心。
                  梅特涅亲王主导"欧洲协调"体系。
                </div>
                <div
                  style={{
                    padding: "12px",
                    background: "rgba(237, 28, 36, 0.1)",
                    borderLeft: "3px solid #ed1c24",
                  }}
                >
                  <div
                    style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#9ca3af" }}
                  >
                    挑战：维也纳社会保守，对犹太商人持怀疑态度
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* The Metternich Connection (18-30s) */}
        {frame >= 510 && frame < 900 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "85%",
              opacity: interpolate(frame, [510, 540, 810, 900], [0, 1, 1, 0]),
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
              梅特涅亲王的信任
            </h3>

            {/* Two figures */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "100px",
                marginBottom: "40px",
              }}
            >
              {/* Salomon */}
              <div
                style={{
                  textAlign: "center",
                  opacity: interpolate(frame, [570, 600], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "150px",
                    background: "#1f2937",
                    borderRadius: "50% 50% 0 0",
                    margin: "0 auto 15px",
                  }}
                />
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "16px",
                    color: "#e8e8e8",
                    marginBottom: "5px",
                  }}
                >
                  所罗门
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af" }}
                >
                  罗斯柴尔德兄弟
                </div>
              </div>

              {/* Connection */}
              <div
                style={{
                  opacity: interpolate(frame, [630, 660], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "2px",
                    background: "#ffd700",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: `${interpolate(frame, [660, 780], [0, 100], { extrapolateRight: "clamp" })}%`,
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#ffd700",
                      boxShadow: "0 0 10px rgba(255, 215, 0, 0.8)",
                    }}
                  />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "12px",
                    color: "#ffd700",
                    marginTop: "8px",
                  }}
                >
                  战略联盟
                </div>
              </div>

              {/* Metternich */}
              <div
                style={{
                  textAlign: "center",
                  opacity: interpolate(frame, [690, 720], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "150px",
                    background: "#1e3a5a",
                    borderRadius: "50% 50% 0 0",
                    margin: "0 auto 15px",
                    position: "relative",
                  }}
                >
                  {/* Diplomatic sash */}
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "30px",
                      height: "80px",
                      background: "#ed1c24",
                      borderRadius: "15px",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "16px",
                    color: "#ffd700",
                    marginBottom: "5px",
                  }}
                >
                  梅特涅亲王
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af" }}
                >
                  奥地利宰相
                </div>
              </div>
            </div>

            {/* Benefits to both */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "30px",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  background: "rgba(26, 26, 46, 0.9)",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  padding: "20px",
                  opacity: interpolate(frame, [750, 780], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "14px",
                    color: "#ed1c24",
                    marginBottom: "10px",
                    fontWeight: 600,
                  }}
                >
                  梅特涅获得
                </div>
                <div style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#e8e8e8", lineHeight: 1.6 }}>
                  • 快速融资渠道<br />
                  • 欧洲情报网络<br />
                  • 外交影响力
                </div>
              </div>

              <div
                style={{
                  background: "rgba(26, 26, 46, 0.9)",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  padding: "20px",
                  opacity: interpolate(frame, [810, 840], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "14px",
                    color: "#ffd700",
                    marginBottom: "10px",
                    fontWeight: 600,
                  }}
                >
                  所罗门获得
                </div>
                <div style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#e8e8e8", lineHeight: 1.6 }}>
                  • 进入维也纳社会<br />
                  • 皇室银行业务<br />
                  • 铁路建设特权
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Imperial Banking Dominance (30-50s) */}
        {frame >= 870 && frame < 1500 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "85%",
              opacity: interpolate(frame, [870, 900], [0, 1], { extrapolateRight: "clamp" }),
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
              奥地利铁路帝国
            </h3>

            {/* Railway map visualization */}
            <div
              style={{
                position: "relative",
                height: "180px",
                marginBottom: "30px",
                opacity: interpolate(frame, [900, 930], [0, 1], { extrapolateRight: "clamp" }),
              }}
            >
              {/* Simplified Austria-Hungary map */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 800 180"
                style={{ opacity: 0.6 }}
              >
                {/* Land */}
                <rect x="0" y="0" width="800" height="180" fill="#1a1a2e" />

                {/* Railway lines appearing */}
                <line
                  x1="100"
                  y1="90"
                  x2={interpolate(frame, [930, 1050], [100, 400], { extrapolateRight: "clamp" })}
                  y2="90"
                  stroke="#ffd700"
                  strokeWidth="3"
                  strokeDasharray="10,5"
                />
                <line
                  x1="400"
                  y1="90"
                  x2={interpolate(frame, [1050, 1170], [400, 700], { extrapolateRight: "clamp" })}
                  y2="60"
                  stroke="#ffd700"
                  strokeWidth="3"
                  strokeDasharray="10,5"
                />
                <line
                  x1="400"
                  y1="90"
                  x2={interpolate(frame, [1050, 1170], [400, 700], { extrapolateRight: "clamp" })}
                  y2="120"
                  stroke="#ffd700"
                  strokeWidth="3"
                  strokeDasharray="10,5"
                />

                {/* Cities */}
                <circle cx="400" cy="90" r="8" fill="#ed1c24" />
                <text
                  x="400"
                  y="115"
                  fill="#fff"
                  fontSize="14"
                  textAnchor="middle"
                  fontFamily="'Noto Sans SC', sans-serif"
                >
                  维也纳
                </text>

                {/* Vienna label */}
                <text
                  x="400"
                  y="150"
                  fill="#ffd700"
                  fontSize="12"
                  textAnchor="middle"
                  fontFamily="'Noto Sans SC', sans-serif"
                >
                  铁路网络中心
                </text>
              </svg>
            </div>

            {/* Key achievements */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "25px",
              }}
            >
              <div
                style={{
                  background: "rgba(26, 26, 46, 0.95)",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  padding: "20px",
                  textAlign: "center",
                  opacity: interpolate(frame, [1200, 1230], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "28px",
                    color: "#ffd700",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  1000km
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#9ca3af" }}
                >
                  建设铁路里程
                </div>
              </div>

              <div
                style={{
                  background: "rgba(26, 26, 46, 0.95)",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  padding: "20px",
                  textAlign: "center",
                  opacity: interpolate(frame, [1260, 1290], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "28px",
                    color: "#ffd700",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  No.1
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#9ca3af" }}
                >
                  帝国最大银行
                </div>
              </div>

              <div
                style={{
                  background: "rgba(26, 26, 46, 0.95)",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  padding: "20px",
                  textAlign: "center",
                  opacity: interpolate(frame, [1320, 1350], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "28px",
                    color: "#ffd700",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                  >
                  男爵
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#9ca3af" }}
                >
                  获得贵族头衔
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Summary (50-60s) */}
        {frame >= 1470 && (
          <div
            style={{
              position: "absolute",
              bottom: "15%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [1470, 1500], [0, 1], { extrapolateRight: "clamp" }),
            }}
          >
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "22px",
                color: "#e8e8e8",
                maxWidth: "700px",
                margin: "0 auto",
                fontStyle: "italic",
              }}
            >
              所罗门将罗斯柴尔德的影响力深入中欧，
              <br />
              <span style={{ color: "#ffd700" }}>维也纳银行</span>
              成为哈布斯堡帝国金融的支柱
            </p>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

export default SalomonInAustriaScene;
