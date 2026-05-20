import type { Metadata } from 'next';
import { Accreditation, LeadCTA, PartnerMarquee, PillarGrid, ProgramPreview, StatRail, TestimonialsSection, WhyUsRibbon } from '@/components/marketing/MarketingSections';
import { HeroHighway } from '@/components/marketing/HeroHighway';
import { seoPages } from '@/content/site';

export const metadata: Metadata = {
  title: seoPages.home.title,
  description: seoPages.home.description,
  alternates: { canonical: '/' }
};

export default function HomePage() {
  return (
    <>
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
