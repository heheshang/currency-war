import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

export const SummaryDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });
  const cycleOpacity = interpolate(frame, [60, 120], [0, 1], { extrapolateRight: "clamp" });
  const conclusionOpacity = interpolate(frame, [180, 240], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/episode05/financial-trading-screen.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "subtle" }}
          layer={{ filter: "vintage", opacity: 0.5 }}
          startFrame={0}
          durationFrames={480}
        />
      </div>

      <Vignette intensity={0.75} />
      <FilmGrain opacity={0.08} />

      <DocumentaryOverlay
        year="THE CYCLE"
        title="Harvest of the Century"
        subtitle="War, Recession, Consolidation"
        frame={frame - 30}
        fadeInDuration={45}
      />

      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", opacity: cycleOpacity }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <CycleStep text="Create Problem" />
          <CycleArrow />
          <CycleStep text="Inflate Bubble" />
          <CycleArrow />
          <CycleStep text="Pop It" />
          <CycleArrow />
          <CycleStep text="Harvest Assets" isHighlight />
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "22%", left: "50%", transform: "translateX(-50%)", opacity: conclusionOpacity }}>
        <div style={{ padding: "24px 40px", background: "rgba(0,0,0,0.85)", border: "2px solid #ffd700", borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontFamily: "Merriweather, serif", fontSize: 16, color: "#e8e8e8" }}>
            War and recession: the harvest cycle of international bankers
          </div>
          <div style={{ fontFamily: "Cinzel, serif", fontSize: 20, color: "#ffd700", marginTop: 12, letterSpacing: 2 }}>
            It continues to this day.
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const CycleStep: React.FC<{ text: string; isHighlight?: boolean }> = ({ text, isHighlight }) => (
  <div style={{ padding: "12px 20px", background: isHighlight ? "rgba(139, 0, 0, 0.85)" : "rgba(0,0,0,0.85)", border: `2px solid ${isHighlight ? "#ffd700" : "#4a5568"}`, borderRadius: 8 }}>
    <div style={{ fontFamily: "Merriweather, serif", fontSize: 14, color: isHighlight ? "#ffd700" : "#e8e8e8", whiteSpace: "nowrap" }}>
      {text}
    </div>
  </div>
);

const CycleArrow: React.FC = () => (
  <div style={{ color: "#ffd700", fontSize: 20 }}>→</div>
);

export default SummaryDocumentaryScene;
