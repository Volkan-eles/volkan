
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Camera, Image, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-400"></div>
      
      {/* Background circle elements */}
      <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-purple-400/40 blur-sm"></div>
      <div className="absolute bottom-40 left-1/4 w-32 h-32 rounded-full bg-purple-300/30 blur-md"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <span>NEW: Wedding Photobooth Now Available!</span>
            </div>
            
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Create Magical Photo Memories
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Take stunning virtual photo booth pictures. Customize, create, and share your perfect moments in seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/kpop-photo-booth">
                <Button size="lg" className="w-full sm:w-auto bg-white text-purple-600 hover:bg-white/90">
                  Start Creating Now
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10">
                  See How It Works
                </Button>
              </a>
            </div>
            
            {/* Feature Icons */}
            <div className="flex flex-wrap gap-6 mt-2">
              <div className="flex items-center text-white gap-2">
                <Heart className="h-5 w-5" />
                <span>Photo Frames</span>
              </div>
              <div className="flex items-center text-white gap-2">
                <Image className="h-5 w-5" />
                <span>Easy Sharing</span>
              </div>
              <div className="flex items-center text-white gap-2">
                <Star className="h-5 w-5" />
                <span>Creative Styles</span>
              </div>
              <div className="flex items-center text-white gap-2">
                <Camera className="h-5 w-5" />
                <span>4 Booth Styles</span>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            {/* Photo strip mockup image */}
            <div className="relative">
              <img 
                src="/lovable-uploads/475cc827-38fe-46c1-8ea7-5a48e94b6a74.png" 
                alt="Photo booth strip examples" 
                className="relative z-10 max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
