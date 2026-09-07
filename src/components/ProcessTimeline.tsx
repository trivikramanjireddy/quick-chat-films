import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollText, Camera, Clapperboard, Rocket } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

const steps = [
  { icon: ScrollText, title: 'Pre Production', text: 'Concept, script, references and shot planning.' },
  { icon: Camera, title: 'Shoot', text: 'Cinematic capture with the right gear and crew.' },
  { icon: Clapperboard, title: 'Edit', text: 'Cut, colour, sound and motion, frame by frame.' },
  { icon: Rocket, title: 'Delivery', text: 'Platform-ready files delivered on schedule.' },
];

const ProcessTimeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 65%'] });
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">Our Process</p>
          <h2 className="font-display text-4xl md:text-6xl">From Idea To Delivery</h2>
        </motion.div>

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl pl-12">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10">
            <motion.div
              style={{ height }}
              className="w-px bg-gradient-to-b from-primary via-primary to-primary/10"
            />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              className="relative pb-14 last:pb-0"
              initial={{ opacity: 0, x: -30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.85, ease: EASE, delay: i * 0.06 }}
            >
              <motion.span
                className="absolute -left-[46px] top-0 flex h-9 w-9 items-center justify-center rounded-full border border-primary/50 bg-background"
                whileInView={{ boxShadow: '0 0 28px hsl(var(--primary) / 0.45)' }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE }}
              >
                <s.icon className="h-4 w-4 text-primary" />
              </motion.span>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Step {i + 1}
              </p>
              <h3 className="font-display text-3xl">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
