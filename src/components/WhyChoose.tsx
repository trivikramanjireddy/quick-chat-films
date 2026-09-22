import { motion } from 'framer-motion';
import { Aperture, Clapperboard, Clock3, Film, MapPin, UsersRound } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

const strengths = [
  { icon: Film, value: '55+', label: 'Worked on Films' },
  { icon: Clapperboard, value: '100+', label: 'Commercials & Brands' },
  { icon: Clock3, value: 'Same-Day', label: 'Delivery Available' },
  { icon: MapPin, value: 'On-Location', label: 'Editing' },
  { icon: Aperture, value: 'Cinematic', label: 'Quality Production' },
  { icon: UsersRound, value: 'Dedicated', label: 'Creative Team' },
];

const WhyChoose = () => (
  <section id="why" className="relative overflow-hidden border-y border-border/60 bg-cine-dark py-20 md:py-28">
    <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/70 to-transparent" />
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.9, ease: EASE }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-primary">The CineQuick Difference</p>
          <h2 className="max-w-xl font-display text-5xl leading-[0.95] text-foreground sm:text-6xl md:text-7xl">
            WHY<br />CINEQUICK
          </h2>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Film-set experience, commercial precision, and a crew built for speed — without compromising the frame.
          </p>
        </motion.div>

        <div className="border-t border-border/70">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.label}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.72, ease: EASE, delay: index * 0.05 }}
              className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-border/70 py-5 md:grid-cols-[3rem_1fr_auto] md:gap-6 md:py-7"
            >
              <span className="text-xs tabular-nums text-muted-foreground/60">{String(index + 1).padStart(2, '0')}</span>
              <div className="min-w-0">
                <p className="text-xl font-medium leading-tight text-foreground transition-colors duration-300 group-hover:text-primary md:text-3xl">
                  {strength.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground md:text-sm">
                  {strength.label}
                </p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center border border-border bg-background/40 transition-colors duration-300 group-hover:border-primary/60 md:h-12 md:w-12">
                <strength.icon className="h-4 w-4 text-primary md:h-5 md:w-5" strokeWidth={1.5} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChoose;
