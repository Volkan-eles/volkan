
import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <div className="flex items-center mb-4">
      <svg className="text-pink-500 w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
    </div>
    <p className="text-gray-700 mb-4">{quote}</p>
    <div>
      <p className="font-semibold text-gray-800">{author}</p>
      <p className="text-gray-500 text-sm">{role}</p>
    </div>
  </div>
);

const PhotoboothTestimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-pink-600">What Our Users Say</h2>
          <p className="text-gray-600">Join thousands of fans creating memorable photo experiences</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Testimonial 
            quote="I love how easy it is to create photo strips with Pica Pica Booth! The stickers are so cute, and I can change the frame colors to match my aesthetic."
            author="Mina K."
            role="K-pop Fan"
          />
          <Testimonial 
            quote="Creating fan content has never been easier! I use Pica Pica Booth for all my social media posts. The quality is amazing."
            author="David L."
            role="Content Creator"
          />
          <Testimonial 
            quote="As someone who loves customizing everything, Pica Pica Booth gives me all the options I need to make my photo strips unique."
            author="Sarah J."
            role="Digital Artist"
          />
        </div>
      </div>
    </section>
  );
};

export default PhotoboothTestimonials;
