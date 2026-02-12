import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { ElasticText, ShakeAnimation, FireworksEffect } from "../animations";

export const WarningScene: React.FC = () => {
  const frame = useCurrentFrame();

  const shakeIntensity = interpolate(frame, [0, 30, 60], [0, 3, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle, #1a1a2e 0%, #0d1117 100%)",
      }}
    >
      <div style={{ opacity: interpolate(frame, [0, 30], [0, 1]) }}>
        <ShakeAnimation intensity={shakeIntensity}>
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 36,
                color: "#e8e8e8",
                fontFamily: "Merriweather, serif",
                marginBottom: 20,
                lineHeight: "1.6",
              }}
            >
              <ElasticText
                text="This is not just history..."
                delay={0}
                stagger={2}
              />
            </div>

            <div
              style={{
                fontSize: 48,
                color: "#ffd700",
                fontFamily: "Cinzel, serif",
                fontWeight: 700,
                marginBottom: 30,
                lineHeight: "1.4",
              }}
            >
              <ElasticText text="It's happening now." delay={15} stagger={3} />
            </div>

            <div
              style={{
                fontSize: 32,
                color: "#ef4444",
                fontFamily: "Merriweather, serif",
                fontWeight: 600,
                maxWidth: "70%",
                lineHeight: "1.5",
              }}
            >
              <ElasticText
                text="Understanding money is the first step to protecting your wealth."
                delay={30}
                stagger={1.5}
              />
            </div>
          </div>
        </ShakeAnimation>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: interpolate(frame, [30, 60], [0, 1]),
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#ffd700",
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            marginBottom: 10,
          }}
        >
          <ElasticText text="Currency War" delay={40} stagger={4} />
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#9ca3af",
            fontFamily: "Merriweather, serif",
            fontStyle: "italic",
          }}
        >
          Episode 1 of 10
        </div>
      </div>

      <FireworksEffect startFrame={50} duration={60} />
    </AbsoluteFill>
  );
};
