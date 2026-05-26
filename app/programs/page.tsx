import type { Metadata } from 'next';
import Script from 'next/script';
import { ClassPicker, CurriculumSplit, JourneyTimeline, LeadCTA, PageHero, ScheduleGrid, TenReasons } from '@/components/marketing/MarketingSections';
import { assets, programs, seoPages } from '@/content/site';
import { absoluteUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: seoPages.programs.title,
  description: seoPages.programs.description,
  alternates: { canonical: '/programs' }
};

const courseLd = programs.map((program) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: program.title,
  description: program.summary,
  provider: {
    '@type': 'EducationalOrganization',
    name: 'National Truck Driving School',
    sameAs: 'https://www.nationaltruckschool.com'
  },
  url: absoluteUrl(program.href),
  timeRequired: program.slug === 'class-a' ? 'P4.5W' : undefined,
  occupationalCategory: '53-3032'
}));

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        kicker="Training programs"
        title="The road to your CDL starts here."
        sub="Two CDL classes. Hundreds of hours of real wheel time. One goal: your license."
        image={assets.yard}
        variant="programs"
      />
      <ClassPicker />
      <CurriculumSplit />
      <JourneyTimeline />
      <ScheduleGrid />
      <TenReasons />
      <LeadCTA />
      <Script id="schema-courses" type="application/ld+json">
        {JSON.stringify(courseLd)}
      </Script>
    </>
  );
}
