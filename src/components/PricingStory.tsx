import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import MagneticButton from './fx/MagneticButton';
import { Counter, LetterReveal } from './pricing/animations';
import mobileImg from '@/assets/pricing/mobile.png';
import cameraImg from '@/assets/pricing/camera.png';
import droneImg from '@/assets/pricing/drone.png';

const EASE = [0.16, 1, 0.3, 1] as const;
const WHATSAPP = 'https://wa.me/919493668321';
const wa = (m: string) => `${WHATSAPP}?text=${encodeURIComponent(m)}`;

interface Scene {
  img: string;
  title: string;
  price: number;
  offers: { reels: string; each: string }[];
  message: string;
  enter: 'right' | 'left' | 'top';
}

const scenes: Scene[] = [
  {
    img: mobileImg,
    title: 'Shoot With Flagship Mobile',
    price: 3999,
    offers: [
      { reels: '4 Reels', each: '₹3,749 each' },
      { reels: '8 Reels', each: '₹3,499 each' },
      { reels: '12 Reels', each: '₹3,249 each' },
    ],
    message: "Hi! I'm interested in the Flagship Mobile shoot package starting at ₹3,999.",
    enter: 'right',
  },
  {
    img: cameraImg,
    title: 'Shoot With Professional Camera',
    price: 7999,
    offers: [
      { reels: '4 Reels', each: '₹7,499 each' },
      { reels: '8 Reels', each: '₹6,999 each' },
      { reels: '12 Reels', each: '₹6,499 each' },
    ],
    message: "Hi! I'm interested in the Professional Camera shoot package starting at ₹7,999.",
    enter: 'left',
  },
  {
    img: droneImg,
    title: 'Shoot With Drone + Camera',
    price: 15999,
    offers: [
      { reels: '4 Reels', each: '₹14,999 each' },
      { reels: '8 Reels', each: '₹13,999 each' },
      { reels: '12 Reels', each: '₹12,999 each' },
    ],
    message: "Hi! I'm interested in the Drone + Camera shoot package starting at ₹15,999.",
    enter: 'top',
  },
];

const Visual = ({ scene, progress }: { scene: Scene; progress: MotionValue<number> }) => {
  const fromX = scene.enter === 'right' ? '25%' : scene.enter === 'left' ? '-25%' : '0%';
  const fromY = scene.enter === 'top' ? '-25%' : '0%';
  const x = useTransform(progress, [0, 0.5], [fromX, '0%']);
  const yIn = useTransform(progress, [0, 0.5], [fromY, '0%']);
  const rotate = useTransform(progress, [0, 0.5], [scene.enter === 'left' ? -10 : 10, 0]);
  const scale = useTransform(progress, [0, 0.5, 1], [0.86, 1, 1.05]);

  return (
    <motion.div style={{ x, y: yIn, rotate, scale, transformPerspective: 1200 }} className="relative">
      <motion.img
        src={scene.img}
        alt={scene.title}
        loading="lazy"
        className="mx-auto w-full max-w-md rounded-3xl shadow-2xl"
        animate={scene.enter === 'top' ? { y: [0, -12, 0] } : undefined}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {scene.enter === 'top' && (
        <div className="mx-auto mt-6 h-4 w-40 rounded-[100%] bg-black/70 blur-xl" />
      )}
    </motion.div>
  );
};

const SceneBlock = ({ scene, index }: { scene: Scene; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.16, 0]);
  const [open, setOpen] = useState(false);

  return (
    <div ref={ref} className="relative overflow-hidden py-20 md:py-28">
      <motion.div
        style={{ opacity: glow }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,hsl(var(--primary)),transparent_62%)]"
      />
      <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div className={index % 2 ? 'order-1 lg:order-2' : 'order-1'}>
          <Visual scene={scene} progress={scrollYProgress} />
        </div>

        <div className={index % 2 ? 'order-2 lg:order-1' : 'order-2'}>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">
            Scene {index + 1}
          </p>
          <h3 className="font-display text-4xl leading-tight md:text-5xl">
            <LetterReveal text={scene.title} />
          </h3>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          >
            <p className="mt-6 text-muted-foreground">Starts From</p>
            <p className="font-display text-6xl text-gradient-orange md:text-7xl">
              <Counter to={scene.price} />
            </p>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="btn-outline-cine mt-6"
            >
              View Offers
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-500 ${open ? 'rotate-180' : ''}`}
              />
            </button>
          </motion.div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.ul
                key="offers"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="overflow-hidden"
              >
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {scene.offers.map((o, i) => (
                    <motion.li
                      key={o.reels}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, ease: EASE, delay: 0.08 * i }}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition-colors duration-500 hover:border-primary/60"
                    >
                      <p className="font-display text-2xl">{o.reels}</p>
                      <p className="text-primary">{o.each}</p>
                    </motion.li>
                  ))}
                </div>
              </motion.ul>
            )}
          </AnimatePresence>

          <MagneticButton
            href={wa(scene.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero mt-8"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Book This Package
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};

const PricingStory = () => (
  <section id="pricing" className="relative">
    <div className="container mx-auto px-4 pt-24 text-center md:px-6 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">Pricing</p>
        <h2 className="font-display text-4xl md:text-6xl">Choose Your Shoot</h2>
      </motion.div>
    </div>

    {scenes.map((s, i) => (
      <SceneBlock key={s.title} scene={s} index={i} />
    ))}
  </section>
);

export default PricingStory;
