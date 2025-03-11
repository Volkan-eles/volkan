
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-lg text-gray-600">Create your own K-pop photo memories in just three simple steps</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
          <h3 className="text-xl font-semibold mb-2">Take Photos</h3>
          <p className="text-gray-600">Use your webcam to capture your best poses</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
          <h3 className="text-xl font-semibold mb-2">Choose Your Idols</h3>
          <p className="text-gray-600">Select from our collection of K-pop idol overlays</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
          <h3 className="text-xl font-semibold mb-2">Customize & Share</h3>
          <p className="text-gray-600">Personalize your photo strip and download to share</p>
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
