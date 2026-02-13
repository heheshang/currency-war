import React from "react";
import { Sequence, AbsoluteFill } from "remotion";
import { Audio } from "./Audio";

type VoiceoverEntry = {
  src: string;
  startFrame: number;
  durationFrames: number;
};

type VoiceoverProps = {
  voiceoverSrc: string;
  entries: VoiceoverEntry[];
  volume?: number;
};

export const Voiceover: React.FC<VoiceoverProps> = ({
  voiceoverSrc: _voiceoverSrc,
  entries,
  volume = 0.8,
}) => {
  return (
    <AbsoluteFill>
      {entries.map((entry, index) => (
        <Sequence
          key={index}
          from={entry.startFrame}
          durationInFrames={entry.durationFrames}
        >
          <Audio src={entry.src} volume={volume} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
