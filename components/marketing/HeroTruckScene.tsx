'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { assets } from '@/content/site';

export function HeroTruckScene() {
  const rootRef = useRef<HTMLDivElement>(null);
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
        gsap.to(laneRef.current, {
          x: -560,
          ease: 'none',
          scrollTrigger: { trigger, start: 'top top', end: 'bottom top', scrub: 0.7 }
        });
      }, rootRef);

      cleanup = () => ctx.revert();
    });

    return () => cleanup?.();
  }, [reduce]);

  return (
    <div ref={rootRef} className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <Image
        src={assets.heroRoadSunset.src}
        alt=""
        fill
        sizes="100vw"
        style={{ objectPosition: assets.heroRoadSunset.position }}
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,14,20,0.94)_0%,rgba(10,14,20,0.78)_38%,rgba(10,14,20,0.38)_72%,rgba(10,14,20,0.16)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_52%,rgba(245,165,36,0.18),transparent_26rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,14,20,0.08)_0%,rgba(10,14,20,0)_38%,rgba(10,14,20,0.80)_100%)]" />

      <div className="absolute inset-x-[-15%] bottom-[-8%] h-[31%] origin-bottom overflow-hidden bg-[linear-gradient(180deg,rgba(10,14,20,0)_0%,rgba(10,14,20,0.20)_34%,rgba(8,10,15,0.68)_100%)] [transform:perspective(900px)_rotateX(58deg)]">
        <div
          ref={laneRef}
          className="absolute left-0 top-[49%] h-1.5 w-[220%] bg-[linear-gradient(90deg,transparent_0_8%,rgba(245,165,36,0.88)_8%_15%,transparent_15%_29%)] bg-[length:190px_6px] opacity-70"
        />
      </div>
    </div>
  );
}
