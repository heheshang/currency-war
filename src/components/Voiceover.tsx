import React from "react";
import { AbsoluteFill, Sequence } from "remotion";

import { Audio } from "./Audio";

type VoiceoverEntry = {
  src: string;
  startFrame: number;
  durationFrames: number;
};

type VoiceoverProps = {
  voiceoverSrc?: string;
  entries: VoiceoverEntry[];
  volume?: number;
};

/**
 * Voiceover component for playing voice-over audio tracks.
 *
 * Each entry specifies:
 * - src: path to the audio file
 * - startFrame: when to start playing (relative to composition)
 * - durationFrames: how long the audio should play (audio will be cut off after this)
 *
 * The audio plays from startFrame for durationFrames, then stops.
 */
export const Voiceover: React.FC<VoiceoverProps> = ({
  // voiceoverSrc reserved for future use (merged audio file)
  entries,
  volume = 0.8,
}) => {


  return (
    <AbsoluteFill>
      {entries.map((entry, index) => {
        // Skip entries with invalid paths or zero duration
        if (!entry.src || entry.durationFrames <= 0) {
          return null;
        }

        return (
          <Sequence
            key={`${entry.src}-${index}`}
            from={entry.startFrame}
            durationInFrames={entry.durationFrames}
          >
            <Audio src={entry.src} volume={volume} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

/**
 * VoiceoverMerged - Alternative voiceover component for merged audio files
 * Plays a single merged audio file for the entire episode.
 */
export const VoiceoverMerged: React.FC<{
  src: string;
  volume?: number;
}> = ({ src, volume = 0.8 }) => {
  if (!src) {
    return null;
  }

  return (
    <AbsoluteFill>
      <Audio src={src} volume={volume} />
    </AbsoluteFill>
  );
};

export default Voiceover;
