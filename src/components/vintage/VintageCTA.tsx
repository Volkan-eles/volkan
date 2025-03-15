
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Film } from 'lucide-react';

const VintageCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-700 to-yellow-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <Film className="h-12 w-12" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Bring Nostalgic Magic to Your Next Event</h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the charm of classic photography with our Little Vintage Photobooth - creating memories that stand the test of time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-white/90">
                Book Your Booth <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Try It Now
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold font-serif">1920s</div>
              <div className="text-white/80">To Present</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-serif">30K+</div>
              <div className="text-white/80">Vintage Photos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-serif">12+</div>
              <div className="text-white/80">Retro Filters</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-serif">100%</div>
              <div className="text-white/80">Nostalgic Fun</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VintageCTA;
