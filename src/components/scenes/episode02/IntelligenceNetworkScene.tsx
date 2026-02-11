/**
 * IntelligenceNetworkScene.tsx
 *
 * Scene 4 (150-210s): Rothschild Intelligence Network
 *
 * Visualizes how the Rothschild family built their intelligence network
 * that was faster than official news channels
 *
 * Duration: 60 seconds (1800 frames) - but scene covers frames 4500-6300
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import EuropeanMap, { DEFAULT_CITIES } from "../../maps/EuropeanMap";

const IntelligenceNetworkScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Route animation for intelligence paths
  const intelligenceRoutes = [
    { from: "london", to: "frankfurt", delay: 30 },
    { from: "paris", to: "frankfurt", delay: 60 },
    { from: "vienna", to: "frankfurt", delay: 90 },
    { from: "naples", to: "frankfurt", delay: 120 },
  ];

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* European Map with Intelligence Routes */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.7,
        }}
      >
        <EuropeanMap
          cities={DEFAULT_CITIES}
          showLabels={true}
          showBrotherNames={false}
          markerSize={20}
          animationDelay={0}
          animationDuration={60}
          theme="documentary"
        />
      </div>

      {/* Content Overlay */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Title (0-8s relative) */}
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
                textShadow: "0 0 20px rgba(255, 215, 0, 0.4)",
              }}
            >
              情报网络
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "18px",
                color: "#e8e8e8",
              }}
            >
              先人一步的情报优势
            </p>
          </div>
        )}

        {/* Animated Intelligence Courier (8-35s relative) */}
        {frame >= 180 && frame < 1050 && (
          <>
            {/* Speed comparison box */}
            <div
              style={{
                position: "absolute",
                top: "20%",
                left: "5%",
                width: "280px",
                opacity: interpolate(frame, [180, 210, 900, 960], [0, 1, 1, 0]),
              }}
            >
              <div
                style={{
                  background: "rgba(26, 26, 46, 0.95)",
                  border: "1px solid #ffd700",
                  borderRadius: "8px",
                  padding: "20px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.6)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "16px",
                    color: "#ffd700",
                    marginBottom: "15px",
                    fontWeight: 600,
                  }}
                >
                  情报传递速度对比
                </h3>

                {/* Rothschild Network */}
                <div style={{ marginBottom: "15px" }}>
                  <div
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "13px",
                      color: "#e8e8e8",
                      marginBottom: "5px",
                    }}
                  >
                    罗斯柴尔德情报网
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        height: "8px",
                        background: "#1f2937",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${interpolate(frame, [210, 330], [0, 100], {
                            extrapolateRight: "clamp",
                          })}%`,
                          height: "100%",
                          background: "#ffd700",
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "14px",
                        color: "#ffd700",
                      }}
                    >
                      24h
                    </span>
                  </div>
                </div>

                {/* Official News */}
                <div>
                  <div
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "13px",
                      color: "#9ca3af",
                      marginBottom: "5px",
                    }}
                  >
                    官方新闻渠道
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        height: "8px",
                        background: "#1f2937",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${interpolate(frame, [330, 450], [0, 100], {
                            extrapolateRight: "clamp",
                          })}%`,
                          height: "100%",
                          background: "#6b7280",
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      4-7天
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated courier/dots on map */}
            {intelligenceRoutes.map((route, index) => {
              const routeDelay = 240 + index * 90;
              const progress = interpolate(
                frame,
                [routeDelay, routeDelay + 120],
                [0, 1],
                { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
              );

              if (progress <= 0 || progress > 1) return null;

              const fromCity = DEFAULT_CITIES.find((c) => c.id === route.from);
              const toCity = DEFAULT_CITIES.find((c) => c.id === route.to);

              if (!fromCity || !toCity) return null;

              const currentX = interpolate(progress, [0, 1], [fromCity.x, toCity.x]);
              const currentY = interpolate(progress, [0, 1], [fromCity.y, toCity.y]);

              return (
                <div
                  key={route.from + route.to}
                  style={{
                    position: "absolute",
                    left: `${currentX}%`,
                    top: `${currentY}%`,
                    transform: "translate(-50%, -50%)",
                    opacity: interpolate(frame, [routeDelay, routeDelay + 30], [0, 1], {
                      extrapolateRight: "clamp",
                    }),
                  }}
                >
                  {/* Courier icon */}
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: "#ffd700",
                      boxShadow: "0 0 15px rgba(255, 215, 0, 0.8)",
                      position: "relative",
                    }}
                  >
                    {/* Pulse effect */}
                    <div
                      style={{
                        position: "absolute",
                        inset: "-8px",
                        borderRadius: "50%",
                        border: "2px solid #ffd700",
                        opacity: 0.5,
                        animation: "pulse 1s ease-in-out infinite",
                      }}
                    />
                  </div>

                  {/* Speed label */}
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      whiteSpace: "nowrap",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      color: "#ffd700",
                      background: "rgba(0, 0, 0, 0.7)",
                      padding: "2px 6px",
                      borderRadius: "3px",
                    }}
                  >
                    快速传递
                  </div>
                </div>
              );
            })}
          </>
        )}

        {/* Key Methods Box (35-50s relative) */}
        {frame >= 900 && frame < 1500 && (
          <div
            style={{
              position: "absolute",
              bottom: "15%",
              right: "5%",
              width: "320px",
              opacity: interpolate(frame, [900, 930, 1410, 1500], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                background: "rgba(26, 26, 46, 0.95)",
                border: "1px solid #1e3a5a",
                borderRadius: "8px",
                padding: "20px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.6)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "16px",
                  color: "#1e3a5a",
                  marginBottom: "15px",
                  fontWeight: 600,
                }}
              >
                情报收集方法
              </h3>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "13px",
                  color: "#e8e8e8",
                }}
              >
                <li
                  style={{
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    opacity: interpolate(frame, [930, 960], [0, 1], { extrapolateRight: "clamp" }),
                  }}
                >
                  <span style={{ color: "#ffd700" }}>●</span>
                  <span>驻扎各首都的家族成员</span>
                </li>
                <li
                  style={{
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    opacity: interpolate(frame, [990, 1020], [0, 1], { extrapolateRight: "clamp" }),
                  }}
                >
                  <span style={{ color: "#ffd700" }}>●</span>
                  <span>专属信使与快船服务</span>
                </li>
                <li
                  style={{
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    opacity: interpolate(frame, [1050, 1080], [0, 1], { extrapolateRight: "clamp" }),
                  }}
                >
                  <span style={{ color: "#ffd700" }}>●</span>
                  <span>加密通信系统</span>
                </li>
                <li
                  style={{
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    opacity: interpolate(frame, [1110, 1140], [0, 1], { extrapolateRight: "clamp" }),
                  }}
                >
                  <span style={{ color: "#ffd700" }}>●</span>
                  <span>与政界商界的密切关系</span>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    opacity: interpolate(frame, [1170, 1200], [0, 1], { extrapolateRight: "clamp" }),
                  }}
                >
                  <span style={{ color: "#ffd700" }}>●</span>
                  <span>提前获取战争与政策消息</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Summary statement (50-60s relative) */}
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
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "24px",
                color: "#ffd700",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: 1.6,
                fontStyle: "italic",
              }}
            >
              "当官方消息还在海上漂泊时，
              <br />
              罗斯柴尔德已经掌握了真相"
            </div>
          </div>
        )}
      </div>

      {/* Pulse animation style */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.5); opacity: 0; }
          }
        `}
      </style>
    </AbsoluteFill>
  );
};

export default IntelligenceNetworkScene;
