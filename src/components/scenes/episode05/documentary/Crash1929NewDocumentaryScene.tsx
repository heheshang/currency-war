import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

export const Crash1929NewDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });
  const crashOpacity = interpolate(frame, [90, 150], [0, 1], { extrapolateRight: "clamp" });
  const statsOpacity = interpolate(frame, [180, 240], [0, 1], { extrapolateRight: "clamp" });
  const harvestOpacity = interpolate(frame, [300, 360], [0, 1], { extrapolateRight: "clamp" });

  const scale = spring({
    fps: 30,
    frame: frame - 90,
    config: { damping: 100, stiffness: 200, mass: 0.5 },
  });

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/episode05/1929_wall_street_crash_1_pexels.jpeg"
          kenBurns={{ panDirection: "zoom-in", intensity: "dramatic" }}
          layer={{ filter: "sepia", opacity: 0.7 }}
          startFrame={0}
          durationFrames={660}
        />
      </div>

      <Vignette intensity={0.85} />
      <FilmGrain opacity={0.12} />

      <DocumentaryOverlay
        year="1929"
        title="Black Tuesday"
        subtitle="October 29 — The Bubble Bursts"
        frame={frame - 30}
        fadeInDuration={45}
      />

      <div style={{ position: "absolute", top: "28%", left: "50%", transform: `translateX(-50%) scale(${scale})`, opacity: crashOpacity }}>
        <div style={{ padding: "30px 60px", background: "rgba(139, 0, 0, 0.9)", border: "3px solid #ef4444", borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontFamily: "Cinzel, serif", fontSize: 56, color: "#ef4444", fontWeight: 700 }}>
            $160 BILLION
          </div>
          <div style={{ fontFamily: "Merriweather, serif", fontSize: 18, color: "#e8e8e8", marginTop: 8 }}>
            Wealth Vanished in One Day
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "28%", left: "50%", transform: "translateX(-50%)", opacity: statsOpacity }}>
        <div style={{ display: "flex", gap: 40 }}>
          <StatBox value="-90%" label="Stock Value" color="#ef4444" />
          <StatBox value="8,812" label="Banks Failed" color="#ef4444" />
          <StatBox value="40%" label="Wealth Lost" color="#ffd700" />
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "12%", left: "50%", transform: "translateX(-50%)", opacity: harvestOpacity }}>
        <div style={{ fontFamily: "Merriweather, serif", fontSize: 16, color: "#ffd700", fontStyle: "italic" }}>
          "Buy when blood is in the streets." — The harvest began.
        </div>
      </div>
    </AbsoluteFill>
  );
};

const StatBox: React.FC<{ value: string; label: string; color: string }> = ({ value, label, color }) => (
  <div style={{ padding: "16px 24px", background: "rgba(0,0,0,0.85)", border: `2px solid ${color}`, borderRadius: 8, textAlign: "center" }}>
    <div style={{ fontFamily: "Cinzel, serif", fontSize: 28, color: color, fontWeight: 700 }}>{value}</div>
    <div style={{ fontFamily: "Merriweather, serif", fontSize: 12, color: "#9ca3af", marginTop: 4 }}>{label}</div>
  </div>
);

export default Crash1929NewDocumentaryScene;
