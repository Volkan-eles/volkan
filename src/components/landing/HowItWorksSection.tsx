
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Camera, UserPlus, Share2, CheckCircle2 } from 'lucide-react';

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block bg-indigo-100 text-indigo-600 text-xs font-medium px-2.5 py-0.5 rounded-full mb-4">
          SIMPLE PROCESS
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-lg text-gray-600">Create your own K-pop photo memories in just three simple steps</p>
      </div>
      
      {/* Process flow with connecting lines */}
      <div className="relative max-w-5xl mx-auto">
        {/* Connecting line */}
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-[80%] h-0.5 bg-gray-200 hidden md:block"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center relative">
            <div className="w-16 h-16 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10">
              <Camera className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Take Photos</h3>
            <p className="text-gray-600">Use your webcam to capture your best poses in real-time</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <span>High-quality capture</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <span>Easy positioning</span>
              </div>
            </div>
          </div>
          
          <div className="text-center relative">
            <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10">
              <UserPlus className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Choose Your Idols</h3>
            <p className="text-gray-600">Select from our collection of K-pop idol overlays and styles</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <span>200+ idol options</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <span>Multiple poses</span>
              </div>
            </div>
          </div>
          
          <div className="text-center relative">
            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10">
              <Share2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customize & Share</h3>
            <p className="text-gray-600">Personalize your photo strip and download to share</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <span>Multiple formats</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <span>Social sharing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Demo video or animated gif placeholder */}
      <div className="mt-16 max-w-4xl mx-auto bg-gray-100 rounded-xl overflow-hidden shadow-md">
        <div className="aspect-video bg-gray-200 flex items-center justify-center">
          <div className="text-center p-8">
            <p className="text-lg font-medium text-gray-500 mb-4">See the process in action</p>
            <Button variant="outline" className="bg-white">
              Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Link to="/dashboard">
          <Button size="lg" className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600">
            Try It Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
