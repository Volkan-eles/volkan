
import React from 'react';
import { Sparkles } from 'lucide-react';

const IdolPanel: React.FC = () => {
  return (
    <div className="mt-4 text-center text-sm text-gray-300 animate-fade-in p-2">
      <div className="bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 p-3 rounded-lg">
        <Sparkles className="h-5 w-5 mx-auto mb-2 text-violet-300" />
        <p className="mb-3 font-medium text-white/90">Choose your favorite K-pop idol</p>
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
