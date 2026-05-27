'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { assets, site } from '@/content/site';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';

const navItems = [
  ['Home', '/'],
  ['About', '/about'],
  ['Programs', '/programs'],
  ['Student Tips', '/student-tips'],
  ['Job Placement', '/job-placement'],
  ['Financial Aid', '/financial-aid'],
  ['Contact', '/contact']
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-asphalt-900/10 bg-chrome text-asphalt-900 backdrop-blur-xl">
      <div className="border-b border-chrome/10 bg-road">
        <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4 overflow-hidden px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-steel-300 sm:px-6 lg:px-8">
          <span className="min-w-0 truncate sm:hidden">San Lorenzo · CDL Training · Español</span>
          <span className="hidden min-w-0 truncate sm:inline">San Lorenzo, CA · CDL Class A & B training · Se Habla Español</span>
          <a
            href={site.phoneHref}
            onClick={() => trackEvent('phone_tap', { location: 'top_bar' })}
            className="hidden shrink-0 items-center gap-2 text-amber-400 hover:text-amber-300 sm:inline-flex"
          >
            <Phone className="size-3.5" />
            {site.phone}
          </a>
        </div>
      </div>

      <nav className="mx-auto flex max-w-[90rem] items-center justify-between gap-5 px-4 py-2.5 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="focus-ring flex shrink-0 items-center gap-3 rounded-sm" aria-label="National Truck Driving School home">
          <span className="relative flex aspect-[512/228] w-48 shrink-0 items-center sm:w-56 xl:w-64 2xl:w-72">
            <Image
              src={assets.logo.src}
              alt={assets.logo.alt}
              fill
              sizes="(min-width: 1536px) 288px, (min-width: 1280px) 256px, (min-width: 640px) 224px, 192px"
              className="object-contain"
              priority
            />
          </span>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex">
          {navItems.map(([label, href]) => {
            const active = href === '/' ? pathname === href : pathname?.startsWith(href);
            return (
              <Link
                href={href}
                key={href}
                className={cn(
                  'focus-ring whitespace-nowrap rounded-sm px-2.5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.14em] transition 2xl:px-3 2xl:text-[11px] 2xl:tracking-[0.16em]',
                  active ? 'bg-asphalt-900 text-chrome' : 'text-asphalt-500 hover:text-asphalt-900'
                )}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="hidden shrink-0 items-center gap-2 xl:flex 2xl:gap-3">
          <Link
            href="/es"
            className="focus-ring rounded-sm border border-asphalt-900/20 px-3 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-asphalt-900 transition hover:bg-asphalt-900 hover:text-chrome 2xl:text-[11px] 2xl:tracking-[0.16em]"
          >
            ES
          </Link>
          <Button href="/contact" magnetic eventLabel="header_book" className="min-h-11 px-4 py-3 text-[10px] tracking-[0.14em] 2xl:px-5 2xl:text-xs 2xl:tracking-[0.18em]">
            Book
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-asphalt-900/20 text-asphalt-900 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-asphalt-900/10 bg-chrome px-4 pb-5 pt-2 xl:hidden">
          <div className="grid gap-2">
            {navItems.map(([label, href]) => (
              <Link
                href={href}
                key={href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-sm border border-asphalt-900/10 px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-asphalt-700"
              >
                {label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Link href="/es" className="focus-ring rounded-sm border border-asphalt-900/20 px-4 py-3 text-center font-mono text-xs font-bold uppercase tracking-[0.16em] text-asphalt-900">
                Español
              </Link>
              <a
                href={site.phoneHref}
                onClick={() => trackEvent('phone_tap', { location: 'mobile_menu' })}
                className="focus-ring rounded-sm bg-amber-500 px-4 py-3 text-center font-mono text-xs font-bold uppercase tracking-[0.16em] text-asphalt-900"
              >
                Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
