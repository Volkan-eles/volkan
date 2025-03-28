
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Camera, UserPlus, Share2, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-1 mb-3 rounded-full bg-purple-100 text-purple-600 text-xs font-medium px-3 py-1">
            <span className="uppercase tracking-wider">✓ SIMPLE PROCESS</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-purple-600">How It Works</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Create your own K-pop photo memories in just three simple steps
          </p>
        </div>
        
        {/* Step cards with connecting arrows */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="relative">
              <Card className="p-6 flex flex-col items-center text-center h-full shadow-sm border border-gray-100 relative bg-white rounded-xl">
                <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-5">
                  <Camera className="h-8 w-8 text-purple-500" />
                </div>
                
                <span className="flex items-center justify-center h-8 w-8 bg-purple-100 text-purple-600 rounded-full mb-3 font-bold text-xl">1</span>
                <h3 className="text-xl font-semibold mb-2">Take Photos</h3>
                <p className="text-gray-600 mb-4">Use your webcam to capture your best poses in real-time</p>
                
                <div className="mt-auto space-y-2 w-full">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>High-quality capture</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Multiple pose options</span>
                  </div>
                </div>
              </Card>
              <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <ArrowRight className="h-8 w-8 text-purple-300" />
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <Card className="p-6 flex flex-col items-center text-center h-full shadow-sm border border-gray-100 relative bg-white rounded-xl">
                <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-5">
                  <UserPlus className="h-8 w-8 text-purple-500" />
                </div>
                
                <span className="flex items-center justify-center h-8 w-8 bg-purple-100 text-purple-600 rounded-full mb-3 font-bold text-xl">2</span>
                <h3 className="text-xl font-semibold mb-2">Choose Your Idols</h3>
                <p className="text-gray-600 mb-4">Select from our collection of K-pop idol overlays and styles</p>
                
                <div className="mt-auto space-y-2 w-full">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>200+ idol options</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Multiple poses</span>
                  </div>
                </div>
              </Card>
              <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <ArrowRight className="h-8 w-8 text-purple-300" />
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <Card className="p-6 flex flex-col items-center text-center h-full shadow-sm border border-gray-100 relative bg-white rounded-xl">
                <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-5">
                  <Share2 className="h-8 w-8 text-purple-500" />
                </div>
                
                <span className="flex items-center justify-center h-8 w-8 bg-purple-100 text-purple-600 rounded-full mb-3 font-bold text-xl">3</span>
                <h3 className="text-xl font-semibold mb-2">Customize & Share</h3>
                <p className="text-gray-600 mb-4">Personalize your photo strip and download to share</p>
                
                <div className="mt-auto space-y-2 w-full">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Multiple formats</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Social sharing</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        
        {/* CTA section */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-4 max-w-xl mx-auto">
            <div className="py-2 px-4 bg-gray-100 rounded-lg flex-grow text-gray-700">
              Ready to create your own K-pop photo memories?
            </div>
            <Link to="/kpop-photo-booth">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                Try It Now →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
