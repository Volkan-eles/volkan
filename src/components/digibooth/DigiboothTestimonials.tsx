
import React from 'react';
import { Star } from 'lucide-react';

const DigiboothTestimonials = () => {
  const testimonials = [
    {
      name: "Jason Chen",
      role: "Event Planner",
      quote: "Digibooth has transformed how we handle photo experiences at our events. The digital delivery is instant and our clients love it!",
      rating: 5
    },
    {
      name: "Sophia Rodriguez",
      role: "Marketing Director",
      quote: "We used Digibooth for our product launch and the branded templates gave us exactly the professional look we wanted.",
      rating: 5
    },
    {
      name: "Michael Wu",
      role: "Wedding Coordinator",
      quote: "My clients consistently rate the Digibooth experience as one of their favorite parts of their wedding day.",
      rating: 4
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Customer Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See what people are saying about their Digibooth experience
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
    <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default DigiboothTestimonials;
