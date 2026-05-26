import type { Metadata } from 'next';
import { Bebas_Neue, Inter, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import { ReactNode } from 'react';
import enMessages from '@/messages/en.json';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Providers } from '@/components/layout/Providers';
import { SkipToContent } from '@/components/layout/SkipToContent';
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA';
import { assets, seoPages, site } from '@/content/site';
import { absoluteUrl } from '@/lib/utils';
import './globals.css';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-display' });
const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nationaltruckschool.com'),
  title: {
    default: seoPages.home.title,
    template: '%s'
  },
  description: seoPages.home.description,
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: seoPages.home.title,
    description: seoPages.home.description,
    url: '/',
    siteName: site.name,
    images: [
      {
        url: assets.heroRoadSunset.src,
        width: 1200,
        height: 630,
        alt: assets.heroRoadSunset.alt
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: seoPages.home.title,
    description: seoPages.home.description,
    images: [assets.heroRoadSunset.src]
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  name: site.name,
  alternateName: site.shortName,
  url: 'https://www.nationaltruckschool.com',
  logo: absoluteUrl(assets.logo.src),
  image: absoluteUrl(assets.heroRoadSunset.src),
  telephone: '+1-510-455-6399',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country
  },
  areaServed: ['Hayward', 'San Lorenzo', 'Oakland', 'Fremont', 'San Jose', 'San Francisco']
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable} ${mono.variable}`}>
      <body className="grain font-body antialiased">
        <Providers locale="en" messages={enMessages}>
          <SkipToContent />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <StickyMobileCTA />
        </Providers>
        <Script id="schema-organization" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
      </body>
    </html>
  );
}
