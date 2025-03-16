
import React from 'react';

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">What Fans Are Saying</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl shadow-md">
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author[0]}
                </div>
                <div className="ml-3">
                  <p className="font-bold text-purple-700">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KpopTestimonials;
