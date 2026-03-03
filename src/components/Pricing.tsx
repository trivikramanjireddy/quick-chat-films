import WhatsAppIcon from './WhatsAppIcon';
import pricingMobileImg from '@/assets/pricing-mobile.jpg';
import pricingCameraImg from '@/assets/pricing-camera.jpg';
import pricingDroneImg from '@/assets/pricing-drone.jpg';
import pricingNotesImg from '@/assets/pricing-notes.jpg';

const WHATSAPP_LINK = 'https://wa.me/919493668321';

interface PricingCardProps {
  image: string;
  title: string;
  subtitle: string;
  startingPrice: string;
  perUnit: string;
  bulkOffers: { reels: string; pricePerReel: string; totalPrice: string }[];
  ctaText: string;
  index: number;
}

const PricingCard = ({
  image,
  title,
  subtitle,
  startingPrice,
  perUnit,
  bulkOffers,
  ctaText,
  index,
}: PricingCardProps) => {
  const whatsappMessage = encodeURIComponent(`Hi! I'm interested in your ${title} package.`);

  return (
    <div
      className="relative h-[600px] md:h-[700px] rounded-2xl overflow-hidden group animate-fade-in-up"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        {/* Title */}
        <p className="text-muted-foreground text-sm mb-2">Shoot with</p>
        <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">{subtitle}</h3>

        {/* Starting Price */}
        <div className="mb-6">
          <p className="text-foreground text-lg">
            Starts From <span className="text-primary font-bold text-2xl">{startingPrice}</span>
          </p>
          <p className="text-muted-foreground text-sm">{perUnit}</p>
        </div>

        {/* Bulk Offers */}
        <div className="space-y-2 mb-6">
          <p className="text-primary text-sm font-semibold mb-3">Bulk Offer:</p>
          {bulkOffers.map((offer, idx) => (
            <div key={idx} className="flex justify-between text-sm">
              <span className="text-foreground">{offer.reels} Reels</span>
              <span className="text-muted-foreground">
                {offer.pricePerReel}/- <span className="text-foreground">({offer.totalPrice}/-)</span>
              </span>
            </div>
          ))}
          <p className="text-muted-foreground text-xs mt-3">(Offer Price | Limited Shoots)</p>
        </div>

        {/* CTA Button */}
        <a
          href={`${WHATSAPP_LINK}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hero w-full justify-center"
        >
          <WhatsAppIcon className="w-5 h-5" />
          {ctaText}
        </a>
      </div>
    </div>
  );
};

const pricingData: Omit<PricingCardProps, 'index'>[] = [
  {
    image: pricingMobileImg,
    title: 'Flagship Mobile Shoot',
    subtitle: 'FLAGSHIP MOBILE',
    startingPrice: '₹3,000',
    perUnit: 'For One Short Video',
    bulkOffers: [
      { reels: '6', pricePerReel: '₹2,750', totalPrice: '₹16,500' },
      { reels: '8', pricePerReel: '₹2,500', totalPrice: '₹20,000' },
      { reels: '16', pricePerReel: '₹2,000', totalPrice: '₹32,000' },
    ],
    ctaText: 'Book on WhatsApp',
  },
  {
    image: pricingCameraImg,
    title: 'Professional Camera Shoot',
    subtitle: 'PROFESSIONAL CAMERA',
    startingPrice: '₹7,000',
    perUnit: 'For One Short Video',
    bulkOffers: [
      { reels: '4', pricePerReel: '₹6,000', totalPrice: '₹24,000' },
      { reels: '8', pricePerReel: '₹5,000', totalPrice: '₹40,000' },
      { reels: '16', pricePerReel: '₹4,500', totalPrice: '₹72,000' },
    ],
    ctaText: 'Enquire on WhatsApp',
  },
  {
    image: pricingDroneImg,
    title: 'Drone & Camera Shoot',
    subtitle: 'DRONE & CAMERA',
    startingPrice: '₹15,000',
    perUnit: 'For One Short Video',
    bulkOffers: [
      { reels: '4', pricePerReel: '₹13,500', totalPrice: '₹54,000' },
      { reels: '8', pricePerReel: '₹11,250', totalPrice: '₹90,000' },
      { reels: '16', pricePerReel: '₹10,000', totalPrice: '₹1,60,000' },
    ],
    ctaText: 'Get Quote on WhatsApp',
  },
];

const pricingNotes = [
  '50% advance payment is mandatory to confirm the booking',
  'Any additional requirements such as actors, props, special equipment, or permissions will be charged separately',
  'Remaining balance must be cleared on or before final delivery',
  'Location charges, travel, transport, and accommodation (if required) are not included',
  'Cancellation charges are non-refundable under any circumstances',
  'Packages and offer prices are valid only for bulk bookings and limited slots',
  'Final output style and references will be discussed and approved before the shoot',
  'Delivery timelines depend on number of reels and project complexity',
  'Raw footage will not be shared unless discussed and agreed in advance',
];

const Pricing = () => {
  const whatsappMessage = encodeURIComponent('Hi! I would like to discuss pricing for my project.');

  return (
    <section id="pricing" className="section-cine bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            TRANSPARENT <span className="text-primary">PRICING</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your project. All prices are transparent with no hidden fees.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pricingData.map((pricing, index) => (
            <PricingCard key={index} {...pricing} index={index} />
          ))}
        </div>

        {/* Notes Section */}
        <div
          className="relative rounded-2xl overflow-hidden animate-fade-in-up"
          style={{ animationDelay: '0.45s' }}
        >
          {/* Background Image */}
          <img
            src={pricingNotesImg}
            alt="Camera equipment"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/80" />

          {/* Content */}
          <div className="relative p-8 md:p-12">
            <h3 className="font-display text-3xl md:text-4xl text-primary mb-8">NOTE</h3>

            <ul className="space-y-4 mb-8">
              {pricingNotes.map((note, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm md:text-base">{note}</span>
                </li>
              ))}
            </ul>

            <a
              href={`${WHATSAPP_LINK}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-flex"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Discuss on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
