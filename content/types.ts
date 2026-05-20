export type MotionId =
  | 'M01'
  | 'M02'
  | 'M03'
  | 'M04'
  | 'M05'
  | 'M06'
  | 'M07'
  | 'M08'
  | 'M09'
  | 'M10'
  | 'M11'
  | 'M12'
  | 'M13'
  | 'M14'
  | 'M15'
  | 'M16'
  | 'M17'
  | 'M18';

export type AssetSlot = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
  priority?: boolean;
  todo?: string;
};

export type Program = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  image: AssetSlot;
  href: string;
  facts: string[];
};

export type Testimonial = {
  quote: string;
  authorName: string;
  date: string;
  stars: number;
  image: AssetSlot;
  cdlClass?: 'Class A' | 'Class B' | 'Both';
};

export type VideoReel = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  src: string;
  poster: AssetSlot;
  durationLabel: string;
};

export type PartnerCompany = {
  name: string;
  url: string;
  image?: AssetSlot;
  note: string;
};

export type FundingOption = {
  title: string;
  body: string;
  icon: 'loan' | 'briefcase' | 'heart' | 'file' | 'shield';
};

export type StudentTip = {
  eyebrow: string;
  title: string;
  body: string;
};

export type SeoPage = {
  title: string;
  description: string;
  path: string;
};

export type LeadFormValues = {
  name: string;
  email: string;
  phone: string;
  preferredClass: 'Class A' | 'Class B' | 'Not sure yet';
  funding: 'Self-pay' | 'Payment plan' | 'WIA/EDD' | 'DOR' | 'SSA' | 'Workers Comp' | 'Other';
  bestTime: 'Morning' | 'Afternoon' | 'Evening' | 'Weekend';
  message?: string;
  company?: string;
};
