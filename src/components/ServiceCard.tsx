import { LucideIcon } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_LINK = 'https://wa.me/919493668321';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, index }: ServiceCardProps) => {
  const whatsappMessage = encodeURIComponent(`Hi! I'm interested in your ${title} service.`);
  
  return (
    <div
      className="service-card group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl mb-3 text-foreground">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* CTA */}
      <a
        href={`${WHATSAPP_LINK}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-300"
      >
        <WhatsAppIcon className="w-4 h-4" />
        Enquire on WhatsApp
      </a>
    </div>
  );
};

export default ServiceCard;
