
import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-lg text-gray-600">Join thousands of happy K-pop fans creating memories with their favorite idols</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <TestimonialCard 
          quote="This is the closest I'll ever get to taking photos with my bias! The overlays look so realistic!"
          author="Min-ji Kim"
          role="TWICE Fan"
        />
        <TestimonialCard 
          quote="I love how easy it is to create photo strips with different layouts. Perfect for my K-pop fan account!"
          author="David Chen"
          role="BTS ARMY"
        />
        <TestimonialCard 
          quote="The quality of the overlays is amazing. My friends couldn't believe these weren't taken in a real photo booth!"
          author="Sarah Johnson"
          role="NCT Enthusiast"
        />
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
