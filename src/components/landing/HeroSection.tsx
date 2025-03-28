import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Instagram, Music, Camera, Award, ArrowRight, Star, Check } from 'lucide-react';

const HeroSection = () => {
  return <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Background elements - updated for better visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6] via-[#D946EF] to-[#EC4899] opacity-90"></div>
      <div className="absolute inset-0 bg-[url('/lovable-uploads/3fc22a76-7d7a-4617-b0df-6998c07b60ea.png')] bg-cover bg-center opacity-10"></div>
      
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-300 opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-violet-300 opacity-20 blur-3xl animate-pulse" style={{
      animationDelay: '1s'
    }}></div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 animate-fade-in">
              <Star className="h-4 w-4 text-yellow-300 fill-yellow-300" />
              <span>NEW: Wedding Photobooth Now Available!</span>
            </div>
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Create Magical Photo Memories
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg mx-auto md:mx-0">
              Take stunning virtual photo booth pictures. Customize, create, and share your perfect moments in seconds.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link to="/kpop-photo-booth" aria-label="Start creating photos">
                <Button size="lg" className="w-full sm:w-auto bg-white text-[#8B5CF6] hover:bg-white/90 shadow-lg transition-all hover:shadow-xl">
                  Start Creating Now
                </Button>
              </Link>
              <a href="#how-it-works" aria-label="Learn how the photo booth works">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10">
                  See How It Works
                </Button>
              </a>
            </div>
            
            {/* Feature indicators with icons */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                <Heart className="h-5 w-5 text-pink-300 mr-2" fill="currentColor" />
                <span className="text-white text-sm">Photo Frames</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                <Instagram className="h-5 w-5 text-pink-300 mr-2" />
                <span className="text-white text-sm">Easy Sharing</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                <Music className="h-5 w-5 text-pink-300 mr-2" />
                <span className="text-white text-sm">Creative Styles</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                <Camera className="h-5 w-5 text-pink-300 mr-2" />
                <span className="text-white text-sm">4 Booth Styles</span>
              </div>
            </div>
            
            {/* Limited promo banner */}
            <div className="mt-8 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm p-3 rounded-lg border border-white/10 max-w-md mx-auto md:mx-0">
              <p className="text-white text-sm font-medium flex items-center">
                <Check className="h-4 w-4 text-green-400 mr-2" /> Limited Time: Get 30% off Premium Plan
              </p>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            {/* 3D Floating Photo Strips */}
            <div className="relative w-full h-[500px]">
              <div className="absolute top-0 right-0 w-64 shadow-xl rounded-lg transform rotate-6 hover:rotate-0 transition-transform duration-300 z-30">
                <img alt="K-pop photo strip example" className="w-full h-auto rounded-lg" src="/lovable-uploads/3fc22a76-7d7a-4617-b0df-6998c07b60ea.png" />
              </div>
              <div className="absolute top-20 right-20 w-64 shadow-xl rounded-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300 z-20">
                <img alt="K-pop idol sample" className="w-full h-auto rounded-lg" src="/lovable-uploads/95c01b04-2c56-4d10-8223-831f4995f862.png" />
              </div>
              <div className="absolute top-40 right-40 w-64 shadow-xl rounded-lg transform rotate-12 hover:rotate-0 transition-transform duration-300 z-10">
                <img alt="K-pop idol sample" className="w-full h-auto rounded-lg" src="/lovable-uploads/036b7ff5-1d94-44f6-982f-2306826a8053.png" />
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute bottom-20 left-10 h-20 w-20 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 opacity-80 animate-bounce" style={{
              animationDuration: "3s"
            }}></div>
              <div className="absolute top-10 left-20 h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400 to-blue-600 opacity-80 animate-bounce" style={{
              animationDuration: "4s",
              animationDelay: "1s"
            }}></div>
              
              {/* Added floating buttons */}
              <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-all hover:scale-105 z-40">
                <p className="text-purple-600 text-sm font-medium">Try Wedding Booth</p>
                <ArrowRight className="h-4 w-4 text-purple-600 ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#f9fafb" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>;
};

export default HeroSection;
