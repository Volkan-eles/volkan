
import React from 'react';
import { Sparkles, Info } from 'lucide-react';

const IdolPanel: React.FC = () => {
  return (
    <div className="mt-4 text-center text-sm text-gray-300 animate-fade-in p-2">
      <div className="bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 p-3 rounded-lg">
        <Sparkles className="h-5 w-5 mx-auto mb-2 text-violet-300" />
        <p className="mb-3 font-medium text-white/90">Choose your favorite stickers</p>
        
        <div className="bg-blue-900/30 text-blue-100 p-2 rounded mb-3 text-xs flex items-start">
          <Info className="h-4 w-4 mr-1 flex-shrink-0 mt-0.5" />
          <p className="text-left">Our stickers are designed to enhance your photos with creative elements</p>
        </div>
        
        <div className="grid grid-cols-3 gap-3 mt-3">
          <div className="p-3 border border-[#333] rounded-lg text-center hover:bg-[#333] transition-all duration-200 hover:border-violet-500 cursor-pointer backdrop-blur-sm bg-black/30">
            <span>Coming soon</span>
          </div>
          <div className="p-3 border border-[#333] rounded-lg text-center hover:bg-[#333] transition-all duration-200 hover:border-violet-500 cursor-pointer backdrop-blur-sm bg-black/30">
            <span>Coming soon</span>
          </div>
          <div className="p-3 border border-[#333] rounded-lg text-center hover:bg-[#333] transition-all duration-200 hover:border-violet-500 cursor-pointer backdrop-blur-sm bg-black/30">
            <span>Coming soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdolPanel;
