import type { AssetSlot } from '@/content/types';
import { ImageFrame } from './ImageFrame';

type VideoBackgroundProps = {
  poster: AssetSlot;
  videoSrc?: string;
  className?: string;
};

export function VideoBackground({ poster, videoSrc, className }: VideoBackgroundProps) {
  if (!videoSrc) {
    return <ImageFrame asset={poster} className={className} priority />;
  }

  return (
    <div className={className}>
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster.src}
        aria-hidden="true"
      >
        <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-asphalt-900/70" />
    </div>
  );
}
