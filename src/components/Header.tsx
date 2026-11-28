import { useState, useEffect, type MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose } from '@/components/ui/sheet';
import headerLogo from '@/assets/header-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/' || location.hash !== '#contact') return;
    const timer = window.setTimeout(() => {
      const target = document.getElementById('contact');
      if (!target) return;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: reduced ? 'auto' : 'smooth' });
    }, 750);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== '/') return;

    event.preventDefault();
    window.history.replaceState(null, '', '/#home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false);
    if (location.pathname !== '/') return;
    event.preventDefault();
    window.history.replaceState(null, '', '/#contact');
    window.setTimeout(() => {
      const target = document.getElementById('contact');
      if (!target) return;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: reduced ? 'auto' : 'smooth' });
    }, 350);
  };

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

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu" title="Open navigation menu" className="h-12 w-12 text-cta-orange transition-transform duration-300 hover:scale-105 hover:bg-cta-orange/10 hover:text-cta-orange motion-reduce:transform-none [&_svg]:size-7">
                <Menu strokeWidth={1.5} />
              </Button>
            </SheetTrigger>
            <SheetContent aria-describedby={undefined} className="flex w-full flex-col justify-center border-border bg-background px-6 sm:w-[32rem] sm:max-w-lg sm:px-10 motion-reduce:animate-none [&>button]:right-5 [&>button]:top-5 [&>button]:flex [&>button]:h-12 [&>button]:w-12 [&>button]:items-center [&>button]:justify-center [&>button]:text-cta-orange [&>button>svg]:h-6 [&>button>svg]:w-6">
              <SheetTitle className="sr-only">CineQuick navigation</SheetTitle>
              <nav aria-label="Main navigation" className="border-t border-border">
                <SheetClose asChild>
                  <Link to="/portfolio" className="group flex min-h-24 items-center justify-between gap-4 border-b border-border py-6 font-display text-4xl leading-tight text-foreground transition-colors duration-300 hover:text-cta-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta-orange sm:text-5xl">
                    <span>EXPLORE OUR WORKS</span><ArrowUpRight aria-hidden="true" className="h-6 w-6 shrink-0 text-cta-orange transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none" />
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/pricing" className="group flex min-h-24 items-center justify-between gap-4 border-b border-border py-6 font-display text-4xl text-foreground transition-colors duration-300 hover:text-cta-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta-orange sm:text-5xl">
                    <span>PRICING</span><ArrowUpRight aria-hidden="true" className="h-6 w-6 shrink-0 text-cta-orange transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none" />
                  </Link>
                </SheetClose>
                <Link to="/#contact" onClick={handleContactClick} className="group flex min-h-24 items-center justify-between gap-4 border-b border-border py-6 font-display text-4xl text-foreground transition-colors duration-300 hover:text-cta-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta-orange sm:text-5xl">
                  <span>CONTACT US</span><ArrowUpRight aria-hidden="true" className="h-6 w-6 shrink-0 text-cta-orange transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none" />
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;