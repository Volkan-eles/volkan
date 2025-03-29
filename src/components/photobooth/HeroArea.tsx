
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroArea = () => {
  const scrollToPhotobooth = () => {
    const photoboothElement = document.getElementById('photobooth-area');
    if (photoboothElement) {
      photoboothElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return <div className="relative w-full overflow-hidden py-14 mb-8">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-pink-400 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('/lovable-uploads/3fc22a76-7d7a-4617-b0df-6998c07b60ea.png')] bg-cover bg-center opacity-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 animate-fade-in">
            ✨ Create Memorable Photo Strips
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Pica Pica Booth | Pica Photobooth</h1>
          <p className="text-lg text-white/80 mb-8">
            Capture magical moments with our virtual photobooth. Take fun photos, customize your background, and download your photo strip to share with friends.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={scrollToPhotobooth} size="lg" className="bg-white text-purple-600 hover:bg-white/90 shadow-lg transition-all hover:shadow-xl">
              Start Taking Photos
            </Button>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Go to Dashboard
              </Button>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex justify-center animate-bounce cursor-pointer" onClick={scrollToPhotobooth}>
            <ChevronDown className="h-8 w-8 text-white/70" />
          </div>
        </div>
      </div>
    </div>;
};

export default HeroArea;
