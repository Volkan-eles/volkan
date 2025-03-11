
import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { LayoutProps } from './index';

// Classic Strip Layout (4 Photos)
export const ClassicStripLayout: React.FC<LayoutProps> = ({
  photos,
  backgroundColor = 'transparent'
}) => {
  // Helper function to handle both string and object photo types
  const getSrc = (photo: string | { src: string; index: number }) => {
    if (typeof photo === 'string') {
      return photo;
    }
    return photo.src;
  };
  
  const bgColorClass = backgroundColor !== 'transparent' && backgroundColor !== 'white' ? backgroundColor : '';
  
  return <div className={`flex-1 flex flex-col p-3 gap-4 ${bgColorClass}`}>
      {photos.map((photo, index) => (
        <div key={index} className="relative aspect-square w-[90%] mx-auto">
          <img 
            src={getSrc(photo)} 
            alt={`Photo ${index + 1}`} 
            className="w-full h-full object-cover rounded-md shadow-sm" 
          />
        </div>
      ))}
    </div>;
};

// Vertical Strip Layout (4 Photos)
export const VerticalStripLayout: React.FC<LayoutProps> = ({
  photos,
  backgroundColor = 'transparent'
}) => {
  // Helper function to handle both string and object photo types
  const getSrc = (photo: string | { src: string; index: number }) => {
    if (typeof photo === 'string') {
      return photo;
    }
    return photo.src;
  };
  
  const bgColorClass = backgroundColor !== 'transparent' && backgroundColor !== 'white' ? backgroundColor : '';
  
  return <div className={`flex-1 p-3 ${bgColorClass}`}>
      <div className="h-full flex flex-col gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative aspect-square w-[90%] mx-auto">
            <img 
              src={getSrc(photo)} 
              alt={`Photo ${index + 1}`} 
              className="w-full h-full object-cover rounded-md shadow-sm" 
            />
          </div>
        ))}
      </div>
    </div>;
};

// Elegant Strip Layout (4 Photos)
export const ElegantStripLayout: React.FC<LayoutProps> = ({
  photos,
  backgroundColor = 'transparent'
}) => {
  // Helper function to handle both string and object photo types
  const getSrc = (photo: string | { src: string; index: number }) => {
    if (typeof photo === 'string') {
      return photo;
    }
    return photo.src;
  };
  
  const bgColorClass = backgroundColor !== 'transparent' && backgroundColor !== 'white' ? backgroundColor : '';
  
  return <div className={`flex-1 flex flex-col p-5 gap-4 ${bgColorClass}`}>
      {/* Photo 1, 2, 3 */}
      {photos.slice(0, 3).map((photo, index) => (
        <div key={index} className="relative aspect-square w-[90%] mx-auto">
          <img 
            src={getSrc(photo)} 
            alt={`Photo ${index + 1}`} 
            className="w-full h-full object-cover rounded-md shadow-sm" 
          />
        </div>
      ))}
      
      {/* Empty space where text used to be */}
      <div className="h-1/5 flex flex-col items-center justify-center relative mt-2 mb-2">
        {/* No text elements here - they will be added via TextLayer */}
      </div>
    </div>;
};

// Large Vertical Layout (2 Photos)
export const LargeVerticalLayout: React.FC<LayoutProps> = ({
  photos,
  backgroundColor = 'transparent'
}) => {
  // Helper function to handle both string and object photo types
  const getSrc = (photo: string | { src: string; index: number }) => {
    if (typeof photo === 'string') {
      return photo;
    }
    return photo.src;
  };
  
  const bgColorClass = backgroundColor !== 'transparent' && backgroundColor !== 'white' ? backgroundColor : '';
  
  return <div className={`flex-1 p-3 ${bgColorClass}`}>
      <div className="h-full flex flex-col gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative aspect-square w-[90%] mx-auto">
            <img 
              src={getSrc(photo)} 
              alt={`Photo ${index + 1}`} 
              className="w-full h-full object-cover rounded-md shadow-sm" 
            />
            <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
              <MoreHorizontal size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>;
};
