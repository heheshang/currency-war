import React from "react";
import { AbsoluteFill, useCurrentFrame, Sequence, interpolate } from "remotion";
import {
  ImageLayer,
  DocumentaryOverlay,
  CinematicText,
  Vignette,
  FilmGrain,
} from "../../../documentary/MediaLayers";

const fps = 30;

export const GoldPoolDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      {/* Background - Gold/London Theme */}
      <ImageLayer
        src="/assets/images/ep08/gold_bars_vault_treasure_precious_metal_1_pexels.jpeg"
        kenBurns={{ panDirection: "zoom-out", intensity: "moderate" }}
        layer={{ opacity: 1, blendMode: "normal", filter: "dramatic" }}
        startFrame={0}
        durationFrames={fps * 10}
      />

      {/* Year and Title */}
      <Sequence from={fps * 0.5} durationInFrames={fps * 9}>
        <DocumentaryOverlay
          year="1961-1968"
          title="伦敦黄金池"
          subtitle="London Gold Pool"
          source="国际清算银行档案"
          frame={frame - fps * 0.5}
          fadeInDuration={fps * 0.6}
        />
      </Sequence>

      {/* Central Banks Text */}
      <Sequence from={fps * 1.5} durationInFrames={fps * 8}>
        <AbsoluteFill
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "5% 10%",
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              opacity: interpolate(
                frame - fps * 1.5,
                [0, fps * 0.5, fps * 7.5, fps * 8],
                [0, 1, 1, 0],
                { extrapolateRight: "clamp" },
              ),
              textShadow: "2px 2px 4px rgba(0,0,0,0.9)",
              lineHeight: 1.7,
            }}
          >
            <p style={{ marginBottom: 16 }}>
              八国央行联手维护35美元/盎司的黄金价格
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: 8 }}>• 美联储</li>
              <li style={{ marginBottom: 8 }}>• 英格兰银行</li>
              <li style={{ marginBottom: 8 }}>• 德国联邦银行</li>
              <li style={{ marginBottom: 8 }}>• 法国央行</li>
              <li>• 意大利、荷兰、比利时、瑞士央行</li>
            </ul>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Collapse Warning */}
      <Sequence from={fps * 6} durationInFrames={fps * 4}>
        <CinematicText
          text="黄金池崩溃"
          fontSize={44}
          color="#DC2626"
          frame={frame - fps * 6}
          fadeInDuration={fps * 0.5}
          position="center"
        />
      </Sequence>

      <Vignette intensity={0.7} />
      <FilmGrain opacity={0.08} />
    </AbsoluteFill>
  );
};

export default GoldPoolDocumentaryScene;
