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
        kicker="Financial aid"
        title="Plan the payments before you start."
        sub="Review installment payment options, the starter payment, and any agency or voucher paperwork with an enrollment advisor."
        image={assets.heroRoadSunset}
        variant="finance"
      />
      <PaymentLadder />
      <FundingGrid title="Payment and paperwork options" />
      <FinancialAidInteractive />
      <LeadCTA />
    </>
  );
}
