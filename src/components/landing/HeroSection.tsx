
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Instagram, Music } from 'lucide-react';

const HeroSection = () => (
  <section className="relative overflow-hidden">
    {/* Background elements */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6] via-[#D946EF] to-[#EC4899] opacity-90"></div>
    <div className="absolute inset-0 bg-[url('/celebrity-photo-strip.png')] bg-repeat opacity-5"></div>
    
    {/* Animated circles */}
    <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-300 opacity-20 blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-violet-300 opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    
    <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 animate-fade-in">
            ✨ Your K-pop Dream Photos Await
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Create <span className="relative inline-block">
              <span className="relative z-10">Magical</span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-pink-400/30 rounded-full blur-sm"></span>
            </span> Photo Memories with K-pop Idols
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg mx-auto md:mx-0">
            Take stunning virtual photo booth pictures with your favorite K-pop idols. Customize, create, and share your perfect idol moments in seconds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link to="/dashboard">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#8B5CF6] hover:bg-white/90 shadow-lg transition-all hover:shadow-xl">
                Start Creating Now
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10">
                See How It Works
              </Button>
            </a>
          </div>
          
          <div className="mt-8 flex justify-center md:justify-start space-x-6">
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-pink-300 mr-2" fill="currentColor" />
              <span className="text-white/80 text-sm">100K+ Users</span>
            </div>
            <div className="flex items-center">
              <Instagram className="h-5 w-5 text-pink-300 mr-2" />
              <span className="text-white/80 text-sm">50K+ Shares</span>
            </div>
            <div className="flex items-center">
              <Music className="h-5 w-5 text-pink-300 mr-2" />
              <span className="text-white/80 text-sm">200+ Idols</span>
            </div>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          {/* 3D Floating Photo Strips */}
          <div className="relative w-full h-[500px]">
            <div className="absolute top-0 right-0 w-64 shadow-xl rounded-lg transform rotate-6 hover:rotate-0 transition-transform duration-300 z-30">
              <img src="/celebrity-photo-strip.png" alt="K-pop photo strip example" className="w-full h-auto rounded-lg" />
            </div>
            <div className="absolute top-20 right-20 w-64 shadow-xl rounded-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300 z-20">
              <img src="/JAEHYUN.png" alt="K-pop idol sample" className="w-full h-auto rounded-lg" />
            </div>
            <div className="absolute top-40 right-40 w-64 shadow-xl rounded-lg transform rotate-12 hover:rotate-0 transition-transform duration-300 z-10">
              <img src="/Karina.png" alt="K-pop idol sample" className="w-full h-auto rounded-lg" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute bottom-20 left-10 h-20 w-20 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 opacity-80 animate-bounce" style={{ animationDuration: "3s" }}></div>
            <div className="absolute top-10 left-20 h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400 to-blue-600 opacity-80 animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
      
      {/* Brands/Recognition Section */}
      <div className="mt-16 pt-8 border-t border-white/10">
        <p className="text-center text-white/60 text-sm mb-6">TRUSTED BY K-POP FANS WORLDWIDE</p>
        <div className="flex flex-wrap justify-center gap-8 opacity-70">
          <img src="https://placehold.co/120x40/ffffff/8B5CF6?text=HYBE" alt="HYBE" className="h-8" />
          <img src="https://placehold.co/120x40/ffffff/8B5CF6?text=SM+Ent" alt="SM Entertainment" className="h-8" />
          <img src="https://placehold.co/120x40/ffffff/8B5CF6?text=YG+Ent" alt="YG Entertainment" className="h-8" />
          <img src="https://placehold.co/120x40/ffffff/8B5CF6?text=JYP+Ent" alt="JYP Entertainment" className="h-8" />
          <img src="https://placehold.co/120x40/ffffff/8B5CF6?text=KCON" alt="KCON" className="h-8" />
        </div>
      </div>
    </div>
    
    {/* Wave divider */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#f9fafb" preserveAspectRatio="none">
        <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
      </svg>
    </div>
  </section>
);

export default HeroSection;
