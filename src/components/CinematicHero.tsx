import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './fx/MagneticButton';
import WhatsAppIcon from './WhatsAppIcon';
import logo from '@/assets/header-logo.png';
import heroBg from '@/assets/hero-bg.jpg';

const EASE = [0.16, 1, 0.3, 1] as const;
const WHATSAPP = 'https://wa.me/919493668321?text=' + encodeURIComponent("Hi! I'd like to book a shoot with CineQuick.");

const CinematicHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const lensX = useTransform(scrollYProgress, [0, 1], ['0%', '-38%']);
  const lensRotate = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const lensScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden grain-overlay"
    >
      <motion.div
        style={{ scale: bgScale, backgroundImage: `url(${heroBg})` }}
        className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />

      {/* Rotating camera lens */}
      <motion.div
        style={{ x: lensX, rotate: lensRotate, scale: lensScale }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[110vmin] w-[110vmin] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute inset-0 rounded-full border border-primary/15" />
        <div className="absolute inset-[9%] rounded-full border border-white/5" />
        <div className="absolute inset-[22%] rounded-full border border-primary/25 [mask-image:conic-gradient(from_0deg,transparent_0deg,black_65deg,transparent_150deg)]" />
        <div className="absolute inset-[38%] rounded-full border border-white/5" />
        <div className="absolute inset-[46%] rounded-full bg-primary/15 blur-3xl" />
      </motion.div>

      {/* Orange light streak sweeping across */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-2xl"
        animate={{ x: ['-60vw', '160vw'] }}
        transition={{ duration: 7, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
      />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="container relative z-10 mx-auto px-4 text-center md:px-6"
      >
        <motion.img
          src={logo}
          alt="CineQuick"
          className="mx-auto mb-10 h-12 w-auto md:h-16"
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(12px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.3, ease: EASE, delay: 0.1 }}
        />

        <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl md:text-8xl">
          {['CINEMATIC CONTENT', 'THAT SELLS'].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className={i ? 'inline-block text-gradient-orange' : 'inline-block'}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.5 + i * 0.15 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.95 }}
        >
          We create premium short videos, reels, ads, and cinematic content for brands,
          businesses, creators and events.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 1.15 }}
        >
          <MagneticButton href="/pricing" className="btn-hero w-full sm:w-auto">
            View Pricing
          </MagneticButton>
          <MagneticButton
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-cine w-full sm:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Book A Shoot
          </MagneticButton>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-2">
          <div className="h-2 w-1 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default CinematicHero;
