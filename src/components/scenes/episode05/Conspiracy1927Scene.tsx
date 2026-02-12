import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { CartoonCharacter } from "../../characters/CartoonCharacter";

/**
 * Conspiracy1927Scene - 场景8：1927年秘密会议
 *
 * 密室场景（复用JekyllIslandScene美学）
 * 三位银行家：诺曼、斯特朗、沙赫特
 * 协议文件淡入
 */
export const Conspiracy1927Scene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // 密室淡入
  const roomOpacity = interpolate(frame, [60, 180], [0, 1], { extrapolateRight: "clamp" });

  // 银行家角色淡入
  const bankerOpacity = interpolate(frame, [180, 360], [0, 1], { extrapolateRight: "clamp" });

  // 文件淡入
  const documentOpacity = interpolate(frame, [420, 540], [0, 1], { extrapolateRight: "clamp" });

  // 地图显示
  const mapOpacity = interpolate(frame, [120, 300], [0, 1], { extrapolateRight: "clamp" });

  // 标题
  const titleOpacity = interpolate(frame, [60, 150], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1e1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 36,
            color: "#ffd700",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          Secret Meeting — 1927
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          The Setup for the Great Crash
        </div>
      </div>

      {/* 地图 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          right: "8%",
          opacity: mapOpacity,
        }}
      >
        <svg width="300" height="200" viewBox="0 0 300 200">
          <defs>
            <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e3a5f" />
              <stop offset="100%" stopColor="#0c4a6e" />
            </linearGradient>
          </defs>

          {/* 海洋 */}
          <rect width="300" height="200" fill="url(#oceanGrad)" opacity="0.3" />

          {/* 英国 */}
          <ellipse cx="60" cy="70" rx="35" ry="25" fill="rgba(75, 123, 32, 0.3)" stroke="#4B5320" strokeWidth="2" />
          <text x="60" y="110" fontSize="14" fill="#ffd700" textAnchor="middle" fontWeight="600">
            England
          </text>

          {/* 美国 */}
          <ellipse cx="200" cy="90" rx="45" ry="30" fill="rgba(75, 123, 32, 0.3)" stroke="#4B5320" strokeWidth="2" />
          <text x="200" y="135" fontSize="14" fill="#ffd700" textAnchor="middle" fontWeight="600">
            USA
          </text>

          {/* 德国 */}
          <ellipse cx="260" cy="80" rx="30" ry="22" fill="rgba(75, 123, 32, 0.3)" stroke="#4B5320" strokeWidth="2" />
          <text x="260" y="115" fontSize="14" fill="#ffd700" textAnchor="middle" fontWeight="600">
            Germany
          </text>

          {/* 连接线 */}
          <path
            d="M 95,70 Q 150,60 170,75"
            fill="none"
            stroke="#ffd700"
            strokeWidth="2"
            strokeDasharray="4,4"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* 密室场景 */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: roomOpacity,
        }}
      >
        {/* 密室背景 */}
        <div
          style={{
            padding: "40px 60px",
            background: "linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 100%)",
            border: "4px solid #ffd700",
            borderRadius: "4px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
            position: "relative",
          }}
        >
          {/* 木质纹理 */}
          <div
            style={{
              position: "absolute",
              inset: "8px",
              border: "2px solid rgba(255, 215, 0, 0.1)",
              opacity: 0.3,
            }}
          />

          {/* 会议桌 */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "200px",
              height: "20px",
              background: "#2d1810",
              borderRadius: "4px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            }}
          />

          {/* 参会者标签 */}
          <div
            style={{
              position: "absolute",
              top: "30px",
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "Cinzel, serif",
                  fontSize: 14,
                  color: "#ffd700",
                  marginBottom: 8,
                }}
              >
                Montagu Norman
              </div>
              <div style={{ fontSize: 11, color: "#9ca3af" }}>
                Bank of England
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "Cinzel, serif",
                  fontSize: 14,
                  color: "#ffd700",
                  marginBottom: 8,
                }}
              >
                Benjamin Strong
              </div>
              <div style={{ fontSize: 11, color: "#9ca3af" }}>
                NY Fed
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "Cinzel, serif",
                  fontSize: 14,
                  color: "#ffd700",
                  marginBottom: 8,
                }}
              >
                Hjalmar Schacht
              </div>
              <div style={{ fontSize: 11, color: "#9ca3af" }}>
                Reichsbank
              </div>
            </div>
          </div>

          {/* 绝密标志 */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 10,
              color: "#ef4444",
              border: "1px solid #ef4444",
              padding: "4px 8px",
            }}
          >
            TOP SECRET
          </div>
        </div>

        {/* 银行家角色 */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "20px",
            opacity: bankerOpacity,
          }}
        >
          <CartoonCharacter
            x={-100}
            y={0}
            scale={0.8}
            characterType="banker"
            action="think"
            facingRight={true}
            frame={frame}
          />
          <CartoonCharacter
            x={0}
            y={0}
            scale={0.8}
            characterType="banker"
            action="talk"
            facingRight={false}
            frame={frame}
          />
          <CartoonCharacter
            x={100}
            y={0}
            scale={0.8}
            characterType="banker"
            action="point"
            facingRight={true}
            frame={frame}
          />
        </div>
      </div>

      {/* 协议文件 */}
      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: "15%",
          opacity: documentOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "#f5f5dc",
            border: "3px double #8b4513",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            maxWidth: "280px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#8b4513",
              marginBottom: 12,
              letterSpacing: 1,
            }}
          >
            SECRET AGREEMENT
          </div>

          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 12,
              color: "#78350f",
              lineHeight: "1.8",
            }}
          >
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>Decision:</span> Lower NY Fed rates
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>Goal:</span> Stop gold flowing to America
            </div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>Result:</span> Inflate US bubble
            </div>
            <div style={{ color: "#f87171", fontWeight: 600 }}>
              "The policy that led to 1929"
            </div>
          </div>
        </div>
      </div>

      {/* 底部引言 */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: documentOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 18,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            marginBottom: 12,
          }}
        >
          "Lower interest rates. Inflate the bubble."
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#ffd700",
            textAlign: "center",
          }}
        >
          Then pop it and harvest the assets.
        </div>
      </div>
    </AbsoluteFill>
  );
};
