/**
 * JamesConquersFranceScene.tsx
 *
 * Scene 11 (570-630s): James Rothschild Conquers France
 *
 * Shows how James de Rothschild established banking dominance in Paris
 * and controlled French government finances through bond manipulation
 *
 * Duration: 60 seconds (1800 frames) - but scene covers frames 17100-18900
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const JamesConquersFranceScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Bond price animation for the rescue scenario
  const getBondPrice = () => {
    if (frame < 900) return 55; // Crisis level
    return interpolate(frame, [900, 1200], [55, 95], { extrapolateRight: "clamp" });
  };

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* Background - Paris silhouette */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "35%",
          opacity: 0.15,
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1920 350" preserveAspectRatio="xMidYMax slice">
          {/* Arc de Triomphe */}
          <rect x="100" y="150" width="120" height="200" fill="#1a1a2e" />
          <rect x="120" y="100" width="80" height="50" fill="#1a1a2e" />
          <rect x="140" y="70" width="40" height="30" fill="#1a1a2e" />

          {/* Buildings */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <rect
              key={i}
              x={280 + i * 180}
              y={180 - (i % 2) * 40}
              width="120"
              height={170 + (i % 2) * 40}
              fill="#1e3a5a"
            />
          ))}

          {/* Eiffel Tower suggestion */}
          <rect x="1750" y="50" width="8" height="300" fill="#2d3748" />
          <rect x="1730" y="150" width="48" height="8" fill="#2d3748" />
          <rect x="1720" y="200" width="68" height="8" fill="#2d3748" />
          <rect x="1710" y="250" width="88" height="8" fill="#2d3748" />
        </svg>
      </div>

      {/* French flag colors accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #002395, #ffffff, #ed2939)",
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
              詹姆斯征服法兰西
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "18px",
                color: "#e8e8e8",
              }}
            >
              从拿破仑的敌人到法国的救星
            </p>
          </div>
        )}

        {/* Arrival in Paris (8-18s) */}
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
                    color: "#ffd700",
                    marginBottom: "30px",
                    fontWeight: 600,
                  }}
                >
                  詹姆斯在巴黎
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
                      background: "#002395",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "14px",
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    1812
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
                      抵达巴黎
                    </div>
                    <div
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af" }}
                    >
                      拿破仑统治末期，开设银行办事处
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
                      background: "#002395",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "14px",
                      color: "#fff",
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
                        color: "#e8e8e8",
                        marginBottom: "5px",
                        fontWeight: 600,
                      }}
                    >
                      拿破仑战败
                    </div>
                    <div
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af" }}
                    >
                      波旁王朝复辟，詹姆斯留驻巴黎
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
                    1824
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
                      查理十世登基
                    </div>
                    <div
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af" }}
                    >
                      危机来临，机会出现
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote box */}
              <div
                style={{
                  flex: 1,
                  background: "rgba(26, 26, 46, 0.95)",
                  border: "1px solid #002395",
                  borderRadius: "10px",
                  padding: "25px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "14px",
                    color: "#9ca3af",
                    marginBottom: "15px",
                    fontStyle: "italic",
                  }}
                >
                  "作为奥地利皇室的朋友，
                  <br />
                  我也是法国皇室的朋友"
                </div>
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "13px",
                    color: "#e8e8e8",
                    lineHeight: 1.7,
                  }}
                >
                  — 詹姆斯·德·罗斯柴尔德
                </div>
              </div>
            </div>
          </div>
        )}

        {/* The Crisis (18-30s) */}
        {frame >= 510 && frame < 900 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              opacity: interpolate(frame, [510, 540, 810, 900], [0, 1, 1, 0]),
            }}
          >
            <h3
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "24px",
                color: "#ef4444",
                textAlign: "center",
                marginBottom: "30px",
                fontWeight: 600,
              }}
            >
              法国政府债务危机
            </h3>

            {/* Crisis visualization */}
            <div
              style={{
                display: "flex",
                gap: "60px",
                alignItems: "center",
              }}
            >
              {/* Louis XVIII */}
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
                    position: "relative",
                  }}
                >
                  {/* Crown */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "50px",
                      height: "20px",
                      background: "#ffd700",
                      clipPath: "polygon(10% 100%, 0% 50%, 20% 0%, 50% 30%, 80% 0%, 100% 50%, 90% 100%)",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "15px",
                    color: "#e8e8e8",
                    marginBottom: "5px",
                  }}
                >
                  路易十八 / 查理十世
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#ef4444" }}
                >
                  急需资金
                </div>
              </div>

              {/* Arrow to problem */}
              <div
                style={{
                  flex: 1,
                  opacity: interpolate(frame, [630, 660], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div
                  style={{
                    background: "rgba(239, 68, 68, 0.1)",
                    border: "1px solid #ef4444",
                    borderRadius: "8px",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "14px",
                      color: "#ef4444",
                      marginBottom: "10px",
                      fontWeight: 600,
                    }}
                  >
                    政府债券崩盘
                  </div>
                  <div
                    style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#e8e8e8" }}
                  >
                    • 拿破仑战争留下巨额债务
                    <br />
                    • 投资者对法国失去信心
                    <br />
                    • 债券价格跌至面值55%
                  </div>
                </div>
              </div>
            </div>

            {/* Bond price chart */}
            <div
              style={{
                marginTop: "30px",
                opacity: interpolate(frame, [690, 720], [0, 1], { extrapolateRight: "clamp" }),
              }}
            >
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "13px",
                  color: "#9ca3af",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                法国债券价格 (面值100)
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100px",
                  background: "#1f2937",
                  borderRadius: "5px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Price bar */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: `${getBondPrice()}%`,
                    background: `linear-gradient(to top, #ef4444, #f87171)`,
                    transition: "height 0.5s",
                  }}
                />
                {/* Price label */}
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "24px",
                    color: "#ef4444",
                    fontWeight: 700,
                  }}
                >
                  {getBondPrice().toFixed(0)}%
                </div>
              </div>
            </div>
          </div>
        )}

        {/* The Rescue (30-50s) */}
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
                fontSize: "26px",
                color: "#ffd700",
                textAlign: "center",
                marginBottom: "35px",
                fontWeight: 600,
              }}
            >
              詹姆斯的"救援"
            </h3>

            {/* Three-step rescue plan */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "30px",
                marginBottom: "40px",
              }}
            >
              {/* Step 1 */}
              <div
                style={{
                  background: "rgba(26, 26, 46, 0.95)",
                  border: "1px solid #374151",
                  borderRadius: "10px",
                  padding: "25px",
                  opacity: interpolate(frame, [900, 930], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "#002395",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Cinzel', serif",
                    fontSize: "20px",
                    color: "#fff",
                    marginBottom: "15px",
                  }}
                >
                  1
                </div>
                <h4
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "15px",
                    color: "#e8e8e8",
                    marginBottom: "10px",
                    fontWeight: 600,
                  }}
                >
                  大举买入
                </h4>
                <p
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af", lineHeight: 1.6 }}
                >
                  詹姆斯在55%的价格大量收购法国政府债券
                </p>
              </div>

              {/* Step 2 */}
              <div
                style={{
                  background: "rgba(26, 26, 46, 0.95)",
                  border: "1px solid #374151",
                  borderRadius: "10px",
                  padding: "25px",
                  opacity: interpolate(frame, [960, 990], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "#002395",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Cinzel', serif",
                    fontSize: "20px",
                    color: "#fff",
                    marginBottom: "15px",
                  }}
                >
                  2
                </div>
                <h4
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "15px",
                    color: "#e8e8e8",
                    marginBottom: "10px",
                    fontWeight: 600,
                  }}
                >
                  稳定市场
                </h4>
                <p
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af", lineHeight: 1.6 }}
                >
                  展示信心，说服投资者跟随，价格回升
                </p>
              </div>

              {/* Step 3 */}
              <div
                style={{
                  background: "rgba(26, 26, 46, 0.95)",
                  border: "1px solid #ffd700",
                  borderRadius: "10px",
                  padding: "25px",
                  opacity: interpolate(frame, [1020, 1050], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "#ffd700",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Cinzel', serif",
                    fontSize: "20px",
                    color: "#0d1117",
                    marginBottom: "15px",
                  }}
                >
                  3
                </div>
                <h4
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "15px",
                    color: "#ffd700",
                    marginBottom: "10px",
                    fontWeight: 600,
                  }}
                >
                  获得回报
                </h4>
                <p
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af", lineHeight: 1.6 }}
                >
                  债券价格接近面值，利润翻倍
                </p>
              </div>
            </div>

            {/* Result */}
            <div
              style={{
                background: "rgba(255, 215, 0, 0.1)",
                border: "2px solid #ffd700",
                borderRadius: "10px",
                padding: "25px",
                textAlign: "center",
                opacity: interpolate(frame, [1080, 1110], [0, 1], { extrapolateRight: "clamp" }),
              }}
            >
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "16px",
                  color: "#ffd700",
                  marginBottom: "15px",
                  fontWeight: 600,
                }}
              >
                双重胜利
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "80px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "32px",
                      color: "#22c55e",
                      fontWeight: 700,
                    }}
                  >
                    +70%
                  </div>
                  <div
                    style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af" }}
                  >
                    投资回报
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "32px",
                      color: "#ffd700",
                      fontWeight: 700,
                    }}
                  >
                    御用
                  </div>
                  <div
                    style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af" }}
                  >
                    法国皇室银行家
                  </div>
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
              詹姆斯·德·罗斯柴尔德成为巴黎社交圈的宠儿，
              <br />
              <span style={{ color: "#ffd700" }}>罗斯柴尔德银行</span>
              成为法国政府的首选债权人
            </p>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

export default JamesConquersFranceScene;
