import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

export const WilsonWarDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });
  const quoteOpacity = interpolate(frame, [60, 120], [0, 1], { extrapolateRight: "clamp" });
  const realityOpacity = interpolate(frame, [150, 210], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/episode05/wwi-grave-marker.jpg"
          kenBurns={{ panDirection: "zoom-in", intensity: "subtle" }}
          layer={{ filter: "sepia", opacity: 0.5 }}
          startFrame={0}
          durationFrames={540}
        />
      </div>

      <Vignette intensity={0.75} />
      <FilmGrain opacity={0.08} />

      <DocumentaryOverlay
        year="1917"
        title="President Wilson"
        subtitle="The Road to War"
        frame={frame - 30}
        fadeInDuration={45}
      />

      <div style={{ position: "absolute", top: "25%", left: "50%", transform: "translateX(-50%)", opacity: quoteOpacity }}>
        <div style={{ padding: "30px 50px", background: "rgba(0,0,0,0.85)", border: "2px solid #3b82f6", borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontFamily: "Merriweather, serif", fontSize: 20, color: "#fff", fontStyle: "italic" }}>
            "We fight for democracy and moral principles"
          </div>
          <div style={{ fontFamily: "Merriweather, serif", fontSize: 14, color: "#3b82f6", marginTop: 12 }}>
            — President Wilson
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "20%", left: "50%", transform: "translateX(-50%)", opacity: realityOpacity }}>
        <div style={{ padding: "24px 40px", background: "rgba(139, 0, 0, 0.9)", border: "2px solid #ef4444", borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontFamily: "Cinzel, serif", fontSize: 14, color: "#ef4444", marginBottom: 12, letterSpacing: 2 }}>
            THE REALITY
          </div>
          <div style={{ fontFamily: "Merriweather, serif", fontSize: 16, color: "#e8e8e8" }}>
            Protecting $30 billion in loans to the Allies
          </div>
          <div style={{ fontFamily: "Merriweather, serif", fontSize: 14, color: "#9ca3af", marginTop: 8 }}>
            Morgan, Rockefeller, Warburg, Schiff — the puppet masters
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default WilsonWarDocumentaryScene;
