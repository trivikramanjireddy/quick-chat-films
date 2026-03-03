import { Play } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import heroBg from '@/assets/hero-bg.jpg';

const WHATSAPP_LINK = 'https://wa.me/919493668321';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          opacity: 0.3,
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade-in-up">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Premium Video Production</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-in-up">
            CINEMATIC VIDEOS.
            <br />
            <span className="text-gradient-orange">DELIVERED FAST.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-delayed">
            Premium video production for brands, businesses & creators.
            We bring your vision to life with cinematic excellence.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delayed">
            <a
              href="#start-project"
              className="btn-hero w-full sm:w-auto"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Start Your Project
            </a>
            <a
              href="#services"
              className="btn-outline-cine w-full sm:w-auto"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
