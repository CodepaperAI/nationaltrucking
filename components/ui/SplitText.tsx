'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

type SplitTextProps = {
  children: string;
  className?: string;
};

export function SplitText({ children, className }: SplitTextProps) {
  const reduce = useReducedMotion();
  const words = children.split(' ');

  if (reduce) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span className={className} aria-label={children}>
      {words.map((word, index) => (
        <motion.span
          aria-hidden="true"
          className="inline-block overflow-hidden align-top"
          key={`${word}-${index}`}
        >
          <motion.span
            className="inline-block pr-[0.22em]"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
            {index < words.length - 1 ? ' ' : ''}
          </motion.span>
        </motion.span>
      ))}
    </span>
  );
}
