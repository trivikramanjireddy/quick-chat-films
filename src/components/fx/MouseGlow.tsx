import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/** Soft orange light that follows the cursor across the whole page */
const MouseGlow = () => {
  const mx = useMotionValue(-500);
  const my = useMotionValue(-500);
  const x = useSpring(mx, { stiffness: 120, damping: 24, mass: 0.6 });
  const y = useSpring(my, { stiffness: 120, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <motion.div
      aria-hidden
      style={{ x, y }}
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.16] blur-[90px] md:block"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,hsl(var(--primary)),transparent_65%)]" />
    </motion.div>
  );
};

export default MouseGlow;
