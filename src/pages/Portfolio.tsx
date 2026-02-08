import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowLeft, Play, X } from 'lucide-react';
import brandAdsImg from '@/assets/portfolio/brand-ads.jpg';
import foodImg from '@/assets/portfolio/food.jpg';
import reelsImg from '@/assets/portfolio/reels.jpg';
import weddingsImg from '@/assets/portfolio/weddings.jpg';
import corporateImg from '@/assets/portfolio/corporate.jpg';
import droneImg from '@/assets/portfolio/drone.jpg';

const WHATSAPP_LINK = 'https://wa.me/919493668321';

type Category = 'all' | 'brand-ads' | 'food' | 'reels' | 'weddings' | 'corporate' | 'drone';

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  image: string;
  videoUrl?: string;
}

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'brand-ads', label: 'Brand Ads' },
  { value: 'food', label: 'Food & Restaurants' },
  { value: 'reels', label: 'Reels' },
  { value: 'weddings', label: 'Weddings' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'drone', label: 'Drone' },
];

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Premium Brand Commercial', category: 'brand-ads', image: brandAdsImg },
  { id: 2, title: 'Fine Dining Experience', category: 'food', image: foodImg },
  { id: 3, title: 'Viral Instagram Reels', category: 'reels', image: reelsImg },
  { id: 4, title: 'Royal Wedding Film', category: 'weddings', image: weddingsImg },
  { id: 5, title: 'Corporate Event Coverage', category: 'corporate', image: corporateImg },
  { id: 6, title: 'Aerial Cinematography', category: 'drone', image: droneImg },
  { id: 7, title: 'Luxury Product Launch', category: 'brand-ads', image: brandAdsImg },
  { id: 8, title: 'Restaurant Promo Video', category: 'food', image: foodImg },
  { id: 9, title: 'Social Media Campaign', category: 'reels', image: reelsImg },
  { id: 10, title: 'Destination Wedding', category: 'weddings', image: weddingsImg },
  { id: 11, title: 'Business Conference', category: 'corporate', image: corporateImg },
  { id: 12, title: 'Real Estate Aerial Tour', category: 'drone', image: droneImg },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const whatsappMessage = encodeURIComponent('Hi! I would like to start a project with CineQuick.');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 nav-blur py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-display text-2xl md:text-3xl tracking-wider">
                CINE<span className="text-primary">QUICK</span>
              </span>
            </Link>

            <a
              href={`${WHATSAPP_LINK}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero text-sm px-4 py-2 md:px-6 md:py-3"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Start Your Project</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-4">
              OUR <span className="text-primary">PORTFOLIO</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our cinematic work across various categories. Each project showcases our commitment to visual excellence.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-secondary/80 border border-border'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedItem(item)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="w-7 h-7 text-primary-foreground ml-1" />
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs text-primary font-medium mb-1 uppercase tracking-wider">
                    {categories.find((c) => c.value === item.category)?.label}
                  </p>
                  <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Orange Border on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-xl transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your project and bring your vision to life with cinematic excellence.
            </p>
            <a
              href={`${WHATSAPP_LINK}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-flex"
            >
              <MessageCircle className="w-5 h-5" />
              Start Your Project on WhatsApp
            </a>
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedItem(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative max-w-4xl w-full aspect-video rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center mx-auto mb-4">
                  <Play className="w-10 h-10 text-primary-foreground ml-1" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-muted-foreground">Video coming soon</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} CineQuick. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
