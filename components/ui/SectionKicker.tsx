import { cn } from '@/lib/utils';

type SectionKickerProps = {
  children: string;
  dark?: boolean;
  className?: string;
};

export function SectionKicker({ children, dark, className }: SectionKickerProps) {
  return (
    <p
      className={cn(
        'font-mono text-xs font-semibold uppercase tracking-[0.22em]',
        dark ? 'text-amber-400' : 'text-asphalt-600',
        className
      )}
    >
      {children}
    </p>
  );
}
