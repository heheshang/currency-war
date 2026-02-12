import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Sequence } from "remotion";
import { ElasticText } from "../animations";

/**
 * HistoricalLessonsScene - 历史的教训
 *
 * 基于《货币战争》序言内容：
 * "苏联的解体、卢布的贬值；亚洲金融风暴、'四小龙'偃旗息鼓；
 *  日本经济仿佛被灌了迷魂药似的一蹶不振。"
 *
 * 展示历史上的金融战争案例及其教训
 */

interface HistoricalEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const events: HistoricalEvent[] = [
  {
    year: "1991",
    title: "Soviet Collapse",
    description: "World's largest empire dismantled without a single shot",
    icon: "☭",
    color: "#E53E3E",
  },
  {
    year: "1997",
    title: "Asian Crisis",
    description: "Four Asian Tigers brought to their knees",
    icon: "🐯",
    color: "#D69E2E",
  },
  {
    year: "1990s",
    title: "Japan's Lost Decade",
    description: "Economic miracle turned into eternal stagnation",
    icon: "🗾",
    color: "#4299E1",
  },
];

/**
 * 历史事件卡片
 */
const EventCard: React.FC<{
  event: HistoricalEvent;
  frame: number;
  index: number;
}> = ({ event, frame, index }) => {
  const startFrame = index * 120;
  const actualFrame = Math.max(0, frame - startFrame);

  const scale = interpolate(actualFrame, [0, 30, 60], [0.5, 1.1, 1], {
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(actualFrame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const y = interpolate(actualFrame, [0, 60], [20, 0], {
    extrapolateRight: "clamp",
  });
  const blur = interpolate(actualFrame, [0, 30], [10, 0], {
    extrapolateRight: "clamp",
  });

  // 淡出效果
  const fadeOut = interpolate(actualFrame, [90, 120], [1, 0]);

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: `calc(45% + ${y}px)`,
        transform: "translate(-50%, -50%)",
        opacity: opacity * fadeOut,
        filter: `blur(${blur}px)`,
      }}
    >
      <div
        style={{
          width: 400,
          background: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(26,32,44,0.9) 100%)`,
          borderRadius: "15px",
          border: `2px solid ${event.color}`,
          padding: "25px",
          boxShadow: `0 0 30px ${event.color}40`,
          transform: `scale(${scale})`,
        }}
      >
        {/* 年份 */}
        <div
          style={{
            position: "absolute",
            top: -15,
            left: 20,
            background: event.color,
            color: "white",
            padding: "5px 15px",
            borderRadius: "5px",
            fontFamily: "Cinzel, serif",
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          {event.year}
        </div>

        {/* 图标 */}
        <div
          style={{
            fontSize: 48,
            textAlign: "center",
            marginBottom: 15,
            filter: `drop-shadow(0 0 10px ${event.color})`,
          }}
        >
          {event.icon}
        </div>

        {/* 标题 */}
        <div
          style={{
            color: event.color,
            fontFamily: "Cinzel, serif",
            fontSize: 24,
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          <ElasticText text={event.title} delay={0} stagger={2} />
        </div>

        {/* 描述 */}
        <div
          style={{
            color: "#CBD5E0",
            fontFamily: "Merriweather, serif",
            fontSize: 16,
            textAlign: "center",
            lineHeight: "1.6",
          }}
        >
          {event.description}
        </div>
      </div>
    </div>
  );
};

/**
 * 崩溃效果
 */
const CollapseEffect: React.FC<{
  frame: number;
  color: string;
  delay: number;
}> = ({ frame, color, delay }) => {
  const actualFrame = Math.max(0, frame - delay);
  const progress = interpolate(actualFrame, [0, 60], [0, 1], {
    extrapolateRight: "clamp",
  });

  if (progress < 0.1) return null;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `radial-gradient(circle at 50% 50%, ${color}00 0%, ${color}40 100%)`,
        opacity: progress * 0.3,
      }}
    />
  );
};

/**
 * 破碎的符号 - 代表经济崩溃
 */
const ShatteredSymbol: React.FC<{
  frame: number;
  symbol: string;
  color: string;
  delay: number;
}> = ({ frame, symbol, color, delay }) => {
  const actualFrame = Math.max(0, frame - delay);
  const opacity = interpolate(actualFrame, [0, 30], [1, 0], {
    extrapolateRight: "clamp",
  });
  const scale = interpolate(actualFrame, [0, 60], [1, 0.3], {
    extrapolateRight: "clamp",
  });
  const rotation = interpolate(actualFrame, [0, 60], [0, 180], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "25%",
        transform: "translate(-50%, -50%)",
        opacity,
      }}
    >
      <div
        style={{
          fontSize: 120 * scale,
          color,
          transform: `rotate(${rotation}deg)`,
          filter: "drop-shadow(0 0 30px currentColor)",
        }}
      >
        {symbol}
      </div>

      {/* 碎片效果 */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const distance = interpolate(actualFrame, [0, 60], [0, 100]);
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: `translate(${x}px, ${y}px)`,
              fontSize: 20,
              color,
              opacity: 1 - distance / 100,
            }}
          >
            💔
          </div>
        );
      })}
    </div>
  );
};

/**
 * 问题文字 - 引发思考
 */
const QuestionText: React.FC<{ frame: number }> = ({ frame }) => {
  const startFrame = 360;
  const actualFrame = Math.max(0, frame - startFrame);

  const opacity = interpolate(actualFrame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "15%",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
        opacity,
        width: "90%",
      }}
    >
      <div
        style={{
          fontSize: 32,
          color: "#FC8181",
          fontFamily: "Merriweather, serif",
          fontWeight: 600,
          marginBottom: 20,
        }}
      >
        <ElasticText
          text="Coincidence? Or deliberate design?"
          delay={0}
          stagger={2}
        />
      </div>
      <div
        style={{
          fontSize: 20,
          color: "#CBD5E0",
          fontFamily: "Merriweather, serif",
          lineHeight: "1.8",
        }}
      >
        <ElasticText
          text="Who was behind these events?"
          delay={20}
          stagger={2}
        />
        <br />
        <ElasticText
          text="And who might be the next target?"
          delay={40}
          stagger={2}
        />
      </div>
    </div>
  );
};

/**
 * 幕后黑手暗示
 */
const ShadowHand: React.FC<{ frame: number }> = ({ frame }) => {
  const opacity = interpolate(frame, [420, 450, 900], [0, 1, 1]);
  const scale = interpolate(frame, [420, 480], [0.8, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        right: "8%",
        bottom: "20%",
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <div
        style={{
          fontSize: 100,
          filter: "drop-shadow(0 0 20px rgba(0,0,0,0.8))",
        }}
      >
        🤝
      </div>
      <div
        style={{
          position: "absolute",
          bottom: -30,
          left: "50%",
          transform: "translateX(-50%)",
          whiteSpace: "nowrap",
          background: "rgba(0,0,0,0.7)",
          padding: "8px 15px",
          borderRadius: "5px",
          color: "#A0AEC0",
          fontFamily: "Merriweather, serif",
          fontSize: 14,
        }}
      >
        The Hidden Hands
      </div>
    </div>
  );
};

/**
 * 时间线标记
 */
const TimelineMarker: React.FC<{ frame: number }> = ({ frame }) => {
  const progress = interpolate(frame, [0, 360], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: "8%",
        left: "10%",
        right: "10%",
        height: 4,
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "2px",
      }}
    >
      {/* 进度 */}
      <div
        style={{
          height: "100%",
          width: `${progress * 100}%`,
          background:
            "linear-gradient(90deg, #E53E3E 0%, #D69E2E 50%, #4299E1 100%)",
          borderRadius: "2px",
          transition: "width 0.3s",
        }}
      />

      {/* 标记点 */}
      {events.map((event, i) => {
        const left = ((i + 1) / events.length) * 100;
        const active = progress > (i + 1) / events.length;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${left}%`,
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: 16,
              height: 16,
              background: active ? event.color : "rgba(255,255,255,0.3)",
              borderRadius: "50%",
              border: `2px solid ${event.color}`,
              opacity: active ? 1 : 0.5,
            }}
          />
        );
      })}
    </div>
  );
};

/**
 * 主场景组件
 */
export const HistoricalLessonsScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #1A202C 0%, #0D1117 100%)",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: interpolate(frame, [0, 30], [0, 1]),
        }}
      >
        <div
          style={{
            fontSize: 36,
            color: "#ECC94B",
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            textAlign: "center",
            textShadow: "0 0 20px rgba(236, 201, 75, 0.5)",
          }}
        >
          <ElasticText text="History's Warning" delay={0} stagger={3} />
        </div>
      </div>

      {/* 历史事件序列 */}
      <Sequence durationInFrames={360}>
        {events.map((event, i) => (
          <React.Fragment key={i}>
            <EventCard event={event} frame={frame} index={i} />
            <CollapseEffect
              frame={frame}
              color={event.color}
              delay={i * 120 + 60}
            />
            <ShatteredSymbol
              frame={frame}
              symbol={event.icon}
              color={event.color}
              delay={i * 120 + 60}
            />
          </React.Fragment>
        ))}
      </Sequence>

      <TimelineMarker frame={frame} />
      <QuestionText frame={frame} />
      <ShadowHand frame={frame} />

      {/* 背景纹理 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
          backgroundSize: "10px 10px",
        }}
      />
    </AbsoluteFill>
  );
};
