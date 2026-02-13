import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

/**
 * Bilderberg Club Scene - 1973年彼尔德伯格密谋
 *
 * Enhanced with:
 * - Dramatic reveal animations
 * - Pulsing conspiracy effect
 * - Typewriter text
 * - Secret document floating animation
 * - NEW: Eye watching effect, Shadow conspiracy network, Document chain
 */

// Typewriter helper
const getVisibleText = (text: string, frame: number, startFrame: number, speed: number = 2): string => {
  const progress = Math.max(0, frame - startFrame) / speed;
  const charCount = Math.floor(progress);
  return text.slice(0, charCount);
};

// NEW: Eye watching effect - represents surveillance
const WatchingEye: React.FC<{ frame: number }> = ({ frame }) => {
  const pupilOffset = interpolate(Math.sin(frame * 0.05), [-1, 1], [-3, 3]);
  const eyePulse = interpolate(Math.sin(frame * 0.1), [-1, 1], [0.9, 1.1]);

  return (
    <div
      style={{
        position: "absolute",
        top: "5%",
        right: "10%",
        opacity: interpolate(frame, [20, 40], [0, 0.3]),
      }}
    >
      <div
        style={{
          width: 40,
          height: 25,
          background: "#1a1a2e",
          borderRadius: "50%",
          border: "2px solid rgba(255, 215, 0, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${eyePulse})`,
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            background: "#ef4444",
            borderRadius: "50%",
            transform: `translate(${pupilOffset}px, 0)`,
            boxShadow: "0 0 10px rgba(239, 68, 68, 0.5)",
          }}
        />
      </div>
    </div>
  );
};

// NEW: Shadow conspiracy network - connecting lines
const ShadowNetwork: React.FC<{ frame: number }> = ({ frame }) => {
  const nodes = [
    { x: 15, y: 30 }, { x: 30, y: 20 }, { x: 45, y: 35 },
    { x: 60, y: 25 }, { x: 75, y: 40 }, { x: 85, y: 30 },
  ];

  const lines = nodes.map((node, i) => {
    if (i === 0) return null;
    const prev = nodes[i - 1];
    return (
      <div
        key={i}
        style={{
          position: "absolute",
          top: `${prev.y}%`,
          left: `${prev.x}%`,
          width: `${node.x - prev.x}%`,
          height: 1,
          background: `rgba(255, 215, 0, 0.1)`,
          transform: `rotate(${Math.atan2(node.y - prev.y, node.x - prev.x) * (180 / Math.PI)}deg)`,
          transformOrigin: "left center",
        }}
      />
    );
  });

  return (
    <div style={{ position: "absolute", inset: 0, opacity: interpolate(frame, [30, 60], [0, 0.4]) }}>
      {lines}
      {nodes.map((node, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${node.y}%`,
            left: `${node.x}%`,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "rgba(255, 215, 0, 0.3)",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
};

// NEW: Floating document chain
const DocumentChain: React.FC<{ frame: number }> = ({ frame }) => {
  const docs = Array.from({ length: 4 }).map((_, i) => {
    const yOffset = interpolate(frame * 0.03 + i * 20, [0, 50], [0, 15 + i * 5]);
    const rotation = interpolate(frame * 0.02 + i * 15, [0, 50], [0, (i % 2 === 0 ? 5 : -5)]);
    const opacity = interpolate(frame, [30 + i * 10, 50 + i * 10], [0, 0.2]);
    return { yOffset, rotation, opacity };
  });

  return (
    <div style={{ position: "absolute", top: "20%", right: "3%" }}>
      {docs.map((d, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: -d.yOffset,
            right: i * 25,
            width: 60 - i * 5,
            height: 80 - i * 8,
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 215, 0, 0.1)",
            borderRadius: 2,
            transform: `rotate(${d.rotation}deg)`,
            opacity: d.opacity,
          }}
        />
      ))}
    </div>
  );
};

export const BilderbergScene: React.FC = () => {
  const frame = useCurrentFrame();

  const dateOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [15, 45], [0, 1], { extrapolateRight: "clamp" });
  const contentOpacity = interpolate(frame, [30, 70], [0, 1], { extrapolateRight: "clamp" });

  // Spring animations for dramatic effect
  const rockefellerScale = spring({ frame, from: 0, to: 1, damping: 12, config: { stiffness: 100 } });
  const rockefellerRotate = interpolate(frame, [0, 30], [-15, 0]);

  // Pulsing glow effect for the plan
  const pulseIntensity = interpolate(Math.sin(frame * 0.1), [-1, 1], [0.5, 1]);
  const glowIntensity = interpolate(frame, [60, 120], [0, 1], { extrapolateRight: "clamp" });

  // Secret document floating
  const docFloat = interpolate(Math.sin(frame * 0.05), [-1, 1], [-5, 5]);

  // NEW: Red alert pulse
  const alertPulse = interpolate(Math.sin(frame * 0.08), [-1, 1], [0.95, 1.05]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #0d1117 100%)" }}>
      {/* NEW: Shadow conspiracy network */}
      <ShadowNetwork frame={frame} />

      {/* NEW: Watching eye effect */}
      <WatchingEye frame={frame} />

      {/* NEW: Document chain */}
      <DocumentChain frame={frame} />

      {/* NEW: Red alert overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 70% 30%, rgba(239, 68, 68, ${0.02 * alertPulse}) 0%, transparent 50%)`,
          opacity: contentOpacity,
        }}
      />

      {/* Animated background overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at ${70 + Math.sin(frame * 0.02) * 10}% ${30 + Math.cos(frame * 0.015) * 10}%, rgba(239, 68, 68, 0.05) 0%, transparent 50%)`,
        }}
      />

      {/* Secret document background elements */}
      <div
        style={{
          position: "absolute",
          top: `calc(15% + ${docFloat}px)`,
          right: "5%",
          width: 150,
          height: 200,
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 215, 0, 0.1)",
          borderRadius: 4,
          transform: `rotate(${interpolate(frame, [0, 60], [5, -3])})`,
          opacity: contentOpacity,
        }}
      >
        <div style={{ padding: 10, fontSize: 8, color: "#4b5563", fontFamily: "monospace" }}>
          {getVisibleText("CONFIDENTIAL", frame, 40, 3)}<br />
          {getVisibleText("EYES ONLY", frame, 50, 3)}
        </div>
      </div>

      {/* Date with dramatic reveal */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ef4444",
          fontSize: 42,
          fontWeight: 700,
          opacity: dateOpacity,
          textShadow: `0 0 20px rgba(239, 68, 68, ${0.5 + pulseIntensity * 0.5})`,
        }}
      >
        May 1973
      </div>

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          fontSize: 32,
          fontWeight: 600,
          opacity: titleOpacity,
        }}
      >
        The Bilderberg Club Meeting
      </div>

      {/* Content */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          textAlign: "center",
          opacity: contentOpacity,
        }}
      >
        <div style={{ fontSize: 18, color: "#e8e8e8", marginBottom: 15 }}>
          {getVisibleText("84位国际银行家、跨国公司巨头和被选中的政客", frame, 30, 3)}
        </div>
        <div style={{ fontSize: 16, color: "#9ca3af", marginBottom: 20 }}>
          {getVisibleText("秘密汇聚于彼尔德伯格俱乐部", frame, 40, 3)}
        </div>

        {/* Rockefeller with dramatic entrance */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #ffd700, #b8860b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `scale(${rockefellerScale}) rotate(${rockefellerRotate}deg)`,
              boxShadow: `0 0 ${30 + pulseIntensity * 20}px rgba(255, 215, 0, ${0.3 + pulseIntensity * 0.4})`,
            }}
          >
            <span style={{ fontSize: 32, fontWeight: 700, color: "#1a1a2e" }}>R</span>
          </div>
          <div style={{ marginLeft: 20, textAlign: "left" }}>
            <div style={{ fontSize: 20, color: "#ffd700", fontWeight: 600 }}>David Rockefeller</div>
            <div style={{ fontSize: 14, color: "#9ca3af" }}>戴维·洛克菲勒</div>
          </div>
        </div>

        <div style={{ fontSize: 16, color: "#9ca3af", marginTop: 25 }}>
          带来了心腹谋士布热津斯基
        </div>

        {/* The Plan - dramatic reveal with glow */}
        <div
          style={{
            marginTop: 30,
            padding: "15px 30px",
            background: `rgba(239, 68, 68, ${0.1 + glowIntensity * 0.2})`,
            borderRadius: 8,
            border: `2px solid rgba(239, 68, 68, ${0.5 + pulseIntensity * 0.5})`,
            boxShadow: `0 0 ${20 * glowIntensity}px rgba(239, 68, 68, ${0.3 * glowIntensity})`,
          }}
        >
          <div style={{ fontSize: 24, color: "#ef4444", fontWeight: 700 }}>THE PLAN:</div>
          <div style={{ fontSize: 20, color: "#ffd700", marginTop: 8 }}>
            Raise Oil Prices by 400%
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
