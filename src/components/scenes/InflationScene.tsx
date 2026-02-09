import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ShakeAnimation,
  PulseAnimation,
  FadeInTransition,
  ElasticText,
} from "../animations";
import { CartoonCharacter } from "../characters/CartoonCharacter";

const InflationBeast: React.FC<{
  size: number;
  eyeBlink: number;
}> = ({ size, eyeBlink }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      style={{
        filter: "drop-shadow(0 0 30px rgba(139, 0, 0, 0.8))",
      }}
    >
      <defs>
        <radialGradient id="beastGradient">
          <stop offset="0%" stopColor="#8b0000" />
          <stop offset="100%" stopColor="#4a0000" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle
        cx="100"
        cy="100"
        r={size * 0.4}
        fill="url(#beastGradient)"
        filter="url(#glow)"
      />

      <ellipse
        cx="60"
        cy="80"
        rx={size * 0.15 * (1 - eyeBlink * 0.7)}
        ry={size * 0.08 * (1 - eyeBlink * 0.7)}
        fill="#ff6b6b"
        filter="url(#glow)"
      />
      <ellipse
        cx="140"
        cy="80"
        rx={size * 0.15 * (1 - eyeBlink * 0.7)}
        ry={size * 0.08 * (1 - eyeBlink * 0.7)}
        fill="#ff6b6b"
        filter="url(#glow)"
      />

      <path
        d="M 70 130 Q 100 150 130 130"
        stroke="#0d0d0d"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const InflationScene: React.FC = () => {
  const frame = useCurrentFrame();

  const beastSize = interpolate(frame, [0, 60 * 30], [150, 300]);
  const coinsEaten = Math.floor(interpolate(frame, [0, 60 * 30], [0, 30]));

  const eyeBlink = Math.sin(frame * 0.05) > 0.95 ? 0.8 : 0;

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle, #2d1f1f 0%, #0d0d0d 100%)",
      }}
    >
      <FadeInTransition delay={0} duration={30}>
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#ef4444",
            fontFamily: "Cinzel, serif",
            fontSize: 48,
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          <ElasticText text="The Inflation Beast" delay={0} stagger={4} />
        </div>
      </FadeInTransition>

      <PulseAnimation minScale={0.95} maxScale={1.1}>
        <ShakeAnimation intensity={5}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <InflationBeast size={beastSize} eyeBlink={eyeBlink} />
          </div>
        </ShakeAnimation>
      </PulseAnimation>

      {Array.from({ length: coinsEaten }).map((_, i) => {
        const angle = (i / 30) * 360;
        const distance = 100 + i * 8;
        const x = Math.cos((angle * Math.PI) / 180) * distance;
        const y = Math.sin((angle * Math.PI) / 180) * distance;
        const scale = interpolate(frame, [i * 10, i * 10 + 30], [1, 0], {
          extrapolateRight: "clamp",
        });

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`,
              width: 20,
              height: 20,
              background: "radial-gradient(circle, #FFD700, #B8860B)",
              borderRadius: "50%",
              opacity: interpolate(frame, [i * 10, i * 10 + 30], [1, 0]),
            }}
          />
        );
      })}

      <FadeInTransition delay={30} duration={30}>
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#e8e8e8",
            fontFamily: "Merriweather, serif",
            fontSize: 24,
            textAlign: "center",
            maxWidth: "70%",
            lineHeight: "1.6",
          }}
        >
          <ElasticText
            text="Inflation silently eats away your wealth..."
            delay={30}
            stagger={2}
          />
          <br />
          <span
            style={{
              color: "#ef4444",
              fontWeight: 600,
              fontSize: 28,
            }}
          >
            <ElasticText text="...while you sleep." delay={50} stagger={3} />
          </span>
        </div>
      </FadeInTransition>

      <CartoonCharacter
        x={20}
        y={75}
        scale={0.7}
        characterType="victim"
        action="idle"
        facingRight={true}
        frame={frame}
      />

      <CartoonCharacter
        x={80}
        y={75}
        scale={0.7}
        characterType="victim"
        action="think"
        facingRight={false}
        frame={frame + 20}
      />
    </AbsoluteFill>
  );
};
