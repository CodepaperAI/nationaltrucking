'use client';

import Link from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';

type ButtonBase = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  magnetic?: boolean;
  className?: string;
  eventLabel?: string;
};

type ButtonLinkProps = ButtonBase &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBase> & {
    href: string;
  };

type ButtonNativeProps = ButtonBase &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

const variants = {
  primary: 'bg-amber-500 text-asphalt-900 hover:bg-amber-400 border-amber-500',
  secondary: 'bg-transparent text-asphalt-900 hover:bg-asphalt-900 hover:text-chrome border-asphalt-900/30',
  ghost: 'bg-transparent text-current hover:bg-current/10 border-transparent',
  dark: 'bg-chrome text-asphalt-900 hover:bg-steel-200 border-chrome'
};

export function Button(props: ButtonLinkProps | ButtonNativeProps) {
  const { children, variant = 'primary', magnetic = false, className, eventLabel } = props;
  const ref = useRef<HTMLSpanElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 150, damping: 18, mass: 0.2 });
  const sy = useSpring(my, { stiffness: 150, damping: 18, mass: 0.2 });
  const x = useTransform(sx, (value) => value * 0.28);
  const y = useTransform(sy, (value) => value * 0.28);

  const classes = cn(
    'focus-ring group inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] transition duration-300 ease-out active:translate-y-px',
    variants[variant],
    className
  );

  const handlePointerMove = (event: React.PointerEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(event.clientX - rect.left - rect.width / 2);
    my.set(event.clientY - rect.top - rect.height / 2);
  };

  const handlePointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const track = () => {
    if (eventLabel) trackEvent('cta_click', { label: eventLabel });
  };

  if ('href' in props && props.href) {
    const { href, children: _children, variant: _variant, magnetic: _magnetic, className: _className, eventLabel: _eventLabel, ...linkRest } = props;

    return (
      <motion.span ref={ref} style={magnetic ? { x, y } : undefined} onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
        <Link href={href} {...linkRest} className={classes} onClick={track}>
          <span>{children}</span>
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.span>
    );
  }

  const { children: _children, variant: _variant, magnetic: _magnetic, className: _className, eventLabel: _eventLabel, ...buttonRest } = props;

  return (
    <motion.span ref={ref} style={magnetic ? { x, y } : undefined} onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      <button {...(buttonRest as ButtonHTMLAttributes<HTMLButtonElement>)} className={classes} onClick={track}>
        <span>{children}</span>
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </motion.span>
  );
}
