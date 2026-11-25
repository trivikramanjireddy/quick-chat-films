import { motion } from 'framer-motion';
import founderPortrait from '@/assets/leadership/trivikram-anji-reddy-founder.jpg.asset.json';
import coFounderPortrait from '@/assets/leadership/mahesh-co-founder.jpeg.asset.json';

const EASE = [0.16, 1, 0.3, 1] as const;

const profiles = [
  {
    name: 'Trivikram Anji Reddy',
    designation: 'FOUNDER',
    image: founderPortrait.url,
    alt: 'Trivikram Anji Reddy on a film set',
  },
  {
    name: 'Mahesh',
    designation: 'CO-FOUNDER',
    image: coFounderPortrait.url,
    alt: 'Mahesh working with a cinema camera',
  },
];

const Founders = () => (
  <section
    id="leadership"
    aria-labelledby="leadership-heading"
    className="relative scroll-mt-24 overflow-hidden border-t border-border/70 bg-background pt-32 pb-20 md:py-28"
  >
    <div className="container mx-auto max-w-6xl px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.85, ease: EASE }}
        className="mb-10 md:mb-14"
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.32em] text-primary">CineQuick</p>
        <h2 id="leadership-heading" className="font-display text-4xl text-foreground md:text-6xl">
          LEADERSHIP
        </h2>
      </motion.div>

      <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:gap-12">
        {profiles.map((profile, index) => (
          <motion.article
            key={profile.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, ease: EASE, delay: index * 0.12 }}
            className="min-w-0"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/60">
              <motion.img
                src={profile.image}
                alt={profile.alt}
                loading="lazy"
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="mt-5 border-t border-border/70 pt-4 md:mt-6 md:pt-5">
              <h3 className="font-display text-3xl text-foreground md:text-4xl">{profile.name}</h3>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.24em] text-primary md:text-sm">
                {profile.designation}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Founders;