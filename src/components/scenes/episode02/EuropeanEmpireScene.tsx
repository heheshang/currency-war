/**
 * EuropeanEmpireScene.tsx
 *
 * Scene 7 (330-390s): The Five Brothers' European Empire
 *
 * Shows how the five Rothschild brothers established banking empires
 * across Europe's major financial centers
 *
 * Duration: 60 seconds (1800 frames) - but scene covers frames 9900-11700
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import EuropeanMap, { DEFAULT_CITIES, DEFAULT_ROUTES } from "../../maps/EuropeanMap";

const EuropeanEmpireScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Animation sequence for revealing the empire
  const getVisibleCities = () => {
    if (frame < 60) return [];
    if (frame < 180) return ["frankfurt"];
    if (frame < 300) return ["frankfurt", "london"];
    if (frame < 420) return ["frankfurt", "london", "paris"];
    if (frame < 540) return ["frankfurt", "london", "paris", "vienna"];
    return DEFAULT_CITIES.map((c) => c.id);
  };

  const getVisibleRoutes = () => {
    if (frame < 360) return [];
    if (frame < 540) return ["frankfurt-london", "frankfurt-paris"];
    if (frame < 720) return ["frankfurt-london", "frankfurt-paris", "frankfurt-vienna"];
    if (frame < 900) return ["frankfurt-london", "frankfurt-paris", "frankfurt-vienna", "frankfurt-naples"];
    return DEFAULT_ROUTES.map((r) => `${r.from}-${r.to}`);
  };

  const visibleCities = getVisibleCities();
  const visibleRoutes = getVisibleRoutes();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* European Map with progressive reveal */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.8,
        }}
      >
        <EuropeanMap
          cities={DEFAULT_CITIES}
          routes={DEFAULT_ROUTES}
          visibleCityIds={visibleCities}
          visibleRouteIds={visibleRoutes}
          showLabels={true}
          showBrotherNames={true}
          markerSize={22}
          animationDelay={0}
          animationDuration={120}
          theme="documentary"
        />
      </div>

      {/* Content Overlay */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Main Title */}
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
                textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
              }}
            >
              欧洲金融帝国
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "20px",
                color: "#e8e8e8",
              }}
            >
              五兄弟，五座城，统治欧洲金融
            </p>
          </div>
        )}

        {/* Sequential Brother Reveals */}

        {/* Frankfurt - Amschel */}
        {frame >= 120 && frame < 360 && (
          <div
            style={{
              position: "absolute",
              left: "55%",
              top: "45%",
              transform: "translate(-50%, -50%)",
              opacity: interpolate(frame, [120, 150, 270, 330], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                background: "rgba(13, 17, 23, 0.95)",
                border: "2px solid #ffd700",
                borderRadius: "10px",
                padding: "20px 25px",
                boxShadow: "0 4px 30px rgba(255, 215, 0, 0.3)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "11px",
                  color: "#9ca3af",
                  marginBottom: "8px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                1760年 · 法兰克福
              </div>
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "18px",
                  color: "#ffd700",
                  fontWeight: 600,
                  marginBottom: "10px",
                }}
              >
                阿姆斯洛
              </div>
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "13px",
                  color: "#e8e8e8",
                  maxWidth: "200px",
                  lineHeight: 1.5,
                }}
              >
                继承父业<br />
                守护家族根基
              </div>
            </div>
          </div>
        )}

        {/* London - Nathan */}
        {frame >= 240 && frame < 480 && (
          <div
            style={{
              position: "absolute",
              left: "32%",
              top: "38%",
              transform: "translate(-50%, -50%)",
              opacity: interpolate(frame, [240, 270, 390, 450], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                background: "rgba(13, 17, 23, 0.95)",
                border: "2px solid #ffd700",
                borderRadius: "10px",
                padding: "20px 25px",
                boxShadow: "0 4px 30px rgba(255, 215, 0, 0.3)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "11px",
                  color: "#9ca3af",
                  marginBottom: "8px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                1809年 · 伦敦
              </div>
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "18px",
                  color: "#ffd700",
                  fontWeight: 600,
                  marginBottom: "10px",
                }}
              >
                内森
              </div>
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "13px",
                  color: "#e8e8e8",
                  maxWidth: "200px",
                  lineHeight: 1.5,
                }}
              >
                滑铁卢战役<br />
                奠定金融霸主地位
              </div>
            </div>
          </div>
        )}

        {/* Paris - James */}
        {frame >= 360 && frame < 600 && (
          <div
            style={{
              position: "absolute",
              left: "34%",
              top: "55%",
              transform: "translate(-50%, -50%)",
              opacity: interpolate(frame, [360, 390, 510, 570], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                background: "rgba(13, 17, 23, 0.95)",
                border: "2px solid #ffd700",
                borderRadius: "10px",
                padding: "20px 25px",
                boxShadow: "0 4px 30px rgba(255, 215, 0, 0.3)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "11px",
                  color: "#9ca3af",
                  marginBottom: "8px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                1812年 · 巴黎
              </div>
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "18px",
                  color: "#ffd700",
                  fontWeight: 600,
                  marginBottom: "10px",
                }}
              >
                詹姆斯
              </div>
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "13px",
                  color: "#e8e8e8",
                  maxWidth: "200px",
                  lineHeight: 1.5,
                }}
              >
                征服法兰西<br />
                救援法国皇室
              </div>
            </div>
          </div>
        )}

        {/* Vienna - Salomon */}
        {frame >= 480 && frame < 720 && (
          <div
            style={{
              position: "absolute",
              left: "65%",
              top: "53%",
              transform: "translate(-50%, -50%)",
              opacity: interpolate(frame, [480, 510, 630, 690], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                background: "rgba(13, 17, 23, 0.95)",
                border: "2px solid #ffd700",
                borderRadius: "10px",
                padding: "20px 25px",
                boxShadow: "0 4px 30px rgba(255, 215, 0, 0.3)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "11px",
                  color: "#9ca3af",
                  marginBottom: "8px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                1820年 · 维也纳
              </div>
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "18px",
                  color: "#ffd700",
                  fontWeight: 600,
                  marginBottom: "10px",
                }}
              >
                所罗门
              </div>
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "13px",
                  color: "#e8e8e8",
                  maxWidth: "200px",
                  lineHeight: 1.5,
                }}
              >
                哈布斯堡御用<br />
                奥地利金融领袖
              </div>
            </div>
          </div>
        )}

        {/* Naples - Carl */}
        {frame >= 600 && frame < 840 && (
          <div
            style={{
              position: "absolute",
              left: "68%",
              top: "70%",
              transform: "translate(-50%, -50%)",
              opacity: interpolate(frame, [600, 630, 750, 810], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                background: "rgba(13, 17, 23, 0.95)",
                border: "2px solid #ffd700",
                borderRadius: "10px",
                padding: "20px 25px",
                boxShadow: "0 4px 30px rgba(255, 215, 0, 0.3)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "11px",
                  color: "#9ca3af",
                  marginBottom: "8px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                1821年 · 那不勒斯
              </div>
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "18px",
                  color: "#ffd700",
                  fontWeight: 600,
                  marginBottom: "10px",
                }}
              >
                卡尔
              </div>
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "13px",
                  color: "#e8e8e8",
                  maxWidth: "200px",
                  lineHeight: 1.5,
                }}
              >
                意大利贸易<br />
                地中海金融枢纽
              </div>
            </div>
          </div>
        )}

        {/* Network Visualization (after all brothers revealed) */}
        {frame >= 840 && (
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "0",
              right: "0",
              textAlign: "center",
              opacity: interpolate(frame, [840, 870], [0, 1], { extrapolateRight: "clamp" }),
            }}
          >
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "16px",
                color: "#ffd700",
                marginBottom: "20px",
                letterSpacing: "2px",
              }}
            >
              跨国情报与金融网络
            </div>

            {/* Network diagram */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "80px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  background: "rgba(26, 26, 46, 0.9)",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  padding: "15px 25px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "32px",
                    color: "#ffd700",
                    fontWeight: 700,
                  }}
                >
                  5
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#9ca3af" }}
                >
                  金融中心
                </div>
              </div>

              <div
                style={{
                  width: "40px",
                  height: "1px",
                  background: "#ffd700",
                }}
              />

              <div
                style={{
                  background: "rgba(26, 26, 46, 0.9)",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  padding: "15px 25px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "32px",
                    color: "#ffd700",
                    fontWeight: 700,
                  }}
                >
                  24h
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#9ca3af" }}
                >
                  情报传递
                </div>
              </div>

              <div
                style={{
                  width: "40px",
                  height: "1px",
                  background: "#ffd700",
                }}
              />

              <div
                style={{
                  background: "rgba(26, 26, 46, 0.9)",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  padding: "15px 25px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "32px",
                    color: "#ffd700",
                    fontWeight: 700,
                  }}
                >
                  同步
                </div>
                <div
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "12px", color: "#9ca3af" }}
                >
                  联合行动
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Closing statement */}
        {frame >= 1200 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              opacity: interpolate(frame, [1200, 1230], [0, 1], { extrapolateRight: "clamp" }),
            }}
          >
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "24px",
                color: "#e8e8e8",
                maxWidth: "700px",
                lineHeight: 1.8,
                fontStyle: "italic",
              }}
            >
              "五兄弟如同一人的五只手，
              <br />
              同时掌控着欧洲的脉搏"
            </p>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

export default EuropeanEmpireScene;
