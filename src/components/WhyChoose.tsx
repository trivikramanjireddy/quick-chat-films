import { motion } from 'framer-motion';
import { Clapperboard, Heart, Video, Award } from 'lucide-react';
import { Counter } from './pricing/animations';

const EASE = [0.16, 1, 0.3, 1] as const;

const stats = [
  { icon: Clapperboard, value: 350, suffix: '+', label: 'Projects Completed' },
  { icon: Heart, value: 180, suffix: '+', label: 'Happy Clients' },
  { icon: Video, value: 1200, suffix: '+', label: 'Videos Delivered' },
  { icon: Award, value: 7, suffix: '+', label: 'Years Experience' },
];

const WhyChoose = () => (
  <section id="why" className="relative py-24 md:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">Why CineQuick</p>
        <h2 className="font-display text-4xl md:text-6xl">Numbers That Speak</h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.85, ease: EASE, delay: i * 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl transition-colors duration-500 hover:border-primary/50"
          >
            <s.icon className="mx-auto mb-4 h-7 w-7 text-primary" />
            <p className="font-display text-4xl md:text-5xl">
              <Counter to={s.value} prefix="" />
              <span className="text-primary">{s.suffix}</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
