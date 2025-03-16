
import React from 'react';
import { Card } from '@/components/ui/card';
import { Zap, Music, Sparkles } from 'lucide-react';

const FandomFeatures = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold text-center mb-8 text-purple-800">Fandom Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-purple-100 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="p-6 flex gap-4">
            <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 flex-shrink-0 animate-pulse">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Lightstick Effects</h4>
              <p className="text-gray-600">Add official lightstick effects and glows to your photos for authentic concert vibes.</p>
              <div className="mt-4 bg-gray-50 rounded-lg p-3 text-sm text-gray-500 flex items-center transform transition-all duration-300 hover:bg-pink-50">
                <Sparkles className="h-4 w-4 mr-2 text-purple-500" />
                Available for over 20+ K-pop fandoms
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-purple-100 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="p-6 flex gap-4">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 animate-pulse">
              <Music className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Era-Specific Themes</h4>
              <p className="text-gray-600">Choose from album-specific themes and concepts for each group's different eras.</p>
              <div className="mt-4 bg-gray-50 rounded-lg p-3 text-sm text-gray-500 flex items-center transform transition-all duration-300 hover:bg-blue-50">
                <Sparkles className="h-4 w-4 mr-2 text-purple-500" />
                Updated with every comeback
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FandomFeatures;
