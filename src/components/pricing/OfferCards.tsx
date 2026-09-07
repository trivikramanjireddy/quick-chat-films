import { motion } from 'framer-motion';
import { EASE } from './animations';

export interface Offer {
  reels: string;
  perReel: string;
  total: string;
}

const OfferCards = ({ offers }: { offers: Offer[] }) => (
  <motion.ul
    className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-10% 0px' }}
    transition={{ staggerChildren: 0.14 }}
  >
    {offers.map((o) => (
      <motion.li
        key={o.reels}
        variants={{
          hidden: { opacity: 0, y: 36, scale: 0.96 },
          show: { opacity: 1, y: 0, scale: 1 },
        }}
        transition={{ duration: 0.8, ease: EASE }}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-colors duration-500 hover:border-primary/60"
      >
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <p className="font-display text-3xl tracking-wide text-foreground">{o.reels}</p>
        <p className="mt-2 text-2xl font-semibold text-primary">{o.perReel}</p>
        <p className="text-sm text-muted-foreground">{o.total}</p>
      </motion.li>
    ))}
  </motion.ul>
);

export default OfferCards;
