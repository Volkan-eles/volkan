
import React from 'react';
import { Star } from 'lucide-react';

const VintageTestimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gradient-to-r from-amber-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-3 font-serif">What Our Customers Say</h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            Join others who've experienced the magic of our Little Vintage Photobooth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TestimonialCard 
            name="Eleanor James"
            role="Wedding Planner"
            quote="The Little Vintage Photobooth was the highlight of our wedding. The sepia filters and old-time frames really captured the romantic atmosphere we wanted."
            rating={5}
          />
          
          <TestimonialCard 
            name="Richard Thompson"
            role="Corporate Event Manager"
            quote="Our 1950s themed corporate party was complete with this amazing vintage photobooth. Our employees couldn't get enough of the retro experience."
            rating={5}
          />
          
          <TestimonialCard 
            name="Sophia Garcia"
            role="Birthday Party Host"
            quote="The aged paper effects and vintage filters made my 30th birthday photos look like treasured family heirlooms. Absolutely magical!"
            rating={5}
          />
          
          <TestimonialCard 
            name="Marcus Williams"
            role="Reunion Organizer"
            quote="For our high school reunion, the Little Vintage Photobooth provided the perfect nostalgic touch. Everyone loved how the photos had that authentic retro feel."
            rating={5}
          />
          
          <TestimonialCard 
            name="Alice Chen"
            role="Gallery Owner"
            quote="I used the Little Vintage Photobooth for my gallery opening, and the artistic quality of the photos was remarkable. The vintage aesthetic perfectly complemented our exhibition."
            rating={5}
          />
          
          <TestimonialCard 
            name="Samuel Johnson"
            role="Festival Coordinator"
            quote="Our vintage festival incorporated this photobooth, and it became the most popular attraction. The authentic film-like quality transported people back in time."
            rating={5}
          />
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

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, quote, rating }) => {
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
