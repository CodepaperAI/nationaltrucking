import type { Metadata } from 'next';
import { SimpleLegalPage } from '@/components/marketing/MarketingSections';

export const metadata: Metadata = {
  title: 'Accessibility Statement - National Truck Driving School',
  description: 'Accessibility statement for National Truck Driving School.',
  alternates: { canonical: '/accessibility-statement' }
};

export default function AccessibilityStatementPage() {
  return (
    <SimpleLegalPage title="Accessibility Statement">
      <p>
        National Truck Driving School is committed to a WCAG 2.2 AA accessible website experience. The redesign includes keyboard navigation, reduced-motion fallbacks, accessible forms, contrast checks, and skip-to-content navigation.
      </p>
      <p>If you have trouble using any part of the website, contact the school by phone and we will help you access the information you need.</p>
    </SimpleLegalPage>
  );
}
