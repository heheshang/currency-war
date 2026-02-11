/**
 * NathansLondonScene.tsx
 *
 * Scene 10 (510-570s): Nathan Rothschild Conquers London
 *
 * Shows how Nathan Rothschild established dominance over London's financial district
 * and controlled British government finances
 *
 * Duration: 60 seconds (1800 frames) - but scene covers frames 15300-17100
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const NathansLondonScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* Background - London skyline silhouette */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          opacity: 0.2,
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1920 400" preserveAspectRatio="xMidYMax slice">
          {/* St Paul's Cathedral dome */}
          <ellipse cx="300" cy="250" rx="120" ry="80" fill="#1a1a2e" />
          <rect x="180" y="250" width="240" height="150" fill="#1a1a2e" />

          {/* Buildings */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <rect
              key={i}
              x={500 + i * 150}
              y={200 - (i % 3) * 50}
              width="100"
              height={200 + (i % 3) * 50}
              fill="#1e3a5a"
            />
          ))}

          {/* Tower of London style building */}
          <rect x="1700" y="150" width="150" height="250" fill="#2d3748" />
          <polygon points="1775,80 1700,150 1850,150" fill="#2d3748" />
        </svg>
      </div>

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
              内森主宰伦敦金融城
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "18px",
                color: "#e8e8e8",
              }}
            >
              从新来者到英格兰银行的实际控制者
            </p>
          </div>
        )}

        {/* Arrival in London (8-18s) */}
        {frame >= 180 && frame < 540 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              opacity: interpolate(frame, [180, 210, 480, 540], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "60px",
                alignItems: "center",
              }}
            >
              {/* Timeline */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "22px",
                    color: "#1e3a5a",
                    marginBottom: "30px",
                    fontWeight: 600,
                  }}
                >
                  内森的崛起之路
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
                      background: "#1e3a5a",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "14px",
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    1798
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
                      抵达伦敦
                    </div>
                    <div
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af" }}
                    >
                      21岁的内森来到英国，开始纺织品贸易
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
                      background: "#1e3a5a",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "14px",
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    1809
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
                      创立 N.M. Rothschild
                    </div>
                    <div
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af" }}
                    >
                      在伦敦New Court设立银行总部
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
                    1815
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
                      滑铁卢战役
                    </div>
                    <div
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af" }}
                    >
                      一天之内赚取2000万英镑，确立金融霸主地位
                    </div>
                  </div>
                </div>
              </div>

              {/* Illustration */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Growing wealth visualization */}
                <div
                  style={{
                    position: "relative",
                    width: "200px",
                    height: "200px",
                  }}
                >
                  {/* Expanding circles */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        border: "2px solid #ffd700",
                        opacity: 0.2 - i * 0.04,
                        transform: `scale(${1 + i * 0.2})`,
                      }}
                    />
                  ))}
                  {/* Center icon */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background: "#ffd700",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "32px",
                      color: "#0d1117",
                      fontWeight: 700,
                    }}
                  >
                    £
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Government control (18-35s) */}
        {frame >= 510 && frame < 1050 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "85%",
              opacity: interpolate(frame, [510, 540, 990, 1050], [0, 1, 1, 0]),
            }}
          >
            <h3
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "24px",
                color: "#ffd700",
                textAlign: "center",
                marginBottom: "40px",
                fontWeight: 600,
              }}
            >
              控制英国政府财政
            </h3>

            {/* Connection diagram */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "80px",
                marginBottom: "40px",
              }}
            >
              {/* British Government */}
              <div
                style={{
                  textAlign: "center",
                  opacity: interpolate(frame, [570, 600], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "10px",
                    background: "#1e3a5a",
                    margin: "0 auto 15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 30px rgba(30, 58, 90, 0.5)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "14px",
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    英国<br />政府
                  </div>
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af" }}
                >
                  需要资金
                </div>
              </div>

              {/* Arrow */}
              <div
                style={{
                  opacity: interpolate(frame, [630, 660], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "3px",
                    background: `linear-gradient(90deg, #1e3a5a, #ffd700)`,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: "-10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 0,
                      height: 0,
                      borderTop: "8px solid transparent",
                      borderBottom: "8px solid transparent",
                      borderLeft: "15px solid #ffd700",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "14px",
                    color: "#ffd700",
                    textAlign: "center",
                    marginTop: "8px",
                  }}
                >
                  借贷
                </div>
              </div>

              {/* N.M. Rothschild */}
              <div
                style={{
                  textAlign: "center",
                  opacity: interpolate(frame, [690, 720], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "10px",
                    background: "#ffd700",
                    margin: "0 auto 15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 40px rgba(255, 215, 0, 0.6)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "12px",
                      color: "#0d1117",
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    N.M.<br />Rothschild
                  </div>
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#ffd700" }}
                >
                  提供资金
                </div>
              </div>
            </div>

            {/* Key facts */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  background: "rgba(26, 26, 46, 0.9)",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  padding: "20px",
                  textAlign: "center",
                  opacity: interpolate(frame, [750, 780], [0, 1], { extrapolateRight: "clamp" }),
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
                  50%
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#9ca3af" }}
                >
                  政府债券由罗家承销
                </div>
              </div>

              <div
                style={{
                  background: "rgba(26, 26, 46, 0.9)",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  padding: "20px",
                  textAlign: "center",
                  opacity: interpolate(frame, [810, 840], [0, 1], { extrapolateRight: "clamp" }),
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
                  伦敦金融城首富
                </div>
              </div>

              <div
                style={{
                  background: "rgba(26, 26, 46, 0.9)",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  padding: "20px",
                  textAlign: "center",
                  opacity: interpolate(frame, [870, 900], [0, 1], { extrapolateRight: "clamp" }),
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
                  £100M
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#9ca3af" }}
                >
                  个人财富(1820年代)
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Summary (35-60s) */}
        {frame >= 1020 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              maxWidth: "800px",
              opacity: interpolate(frame, [1020, 1050], [0, 1], { extrapolateRight: "clamp" }),
            }}
          >
            <div
              style={{
                background: "rgba(26, 26, 46, 0.95)",
                border: "2px solid #ffd700",
                borderRadius: "12px",
                padding: "40px",
                boxShadow: "0 8px 40px rgba(255, 215, 0, 0.3)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "20px",
                  color: "#e8e8e8",
                  marginBottom: "20px",
                  lineHeight: 1.8,
                }}
              >
                内森·罗斯柴尔德的名言：
              </div>
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "24px",
                  color: "#ffd700",
                  fontStyle: "italic",
                  lineHeight: 1.8,
                  marginBottom: "25px",
                }}
              >
                "我不在乎什么样的英格兰政府掌权，
                <br />
                只要让我控制英国的货币。"
              </div>
              <div
                style={{
                  padding: "15px",
                  background: "rgba(139, 0, 0, 0.1)",
                  borderLeft: "3px solid #8b0000",
                  textAlign: "left",
                }}
              >
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "14px", color: "#9ca3af" }}
                >
                  事实上，直到今天，Rothschild & Co 仍然是英国政府债务的主要管理者之一
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

export default NathansLondonScene;
