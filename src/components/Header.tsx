import { useState, useEffect } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import headerLogo from '@/assets/header-logo.png';

const WHATSAPP_LINK = 'https://wa.me/919493668321?text=Hi%20CineQuick!%20I%27d%20like%20to%20discuss%20a%20video%20project.';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== '/') return;

    event.preventDefault();
    window.history.replaceState(null, '', '/#home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-blur py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <a
            href="/#home"
            onClick={handleLogoClick}
            className="flex shrink-0 items-center transition-opacity duration-300 hover:opacity-80"
            aria-label="CineQuick home"
          >
            <img src={headerLogo} alt="CineQuick" className="h-9 w-auto sm:h-11 md:h-12" />
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero whitespace-nowrap px-4 py-2.5 text-sm sm:px-6 sm:py-3"
            aria-label="Chat with CineQuick on WhatsApp"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp Us</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
