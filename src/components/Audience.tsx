import { motion } from 'framer-motion';
import { Building2, Briefcase, Users, PartyPopper } from 'lucide-react';
import brandImg from '@/assets/services/brand-ads.jpg';
import corporateImg from '@/assets/services/corporate.jpg';
import reelsImg from '@/assets/services/reels.jpg';
import weddingImg from '@/assets/services/wedding.jpg';

const EASE = [0.16, 1, 0.3, 1] as const;

const items = [
  { icon: Building2, title: 'Brands', text: 'Campaign films and ads that build recognition.', img: brandImg },
  { icon: Briefcase, title: 'Businesses', text: 'Promos, launches and corporate storytelling.', img: corporateImg },
  { icon: Users, title: 'Creators', text: 'Scroll-stopping reels and shorts, made fast.', img: reelsImg },
  { icon: PartyPopper, title: 'Events', text: 'Weddings and events captured like a movie.', img: weddingImg },
];

const Audience = () => (
  <section id="audience" className="relative py-24 md:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">Who We Create For</p>
        <h2 className="font-display text-4xl md:text-6xl">Made For Every Story</h2>
      </motion.div>

      <motion.div
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ staggerChildren: 0.14 }}
      >
        {items.map((it) => (
          <motion.article
            key={it.title}
            variants={{
              hidden: { opacity: 0, y: 44, scale: 0.96 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.85, ease: EASE }}
            whileHover={{ y: -8 }}
            className="group relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-colors duration-500 hover:border-primary/60"
          >
            <img
              src={it.img}
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute inset-0 h-full w-full scale-105 object-cover opacity-20 transition-all duration-[1200ms] group-hover:scale-110 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
            <div className="absolute -inset-px rounded-3xl opacity-0 shadow-[0_0_60px_hsl(var(--primary)/0.35)] transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10 flex h-full flex-col justify-end">
              <it.icon className="mb-4 h-7 w-7 text-primary" />
              <h3 className="font-display text-3xl">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Audience;
