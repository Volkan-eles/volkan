
import React from 'react';
import { MoreHorizontal } from 'lucide-react';

interface LayoutProps {
  photos: string[];
}

// Creative Overlap Layout (2 Photos)
export const CreativeOverlapLayout: React.FC<LayoutProps> = ({ photos }) => (
  <div className="flex-1 p-3 flex justify-center items-center relative">
    {/* First photo (rotated and in the back) */}
    <div className="absolute w-3/4 h-3/4 transform rotate-[-6deg] z-10">
      <img 
        src={photos[0] || ''} 
        alt="Photo 1" 
        className="w-full h-full object-cover rounded-md shadow-lg" 
      />
    </div>
    
    {/* Second photo (rotated the other way and in the front) */}
    <div className="absolute w-3/4 h-3/4 transform rotate-[4deg] z-20">
      <img 
        src={photos[1] || ''} 
        alt="Photo 2" 
        className="w-full h-full object-cover rounded-md shadow-lg" 
      />
      <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
        <MoreHorizontal size={16} />
      </button>
    </div>
    
    {/* Text placement at bottom-right */}
    <div className="absolute bottom-4 right-4 z-30 text-right">
      <p className="text-black text-sm font-medium bg-white/80 px-2 py-1 rounded-md">MEMORIES</p>
      <p className="text-black text-xs bg-white/80 px-2 py-1 rounded-md mt-1">2024.06.10</p>
    </div>
  </div>
);

// Full Frame Layout (1 Photo)
export const FullFrameLayout: React.FC<LayoutProps> = ({ photos }) => (
  <div className="flex-1 p-3 relative">
    <div className="relative h-full w-full">
      <img 
        src={photos[0] || ''} 
        alt="Full Photo" 
        className="w-full h-full object-cover rounded-md" 
      />
      <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
        <MoreHorizontal size={16} />
      </button>
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <h3 className="text-white text-2xl font-bold drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">MEMORIES</h3>
        <p className="text-white text-sm drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">2024.06.10</p>
      </div>
    </div>
  </div>
);
