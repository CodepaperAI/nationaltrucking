'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import type { AssetSlot } from '@/content/types';
import { cn } from '@/lib/utils';

type CutoutMotionLayerProps = {
  asset: AssetSlot;
  trigger?: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  from?: {
    xPercent?: number;
    y?: number;
    scale?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
    opacity?: number;
  };
  to?: {
    xPercent?: number;
    y?: number;
    scale?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
    opacity?: number;
  };
};

export function CutoutMotionLayer({
  asset,
  trigger,
  className,
  imageClassName,
  sizes = '(min-width: 1024px) 40vw, 100vw',
  from = { xPercent: -8, y: 28, scale: 0.94, rotateY: -8, opacity: 0.92 },
  to = { xPercent: 8, y: -18, scale: 1.06, rotateY: 5, opacity: 1 }
}: CutoutMotionLayerProps) {
  const layerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !layerRef.current) return;

    let cleanup: (() => void) | undefined;
    const triggerElement = trigger ? document.querySelector(trigger) : layerRef.current.closest('section');

    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([gsapModule, scrollTriggerModule]) => {
      if (!layerRef.current) return;
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.fromTo(layerRef.current, from, {
          ...to,
          ease: 'none',
          scrollTrigger: {
            trigger: triggerElement || layerRef.current,
            start: 'top 85%',
            end: 'bottom top',
            scrub: 0.7
          }
        });
      }, layerRef);

      cleanup = () => ctx.revert();
    });

    return () => cleanup?.();
  }, [from, reduce, to, trigger]);

  return (
    <div ref={layerRef} className={cn('absolute will-change-transform', className)} aria-hidden="true">
      <Image src={asset.src} alt="" fill sizes={sizes} className={cn('object-contain drop-shadow-[0_28px_48px_rgba(10,14,20,0.38)]', imageClassName)} />
    </div>
  );
}
