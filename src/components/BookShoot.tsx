import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Phone, FileText } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import MagneticButton from './fx/MagneticButton';
import { LetterReveal } from './pricing/animations';

const EASE = [0.16, 1, 0.3, 1] as const;
const WHATSAPP = 'https://wa.me/919493668321';
const wa = (m: string) => `${WHATSAPP}?text=${encodeURIComponent(m)}`;

const BookShoot = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 5,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 12,
        opacity: 0.15 + Math.random() * 0.45,
      })),
    []
  );

  return (
    <section
      id="book"
      className="relative flex min-h-[90svh] items-center justify-center overflow-hidden grain-overlay"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.18),transparent_62%)]" />

      {/* Moving orange particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          aria-hidden
          className="pointer-events-none absolute bottom-0 rounded-full bg-primary blur-[1px]"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{ y: ['0vh', '-95vh'], x: [0, (p.id % 2 ? 1 : -1) * 40, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
        <h2 className="font-display text-4xl leading-none sm:text-6xl md:text-7xl">
          <LetterReveal text="Ready To Create" />
          <br />
          <LetterReveal text="Something Cinematic?" className="text-gradient-orange" delay={0.2} />
        </h2>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
        >
          <MagneticButton
            href={wa("Hi! I'd like to book a shoot with CineQuick.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero w-full sm:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp Booking
          </MagneticButton>
          <MagneticButton href="tel:+919493668321" className="btn-outline-cine w-full sm:w-auto">
            <Phone className="h-5 w-5" />
            Call Now
          </MagneticButton>
          <MagneticButton href="#start-project" className="btn-outline-cine w-full sm:w-auto">
            <FileText className="h-5 w-5" />
            Get Quote
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default BookShoot;
