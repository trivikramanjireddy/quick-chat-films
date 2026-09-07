import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import mobileImg from '@/assets/pricing/mobile.png';
import cameraImg from '@/assets/pricing/camera.png';
import droneImg from '@/assets/pricing/drone.png';

const EASE = [0.16, 1, 0.3, 1] as const;

const gear = [
  { img: mobileImg, label: 'Flagship Mobile' },
  { img: cameraImg, label: 'Professional Camera' },
  { img: droneImg, label: 'Drone Systems' },
];

/** One morphing gear layer, driven by the section scroll progress */
const GearLayer = ({
  src,
  label,
  index,
  progress,
}: {
  src: string;
  label: string;
  index: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) => {
  const start = index / gear.length;
  const end = (index + 1) / gear.length;
  const pad = 0.08;

  const opacity = useTransform(
    progress,
    [start - pad, start + pad, end - pad, end + pad],
    [0, 1, 1, 0]
  );
  const scale = useTransform(progress, [start - pad, end + pad], [0.82, 1.12]);
  const rotate = useTransform(progress, [start - pad, end + pad], [-8, 8]);
  const blur = useTransform(opacity, [0, 1], [14, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <motion.div
      style={{ opacity, scale, rotate, filter }}
      className="absolute inset-0 flex flex-col items-center justify-center"
    >
      <img src={src} alt={label} loading="lazy" className="max-h-[52vh] w-auto rounded-3xl" />
      <p className="mt-6 text-xs uppercase tracking-[0.35em] text-primary">{label}</p>
    </motion.div>
  );
};

const Equipment = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const parallax = useTransform(scrollYProgress, [0, 1], ['6%', '-6%']);

  return (
    <section ref={ref} id="equipment" className="relative h-[300svh]">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <motion.div
          style={{ y: parallax }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,hsl(var(--primary)/0.16),transparent_60%)]"
        />

        {/* Floating lens elements */}
        {[
          'left-[8%] top-[18%] h-24 w-24',
          'right-[10%] top-[26%] h-16 w-16',
          'left-[16%] bottom-[16%] h-20 w-20',
          'right-[18%] bottom-[20%] h-28 w-28',
        ].map((pos, i) => (
          <motion.span
            key={pos}
            aria-hidden
            className={`pointer-events-none absolute ${pos} rounded-full border border-primary/25`}
            animate={{ y: [0, -18, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 12 + i * 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        <div className="container relative z-10 mx-auto grid h-full items-center gap-8 px-4 md:px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">Equipment</p>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              Shot using flagship mobiles, professional cameras and{' '}
              <span className="text-gradient-orange">drone systems.</span>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              The right tool for every frame — from pocket-sized shoots to full aerial
              productions.
            </p>
          </motion.div>

          <div className="relative h-[60svh]">
            {gear.map((g, i) => (
              <GearLayer
                key={g.label}
                src={g.img}
                label={g.label}
                index={i}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
