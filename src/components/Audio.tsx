/**
 * Reusable Audio Component for Currency Wars Documentary
 *
 * Wraps Remotion's Audio component with proper defaults and error handling.
 * Compatible with AudioAsset type from audioConfig.ts.
 */

import { Audio as RemotionAudio } from "remotion";
import React from "react";

export interface AudioProps {
  src: string;
  volume?: number;
  loop?: boolean;
}

/**
 * Audio component for playing background music and sound effects.
 *
 * @param src - Path to audio file (required)
 * @param volume - Volume level 0.0 to 1.0 (optional, defaults to 1.0)
 * @param loop - Whether to loop the audio (optional, defaults to false)
 *
 * @example
 * ```tsx
 * <Audio src="/assets/audio/bgm/music.mp3" volume={0.5} loop />
 * ```
 */
export const Audio: React.FC<AudioProps> = ({
  src,
  volume = 1.0,
  loop = false,
}) => {
  if (!src) {
    console.error("Audio component requires a src prop");
    return null;
  }

  if (volume < 0 || volume > 1) {
    console.warn(
      `Audio volume ${volume} is out of range [0.0, 1.0]. Clamping to valid range.`,
    );
    volume = Math.max(0, Math.min(1, volume));
  }

  return <RemotionAudio src={src} volume={volume} loop={loop} />;
};

export default Audio;
