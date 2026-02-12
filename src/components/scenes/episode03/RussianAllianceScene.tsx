import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import AmericanMap from "../../maps/AmericanMap";

/**
 * RussianAllianceScene - 俄国同盟场景
 *
 * 沙皇亚历山大二世支持林肯
 * 俄国舰队抵达纽约和旧金山
 * 阻止欧洲列强干预内战
 */
export const RussianAllianceScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const mapShow = interpolate(frame, [60, 150], [0, 1], {
    extrapolateRight: "clamp",
  });
  const quoteOpacity = interpolate(frame, [210, 300], [0, 1], {
    extrapolateRight: "clamp",
  });
  const fleetOpacity = interpolate(frame, [360, 450], [0, 1], {
    extrapolateRight: "clamp",
  });
  const resultOpacity = interpolate(frame, [540, 630], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 舰队航行动画
  const fleetProgress = interpolate(frame, [360, 540], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at center, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* 美国地图背景 */}
      <div style={{ opacity: mapShow }}>
        <AmericanMap
          visibleCityIds={["nyc", "washington", "neworleans"]}
          showLabels={true}
          showNorthSouth={true}
          theme="documentary"
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
          The Russian Alliance
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
          Tsar Alexander II — Lincoln's Unlikely Ally
        </div>
      </div>

      {/* 亚历山大二世名言 */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          opacity: quoteOpacity,
          zIndex: 10,
          textAlign: "center",
          padding: "20px 30px",
          background: "rgba(212, 175, 55, 0.1)",
          border: "2px solid #d4af37",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 12,
            color: "#d4af37",
            letterSpacing: 2,
            marginBottom: 10,
          }}
        >
          TSAR ALEXANDER II
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 16,
            color: "#e8e8e8",
            fontStyle: "italic",
            lineHeight: "1.6",
          }}
        >
          "I will agree to whatever he asks before I even read his letter"
        </div>
      </div>

      {/* 舰队动画 */}
      <div style={{ position: "absolute", inset: 0, zIndex: 10 }}>
        {/* 纽约舰队 */}
        <div
          style={{
            position: "absolute",
            left: `${interpolate(fleetProgress, [0, 1], [15, 78], { extrapolateRight: "clamp" })}%`,
            top: `${interpolate(fleetProgress, [0, 1], [20, 28], { extrapolateRight: "clamp" })}%`,
            opacity: fleetOpacity,
            transform: "translate(-50%, -50%)",
          }}
        >
          <svg width={60} height={40} viewBox="0 0 60 40">
            {/* 船体 */}
            <path
              d="M 5,25 Q 30,35 55,25 L 55,20 Q 30,25 5,20 Z"
              fill="#1e3a5a"
              stroke="#d4af37"
              strokeWidth={1}
            />
            {/* 帆 */}
            <path
              d="M 30,18 L 30,5 L 45,15 Z"
              fill="#f5e6d3"
              stroke="#8b5a2b"
              strokeWidth={1}
            />
            {/* 旗帜 */}
            <path d="M 30,5 L 30,0 L 40,3 Z" fill="#d4af37" />
          </svg>
          <div
            style={{
              position: "absolute",
              bottom: -20,
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "Merriweather, serif",
              fontSize: 10,
              color: "#d4af37",
              whiteSpace: "nowrap",
            }}
          >
            Russian Fleet
          </div>
        </div>

        {/* 旧金山舰队 */}
        <div
          style={{
            position: "absolute",
            left: `${interpolate(fleetProgress, [0, 1], [5, 18], { extrapolateRight: "clamp" })}%`,
            top: `${interpolate(fleetProgress, [0, 1], [15, 42], { extrapolateRight: "clamp" })}%`,
            opacity: fleetOpacity,
            transform: "translate(-50%, -50%)",
          }}
        >
          <svg width={60} height={40} viewBox="0 0 60 40">
            {/* 船体 */}
            <path
              d="M 5,25 Q 30,35 55,25 L 55,20 Q 30,25 5,20 Z"
              fill="#1e3a5a"
              stroke="#d4af37"
              strokeWidth={1}
            />
            {/* 帆 */}
            <path
              d="M 30,18 L 30,5 L 45,15 Z"
              fill="#f5e6d3"
              stroke="#8b5a2b"
              strokeWidth={1}
            />
            {/* 旗帜 */}
            <path d="M 30,5 L 30,0 L 40,3 Z" fill="#d4af37" />
          </svg>
          <div
            style={{
              position: "absolute",
              bottom: -20,
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "Merriweather, serif",
              fontSize: 10,
              color: "#d4af37",
              whiteSpace: "nowrap",
            }}
          >
            Pacific Fleet
          </div>
        </div>
      </div>

      {/* 舰队信息 */}
      <div
        style={{
          position: "absolute",
          bottom: "32%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: fleetOpacity,
          zIndex: 10,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 14,
            color: "#d4af37",
            letterSpacing: 2,
            marginBottom: 10,
          }}
        >
          SEPTEMBER — OCTOBER 1863
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 14,
            color: "#e8e8e8",
            lineHeight: "1.6",
          }}
        >
          Russian fleet arrives in New York and San Francisco
        </div>
      </div>

      {/* 结果 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "75%",
          opacity: resultOpacity,
          zIndex: 10,
          textAlign: "center",
          padding: "15px 25px",
          background: "rgba(34, 139, 34, 0.15)",
          border: "1px solid #228B22",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 14,
            color: "#228B22",
            marginBottom: 8,
          }}
        >
          THE RESULT
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 14,
            color: "#e8e8e8",
            lineHeight: "1.5",
          }}
        >
          European powers hesitate to intervene
        </div>
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 13,
            color: "#9ca3af",
            marginTop: 8,
            fontStyle: "italic",
          }}
        >
          Lincoln gains crucial time to turn the tide of war
        </div>
      </div>

      {/* 历史注脚 */}
      <div
        style={{
          position: "absolute",
          bottom: "4%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: resultOpacity,
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 12,
            color: "#6b7280",
            fontStyle: "italic",
          }}
        >
          1867: America purchases Alaska to pay for Russia's war assistance
        </div>
      </div>
    </AbsoluteFill>
  );
};
