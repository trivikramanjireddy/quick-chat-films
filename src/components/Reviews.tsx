import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const reviews = [
  {
    name: 'Rahul Sharma',
    role: 'Founder, TechStart India',
    content: 'CineQuick delivered an outstanding brand video that perfectly captured our vision. The quality exceeded our expectations!',
    initials: 'RS',
  },
  {
    name: 'Priya Menon',
    role: 'Restaurant Owner',
    content: 'The food videography was absolutely stunning. Our social media engagement tripled after posting their videos.',
    initials: 'PM',
  },
  {
    name: 'Amit & Sneha',
    role: 'Wedding Clients',
    content: 'Our wedding film was nothing short of magical. They captured every emotion perfectly. Truly a masterpiece.',
    initials: 'AS',
  },
  {
    name: 'Vikram Reddy',
    role: 'Marketing Director',
    content: 'Professional, creative, and always on time. CineQuick has been our go-to video production partner.',
    initials: 'VR',
  },
  {
    name: 'Suhas',
    role: 'Actor',
    content: 'Loved the passion and dedication of the CineQuick team. Great to see such young talent working with creativity and energy on set.',
    initials: 'S',
  },
  {
    name: 'Deepika Rao',
    role: 'Brand Manager',
    content: 'The product launch video was cinematic perfection. Every shot was carefully crafted to tell our brand story.',
    initials: 'DR',
  },
  {
    name: 'Arjun Nair',
    role: 'Music Artist',
    content: 'My music video turned out incredible. The team understood the vibe I wanted and delivered beyond expectations.',
    initials: 'AN',
  },
  {
    name: 'Kavitha S.',
    role: 'Event Planner',
    content: 'CineQuick captured our corporate event flawlessly. The highlight reel was shared across our entire organization.',
    initials: 'KS',
  },
  {
    name: 'Ravi Kumar',
    role: 'Startup CEO',
    content: 'The explainer video they created helped us secure our Series A funding. Worth every penny invested.',
    initials: 'RK',
  },
  {
    name: 'Meera Joshi',
    role: 'Fashion Designer',
    content: 'Stunning lookbook videos that elevated our brand presence. The attention to detail was remarkable.',
    initials: 'MJ',
  },
  {
    name: 'Sanjay Patel',
    role: 'Hotel Owner',
    content: 'The hospitality video showcased our property beautifully. Bookings increased significantly after publishing.',
    initials: 'SP',
  },
  {
    name: 'Ananya Iyer',
    role: 'Content Creator',
    content: 'Working with CineQuick transformed my content quality. Their reels and shorts are simply top-notch.',
    initials: 'AI',
  },
];

const ReviewCard = ({ review, isCenter }: { review: typeof reviews[0]; isCenter: boolean }) => (
  <div
    className={`rounded-2xl border transition-all duration-500 ease-out flex flex-col items-center ${
      isCenter
        ? 'bg-card border-primary/30 shadow-[0_0_40px_hsl(var(--primary)/0.15)] scale-100 p-8 md:p-10'
        : 'bg-card/60 border-border/50 scale-[0.88] opacity-70 p-6 md:p-8'
    }`}
  >
    {/* Avatar */}
    <div
      className={`rounded-full flex items-center justify-center border-4 border-card shrink-0 transition-all duration-500 mb-4 ${
        isCenter ? 'w-16 h-16 bg-primary/20' : 'w-12 h-12 bg-primary/10'
      }`}
    >
      <span className={`text-primary font-bold ${isCenter ? 'text-xl' : 'text-sm'}`}>
        {review.initials}
      </span>
    </div>

    {/* Name */}
    <h3 className={`font-display text-center text-foreground tracking-wide mb-1 ${isCenter ? 'text-lg' : 'text-base'}`}>
      {review.name.toUpperCase()}
    </h3>

    {/* Role */}
    <p className="text-muted-foreground text-xs text-center mb-4">{review.role}</p>

    {/* Quote & content */}
    <div className="relative flex-1 flex flex-col">
      <Quote className="w-6 h-6 text-primary/40 mb-2 rotate-180 shrink-0" />
      <p className={`text-foreground/80 text-center leading-relaxed flex-1 ${isCenter ? 'text-sm' : 'text-xs'}`}>
        "{review.content}"
      </p>
      <div className="flex justify-end mt-2">
        <Quote className="w-6 h-6 text-primary/40 shrink-0" />
      </div>
    </div>
  </div>
);

const Reviews = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      slidesToScroll: 1,
      containScroll: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  return (
    <section id="reviews" className="section-cine bg-cine-dark">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from the brands and creators we've worked with.
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review, index) => {
              const isCenter = index === selectedIndex;

              return (
                <div
                  key={index}
                  className="flex-shrink-0 px-3 transition-all duration-500 ease-out"
                  style={{
                    flexBasis: isCenter ? '40%' : '30%',
                    minWidth: isCenter ? '320px' : '260px',
                  }}
                >
                  <ReviewCard review={review} isCenter={isCenter} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'bg-primary w-6'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
