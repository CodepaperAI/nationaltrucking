'use client';

import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';
import { trackEvent } from '@/lib/analytics';
import { HeroTruckScene } from './HeroTruckScene';

export function HeroHighway() {
  return (
    <section className="relative isolate min-h-[calc(100dvh-104px)] overflow-hidden bg-road text-chrome">
      <HeroTruckScene />

      <div className="relative z-20 mx-auto flex min-h-[calc(100dvh-104px)] max-w-7xl items-center px-4 pb-32 pt-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.22em] text-amber-400">
            <span className="sm:hidden">San Lorenzo · BPPE · Espanol</span>
            <span className="hidden sm:inline">San Lorenzo, CA · BPPE approved to operate · Se Habla Espanol</span>
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(3rem,13.5vw,5.25rem)] uppercase leading-[0.88] tracking-wide text-chrome sm:text-[5.65rem] lg:text-[6.8rem] xl:text-[7.25rem]">
            <span className="block">Start your</span>
            <span className="block">new career</span>
            <span className="block text-amber-400">behind the</span>
            <span className="block text-amber-400">wheel.</span>
          </h1>
          <p className="mt-6 max-w-[22rem] text-lg leading-relaxed text-steel-200 sm:max-w-xl sm:text-xl">
            CDL Class A and Class B training in the San Francisco Bay Area. Talk to an advisor about payment options and the next available class.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" magnetic eventLabel="hero_book">
              Book Free Consultation
            </Button>
            <a
              href={site.phoneHref}
              onClick={() => trackEvent('phone_tap', { location: 'hero' })}
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm border border-chrome/35 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-chrome transition hover:bg-chrome hover:text-asphalt-900"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 border-y border-chrome/10 bg-asphalt-900/80 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-steel-200 sm:px-6 lg:px-8">
          <span>BPPE approved to operate</span>
          <span>Installment payment options</span>
          <span>Se habla Espanol</span>
          <span>Job placement assistance</span>
        </div>
      </div>
    </section>
  );
}
