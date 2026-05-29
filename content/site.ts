import type { AssetSlot, FundingOption, PartnerCompany, Program, SeoPage, StudentTip, Testimonial, VideoReel } from './types';

export const site = {
  name: 'National Truck Driving School',
  shortName: 'NTDS',
  phone: '510.455.6399',
  phoneHref: 'tel:+15104556399',
  address: {
    street: '2480 Grant Ave',
    locality: 'San Lorenzo',
    region: 'CA',
    postalCode: '94580',
    country: 'US',
    label: '2480 Grant Ave, San Lorenzo, CA 94580',
    note: 'Corner of Grant Ave & Phil Dr',
    mapUrl: 'https://maps.app.goo.gl/'
  },
  hours: 'Monday-Friday 8:30AM-5:30PM; Saturday-Sunday 9:30AM-2:00PM',
  email: 'info@nationaltruckschool.com',
  builtBy: 'Codepaper',
  socialLinks: [] as { label: string; href: string }[] // TODO: confirm with client
};

export const assets = {
  logo: {
    id: 'brand-logo',
    src: '/img/logo.png',
    alt: 'National Truck Driving School logo',
    width: 512,
    height: 228
  },
  paymentCards: {
    id: 'payment-cards',
    src: '/img/payment-visa-mastercard.png',
    alt: 'Visa and Mastercard accepted',
    width: 480,
    height: 208
  },
  routeLine: {
    id: 'route-line',
    src: '/img/route-line.svg',
    alt: '',
    width: 1200,
    height: 180
  },
  heroTruck: {
    id: 'hero-01',
    src: '/img/official-slide-1.jpg',
    alt: 'Red Class-A tractor-trailer moving on an open highway',
    width: 1858,
    height: 563,
    position: 'center 50%',
    priority: true,
    todo: 'TODO replace with client original'
  },
  heroPov: {
    id: 'hero-02',
    src: '/img/official-slide-4.jpg',
    alt: 'Red tractor-trailer passing along a highway',
    width: 1858,
    height: 563,
    position: 'center 50%',
    todo: 'TODO replace with client original'
  },
  heroRoadSunset: {
    id: 'hero-road-sunset',
    src: '/img/hero-road-sunset.png',
    alt: 'White semi truck driving on an open highway at sunset',
    width: 1536,
    height: 1024,
    position: '60% 50%',
    priority: true
  },
  heroRoadTruckLayered: {
    id: 'hero-road-truck-layered',
    src: '/img/hero-road-truck-layered.png',
    alt: 'Sunset highway background with a semi truck layer for hero animation',
    width: 1536,
    height: 1024,
    position: '22% 50%',
    priority: true
  },
  heroTruckCutout: {
    id: 'hero-truck-cutout',
    src: '/img/hero-truck-cutout.webp',
    alt: 'Semi truck cutout for hero scroll animation',
    width: 1500,
    height: 420
  },
  roadForeground: {
    id: 'road-foreground',
    src: '/img/road-foreground.webp',
    alt: 'Road foreground layer for scroll depth animation',
    width: 1400,
    height: 360
  },
  yardConesCutout: {
    id: 'yard-cones-cutout',
    src: '/img/yard-cones-cutout.webp',
    alt: 'Temporary practice yard cutout layer',
    width: 900,
    height: 520,
    todo: 'TODO replace with client original'
  },
  instructorCutout: {
    id: 'instructor-cutout',
    src: '/img/instructor-cutout.webp',
    alt: 'Temporary instructor cutout layer',
    width: 640,
    height: 760,
    todo: 'TODO replace with client original'
  },
  studentCdlCutout: {
    id: 'student-cdl-cutout',
    src: '/img/student-cdl-cutout.webp',
    alt: 'Temporary student CDL cutout layer',
    width: 760,
    height: 620,
    todo: 'TODO replace with client original'
  },
  mirrorInstructor: {
    id: 'hero-03',
    src: '/img/official-slide-2.jpg',
    alt: 'Tractor-trailer training truck traveling through a mountain road',
    width: 1858,
    height: 563,
    position: 'center 52%',
    todo: 'TODO replace with client original'
  },
  instructor: {
    id: 'inst-01',
    src: '/img/instructor-lucky-clipboard.jpg',
    alt: 'National Truck Driving School training truck parked in the yard',
    width: 300,
    height: 225,
    position: 'center 50%',
    todo: 'TODO: confirm with client'
  },
  yard: {
    id: 'yard-01',
    src: '/img/official-slide-2.jpg',
    alt: 'Tractor-trailer training truck on a two-lane road',
    width: 1858,
    height: 563,
    position: 'center 52%',
    todo: 'TODO replace with client original'
  },
  preTrip: {
    id: 'yard-02',
    src: '/img/official-slide-1.jpg',
    alt: 'Class-A tractor-trailer in motion during road training',
    width: 1858,
    height: 563,
    position: 'center 50%',
    todo: 'TODO replace with client original'
  },
  classroom: {
    id: 'classroom-01',
    src: '/img/official-slide-4.jpg',
    alt: 'Class-A semi truck on an open highway used for CDL training',
    width: 1858,
    height: 563,
    position: 'center 50%',
    todo: 'TODO replace with client original'
  },
  graduate: {
    id: 'student-01',
    src: '/img/hero-road-sunset.png',
    alt: 'White semi truck driving on an open highway at sunset',
    width: 1536,
    height: 1024,
    position: '60% 50%',
    todo: 'TODO replace with client original'
  },
  students: {
    id: 'student-02',
    src: '/img/official-slide-3.jpg',
    alt: 'White passenger coach bus for Class-B passenger endorsement training',
    width: 1858,
    height: 563,
    position: 'center 50%',
    todo: 'TODO replace with client original'
  },
  wheel: {
    id: 'truck-detail-01',
    src: '/img/detail-wheel.jpg',
    alt: 'National Truck Driving School box truck parked beside the training building',
    width: 400,
    height: 221,
    position: 'center 55%',
    todo: 'TODO replace with client original'
  },
  cab: {
    id: 'truck-detail-02',
    src: '/img/detail-cab-interior.jpg',
    alt: 'National Truck Driving School training truck parked in the practice yard',
    width: 300,
    height: 225,
    position: 'center center',
    todo: 'TODO replace with client original'
  },
  sideMirror: {
    id: 'truck-detail-03',
    src: '/img/official-slide-4.jpg',
    alt: 'Red tractor-trailer side profile on the highway',
    width: 1858,
    height: 563,
    position: 'center 50%',
    todo: 'TODO replace with client original'
  },
  placement: {
    id: 'placement-01',
    src: '/img/official-slide-1.jpg',
    alt: 'Red tractor-trailer representing Class-A fleet career paths',
    width: 1858,
    height: 563,
    position: 'center 50%',
    todo: 'TODO replace with client original'
  },
  map: {
    id: 'bay-01',
    src: '/img/bay-area-map.svg',
    alt: 'Stylized line-art map showing San Lorenzo and nearby Bay Area cities',
    width: 1400,
    height: 900
  }
} satisfies Record<string, AssetSlot>;

export const seoPages: Record<string, SeoPage> = {
  home: {
    path: '/',
    title: 'San Francisco Bay Truck Driving School in San Lorenzo - National Truck Driving School',
    description: 'Truck driving school serving the San Francisco Bay Area. CDL Class A and Class B training with job placement assistance. Call (510) 455-6399.'
  },
  about: {
    path: '/about',
    title: 'About Us - National Truck Driving School',
    description: 'Bay Area CDL training school preparing students for entry-level trucking and busing jobs.'
  },
  programs: {
    path: '/programs',
    title: 'Training Programs - Bay Area CDL Class A & Class B',
    description: 'Behind-the-wheel and classroom CDL training. Class A and Class B programs in the San Francisco Bay.'
  },
  classA: {
    path: '/programs/class-a',
    title: 'Class A CDL Training - National Truck Driving School',
    description: 'Class A CDL training for tractor-trailers and heavy combinations in the San Francisco Bay Area.'
  },
  classB: {
    path: '/programs/class-b',
    title: 'Class B CDL Training - National Truck Driving School',
    description: 'Class B CDL and passenger endorsement training for buses, delivery trucks, and local driving jobs.'
  },
  placement: {
    path: '/job-placement',
    title: 'Job Placement Assistance - National Truck Driving School',
    description: 'We help graduates find jobs with Swift, England, Gordon, and other top trucking companies.'
  },
  financialAid: {
    path: '/financial-aid',
    title: 'Financial Aid & Installment Payments - CDL Training',
    description: 'Review installment payment options, the $1,000 starter payment, and any agency or voucher paperwork with an enrollment advisor.'
  },
  tips: {
    path: '/student-tips',
    title: '8 Tips for Choosing a Truck Driving School',
    description: 'Read practical tips before enrolling at a truck driving school. National Truck Driving School.'
  },
  contact: {
    path: '/contact',
    title: 'Contact Us - National Truck Driving School',
    description: 'Schedule a free consultation. Call (510) 455-6399 or visit 2480 Grant Ave, San Lorenzo, CA.'
  }
};

export const programs: Program[] = [
  {
    slug: 'class-a',
    title: 'Class A CDL',
    kicker: 'Tractor-trailer training',
    href: '/programs/class-a',
    summary: 'Training for tractor-trailers, heavy combinations, and long-haul work.',
    image: assets.heroRoadSunset,
    facts: ['Behind-the-wheel training on real commercial vehicles', 'Classroom instruction on safety and Federal Motor Carrier Safety Rules', 'Full-time and part-time schedules available']
  },
  {
    slug: 'class-b',
    title: 'Class B CDL + Passenger',
    kicker: 'Bus and local work',
    href: '/programs/class-b',
    summary: 'Training for buses, delivery trucks, dump trucks, and local jobs.',
    image: assets.students,
    facts: ['Commercial Class B with Passenger endorsement', 'Defensive driving techniques', 'Practice for DMV testing']
  }
];

export const homepageReels: VideoReel[] = [
  {
    id: 'training-reel-1',
    eyebrow: 'Reel 01 / your next move',
    title: 'Start with a school that moves you forward.',
    body: 'Your next career move starts behind the wheel.',
    src: '/video/training-reel-1.mp4',
    poster: assets.yard,
    durationLabel: 'Career overview'
  },
  {
    id: 'training-reel-2',
    eyebrow: 'Reel 02 / road ahead',
    title: 'Turn CDL training into a real career path.',
    body: 'Build momentum for real driving work.',
    src: '/video/training-reel-2.mp4',
    poster: assets.heroRoadSunset,
    durationLabel: 'Career path'
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'Great school with great instructors. With the help of all of them I was able to pass my test on my first try in just under 4 weeks! I would highly recommend this school to anyone looking a fantastic school at an amazingly good price.',
    authorName: 'Jay H',
    date: 'March 19, 2025',
    stars: 5,
    image: assets.heroRoadSunset,
    cdlClass: 'Class A'
  },
  {
    quote:
      "I 100% recommend Nation truck and Bus Driving School. All instructors are very helpful, they take their time to teach you step-by-step. If you are struggling they always suggest to take video and you can always study more at home. Thank to lucky's help I was able to pass the CDL on my first try.",
    authorName: 'Ericka Z',
    date: 'March 19, 2025',
    stars: 5,
    image: assets.yard
  },
  {
    quote:
      'Great school with excellent instructors. Lucky had complete faith in my ability even when I was not so sure of myself. Superb value. I highly recommend this school. Many thanks to Lucky, Toki and JB. I got my Commercial Class B with Passenger endorsement. I can now drive the big buses.',
    authorName: 'James R',
    date: 'March 19, 2025',
    stars: 5,
    image: assets.students,
    cdlClass: 'Class B'
  },
  {
    quote:
      "They assisted me through the whole process of getting my class A CDL. There's plenty of time and equipment to practice on. Their instructions are clear and concise and worked well enough for me to pass my DMV exam the first time.",
    authorName: 'Tom L',
    date: 'March 19, 2025',
    stars: 5,
    image: assets.preTrip,
    cdlClass: 'Class A'
  },
  {
    quote:
      'Excellent school. I have successfully passed all my tests and now hold a Class A license. The instruction provided was top-notch, with instructors who were thorough and supportive. Lucky, in particular, was an outstanding teacher who ensured that each concept was clearly understood. I highly recommend this school.',
    authorName: 'Guadalupe V',
    date: 'March 19, 2025',
    stars: 5,
    image: assets.instructor,
    cdlClass: 'Class A'
  },
  {
    quote:
      'Great truck driving school with lots of time spent behind the wheel and practicing skills testing, would highly recommend to any looking to get their cdl. Instructors were very helpful. After 3 weeks I was fully confident and passed my dmv test with ease for my Class B.',
    authorName: 'Dakota R',
    date: 'March 19, 2025',
    stars: 5,
    image: assets.students,
    cdlClass: 'Class B'
  },
  {
    quote:
      "This is a great school! I was dmv ready within 5 weeks thanks to all the instructors at national! I definitely recommend if you're looking to get your class A or class B to give them a call. I had no truck driving experience prior to going there. Trust me you won't be Disappointed! Thanks to them I am now a certified Class A driver!",
    authorName: 'Daniel M',
    date: 'March 19, 2025',
    stars: 5,
    image: assets.heroPov,
    cdlClass: 'Class A'
  }
];

export const partners: PartnerCompany[] = [
  { name: 'England', url: 'https://www.crengland.net', note: 'Hires NTDS graduates' },
  { name: 'Swift Trucking', url: 'https://www.swifttruckingjobs.com', note: 'Hires NTDS graduates' },
  { name: 'Central Refrigerated Service', url: 'https://www.simn.com', note: 'Hires NTDS graduates' },
  { name: 'Gordon Trucking Co.', url: 'https://www.gordontrucking.com', note: 'Hires NTDS graduates' }
];

export const fundingOptions: FundingOption[] = [
  {
    title: 'Installment Payment Plans',
    icon: 'wallet',
    body:
      'Talk with an enrollment advisor about splitting tuition into payments before you enroll.'
  },
  {
    title: '$1,000 Starter Payment',
    icon: 'briefcase',
    body: 'Start with a clear upfront payment and review the remaining balance and schedule with the school.'
  },
  {
    title: 'Advisor-Guided Review',
    icon: 'heart',
    body: 'Bring questions about cost, timing, and paperwork so the team can help you choose the right payment path.'
  },
  {
    title: 'Agency/Voucher Paperwork',
    icon: 'file',
    body: 'If you already have agency or voucher paperwork, bring it to your consultation so an advisor can review the next steps.'
  }
];

export const studentTips: StudentTip[] = [
  {
    eyebrow: '01 / INVESTIGATE',
    title: 'Investigate the school yourself before enrolling',
    body:
      'Prior to enrolling, interview students in the program, or take a tour of the school. Ask if the school will let you sit in or observe the class or course that you are interested in before enrolling.'
  },
  {
    eyebrow: '02 / VERIFY STATUS',
    title: "Check the school's current training status",
    body:
      'Before enrolling, confirm what license, certificate, or DMV preparation the program supports. Ask how the training hours, equipment, testing preparation, and refund policies are documented.'
  },
  {
    eyebrow: '03 / AGREEMENT',
    title: 'Get a copy of an enrollment agreement',
    body:
      "An enrollment agreement should reflect information about the school's total costs for the contracted-for course of instruction, a list of the charges that are non-refundable, the name and description of the program of instruction, the total amount of classes or hours needed to complete the program, payment schedules, cancellation and refund policies, and other mandatory disclosures regarding your rights and responsibilities as a student at the institution. (Education Code section 94810.)"
  },
  {
    eyebrow: '04 / READINESS',
    title: 'Verify the school and program details',
    body:
      'Before enrolling, confirm the exact program, schedule, total cost, included training hours, and any documents you need to review.'
  },
  {
    eyebrow: '05 / ADVERTISING',
    title: 'Review all advertising carefully',
    body:
      'Make sure that the school is being truthful in what has been advertised. Watch out for hidden costs and promises that seem too good to be true.'
  },
  {
    eyebrow: '06 / AID',
    title: 'Make sure you understand the payment plan',
    body:
      'Ask for the total cost, starter payment, installment schedule, and any paperwork requirements in writing before you enroll.'
  },
  {
    eyebrow: '07 / COPIES',
    title: 'Keep a copy of your documents',
    body:
      "If you decide to enroll in a private postsecondary school, be sure to keep a copy of all contracts, policies, catalogs, disciplinary actions, attendance records, letters you've written to the school, etc. In the future, you may need to verify your payment obligations, any refunds owed to you by the school, or the educational services that you contracted to receive from the school."
  },
  {
    eyebrow: '08 / EXPERIENCE',
    title: 'Enjoy your educational experience',
    body: 'Choose a school that keeps expectations clear, answers your questions directly, and supports you through training and DMV test preparation.'
  }
];

export const whyUs = [
  'Class A & Class B Training',
  'Installment Payment Options',
  '$1,000 Starter Payment',
  'Se Habla Espanol',
  'Agency Paperwork Reviewed',
  'Day / Evening / Weekend Classes',
  'Advisor-Guided Payment Review',
  'DMV Test Preparation',
  'Job Placement Assistance'
];

export const journeySteps = [
  ['Free Consultation', 'We talk through goals and payment options.'],
  ['Enrollment', '$1,000 starter payment. Installment plans available.'],
  ['Classroom Training', 'FMCSR, safety, and pre-trip instruction.'],
  ['Behind-the-Wheel', 'Practice in our yard and on Bay Area roads.'],
  ['DMV Test + License', 'Instructors prep you for the commercial driver’s license exam.'],
  ['Job Placement Assistance', 'Resumes go out to Swift, Gordon, England, Central.']
] as const;

export const reasons = [
  'You want a practical career path with hands-on training.',
  'You are comfortable learning safety rules and following procedure.',
  'You like work that combines focus, responsibility, and movement.',
  'You want skills that can transfer across local, regional, and fleet jobs.',
  'You are ready to practice until the pre-trip and road skills feel natural.',
  'You want instructors who can explain the DMV test step by step.',
  'You need training that can fit around work and family schedules.',
  'You want a license that opens more than one kind of driving opportunity.',
  "You understand that safe drivers are essential to the country's supply chain.",
  'You want a school that keeps helping after the license conversation starts.'
];
