
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Camera, 
  UserPlus, 
  Share2, 
  CheckCircle2, 
  ArrowDown, 
  Sparkles,
  Download
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <div className="inline-flex items-center justify-center p-1 mb-3 rounded-full bg-purple-100 text-purple-600 text-xs font-medium px-3 py-1">
          <Sparkles className="h-3.5 w-3.5 mr-1.5" />
          <span className="uppercase tracking-wider">Simple Process</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">How It Works</h2>
        <p className="text-lg text-gray-600 md:text-xl">Create your own K-pop photo memories in just three simple steps</p>
      </div>
      
      {/* Process flow with connecting lines and animated elements */}
      <div className="relative max-w-5xl mx-auto mb-16">
        {/* Connecting lines */}
        <div className="absolute top-28 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 hidden md:block" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-20 group-hover:opacity-40 blur transition duration-300 group-hover:duration-200"></div>
            <Card className="relative h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 bg-white rounded-xl overflow-hidden">
              <div className="p-6 flex flex-col items-center text-center h-full">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-400 flex items-center justify-center mb-5 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                
                <span className="flex items-center justify-center h-8 w-8 bg-pink-100 text-pink-600 rounded-full mb-3 font-bold text-xl">1</span>
                <h3 className="text-xl font-semibold mb-2">Take Photos</h3>
                <p className="text-gray-600 mb-4">Use your webcam to capture your best poses in real-time</p>
                
                <div className="mt-auto space-y-2 w-full">
                  <div className="flex items-center text-sm text-gray-600 p-2 rounded-lg bg-gray-50 group-hover:bg-pink-50 transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>High-quality capture</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 p-2 rounded-lg bg-gray-50 group-hover:bg-pink-50 transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Multiple pose options</span>
                  </div>
                </div>
              </div>
            </Card>
            <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
              <ArrowRight className="h-8 w-8 text-purple-400" />
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl opacity-20 group-hover:opacity-40 blur transition duration-300 group-hover:duration-200"></div>
            <Card className="relative h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 bg-white rounded-xl overflow-hidden">
              <div className="p-6 flex flex-col items-center text-center h-full">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-violet-400 flex items-center justify-center mb-5 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <UserPlus className="h-8 w-8 text-white" />
                </div>
                
                <span className="flex items-center justify-center h-8 w-8 bg-purple-100 text-purple-600 rounded-full mb-3 font-bold text-xl">2</span>
                <h3 className="text-xl font-semibold mb-2">Choose Your Idols</h3>
                <p className="text-gray-600 mb-4">Select from our collection of K-pop idol overlays and styles</p>
                
                <div className="mt-auto space-y-2 w-full">
                  <div className="flex items-center text-sm text-gray-600 p-2 rounded-lg bg-gray-50 group-hover:bg-purple-50 transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>200+ idol options</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 p-2 rounded-lg bg-gray-50 group-hover:bg-purple-50 transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Multiple poses</span>
                  </div>
                </div>
              </div>
            </Card>
            <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
              <ArrowRight className="h-8 w-8 text-purple-400" />
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-xl opacity-20 group-hover:opacity-40 blur transition duration-300 group-hover:duration-200"></div>
            <Card className="relative h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 bg-white rounded-xl overflow-hidden">
              <div className="p-6 flex flex-col items-center text-center h-full">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-violet-500 to-blue-400 flex items-center justify-center mb-5 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Share2 className="h-8 w-8 text-white" />
                </div>
                
                <span className="flex items-center justify-center h-8 w-8 bg-blue-100 text-blue-600 rounded-full mb-3 font-bold text-xl">3</span>
                <h3 className="text-xl font-semibold mb-2">Customize & Share</h3>
                <p className="text-gray-600 mb-4">Personalize your photo strip and download to share</p>
                
                <div className="mt-auto space-y-2 w-full">
                  <div className="flex items-center text-sm text-gray-600 p-2 rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Multiple formats</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 p-2 rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Social sharing</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Demo video or animated gif */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
        <div className="aspect-video bg-gray-100 relative overflow-hidden group">
          <img 
            src="/lovable-uploads/95c01b04-2c56-4d10-8223-831f4995f862.png" 
            alt="K-pop Frame in action" 
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-gray-900/20 flex flex-col items-center justify-center">
            <div className="text-center p-8 max-w-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-md">See the process in action</h3>
              <p className="text-gray-200 mb-6 drop-shadow-md">Watch how easy it is to create your own K-pop photo memories in just seconds</p>
              <Button variant="default" size="lg" className="bg-white hover:bg-gray-100 text-gray-900 shadow-xl hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300">
                Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce text-white">
              <ArrowDown className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="mt-12 text-center">
        <div className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 p-0.5 rounded-lg mb-6">
          <div className="bg-white px-4 py-1 rounded-md">
            <span className="text-sm font-medium bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">
              Ready to create your own K-pop photo memories?
            </span>
          </div>
        </div>
        
        <Link to="/dashboard">
          <Button size="lg" className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white shadow-md hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
            Try It Now <Download className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
