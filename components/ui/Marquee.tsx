'use client';

import { ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

type MarqueeProps = {
  children: ReactNode;
  className?: string;
};

export function Marquee({ children, className }: MarqueeProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={cn('overflow-x-auto', className)}>
        <div className="flex min-w-max gap-4">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={cn('group overflow-hidden', className)}>
      <div className="flex min-w-max animate-marquee gap-4 motion-reduce:animate-none group-focus-within:[animation-play-state:paused] group-hover:[animation-play-state:paused]">
        <div className="flex gap-4">
          {children}
        </div>
        <div className="flex gap-4 motion-reduce:hidden" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
