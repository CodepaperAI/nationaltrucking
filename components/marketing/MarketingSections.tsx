import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  Languages,
  MapPin,
  Phone,
  PlayCircle,
  ShieldCheck,
  Truck,
  WalletCards
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { Marquee } from '@/components/ui/Marquee';
import { NumberCounter } from '@/components/ui/NumberCounter';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionKicker } from '@/components/ui/SectionKicker';
import { assets, fundingOptions, homepageReels, journeySteps, partners, programs, reasons, site, studentTips, testimonials, whyUs } from '@/content/site';
import type { AssetSlot, FundingOption } from '@/content/types';
import { LeadForm } from './LeadForm';
import { TestimonialCarousel } from './TestimonialCarousel';
import { EligibilityCheck } from './EligibilityCheck';
import { ImageDepthStack } from './ImageDepthStack';

const iconMap = {
  loan: WalletCards,
  briefcase: BriefcaseBusiness,
  heart: HeartHandshake,
  file: FileCheck2,
  shield: ShieldCheck
} satisfies Record<FundingOption['icon'], typeof ShieldCheck>;

const imageStyle = (asset: AssetSlot): CSSProperties | undefined => (asset.position ? { objectPosition: asset.position } : undefined);
const isPanorama = (asset: AssetSlot) => asset.width / asset.height >= 2.4;
const photoAspectClass = (asset: AssetSlot, fallback = 'aspect-[16/10]') => (isPanorama(asset) ? 'aspect-[1858/563]' : fallback);

export function StatRail({ compact = false }: { compact?: boolean }) {
  const stats = [
    ['1,200+', '5-Star reviews', 1200, '+', ''],
    ['115', 'Hours behind the wheel', 115, '', ''],
    ['45', 'Hours classroom instruction', 45, '', ''],
    ['4.5', 'Weeks full-time', 4.5, '', ''],
    ['$1,000', 'Down to get started', 1000, '', '$'],
    ['0', 'Credit check required', 0, '', '']
  ] as const;
  const shown = compact ? stats.slice(0, 4) : stats;

  return (
    <section className="bg-asphalt-900 py-8 text-chrome">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-chrome/10 lg:grid-cols-4">
          {shown.slice(0, 4).map(([, label, value, suffix, prefix]) => (
            <div key={label} className="bg-asphalt-900 p-5 sm:p-7">
              <NumberCounter
                value={value}
                suffix={suffix}
                prefix={prefix}
                decimals={value === 4.5 ? 1 : 0}
                className="font-display text-6xl uppercase leading-none tracking-wide text-amber-400"
              />
              <p className="mt-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-steel-300">{label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TrainingPathRail() {
  const paths = [
    [Truck, 'Class A CDL', 'Tractor-trailer training with 115 behind-the-wheel hours.', '/programs/class-a'],
    [GraduationCap, 'Class B + Passenger', 'Bus, local delivery, and passenger endorsement preparation.', '/programs/class-b'],
    [WalletCards, 'Funding Help', '$1,000 down options, vouchers, and payment guidance.', '/financial-aid'],
    [BriefcaseBusiness, 'Job Placement', 'Resume support and hiring connections after training.', '/job-placement']
  ] as const;

  return (
    <section className="relative overflow-hidden bg-road text-chrome">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(245,165,36,0.14),transparent_28rem)]" aria-hidden="true" />
      <Container className="relative">
        <div className="grid overflow-hidden border-x border-chrome/10 bg-chrome/10 lg:grid-cols-4">
          {paths.map(([Icon, title, body, href], index) => (
            <ScrollReveal key={title} delay={index * 0.08} y={34} className="min-h-full">
              <Link
                href={href}
                className="group focus-ring relative isolate flex min-h-[260px] flex-col overflow-hidden bg-road p-6 transition duration-300 ease-out hover:-translate-y-1 hover:bg-[#111923]"
              >
                <span
                  className="pointer-events-none absolute -bottom-8 -right-2 z-[-1] font-display text-[9rem] leading-none text-chrome/[0.045] transition duration-500 group-hover:translate-x-2 group-hover:text-amber-400/[0.08]"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="mb-10 inline-flex size-14 items-center justify-center rounded-sm border border-chrome/10 bg-chrome/5 text-amber-400 transition duration-300 group-hover:-translate-y-1 group-hover:bg-amber-400 group-hover:text-asphalt-900">
                  <Icon className="size-7" />
                </span>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400">0{index + 1} / training path</p>
                <h2 className="mt-3 font-display text-4xl uppercase leading-none tracking-wide">{title}</h2>
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-steel-300">{body}</p>
                <span className="mt-auto pt-8 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-chrome transition group-hover:text-amber-400">
                  Open path
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TrainingReelsSection() {
  return (
    <section className="overflow-hidden bg-road py-24 text-chrome">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <ScrollReveal className="max-w-xl">
            <SectionKicker dark>01 / training in action</SectionKicker>
            <h2 className="mt-4 font-display text-6xl uppercase leading-none tracking-wide md:text-8xl">
              See the yard before you arrive.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-steel-200">
              Short reel previews help future students picture the first day: the trucks, the instruction, and the confidence that builds with each practice run.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-steel-300">
              <span className="rounded-sm border border-chrome/15 px-3 py-2">Real training clips</span>
              <span className="rounded-sm border border-chrome/15 px-3 py-2">Muted preview</span>
              <span className="rounded-sm border border-chrome/15 px-3 py-2">Tap to watch</span>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {homepageReels.map((reel, index) => (
              <ScrollReveal key={reel.id} delay={0.12 + index * 0.12} y={44} className={index === 1 ? 'lg:mt-12' : undefined}>
                <article className="group rounded-sm border border-chrome/12 bg-chrome/5 p-3 shadow-hard backdrop-blur transition duration-300 ease-out hover:-translate-y-1 hover:border-amber-400/45 hover:bg-chrome/[0.075]">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-sm bg-asphalt-900">
                    <video
                      className="size-full object-cover transition duration-700 group-hover:scale-[1.025]"
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      poster={reel.poster.src}
                      aria-label={reel.title}
                    >
                      <source src={reel.src} type="video/mp4" />
                    </video>
                    <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-asphalt-900/82 to-transparent p-4">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-amber-300">{reel.durationLabel}</span>
                      <PlayCircle className="size-7 text-chrome drop-shadow transition duration-300 group-hover:scale-110 group-hover:text-amber-300" />
                    </div>
                  </div>
                  <div className="px-2 pb-2 pt-5">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400">{reel.eyebrow}</p>
                    <h3 className="mt-3 font-display text-4xl uppercase leading-none tracking-wide text-chrome">{reel.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-steel-300">{reel.body}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PillarGrid() {
  const pillars = [
    [assets.yard, 'Get Your Commercial License', 'Class A & Class B programs built to pass on the first try.', 'Explore Programs', '/programs'],
    [assets.placement, "We'll Help You Get Hired", 'We place graduates with Swift, England, Gordon, Central Refrigerated, and more.', 'Job Placement', '/job-placement'],
    [assets.sideMirror, 'Free Consultation', 'Talk to an enrollment advisor today. Day, evening, and weekend classes.', 'Contact Us', '/contact']
  ] as const;

  return (
    <section className="bg-chrome py-20">
      <Container>
        <div className="mb-10 max-w-2xl">
          <SectionKicker>00 / fast path</SectionKicker>
          <h2 className="mt-3 font-display text-6xl uppercase leading-none tracking-wide text-asphalt-900 md:text-8xl">Choose the lane.</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.925fr_0.925fr]">
          {pillars.map(([image, title, copy, cta, href], index) => (
            <Link
              href={href}
              key={title}
              className="group focus-ring overflow-hidden rounded-sm border border-asphalt-900/10 bg-steel-100 shadow-hard transition duration-300 hover:-translate-y-1"
            >
              <div className={`relative overflow-hidden bg-asphalt-900 ${photoAspectClass(image)}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={index === 0 ? '(min-width: 1024px) 45vw, 100vw' : '(min-width: 1024px) 28vw, 100vw'}
                  style={imageStyle(image)}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-asphalt-900/30 via-transparent to-transparent" />
              </div>
              <div className="flex min-h-[210px] flex-col p-6 text-asphalt-900">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-amber-600">{cta}</p>
                <h3 className="mt-3 font-display text-5xl uppercase leading-none tracking-wide">{title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-asphalt-700">{copy}</p>
                <span className="mt-auto pt-6 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-asphalt-500">Open lane</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function WhyUsRibbon() {
  const icons = [Truck, WalletCards, ShieldCheck, BadgeCheck, Languages, HeartHandshake, CalendarDays, HandCoins, FileCheck2, BriefcaseBusiness];

  return (
    <section className="border-y border-asphalt-900/10 bg-steel-100 py-8">
      <Marquee>
        {whyUs.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div key={item} className="flex min-w-max items-center gap-3 rounded-sm border border-asphalt-900/10 bg-chrome px-5 py-4 shadow-sm">
              <Icon className="size-5 text-amber-600" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-asphalt-800">{item}</span>
            </div>
          );
        })}
      </Marquee>
    </section>
  );
}

export function ProgramPreview() {
  const beats = [
    [assets.preTrip, '115 hours behind the wheel.', 'Real trucks. Real yards. Bay Area roads.'],
    [assets.classroom, '45 hours of classroom.', 'Federal Motor Carrier Safety Rules, defensive driving, pre-trip inspection.'],
    [assets.graduate, 'Full-time graduates finish in about 4.5 weeks.', "Part-time options if life doesn't work that way."]
  ] as const;

  return (
    <section className="bg-chrome py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28">
            <ImageDepthStack
              id="program-depth-stack"
              background={assets.yard}
              kicker="Yard practice / cone work / pre-trip"
              className="aspect-[1858/563] min-h-0"
            />
          </div>
          <div className="flex flex-col justify-center">
            <SectionKicker>01 / our training</SectionKicker>
            <h2 className="mt-4 max-w-2xl font-display text-6xl uppercase leading-none tracking-wide text-asphalt-900 md:text-8xl">
              From your first cone to your CDL card.
            </h2>
            <div className="mt-10 grid gap-4">
              {beats.map(([, title, copy], index) => (
                <article key={title} className="rounded-sm border border-asphalt-900/10 bg-steel-100 p-6">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-amber-600">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-4xl uppercase leading-none tracking-wide text-asphalt-900">{title}</h3>
                  <p className="mt-3 text-asphalt-700">{copy}</p>
                </article>
              ))}
            </div>
            <Button href="/programs" className="mt-8 w-fit" eventLabel="program_preview">
              See the program
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-steel-100 py-24">
      <Container>
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionKicker>02 / what grads say</SectionKicker>
            <h2 className="mt-4 max-w-3xl font-display text-6xl uppercase leading-none tracking-wide text-asphalt-900 md:text-8xl">
              1,200+ five-star reviews and counting.
            </h2>
          </div>
          <p className="max-w-md text-asphalt-700">Real graduate words, rebuilt into a tighter carousel instead of a wall of text.</p>
        </div>
        <TestimonialCarousel testimonials={testimonials} />
      </Container>
    </section>
  );
}

export function PartnerMarquee() {
  return (
    <section className="bg-asphalt-900 py-16 text-chrome">
      <Container>
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionKicker dark>03 / where grads work</SectionKicker>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none tracking-wide md:text-7xl">Top fleets recruit straight out of our yard.</h2>
          </div>
        </div>
      </Container>
      <Marquee>
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.url}
            className="flex min-w-[280px] items-center justify-between gap-6 rounded-sm border border-chrome/10 bg-chrome/5 px-6 py-5 text-chrome transition hover:bg-chrome hover:text-asphalt-900"
          >
            <span className="font-display text-4xl uppercase tracking-wide">{partner.name}</span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-amber-400">{partner.note}</span>
          </a>
        ))}
      </Marquee>
    </section>
  );
}

export function Accreditation() {
  return (
    <section className="bg-road py-16 text-chrome">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex gap-4">
            <Image src={assets.bppeSeal.src} alt={assets.bppeSeal.alt} width={150} height={150} className="h-28 w-28 rounded-sm bg-chrome object-contain p-2 sm:h-36 sm:w-36" />
            <Image src={assets.dcaEmblem.src} alt={assets.dcaEmblem.alt} width={150} height={150} className="h-28 w-28 rounded-sm bg-chrome object-contain p-2 sm:h-36 sm:w-36" />
          </div>
          <div>
            <SectionKicker dark>Accreditation</SectionKicker>
            <p className="mt-4 max-w-3xl text-2xl font-semibold leading-snug text-steel-100">
              Approved by the BPPVE (Bureau for Private Postsecondary and Vocational Education). Approved and Accredited by the California Department of Consumer Affairs.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function LeadCTA() {
  return (
    <section className="relative overflow-hidden bg-asphalt-900 py-24 text-chrome">
      <Image src={assets.heroRoadSunset.src} alt={assets.heroRoadSunset.alt} fill sizes="100vw" style={imageStyle(assets.heroRoadSunset)} className="object-cover opacity-42" />
      <div className="absolute inset-0 bg-gradient-to-r from-asphalt-900 via-asphalt-900/88 to-asphalt-900/55" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_0.95fr] lg:items-center">
          <div>
            <SectionKicker dark>Free consultation</SectionKicker>
            <h2 className="mt-4 font-display text-6xl uppercase leading-none tracking-wide md:text-8xl">Free 15-minute consultation.</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-steel-200">
              Find out about courses, financial aid, and job placement. Call {site.phone} or fill in the form.
            </p>
          </div>
          <div className="rounded-sm border border-chrome/15 bg-chrome/92 p-5 text-asphalt-900 shadow-hard backdrop-blur lg:p-7">
            <LeadForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PageHero({
  kicker,
  title,
  sub,
  image = assets.heroRoadSunset
}: {
  kicker: string;
  title: string;
  sub: string;
  image?: AssetSlot;
}) {
  return (
    <section className="relative isolate min-h-[70dvh] overflow-hidden bg-asphalt-900 text-chrome">
      <Image src={image.src} alt={image.alt} fill priority sizes="100vw" style={imageStyle(image)} className="object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-r from-asphalt-900 via-asphalt-900/75 to-asphalt-900/20" />
      <Container className="relative flex min-h-[70dvh] flex-col justify-center py-20">
        <SectionKicker dark>{kicker}</SectionKicker>
        <h1 className="mt-4 max-w-4xl font-display text-[3.25rem] uppercase leading-[0.92] tracking-wide sm:text-6xl md:text-7xl lg:text-[7.2rem]">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-200 md:text-xl">{sub}</p>
      </Container>
    </section>
  );
}

export function AboutPromise() {
  return (
    <section className="bg-chrome py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <ImageDepthStack
            id="about-depth-stack"
            background={assets.sideMirror}
            kicker="Instructor-led / field ready"
            className="aspect-[1858/563] min-h-0"
          />
          <div>
            <SectionKicker>01 / promise</SectionKicker>
            <h2 className="mt-4 font-display text-6xl uppercase leading-none tracking-wide text-asphalt-900 md:text-8xl">Tailored for entry-level and advanced drivers.</h2>
            <p className="mt-6 text-lg leading-relaxed text-asphalt-700">
              We teach the defensive driving techniques required to pass the commercial driver&apos;s license examination. Emphasis is on safety and a thorough understanding of Federal Motor Carrier Safety Rules and regulations for heavy-duty tractor/trailer equipment.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function InstructorGrid() {
  const instructors = [
    ['Lucky', assets.instructor],
    ['Toki', assets.yard],
    ['JB', assets.students]
  ] as const;
  return (
    <section className="bg-steel-100 py-24">
      <Container>
        <SectionKicker>02 / instructors</SectionKicker>
        <h2 className="mt-4 font-display text-6xl uppercase leading-none tracking-wide text-asphalt-900 md:text-8xl">Names grads remember.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {instructors.map(([name, image]) => (
            <article key={name} className="group overflow-hidden rounded-sm border border-asphalt-900/10 bg-chrome shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-hard">
              <ImageFrame asset={image} className={`min-h-0 ${photoAspectClass(image, 'aspect-[4/3]')}`} />
              <div className="p-6">
                <h3 className="font-display text-5xl uppercase tracking-wide text-asphalt-900">{name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-asphalt-700">
                  Hands-on CDL coaching, pre-trip practice, and road-test preparation from the yard to the DMV.
                </p>
                <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-amber-600">CDL instructor</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function VisitCard() {
  return (
    <section className="bg-chrome py-24">
      <Container>
        <div className="grid overflow-hidden rounded-sm border border-asphalt-900/10 bg-steel-100 shadow-hard lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-8 lg:p-12">
            <SectionKicker>Visit us</SectionKicker>
            <h2 className="mt-4 font-display text-6xl uppercase leading-none tracking-wide text-asphalt-900">Schedule a yard tour.</h2>
            <p className="mt-5 text-asphalt-700">{site.address.label}. {site.hours}</p>
            <Button href="/contact" className="mt-8" eventLabel="visit_card">
              Schedule a tour
            </Button>
          </div>
          <ImageFrame asset={assets.map} className="min-h-[440px]" imageClassName="object-contain p-4" />
        </div>
      </Container>
    </section>
  );
}

export function ClassPicker() {
  return (
    <section className="bg-chrome py-24">
      <Container>
        <div className="grid gap-5 lg:grid-cols-2">
          {programs.map((program) => (
            <Link key={program.slug} href={program.href} className="group focus-ring overflow-hidden rounded-sm border border-asphalt-900/10 bg-steel-100 shadow-hard transition duration-300 hover:-translate-y-1">
              <div className={`relative overflow-hidden bg-asphalt-900 ${photoAspectClass(program.image, 'aspect-[16/9]')}`}>
                <Image
                  src={program.image.src}
                  alt={program.image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  style={imageStyle(program.image)}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-asphalt-900/36 via-transparent to-transparent" />
              </div>
              <div className="p-7 text-asphalt-900">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-amber-600">{program.kicker}</p>
                <h2 className="mt-3 font-display text-7xl uppercase leading-none tracking-wide">{program.title}</h2>
                <p className="mt-4 max-w-md text-asphalt-700">{program.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CurriculumSplit() {
  return (
    <section className="bg-asphalt-900 py-24 text-chrome">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionKicker dark>Curriculum</SectionKicker>
            <h2 className="mt-4 font-display text-6xl uppercase leading-none tracking-wide md:text-8xl">Real wheel time. Real rules.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['115', 'Behind-the-wheel training', Truck],
              ['45', 'Classroom instruction', ClipboardCheck]
            ].map(([number, label, Icon]) => (
              <div key={label as string} className="rounded-sm border border-chrome/10 bg-chrome/5 p-7">
                <Icon className="mb-5 size-9 text-amber-400" />
                <NumberCounter value={Number(number)} className="font-display text-8xl uppercase leading-none tracking-wide text-amber-400" />
                <p className="mt-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-steel-300">{label as string}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {['Federal Motor Carrier Safety Rules', 'Defensive driving techniques', 'Heavy-duty tractor/trailer operation'].map((item) => (
            <div key={item} className="rounded-sm border border-chrome/10 p-5 text-steel-200">{item}</div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function JourneyTimeline() {
  return (
    <section className="overflow-hidden bg-steel-100 py-24">
      <Container>
        <SectionKicker>CDL journey</SectionKicker>
        <h2 className="mt-4 font-display text-6xl uppercase leading-none tracking-wide text-asphalt-900 md:text-8xl">Six stops to the license.</h2>
        <div className="relative mt-12">
          <Image src={assets.routeLine.src} alt={assets.routeLine.alt} width={assets.routeLine.width} height={assets.routeLine.height} className="absolute left-0 top-10 hidden w-full opacity-80 lg:block" aria-hidden="true" />
          <div className="grid gap-4 lg:grid-cols-6">
            {journeySteps.map(([title, body], index) => (
              <article key={title} className="relative rounded-sm border border-asphalt-900/10 bg-chrome p-5 shadow-sm">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-amber-500 font-mono text-xs font-bold text-asphalt-900">{index + 1}</span>
                <h3 className="mt-5 font-display text-3xl uppercase leading-none tracking-wide text-asphalt-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-asphalt-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ScheduleGrid() {
  return (
    <section className="bg-chrome py-24">
      <Container>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['Full-time', 'Finish in about 4.5 weeks'],
            ['Part-time', 'Fits around work and family'],
            ['Day, Evening & Weekend Classes', 'Pick what works']
          ].map(([title, copy]) => (
            <article key={title} className="rounded-sm border border-asphalt-900/10 bg-steel-100 p-7">
              <CalendarDays className="size-8 text-amber-600" />
              <h3 className="mt-5 font-display text-4xl uppercase leading-none tracking-wide text-asphalt-900">{title}</h3>
              <p className="mt-3 text-asphalt-700">{copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TenReasons() {
  return (
    <section className="bg-asphalt-900 py-24 text-chrome">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionKicker dark>Is truck driving for you?</SectionKicker>
            <h2 className="mt-4 font-display text-6xl uppercase leading-none tracking-wide md:text-8xl">You might be a driver at heart.</h2>
            <p className="mt-5 text-steel-300">
              There&apos;s no profile of a typical truck driver. Career-changers. First-jobbers. Folks restarting. The willingness to work hard and abide by the rules is what matters.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <article key={reason} className="rounded-sm border border-chrome/10 bg-chrome/5 p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400">{String(index + 1).padStart(2, '0')}</p>
                <p className="mt-3 text-lg font-semibold leading-snug text-chrome">{reason}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PromiseCards() {
  return (
    <section className="bg-chrome py-24">
      <Container>
        <div className="grid gap-5 lg:grid-cols-2">
          {[
            ['We help you obtain tuition financial aid and financing.', assets.heroRoadSunset],
            ['We follow through with job placement.', assets.placement]
          ].map(([title, image]) => (
            <article key={title as string} className="relative min-h-[440px] overflow-hidden rounded-sm bg-asphalt-900 shadow-hard">
              <Image
                src={(image as AssetSlot).src}
                alt={(image as AssetSlot).alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                style={imageStyle(image as AssetSlot)}
                className="object-cover opacity-88"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-asphalt-900/88 via-asphalt-900/22 to-asphalt-900/5" />
              <h2 className="absolute bottom-0 max-w-xl p-7 font-display text-6xl uppercase leading-none tracking-wide text-chrome drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]">
                {title as string}
              </h2>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FundingGrid({ title = 'Funding sources' }: { title?: string }) {
  return (
    <section className="bg-steel-100 py-24">
      <Container>
        <SectionKicker>Financial aid</SectionKicker>
        <h2 className="mt-4 font-display text-6xl uppercase leading-none tracking-wide text-asphalt-900 md:text-8xl">{title}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {fundingOptions.map((option) => {
            const Icon = iconMap[option.icon];
            return (
              <article key={option.title} className="rounded-sm border border-asphalt-900/10 bg-chrome p-7 shadow-sm">
                <Icon className="size-9 text-amber-600" />
                <h3 className="mt-5 font-display text-4xl uppercase leading-none tracking-wide text-asphalt-900">{option.title}</h3>
                <p className="mt-3 leading-relaxed text-asphalt-700">{option.body}</p>
              </article>
            );
          })}
        </div>
        <p className="mt-8 max-w-2xl text-lg font-semibold text-asphalt-800">
          We&apos;ve assisted hundreds of new students through this process. Call us for your free consultation.
        </p>
      </Container>
    </section>
  );
}

export function PartnerGrid() {
  return (
    <section className="bg-asphalt-900 py-24 text-chrome">
      <Container>
        <SectionKicker dark>Partner companies</SectionKicker>
        <h2 className="mt-4 font-display text-6xl uppercase leading-none tracking-wide md:text-8xl">Where graduates work.</h2>
        <p className="mt-5 max-w-2xl text-steel-300">These companies seek our students out, because of our school&apos;s reputation for producing elite, safe truck drivers.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <a key={partner.name} href={partner.url} className="rounded-sm border border-chrome/10 bg-chrome/5 p-6 transition hover:-translate-y-1 hover:bg-chrome hover:text-asphalt-900">
              <p className="font-display text-4xl uppercase leading-none tracking-wide">{partner.name}</p>
              <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-amber-400">Hires our graduates</p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function PaymentLadder() {
  const steps = [
    ['$1,000 down', 'Get started today'],
    ['No credit check', 'For in-house payment plans'],
    ['Loans available', 'Independent lender, 24-month installments'],
    ['Government funding', 'WIA, EDD, DOR, SSA, Workers Comp']
  ] as const;
  return (
    <section className="bg-chrome py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ImageDepthStack
            id="financial-depth-stack"
            background={assets.heroPov}
            kicker="Funding / vouchers / payment plans"
            className="aspect-[1858/563] min-h-0"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {steps.map(([title, copy], index) => (
              <article key={title} className="relative rounded-sm border border-asphalt-900/10 bg-steel-100 p-7 lg:mt-[calc(var(--step)*1.2rem)]" style={{ '--step': index } as CSSProperties}>
                <HandCoins className="size-8 text-amber-600" />
                <h3 className="mt-5 font-display text-4xl uppercase leading-none tracking-wide text-asphalt-900">{title}</h3>
                <p className="mt-3 text-asphalt-700">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ContactRail() {
  const items = [
    [Phone, 'Call', site.phone, 'Day, evening, weekend availability.'],
    [ClipboardCheck, 'Email', site.email, 'Send your program and funding questions.'],
    [MapPin, 'Visit', site.address.label, site.address.note]
  ] as const;
  return (
    <section className="bg-chrome py-20">
      <Container>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map(([Icon, title, value, copy]) => (
            <article key={title} className="rounded-sm border border-asphalt-900/10 bg-steel-100 p-7">
              <Icon className="size-8 text-amber-600" />
              <h2 className="mt-5 font-display text-4xl uppercase tracking-wide text-asphalt-900">{title}</h2>
              <p className="mt-3 text-lg font-bold text-asphalt-900">{value}</p>
              <p className="mt-2 text-sm text-asphalt-700">{copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FullLeadFormSection() {
  return (
    <section className="bg-steel-100 py-24">
      <Container>
        <div className="mx-auto max-w-3xl rounded-sm border border-asphalt-900/10 bg-chrome p-5 shadow-hard lg:p-8">
          <LeadForm variant="expanded" />
        </div>
      </Container>
    </section>
  );
}

export function LocationMap() {
  return (
    <section className="bg-chrome py-20">
      <Container>
        <div className="relative min-h-[520px] overflow-hidden rounded-sm border border-asphalt-900/10 bg-asphalt-900 shadow-hard">
          <Image src={assets.map.src} alt={assets.map.alt} fill sizes="100vw" className="object-contain p-4" />
          <svg
            className="absolute left-1/2 top-1/2 w-[86%] -translate-x-1/2 -translate-y-1/2 opacity-90"
            viewBox="0 0 1200 180"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="route-draw"
              d="M30 122 C184 38 333 34 470 112 C624 199 750 119 859 68 C978 12 1080 47 1170 122"
              stroke="#F5A524"
              strokeWidth="9"
              strokeLinecap="round"
              strokeDasharray="24 24"
            />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-asphalt-900/30 via-transparent to-transparent" />
        </div>
      </Container>
    </section>
  );
}

export function ServiceArea() {
  const cities = ['Hayward', 'San Lorenzo', 'Castro Valley', 'San Leandro', 'Oakland', 'Fremont', 'Union City', 'Newark', 'Alameda', 'San Francisco', 'San Jose'];
  return (
    <section className="bg-steel-100 py-16">
      <Container>
        <SectionKicker>Service area</SectionKicker>
        <div className="mt-5 flex flex-wrap gap-3">
          {cities.map((city) => (
            <span key={city} className="rounded-sm border border-asphalt-900/10 bg-chrome px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-asphalt-700">
              {city}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TipsList() {
  return (
    <section className="bg-chrome py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-sm border border-asphalt-900/10 bg-steel-100 p-5">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-asphalt-700">Contents</p>
              <div className="mt-4 grid gap-2">
                {studentTips.map((tip, index) => (
                  <a key={tip.eyebrow} href={`#tip-${index + 1}`} className="text-sm font-semibold text-asphalt-700 hover:text-amber-600">
                    {tip.eyebrow}
                  </a>
                ))}
              </div>
            </div>
          </aside>
          <div className="grid gap-5">
            {studentTips.map((tip, index) => (
              <article id={`tip-${index + 1}`} key={tip.eyebrow} className="scroll-mt-28 rounded-sm border border-asphalt-900/10 bg-steel-100 p-6 lg:p-8">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-amber-600">{tip.eyebrow}</p>
                <h2 className="mt-3 font-display text-4xl uppercase leading-none tracking-wide text-asphalt-900">{tip.title}</h2>
                <p className="mt-4 leading-relaxed text-asphalt-700">{tip.body}</p>
              </article>
            ))}
            <blockquote className="rounded-sm bg-asphalt-900 p-7 text-chrome">
              <p className="font-display text-5xl uppercase leading-none tracking-wide">National Truck Driving School is accredited from a U.S. Department of Education.</p>
              <a href="https://www.ed.gov/admins/finaid/accred/index.html" className="mt-5 inline-block font-mono text-xs font-bold uppercase tracking-[0.16em] text-amber-400">
                U.S. Department of Education
              </a>
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FinancialAidInteractive() {
  return (
    <section className="bg-asphalt-900 py-24 text-chrome">
      <Container>
        <SectionKicker dark>Eligibility</SectionKicker>
        <h2 className="mt-4 max-w-4xl font-display text-6xl uppercase leading-none tracking-wide md:text-8xl">Find the likely funding lane.</h2>
        <div className="mt-10">
          <EligibilityCheck />
        </div>
      </Container>
    </section>
  );
}

export function ProgramDeepDive({ kind }: { kind: 'class-a' | 'class-b' }) {
  const program = programs.find((item) => item.slug === kind)!;
  return (
    <section className="bg-chrome py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <ImageFrame asset={program.image} className={`min-h-0 w-full ${photoAspectClass(program.image)}`} />
          <div>
            <SectionKicker>{program.kicker}</SectionKicker>
            <h2 className="mt-4 font-display text-6xl uppercase leading-none tracking-wide text-asphalt-900 md:text-8xl">{program.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-asphalt-700">{program.summary}</p>
            <div className="mt-8 grid gap-3">
              {program.facts.map((fact) => (
                <div key={fact} className="flex items-center gap-3 rounded-sm border border-asphalt-900/10 bg-steel-100 px-4 py-3 font-semibold text-asphalt-800">
                  <CheckCircle2 className="size-5 text-amber-600" />
                  {fact}
                </div>
              ))}
            </div>
            <Button href="/contact" className="mt-8" eventLabel={`${kind}_consultation`}>
              Book free consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function SimpleLegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="bg-chrome py-24">
      <Container className="max-w-4xl">
        <SectionKicker>National Truck Driving School</SectionKicker>
        <h1 className="mt-4 font-display text-6xl uppercase leading-none tracking-wide text-asphalt-900 md:text-8xl">{title}</h1>
        <div className="prose prose-lg mt-8 max-w-none text-asphalt-700">{children}</div>
      </Container>
    </section>
  );
}

export function SiteMapList() {
  const links = [
    ['Home', '/'],
    ['About', '/about'],
    ['Programs', '/programs'],
    ['Class A CDL', '/programs/class-a'],
    ['Class B CDL', '/programs/class-b'],
    ['Job Placement', '/job-placement'],
    ['Financial Aid', '/financial-aid'],
    ['Student Tips', '/student-tips'],
    ['Contact', '/contact'],
    ['Spanish Home', '/es'],
    ['Privacy Policy', '/privacy-policy'],
    ['Accessibility Statement', '/accessibility-statement']
  ] as const;
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      {links.map(([label, href]) => (
        <Link key={href} href={href} className="rounded-sm border border-asphalt-900/10 bg-steel-100 px-4 py-3 font-semibold text-asphalt-800 hover:bg-amber-500">
          {label}
        </Link>
      ))}
    </div>
  );
}
