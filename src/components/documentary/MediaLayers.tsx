import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  Img,
  Video,
  staticFile,
} from "remotion";
import type { KenBurnsConfig, LayerConfig } from "../../utils/mediaConfig";

const filterPresets: Record<string, string> = {
  none: "none",
  grayscale: "grayscale(100%)",
  sepia: "sepia(80%)",
  vintage: "sepia(40%) contrast(1.1) brightness(0.95)",
  dramatic: "contrast(1.3) saturate(1.2) brightness(0.9)",
};

const kenBurnsIntensityMap = {
  subtle: { scale: [1, 1.05], translate: 30 },
  moderate: { scale: [1, 1.1], translate: 50 },
  dramatic: { scale: [1, 1.2], translate: 80 },
};

export interface ImageLayerProps {
  src: string;
  kenBurns?: KenBurnsConfig;
  layer?: LayerConfig;
  startFrame?: number;
  durationFrames?: number;
  fadeOutDuration?: number;
}

export const ImageLayer: React.FC<ImageLayerProps> = ({
  src,
  kenBurns = { panDirection: "zoom-in", intensity: "moderate" },
  layer = { opacity: 1, blendMode: "normal", filter: "none" },
  startFrame = 0,
  durationFrames = 900,
  fadeOutDuration = 30, // 默认 1 秒淡出，与字幕同步
}) => {
  const frame = useCurrentFrame();
  const localFrame = frame - startFrame;

  // Use staticFile for local assets, keep external URLs as-is
  // staticFile expects path relative to public folder (without leading slash)
  const imageSrc =
    src.startsWith("http") || src.startsWith("//")
      ? src
      : staticFile(src.replace(/^\//, ""));

  const intensity = kenBurnsIntensityMap[kenBurns.intensity || "moderate"];
  const progress = Math.min(
    1,
    Math.max(0, localFrame / (durationFrames || 900)),
  );

  let scale = intensity.scale[0];
  let translateX = 0;
  let translateY = 0;

  const scaleProgress = interpolate(progress, [0, 1], intensity.scale);

  switch (kenBurns.panDirection) {
    case "zoom-in":
      scale = scaleProgress;
      break;
    case "zoom-out":
      scale = interpolate(
        progress,
        [0, 1],
        [intensity.scale[1], intensity.scale[0]],
      );
      break;
    case "left":
      scale = scaleProgress;
      translateX = interpolate(
        progress,
        [0, 1],
        [intensity.translate, -intensity.translate],
      );
      break;
    case "right":
      scale = scaleProgress;
      translateX = interpolate(
        progress,
        [0, 1],
        [-intensity.translate, intensity.translate],
      );
      break;
    case "up":
      scale = scaleProgress;
      translateY = interpolate(
        progress,
        [0, 1],
        [intensity.translate, -intensity.translate],
      );
      break;
    case "down":
      scale = scaleProgress;
      translateY = interpolate(
        progress,
        [0, 1],
        [-intensity.translate, intensity.translate],
      );
      break;
    default:
      scale = scaleProgress;
  }

  // fadeOut: 场景末尾淡出，与字幕 fadeOut 同步
  const baseOpacity = layer.opacity ?? 1;
  const fadeOutOpacity =
    fadeOutDuration > 0 && localFrame >= durationFrames - fadeOutDuration
      ? interpolate(
          localFrame,
          [durationFrames - fadeOutDuration, durationFrames],
          [baseOpacity, 0],
          { extrapolateRight: "clamp" },
        )
      : baseOpacity;

  return (
    <AbsoluteFill
      style={{
        mixBlendMode: layer.blendMode || "normal",
        opacity: fadeOutOpacity,
      }}
    >
      <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <Img
          src={imageSrc}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
            filter: filterPresets[layer.filter || "none"],
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

export interface VideoLayerProps {
  src: string;
  playbackRate?: number;
  layer?: LayerConfig;
  muted?: boolean;
  startFrom?: number;
}

export const VideoLayer: React.FC<VideoLayerProps> = ({
  src,
  playbackRate = 1,
  layer = { opacity: 1, blendMode: "normal", filter: "none" },
  muted = true,
  startFrom = 0,
}) => {
  return (
    <AbsoluteFill
      style={{
        mixBlendMode: layer.blendMode || "normal",
        opacity: layer.opacity ?? 1,
      }}
    >
      <Video
        src={src}
        playbackRate={playbackRate}
        muted={muted}
        startFrom={startFrom}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: filterPresets[layer.filter || "none"],
        }}
      />
    </AbsoluteFill>
  );
};

export interface DocumentaryOverlayProps {
  title?: string;
  subtitle?: string;
  year?: string;
  source?: string;
  frame: number;
  fadeInDuration?: number;
}

export const DocumentaryOverlay: React.FC<DocumentaryOverlayProps> = ({
  title,
  subtitle,
  year,
  source,
  frame,
  fadeInDuration = 30,
}) => {
  const opacity = interpolate(frame, [0, fadeInDuration], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "40px",
      }}
    >
      <div style={{ opacity, textAlign: "right" }}>
        {year && (
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ECC94B",
              fontFamily: "Cinzel, serif",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              marginBottom: 8,
            }}
          >
            {year}
          </div>
        )}
        {title && (
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "#fff",
              fontFamily: "Merriweather, serif",
              textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
              marginBottom: 4,
            }}
          >
            {title}
          </div>
        )}
        {subtitle && (
          <div
            style={{
              fontSize: 20,
              color: "#CBD5E0",
              fontFamily: "Merriweather, serif",
              fontStyle: "italic",
              textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
            }}
          >
            {subtitle}
          </div>
        )}
        {source && (
          <div
            style={{
              fontSize: 14,
              color: "#718096",
              fontFamily: "Merriweather, serif",
              marginTop: 12,
            }}
          >
            Source: {source}
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

export interface CinematicTextProps {
  text: string;
  fontSize?: number;
  color?: string;
  frame: number;
  fadeInDuration?: number;
  position?: "center" | "top" | "bottom";
}

export const CinematicText: React.FC<CinematicTextProps> = ({
  text,
  fontSize = 48,
  color = "#ECC94B",
  frame,
  fadeInDuration = 30,
  position = "center",
}) => {
  const opacity = interpolate(frame, [0, fadeInDuration], [0, 1], {
    extrapolateRight: "clamp",
  });

  const positionStyles: Record<string, React.CSSProperties> = {
    center: { top: "50%", transform: "translateY(-50%)" },
    top: { top: "15%" },
    bottom: { bottom: "20%" },
  };

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity,
          ...positionStyles[position],
        }}
      >
        <div
          style={{
            fontSize,
            fontWeight: 700,
            color,
            fontFamily: "Cinzel, serif",
            textShadow: "3px 3px 6px rgba(0,0,0,0.9)",
            letterSpacing: 4,
          }}
        >
          {text}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export interface VignetteProps {
  intensity?: number;
  color?: string;
}

export const Vignette: React.FC<VignetteProps> = ({
  intensity = 0.6,
  color = "#000",
}) => {
  return (
    <AbsoluteFill
      style={{
        pointerEvents: "none",
        background: `radial-gradient(ellipse at center, transparent 40%, ${color} 100%)`,
        opacity: intensity,
      }}
    />
  );
};

export interface FilmGrainProps {
  opacity?: number;
}

export const FilmGrain: React.FC<FilmGrainProps> = ({ opacity = 0.08 }) => {
  return (
    <AbsoluteFill
      style={{
        pointerEvents: "none",
        opacity,
        mixBlendMode: "overlay",
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  );
};
