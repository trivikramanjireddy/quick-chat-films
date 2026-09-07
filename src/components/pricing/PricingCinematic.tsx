import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Zap,
  Film,
  Sparkles,
  Scissors,
  MessageSquare,
  Camera,
  Wand2,
  Send,
  Wallet,
  PackagePlus,
  CreditCard,
  MapPin,
  Ban,
  Tags,
  Eye,
  Clock,
  FolderLock,
} from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { Counter, LetterReveal, Rise, EASE } from './animations';
import OfferCards, { Offer } from './OfferCards';
import logo from '@/assets/header-logo.png';
import mobileImg from '@/assets/pricing/mobile.png';
import cameraImg from '@/assets/pricing/camera.png';
import droneImg from '@/assets/pricing/drone.png';
import notesImg from '@/assets/pricing/notes.png';

const WHATSAPP_LINK = 'https://wa.me/919493668321';
const wa = (msg: string) => `${WHATSAPP_LINK}?text=${encodeURIComponent(msg)}`;

const Cta = ({ label, message }: { label: string; message: string }) => (
  <motion.a
    href={wa(message)}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-hero mt-10 inline-flex"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    transition={{ duration: 0.4, ease: EASE }}
  >
    <WhatsAppIcon className="w-5 h-5" />
    {label}
  </motion.a>
);

/* ---------------- SECTION 1 — HERO ---------------- */
const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const lensRotate = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const words = ['Brands', 'Businesses', 'Creators', 'Events'];

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden grain-overlay"
    >
      {/* Rotating camera lens */}
      <motion.div
        style={{ rotate: lensRotate }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute inset-0 rounded-full border border-primary/15" />
        <div className="absolute inset-[8%] rounded-full border border-primary/10" />
        <div className="absolute inset-[20%] rounded-full border border-white/5" />
        <div className="absolute inset-[32%] rounded-full border border-primary/20 [mask-image:conic-gradient(from_0deg,transparent_0deg,black_60deg,transparent_140deg)]" />
        <div className="absolute inset-[46%] rounded-full bg-primary/10 blur-3xl" />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="relative z-10 px-6 text-center">
        <motion.img
          src={logo}
          alt="CineQuick"
          className="mx-auto mb-10 h-14 w-auto md:h-20"
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, ease: EASE }}
        />
        <motion.p
          className="mb-4 text-sm uppercase tracking-[0.35em] text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.5 }}
        >
          Cinematic Videos For
        </motion.p>
        <h1 className="font-display text-6xl leading-[0.95] sm:text-7xl md:text-8xl">
          {words.map((w, i) => (
            <span key={w} className="block overflow-hidden">
              <motion.span
                className={i % 2 ? 'inline-block text-gradient-orange' : 'inline-block'}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.8 + i * 0.16 }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-2">
          <div className="h-2 w-1 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

/* ---------------- Shared package section ---------------- */
interface PackageProps {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  price: number;
  offers: Offer[];
  ctaLabel: string;
  ctaMessage: string;
  visual: (p: { progress: MotionValue<number> }) => React.ReactNode;
  brighten?: boolean;
}

const PackageSection = ({
  eyebrow,
  title,
  price,
  offers,
  ctaLabel,
  ctaMessage,
  visual,
  brighten,
}: PackageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0, brighten ? 0.22 : 0.12, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-36">
      <motion.div
        style={{ opacity: glow }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,hsl(var(--primary)),transparent_62%)]"
      />
      <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <Rise>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">{eyebrow}</p>
          </Rise>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            <LetterReveal text={title} />
          </h2>
          <Rise delay={0.15}>
            <p className="mt-6 text-muted-foreground">Starts From</p>
            <p className="font-display text-6xl text-gradient-orange md:text-7xl">
              <Counter to={price} />
              <span className="text-3xl">/-</span>
            </p>
            <p className="text-sm text-muted-foreground">For One Short Video</p>
          </Rise>

          <Rise delay={0.25}>
            <p className="mt-10 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Bulk Offer
            </p>
          </Rise>
          <OfferCards offers={offers} />
          <Rise delay={0.1}>
            <p className="mt-4 text-xs italic text-muted-foreground">
              Offer Price | Limited Shoots
            </p>
            <Cta label={ctaLabel} message={ctaMessage} />
          </Rise>
        </div>

        <div className="order-1 lg:order-2">{visual({ progress: scrollYProgress })}</div>
      </div>
    </section>
  );
};

/* ---------------- SECTION 5 — Why Choose ---------------- */
const stats = [
  { icon: Zap, value: 48, suffix: 'H', label: 'Fast Delivery' },
  { icon: Film, value: 4, suffix: 'K', label: 'Cinematic Quality' },
  { icon: Sparkles, value: 100, suffix: '%', label: 'Creative Direction' },
  { icon: Scissors, value: 500, suffix: '+', label: 'Professional Editing' },
];

const WhyChoose = () => (
  <section className="relative py-24 md:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <Rise className="text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">Why CineQuick</p>
        <h2 className="font-display text-4xl md:text-6xl">Built For Brands That Move Fast</h2>
      </Rise>
      <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {stats.map((s, i) => (
          <Rise key={s.label} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl transition-colors duration-500 hover:border-primary/50">
              <s.icon className="mx-auto mb-4 h-7 w-7 text-primary" />
              <p className="font-display text-4xl md:text-5xl">
                <Counter to={s.value} prefix="" />
                <span className="text-primary">{s.suffix}</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          </Rise>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- SECTION 6 — Booking Process ---------------- */
const steps = [
  { icon: MessageSquare, title: 'Consultation', text: 'We understand your brand, goals and references.' },
  { icon: Camera, title: 'Shoot', text: 'Cinematic capture with the right gear and crew.' },
  { icon: Wand2, title: 'Edit', text: 'Colour, sound and pacing crafted frame by frame.' },
  { icon: Send, title: 'Delivery', text: 'Final files delivered ready for every platform.' },
];

const Process = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <Rise className="text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">How It Works</p>
          <h2 className="font-display text-4xl md:text-6xl">Booking Process</h2>
        </Rise>

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl pl-10">
          <div className="absolute left-3 top-0 h-full w-px bg-white/10">
            <motion.div style={{ height }} className="w-px bg-gradient-to-b from-primary to-primary/20" />
          </div>
          {steps.map((s, i) => (
            <Rise key={s.title} delay={i * 0.08} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[34px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary/60 bg-background text-[10px] text-primary">
                {i + 1}
              </span>
              <div className="flex items-start gap-4">
                <s.icon className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.text}</p>
                </div>
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- SECTION 7 — Notes ---------------- */
const notes = [
  { icon: Wallet, title: 'Advance Payment', text: '50% advance payment is mandatory to confirm the booking.' },
  { icon: PackagePlus, title: 'Additional Requirements', text: 'Any additional requirements such as actors, props, special equipment, or permissions will be charged separately.' },
  { icon: CreditCard, title: 'Balance Payment', text: 'Remaining balance must be cleared on or before final delivery.' },
  { icon: MapPin, title: 'Travel & Location', text: 'Location charges, travel, transport, and accommodation (if required) are not included.' },
  { icon: Ban, title: 'Cancellation', text: 'Cancellation charges are non-refundable under any circumstances.' },
  { icon: Tags, title: 'Offer Validity', text: 'Packages and offer prices are valid only for bulk bookings and limited slots.' },
  { icon: Eye, title: 'Style Approval', text: 'Final output style and references will be discussed and approved before the shoot.' },
  { icon: Clock, title: 'Delivery Timeline', text: 'Delivery timelines depend on number of reels and project complexity.' },
  { icon: FolderLock, title: 'Raw Footage', text: 'Raw footage will not be shared unless discussed and agreed in advance.' },
];

const Notes = () => (
  <section className="relative overflow-hidden py-24 md:py-32">
    <img
      src={notesImg}
      alt="Camera accessories flatlay"
      loading="lazy"
      className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
    <div className="container relative z-10 mx-auto max-w-3xl px-4 md:px-6">
      <Rise className="text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">Please Read</p>
        <h2 className="font-display text-4xl md:text-6xl">Note</h2>
      </Rise>
      <Rise delay={0.1}>
        <Accordion type="single" collapsible className="mt-12">
          {notes.map((n) => (
            <AccordionItem key={n.title} value={n.title} className="border-white/10">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="flex items-center gap-3">
                  <n.icon className="h-5 w-5 shrink-0 text-primary" />
                  {n.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pl-8 text-muted-foreground">{n.text}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Rise>
      <Rise delay={0.15} className="text-center">
        <Cta
          label="Discuss on WhatsApp"
          message="Hi! I would like to discuss pricing and terms for my project."
        />
      </Rise>
    </div>
  </section>
);

/* ---------------- SECTION 8 — Final CTA ---------------- */
const FinalCta = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 0.25]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[90svh] items-center justify-center overflow-hidden grain-overlay"
    >
      <motion.div
        style={{ scale, opacity }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)),transparent_60%)]"
      />
      <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
        <h2 className="font-display text-5xl leading-none sm:text-7xl md:text-8xl">
          <LetterReveal text="Ready To Grow" />
          <br />
          <LetterReveal text="Your Brand?" className="text-gradient-orange" delay={0.2} />
        </h2>
        <Rise delay={0.3}>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Let's plan your next cinematic shoot. Slots are limited each month.
          </p>
          <Cta label="Book Your Shoot" message="Hi! I'd like to book a shoot with CineQuick." />
        </Rise>
      </div>
    </section>
  );
};

/* ---------------- Page composition ---------------- */
const PricingCinematic = () => (
  <div className="bg-background">
    <Hero />

    <PackageSection
      image={mobileImg}
      alt="Flagship Mobile Shoot Pricing"
      eyebrow="Package 01"
      title="Shoot With Flagship Mobile"
      price={3999}
      offers={[
        { reels: '6 Reels', perReel: '₹2,750/-', total: '₹16,500/-' },
        { reels: '8 Reels', perReel: '₹2,500/-', total: '₹20,000/-' },
        { reels: '16 Reels', perReel: '₹2,000/-', total: '₹32,000/-' },
      ]}
      ctaLabel="Book Mobile Shoot"
      ctaMessage="Hi! I'm interested in your Flagship Mobile shoot package starting at ₹3,999."
      visual={({ progress }) => <MobileVisual progress={progress} />}
    />

    <PackageSection
      image={cameraImg}
      alt="Professional Camera Shoot Pricing"
      eyebrow="Package 02"
      title="Shoot With Professional Camera"
      price={7999}
      brighten
      offers={[
        { reels: '4 Reels', perReel: '₹6,000/-', total: '₹24,000/-' },
        { reels: '8 Reels', perReel: '₹5,000/-', total: '₹40,000/-' },
        { reels: '16 Reels', perReel: '₹4,500/-', total: '₹72,000/-' },
      ]}
      ctaLabel="Book Camera Shoot"
      ctaMessage="Hi! I'm interested in your Professional Camera shoot package starting at ₹7,999."
      visual={({ progress }) => <CameraVisual progress={progress} />}
    />

    <PackageSection
      image={droneImg}
      alt="Drone and Camera Shoot Pricing"
      eyebrow="Package 03"
      title="Shoot With Drone & Camera"
      price={15999}
      offers={[
        { reels: '4 Reels', perReel: '₹13,500/-', total: '₹54,000/-' },
        { reels: '8 Reels', perReel: '₹11,250/-', total: '₹90,000/-' },
        { reels: '16 Reels', perReel: '₹10,000/-', total: '₹1,60,000/-' },
      ]}
      ctaLabel="Get Quote on WhatsApp"
      ctaMessage="Hi! I'm interested in your Drone & Camera shoot package starting at ₹15,999."
      visual={({ progress }) => <DroneVisual progress={progress} />}
    />

    <WhyChoose />
    <Process />
    <Notes />
    <FinalCta />
  </div>
);

/* ---------------- Package visuals ---------------- */
const MobileVisual = ({ progress }: { progress: MotionValue<number> }) => {
  const x = useTransform(progress, [0, 0.5], ['22%', '0%']);
  const rotate = useTransform(progress, [0, 0.5], [14, 0]);
  const y = useTransform(progress, [0, 1], ['8%', '-8%']);
  return (
    <motion.img
      src={mobileImg}
      alt="Flagship Mobile Shoot Pricing"
      loading="lazy"
      style={{ x, y, rotate, transformPerspective: 1200 }}
      className="mx-auto w-full max-w-lg rounded-3xl shadow-2xl"
    />
  );
};

const CameraVisual = ({ progress }: { progress: MotionValue<number> }) => {
  const scale = useTransform(progress, [0, 0.5], [0.8, 1]);
  const y = useTransform(progress, [0, 1], ['10%', '-10%']);
  return (
    <div className="relative">
      <motion.img
        src={cameraImg}
        alt="Professional Camera Shoot Pricing"
        loading="lazy"
        style={{ scale, y }}
        className="mx-auto w-full max-w-lg rounded-3xl shadow-2xl"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/25 to-transparent"
        initial={{ opacity: 0, x: '-40%' }}
        whileInView={{ opacity: [0, 0.9, 0], x: '40%' }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 1.8, ease: EASE, delay: 0.4 }}
      />
    </div>
  );
};

const DroneVisual = ({ progress }: { progress: MotionValue<number> }) => {
  const y = useTransform(progress, [0, 0.5], ['-30%', '0%']);
  const opacity = useTransform(progress, [0, 0.3], [0, 1]);
  return (
    <motion.div style={{ y, opacity }} className="relative">
      <motion.img
        src={droneImg}
        alt="Drone and Camera Shoot Pricing"
        loading="lazy"
        className="mx-auto w-full max-w-lg rounded-3xl shadow-2xl"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Spinning rotor accents */}
      {[
        'left-[12%] top-[10%]',
        'right-[12%] top-[10%]',
      ].map((pos) => (
        <motion.span
          key={pos}
          aria-hidden
          className={`pointer-events-none absolute ${pos} h-16 w-16 rounded-full border border-primary/40 border-t-primary/90`}
          animate={{ rotate: 360 }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </motion.div>
  );
};

export default PricingCinematic;
