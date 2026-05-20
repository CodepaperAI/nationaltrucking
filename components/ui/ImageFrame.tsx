import Image from 'next/image';
import type { AssetSlot } from '@/content/types';
import { cn } from '@/lib/utils';

type ImageFrameProps = {
  asset: AssetSlot;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function ImageFrame({ asset, className, imageClassName, priority, sizes = '(min-width: 1024px) 50vw, 100vw' }: ImageFrameProps) {
  return (
    <div className={cn('relative min-w-0 overflow-hidden bg-asphalt-800', className)}>
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        priority={priority ?? asset.priority}
        sizes={sizes}
        style={asset.position ? { objectPosition: asset.position } : undefined}
        className={cn('object-cover transition duration-700 ease-out', imageClassName)}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-asphalt-900/55 via-asphalt-900/10 to-transparent" />
    </div>
  );
}
