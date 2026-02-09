import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/**
 * CongressScene - 国会通过场景
 *
 * 展现1913年12月23日，圣诞节前夕
 * 《联邦储备法案》在国会匆忙通过
 */
export const CongressScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 投票进度
  const voteProgress = interpolate(frame, [0, 120], [0, 1]);

  // 赞成数量
  const yesVotes = Math.floor(interpolate(frame, [0, 120], [0, 298]));
  const noVotes = Math.floor(interpolate(frame, [0, 120], [0, 60]));

  // 钟声位置
  const gavelPosition = interpolate(frame, [90, 120], [0, 100]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontFamily: "Cinzel, serif",
          fontSize: 42,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        December 23, 1913
      </div>

      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#9ca3af",
          fontFamily: "Merriweather, serif",
          fontSize: 18,
          fontStyle: "italic",
        }}
      >
        Christmas Eve... the perfect day for deception
      </div>

      {/* 国会内部 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 500,
          height: 250,
          background: "rgba(20, 20, 30, 0.5)",
          borderRadius: 10,
          border: "2px solid #ffd700",
          padding: 20,
        }}
      >
        {/* 投票板 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          {/* 赞成方 */}
          <div
            style={{
              flex: 1,
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: "#ffd700",
                fontFamily: "Cinzel, serif",
                fontSize: 36,
                fontWeight: 700,
                marginBottom: 10,
              }}
            >
              YES
            </div>
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: "#22c55e",
              }}
            >
              {yesVotes}
            </div>
            <div
              style={{
                fontSize: 14,
                color: "#9ca3af",
              }}
            >
              Required: 290
            </div>
          </div>

          {/* 反对方 */}
          <div
            style={{
              flex: 1,
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: "#ef4444",
                fontFamily: "Cinzel, serif",
                fontSize: 36,
                fontWeight: 700,
                marginBottom: 10,
              }}
            >
              NO
            </div>
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: "#ef4444",
              }}
            >
              {noVotes}
            </div>
            <div
              style={{
                fontSize: 14,
                color: "#9ca3af",
              }}
            >
              Required: 60
            </div>
          </div>
        </div>

        {/* 进度条 */}
        <div
          style={{
            width: "100%",
            height: 20,
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${voteProgress * 100}%`,
              background: `linear-gradient(90deg, #22c55e 0%, #16a34a 100%)`,
              borderRadius: 10,
            }}
          />
        </div>
      </div>

      {/* 钟声 */}
      {frame > 90 && (
        <div
          style={{
            position: "absolute",
            bottom: "30%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              background: "#8b4513",
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 98% 65%, 50% 100%, 2% 65%, 39% 35%, 2% 35%, 50% 0%)",
              transform: `rotate(${gavelPosition}deg)`,
            }}
          />
        </div>
      )}

      {/* 说明文字 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontFamily: "Merriweather, serif",
          fontSize: 18,
          textAlign: "center",
          maxWidth: "70%",
          lineHeight: "1.6",
          opacity: interpolate(frame, [120, 150], [0, 1]),
        }}
      >
        In the rush before Christmas...
        <br />
        <span
          style={{
            color: "#ef4444",
            fontWeight: 600,
          }}
        >
          ...the bill was pushed through without proper debate.
        </span>
      </div>

      {/* 警告标识 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: interpolate(frame, [150, 180], [0, 1]),
        }}
      >
        <div
          style={{
            padding: "10px 20px",
            background: "rgba(239, 68, 68, 0.2)",
            border: "2px solid #ef4444",
            borderRadius: 5,
            color: "#ef4444",
            fontFamily: "Cinzel, serif",
            fontSize: 24,
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          PASSED
        </div>
      </div>
    </AbsoluteFill>
  );
};
