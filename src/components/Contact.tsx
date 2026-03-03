import { Mail, Instagram, Youtube, Facebook, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_LINK = 'https://wa.me/919493668321';

const Contact = () => {
  return (
    <section id="contact" className="section-cine bg-cine-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            LET'S CREATE <span className="text-gradient-orange">TOGETHER</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Ready to bring your vision to life? Reach out to us on WhatsApp or drop us an email.
            We'd love to hear about your project.
          </p>

          {/* Primary CTA */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero inline-flex mb-12"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Chat on WhatsApp
          </a>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:contact@cinequick.in"
              className="service-card flex items-center justify-center gap-4 hover:border-primary/50"
            >
              <Mail className="w-6 h-6 text-primary" />
              <span className="text-foreground">contact@cinequick.in</span>
            </a>
            <div className="service-card flex items-center justify-center gap-4">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-foreground">India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
