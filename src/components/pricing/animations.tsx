import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

export const EASE = [0.16, 1, 0.3, 1] as const;

/** Animated number counter that runs when scrolled into view */
export const Counter = ({
  to,
  prefix = '₹',
  className,
}: {
  to: number;
  prefix?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1600, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => spring.on('change', (v) => setDisplay(Math.round(v))), [spring]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString('en-IN')}
    </span>
  );
};

/** Reveals a title one letter at a time */
export const LetterReveal = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => (
  <motion.span
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-10% 0px' }}
    transition={{ staggerChildren: 0.03, delayChildren: delay }}
    aria-label={text}
  >
    {text.split('').map((ch, i) => (
      <motion.span
        key={i}
        aria-hidden
        className="inline-block"
        variants={{
          hidden: { opacity: 0, y: '0.4em', filter: 'blur(6px)' },
          show: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {ch === ' ' ? '\u00A0' : ch}
      </motion.span>
    ))}
  </motion.span>
);

/** Generic soft fade + lift on scroll */
export const Rise = ({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: '-10% 0px' }}
    transition={{ duration: 0.9, ease: EASE, delay }}
  >
    {children}
  </motion.div>
);
