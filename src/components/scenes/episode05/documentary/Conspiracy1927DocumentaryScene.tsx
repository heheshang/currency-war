import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

export const Conspiracy1927DocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });
  const playersOpacity = interpolate(frame, [60, 120], [0, 1], { extrapolateRight: "clamp" });
  const planOpacity = interpolate(frame, [180, 240], [0, 1], { extrapolateRight: "clamp" });

  const scale = spring({
    fps: 30,
    frame: frame - 180,
    config: { damping: 100, stiffness: 200, mass: 0.5 },
  });

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/episode05/bank-vault-doors.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "subtle" }}
          layer={{ filter: "vintage", opacity: 0.7 }}
          startFrame={0}
          durationFrames={600}
        />
      </div>

      <Vignette intensity={0.8} />
      <FilmGrain opacity={0.1} />

      <DocumentaryOverlay
        year="1927"
        title="The Secret Meeting"
        subtitle="Long Island, New York"
        frame={frame - 30}
        fadeInDuration={45}
      />

      <div style={{ position: "absolute", top: "22%", left: "8%", right: "8%", opacity: playersOpacity }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 24 }}>
          <PlayerCard name="Montagu Norman" title="Bank of England" country="UK" />
          <PlayerCard name="Benjamin Strong" title="NY Federal Reserve" country="USA" />
          <PlayerCard name="Hjalmar Schacht" title="Reichsbank" country="Germany" />
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "18%", left: "50%", transform: `translateX(-50%) scale(${scale})`, opacity: planOpacity }}>
        <div style={{ padding: "24px 40px", background: "rgba(139, 0, 0, 0.9)", border: "3px solid #ffd700", borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontFamily: "Cinzel, serif", fontSize: 14, color: "#ffd700", marginBottom: 12, letterSpacing: 2 }}>
            THE AGREEMENT
          </div>
          <div style={{ fontFamily: "Merriweather, serif", fontSize: 16, color: "#e8e8e8" }}>
            Lower NY interest rates → Inflate the bubble → Pop it → Harvest
          </div>
          <div style={{ fontFamily: "Merriweather, serif", fontSize: 13, color: "#ef4444", marginTop: 12 }}>
            $500 million in gold flowed to Europe
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const PlayerCard: React.FC<{ name: string; title: string; country: string }> = ({ name, title, country }) => (
  <div style={{ padding: "16px 24px", background: "rgba(0,0,0,0.85)", border: "2px solid #ffd700", borderRadius: 8, textAlign: "center" }}>
    <div style={{ fontFamily: "Cinzel, serif", fontSize: 14, color: "#ffd700" }}>{name}</div>
    <div style={{ fontFamily: "Merriweather, serif", fontSize: 11, color: "#e8e8e8", marginTop: 4 }}>{title}</div>
    <div style={{ fontFamily: "Merriweather, serif", fontSize: 10, color: "#9ca3af", marginTop: 4 }}>{country}</div>
  </div>
);

export default Conspiracy1927DocumentaryScene;
