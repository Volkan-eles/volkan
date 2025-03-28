
import React from 'react';
import { Heart } from 'lucide-react';

const WeddingTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah & Michael",
      date: "June 2023",
      quote: "Our guests couldn't stop talking about the wedding photobooth! It was such a hit and gave everyone a special keepsake to remember our day."
    },
    {
      name: "Jessica & David",
      date: "August 2023",
      quote: "The elegant design matched our wedding theme perfectly. The photos were high quality and the whole process was seamless. Highly recommended!"
    },
    {
      name: "Emily & Thomas",
      date: "October 2023",
      quote: "Working with KPop Photobooth for our wedding was one of the best decisions we made. The custom templates looked amazing with our wedding colors."
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-light mb-4 text-gray-800">What Couples Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories from couples who used our Wedding Photobooth for their special day
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-pink-400 mb-4">❝</div>
              <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                  <Heart className="h-5 w-5 text-pink-500" />
                </div>
                <div>
                  <p className="font-serif font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingTestimonials;
