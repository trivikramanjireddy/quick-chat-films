import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Smartphone, Camera, Rocket } from 'lucide-react';
import { LetterReveal } from './pricing/animations';

const EASE = [0.16, 1, 0.3, 1] as const;

const packages = [
  {
    icon: Smartphone,
    title: 'Mobile Shoot',
    price: '₹3,999',
  },
  {
    icon: Camera,
    title: 'Professional Camera',
    price: '₹7,999',
  },
  {
    icon: Rocket,
    title: 'Drone + Camera',
    price: '₹15,999',
  },
];

const ShortVideoPricing = () => {
  return (
    <section id="short-video-pricing" className="relative overflow-hidden py-24 md:py-32">
      {/* ambient orange glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.12),transparent_60%)]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">
            Short Video Pricing
          </p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            <LetterReveal text="Choose Your Content" />
            <br />
            <LetterReveal text="Creation Package" className="text-gradient-orange" delay={0.15} />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
            className="mx-auto mt-5 max-w-xl text-muted-foreground"
          >
            Professional cinematic content for brands, businesses, creators and events.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.12 * i }}
              className="group"
            >
              <Link
                to="/pricing"
                className="relative block h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:border-primary/60 hover:shadow-[0_0_60px_-12px_hsl(var(--primary)/0.5)]"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                  <pkg.icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 font-display text-2xl tracking-wide md:text-3xl">
                  {pkg.title}
                </h3>

                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Starting From
                </p>
                <p className="mt-1 font-display text-4xl text-gradient-orange md:text-5xl">
                  {pkg.price}
                </p>

                <span className="btn-outline-cine mt-8 inline-flex items-center gap-2 transition-colors duration-500 group-hover:border-primary group-hover:text-primary">
                  View Pricing
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
            See Complete Pricing &amp; Offers
          </p>
          <Link
            to="/pricing"
            className="btn-hero mt-5 inline-flex items-center gap-2"
          >
            View All Packages
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ShortVideoPricing;
