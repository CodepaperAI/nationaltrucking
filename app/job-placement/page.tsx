import type { Metadata } from 'next';
import { FundingGrid, LeadCTA, PageHero, PartnerGrid, PromiseCards } from '@/components/marketing/MarketingSections';
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
        kicker="02 / Job Placement Assistance"
        title="We don't stop at the license."
        sub="We don't just kick you out the door once you've completed our school. We help you get in the door at some of the top trucking companies in the country."
        image={assets.placement}
      />
      <PromiseCards />
      <FundingGrid title="Funding support, then job placement." />
      <PartnerGrid />
      <LeadCTA />
    </>
  );
}
