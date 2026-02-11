/**
 * BankOfEnglandScene.tsx
 *
 * Scene 8 (390-450s): Bank of England Historical Background
 *
 * Explains the historical context of the Bank of England and debt system
 * that the Rothschild family would later exploit
 *
 * Duration: 60 seconds (1800 frames) - but scene covers frames 11700-13500
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BankOfEnglandScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* Background - Classical building silhouette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          opacity: 0.15,
        }}
      >
        {/* Simplified Bank of England facade */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMax slice"
        >
          {/* Base building */}
          <rect x="200" y="500" width="1520" height="580" fill="#1a1a2e" />

          {/* Columns */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
            <rect
              key={i}
              x={300 + i * 120}
              y="300"
              width="60"
              height="780"
              fill="#1e3a5a"
            />
          ))}

          {/* Triangular pediment */}
          <polygon
            points="960,100 200,300 1720,300"
            fill="#1e3a5a"
          />

          {/* Dome */}
          <ellipse cx="960" cy="180" rx="120" ry="80" fill="#2d3748" />
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
                fontFamily: "'Cinzel', serif",
                fontSize: "42px",
                color: "#1e3a5a",
                marginBottom: "15px",
                letterSpacing: "3px",
                textShadow: "0 0 30px rgba(30, 58, 90, 0.5)",
              }}
            >
              英格兰银行
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "20px",
                color: "#e8e8e8",
              }}
            >
              私人控制国家货币的起源
            </p>
          </div>
        )}

        {/* Year founded (8-15s) */}
        {frame >= 180 && frame < 450 && (
          <div
            style={{
              position: "absolute",
              top: "35%",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              opacity: interpolate(frame, [180, 210, 390, 450], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "120px",
                color: "#ffd700",
                fontWeight: 700,
                textShadow: "0 0 50px rgba(255, 215, 0, 0.6)",
                letterSpacing: "10px",
              }}
            >
              1694
            </div>
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "22px",
                color: "#9ca3af",
                marginTop: "15px",
                letterSpacing: "3px",
              }}
            >
              年
            </div>
          </div>
        )}

        {/* Founding story (15-25s) */}
        {frame >= 390 && frame < 750 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "900px",
              opacity: interpolate(frame, [390, 420, 660, 750], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                background: "rgba(26, 26, 46, 0.95)",
                border: "1px solid #1e3a5a",
                borderRadius: "12px",
                padding: "40px 50px",
                boxShadow: "0 8px 40px rgba(0, 0, 0, 0.6)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "22px",
                  color: "#1e3a5a",
                  marginBottom: "25px",
                  fontWeight: 600,
                }}
              >
                威廉三世的"创新"
              </h3>
              <p
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "17px",
                  color: "#e8e8e8",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                为筹集战争经费，英国国王威廉三世向私人银行家借款120万英镑。
              </p>
              <p
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "17px",
                  color: "#e8e8e8",
                  lineHeight: 1.8,
                }}
              >
                作为交换，这些银行家获得特许权成立"英格兰银行"——
                <span style={{ color: "#ffd700" }}>一家私人银行，但有权发行国家货币</span>。
              </p>
            </div>
          </div>
        )}

        {/* The trap revealed (25-40s) */}
        {frame >= 690 && frame < 1200 && (
          <>
            {/* Trap diagram */}
            <div
              style={{
                position: "absolute",
                top: "30%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "700px",
                opacity: interpolate(frame, [690, 720], [0, 1], { extrapolateRight: "clamp" }),
              }}
            >
              {/* Step 1: Government borrows */}
              <div
                style={{
                  background: "rgba(30, 58, 90, 0.2)",
                  border: "2px solid #1e3a5a",
                  borderRadius: "10px",
                  padding: "20px",
                  marginBottom: "20px",
                  opacity: interpolate(frame, [720, 750], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "#1e3a5a",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "20px",
                      color: "#fff",
                    }}
                  >
                    1
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Noto Sans SC', sans-serif",
                        fontSize: "16px",
                        color: "#1e3a5a",
                        fontWeight: 600,
                        marginBottom: "5px",
                      }}
                    >
                      政府向银行借款
                    </div>
                    <div
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "14px", color: "#9ca3af" }}
                    >
                      用未来税收作为抵押
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div
                style={{
                  height: "30px",
                  borderLeft: "2px dashed #374151",
                  margin: "0 auto",
                  opacity: interpolate(frame, [780, 810], [0, 1], { extrapolateRight: "clamp" }),
                }}
              />

              {/* Step 2: Bank prints money */}
              <div
                style={{
                  background: "rgba(255, 215, 0, 0.1)",
                  border: "2px solid #ffd700",
                  borderRadius: "10px",
                  padding: "20px",
                  marginBottom: "20px",
                  opacity: interpolate(frame, [840, 870], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
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
                    }}
                  >
                    2
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Noto Sans SC', sans-serif",
                        fontSize: "16px",
                        color: "#ffd700",
                        fontWeight: 600,
                        marginBottom: "5px",
                      }}
                    >
                      银行发行货币
                    </div>
                    <div
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "14px", color: "#9ca3af" }}
                    >
                      印钞票给政府，收取利息
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div
                style={{
                  height: "30px",
                  borderLeft: "2px dashed #374151",
                  margin: "0 auto",
                  opacity: interpolate(frame, [900, 930], [0, 1], { extrapolateRight: "clamp" }),
                }}
              />

              {/* Step 3: Debt trap */}
              <div
                style={{
                  background: "rgba(139, 0, 0, 0.1)",
                  border: "2px solid #8b0000",
                  borderRadius: "10px",
                  padding: "20px",
                  opacity: interpolate(frame, [960, 990], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "#8b0000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "20px",
                      color: "#fff",
                    }}
                  >
                    3
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Noto Sans SC', sans-serif",
                        fontSize: "16px",
                        color: "#8b0000",
                        fontWeight: 600,
                        marginBottom: "5px",
                      }}
                    >
                      永久债务陷阱
                    </div>
                    <div
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "14px", color: "#9ca3af" }}
                    >
                      政府永远无法还清本金，利息永不停止
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side quote */}
            <div
              style={{
                position: "absolute",
                bottom: "15%",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
                opacity: interpolate(frame, [1050, 1080], [0, 1], { extrapolateRight: "clamp" }),
              }}
            >
              <p
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "18px",
                  color: "#ffd700",
                  fontStyle: "italic",
                  maxWidth: "600px",
                }}
              >
                "让一个国家发行和控制货币，
                <br />
                我不在乎谁制定法律"
              </p>
            </div>
          </>
        )}

        {/* Summary (40-60s) */}
        {frame >= 1140 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              opacity: interpolate(frame, [1140, 1170], [0, 1], { extrapolateRight: "clamp" }),
            }}
          >
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "24px",
                color: "#e8e8e8",
                maxWidth: "800px",
                lineHeight: 1.8,
              }}
            >
              当罗斯柴尔德家族进入伦敦时，
              <br />
              <span style={{ color: "#ffd700" }}>英格兰银行</span>
              已经控制英国金融超过一个世纪
            </div>
            <div
              style={{
                marginTop: "40px",
                padding: "20px 40px",
                background: "rgba(30, 58, 90, 0.3)",
                border: "1px solid #1e3a5a",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "16px",
                  color: "#9ca3af",
                  marginBottom: "10px",
                }}
              >
                下一步：内森如何征服伦敦金融城
              </div>
            </div>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

export default BankOfEnglandScene;
