
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Camera, UserPlus, Share2, CheckCircle2, Sparkles, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  // Auto cycle through steps
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center justify-center p-1 mb-3 rounded-full bg-purple-100 text-purple-600 text-xs font-medium px-3 py-1 animate-bounce">
            <Sparkles className="h-3.5 w-3.5 mr-1.5" />
            <span className="uppercase tracking-wider">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">How It Works</h2>
          <p className="text-lg text-gray-600 md:text-xl">Create your own K-pop photo memories in just three simple steps</p>
        </div>
        
        {/* Process flow with connecting lines and animated elements */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Connecting lines with animation */}
          <div className="absolute top-28 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 hidden md:block">
            <div className="h-full bg-white transition-all duration-500 ease-in-out" style={{
            width: `${activeStep / 2 * 100}%`,
            opacity: 0.6
          }}></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className={`relative group transition-all duration-500 ${activeStep === 0 ? 'scale-105' : 'scale-100'}`}>
              <div className={`absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-20 ${activeStep === 0 ? 'opacity-40 animate-pulse' : 'group-hover:opacity-40'} blur transition duration-300 group-hover:duration-200`}></div>
              <Card className="relative h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 bg-white rounded-xl overflow-hidden">
                <div className="p-6 flex flex-col items-center text-center h-full">
                  <div className={`h-16 w-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-400 flex items-center justify-center mb-5 transform transition-transform duration-500 ${activeStep === 0 ? 'scale-110 rotate-3' : 'group-hover:scale-110 group-hover:rotate-3'}`}>
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                  
                  <span className="flex items-center justify-center h-8 w-8 bg-pink-100 text-pink-600 rounded-full mb-3 font-bold text-xl">1</span>
                  <h3 className="text-xl font-semibold mb-2">Take Photos</h3>
                  <p className="text-gray-600 mb-4">Use your webcam to capture your best poses in real-time</p>
                </div>
              </Card>
            </div>
            
            {/* Step 2 */}
            <div className={`relative group transition-all duration-500 ${activeStep === 1 ? 'scale-105' : 'scale-100'}`}>
              <div className={`absolute -inset-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl opacity-20 ${activeStep === 1 ? 'opacity-40 animate-pulse' : 'group-hover:opacity-40'} blur transition duration-300 group-hover:duration-200`}></div>
              <Card className="relative h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 bg-white rounded-xl overflow-hidden">
                <div className="p-6 flex flex-col items-center text-center h-full">
                  <div className={`h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-violet-400 flex items-center justify-center mb-5 transform transition-transform duration-500 ${activeStep === 1 ? 'scale-110 rotate-3' : 'group-hover:scale-110 group-hover:rotate-3'}`}>
                    <UserPlus className="h-8 w-8 text-white" />
                  </div>
                  
                  <span className="flex items-center justify-center h-8 w-8 bg-purple-100 text-purple-600 rounded-full mb-3 font-bold text-xl">2</span>
                  <h3 className="text-xl font-semibold mb-2">Choose Your Idols</h3>
                  <p className="text-gray-600 mb-4">Select from our collection of K-pop idol overlays and styles</p>
                </div>
              </Card>
            </div>
            
            {/* Step 3 */}
            <div className={`relative group transition-all duration-500 ${activeStep === 2 ? 'scale-105' : 'scale-100'}`}>
              <div className={`absolute -inset-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-xl opacity-20 ${activeStep === 2 ? 'opacity-40 animate-pulse' : 'group-hover:opacity-40'} blur transition duration-300 group-hover:duration-200`}></div>
              <Card className="relative h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 bg-white rounded-xl overflow-hidden">
                <div className="p-6 flex flex-col items-center text-center h-full">
                  <div className={`h-16 w-16 rounded-full bg-gradient-to-br from-violet-500 to-blue-400 flex items-center justify-center mb-5 transform transition-transform duration-500 ${activeStep === 2 ? 'scale-110 rotate-3' : 'group-hover:scale-110 group-hover:rotate-3'}`}>
                    <Share2 className="h-8 w-8 text-white" />
                  </div>
                  
                  <span className="flex items-center justify-center h-8 w-8 bg-blue-100 text-blue-600 rounded-full mb-3 font-bold text-xl">3</span>
                  <h3 className="text-xl font-semibold mb-2">Customize & Share</h3>
                  <p className="text-gray-600 mb-4">Personalize your photo strip and download to share</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
        
        {/* CTA section with improved styling */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 p-0.5 rounded-lg mb-6 animate-pulse">
            <div className="bg-white px-4 py-1 rounded-md">
              <span className="text-sm font-medium bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">
                Ready to create your own K-pop photo memories?
              </span>
            </div>
          </div>
          
          <Link to="/kpop-photo-booth">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white shadow-md hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 group relative overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              <span className="relative z-10 flex items-center">
                Try It Now <Download className="ml-2 h-5 w-5 animate-bounce" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};

export default HowItWorksSection;
