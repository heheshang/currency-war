import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { CartoonCharacter } from "../characters/CartoonCharacter";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

/**
 * TimelineScene - 历史时间线组件
 *
 * 展示货币体系演变的关键年份
 */
export const TimelineScene: React.FC = () => {
  const frame = useCurrentFrame();

  // 时间线事件
  const events: TimelineEvent[] = [
    {
      year: 1694,
      title: "Bank of England Founded",
      description: "First central bank established",
    },
    {
      year: 1791,
      title: "First US Bank",
      description: "Alexander Hamilton's vision",
    },
    {
      year: 1913,
      title: "Federal Reserve Created",
      description: "Private control of US money",
    },
    {
      year: 1933,
      title: "Gold Confiscation",
      description: "Roosevelt's Executive Order 6102",
    },
    {
      year: 1971,
      title: "Nixon Shock",
      description: "End of gold convertibility",
    },
  ];

  // 时间线进度
  const timelineProgress = interpolate(frame, [0, 180], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0d1117 0%, #1a1a2e 100%)",
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
        A Brief History of Money
      </div>

      {/* 时间线 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "10%",
          right: "10%",
          height: "50%",
        }}
      >
        {/* 主轴线 */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #ffd700 0%, #1e3a5a 100%)",
          }}
        />

        {/* 时间点 */}
        {events.map((event, index) => {
          const eventProgress = Math.max(
            0,
            Math.min(
              1,
              (timelineProgress * events.length - index - 0.5) /
                (events.length - index),
            ),
          );

          const leftPosition = (index / (events.length - 1)) * 100;

          return (
            <div
              key={event.year}
              style={{
                position: "absolute",
                top: "50%",
                left: `${leftPosition}%`,
                transform: "translate(-50%, -50%)",
                opacity: eventProgress,
              }}
            >
              {/* 时间点圆圈 */}
              <div
                style={{
                  width: 30,
                  height: 30,
                  background: "#ffd700",
                  borderRadius: "50%",
                  border: "4px solid #1a1a2e",
                  boxShadow: "0 0 20px rgba(255, 215, 0, 0.8)",
                  marginBottom: 10,
                }}
              />

              {/* 年份 */}
              <div
                style={{
                  color: "#ffd700",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 24,
                  fontWeight: 700,
                  textAlign: "center",
                  marginBottom: 5,
                }}
              >
                {event.year}
              </div>

              {/* 标题 */}
              <div
                style={{
                  color: "#e8e8e8",
                  fontFamily: "Cinzel, serif",
                  fontSize: 14,
                  fontWeight: 600,
                  textAlign: "center",
                  marginBottom: 3,
                  maxWidth: 120,
                }}
              >
                {event.title}
              </div>

              {/* 描述 */}
              <div
                style={{
                  color: "#9ca3af",
                  fontFamily: "Merriweather, serif",
                  fontSize: 11,
                  textAlign: "center",
                  maxWidth: 120,
                  fontStyle: "italic",
                }}
              >
                {event.description}
              </div>
            </div>
          );
        })}
      </div>

      <CartoonCharacter
        x={10}
        y={75}
        scale={0.6}
        characterType="politician"
        action="talk"
        facingRight={true}
        frame={frame}
      />

      <CartoonCharacter
        x={90}
        y={75}
        scale={0.6}
        characterType="banker"
        action="think"
        facingRight={false}
        frame={frame + 20}
      />

      {/* 进度指示器 */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: 8,
          background: "rgba(255, 215, 0, 0.2)",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${timelineProgress * 100}%`,
            background: "#ffd700",
            borderRadius: 4,
          }}
        />
      </div>

      {/* 说明文字 */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#e8e8e8",
          fontFamily: "Merriweather, serif",
          fontSize: 18,
          textAlign: "center",
          maxWidth: "70%",
          lineHeight: "1.6",
        }}
      >
        Key moments that shaped our monetary system...
        <br />
        <span
          style={{
            color: "#ffd700",
            fontWeight: 600,
          }}
        >
          ...and led us to where we are today.
        </span>
      </div>
    </AbsoluteFill>
  );
};
