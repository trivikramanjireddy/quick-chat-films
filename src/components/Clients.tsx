import samsonite from '@/assets/clients/samsonite.png';
import arokya from '@/assets/clients/arokya.png';
import relianceJewels from '@/assets/clients/reliance-jewels.png';
import ponds from '@/assets/clients/ponds.png';
import continental from '@/assets/clients/continental.png';
import mythri from '@/assets/clients/mythri.png';
import jiohotstar from '@/assets/clients/jiohotstar.png';
import netflix from '@/assets/clients/netflix.png';

const clientLogos = [
  { name: 'Samsonite', src: samsonite },
  { name: 'Arokya', src: arokya },
  { name: 'Reliance Jewels', src: relianceJewels },
  { name: "Pond's", src: ponds },
  { name: 'Continental Malgudi', src: continental },
  { name: 'Mythri Movie Makers', src: mythri },
  { name: 'JioHotstar', src: jiohotstar },
  { name: 'Netflix', src: netflix },
];

const Clients = () => {
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="section-cine bg-cine-dark overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Our Partners
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            TRUSTED BY BRANDS & BUSINESSES
          </h2>
        </div>
      </div>

      {/* Scrolling Logos */}
      <div className="scroll-container">
        <div className="scroll-track">
          {duplicatedLogos.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 w-48 h-24 rounded-lg bg-secondary/30 border border-border/50 flex items-center justify-center hover:border-primary/50 transition-colors px-4"
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-w-full max-h-16 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
