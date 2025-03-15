
import React from 'react';
import { Film } from 'lucide-react';

const VintageHeroArea: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-amber-700 to-yellow-600 text-white py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <Film className="h-12 w-12" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-serif">Little Vintage Photobooth</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
          Capture timeless memories with our retro-inspired photo booth experience.
        </p>
        <div className="mt-8">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            Classic Vintage Photo Experience
          </span>
        </div>
      </div>
    </section>
  );
};

export default VintageHeroArea;
