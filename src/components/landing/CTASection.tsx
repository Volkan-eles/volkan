
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star, Heart } from 'lucide-react';

const CTASection = () => (
  <section className="py-16 bg-gradient-to-r from-pink-500 to-violet-500 text-white relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute top-0 left-0 right-0 bottom-0">
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white opacity-5"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-white opacity-5"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white opacity-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-white opacity-10"></div>
    </div>
    
    <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
      <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-6">
        <Star className="h-4 w-4 text-yellow-300 fill-yellow-300" />
        <span className="text-sm font-medium">4.9/5 from over 1,000+ fans</span>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your K-pop Memories?</h2>
      <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
        Join thousands of K-pop fans already creating amazing photo memories with their favorite idols
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        <Link to="/dashboard">
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all">
            Start Creating For Free
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Link to="/vintage-photobooth">
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
            Try Vintage Style
          </Button>
        </Link>
      </div>
      
      {/* Testimonial snippet in CTA */}
      <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <Heart className="h-10 w-10 text-pink-300" fill="currentColor" />
          </div>
          <div className="text-left">
            <p className="italic text-white/90 text-sm">"This is the closest I'll ever get to taking photos with my bias! The overlays look so realistic. I love it!"</p>
            <div className="mt-2 flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-300 fill-yellow-300" />
                ))}
              </div>
              <span className="ml-2 text-xs text-white/70">Min-ji Kim, TWICE Fan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
