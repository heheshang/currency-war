import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

export const AgriculturalCrashDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });
  const termOpacity = interpolate(frame, [60, 120], [0, 1], { extrapolateRight: "clamp" });
  const statsOpacity = interpolate(frame, [150, 210], [0, 1], { extrapolateRight: "clamp" });

  const scale = spring({
    fps: 30,
    frame: frame - 150,
    config: { damping: 100, stiffness: 200, mass: 0.5 },
  });

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/episode05/great_depression_bread_line_1_pexels.jpeg"
          kenBurns={{ panDirection: "zoom-in", intensity: "subtle" }}
          layer={{ filter: "sepia", opacity: 0.7 }}
          startFrame={0}
          durationFrames={540}
        />
      </div>

      <Vignette intensity={0.8} />
      <FilmGrain opacity={0.1} />

      <DocumentaryOverlay
        year="1921"
        title="Shearing the Farmers"
        subtitle="The First Harvest"
        frame={frame - 30}
        fadeInDuration={45}
      />

      <div style={{ position: "absolute", top: "25%", left: "50%", transform: "translateX(-50%)", opacity: termOpacity }}>
        <div style={{ padding: "24px 40px", background: "rgba(0,0,0,0.85)", border: "2px solid #ffd700", borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontFamily: "Cinzel, serif", fontSize: 28, color: "#ffd700", letterSpacing: 4 }}>
            "剪羊毛"
          </div>
          <div style={{ fontFamily: "Merriweather, serif", fontSize: 14, color: "#e8e8e8", marginTop: 12 }}>
            Acquire assets at a fraction of value after creating economic chaos
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "18%", left: "50%", transform: `translateX(-50%) scale(${scale})`, opacity: statsOpacity }}>
        <div style={{ display: "flex", gap: 40 }}>
          <StatBox value="-50%" label="Farm Prices" color="#ef4444" />
          <StatBox value="30%" label="Farms Foreclosed" color="#ef4444" />
          <StatBox value="Millions" label="Acres Acquired" color="#ffd700" />
        </div>
      </div>
    </AbsoluteFill>
  );
};

const StatBox: React.FC<{ value: string; label: string; color: string }> = ({ value, label, color }) => (
  <div style={{ padding: "20px 30px", background: "rgba(0,0,0,0.85)", border: `2px solid ${color}`, borderRadius: 8, textAlign: "center" }}>
    <div style={{ fontFamily: "Cinzel, serif", fontSize: 28, color: color, fontWeight: 700 }}>{value}</div>
    <div style={{ fontFamily: "Merriweather, serif", fontSize: 12, color: "#9ca3af", marginTop: 4 }}>{label}</div>
  </div>
);

export default AgriculturalCrashDocumentaryScene;
