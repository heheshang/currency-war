/**
 * TwentyTimesProfitScene.tsx
 *
 * Scene 6 (270-330s): The 20x Profit Reveal
 *
 * Dramatic visualization of how Nathan Rothschild made 20 times profit
 * from the Battle of Waterloo intelligence
 *
 * Duration: 60 seconds (1800 frames) - but scene covers frames 8100-9900
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { GoldCoinRain } from "../../animations/ParticleEffect";

const TwentyTimesProfitScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      {/* Background - Stock Exchange Tension */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at center, #1a1a2e 0%, #0d1117 100%)`,
        }}
      >
        {/* Tension lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${i * 5}%`,
              top: 0,
              width: "1px",
              height: "100%",
              background: `rgba(255, 215, 0, ${interpolate(frame, [0, 30], [0, 0.05], {
                extrapolateRight: "clamp",
              })})`,
            }}
          />
        ))}
      </div>

      {/* Content Layer */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Phase 1: The Crash (0-10s) - British bonds falling */}
        {frame < 300 && (
          <>
            {/* Title */}
            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "0",
                right: "0",
                textAlign: "center",
                opacity: interpolate(frame, [0, 30, 240, 300], [0, 1, 1, 0]),
              }}
            >
              <h2
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "32px",
                  color: "#ef4444",
                  marginBottom: "10px",
                  letterSpacing: "2px",
                }}
              >
                恐慌蔓延
              </h2>
              <p
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "16px",
                  color: "#e8e8e8",
                }}
              >
                假消息：威灵顿战败，英国债券崩盘
              </p>
            </div>

            {/* Falling price animation */}
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
              }}
            >
              {/* Price display */}
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "80px",
                  fontWeight: 700,
                  color: "#ef4444",
                  textShadow: "0 0 30px rgba(239, 68, 68, 0.6)",
                }}
              >
                {interpolate(frame, [30, 270], [100, 5], {
                  extrapolateRight: "clamp",
                }).toFixed(0)}
                <span style={{ fontSize: "40px" }}>%</span>
              </div>
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "18px",
                  color: "#9ca3af",
                  marginTop: "10px",
                }}
              >
                英国债券价格
              </div>

              {/* Panic indicator */}
              <div
                style={{
                  marginTop: "30px",
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "14px",
                  color: "#ef4444",
                  background: "rgba(239, 68, 68, 0.1)",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  opacity: interpolate(frame, [60, 90], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                投资者恐慌抛售！
              </div>
            </div>

            {/* Panic crowd silhouettes */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "200px",
                background: "linear-gradient(to top, rgba(239, 68, 68, 0.1), transparent)",
              }}
            />
          </>
        )}

        {/* Phase 2: Nathan Buys (10-20s) */}
        {frame >= 240 && frame < 600 && (
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              opacity: interpolate(frame, [240, 270, 540, 600], [0, 1, 1, 0]),
            }}
          >
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "28px",
                color: "#e8e8e8",
                marginBottom: "20px",
              }}
            >
              内森·罗斯柴尔德的举动
            </div>
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "48px",
                color: "#ffd700",
                fontWeight: 600,
                textShadow: "0 0 30px rgba(255, 215, 0, 0.6)",
                marginBottom: "20px",
              }}
            >
              "全部买入！"
            </div>
            <div
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "18px",
                color: "#9ca3af",
                maxWidth: "500px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              当所有人都在抛售时，<br />
              内森开始疯狂买入英国债券
            </div>
          </div>
        )}

        {/* Phase 3: The Truth Revealed (20-30s) */}
        {frame >= 540 && frame < 900 && (
          <>
            {/* Title */}
            <div
              style={{
                position: "absolute",
                top: "15%",
                left: "0",
                right: "0",
                textAlign: "center",
                opacity: interpolate(frame, [540, 570, 780, 840], [0, 1, 1, 0]),
              }}
            >
              <h2
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "36px",
                  color: "#ffd700",
                  marginBottom: "10px",
                  letterSpacing: "2px",
                  textShadow: "0 0 30px rgba(255, 215, 0, 0.6)",
                }}
              >
                真相揭晓
              </h2>
              <p
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "18px",
                  color: "#e8e8e8",
                }}
              >
                威灵顿获胜！英国赢得战争！
              </p>
            </div>

            {/* Price recovery animation */}
            <div
              style={{
                position: "absolute",
                top: "35%",
                left: "0",
                right: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* V-shaped curve */}
              <svg
                width="600"
                height="200"
                viewBox="0 0 600 200"
                style={{ opacity: interpolate(frame, [570, 600], [0, 1], { extrapolateRight: "clamp" }) }}
              >
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={i * 40 + 20}
                    x2="600"
                    y2={i * 40 + 20}
                    stroke="#1f2937"
                    strokeWidth="1"
                  />
                ))}

                {/* Price line */}
                <path
                  d={`M 0,40 Q 150,160 300,160 Q 450,160 600,40`}
                  fill="none"
                  stroke="#ffd700"
                  strokeWidth="4"
                  strokeDasharray={interpolate(frame, [600, 750], [0, 1000], {
                    extrapolateRight: "clamp",
                  })}
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.8))",
                  }}
                />

                {/* Animated dot along the line */}
                <circle
                  cx={interpolate(frame, [600, 750], [0, 600], { extrapolateRight: "clamp" })}
                  cy={
                    interpolate(
                      frame,
                      [600, 675, 750],
                      [40, 160, 40],
                      { extrapolateRight: "clamp" }
                    )
                  }
                  r="8"
                  fill="#ffd700"
                  style={{ filter: "drop-shadow(0 0 15px rgba(255, 215, 0, 1))" }}
                />
              </svg>

              {/* Price labels */}
              <div
                style={{
                  position: "absolute",
                  left: "10%",
                  top: "20%",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "14px",
                  color: "#ef4444",
                  opacity: interpolate(frame, [600, 630], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                5% (恐慌底部)
              </div>
              <div
                style={{
                  position: "absolute",
                  right: "10%",
                  top: "20%",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "14px",
                  color: "#22c55e",
                  opacity: interpolate(frame, [720, 750], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                100% (恢复)
              </div>
            </div>
          </>
        )}

        {/* Phase 4: The 20x Reveal (30-50s) */}
        {frame >= 840 && (
          <>
            {/* Massive "20x" reveal */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: `${200 * interpolate(frame, [840, 900], [0.5, 1], {
                    extrapolateRight: "clamp",
                  })}px`,
                  fontWeight: 700,
                  color: "#ffd700",
                  textShadow: "0 0 60px rgba(255, 215, 0, 0.8), 0 0 120px rgba(255, 215, 0, 0.4)",
                  opacity: interpolate(frame, [840, 870], [0, 1], { extrapolateRight: "clamp" }),
                  letterSpacing: "10px",
                }}
              >
                20×
              </div>
              <div
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "28px",
                  color: "#e8e8e8",
                  marginTop: "30px",
                  opacity: interpolate(frame, [900, 930], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                二十倍收益
              </div>
            </div>

            {/* Gold coin rain effect */}
            {frame >= 900 && frame < 1500 && <GoldCoinRain intensity="medium" />}

            {/* Profit breakdown */}
            {frame >= 960 && frame < 1500 && (
              <div
                style={{
                  position: "absolute",
                  bottom: "15%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  textAlign: "center",
                  opacity: interpolate(frame, [960, 990], [0, 1], { extrapolateRight: "clamp" }),
                }}
              >
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "18px",
                    color: "#9ca3af",
                    marginBottom: "20px",
                  }}
                >
                  投资回报详情
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "40px",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "32px",
                        color: "#e8e8e8",
                        fontWeight: 600,
                      }}
                    >
                      £100万
                    </div>
                    <div
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "14px", color: "#9ca3af" }}
                    >
                      初始投资
                    </div>
                  </div>
                  <div style={{ fontSize: "32px", color: "#ffd700" }}>→</div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "32px",
                        color: "#ffd700",
                        fontWeight: 600,
                        textShadow: "0 0 20px rgba(255, 215, 0, 0.6)",
                      }}
                    >
                      £2000万
                    </div>
                    <div
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "14px", color: "#ffd700" }}
                    >
                      最终收益
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Phase 5: Summary quote (50-60s) */}
        {frame >= 1500 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "900px",
              textAlign: "center",
              opacity: interpolate(frame, [1500, 1530], [0, 1], { extrapolateRight: "clamp" }),
            }}
          >
            <div
              style={{
                fontSize: "60px",
                color: "#ffd700",
                opacity: 0.2,
                fontFamily: "Georgia, serif",
                position: "absolute",
                top: "-40px",
                left: "0",
              }}
            >
              "
            </div>
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "26px",
                color: "#e8e8e8",
                fontStyle: "italic",
                lineHeight: 1.8,
              }}
            >
              一天之内，罗斯柴尔德家族
              <br />
              获得了相当于今日数十亿美元的利润
            </p>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

export default TwentyTimesProfitScene;
