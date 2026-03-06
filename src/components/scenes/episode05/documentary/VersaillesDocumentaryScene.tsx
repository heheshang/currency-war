import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  Vignette,
  FilmGrain,
} from "../../../documentary";

export const VersaillesDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });
  const termsOpacity = interpolate(frame, [60, 120], [0, 1], { extrapolateRight: "clamp" });
  const fochOpacity = interpolate(frame, [150, 210], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: "#0d1117" }}>
      <div style={{ opacity: bgOpacity }}>
        <ImageLayer
          src="/assets/images/episode05/wwi-trenches-aerial.jpg"
          kenBurns={{ panDirection: "zoom-out", intensity: "moderate" }}
          layer={{ filter: "sepia", opacity: 0.6 }}
          startFrame={0}
          durationFrames={540}
        />
      </div>

      <Vignette intensity={0.75} />
      <FilmGrain opacity={0.08} />

      <DocumentaryOverlay
        year="1919"
        title="Treaty of Versailles"
        subtitle="Seeds of the Next War"
        frame={frame - 30}
        fadeInDuration={45}
      />

      <div style={{ position: "absolute", top: "22%", left: "8%", opacity: termsOpacity }}>
        <div style={{ padding: "20px 28px", background: "rgba(0,0,0,0.85)", border: "2px solid #ffd700", borderRadius: 8 }}>
          <div style={{ fontFamily: "Cinzel, serif", fontSize: 14, color: "#ffd700", marginBottom: 12, letterSpacing: 2 }}>
            TERMS ON GERMANY
          </div>
          <div style={{ fontFamily: "Merriweather, serif", fontSize: 13, color: "#e8e8e8", lineHeight: 1.8 }}>
            <div style={{ color: "#ef4444" }}>• 13% territory lost</div>
            <div>• 320 billion gold marks reparations</div>
            <div>• Army limited to 100,000 men</div>
            <div>• No submarines, aircraft, or tanks</div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "20%", left: "50%", transform: "translateX(-50%)", opacity: fochOpacity }}>
        <div style={{ padding: "24px 40px", background: "rgba(139, 0, 0, 0.85)", border: "2px solid #ef4444", borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontFamily: "Merriweather, serif", fontSize: 18, color: "#fff", fontStyle: "italic" }}>
            "This is not peace. It is an armistice for twenty years."
          </div>
          <div style={{ fontFamily: "Merriweather, serif", fontSize: 14, color: "#ffd700", marginTop: 12 }}>
            — Marshal Foch
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default VersaillesDocumentaryScene;
