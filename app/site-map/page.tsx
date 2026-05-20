import type { Metadata } from 'next';
import { SimpleLegalPage, SiteMapList } from '@/components/marketing/MarketingSections';

export const metadata: Metadata = {
  title: 'Site Map - National Truck Driving School',
  description: 'Site map for National Truck Driving School.',
  alternates: { canonical: '/site-map' }
};

export default function SiteMapPage() {
  return (
    <SimpleLegalPage title="Site Map">
      <SiteMapList />
    </SimpleLegalPage>
  );
}
