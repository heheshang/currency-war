import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, random } from "remotion";

/**
 * SummaryScene - 总结场景
 *
 * Episode04 关键要点总结
 * 预告下一集内容
 */
export const SummaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 要点逐个淡入
  const pointsOpacity = interpolate(frame, [90, 360], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 下一集预告淡入
  const previewOpacity = interpolate(frame, [450, 630], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at center, #1a0000 0%, #000000 100%)",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: opacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 42,
            color: "#ffd700",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: 2,
            textShadow: "0 0 30px rgba(255, 215, 0, 0.3)",
          }}
        >
          Episode 04: Key Takeaways
        </div>
      </div>

      {/* 关键要点 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          opacity: pointsOpacity,
        }}
      >
        {[...Array(7)].map((_, i) => {
          const delay = i * 30;
          const itemOpacity = interpolate(
            frame,
            [90 + delay, 120 + delay],
            [0, 1],
            { extrapolateRight: "clamp" },
          );

          return (
            <div
              key={i}
              style={{
                padding: "20px",
                background: "rgba(30, 58, 138, 0.3)",
                borderLeft: "4px solid #ffd700",
                marginBottom: "16px",
                opacity: itemOpacity,
                transform: `translateX(${interpolate(frame, [60 + delay, 120 + delay], [-50, 0], { extrapolateRight: "clamp" })}px)`,
              }}
            >
              <div
                style={{
                  fontFamily: "Cinzel, serif",
                  fontSize: 20,
                  color: "#ffd700",
                  marginBottom: 12,
                  fontWeight: 600,
                }}
              >
                {i + 1}.
              </div>
              <div
                style={{ fontSize: 14, color: "#e8e8e8", lineHeight: "1.6" }}
              >
                {i === 0 &&
                  "The Federal Reserve Act was drafted in secret on Jekyll Island"}
                {i === 1 &&
                  "7 Wall Street tycoons conspired with European bankers"}
                {i === 2 && "The 1907 panic was engineered to create demand"}
                {i === 3 && "The Fed is privately owned, NOT federal"}
                {i === 4 &&
                  "Paul Warburg designed a hidden remote control device"}
                {i === 5 && "1913 election was manipulated"}
                {i === 6 && "Plan B created illusion of opposition"}
              </div>
            </div>
          );
        })}
      </div>

      {/* 系列回顾 */}
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: pointsOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 18,
            color: "#9ca3af",
            textAlign: "center",
            marginBottom: 24,
            letterSpacing: 2,
          }}
        >
          CURRENCY WARS
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#e8e8e8",
            textAlign: "center",
            lineHeight: "1.8",
          }}
        >
          <div style={{ marginBottom: 16 }}>"I have two great enemies:"</div>
          <div style={{ marginBottom: 16 }}>— Abraham Lincoln</div>
          <div style={{ marginBottom: 16 }}>The war continues to this day.</div>
        </div>
      </div>

      {/* 下一集预告 */}
      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: previewOpacity,
        }}
      >
        <div
          style={{
            padding: "30px",
            background: "rgba(139, 0, 0, 0.4)",
            border: "2px solid #d4af37",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 24,
              color: "#d4af37",
              marginBottom: 16,
            }}
          >
            COMING NEXT
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#e8e8e8",
              lineHeight: "1.6",
            }}
          >
            Episode 5: World War I
          </div>
          <div style={{ fontSize: 13, color: "#9ca3af", lineHeight: "1.6" }}>
            The Bankers' First World War
          </div>
          <div style={{ fontSize: 13, color: "#6b7280", marginTop: 16 }}>
            How the Fed funded its first major war.
          </div>
          <div style={{ fontSize: 13, color: "#ffd700", marginTop: 12 }}>
            The real reason America entered the conflict.
          </div>
          <div style={{ fontSize: 13, color: "#e8e8e8", marginTop: 16 }}>
            The debt that would never be repaid.
          </div>
        </div>
      </div>

      {/* 结束标记 */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: previewOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 16,
            color: "#9ca3af",
            textAlign: "center",
            letterSpacing: 4,
          }}
        >
          TO BE CONTINUED...
        </div>
      </div>

      {/* 背景粒子效果 */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${random(null) * 100}%`,
            left: `${random(null) * 100}%`,
            width: `${2 + random(null) * 3}px`,
            height: `${2 + random(null) * 3}px`,
            background: "rgba(255, 215, 0, 0.3)",
            borderRadius: "50%",
            opacity:
              interpolate(frame, [600, 900], [0, 0.5], {
                extrapolateRight: "clamp",
              }) * random(null),
          }}
        />
      ))}
    </AbsoluteFill>
  );
};
