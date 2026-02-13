import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

// Animated number counter with spring
const AnimatedCounter: React.FC<{
  value: number;
  startFrame: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  style?: React.CSSProperties;
}> = ({
  value,
  startFrame,
  duration = 60,
  prefix = "",
  suffix = "",
  decimals = 0,
  style,
}) => {
  const frame = useCurrentFrame();
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / duration));
  const animatedValue = spring({
    frame: progress * 60,
    fps: 30,
    config: { damping: 15 },
  });

  return (
    <span style={style}>
      {prefix}
      {animatedValue.toFixed(decimals)}
      {suffix}
    </span>
  );
};

// Typewriter text component
const TypewriterText: React.FC<{
  text: string;
  startFrame: number;
  speed?: number;
  style?: React.CSSProperties;
}> = ({ text, startFrame, speed = 3, style }) => {
  const frame = useCurrentFrame();
  const charCount = Math.max(0, Math.floor((frame - startFrame) / speed));

  return (
    <span style={style}>
      {text.slice(0, charCount)}
      {charCount < text.length && (
        <span style={{ animation: "blink 1s infinite" }}>|</span>
      )}
    </span>
  );
};

// Floating house icons
const FloatingHouses: React.FC = () => {
  const frame = useCurrentFrame();
  const houses = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 10 + (i % 6) * 15,
      y: 10 + Math.floor(i / 6) * 30,
      delay: i * 5,
      float: Math.sin(i) * 10,
    }));
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {houses.map((h) => {
        const y = ((frame * 0.5 + h.delay) % 60) - 10;
        const opacity = Math.sin(frame * 0.05 + h.id) * 0.3 + 0.5;
        return (
          <div
            key={h.id}
            style={{
              position: "absolute",
              left: `${h.x}%`,
              top: `${h.y + y}%`,
              fontSize: 16,
              opacity,
              transform: `translateY(${h.float}px)`,
            }}
          >
            🏠
          </div>
        );
      })}
    </div>
  );
};

// Animated house cards
const AnimatedHouseCard: React.FC<{
  name: string;
  index: number;
  color: string;
}> = ({ name, index, color }) => {
  const frame = useCurrentFrame();
  const delay = 30 + index * 20;
  const opacity = interpolate(frame, [delay, delay + 30], [0, 1]);
  const scale = interpolate(frame, [delay, delay + 30], [0.5, 1]);
  const float = Math.sin(frame * 0.05 + index) * 5;

  return (
    <div
      style={{
        width: 140,
        height: 110,
        background: `linear-gradient(135deg, ${color}, ${color}cc)`,
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transform: `scale(${scale}) translateY(${float}px)`,
        opacity,
        boxShadow: `0 10px 30px ${color}66`,
      }}
    >
      <span style={{ fontSize: 32 }}>🏠</span>
      <span
        style={{ fontSize: 13, color: "#fff", marginTop: 8, fontWeight: 600 }}
      >
        {name}
      </span>
    </div>
  );
};

// Connection lines
const ConnectionLines: React.FC = () => {
  const frame = useCurrentFrame();
  const dashOffset = frame * 2;

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      viewBox="0 0 1920 1080"
    >
      <line
        x1="35%"
        y1="35%"
        x2="65%"
        y2="35%"
        stroke="#ffd700"
        strokeWidth="3"
        strokeDasharray="10,5"
        strokeDashoffset={dashOffset}
        opacity="0.5"
      />
    </svg>
  );
};

// Pulsing info box
const InfoBox: React.FC<{
  startFrame?: number;
  children: React.ReactNode;
}> = ({ startFrame = 70, children }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startFrame, startFrame + 20], [0, 1]);
  const pulse = Math.sin((frame - startFrame) * 0.1) * 0.05 + 1;

  return (
    <div
      style={{
        opacity,
        transform: `scale(${pulse})`,
        padding: "20px 30px",
        background: "rgba(239, 68, 68, 0.15)",
        borderRadius: 12,
        border: "2px solid #ef4444",
        boxShadow: "0 0 30px rgba(239, 68, 68, 0.3)",
      }}
    >
      {children}
    </div>
  );
};

/**
 * Fannie Freddie Scene - 房利美和房地美
 * Enhanced with richer animations
 */
export const FannieFreddieScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const contentOpacity = interpolate(frame, [20, 60], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0d1117 0%, #1a1a2e 100%)",
      }}
    >
      {/* Animated background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 40%, rgba(59, 130, 246, ${0.1 + Math.sin(frame * 0.05) * 0.05}) 0%, transparent 50%)`,
        }}
      />

      {/* Floating houses */}
      <FloatingHouses />

      {/* Connection lines */}
      <ConnectionLines />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontSize: 38,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
        }}
      >
        <TypewriterText
          text="Fannie Mae & Freddie Mac"
          startFrame={0}
          speed={4}
        />
      </div>

      {/* Houses */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          gap: 30,
          opacity: contentOpacity,
        }}
      >
        <AnimatedHouseCard name="Fannie Mae" index={0} color="#3b82f6" />
        <AnimatedHouseCard name="Freddie Mac" index={1} color="#8b5cf6" />
      </div>

      {/* Description */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          textAlign: "center",
          opacity: contentOpacity,
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: "#e8e8e8",
            marginBottom: 15,
            fontWeight: 600,
          }}
        >
          "The Second Federal Reserve"
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af", marginBottom: 5 }}>
          政府发起机构 (GSE)
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af" }}>
          持有或担保美国近一半的房屋贷款
        </div>
      </div>

      {/* Numbers */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <InfoBox startFrame={70}>
          <div style={{ fontSize: 48, color: "#ef4444", fontWeight: 700 }}>
            <AnimatedCounter
              value={4}
              startFrame={75}
              duration={50}
              prefix="$"
              suffix=" Trillion"
            />
          </div>
          <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 8 }}>
            in Mortgage Bonds / 抵押债券
          </div>
          <div style={{ fontSize: 14, color: "#6b7280", marginTop: 5 }}>
            2008金融危机导火索
          </div>
        </InfoBox>
      </div>

      {/* CSS */}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </AbsoluteFill>
  );
};
