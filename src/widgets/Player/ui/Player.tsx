import { LegacyRef } from "react";

interface PlayerProps {
  playerRef: LegacyRef<HTMLVideoElement>;
  onTimeUpdate: () => void;
}

export const Player = ({ playerRef, onTimeUpdate }: PlayerProps) => (
  <video
    controls
    ref={playerRef}
    onTimeUpdate={() => onTimeUpdate()}
    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  />
);
