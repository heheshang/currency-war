import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * Episode05SummaryScene - Scene 15: Summary and Warning
 *
 * Timeline review: 1914-1939
 * Key takeaways list
 * Episode 06 teaser
 */
export const Episode05SummaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });

  // Timeline animation
  const timelineProgress = interpolate(frame, [120, 720], [0, 1], { extrapolateRight: "clamp" });

  // Points fade-in
  const pointsOpacity = interpolate(frame, [180, 360], [0, 1], { extrapolateRight: "clamp" });
  const pointsList = interpolate(frame, [360, 720], [0, 1], { extrapolateRight: "clamp" });
  const pointsCount = Math.floor(pointsList * 5);

  // Teaser fade-in
  const teaserOpacity = interpolate(frame, [780, 900], [0, 1], { extrapolateRight: "clamp" });

  // Title
  const titleOpacity = interpolate(frame, [60, 150], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #1e1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* Title */}
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
            fontSize: 38,
            color: "#ffd700",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          Episode 05: Key Takeaways
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
          War and Depression: The Harvest Cycle
        </div>
      </div>

      {/* Timeline */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity,
        }}
      >
        <svg width="700" height="100" viewBox="0 0 700 100">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffd700" />
              <stop offset="100%" stopColor="#8b0000" />
            </linearGradient>
          </defs>

          {/* Timeline */}
          <line
            x1="50"
            y1="50"
            x2="650"
            y2="50"
            stroke="url(#lineGrad)"
            strokeWidth="3"
            opacity="0.6"
          />

          {/* Time points */}
          {[
            { year: 1913, label: "美联储成立", x: 80 },
            { year: 1914, label: "一战爆发", x: 150 },
            { year: 1917, label: "美国参战", x: 220 },
            { year: 1919, label: "凡尔赛和约", x: 290 },
            { year: 1921, label: "农业衰退", x: 360 },
            { year: 1927, label: "秘密会议", x: 430 },
            { year: 1929, label: "大崩盘", x: 500 },
            { year: 1933, label: "新政开始", x: 570 },
          ].map((event, i) => {
            const eventOpacity = interpolate(
              frame,
              [120 + i * 90, 120 + i * 90 + 60],
              [0, 1],
              { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
            );

            return (
              <g key={i} opacity={eventOpacity}>
                <circle cx={event.x} cy="50" r="8" fill="#ffd700" />
                <text
                  x={event.x}
                  y="35"
                  fontSize="14"
                  fill="#e8e8e8"
                  textAnchor="middle"
                  fontWeight="600"
                >
                  {event.year}
                </text>
                <text
                  x={event.x}
                  y="70"
                  fontSize="11"
                  fill="#9ca3af"
                  textAnchor="middle"
                >
                  {event.label}
                </text>
              </g>
            );
          })}

          {/* Progress indicator */}
          <circle
            cx={50 + timelineProgress * 600}
            cy="50"
            r="12"
            fill="none"
            stroke="#ffd700"
            strokeWidth="3"
            opacity="0.8"
          >
            <animate
              attributeName="r"
              values="12;16;12"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* Key points list */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "10%",
          opacity: pointsOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "rgba(30, 58, 90, 0.9)",
            border: "2px solid #ffd700",
            borderRadius: "8px",
            maxWidth: "320px",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 18,
              color: "#ffd700",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Key Lessons
          </div>

          <div style={{ fontSize: 13, color: "#e8e8e8", lineHeight: "1.8" }}>
            {pointsCount >= 1 && (
              <div style={{ marginBottom: 12, opacity: pointsCount >= 1 ? 1 : 0.3 }}>
                <span style={{ color: "#22c55e", fontWeight: 600 }}>1.</span> The Fed enabled war financing
              </div>
            )}
            {pointsCount >= 2 && (
              <div style={{ marginBottom: 12, opacity: pointsCount >= 2 ? 1 : 0.3 }}>
                <span style={{ color: "#22c55e", fontWeight: 600 }}>2.</span> Bankers harvested $30 billion
              </div>
            )}
            {pointsCount >= 3 && (
              <div style={{ marginBottom: 12, opacity: pointsCount >= 3 ? 1 : 0.3 }}>
                <span style={{ color: "#22c55e", fontWeight: 600 }}>3.</span> The 1920s bubble was planned
              </div>
            )}
            {pointsCount >= 4 && (
              <div style={{ marginBottom: 12, opacity: pointsCount >= 4 ? 1 : 0.3 }}>
                <span style={{ color: "#22c55e", fontWeight: 600 }}>4.</span> The 1929 crash was engineered
              </div>
            )}
            {pointsCount >= 5 && (
              <div style={{ marginBottom: 12, opacity: pointsCount >= 5 ? 1 : 0.3 }}>
                <span style={{ color: "#ef4444", fontWeight: 600 }}>5.</span> Depression enabled asset transfer
              </div>
            )}
            <div style={{ marginTop: 12, color: "#ffd700", fontWeight: 600 }}>
              War and recession: The harvest cycle
            </div>
          </div>
        </div>
      </div>

      {/* Episode 06 teaser */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "8%",
          opacity: teaserOpacity,
        }}
      >
        <div
          style={{
            padding: "24px",
            background: "linear-gradient(135deg, #ffd700 0%, #fbbf24 100%)",
            border: "3px solid #d4af37",
            borderRadius: "8px",
            boxShadow: "0 8px 24px rgba(255, 215, 0, 0.4)",
          }}
        >
          <div
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 20,
              color: "#1a1a1a",
              marginBottom: 12,
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            Coming Next: Episode 06
          </div>

          <div
            style={{
              fontSize: 14,
              color: "#e8e8e8",
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            The Rise of Hitler — 希特勒的崛起
          </div>

          <div
            style={{
              borderTop: "2px solid rgba(255, 255, 255, 0.3)",
              paddingTop: "12px",
              fontSize: 12,
              color: "#ffd700",
              textAlign: "center",
            }}
          >
            Bankers fund both sides... again.
          </div>
        </div>
      </div>

      {/* Bottom info */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: teaserOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: 20,
            color: "#e8e8e8",
            textAlign: "center",
            fontStyle: "italic",
            marginBottom: 12,
          }}
        >
          "Understanding protects our future."
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#ffd700",
            textAlign: "center",
          }}
        >
          The harvest cycle continues... until we stop it.
        </div>
      </div>
    </AbsoluteFill>
  );
};
