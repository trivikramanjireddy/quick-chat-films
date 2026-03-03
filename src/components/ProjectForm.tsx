import { useState } from 'react';
import { Send, Calendar, IndianRupee } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_LINK = 'https://wa.me/919493668321';

const services = [
  'Brand Commercials & Ads',
  'Product Launch & Promo Videos',
  'Food & Restaurant Films',
  'Corporate Announcements & Events',
  'Social Media Reels & Shorts',
  'Music & Cover Song Videos',
  'Luxury Weddings & Engagement Films',
  'Educational & Training Videos',
  'Hospitality & Real Estate Films',
];

const budgetRanges = [
  '₹5,000 – ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹5,00,000',
  '₹5,00,000 – ₹10,00,000',
];

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    services: [] as string[],
    budget: '',
    date: '',
    requirement: '',
  });

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format message for WhatsApp
    const message = `
🎬 *New Project Inquiry*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Services:* ${formData.services.join(', ') || 'Not specified'}
*Budget:* ${formData.budget || 'Not specified'}
*Date Required:* ${formData.date || 'Not specified'}

*Requirement:*
${formData.requirement || 'Not provided'}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.open(`${WHATSAPP_LINK}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="start-project" className="section-cine bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              Let's Work Together
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              START YOUR PROJECT
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tell us about your project and we'll get back to you on WhatsApp within 24 hours.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-foreground font-medium mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="input-cine"
                />
              </div>
              <div>
                <label className="block text-foreground font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                  className="input-cine"
                />
              </div>
            </div>

            {/* Services Multi-select */}
            <div>
              <label className="block text-foreground font-medium mb-4">
                Services You're Interested In
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {services.map((service) => (
                  <label
                    key={service}
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                      formData.services.includes(service)
                        ? 'border-primary bg-primary/10 text-foreground'
                        : 'border-border bg-secondary/30 text-muted-foreground hover:border-primary/50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        formData.services.includes(service)
                          ? 'border-primary bg-primary'
                          : 'border-muted-foreground'
                      }`}
                    >
                      {formData.services.includes(service) && (
                        <svg
                          className="w-3 h-3 text-primary-foreground"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget & Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-foreground font-medium mb-2">
                  <IndianRupee className="w-4 h-4 inline mr-1" />
                  Budget Range
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="input-cine"
                >
                  <option value="">Select your budget</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-foreground font-medium mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Date of Requirement
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="input-cine"
                />
              </div>
            </div>

            {/* Requirement */}
            <div>
              <label className="block text-foreground font-medium mb-2">
                Write About Your Requirement
              </label>
              <textarea
                value={formData.requirement}
                onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                placeholder="Describe your project, vision, and any specific requirements..."
                rows={5}
                className="input-cine resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn-hero w-full sm:w-auto">
                <Send className="w-5 h-5" />
                Submit via WhatsApp
              </button>
              <p className="text-muted-foreground text-sm mt-4">
                <WhatsAppIcon className="w-4 h-4 inline mr-1" />
                Your details will be sent directly to our WhatsApp
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProjectForm;
