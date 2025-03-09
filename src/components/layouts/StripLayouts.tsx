
import React, { useEffect, useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { LayoutProps } from './index';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Helper function to process photo with overlay if needed
const processPhoto = (photo: string, overlayImage: HTMLImageElement | null): string => {
  return photo;
};

// Classic Strip Layout (4 Photos)
export const ClassicStripLayout: React.FC<LayoutProps> = ({ photos, backgroundColor = 'white', overlayImage = null }) => (
  <div className={`flex-1 flex flex-col p-3 gap-3 ${backgroundColor !== 'bg-white' ? backgroundColor : ''}`}>
    {photos.map((photo, index) => (
      <div key={index} className="relative h-1/4">
        <div className="w-full h-full rounded-md overflow-hidden">
          <AspectRatio ratio={4/3}>
            <img 
              src={photo} 
              alt={`Photo ${index + 1}`} 
              className="w-full h-full object-cover" 
            />
          </AspectRatio>
        </div>
        <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
          <MoreHorizontal size={16} />
        </button>
      </div>
    ))}
    
    {/* Text placement at bottom */}
    <div className="text-center mt-2">
      <p className={`text-sm font-medium ${backgroundColor !== 'bg-white' ? 'text-white' : 'text-black'}`}>MEMORIES</p>
      <p className={`text-xs ${backgroundColor !== 'bg-white' ? 'text-white' : 'text-black'}`}>2024.06.10</p>
    </div>
  </div>
);

// Vertical Strip Layout (4 Photos)
export const VerticalStripLayout: React.FC<LayoutProps> = ({ photos, backgroundColor = 'white', overlayImage = null }) => (
  <div className={`flex-1 p-3 ${backgroundColor !== 'bg-white' ? backgroundColor : ''}`}>
    <div className="h-full flex flex-col gap-3">
      {photos.map((photo, index) => (
        <div key={index} className="relative h-1/4">
          <div className="w-full h-full rounded-md overflow-hidden">
            <AspectRatio ratio={4/3}>
              <img 
                src={photo} 
                alt={`Photo ${index + 1}`} 
                className="w-full h-full object-cover" 
              />
            </AspectRatio>
          </div>
          <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
            <MoreHorizontal size={16} />
          </button>
        </div>
      ))}
      
      {/* Text placement at bottom */}
      <div className="text-center mt-2">
        <p className={`text-sm font-medium ${backgroundColor !== 'bg-white' ? 'text-white' : 'text-black'}`}>MEMORIES</p>
        <p className={`text-xs ${backgroundColor !== 'bg-white' ? 'text-white' : 'text-black'}`}>2024.06.10</p>
      </div>
    </div>
  </div>
);

// Elegant Strip Layout (4 Photos)
export const ElegantStripLayout: React.FC<LayoutProps> = ({ photos, backgroundColor = 'white', overlayImage = null }) => (
  <div className={`flex-1 flex flex-col p-5 gap-4 ${backgroundColor !== 'bg-white' ? backgroundColor : ''}`}>
    {/* Photo 1, 2, 3 */}
    {photos.slice(0, 3).map((photo, index) => (
      <div key={index} className="relative h-1/4">
        <div className="w-full h-full rounded-md overflow-hidden">
          <AspectRatio ratio={4/3}>
            <img 
              src={photo} 
              alt={`Photo ${index + 1}`} 
              className="w-full h-full object-cover" 
            />
          </AspectRatio>
        </div>
        <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
          <MoreHorizontal size={16} />
        </button>
      </div>
    ))}
    
    {/* Text Area */}
    <div className="h-1/4 flex flex-col items-center justify-center">
      <h2 className={`text-2xl uppercase font-semibold ${backgroundColor !== 'bg-white' ? 'text-white' : 'text-black'}`}>LIVE IN</h2>
      <h3 className={`text-3xl italic mt-1 ${backgroundColor !== 'bg-white' ? 'text-white' : 'text-black'}`}>THE moment</h3>
      <p className={`text-xs mt-2 ${backgroundColor !== 'bg-white' ? 'text-white' : 'text-black'}`}>2024.06.10</p>
    </div>
  </div>
);

// Large Vertical Layout (2 Photos)
export const LargeVerticalLayout: React.FC<LayoutProps> = ({ photos, backgroundColor = 'white', overlayImage = null }) => (
  <div className={`flex-1 p-3 ${backgroundColor !== 'bg-white' ? backgroundColor : ''}`}>
    <div className="h-full flex flex-col gap-3">
      {photos.map((photo, index) => (
        <div key={index} className="relative h-1/2">
          <div className="w-full h-full rounded-md overflow-hidden">
            <AspectRatio ratio={4/3}>
              <img 
                src={photo} 
                alt={`Photo ${index + 1}`} 
                className="w-full h-full object-cover" 
              />
            </AspectRatio>
          </div>
          <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
            <MoreHorizontal size={16} />
          </button>
        </div>
      ))}
      
      {/* Text placement at bottom */}
      <div className="text-center mt-2">
        <p className={`text-sm font-medium ${backgroundColor !== 'bg-white' ? 'text-white' : 'text-black'}`}>MEMORIES</p>
        <p className={`text-xs ${backgroundColor !== 'bg-white' ? 'text-white' : 'text-black'}`}>2024.06.10</p>
      </div>
    </div>
  </div>
);

export default ClassicStripLayout;
