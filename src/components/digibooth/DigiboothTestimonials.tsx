
import React from 'react';
import { Star } from 'lucide-react';

const DigiboothTestimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers using Digibooth Dietherdave for their events
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TestimonialCard 
            name="Sarah Johnson"
            role="Wedding Planner"
            quote="Digibooth Dietherdave was the highlight of our wedding reception. Our guests couldn't stop talking about how much fun they had with it!"
            rating={5}
          />
          
          <TestimonialCard 
            name="Michael Chen"
            role="Corporate Event Manager"
            quote="We've used Digibooth for multiple company events. The customization options allow us to maintain our branding while giving employees a fun experience."
            rating={5}
          />
          
          <TestimonialCard 
            name="Emily Rodriguez"
            role="Birthday Party Host"
            quote="The photo quality is amazing, and the background removal feature made our photos look like they were taken in a professional studio."
            rating={5}
          />
          
          <TestimonialCard 
            name="David Thompson"
            role="Non-profit Director"
            quote="For our fundraising gala, Digibooth added a fun interactive element that donors loved. The digital sharing features helped us increase our social media presence."
            rating={5}
          />
          
          <TestimonialCard 
            name="Jessica Williams"
            role="Graduation Party Organizer"
            quote="So easy to set up and use! The interface is intuitive, and the photo quality exceeded our expectations."
            rating={5}
          />
          
          <TestimonialCard 
            name="Robert Kim"
            role="Festival Coordinator"
            quote="We integrated Digibooth into our annual festival, and it was a massive hit. The custom backgrounds and themes allowed attendees to create truly unique memories."
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
