const clientLogos = [
  { name: 'Client 1', placeholder: 'Brand A' },
  { name: 'Client 2', placeholder: 'Brand B' },
  { name: 'Client 3', placeholder: 'Brand C' },
  { name: 'Client 4', placeholder: 'Brand D' },
  { name: 'Client 5', placeholder: 'Brand E' },
  { name: 'Client 6', placeholder: 'Brand F' },
  { name: 'Client 7', placeholder: 'Brand G' },
  { name: 'Client 8', placeholder: 'Brand H' },
];

const Clients = () => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="section-cine bg-cine-dark overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        {/* Section Header */}
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
              className="flex-shrink-0 w-40 h-20 rounded-lg bg-secondary/50 border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
            >
              <span className="text-muted-foreground font-medium text-sm">
                {client.placeholder}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Note for user */}
      <p className="text-center text-muted-foreground/50 text-xs mt-8">
        Replace with your actual client logos (JPG format)
      </p>
    </section>
  );
};

export default Clients;
