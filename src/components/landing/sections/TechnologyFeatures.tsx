
import React from 'react';
import { Shield, GitBranch, Layout } from 'lucide-react';

const TechnologyFeatures = () => {
  return (
    <div className="mt-16 p-6 bg-white rounded-xl shadow-sm border border-purple-100 transform transition-all duration-500 hover:shadow-lg">
      <h3 className="text-2xl font-semibold text-center mb-6 text-purple-800">Advanced Technology</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="flex items-start transform transition-all duration-300 hover:translate-x-2 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-10 w-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 animate-pulse">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Privacy Protection</h4>
            <p className="text-sm text-gray-600">Your photos stay private and secure with our advanced encryption</p>
          </div>
        </div>
        
        <div className="flex items-start transform transition-all duration-300 hover:translate-x-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-10 w-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 animate-pulse">
            <GitBranch className="h-5 w-5 text-white" />
          </div>
          <div>
            <h4 className="font-medium mb-1">AI Enhancement</h4>
            <p className="text-sm text-gray-600">Smart image processing for professional-quality results</p>
          </div>
        </div>
        
        <div className="flex items-start transform transition-all duration-300 hover:translate-x-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-10 w-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 animate-pulse">
            <Layout className="h-5 w-5 text-white" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Responsive Design</h4>
            <p className="text-sm text-gray-600">Works perfectly on all devices - mobile, tablet and desktop</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyFeatures;
