import type { Metadata } from 'next';
import Script from 'next/script';
import { LeadCTA, PageHero, TipsList } from '@/components/marketing/MarketingSections';
import { assets, seoPages, studentTips } from '@/content/site';

export const metadata: Metadata = {
  title: seoPages.tips.title,
  description: seoPages.tips.description,
  alternates: { canonical: '/student-tips' }
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: studentTips.map((tip) => ({
    '@type': 'Question',
    name: tip.title,
    acceptedAnswer: {
      '@type': 'Answer',
      text: tip.body
    }
  }))
};

export default function StudentTipsPage() {
  return (
    <>
      <PageHero
        kicker="03 / Student Guide"
        title="How to pick a truck driving school without getting burned."
        sub="12 things to check before you sign an enrollment agreement."
        image={assets.classroom}
      />
      <TipsList />
      <LeadCTA />
      <Script id="schema-student-tips-faq" type="application/ld+json">
        {JSON.stringify(faqLd)}
      </Script>
    </>
  );
}
