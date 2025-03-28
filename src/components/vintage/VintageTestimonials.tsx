
import React from 'react';
import { Star } from 'lucide-react';

const VintageTestimonials = () => {
  const testimonials = [
    {
      name: "Eleanor James",
      role: "Wedding Photographer",
      quote: "The vintage filters are incredible. They add such an authentic retro feel to modern digital photos!",
      rating: 5
    },
    {
      name: "Thomas Wright",
      role: "Vintage Enthusiast",
      quote: "Finally found a digital photo booth that actually captures the essence of old photo booths. Love it!",
      rating: 5
    },
    {
      name: "Sarah Miller",
      role: "Event Planner",
      quote: "Used this for a 50s themed party and it was the highlight of the night. Everyone wanted copies of their photos.",
      rating: 4
    }
  ];
  
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-light mb-4 text-amber-900">What Our Customers Say</h2>
          <p className="text-lg text-amber-800/80 max-w-3xl mx-auto">
            Hear from people who love the authentic vintage experience of our photobooth
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  quote,
  rating
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md border border-amber-100">
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-amber-800 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-semibold text-amber-900 font-serif">{name}</p>
        <p className="text-amber-700 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default VintageTestimonials;
