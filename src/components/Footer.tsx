import { Instagram, Youtube, ChevronUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { INSTAGRAM_URL, YOUTUBE_URL } from '@/lib/links';
import footerLogo from '@/assets/footer-logo.png';

const WHATSAPP_LINK = 'https://wa.me/919493668321';

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#clients', label: 'Our Clients' },
  { href: '#why', label: 'Why CineQuick' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-4">
              <img src={footerLogo} alt="CineQuick" className="h-10" />
            </a>
            <p className="text-muted-foreground max-w-md mb-6">
              Premium video production studio delivering cinematic visuals with speed and
              precision. From brand ads to weddings, we tell powerful stories through video.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-cine inline-flex text-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4">QUICK LINKS</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4">CONNECT</h4>
            <div className="flex gap-4 mb-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-10 md:h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-10 md:h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <a
              href="mailto:contact@cinequick.in"
              className="text-muted-foreground hover:text-primary transition-colors block"
            >
              contact@cinequick.in
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} CineQuick. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-11 h-11 md:w-10 md:h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
