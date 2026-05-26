import type { Metadata } from 'next';
import { ContactRail, FullLeadFormSection, LocationMap, PageHero, ServiceArea } from '@/components/marketing/MarketingSections';
import { assets, seoPages } from '@/content/site';

export const metadata: Metadata = {
  title: seoPages.contact.title,
  description: seoPages.contact.description,
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Let's talk"
        title="Free 15-minute consultation."
        sub="Find out about programs, financial aid, and job placement assistance."
        image={assets.sideMirror}
        variant="contact"
      />
      <ContactRail />
      <FullLeadFormSection />
      <LocationMap />
      <ServiceArea />
    </>
  );
}
