import type { Metadata } from 'next';
import { LeadCTA, PageHero, ProgramDeepDive } from '@/components/marketing/MarketingSections';
import { assets, seoPages } from '@/content/site';

export const metadata: Metadata = {
  title: seoPages.classA.title,
  description: seoPages.classA.description,
  alternates: { canonical: '/programs/class-a' }
};

export default function ClassAPage() {
  return (
    <>
      <PageHero
        kicker="Class A CDL"
        title="Training for tractor-trailers and heavy combinations."
        sub="Prepare for the Commercial Driver License examination with behind-the-wheel training, classroom instruction, and pass-guarantee support."
        image={assets.heroRoadSunset}
        variant="programs"
      />
      <ProgramDeepDive kind="class-a" />
      <LeadCTA />
    </>
  );
}
