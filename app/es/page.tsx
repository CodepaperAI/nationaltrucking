import type { Metadata } from 'next';
import { Accreditation, LeadCTA, PartnerMarquee, PillarGrid, ProgramPreview, StatRail, TestimonialsSection, WhyUsRibbon } from '@/components/marketing/MarketingSections';
import { HeroHighway } from '@/components/marketing/HeroHighway';
import { seoPages } from '@/content/site';

export const metadata: Metadata = {
  title: `Español - ${seoPages.home.title}`,
  description: seoPages.home.description,
  alternates: { canonical: '/es' }
};

export default function SpanishHomePage() {
  return (
    <>
      {/* TODO: confirm Spanish translation with client. English fallback content is intentional for v1. */}
      <HeroHighway />
      <StatRail />
      <PillarGrid />
      <WhyUsRibbon />
      <ProgramPreview />
      <TestimonialsSection />
      <PartnerMarquee />
      <Accreditation />
      <LeadCTA />
    </>
  );
}
