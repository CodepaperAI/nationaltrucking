'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CalendarCheck, Phone } from 'lucide-react';
import { site } from '@/content/site';
import { trackEvent } from '@/lib/analytics';

export function StickyMobileCTA() {
  const pathname = usePathname();

  if (pathname?.startsWith('/contact')) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-asphalt-900/10 bg-chrome/95 p-2 shadow-hard backdrop-blur md:hidden">
      <a
        href={site.phoneHref}
        onClick={() => trackEvent('phone_tap', { location: 'sticky_mobile' })}
        className="focus-ring inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-sm bg-asphalt-900 px-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-chrome"
      >
        <Phone className="size-4" />
        Call
      </a>
      <Link
        href="/contact"
        onClick={() => trackEvent('cta_click', { label: 'sticky_mobile_book' })}
        className="focus-ring inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-sm bg-amber-500 px-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-asphalt-900"
      >
        <CalendarCheck className="size-4" />
        Book
      </Link>
    </div>
  );
}
