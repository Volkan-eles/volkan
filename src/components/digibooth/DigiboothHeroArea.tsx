
import React from 'react';

const DigiboothHeroArea: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Digibooth Dietherdave | Digi Booth Photo Booth
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          The premium digital photo booth experience for events, weddings, parties, and corporate gatherings.
        </p>
        <div className="mt-8">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            Professional Digital Photo Booth Solution
          </span>
        </div>
      </div>
    </section>
  );
};

export default DigiboothHeroArea;
