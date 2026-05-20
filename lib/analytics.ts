'use client';

type ConversionEvent = 'cta_click' | 'phone_tap' | 'form_submit';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function trackEvent(event: ConversionEvent, props: Record<string, string> = {}) {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', event, props);
  window.plausible?.(event, { props });
}
