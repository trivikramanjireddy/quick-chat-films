import WhatsAppIcon from './WhatsAppIcon';
import mobileImg from '@/assets/pricing/mobile.png';
import cameraImg from '@/assets/pricing/camera.png';
import droneImg from '@/assets/pricing/drone.png';
import notesImg from '@/assets/pricing/notes.png';

const WHATSAPP_LINK = 'https://wa.me/919493668321';

const PricingSection = ({
  image,
  alt,
  whatsappMessage,
  ctaText,
}: {
  image: string;
  alt: string;
  whatsappMessage: string;
  ctaText: string;
}) => {
  const encoded = encodeURIComponent(whatsappMessage);

  return (
    <section className="relative w-full">
      <img
        src={image}
        alt={alt}
        className="w-full h-auto block"
      />
      {/* CTA overlay at bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 md:bottom-10">
        <a
          href={`${WHATSAPP_LINK}?text=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hero inline-flex items-center gap-2 px-8 py-3 text-base md:text-lg shadow-2xl"
        >
          <WhatsAppIcon className="w-5 h-5" />
          {ctaText}
        </a>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <div className="bg-background">
      <PricingSection
        image={mobileImg}
        alt="Flagship Mobile Shoot Pricing"
        whatsappMessage="Hi! I'm interested in your Flagship Mobile shoot package starting at ₹3,999."
        ctaText="Book Mobile Shoot"
      />
      <PricingSection
        image={cameraImg}
        alt="Professional Camera Shoot Pricing"
        whatsappMessage="Hi! I'm interested in your Professional Camera shoot package starting at ₹7,999."
        ctaText="Book Camera Shoot"
      />
      <PricingSection
        image={droneImg}
        alt="Drone & Camera Shoot Pricing"
        whatsappMessage="Hi! I'm interested in your Drone & Camera shoot package starting at ₹15,999."
        ctaText="Book Drone Shoot"
      />
      <PricingSection
        image={notesImg}
        alt="Terms and Conditions"
        whatsappMessage="Hi! I would like to discuss pricing and terms for my project."
        ctaText="Discuss on WhatsApp"
      />
    </div>
  );
};

export default Pricing;
