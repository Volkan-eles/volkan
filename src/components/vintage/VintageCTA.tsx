
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Film } from 'lucide-react';

const VintageCTA = () => {
  return (
    <section className="bg-gradient-to-r from-amber-700 to-amber-500 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Film className="h-12 w-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6">
            Create Nostalgic Photo Memories
          </h2>
          <p className="text-lg text-white/90 mb-8 font-light">
            Experience the charm of vintage photography with our digital photobooth
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-amber-700 hover:bg-white/90 font-serif"
              asChild
            >
              <Link to="/vintage-photobooth/demo">
                Try Vintage Booth <ArrowRight className="ml-1 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 font-serif"
              asChild
            >
              <Link to="/pricing">
                See Pricing Options
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 text-white/80 italic font-serif">
            "Bringing back the nostalgic feel of vintage photo booths with modern technology"
          </div>
        </div>
      </div>
    </section>
  );
};

export default VintageCTA;
