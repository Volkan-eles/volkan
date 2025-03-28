
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const WeddingCTA = () => {
  return (
    <section className="bg-gradient-to-r from-pink-400 to-pink-600 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="h-12 w-12 fill-white/30 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6">
            Capture Beautiful Memories on Your Special Day
          </h2>
          <p className="text-lg text-white/90 mb-8 font-light">
            Let your guests create and share unforgettable photo moments with our elegant wedding photobooth
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-pink-600 hover:bg-white/90 font-serif"
              asChild
            >
              <Link to="/wedding-photobooth/demo">
                Try Wedding Booth Demo
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 font-serif"
              asChild
            >
              <Link to="/contact">
                Contact for Custom Options
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 text-white/80 italic font-serif">
            "Making wedding memories even more special, one photo at a time"
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingCTA;
