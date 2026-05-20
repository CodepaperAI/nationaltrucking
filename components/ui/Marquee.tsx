import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type MarqueeProps = {
  children: ReactNode;
  className?: string;
};

export function Marquee({ children, className }: MarqueeProps) {
  return (
    <div className={cn('group overflow-hidden', className)}>
      <div className="flex min-w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
        {children}
        {children}
      </div>
    </div>
  );
}
