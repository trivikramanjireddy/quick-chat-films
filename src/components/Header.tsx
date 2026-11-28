import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerLogo from '@/assets/header-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  const isPricingPage = location.pathname === '/pricing';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-blur py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <a
            href="/#home"
            onClick={handleLogoClick}
            className="flex shrink-0 items-center transition-opacity duration-300 hover:opacity-80"
            aria-label="CineQuick home"
          >
            <img src={headerLogo} alt="CineQuick" className="h-9 w-auto sm:h-11 md:h-12" />
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            {!isPricingPage && (
              <Link
                to="/pricing"
                className="whitespace-nowrap rounded-full border border-primary/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(255,106,0,0.45)] sm:px-5 sm:py-2 sm:text-xs"
                aria-label="View CineQuick pricing"
              >
                <span className="hidden sm:inline">View Pricing →</span>
                <span className="sm:hidden">Pricing →</span>
              </Link>
            )}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;