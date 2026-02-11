/**
 * FamilyIntroductionScene.tsx
 *
 * Scene 2 (30-90s): Rothschild Family Introduction
 *
 * Introduces the Rothschild family and their European banking empire
 * Features European map with five banking centers
 *
 * Duration: 60 seconds (1800 frames) - but scene covers 30-90s (60s duration)
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import EuropeanMap, { DEFAULT_CITIES } from "../../maps/EuropeanMap";

const FamilyIntroductionScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* European Map Background */}
      <EuropeanMap
        cities={DEFAULT_CITIES}
        showLabels={true}
        showBrotherNames={false}
        markerSize={18}
        animationDelay={0}
        animationDuration={90}
        theme="documentary"
      />

      {/* Content Overlay Layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        {/* Title and Introduction (0-10s relative) */}
        {frame < 300 && (
          <div
            style={{
              position: "absolute",
              top: "8%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [0, 30, 240, 300], [0, 1, 1, 0]),
            }}
          >
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "42px",
                color: "#ffd700",
                marginBottom: "15px",
                letterSpacing: "2px",
                textShadow: "0 0 30px rgba(255, 215, 0, 0.4)",
              }}
            >
              罗斯柴尔德家族
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "20px",
                color: "#e8e8e8",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              五兄弟统治欧洲金融
            </p>
          </div>
        )}

        {/* Five Brothers Info Cards (10-50s relative) */}
        {frame >= 180 && frame < 1500 && (
          <>
            {/* Frankfurt - Amschel */}
            <div
              style={{
                position: "absolute",
                left: "55%",
                top: "32%",
                opacity: interpolate(frame, [180, 210, 330, 360], [0, 1, 1, 0]),
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                style={{
                  background: "rgba(26, 26, 46, 0.9)",
                  border: "1px solid #ffd700",
                  borderRadius: "8px",
                  padding: "15px 20px",
                  minWidth: "180px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
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
                  阿姆斯洛·罗斯柴尔德
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#9ca3af" }}
                >
                  法兰克福 - 家族起源
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "11px", color: "#6b7280", marginTop: "5px" }}
                >
                  1760年建立
                </div>
              </div>
            </div>

            {/* London - Nathan */}
            <div
              style={{
                position: "absolute",
                left: "35%",
                top: "25%",
                opacity: interpolate(frame, [300, 330, 450, 480], [0, 1, 1, 0]),
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                style={{
                  background: "rgba(26, 26, 46, 0.9)",
                  border: "1px solid #ffd700",
                  borderRadius: "8px",
                  padding: "15px 20px",
                  minWidth: "180px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
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
                  内森·罗斯柴尔德
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#9ca3af" }}
                >
                  伦敦 - 金融中心
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "11px", color: "#6b7280", marginTop: "5px" }}
                >
                  1809年建立
                </div>
              </div>
            </div>

            {/* Paris - James */}
            <div
              style={{
                position: "absolute",
                left: "36%",
                top: "42%",
                opacity: interpolate(frame, [420, 450, 570, 600], [0, 1, 1, 0]),
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                style={{
                  background: "rgba(26, 26, 46, 0.9)",
                  border: "1px solid #ffd700",
                  borderRadius: "8px",
                  padding: "15px 20px",
                  minWidth: "180px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
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
                  詹姆斯·罗斯柴尔德
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#9ca3af" }}
                >
                  巴黎 - 银行业
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "11px", color: "#6b7280", marginTop: "5px" }}
                >
                  1812年建立
                </div>
              </div>
            </div>

            {/* Vienna - Salomon */}
            <div
              style={{
                position: "absolute",
                left: "62%",
                top: "40%",
                opacity: interpolate(frame, [540, 570, 690, 720], [0, 1, 1, 0]),
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                style={{
                  background: "rgba(26, 26, 46, 0.9)",
                  border: "1px solid #ffd700",
                  borderRadius: "8px",
                  padding: "15px 20px",
                  minWidth: "180px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
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
                  所罗门·罗斯柴尔德
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#9ca3af" }}
                >
                  维也纳 - 皇室银行
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "11px", color: "#6b7280", marginTop: "5px" }}
                >
                  1820年建立
                </div>
              </div>
            </div>

            {/* Naples - Carl */}
            <div
              style={{
                position: "absolute",
                left: "65%",
                top: "58%",
                opacity: interpolate(frame, [660, 690, 810, 840], [0, 1, 1, 0]),
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                style={{
                  background: "rgba(26, 26, 46, 0.9)",
                  border: "1px solid #ffd700",
                  borderRadius: "8px",
                  padding: "15px 20px",
                  minWidth: "180px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
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
                  卡尔·罗斯柴尔德
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#9ca3af" }}
                >
                  那不勒斯 - 贸易
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "11px", color: "#6b7280", marginTop: "5px" }}
                >
                  1821年建立
                </div>
              </div>
            </div>
          </>
        )}

        {/* Summary Stats (50-60s relative) */}
        {frame >= 1200 && (
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [1200, 1230], [0, 1], { extrapolateRight: "clamp" }),
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "60px",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "48px",
                    color: "#ffd700",
                    fontWeight: 700,
                    textShadow: "0 0 20px rgba(255, 215, 0, 0.4)",
                  }}
                >
                  5
                </div>
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "14px",
                    color: "#9ca3af",
                    marginTop: "5px",
                  }}
                >
                  欧洲金融中心
                </div>
              </div>

              <div
                style={{
                  width: "1px",
                  height: "60px",
                  background: "#374151",
                }}
              />

              <div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "48px",
                    color: "#ffd700",
                    fontWeight: 700,
                    textShadow: "0 0 20px rgba(255, 215, 0, 0.4)",
                  }}
                >
                  19
                </div>
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "14px",
                    color: "#9ca3af",
                    marginTop: "5px",
                  }}
                >
                  世纪主宰欧洲
                </div>
              </div>

              <div
                style={{
                  width: "1px",
                  height: "60px",
                  background: "#374151",
                }}
              />

              <div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "48px",
                    color: "#ffd700",
                    fontWeight: 700,
                    textShadow: "0 0 20px rgba(255, 215, 0, 0.4)",
                  }}
                >
                  ∞
                </div>
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "14px",
                    color: "#9ca3af",
                    marginTop: "5px",
                  }}
                >
                  财富难以估量
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

export default FamilyIntroductionScene;
