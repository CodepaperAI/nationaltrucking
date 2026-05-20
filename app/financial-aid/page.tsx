import type { Metadata } from 'next';
import { FinancialAidInteractive, FundingGrid, LeadCTA, PageHero, PaymentLadder } from '@/components/marketing/MarketingSections';
import { assets, seoPages } from '@/content/site';

export const metadata: Metadata = {
  title: seoPages.financialAid.title,
  description: seoPages.financialAid.description,
  alternates: { canonical: '/financial-aid' }
};

export default function FinancialAidPage() {
  return (
    <>
      <PageHero
        kicker="04 / Financial Aid"
        title="Funding shouldn't stop a career."
        sub="We've helped hundreds of students through the funding process. Here's how."
        image={assets.heroRoadSunset}
      />
      <PaymentLadder />
      <FundingGrid title="Voucher acceptance" />
      <FinancialAidInteractive />
      <LeadCTA />
    </>
  );
}
