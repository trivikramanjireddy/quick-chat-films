import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '@/assets/header-logo.png';

const EASE = [0.16, 1, 0.3, 1] as const;

/** Cinematic aperture loading screen shown once per session */
const LoadingScreen = () => {
  const [done, setDone] = useState(() => {
    if (typeof window === 'undefined') return true;
    return sessionStorage.getItem('cq-intro') === '1';
  });

  useEffect(() => {
    if (done) return;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => {
      sessionStorage.setItem('cq-intro', '1');
      setDone(true);
    }, 2200);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = '';
    };
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <motion.div
            className="pointer-events-none absolute h-[70vmin] w-[70vmin] rounded-full border border-primary/25"
            animate={{ rotate: 360, scale: [1, 1.08, 1] }}
            transition={{ rotate: { duration: 6, repeat: Infinity, ease: 'linear' }, scale: { duration: 2.2, ease: EASE } }}
          >
            <div className="absolute inset-[10%] rounded-full border border-primary/40 [mask-image:conic-gradient(from_0deg,transparent_0deg,black_70deg,transparent_150deg)]" />
          </motion.div>

          <motion.img
            src={logo}
            alt="CineQuick"
            className="relative h-12 w-auto md:h-16"
            initial={{ opacity: 0, scale: 0.85, filter: 'blur(14px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: EASE }}
          />

          <motion.div
            className="absolute bottom-16 h-px w-40 overflow-hidden bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-primary/30"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: EASE }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
