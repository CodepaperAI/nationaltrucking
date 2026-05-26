import type { Metadata } from 'next';
import { AboutPromise, InstructorGrid, LeadCTA, PageHero, VisitCard } from '@/components/marketing/MarketingSections';
import { assets, seoPages } from '@/content/site';

export const metadata: Metadata = {
  title: seoPages.about.title,
  description: seoPages.about.description,
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About NTDS"
        title="Straight-forward. Honest. Uncompromised."
        sub="The objective is to prepare students with knowledge and skills for the abundance of entry-level jobs in the trucking industry."
        image={assets.mirrorInstructor}
        variant="about"
      />
      <AboutPromise />
      <InstructorGrid />
      <VisitCard />
      <LeadCTA />
    </>
  );
}
