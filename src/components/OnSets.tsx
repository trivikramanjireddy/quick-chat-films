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

const images = [
  { src: alluArjun2, alt: 'On set with Allu Arjun' },
  { src: aliMaking, alt: 'Behind the scenes with Ali' },
  { src: alluArjun, alt: 'Working with Allu Arjun' },
  { src: hanumanMaking, alt: 'Hanuman movie making' },
  { src: karthikPrashanth, alt: 'With Karthik, Prashanth Varma & Nithya Menen' },
  { src: alluArjunBts, alt: 'BTS with Allu Arjun' },
  { src: makingWithAa, alt: 'On set moments' },
  { src: ragavendaravBts, alt: 'With Raghavendra Rao' },
  { src: sudeerYashmaster, alt: 'With Sudheer & Yash Master' },
  { src: suhashBts, alt: 'Behind the scenes crew' },
];

const OnSets = () => {
  return (
    <section id="on-sets" className="section-cine bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
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

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid rounded-2xl overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="absolute bottom-4 left-4 right-4 text-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnSets;
