
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "This is the closest I'll ever get to taking photos with my bias! The overlays look so realistic!",
    author: "Min-ji Kim",
    role: "TWICE Fan",
    rating: 5,
    avatar: "https://placehold.co/100x100/efefef/8B5CF6?text=MK",
    location: "Seoul, South Korea"
  },
  {
    quote: "I love how easy it is to create photo strips with different layouts. Perfect for my K-pop fan account!",
    author: "David Chen",
    role: "BTS ARMY",
    rating: 5,
    avatar: "https://placehold.co/100x100/efefef/8B5CF6?text=DC",
    location: "Los Angeles, USA"
  },
  {
    quote: "The quality of the overlays is amazing. My friends couldn't believe these weren't taken in a real photo booth!",
    author: "Sarah Johnson",
    role: "NCT Enthusiast",
    rating: 4,
    avatar: "https://placehold.co/100x100/efefef/8B5CF6?text=SJ",
    location: "London, UK"
  },
  {
    quote: "Used this for our fan club meeting and everyone went crazy for it. The filters are surprisingly good too!",
    author: "Alex Patel",
    role: "BLACKPINK Fan",
    rating: 5,
    avatar: "https://placehold.co/100x100/efefef/8B5CF6?text=AP",
    location: "Toronto, Canada"
  }
];

const TestimonialCard = ({ testimonial, isActive }) => (
  <div className={`bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-500 transform ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-50'} h-full flex flex-col`}>
    <div className="flex justify-between items-start mb-6">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
        <Quote className="h-5 w-5 text-purple-600" />
      </div>
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
        ))}
      </div>
    </div>
    
    <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.quote}"</p>
    
    <div className="flex items-center mt-auto">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
        <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <p className="text-purple-600 text-sm">{testimonial.role}</p>
          <span className="hidden sm:inline mx-2 text-gray-300">•</span>
          <p className="text-gray-500 text-sm">{testimonial.location}</p>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(3);

  // Adjust display count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDisplayCount(1);
      } else if (window.innerWidth < 1024) {
        setDisplayCount(2);
      } else {
        setDisplayCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };

  // Get current testimonials to show
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < displayCount; i++) {
      const index = (activeIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600">
            Join thousands of K-pop fans who are creating amazing photo memories
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, idx) => (
              <TestimonialCard 
                key={`${activeIndex}-${idx}`} 
                testimonial={testimonial} 
                isActive={true}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-12 gap-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={handlePrev}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleNext}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
