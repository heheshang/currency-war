/**
 * MayersFirstFortuneScene.tsx
 *
 * Scene 9 (450-510s): Mayer Amschel Rothschild's First Fortune
 *
 * Tells the story of how Mayer Rothschild built his initial fortune
 * through coin dealing and connection with Prince William of Hesse
 *
 * Duration: 60 seconds (1800 frames) - but scene covers frames 13500-15300
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const MayersFirstFortuneScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* Background - Coin texture effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at center, #1a1a2e 0%, #0d1117 100%)`,
        }}
      >
        {/* Floating coin silhouettes */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${10 + (i * 6)}%`,
              top: `${10 + ((i * 7) % 80)}%`,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: `2px solid rgba(255, 215, 0, ${0.05 + (i % 3) * 0.03})`,
              transform: `rotate(${frame * 0.1 + i * 30}deg)`,
            }}
          />
        ))}
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
              梅耶·罗斯柴尔德的第一桶金
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "18px",
                color: "#e8e8e8",
              }}
            >
              从古钱币商到皇室银行家
            </p>
          </div>
        )}

        {/* Early life - Coin shop (8-20s) */}
        {frame >= 180 && frame < 600 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              opacity: interpolate(frame, [180, 210, 540, 600], [0, 1, 1, 0]),
            }}
          >
            {/* Coin shop illustration */}
            <div
              style={{
                position: "absolute",
                right: "15%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {/* Stack of coins */}
              {Array.from({ length: 5 }).map((_, row) => (
                <div key={row} style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                  {Array.from({ length: 8 - row }).map((_, col) => (
                    <div
                      key={col}
                      style={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, #ffd700, #b8860b)`,
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                        opacity: interpolate(frame, [210 + row * 30, 240 + row * 30], [0, 1], {
                          extrapolateRight: "clamp",
                        }),
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Text content */}
            <div
              style={{
                position: "absolute",
                left: "10%",
                top: "50%",
                transform: "translateY(-50%)",
                width: "45%",
              }}
            >
              <div
                style={{
                  background: "rgba(26, 26, 46, 0.95)",
                  border: "1px solid #ffd700",
                  borderRadius: "10px",
                  padding: "30px",
                  boxShadow: "0 4px 30px rgba(255, 215, 0, 0.2)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "20px",
                    color: "#ffd700",
                    marginBottom: "20px",
                    fontWeight: 600,
                  }}
                >
                  法兰克福的犹太区
                </h3>
                <p
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "15px",
                    color: "#e8e8e8",
                    lineHeight: 1.8,
                    marginBottom: "15px",
                  }}
                >
                  1744年，梅耶·阿姆谢尔·罗斯柴尔德出生于法兰克福犹太区。
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "15px",
                    color: "#e8e8e8",
                    lineHeight: 1.8,
                    marginBottom: "15px",
                  }}
                >
                  他从古钱币生意起家，凭借专业知识和诚信声誉，
                  逐渐吸引了贵族客户。
                </p>
                <div
                  style={{
                    marginTop: "20px",
                    padding: "15px",
                    background: "rgba(255, 215, 0, 0.1)",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#ffd700" }}
                  >
                    优势：独家渠道收集稀有硬币
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Prince William connection (20-35s) */}
        {frame >= 540 && frame < 1050 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              opacity: interpolate(frame, [540, 570, 990, 1050], [0, 1, 1, 0]),
            }}
          >
            {/* Two figures - Mayer and Prince William */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "150px",
                marginBottom: "40px",
              }}
            >
              {/* Mayer */}
              <div
                style={{
                  textAlign: "center",
                  opacity: interpolate(frame, [600, 630], [0, 1], { extrapolateRight: "clamp" }),
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
                  {/* Hat */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "60px",
                      height: "30px",
                      background: "#2d3748",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "16px",
                    color: "#e8e8e8",
                    marginBottom: "5px",
                  }}
                >
                  梅耶·罗斯柴尔德
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af" }}
                >
                  古钱币商
                </div>
              </div>

              {/* Connection arrow */}
              <div
                style={{
                  opacity: interpolate(frame, [660, 690], [0, 1], { extrapolateRight: "clamp" }),
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
                  {/* Animated dots */}
                  <div
                    style={{
                      position: "absolute",
                      left: `${interpolate(frame, [690, 810], [0, 100], { extrapolateRight: "clamp" })}%`,
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
                    marginTop: "5px",
                  }}
                >
                  信任建立
                </div>
              </div>

              {/* Prince William */}
              <div
                style={{
                  textAlign: "center",
                  opacity: interpolate(frame, [720, 750], [0, 1], { extrapolateRight: "clamp" }),
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
                  {/* Crown */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-25px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "50px",
                      height: "25px",
                      background: "#ffd700",
                      clipPath: "polygon(10% 100%, 0% 50%, 20% 0%, 50% 30%, 80% 0%, 100% 50%, 90% 100%)",
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
                  威廉九世
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af" }}
                >
                  黑森-卡塞尔领主
                </div>
              </div>
            </div>

            {/* Deal description */}
            <div
              style={{
                maxWidth: "700px",
                margin: "0 auto",
                background: "rgba(26, 26, 46, 0.95)",
                border: "1px solid #1e3a5a",
                borderRadius: "10px",
                padding: "25px",
                opacity: interpolate(frame, [810, 840], [0, 1], { extrapolateRight: "clamp" }),
              }}
            >
              <h4
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "16px",
                  color: "#1e3a5a",
                  marginBottom: "15px",
                  fontWeight: 600,
                }}
              >
                历史性的委托
              </h4>
              <p
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "14px",
                  color: "#e8e8e8",
                  lineHeight: 1.7,
                  marginBottom: "15px",
                }}
              >
                拿破仑战争期间，威廉王子需要安全的地方存放财富。
                梅耶成为他的御用银行家，负责管理巨额资产。
              </p>
              <div
                style={{
                  padding: "12px",
                  background: "rgba(139, 0, 0, 0.1)",
                  borderLeft: "3px solid #8b0000",
                }}
              >
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#e8e8e8" }}
                >
                  <span style={{ color: "#ffd700" }}>关键：</span>
                  当威廉王子逃亡时，梅耶获得了这笔巨款的实际控制权
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fortune reveal (35-50s) */}
        {frame >= 990 && frame < 1500 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              width: "100%",
            }}
          >
            {/* Fortune counter */}
            <div
              style={{
                opacity: interpolate(frame, [990, 1020], [0, 1], { extrapolateRight: "clamp" }),
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
                委托管理的财富
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "72px",
                  fontWeight: 700,
                  color: "#ffd700",
                  textShadow: "0 0 40px rgba(255, 215, 0, 0.6)",
                }}
              >
                £{interpolate(frame, [1020, 1140], [0, 300], { extrapolateRight: "clamp" }).toFixed(0)}万
              </div>
            </div>

            {/* Breakdown */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "60px",
                marginTop: "50px",
                opacity: interpolate(frame, [1140, 1170], [0, 1], { extrapolateRight: "clamp" }),
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "36px",
                    color: "#e8e8e8",
                    fontWeight: 600,
                  }}
                >
                  £200万
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af" }}
                >
                  英国政府债券
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "36px",
                    color: "#e8e8e8",
                    fontWeight: 600,
                  }}
                >
                  £100万
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "13px", color: "#9ca3af" }}
                >
                  现金与黄金
                </div>
              </div>
            </div>

            {/* Strategic move */}
            <div
              style={{
                marginTop: "50px",
                maxWidth: "600px",
                margin: "50px auto 0",
                opacity: interpolate(frame, [1260, 1290], [0, 1], { extrapolateRight: "clamp" }),
              }}
            >
              <div
                style={{
                  background: "rgba(26, 26, 46, 0.95)",
                  border: "1px solid #ffd700",
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "15px",
                    color: "#ffd700",
                    marginBottom: "10px",
                    fontWeight: 600,
                  }}
                >
                  梅耶的战略举措
                </div>
                <p
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "14px",
                    color: "#e8e8e8",
                    lineHeight: 1.6,
                  }}
                >
                  他将这笔资金派往五个儿子即将建立银行的五个欧洲城市，
                  成为罗斯柴尔德金融帝国的启动资本。
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Summary (50-60s) */}
        {frame >= 1500 && (
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [1500, 1530], [0, 1], { extrapolateRight: "clamp" }),
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
              从古钱币商的小店起步，
              <br />
              梅耶为他的五个儿子铺就了征服欧洲金融的道路
            </p>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

export default MayersFirstFortuneScene;
