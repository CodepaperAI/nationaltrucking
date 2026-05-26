import type { Metadata } from 'next';
import { LeadCTA, PageHero, PartnerGrid, PromiseCards } from '@/components/marketing/MarketingSections';
import { assets, seoPages } from '@/content/site';

export const metadata: Metadata = {
  title: seoPages.placement.title,
  description: seoPages.placement.description,
  alternates: { canonical: '/job-placement' }
};

export default function JobPlacementPage() {
  return (
    <>
      <PageHero
        kicker="Job placement assistance"
        title="We don't stop at the license."
        sub="After training, our team helps graduates prepare for applications, understand hiring expectations, and connect with companies looking for new CDL drivers."
        image={assets.placement}
        variant="placement"
      />
      <PromiseCards />
      <PartnerGrid />
      <LeadCTA variant="placement" />
    </>
  );
}
