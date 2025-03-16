
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PhotoboothCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Amazing Photo Memories?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of K-pop fans who are creating and sharing beautiful photo strips with Pica Pica Booth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              View Examples
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold">50K+</div>
              <div className="opacity-80">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">250K+</div>
              <div className="opacity-80">Photos Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">15+</div>
              <div className="opacity-80">Frame Styles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">4.9/5</div>
              <div className="opacity-80">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoboothCTA;
