import { motion } from 'framer-motion';
import founderPortrait from '@/assets/leadership/trivikram-anji-reddy-founder.jpg.asset.json';
import coFounderPortrait from '@/assets/leadership/mahesh-co-founder.jpeg.asset.json';

const EASE = [0.16, 1, 0.3, 1] as const;

const profiles = [
  {
    name: 'TrivikramAnjiReddy.P',
    designation: 'FOUNDER',
    image: founderPortrait.url,
    alt: 'Trivikram Anji Reddy on a film set',
    profileUrl: 'https://www.instagram.com/trivikramanjireddy.poluri?hvrq=b3VhN2E3Y2xmbm81&utm_source=qr',
  },
  {
    name: 'Mahesh Ravala',
    designation: 'CO-FOUNDER',
    image: coFounderPortrait.url,
    alt: 'Mahesh working with a cinema camera',
    profileUrl: 'https://www.instagram.com/dop_maheshravalaofficial?lqvp=NDNocGh4ZXgwM214',
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
        <h2 id="leadership-heading" className="max-w-5xl font-display text-4xl font-bold text-foreground md:text-6xl lg:text-7xl">
          THE PEOPLE BEHIND CINEQUICK
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
              <motion.a
                href={profile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${profile.name}'s Instagram profile`}
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="group mt-5 inline-flex min-h-12 items-center justify-center gap-2 border border-foreground/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors duration-300 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                VISIT PROFILE{' '}
                <span className="text-primary transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Founders;