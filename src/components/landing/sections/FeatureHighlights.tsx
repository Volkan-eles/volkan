
import React from 'react';
import { Palette, Layout, Globe } from 'lucide-react';

const FeatureHighlights = () => {
  return (
    <div className="mt-16 grid md:grid-cols-3 gap-4">
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-md animate-fade-in" style={{ animationDelay: '100ms' }}>
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-10 w-10 rounded-full flex items-center justify-center mr-3 animate-pulse">
          <Palette className="h-5 w-5 text-white" />
        </div>
        <div>
          <h4 className="font-medium">Multiple Themes</h4>
          <p className="text-sm text-gray-600">Vintage, modern, cute styles</p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-md animate-fade-in" style={{ animationDelay: '200ms' }}>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-10 w-10 rounded-full flex items-center justify-center mr-3 animate-pulse">
          <Layout className="h-5 w-5 text-white" />
        </div>
        <div>
          <h4 className="font-medium">Flexible Layouts</h4>
          <p className="text-sm text-gray-600">4+ different strip formats</p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-md animate-fade-in" style={{ animationDelay: '300ms' }}>
        <div className="bg-gradient-to-r from-green-500 to-teal-500 h-10 w-10 rounded-full flex items-center justify-center mr-3 animate-pulse">
          <Globe className="h-5 w-5 text-white" />
        </div>
        <div>
          <h4 className="font-medium">Global Community</h4>
          <p className="text-sm text-gray-600">Fans from 50+ countries</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlights;
