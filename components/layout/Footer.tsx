import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { assets, site } from '@/content/site';

const footerNav = [
  ['Home', '/'],
  ['About', '/about'],
  ['Programs', '/programs'],
  ['Student Tips', '/student-tips'],
  ['Job Placement Assistance', '/job-placement'],
  ['Financial Aid', '/financial-aid'],
  ['Contact', '/contact']
] as const;

export function Footer() {
  return (
    <footer className="bg-road pb-24 pt-16 text-chrome md:pb-10">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.85fr_1fr]">
          <div>
            <Image src={assets.logo.src} alt={assets.logo.alt} width={180} height={80} className="mb-6 h-auto w-44 rounded-sm bg-chrome p-2" />
            <p className="max-w-sm text-base leading-relaxed text-steel-300">
              Straight-forward CDL training for the San Francisco Bay Area. Class A, Class B, job placement assistance, and funding guidance.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Image src={assets.paymentCards.src} alt={assets.paymentCards.alt} width={120} height={52} className="h-12 w-auto rounded-sm bg-chrome object-contain p-1" />
            </div>
          </div>

          <div>
            <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Navigate</h2>
            <div className="mt-5 grid gap-3">
              {footerNav.map(([label, href]) => (
                <Link key={href} href={href} className="text-sm font-semibold text-steel-200 transition hover:text-amber-400">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Visit</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-steel-200">
              <p>{site.address.label}</p>
              <p>{site.address.note}</p>
              <p>{site.hours}</p>
              <p>
                <a href={site.phoneHref} className="text-xl font-bold text-chrome hover:text-amber-400">
                  {site.phone}
                </a>
              </p>
              <p>
                <span>{site.email}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-chrome/10 pt-6 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-steel-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 National Truck Driving School · Built by {site.builtBy}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="hover:text-amber-400">Privacy</Link>
            <Link href="/site-map" className="hover:text-amber-400">Site Map</Link>
            <Link href="/accessibility-statement" className="hover:text-amber-400">Accessibility</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
