'use client';

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

type NumberCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
};

export function NumberCounter({ value, suffix = '', prefix = '', decimals = 0, className }: NumberCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduce = useReducedMotion();
  const motionValue = useMotionValue(reduce ? value : 0);
  const rounded = useTransform(motionValue, (latest) => `${prefix}${latest.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(motionValue, value, { duration: 1.25, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [inView, motionValue, reduce, value]);

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>;
}
