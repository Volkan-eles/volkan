
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const WeddingCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="h-10 w-10 mx-auto mb-6 text-pink-400" />
          
          <h2 className="text-3xl font-serif font-light mb-6 text-gray-800">
            Make Your Special Day Even More Memorable
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Give your guests an unforgettable experience with our elegant wedding photobooth.
            Perfect for creating lasting memories that everyone will cherish.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Book for Your Wedding
            </Button>
            
            <Button 
              variant="outline" 
              className="border-pink-400 text-pink-500 hover:bg-pink-50 px-8 py-6 text-lg rounded-full"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingCTA;
