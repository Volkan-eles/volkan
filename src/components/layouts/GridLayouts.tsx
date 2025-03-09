
import React from 'react';
import { MoreHorizontal } from 'lucide-react';

interface LayoutProps {
  photos: string[];
}

// Grid Layout (4 Photos)
export const GridLayout: React.FC<LayoutProps> = ({ photos }) => (
  <div className="flex-1 p-3">
    <div className="grid grid-cols-2 grid-rows-2 h-full gap-3">
      {photos.map((photo, index) => (
        <div key={index} className="relative">
          <img 
            src={photo} 
            alt={`Photo ${index + 1}`} 
            className="w-full h-full object-cover rounded-md" 
          />
          <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
            <MoreHorizontal size={16} />
          </button>
        </div>
      ))}
      
      {/* Text placement at bottom-right */}
      <div className="absolute bottom-3 right-3 text-right">
        <p className="text-black text-sm font-medium bg-white/80 px-2 py-1 rounded-md">MEMORIES</p>
        <p className="text-black text-xs bg-white/80 px-2 py-1 rounded-md mt-1">2024.06.10</p>
      </div>
    </div>
  </div>
);

// Simple Grid Layout (4 Photos)
export const SimpleGridLayout: React.FC<LayoutProps> = ({ photos }) => (
  <div className="flex-1 p-3">
    <div className="grid grid-cols-2 grid-rows-2 h-full gap-2 relative">
      {photos.map((photo, index) => (
        <div key={index} className="relative">
          <img 
            src={photo} 
            alt={`Photo ${index + 1}`} 
            className="w-full h-full object-cover rounded-sm" 
          />
          <button className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-black bg-white/80 rounded-full">
            <MoreHorizontal size={14} />
          </button>
        </div>
      ))}
      
      {/* Text placement at center */}
      <div className="absolute bottom-4 left-0 right-0 mx-auto w-fit text-center">
        <p className="text-black text-sm font-medium bg-white/80 px-2 py-1 rounded-md">MEMORIES</p>
        <p className="text-black text-xs bg-white/80 px-2 py-1 rounded-md mt-1">2024.06.10</p>
      </div>
    </div>
  </div>
);

// Classic Grid Layout (4 Photos)
export const ClassicGridLayout: React.FC<LayoutProps> = ({ photos }) => (
  <div className="flex-1 p-4 relative">
    <div className="grid grid-cols-2 grid-rows-2 h-full gap-4">
      {photos.map((photo, index) => (
        <div key={index} className="relative border-2 border-black p-1">
          <img 
            src={photo} 
            alt={`Photo ${index + 1}`} 
            className="w-full h-full object-cover" 
          />
          <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
            <MoreHorizontal size={16} />
          </button>
        </div>
      ))}
      
      {/* Text placement at bottom-right */}
      <div className="absolute bottom-4 right-4 text-right">
        <p className="text-black text-sm font-medium">MEMORIES</p>
        <p className="text-black text-xs">2024.06.10</p>
      </div>
    </div>
  </div>
);
