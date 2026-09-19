import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './fx/MagneticButton';
import WhatsAppIcon from './WhatsAppIcon';
import alluArjunAsset from '@/assets/hero-collage/AlluArjun.webp.asset.json';
import hanumanMakingAsset from '@/assets/hero-collage/Hanuman_Making.webp.asset.json';
import editingAsset from '@/assets/hero-collage/IMG_5522_Original.jpg.asset.json';
import setReviewAsset from '@/assets/hero-collage/IMG_5842_Original.jpg.asset.json';
import nightEditAsset from '@/assets/hero-collage/IMG_7048.webp.asset.json';
import karthikAsset from '@/assets/hero-collage/Karthik_Prashanth_Varma_Nitayamenon.webp.asset.json';
import maniSharmaAsset from '@/assets/hero-collage/ManiSharma_Garu.webp.asset.json';
import sandeepAsset from '@/assets/hero-collage/Sandeep_Madhav.jpg.asset.json';
import sudeerAsset from '@/assets/hero-collage/Sudeer_YashMaster.webp.asset.json';
import suhashAsset from '@/assets/hero-collage/Suhash_BTS.webp.asset.json';
import maheshBtsAsset from '@/assets/hero-collage/Mahesh_BTS.webp.asset.json';
import maheshImagesAsset from '@/assets/hero-collage/Mahesh_Images.jpg.asset.json';
import maheshMaking2Asset from '@/assets/hero-collage/Mahesh_Making_2.webp.asset.json';
import maheshMakingAsset from '@/assets/hero-collage/MaheshMaking.webp.asset.json';
import manisharmaAsset from '@/assets/hero-collage/Manisharma.jpg.asset.json';

const EASE = [0.16, 1, 0.3, 1] as const;
const WHATSAPP =
  'https://wa.me/919493668321?text=' +
  encodeURIComponent("Hi CineQuick! I'd like to discuss a cinematic content project.");

const collage = [
  {
    src: alluArjunAsset.url,
    alt: 'CineQuick filming a behind-the-scenes production',
    className: 'left-[2%] top-[13%] h-[24%] w-[25%] sm:left-[3%] sm:top-[10%] sm:h-[28%] sm:w-[22%] lg:left-[5%] lg:h-[31%] lg:w-[23%]',
    drift: -10,
    parallax: -52,
  },
  {
    src: nightEditAsset.url,
    alt: 'Professional cinema camera setup on location',
    className: 'right-[3%] top-[11%] h-[21%] w-[26%] sm:right-[4%] sm:h-[29%] sm:w-[21%] lg:right-[7%] lg:w-[24%]',
    drift: 12,
    parallax: -34,
  },
  {
    src: editingAsset.url,
    alt: 'CineQuick team working with film talent',
    className: 'bottom-[7%] left-[3%] h-[24%] w-[29%] sm:bottom-[8%] sm:left-[7%] sm:h-[28%] sm:w-[24%] lg:w-[27%]',
    drift: 9,
    parallax: 44,
  },
  {
    src: suhashAsset.url,
    alt: 'CineQuick production crew preparing a shot',
    className: 'bottom-[6%] right-[3%] h-[25%] w-[27%] sm:bottom-[9%] sm:right-[7%] sm:h-[27%] sm:w-[23%] lg:w-[26%]',
    drift: -12,
    parallax: 58,
  },
  {
    src: hanumanMakingAsset.url,
    alt: 'Camera operator capturing a cinematic scene',
    className: 'hidden sm:block left-[27%] top-[4%] h-[19%] w-[16%] lg:left-[30%] lg:h-[22%] lg:w-[17%]',
    drift: 7,
    parallax: -70,
  },
  {
    src: karthikAsset.url,
    alt: 'Behind-the-scenes direction during a CineQuick shoot',
    className: 'hidden sm:block right-[25%] top-[3%] h-[18%] w-[15%] lg:right-[29%] lg:h-[21%] lg:w-[16%]',
    drift: -8,
    parallax: -62,
  },
  {
    src: setReviewAsset.url,
    alt: 'On-set production moment captured by CineQuick',
    className: 'hidden sm:block bottom-[3%] left-[32%] h-[18%] w-[14%] lg:left-[34%] lg:h-[20%] lg:w-[15%]',
    drift: -7,
    parallax: 76,
  },
  {
    src: maniSharmaAsset.url,
    alt: 'CineQuick creators collaborating on set',
    className: 'hidden sm:block bottom-[2%] right-[30%] h-[19%] w-[15%] lg:right-[32%] lg:h-[21%] lg:w-[16%]',
    drift: 8,
    parallax: 68,
  },
  {
    src: sandeepAsset.url,
    alt: 'Production crew planning a scene on location',
    className: 'hidden lg:block left-[1%] top-[46%] h-[18%] w-[15%]',
    drift: 6,
    parallax: 28,
  },
  {
    src: sudeerAsset.url,
    alt: 'CineQuick creators together after production',
    className: 'hidden lg:block right-[1%] top-[45%] h-[18%] w-[15%]',
    drift: -6,
    parallax: 24,
  },
  {
    src: maheshMakingAsset.url,
    alt: 'CineQuick filming with Mahesh on set',
    className: 'hidden lg:block left-[1%] top-[41%] h-[15%] w-[14%]',
    drift: 7,
    parallax: -38,
  },
  {
    src: maheshMaking2Asset.url,
    alt: 'Behind-the-scenes moment with Mahesh during a shoot',
    className: 'hidden lg:block right-[1%] top-[41%] h-[15%] w-[14%]',
    drift: -7,
    parallax: -32,
  },
  {
    src: maheshBtsAsset.url,
    alt: 'Mahesh captured behind the scenes by CineQuick',
    className: 'hidden lg:block left-[16%] top-[68%] h-[16%] w-[13%]',
    drift: -8,
    parallax: 40,
  },
  {
    src: manisharmaAsset.url,
    alt: 'CineQuick on set with Mani Sharma',
    className: 'hidden lg:block right-[16%] top-[68%] h-[16%] w-[13%]',
    drift: 8,
    parallax: 36,
  },
  {
    src: maheshImagesAsset.url,
    alt: 'Portrait moment from a CineQuick production',
    className: 'hidden lg:block left-[47%] bottom-[1%] h-[15%] w-[12%]',
    drift: 6,
    parallax: 50,
  },
];

const CollageFrame = ({
  item,
  index,
  progress,
  reduceMotion,
}: {
  item: (typeof collage)[number];
  index: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  reduceMotion: boolean | null;
}) => {
  const scrollY = useTransform(progress, [0, 1], [0, reduceMotion ? 0 : item.parallax]);

  return (
    <motion.figure
      style={{ y: scrollY }}
      className={`absolute overflow-hidden rounded-md border border-foreground/10 bg-card shadow-2xl ${item.className}`}
      initial={{ opacity: 0, scale: 0.86, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.08 * index, ease: EASE }}
    >
      <motion.div
        className="h-full w-full"
        animate={reduceMotion ? undefined : { y: [0, item.drift, 0], rotate: [0, index % 2 ? 0.5 : -0.5, 0] }}
        transition={{ duration: 8 + index * 0.7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="h-full w-full object-cover saturate-[0.88]"
          loading={index < 4 ? 'eager' : 'lazy'}
          fetchPriority={index < 2 ? 'high' : 'auto'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-background/10" />
      </motion.div>
    </motion.figure>
  );
};

const CinematicHero = () => {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -54]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-background pt-20 grain-overlay"
    >
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />

      <div aria-hidden className="absolute inset-0">
        {collage.map((item, index) => (
          <CollageFrame
            key={item.src}
            item={item}
            index={index}
            progress={scrollYProgress}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-4xl px-5 py-28 text-center sm:px-8"
      >
        <motion.p
          className="mx-auto mb-5 max-w-2xl text-xs font-semibold uppercase text-primary sm:text-sm"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
        >
          INDIA&apos;S FASTEST CINEMATIC CONTENT CREATION TEAM
        </motion.p>

        <h1 id="hero-title" className="font-display text-5xl leading-[0.92] sm:text-7xl lg:text-8xl">
          <span className="block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: EASE }}
            >
              SHOOT. EDIT. DELIVER.
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="inline-block text-gradient-orange"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.58, ease: EASE }}
            >
              ALL IN ONE DAY.
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-foreground/75 sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.78, ease: EASE }}
        >
          From cinematic reels and commercials to podcasts and event coverage, we create content that gets attention.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.92, ease: EASE }}
        >
          <MagneticButton href="/portfolio" className="btn-hero w-full sm:w-auto">
            View Our Work
          </MagneticButton>
          <MagneticButton
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-cine w-full sm:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp Us
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="absolute bottom-5 left-1/2 z-10 h-8 w-px bg-gradient-to-b from-primary to-transparent"
        animate={reduceMotion ? undefined : { scaleY: [0.45, 1, 0.45], opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
};

export default CinematicHero;