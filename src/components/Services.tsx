import {
  Video,
  ShoppingBag,
  Utensils,
  Building2,
  Smartphone,
  Music,
  Heart,
  GraduationCap,
  Building,
} from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Video,
    title: 'Brand Commercials & Ads',
    description:
      'High-end cinematic advertisements crafted to build strong brand identity and boost visibility across digital and offline platforms.',
  },
  {
    icon: ShoppingBag,
    title: 'Product Launch & Promo Videos',
    description:
      'Stylish, engaging product videos designed to attract attention and increase conversions for eCommerce and startups.',
  },
  {
    icon: Utensils,
    title: 'Food & Restaurant Films',
    description:
      'Visually mouth-watering food videos that highlight taste, ambience, and brand personality for restaurants and cafés.',
  },
  {
    icon: Building2,
    title: 'Corporate Announcements & Events',
    description:
      'Professional coverage for corporate events, launches, and announcements with fast turnaround and premium finish.',
  },
  {
    icon: Smartphone,
    title: 'Social Media Reels & Shorts',
    description:
      'Trending, fast-paced vertical videos optimized for Instagram, YouTube Shorts, and Facebook Reels.',
  },
  {
    icon: Music,
    title: 'Music & Cover Song Videos',
    description:
      'Creative and cinematic music videos with storytelling visuals and emotional depth.',
  },
  {
    icon: Heart,
    title: 'Luxury Weddings & Engagement Films',
    description:
      'Elegant, emotional, cinematic wedding films crafted like a movie — timeless and premium.',
  },
  {
    icon: GraduationCap,
    title: 'Educational & Training Videos',
    description:
      'Clear, engaging educational videos for institutions, companies, and online platforms.',
  },
  {
    icon: Building,
    title: 'Hospitality & Real Estate Films',
    description:
      'High-quality walkthroughs and promotional films for hotels, resorts, villas, and real estate projects.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-cine bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            OUR SERVICES
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From brand commercials to cinematic wedding films, we deliver premium video content
            tailored to your vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
