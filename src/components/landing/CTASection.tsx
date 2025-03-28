
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star, Heart } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-pink-600 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Create Stunning Photo Memories Today
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join thousands of K-pop fans creating amazing photo experiences with our digital photobooth platform
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-purple-700 hover:bg-white/90"
              asChild
            >
              <Link to="/kpop-photo-booth">
                Try K-pop Booth <ChevronRight className="ml-1" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/pricing">
                See Pricing Options
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center text-white/80 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="mr-2">5.0 rating from 1000+ users</span>
            <Heart className="h-4 w-4 fill-pink-400 text-pink-400 mx-1" />
            <span>Loved by K-pop fans worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
