import type { Metadata } from 'next';
import { LeadCTA, PageHero, ProgramDeepDive } from '@/components/marketing/MarketingSections';
import { assets, seoPages } from '@/content/site';

export const metadata: Metadata = {
  title: seoPages.classB.title,
  description: seoPages.classB.description,
  alternates: { canonical: '/programs/class-b' }
};

export default function ClassBPage() {
  return (
    <>
      <PageHero
        kicker="Class B CDL"
        title="Training for buses, delivery trucks, and local jobs."
        sub="Build the skills required for Class B commercial driving and Passenger endorsement work."
        image={assets.students}
      />
      <ProgramDeepDive kind="class-b" />
      <LeadCTA />
    </>
  );
}
