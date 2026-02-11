import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import EuropeanMap from "../../maps/EuropeanMap";
import { CartoonCharacter } from "../../characters/CartoonCharacter";

/**
 * CivilWarPreludeScene - 内战前奏场景
 *
 * 欧洲金融势力策划分裂美国
 * "分而治之"策略
 * 俾斯麦名言
 */
export const CivilWarPreludeScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const mapOpacity = interpolate(frame, [60, 150], [0, 1], { extrapolateRight: "clamp" });
  const quoteOpacity = interpolate(frame, [180, 270], [0, 1], { extrapolateRight: "clamp" });
  const strategyOpacity = interpolate(frame, [330, 420], [0, 1], { extrapolateRight: "clamp" });
  const bankerScale = spring({ frame: frame - 90, fps: 30, config: { damping: 15, stiffness: 60 } });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* 欧洲地图背景 */}
      <div style={{ opacity: mapOpacity * 0.4 }}>
        <EuropeanMap
          visibleCityIds={["london", "paris", "frankfurt"]}
          showLabels={true}
          theme="dramatic"
          animationDelay={0}
          animationDuration={90}
        />
      </div>

      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "6%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 32,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          Divide and Conquer
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 16,
            color: "#9ca3af",
            textAlign: "center",
            marginTop: 6,
          }}
        >
          European Financial Powers Plot America's Division
        </div>
      </div>

      {/* 银行家角色 */}
      <div
        style={{
          position: "absolute",
          right: "15%",
          top: "50%",
          transform: `translate(0, -50%) scale(${bankerScale})`,
          zIndex: 10,
        }}
      >
        <CartoonCharacter
          x={0}
          y={0}
          scale={1}
          characterType="banker"
          action="think"
          facingRight={false}
          frame={frame}
          skinColor="#F5DEB3"
          clothColor="#1E3A5A"
        />
        <div
          style={{
            position: "absolute",
            bottom: -25,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Cinzel, serif",
            fontSize: 12,
            color: "#8b0000",
            whiteSpace: "nowrap",
          }}
        >
          European Bankers
        </div>
      </div>

      {/* 俾斯麦名言 */}
      <div
        style={{
          position: "absolute",
          bottom: "35%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          opacity: quoteOpacity,
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 14,
            color: "#9ca3af",
            textAlign: "center",
            marginBottom: 12,
            letterSpacing: 2,
          }}
        >
          OTTO VON BISMARCK — German Chancellor
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 20,
            color: "#ffd700",
            textAlign: "center",
            lineHeight: "1.6",
            fontStyle: "italic",
          }}
        >
          "The division of the United States was European financial policy"
        </div>
      </div>

      {/* 三国轴心 */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "12%",
          opacity: strategyOpacity,
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 14,
            color: "#8b0000",
            letterSpacing: 2,
            marginBottom: 15,
          }}
        >
          THE AXIS
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {[
            { city: "London", flag: "🇬🇧" },
            { city: "Paris", flag: "🇫🇷" },
            { city: "Frankfurt", flag: "🇩🇪" },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 15px",
                background: "rgba(139, 0, 0, 0.2)",
                border: "1px solid #8b0000",
                borderRadius: 6,
              }}
            >
              <span style={{ fontSize: 20 }}>{item.flag}</span>
              <span
                style={{
                  fontFamily: "Merriweather, serif",
                  fontSize: 14,
                  color: "#e8e8e8",
                }}
              >
                {item.city}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 策略说明 */}
      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "75%",
          opacity: strategyOpacity,
          zIndex: 10,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 14,
            color: "#ffd700",
            letterSpacing: 2,
            marginBottom: 10,
          }}
        >
          THE STRATEGY
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 15,
            color: "#e8e8e8",
            lineHeight: "1.6",
          }}
        >
          Southern states offered cheap loans • War financed from both sides
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 14,
            color: "#ef4444",
            marginTop: 8,
            fontStyle: "italic",
          }}
        >
          "The London-Paris-Frankfurt axis behind the scenes"
        </div>
      </div>

      {/* 时间标记 */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: strategyOpacity,
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 14,
            color: "#6b7280",
          }}
        >
          1860 — Prelude to Civil War
        </div>
      </div>
    </AbsoluteFill>
  );
};
