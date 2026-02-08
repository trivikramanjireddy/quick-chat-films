import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Rahul Sharma',
    role: 'Founder, TechStart India',
    content:
      'CineQuick delivered an outstanding brand video that perfectly captured our vision. The quality exceeded our expectations, and the turnaround was incredibly fast!',
    rating: 5,
  },
  {
    name: 'Priya Menon',
    role: 'Restaurant Owner',
    content:
      "The food videography was absolutely stunning. Our social media engagement tripled after posting the videos they created. Highly recommend!",
    rating: 5,
  },
  {
    name: 'Amit & Sneha',
    role: 'Wedding Clients',
    content:
      'Our wedding film was nothing short of magical. They captured every emotion perfectly. We watch it again and again — truly a masterpiece.',
    rating: 5,
  },
  {
    name: 'Vikram Reddy',
    role: 'Marketing Director',
    content:
      "Professional, creative, and always on time. CineQuick has been our go-to video production partner for all corporate content.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-cine bg-cine-dark">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from the brands and creators we've worked with.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{review.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-muted-foreground text-sm">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
