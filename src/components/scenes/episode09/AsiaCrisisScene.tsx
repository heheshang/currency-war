import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * Asia Crisis Scene - 亚洲金融危机
 *
 * Enhanced with:
 * - Falling countries effect
 * - Currency collapse counter
 * - Domino/chain reaction visualization
 * - Dramatic crisis atmosphere
 * - NEW: Fire/flames, Falling debris, Emergency warning
 */

// Typewriter effect
const getVisibleText = (
  text: string,
  frame: number,
  startFrame: number,
  speed: number = 2,
): string => {
  const progress = Math.max(0, frame - startFrame) / speed;
  const charCount = Math.floor(progress);
  return text.slice(0, charCount);
};

// Number counter
const useCounterAnimation = (
  target: number,
  frame: number,
  startFrame: number,
  duration: number = 25,
): string => {
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / duration));
  const eased = 1 - Math.pow(1 - progress, 3);
  return Math.floor(target * eased).toString();
};

const COUNTRIES = [
  { name: "Thailand", flag: "TH", color: "#fbbf24", fall: -50 },
  { name: "Indonesia", flag: "ID", color: "#ef4444", fall: -80 },
  { name: "South Korea", flag: "KR", color: "#3b82f6", fall: -60 },
  { name: "Russia", flag: "RU", color: "#ef4444", fall: -70 },
];

// NEW: Flame effect
const Flames: React.FC<{ frame: number }> = ({ frame }) => {
  const flames = Array.from({ length: 8 }).map((_, i) => {
    const y = interpolate((frame + i * 10) % 60, [0, 60], [0, 30]);
    const x = 10 + i * 12;
    const height = 20 + Math.sin(frame * 0.2 + i) * 10;
    const opacity = interpolate(
      (frame + i * 10) % 60,
      [0, 30, 60],
      [0, 0.4, 0],
    );

    return { y, x, height, opacity };
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "25%",
        overflow: "hidden",
      }}
    >
      {flames.map((f, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            bottom: 0,
            left: `${f.x}%`,
            width: 15,
            height: f.height,
            background: `linear-gradient(180deg, rgba(239, 68, 68, ${f.opacity}), rgba(251, 191, 36, ${f.opacity * 0.5}), transparent)`,
            borderRadius: "50% 50% 20% 20%",
            transform: `translateY(${-f.y}px)`,
          }}
        />
      ))}
    </div>
  );
};

// NEW: Falling debris effect
const FallingDebris: React.FC<{ frame: number }> = ({ frame }) => {
  const debris = Array.from({ length: 10 }).map((_, i) => {
    const y = interpolate((frame + i * 8) % 100, [0, 100], [0, 80]);
    const x = 15 + ((i * 8) % 70);
    const rotation = (frame + i * 15) * 2;
    const opacity = interpolate(
      (frame + i * 8) % 100,
      [0, 50, 100],
      [0, 0.4, 0],
    );

    return { y, x, rotation, opacity };
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {debris.map((d, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${d.y}%`,
            left: `${d.x}%`,
            width: 4,
            height: 8 + (i % 3) * 4,
            background: "rgba(100, 100, 100, 0.5)",
            transform: `rotate(${d.rotation}deg)`,
            opacity: d.opacity,
          }}
        />
      ))}
    </div>
  );
};

// NEW: Emergency warning light
const EmergencyLight: React.FC<{ frame: number }> = ({ frame }) => {
  const flash = interpolate(Math.sin(frame * 0.3), [-1, 1], [0.3, 1]);

  return (
    <div style={{ position: "absolute", top: "5%", right: "5%" }}>
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: `rgba(239, 68, 68, ${flash})`,
          boxShadow: `0 0 ${20 * flash}px rgba(239, 68, 68, 0.5)`,
          opacity: interpolate(frame, [20, 40], [0, 0.6]),
        }}
      />
    </div>
  );
};

export const AsiaCrisisScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const countriesOpacity = interpolate(frame, [15, 50], [0, 1], {
    extrapolateRight: "clamp",
  });
  const currencyOpacity = interpolate(frame, [35, 80], [0, 1], {
    extrapolateRight: "clamp",
  });
  const summaryOpacity = interpolate(frame, [60, 100], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Country fall animation
  const getCountryFall = (index: number) => {
    const delay = index * 10;
    return spring({
      frame: frame - delay,
      fps: 30,
      from: 0,
      to: 1,
      config: { damping: 15 },
    });
  };

  // Currency counters
  const thaiValue = useCounterAnimation(50, frame, 45, 20);
  const indonesiaValue = useCounterAnimation(80, frame, 55, 20);
  const koreaValue = useCounterAnimation(60, frame, 65, 20);

  // Crisis pulse
  const crisisPulse = interpolate(Math.sin(frame * 0.15), [-1, 1], [0.9, 1.1]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0d1117 0%, #1f1f1f 100%)",
      }}
    >
      {/* NEW: Flames at bottom */}
      <Flames frame={frame} />

      {/* NEW: Falling debris */}
      <FallingDebris frame={frame} />

      {/* NEW: Emergency light */}
      <EmergencyLight frame={frame} />

      {/* Background crisis atmosphere */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at center, rgba(239, 68, 68, ${0.03 * crisisPulse}) 0%, transparent 60%)`,
        }}
      />

      {/* Title with shake */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: `translateX(-50%) translateY(${frame > 30 ? Math.sin(frame * 0.3) * 2 : 0}px)`,
          color: "#ef4444",
          fontSize: 48,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
        }}
      >
        1997 Asian Financial Crisis
      </div>

      {/* Countries falling with stagger */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 20,
          opacity: countriesOpacity,
        }}
      >
        {COUNTRIES.map((country, i) => {
          const fall = getCountryFall(i);
          const offset = interpolate(fall, [0, 1], [0, 10 + i * 5]);
          return (
            <div
              key={i}
              style={{
                padding: "15px 20px",
                background: "rgba(239, 68, 68, 0.15)",
                borderRadius: 12,
                border: `2px solid ${country.color}`,
                textAlign: "center",
                transform: `translateY(${offset}px)`,
                opacity: 1 - offset / 30,
              }}
            >
              <div
                style={{ fontSize: 24, fontWeight: 700, color: country.color }}
              >
                {country.flag}
              </div>
              <div style={{ fontSize: 14, color: "#e8e8e8", marginTop: 5 }}>
                {country.name}
              </div>
            </div>
          );
        })}
      </div>

      {/* Currency collapse with counters */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          textAlign: "center",
          opacity: currencyOpacity,
        }}
      >
        <div style={{ fontSize: 18, color: "#9ca3af", marginBottom: 15 }}>
          Currency Collapse Rates
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 30 }}>
          <div>
            <div style={{ fontSize: 28, color: "#ef4444", fontWeight: 700 }}>
              -{thaiValue}%
            </div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>Thai Baht</div>
          </div>
          <div>
            <div style={{ fontSize: 28, color: "#ef4444", fontWeight: 700 }}>
              -{indonesiaValue}%
            </div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>
              Indonesia Rupiah
            </div>
          </div>
          <div>
            <div style={{ fontSize: 28, color: "#ef4444", fontWeight: 700 }}>
              -{koreaValue}%
            </div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>Korean Won</div>
          </div>
        </div>
      </div>

      {/* Summary with typewriter */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: summaryOpacity,
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: "#ffd700",
            fontWeight: 600,
            marginBottom: 10,
          }}
        >
          {getVisibleText("The Cycle Continues", frame, 70, 3)}
        </div>
        <div style={{ fontSize: 14, color: "#9ca3af" }}>
          {getVisibleText("IMF再次以援助为条件，要求开放市场", frame, 80, 2)}
        </div>
        <div style={{ fontSize: 14, color: "#ef4444", marginTop: 5 }}>
          {getVisibleText("发展中国家被迫以跳楼价出卖核心资产", frame, 90, 2)}
        </div>
      </div>
    </AbsoluteFill>
  );
};
