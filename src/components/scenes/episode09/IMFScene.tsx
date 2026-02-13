import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * IMF Scene - IMF债务解决方案
 *
 * Enhanced with:
 * - Chain/shackle visualization
 * - IMF conditions staggered reveal
 * - Money flow animation
 * - Counter for payments
 * - NEW: Prison bars, Money drain pipe, Contract signature effect
 */

// Typewriter effect
const getVisibleText = (text: string, frame: number, startFrame: number, speed: number = 2): string => {
  const progress = Math.max(0, frame - startFrame) / speed;
  const charCount = Math.floor(progress);
  return text.slice(0, charCount);
};

// Number counter
const useCounterAnimation = (target: number, frame: number, startFrame: number, duration: number = 25): string => {
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / duration));
  const eased = 1 - Math.pow(1 - progress, 3);
  return Math.floor(target * eased).toString();
};

const CONDITIONS = [
  { en: "Cut Government Spending", cn: "削减政府开支", color: "#ef4444" },
  { en: "Raise Taxes", cn: "提高税收", color: "#f97316" },
  { en: "Currency Devaluation", cn: "货币贬值", color: "#eab308" },
  { en: "Privatize Assets", cn: "核心资产私有化", color: "#22c55e" },
  { en: "Free Capital Markets", cn: "资本市场自由化", color: "#06b6d4" },
  { en: "Free Trade", cn: "自由贸易", color: "#8b5cf6" },
];

// NEW: Prison bars effect
const PrisonBars: React.FC<{ frame: number }> = ({ frame }) => {
  const bars = Array.from({ length: 8 }).map((_, i) => {
    const height = interpolate(frame, [20 + i * 5, 50 + i * 5], [0, 100], { extrapolateRight: "clamp" });
    return height;
  });

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: 0.15 }}>
      {bars.map((h, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${10 + i * 12}%`,
            width: 4,
            background: "linear-gradient(180deg, #666 0%, #333 50%, #666 100%)",
            height: `${h}%`,
          }}
        />
      ))}
    </div>
  );
};

// NEW: Money drain pipe effect
const MoneyDrain: React.FC<{ frame: number }> = ({ frame }) => {
  const drops = Array.from({ length: 6 }).map((_, i) => {
    const y = interpolate((frame + i * 20) % 80, [0, 80], [0, 60]);
    const opacity = interpolate((frame + i * 20) % 80, [0, 40, 80], [0, 0.6, 0]);
    return { y, opacity };
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "35%",
        right: "15%",
        width: 30,
        height: 100,
        opacity: interpolate(frame, [40, 60], [0, 0.4]),
      }}
    >
      {/* Pipe */}
      <div
        style={{
          width: 30,
          height: 40,
          background: "linear-gradient(180deg, #333, #666)",
          borderRadius: "0 0 15 15",
        }}
      />
      {/* Drain drops */}
      {drops.map((d, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${35 + d.y}%`,
            left: "50%",
            width: 8,
            height: 12,
            background: "#ffd700",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            transform: "translateX(-50%)",
            opacity: d.opacity,
          }}
        />
      ))}
    </div>
  );
};

// NEW: Contract signature effect
const ContractSeal: React.FC<{ frame: number }> = ({ frame }) => {
  const scale = spring({ frame: frame - 70, from: 0, to: 1, damping: 10 });
  const rotation = interpolate(frame, [70, 90], [-20, 0]);

  return (
    <div
      style={{
        position: "absolute",
        bottom: "30%",
        right: "20%",
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: "rgba(239, 68, 68, 0.2)",
        border: "2px solid rgba(239, 68, 68, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: `scale(${scale}) rotate(${rotation}deg)`,
        opacity: interpolate(frame, [70, 90], [0, 0.5]),
      }}
    >
      <span style={{ fontSize: 10, color: "#ef4444", fontWeight: 700 }}>SEALED</span>
    </div>
  );
};

export const IMFScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const imfOpacity = interpolate(frame, [15, 45], [0, 1], { extrapolateRight: "clamp" });
  const conditionsOpacity = interpolate(frame, [25, 60], [0, 1], { extrapolateRight: "clamp" });
  const paymentsOpacity = interpolate(frame, [50, 90], [0, 1], { extrapolateRight: "clamp" });

  // Spring animations
  const imfScale = spring({ frame, from: 0, to: 1, damping: 12 });

  // Counter animations
  const interestValue = useCounterAnimation(326, frame, 55, 25);
  const principalValue = useCounterAnimation(332, frame, 65, 25);
  const totalPaidValue = useCounterAnimation(658, frame, 75, 25);
  const stillOweValue = useCounterAnimation(1300, frame, 85, 25);

  // Chain links animation
  const chainRotation = interpolate(frame, [0, 60], [0, 360]);

  // Background pulse
  const bgPulse = interpolate(Math.sin(frame * 0.08), [-1, 1], [0.98, 1.02]);

  // Conditions stagger
  const getConditionOpacity = (index: number) => {
    return interpolate(frame, [30 + index * 8, 50 + index * 8], [0, 1], { extrapolateRight: "clamp" });
  };

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #0d1117 0%, #1a1a2e 100%)" }}>
      {/* NEW: Prison bars */}
      <PrisonBars frame={frame} />

      {/* NEW: Money drain */}
      <MoneyDrain frame={frame} />

      {/* NEW: Contract seal */}
      <ContractSeal frame={frame} />

      {/* Background pulse */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${bgPulse})`,
          background: "radial-gradient(ellipse at center, rgba(255, 215, 0, 0.03) 0%, transparent 70%)",
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontSize: 42,
          fontWeight: 700,
          opacity: titleOpacity,
          textShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
        }}
      >
        IMF "Debt Solutions"
      </div>

      {/* IMF Logo with chain effect */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${imfScale})`,
          width: 100,
          height: 100,
          background: "linear-gradient(135deg, #1e3a5a, #0d1117)",
          borderRadius: 12,
          border: "2px solid #ffd700",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: imfOpacity,
          boxShadow: "0 0 30px rgba(255, 215, 0, 0.3)",
        }}
      >
        <span style={{ fontSize: 24, fontWeight: 700, color: "#ffd700" }}>IMF</span>
      </div>

      {/* Chain links around IMF */}
      {[-40, 40].map((offset, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: "30%",
            left: `calc(50% + ${offset}px)`,
            width: 30,
            height: 60,
            border: "3px solid #6b7280",
            borderRadius: "15px",
            opacity: imfOpacity * 0.5,
            transform: `rotate(${chainRotation + i * 180}deg)`,
          }}
        />
      ))}

      {/* Conditions */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          textAlign: "center",
          opacity: conditionsOpacity,
        }}
      >
        <div style={{ fontSize: 16, color: "#e8e8e8", marginBottom: 15 }}>
          {getVisibleText("IMF \"Special Conditions\":", frame, 25, 3)}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
          {CONDITIONS.map((item, i) => (
            <div
              key={i}
              style={{
                padding: "8px 16px",
                background: `${item.color}15`,
                borderRadius: 20,
                border: `1px solid ${item.color}`,
                color: item.color,
                fontSize: 14,
                opacity: getConditionOpacity(i),
                transform: `translateY(${(1 - getConditionOpacity(i)) * 10}px)`,
              }}
            >
              {item.en} - {item.cn}
            </div>
          ))}
        </div>
      </div>

      {/* Payments with counters */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          textAlign: "center",
          opacity: paymentsOpacity,
        }}
      >
        <div style={{ fontSize: 16, color: "#9ca3af", marginBottom: 10 }}>
          1980-1986: Third World Paid
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 30 }}>
          <div>
            <div style={{ fontSize: 32, color: "#ef4444", fontWeight: 700 }}>${interestValue}B</div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>Interest</div>
          </div>
          <div>
            <div style={{ fontSize: 32, color: "#ef4444", fontWeight: 700 }}>${principalValue}B</div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>Principal</div>
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#ffd700", fontWeight: 700, marginTop: 15 }}>
          Total: ${totalPaidValue}B for $430B Debt
        </div>
        <div style={{ fontSize: 14, color: "#ef4444", marginTop: 5, fontWeight: 600 }}>
          Still Owe ${stillOweValue}B!
        </div>
      </div>
    </AbsoluteFill>
  );
};
