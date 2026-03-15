import { useEffect, useRef } from 'react';
import aliMaking from '@/assets/on-sets/ali-making.png';
import alluArjun from '@/assets/on-sets/allu-arjun.png';
import alluArjun2 from '@/assets/on-sets/allu-arjun-2.png';
import alluArjunBts from '@/assets/on-sets/allu-arjun-bts.png';
import hanumanMaking from '@/assets/on-sets/hanuman-making.png';
import karthikPrashanth from '@/assets/on-sets/karthik-prashanth.png';
import makingWithAa from '@/assets/on-sets/making-with-aa.png';
import ragavendaravBts from '@/assets/on-sets/ragavendarav-bts.png';
import sudeerYashmaster from '@/assets/on-sets/sudeer-yashmaster.png';
import suhashBts from '@/assets/on-sets/suhash-bts.png';

const row1 = [
  { src: alluArjun2, alt: 'On set with Allu Arjun', size: 'large' },
  { src: aliMaking, alt: 'Behind the scenes with Ali', size: 'small' },
  { src: hanumanMaking, alt: 'Hanuman movie making', size: 'medium' },
  { src: karthikPrashanth, alt: 'With Prashanth Varma & Nithya Menen', size: 'large' },
  { src: suhashBts, alt: 'Behind the scenes crew', size: 'medium' },
];

const row2 = [
  { src: alluArjunBts, alt: 'BTS with Allu Arjun', size: 'medium' },
  { src: makingWithAa, alt: 'On set moments', size: 'large' },
  { src: ragavendaravBts, alt: 'With Raghavendra Rao', size: 'small' },
  { src: alluArjun, alt: 'Working with Allu Arjun', size: 'large' },
  { src: sudeerYashmaster, alt: 'With Sudheer & Yash Master', size: 'medium' },
];

const sizeClasses: Record<string, string> = {
  small: 'h-48 md:h-56 w-64 md:w-80',
  medium: 'h-56 md:h-72 w-80 md:w-[420px]',
  large: 'h-64 md:h-80 w-96 md:w-[520px]',
};

const MarqueeRow = ({
  images,
  direction = 'left',
  speed = 30,
}: {
  images: typeof row1;
  direction?: 'left' | 'right';
  speed?: number;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let pos = 0;
    const half = el.scrollWidth / 2;
    const dir = direction === 'left' ? -1 : 1;
    const pxPerFrame = speed / 60;

    const animate = () => {
      pos += pxPerFrame * dir;
      if (direction === 'left' && Math.abs(pos) >= half) pos += half;
      if (direction === 'right' && pos >= half) pos -= half;
      if (direction === 'right' && pos < 0) pos += half;
      el.style.transform = `translateX(${pos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    // Start from right edge for right-scrolling
    if (direction === 'right') pos = -half;

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [direction, speed]);

  // Duplicate for seamless loop
  const duplicated = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div ref={scrollRef} className="flex gap-4 will-change-transform">
        {duplicated.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 rounded-2xl overflow-hidden group ${sizeClasses[image.size]}`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="absolute bottom-3 left-3 right-3 text-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const OnSets = () => {
  return (
    <section id="on-sets" className="section-cine bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Behind The Scenes
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            ON <span className="text-primary">SETS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Moments captured behind the camera — working with some of the biggest names in the industry.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <MarqueeRow images={row1} direction="left" speed={25} />
        <MarqueeRow images={row2} direction="right" speed={35} />
      </div>
    </section>
  );
};

export default OnSets;
