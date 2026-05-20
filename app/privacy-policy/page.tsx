import type { Metadata } from 'next';
import { SimpleLegalPage } from '@/components/marketing/MarketingSections';

export const metadata: Metadata = {
  title: 'Privacy Policy - National Truck Driving School',
  description: 'Privacy policy for National Truck Driving School.',
  alternates: { canonical: '/privacy-policy' }
};

export default function PrivacyPolicyPage() {
  return (
    <SimpleLegalPage title="Privacy Policy">
      <p>
        This page preserves the existing privacy-policy route for the redesigned site. Lead form data is used to respond to consultation requests about courses, financial aid, and job placement.
      </p>
      <p>We use basic website analytics and form-processing tools to operate the site and improve enrollment support.</p>
    </SimpleLegalPage>
  );
}
