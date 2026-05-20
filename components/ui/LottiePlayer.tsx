'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

type LottiePlayerProps = {
  src: string;
  alt: string;
  className?: string;
};

export function LottiePlayer({ src, alt, className }: LottiePlayerProps) {
  if (src.endsWith('.gif')) {
    return <Image src={src} alt={alt} width={96} height={96} className={className} unoptimized />;
  }

  return <Lottie animationData={src} loop className={className} aria-hidden="true" />;
}
