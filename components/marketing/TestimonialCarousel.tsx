'use client';

import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useCallback } from 'react';
import type { Testimonial } from '@/content/types';

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

const isPanorama = (item: Testimonial) => item.image.width / item.image.height >= 2.4;

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay({ delay: 5200, stopOnInteraction: true })]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {testimonials.map((item) => (
            <article
              className="min-w-0 flex-[0_0_92%] overflow-hidden rounded-sm border border-asphalt-900/10 bg-chrome shadow-hard md:flex-[0_0_72%] lg:flex-[0_0_54%]"
              key={`${item.authorName}-${item.date}`}
            >
              <div className="grid md:grid-cols-[0.8fr_1.2fr]">
                <div className="relative aspect-[16/10] bg-asphalt-800 md:aspect-auto md:min-h-full">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1024px) 28vw, 92vw"
                    style={item.image.position ? { objectPosition: item.image.position } : undefined}
                    className={isPanorama(item) ? 'object-contain p-3' : 'object-cover'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-asphalt-900/60 to-transparent" />
                </div>
                <div className="flex min-h-72 flex-col justify-between p-6 sm:p-8">
                  <div>
                    <div className="mb-5 flex gap-1 text-amber-500" aria-label="5 star review">
                      {Array.from({ length: item.stars }).map((_, index) => (
                        <Star key={index} className="size-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg leading-relaxed text-asphalt-800">“{item.quote}”</p>
                  </div>
                  <div className="mt-6 border-t border-asphalt-900/10 pt-5">
                    <p className="font-display text-3xl uppercase tracking-wide text-asphalt-900">{item.authorName}</p>
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-asphalt-500">{item.date}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          onClick={scrollPrev}
          className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-asphalt-900/15 bg-chrome text-asphalt-900"
        >
          <ChevronLeft className="size-5" />
          <span className="sr-only">Previous testimonial</span>
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm bg-asphalt-900 text-chrome"
        >
          <ChevronRight className="size-5" />
          <span className="sr-only">Next testimonial</span>
        </button>
      </div>
    </div>
  );
}
