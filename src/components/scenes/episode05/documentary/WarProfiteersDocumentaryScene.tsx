import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

export const WarProfiteersDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });
  const bankOpacity = interpolate(frame, [60, 120], [0, 1], { extrapolateRight: "clamp" });
  const profitOpacity = interpolate(frame, [180, 240], [0, 1], { extrapolateRight: "clamp" });

  const scale = spring({
    fps: 30,
    frame: frame - 180,
    config: { damping: 100, stiffness: 200, mass: 0.5 },
  });

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/episode05/wall-street-skyline.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "moderate" }}
          layer={{ filter: "vintage", opacity: 0.6 }}
          startFrame={0}
          durationFrames={600}
        />
      </div>

      <Vignette intensity={0.75} />
      <FilmGrain opacity={0.08} />

      <DocumentaryOverlay
        year="1914-1918"
        title="War Profiteers"
        subtitle="The Bankers' Bonanza"
        frame={frame - 30}
        fadeInDuration={45}
      />

      <div style={{ position: "absolute", top: "22%", left: "8%", right: "8%", opacity: bankOpacity }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
          <ProfiteerCard name="Paul Warburg" role="Fed Vice Chair" note="Brother: German Intel" />
          <ProfiteerCard name="Bernard Baruch" role="War Industries" note="$100B purchases/yr" />
          <ProfiteerCard name="Eugene Meyer" role="War Finance Corp" note="War bonds issued" />
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "18%", left: "50%", transform: `translateX(-50%) scale(${scale})`, opacity: profitOpacity }}>
        <div style={{ padding: "30px 60px", background: "linear-gradient(135deg, rgba(139,0,0,0.9), rgba(0,0,0,0.9))", border: "3px solid #ffd700", borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontFamily: "Cinzel, serif", fontSize: 48, color: "#ffd700", fontWeight: 700 }}>
            $3 BILLION
          </div>
          <div style={{ fontFamily: "Merriweather, serif", fontSize: 16, color: "#e8e8e8", marginTop: 8 }}>
            Morgan's fee from Allied loans alone
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const ProfiteerCard: React.FC<{ name: string; role: string; note: string }> = ({ name, role, note }) => (
  <div style={{ flex: 1, padding: "16px", background: "rgba(0,0,0,0.85)", border: "1px solid #ffd700", borderRadius: 8, textAlign: "center" }}>
    <div style={{ fontFamily: "Cinzel, serif", fontSize: 14, color: "#ffd700", marginBottom: 4 }}>{name}</div>
    <div style={{ fontFamily: "Merriweather, serif", fontSize: 11, color: "#e8e8e8", marginBottom: 4 }}>{role}</div>
    <div style={{ fontFamily: "Merriweather, serif", fontSize: 10, color: "#ef4444", fontStyle: "italic" }}>{note}</div>
  </div>
);

export default WarProfiteersDocumentaryScene;
