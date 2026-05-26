'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { assets } from '@/content/site';

export function HeroTruckScene() {
  const rootRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const roadRef = useRef<HTMLDivElement>(null);
  const laneRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !rootRef.current) return;

    let cleanup: (() => void) | undefined;
    const trigger = rootRef.current.closest('section') || rootRef.current;

    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([gsapModule, scrollTriggerModule]) => {
      if (!rootRef.current) return;
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const scrollTrigger = { trigger, start: 'top top', end: 'bottom top', scrub: 0.7 };

        gsap.to(backgroundRef.current, { scale: 1.08, yPercent: 4, ease: 'none', scrollTrigger });
        gsap.to(roadRef.current, { xPercent: -5, yPercent: 8, ease: 'none', scrollTrigger });
        gsap.to(laneRef.current, { x: -560, ease: 'none', scrollTrigger });
      }, rootRef);

      cleanup = () => ctx.revert();
    });

    return () => cleanup?.();
  }, [reduce]);

  return (
    <div ref={rootRef} className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div ref={backgroundRef} className="absolute inset-0">
        <Image
          src={assets.heroRoadSunset.src}
          alt=""
          fill
          sizes="100vw"
          style={{ objectPosition: assets.heroRoadSunset.position }}
          className="object-cover"
          priority
        />
      </div>

      <div className="hero-side-overlay absolute inset-0" />
      <div className="hero-warm-spot absolute inset-0" />
      <div className="hero-floor-overlay absolute inset-0" />

      <div ref={roadRef} className="hero-road-surface absolute inset-x-[-15%] bottom-[-8%] h-[31%] origin-bottom overflow-hidden [transform:perspective(900px)_rotateX(58deg)]">
        <div
          ref={laneRef}
          className="hero-lane-stripe absolute left-0 top-[49%] h-1.5 w-[220%] bg-[length:190px_6px] opacity-70"
        />
      </div>
    </div>
  );
}
