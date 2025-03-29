
import React from 'react';
import { SquareUser, Heart, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

const IdolIntegration = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold text-center mb-8 text-purple-800">Digital Integration</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-sm p-6 border border-purple-100 hover:shadow-md transition-all">
          <div className="h-12 w-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white mb-4">
            <SquareUser className="h-6 w-6" />
          </div>
          <h4 className="text-lg font-semibold mb-2">Virtual Selfies</h4>
          <p className="text-gray-600">Take stylish photos using our virtual selfie technology with customizable elements.</p>
          <div className="mt-4 flex justify-end">
            <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
              Try now →
            </Button>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm p-6 border border-indigo-100 hover:shadow-md transition-all">
          <div className="h-12 w-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white mb-4">
            <Heart className="h-6 w-6" />
          </div>
          <h4 className="text-lg font-semibold mb-2">Favorite Photo Collection</h4>
          <p className="text-gray-600">Create a personalized collection of photo memories with your favorite styles.</p>
          <div className="mt-4 flex justify-end">
            <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700">
              Try now →
            </Button>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-xl shadow-sm p-6 border border-violet-100 hover:shadow-md transition-all">
          <div className="h-12 w-12 bg-gradient-to-r from-violet-400 to-fuchsia-500 rounded-full flex items-center justify-center text-white mb-4">
            <Mic className="h-6 w-6" />
          </div>
          <h4 className="text-lg font-semibold mb-2">Event Memories</h4>
          <p className="text-gray-600">Design event-themed photo strips with special lighting and official event assets.</p>
          <div className="mt-4 flex justify-end">
            <Button variant="ghost" size="sm" className="text-violet-600 hover:text-violet-700">
              Try now →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdolIntegration;
