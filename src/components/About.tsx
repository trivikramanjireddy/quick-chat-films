import { MessageCircle, Award, Clock, Users } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/919493668321';

const stats = [
  { icon: Award, value: '500+', label: 'Projects Delivered' },
  { icon: Clock, value: '24hr', label: 'Fast Turnaround' },
  { icon: Users, value: '200+', label: 'Happy Clients' },
];

const About = () => {
  return (
    <section id="about" className="section-cine bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              WE CREATE <span className="text-gradient-orange">VISUAL STORIES</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              CineQuick is a premium video production studio delivering cinematic visuals with
              speed and precision. From brand ads to weddings, we help businesses and creators
              tell powerful stories through video.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of skilled cinematographers, editors, and creative directors work
              together to bring your vision to life. We combine cutting-edge technology with
              artistic expertise to deliver content that captivates and converts.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-flex"
            >
              <MessageCircle className="w-5 h-5" />
              Talk to Us on WhatsApp
            </a>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="service-card flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="font-display text-3xl text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
