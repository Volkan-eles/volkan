
import React from 'react';

const KpopHeroArea: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Digital Photo Booth</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">Create exciting photo memories in our digital photo booth. Customize your shots with fun frames, stickers, and effects.</p>
        <div className="mt-8">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            Pop-Style Digital Photo Booth
          </span>
        </div>
      </div>
    </section>
  );
};

export default KpopHeroArea;
