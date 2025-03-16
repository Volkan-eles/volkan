
import React from 'react';
import { Button } from '@/components/ui/button';

const KpopCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create K-pop Inspired Photos?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of K-pop fans who are creating amazing photo memories with our booth technology.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8"
          >
            Try K-pop Booth Free
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 font-bold px-8"
          >
            Request Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KpopCTA;
