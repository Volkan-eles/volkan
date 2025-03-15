
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Camera, Download } from 'lucide-react';

const WeddingHeroArea = () => {
  const scrollToPhotobooth = () => {
    const photoboothSection = document.getElementById('photobooth-area');
    if (photoboothSection) {
      photoboothSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-100 py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('/public/lovable-uploads/a1660f2b-1189-47b0-9d3c-9423b25df5e3.png')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="h-12 w-12 mx-auto mb-6 text-pink-400" />
          
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 text-gray-800">
            Wedding Photobooth
          </h1>
          
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-600">
            Capture your special day with elegant photo layouts
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-pink-400 hover:bg-pink-500 px-8 py-6 text-lg"
              onClick={scrollToPhotobooth}
            >
              <Camera className="mr-2 h-5 w-5" /> 
              Start Capturing
            </Button>
            
            <Button 
              variant="outline" 
              className="border-pink-400 text-pink-500 hover:text-pink-600 hover:bg-pink-50 px-8 py-6 text-lg"
            >
              <Download className="mr-2 h-5 w-5" /> 
              View Examples
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default WeddingHeroArea;
