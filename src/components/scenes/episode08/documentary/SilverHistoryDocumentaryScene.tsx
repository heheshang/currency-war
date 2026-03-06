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

export const SilverHistoryDocumentaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      {/* Background - Silver/Mining Theme */}
      <ImageLayer
        src="/assets/images/ep08/silver_coins_vintage_historical_money_currency_1_pexels.jpeg"
        kenBurns={{ panDirection: "up", intensity: "moderate" }}
        layer={{ opacity: 1, blendMode: "normal", filter: "vintage" }}
        startFrame={0}
        durationFrames={fps * 12}
      />

      {/* Historical Context */}
      <Sequence from={fps * 0.5} durationInFrames={fps * 11}>
        <DocumentaryOverlay
          title="白银与货币"
          subtitle="五千年货币历史的见证者"
          frame={frame - fps * 0.5}
          fadeInDuration={fps * 0.6}
        />
      </Sequence>

      {/* Timeline Events */}
      <Sequence from={fps * 1} durationInFrames={fps * 4}>
        <CinematicText
          text="古代: 白银即货币"
          fontSize={36}
          color="#C0C0C0"
          frame={frame - fps * 1}
          fadeInDuration={fps * 0.5}
          position="top"
        />
      </Sequence>

      <Sequence from={fps * 4} durationInFrames={fps * 4}>
        <CinematicText
          text="1792: 美国白银美元诞生"
          fontSize={36}
          color="#C0C0C0"
          frame={frame - fps * 4}
          fadeInDuration={fps * 0.5}
          position="top"
        />
      </Sequence>

      <Sequence from={fps * 7} durationInFrames={fps * 4}>
        <CinematicText
          text="1963: 白银券的终结"
          fontSize={36}
          color="#ECC94B"
          frame={frame - fps * 7}
          fadeInDuration={fps * 0.5}
          position="top"
        />
      </Sequence>

      {/* Description */}
      <Sequence from={fps * 2} durationInFrames={fps * 9}>
        <AbsoluteFill
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "10% 20%",
          }}
        >
          <div
            style={{
              fontSize: 22,
              color: "#E2E8F0",
              fontFamily: "Merriweather, serif",
              textAlign: "center",
              opacity: interpolate(
                frame - fps * 2,
                [0, fps * 0.5, fps * 8.5, fps * 9],
                [0, 1, 1, 0],
                { extrapolateRight: "clamp" },
              ),
              textShadow: "2px 2px 4px rgba(0,0,0,0.9)",
              lineHeight: 1.8,
            }}
          >
            从古罗马到现代美国，白银作为货币的历史跨越了整个人类文明。
            它是诚实货币的象征，代表着有形价值与信任的契约。
          </div>
        </AbsoluteFill>
      </Sequence>

      <Vignette intensity={0.6} />
      <FilmGrain opacity={0.07} />
    </AbsoluteFill>
  );
};

export default SilverHistoryDocumentaryScene;
