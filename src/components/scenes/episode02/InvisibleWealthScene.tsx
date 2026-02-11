/**
 * InvisibleWealthScene.tsx
 *
 * Scene 1 (0-30s): Opening scene - "The Invisible Wealth of the World"
 *
 * Visualizes the Rothschild family's wealth compared to modern billionaires
 * Features dramatic number animation and silhouette reveal
 *
 * Duration: 30 seconds (900 frames)
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const InvisibleWealthScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* Layer 1: Episode Title (0-5s) */}
      {frame < 150 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: interpolate(frame, [0, 30, 120, 150], [0, 1, 1, 0], {
              extrapolateRight: "clamp",
            }),
          }}
        >
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "48px",
              color: "#ffd700",
              marginBottom: "20px",
              letterSpacing: "4px",
              textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
            }}
          >
            Episode 2
          </div>
          <div
            style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              fontSize: "36px",
              color: "#e8e8e8",
              textAlign: "center",
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            罗斯柴尔德家族
          </div>
          <div
            style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              fontSize: "28px",
              color: "#9ca3af",
              marginTop: "15px",
              fontStyle: "italic",
            }}
          >
            "大道无形"的世界首富
          </div>
        </div>
      )}

      {/* Layer 2: Mayer's Quote (5-12s) */}
      {frame >= 120 && frame < 360 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 15%",
            opacity: interpolate(frame, [120, 150, 300, 360], [0, 1, 1, 0]),
          }}
        >
          <div
            style={{
              fontSize: "80px",
              color: "#ffd700",
              opacity: 0.2,
              fontFamily: "Georgia, serif",
              position: "absolute",
              top: "20%",
              left: "10%",
            }}
          >
            "
          </div>

          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "36px",
              color: "#e8e8e8",
              textAlign: "center",
              fontStyle: "italic",
              lineHeight: 1.6,
              marginBottom: "30px",
            }}
          >
            "Give me control of a nation's money,
            <br />
            and I care not who makes its laws."
          </h2>

          <p
            style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              fontSize: "24px",
              color: "#ffd700",
              opacity: 0.9,
            }}
          >
            "让我控制一个国家的货币，
            <br />
            我不在乎谁制定法律。"
          </p>

          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "18px",
              color: "#ffd700",
              marginTop: "30px",
              letterSpacing: "1px",
            }}
          >
            — Mayer Amschel Rothschild
          </div>
        </div>
      )}

      {/* Layer 3: Wealth Comparison (12-30s) */}
      {frame >= 300 && (
        <AbsoluteFill>
          {/* Modern Billionaires Comparison */}
          <div
            style={{
              position: "absolute",
              top: "15%",
              left: "0",
              right: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: interpolate(frame, [300, 330], [0, 1], { extrapolateRight: "clamp" }),
            }}
          >
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "16px",
                color: "#9ca3af",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              2010年代 世界首富对比
            </div>

            <div
              style={{
                display: "flex",
                gap: "60px",
                alignItems: "flex-end",
              }}
            >
              {/* Bill Gates */}
              <div
                style={{
                  textAlign: "center",
                  opacity: interpolate(frame, [330, 360], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "120px",
                    background: "#1f2937",
                    borderRadius: "8px",
                    margin: "0 auto 15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "#3b82f6",
                    }}
                  />
                </div>
                <div style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "14px", color: "#9ca3af" }}>
                  比尔·盖茨
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "20px",
                    color: "#e8e8e8",
                    marginTop: "5px",
                  }}
                >
                  $500亿
                </div>
              </div>

              {/* Elon Musk */}
              <div
                style={{
                  textAlign: "center",
                  opacity: interpolate(frame, [360, 390], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "150px",
                    background: "#1f2937",
                    borderRadius: "8px",
                    margin: "0 auto 15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "#ef4444",
                    }}
                  />
                </div>
                <div style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "14px", color: "#9ca3af" }}>
                  埃隆·马斯克
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "20px",
                    color: "#e8e8e8",
                    marginTop: "5px",
                  }}
                >
                  $2000亿
                </div>
              </div>
            </div>
          </div>

          {/* Rothschild Wealth Counter */}
          <div
            style={{
              position: "absolute",
              bottom: "15%",
              left: "0",
              right: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: interpolate(frame, [420, 450], [0, 1], { extrapolateRight: "clamp" }),
            }}
          >
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "14px",
                color: "#ffd700",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "15px",
              }}
            >
              罗斯柴尔德家族 (1815-2025)
            </div>

            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "72px",
                fontWeight: 700,
                color: "#ffd700",
                textShadow: "0 0 40px rgba(255, 215, 0, 0.4)",
                textAlign: "center",
              }}
            >
              {`$${Math.round(
                interpolate(frame, [450, 600], [0, 300], {
                  extrapolateRight: "clamp",
                })
              ).toLocaleString()}万亿`}
            </div>

            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "16px",
                color: "#9ca3af",
                marginTop: "15px",
                fontStyle: "italic",
              }}
            >
              隐形财富，难以估量
            </div>
          </div>

          {/* Scale comparison bar */}
          {frame >= 500 && (
            <div
              style={{
                position: "absolute",
                bottom: "8%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "600px",
                opacity: interpolate(frame, [500, 530], [0, 1], { extrapolateRight: "clamp" }),
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "6px",
                  background: "#1f2937",
                  borderRadius: "3px",
                  overflow: "hidden",
                }}
              >
                {/* Gates bar */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    width: "2px",
                    height: "100%",
                    background: "#3b82f6",
                  }}
                />
                {/* Musk bar */}
                <div
                  style={{
                    position: "absolute",
                    left: "6px",
                    width: "2px",
                    height: "100%",
                    background: "#ef4444",
                  }}
                />
                {/* Rothschild bar */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    width: `${interpolate(frame, [530, 600], [0, 100], { extrapolateRight: "clamp" })}%`,
                    height: "100%",
                    background: "linear-gradient(90deg, #ffd700, #f0e68c)",
                    boxShadow: "0 0 20px rgba(255, 215, 0, 0.6)",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "8px",
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "12px",
                  color: "#6b7280",
                }}
              >
                <span>$0</span>
                <span style={{ color: "#ffd700" }}>$300万亿+</span>
              </div>
            </div>
          )}
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

export default InvisibleWealthScene;
