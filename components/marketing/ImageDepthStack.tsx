import Image from 'next/image';
import type { AssetSlot } from '@/content/types';
import { cn } from '@/lib/utils';
import { CutoutMotionLayer } from './CutoutMotionLayer';

type ImageDepthStackProps = {
  id: string;
  background: AssetSlot;
  cutout?: AssetSlot;
  foreground?: AssetSlot;
  kicker?: string;
  className?: string;
};

export function ImageDepthStack({ id, background, cutout, foreground, kicker, className }: ImageDepthStackProps) {
  return (
    <div id={id} className={cn('truck-rig relative overflow-hidden rounded-sm bg-asphalt-900 shadow-hard', className)}>
      <Image
        src={background.src}
        alt={background.alt}
        fill
        sizes="(min-width: 1024px) 45vw, 100vw"
        style={background.position ? { objectPosition: background.position } : undefined}
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-asphalt-900 via-asphalt-900/25 to-transparent" />
      {foreground && (
        <div className="truck-road-plane absolute inset-x-[-16%] bottom-[-18%] h-[42%] origin-bottom opacity-70">
          <Image
            src={foreground.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            style={foreground.position ? { objectPosition: foreground.position } : undefined}
            className="object-cover"
            aria-hidden="true"
          />
        </div>
      )}
      {cutout && (
        <>
          <CutoutMotionLayer
            asset={cutout}
            trigger={`#${id}`}
            className="bottom-[8%] right-[-8%] h-[58%] w-[88%]"
            from={{ xPercent: -8, y: 34, scale: 0.9, rotateY: -10, rotateZ: -0.6, opacity: 0.86 }}
            to={{ xPercent: 8, y: -22, scale: 1.07, rotateY: 6, rotateZ: 0.4, opacity: 1 }}
          />
          <div className="absolute bottom-[9%] right-[4%] h-12 w-[58%] rounded-full bg-asphalt-900/70 blur-xl" />
        </>
      )}
      <div className="absolute inset-x-0 bottom-0 p-6 text-chrome">
        {kicker && <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400">{kicker}</p>}
      </div>
    </div>
  );
}
