
import React from 'react';
import { Star } from 'lucide-react';

const KpopTestimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "This K-pop photo booth is perfect for our fan meetings! Our members love taking photos with it.",
      author: "Jessica, Fan Club President",
      role: "Seoul Stars Fan Club"
    }, 
    {
      quote: "The filters are AMAZING! They make everyone look like they're ready for a K-pop debut!",
      author: "Min-ji",
      role: "K-pop Dance Instructor"
    }, 
    {
      quote: "We used the K-pop booth at our convention and the line was out the door all day!",
      author: "Robert Kim",
      role: "Event Organizer"
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">What K-pop Fans Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from K-pop enthusiasts who love our digital photo booth
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-purple-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-purple-400 fill-purple-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-purple-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KpopTestimonials;
