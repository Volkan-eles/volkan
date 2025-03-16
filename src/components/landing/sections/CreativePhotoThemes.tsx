
import React from 'react';
import { Music, Star, Gift } from 'lucide-react';

const CreativePhotoThemes = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold text-center mb-8 text-purple-800">Creative Photo Themes</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-5 border border-purple-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4 animate-pulse">
            <Music className="h-6 w-6" />
          </div>
          <h4 className="text-lg font-semibold mb-2">Concert Memories</h4>
          <p className="text-gray-600">Create concert-themed photo strips with stage lighting effects and concert backgrounds.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-5 border border-purple-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4 animate-pulse">
            <Star className="h-6 w-6" />
          </div>
          <h4 className="text-lg font-semibold mb-2">Backstage Pass</h4>
          <p className="text-gray-600">Design backstage-themed photos with VIP passes and exclusive behind-the-scenes looks.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-5 border border-purple-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4 animate-pulse">
            <Gift className="h-6 w-6" />
          </div>
          <h4 className="text-lg font-semibold mb-2">Fan Meet</h4>
          <p className="text-gray-600">Create fan meeting memories with special photo frames and fan meet backgrounds.</p>
        </div>
      </div>
    </div>
  );
};

export default CreativePhotoThemes;
