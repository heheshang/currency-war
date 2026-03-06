/**
 * Reusable Audio Component for Currency Wars Documentary
 *
 * Wraps Remotion's Audio component with proper defaults and error handling.
 * Compatible with AudioAsset type from audioConfig.ts.
 */

import { Audio as RemotionAudio } from "@remotion/media";
import { staticFile } from "remotion";
import React from "react";

export interface AudioProps {
  src: string;
  volume?: number;
  loop?: boolean;
}

/**
 * Audio component for playing background music and sound effects.
 *
 * @param src - Path to audio file (required). Use path relative to public folder, e.g., "assets/audio/bgm/music.mp3"
 * @param volume - Volume level 0.0 to 1.0 (optional, defaults to 1.0)
 * @param loop - Whether to loop the audio (optional, defaults to false)
 *
 * @example
 * ```tsx
 * <Audio src="assets/audio/bgm/music.mp3" volume={0.5} loop />
 * ```
 */
export const Audio: React.FC<AudioProps> = ({
  src,
  volume = 1.0,
  loop = false,
}) => {
  if (!src) {
    return null;
  }

  const clampedVolume = Math.max(0, Math.min(1, volume));
  // Convert relative path to staticFile path for local assets
  // e.g., "/assets/audio/bgm/music.mp3" -> staticFile("assets/audio/bgm/music.mp3")
  const audioSrc = src.startsWith("/") ? staticFile(src.slice(1)) : src;

  return <RemotionAudio src={audioSrc} volume={clampedVolume} loop={loop} />;
};

export default Audio;
