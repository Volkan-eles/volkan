
import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { LayoutProps } from './index';

// Vertical Duo Layout (2 Photos)
export const VerticalDuoLayout: React.FC<LayoutProps> = ({ photos, backgroundColor = 'white', overlayImage = null }) => (
  <div className={`flex-1 p-3 ${backgroundColor !== 'white' ? backgroundColor : ''}`}>
    <div className="h-full flex flex-col gap-3">
      {photos.map((photo, index) => (
        <div key={index} className="relative h-1/2">
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
      
      {/* Text placement at bottom */}
      <div className="text-center mt-2">
        <p className={`text-black text-sm font-medium ${backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md inline-block' : ''}`}>MEMORIES</p>
        <p className={`text-black text-xs ${backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md inline-block mt-1' : ''}`}>2024.06.10</p>
      </div>
    </div>
  </div>
);

// Horizontal Duo Layout (2 Photos)
export const HorizontalDuoLayout: React.FC<LayoutProps> = ({ photos, backgroundColor = 'white', overlayImage = null }) => (
  <div className={`flex-1 p-3 relative ${backgroundColor !== 'white' ? backgroundColor : ''}`}>
    <div className="h-full flex gap-3">
      {photos.map((photo, index) => (
        <div key={index} className="relative w-1/2 h-full">
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
        <p className={`text-black text-sm font-medium bg-white/80 px-2 py-1 rounded-md`}>MEMORIES</p>
        <p className={`text-black text-xs bg-white/80 px-2 py-1 rounded-md mt-1`}>2024.06.10</p>
      </div>
    </div>
  </div>
);
