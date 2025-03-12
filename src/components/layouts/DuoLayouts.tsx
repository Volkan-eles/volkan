
import React from 'react';
import { LayoutProps } from './index';

// Helper function to get the src from either a string or an object
const getSrc = (photo: string | { src: string; index: number }, index: number) => {
  if (typeof photo === 'string') {
    return photo;
  }
  return photo.src;
};

// Big & Small Layout (3 Photos)
export const BigSmallLayout: React.FC<LayoutProps> = ({ 
  photos, 
  renderImage,
  backgroundColor = 'white',
  textColor = 'text-black'
}) => {
  const isDarkBackground = backgroundColor.includes('800') || 
                          backgroundColor.includes('900') || 
                          backgroundColor === 'bg-black' || 
                          backgroundColor.includes('500');
  const textColorClass = isDarkBackground ? 'text-white' : textColor;
  const textBgClass = isDarkBackground ? 'bg-black/20' : 'bg-white/80';
  
  return (
    <div className={`flex-1 p-3 ${backgroundColor !== 'white' ? backgroundColor : ''}`}>
      {/* Big photo (top) */}
      <div className="relative h-1/2 mb-3">
        {photos[0] && (renderImage ? 
          renderImage(typeof photos[0] === 'string' ? photos[0] : photos[0].src, 
            typeof photos[0] === 'string' ? 0 : photos[0].index, 
            "Photo 1", 
            "w-full h-full object-cover rounded-md") : 
          <img 
            src={getSrc(photos[0], 0)} 
            alt="Photo 1" 
            className="w-full h-full object-cover rounded-md" 
          />)
        }
      </div>
      
      {/* Two small photos (bottom) */}
      <div className="h-1/2 flex gap-3">
        <div className="relative w-1/2 h-full">
          {photos[1] && (renderImage ? 
            renderImage(typeof photos[1] === 'string' ? photos[1] : photos[1].src, 
              typeof photos[1] === 'string' ? 1 : photos[1].index, 
              "Photo 2", 
              "w-full h-full object-cover rounded-md") : 
            <img 
              src={getSrc(photos[1], 1)} 
              alt="Photo 2" 
              className="w-full h-full object-cover rounded-md" 
            />)
          }
        </div>
        <div className="relative w-1/2 h-full">
          {photos[2] && (renderImage ? 
            renderImage(typeof photos[2] === 'string' ? photos[2] : photos[2].src, 
              typeof photos[2] === 'string' ? 2 : photos[2].index, 
              "Photo 3", 
              "w-full h-full object-cover rounded-md") : 
            <img 
              src={getSrc(photos[2], 2)} 
              alt="Photo 3" 
              className="w-full h-full object-cover rounded-md" 
            />)
          }
        </div>
      </div>
      
      {/* Text placement at bottom-right */}
      <div className="text-right mt-2">
        <p className={`${textColorClass} text-sm font-medium ${backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md inline-block' : ''}`}>MEMORIES</p>
        <p className={`${textColorClass} text-xs ${backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md inline-block mt-1' : ''}`}>2024.06.10</p>
      </div>
    </div>
  );
};

// Vertical Duo Layout (2 Photos)
export const VerticalDuoLayout: React.FC<LayoutProps> = ({ 
  photos, 
  renderImage,
  backgroundColor = 'white',
  textColor = 'text-black'
}) => {
  const isDarkBackground = backgroundColor.includes('800') || 
                          backgroundColor.includes('900') || 
                          backgroundColor === 'bg-black' || 
                          backgroundColor.includes('500');
  const textColorClass = isDarkBackground ? 'text-white' : textColor;
  const textBgClass = isDarkBackground ? 'bg-black/20' : 'bg-white/80';
  
  return (
    <div className={`flex-1 p-3 ${backgroundColor !== 'white' ? backgroundColor : ''}`}>
      <div className="h-full flex flex-col gap-3">
        {photos.slice(0, 2).map((photo, idx) => (
          <div key={idx} className="relative h-1/2">
            {renderImage ? 
              renderImage(typeof photo === 'string' ? photo : photo.src, 
                typeof photo === 'string' ? idx : photo.index, 
                `Photo ${idx + 1}`, 
                "w-full h-full object-cover rounded-md") : 
              <img 
                src={getSrc(photo, idx)} 
                alt={`Photo ${idx + 1}`} 
                className="w-full h-full object-cover rounded-md" 
              />
            }
          </div>
        ))}
        
        {/* Text placement at bottom */}
        <div className="text-center mt-2">
          <p className={`${textColorClass} text-sm font-medium ${backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md inline-block' : ''}`}>MEMORIES</p>
          <p className={`${textColorClass} text-xs ${backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md inline-block mt-1' : ''}`}>2024.06.10</p>
        </div>
      </div>
    </div>
  );
};

// Horizontal Duo Layout (2 Photos)
export const HorizontalDuoLayout: React.FC<LayoutProps> = ({ 
  photos, 
  renderImage,
  backgroundColor = 'white',
  textColor = 'text-black'
}) => {
  const isDarkBackground = backgroundColor.includes('800') || 
                          backgroundColor.includes('900') || 
                          backgroundColor === 'bg-black' || 
                          backgroundColor.includes('500');
  const textColorClass = isDarkBackground ? 'text-white' : textColor;
  const textBgClass = isDarkBackground ? 'bg-black/20' : 'bg-white/80';
  
  return (
    <div className={`flex-1 p-3 relative ${backgroundColor !== 'white' ? backgroundColor : ''}`}>
      <div className="h-full flex gap-3">
        {photos.slice(0, 2).map((photo, idx) => (
          <div key={idx} className="relative w-1/2 h-full">
            {renderImage ? 
              renderImage(typeof photo === 'string' ? photo : photo.src, 
                typeof photo === 'string' ? idx : photo.index, 
                `Photo ${idx + 1}`, 
                "w-full h-full object-cover rounded-md") : 
              <img 
                src={getSrc(photo, idx)} 
                alt={`Photo ${idx + 1}`} 
                className="w-full h-full object-cover rounded-md" 
              />
            }
          </div>
        ))}
        
        {/* Text placement at bottom-right */}
        <div className="absolute bottom-3 right-3 text-right">
          <p className={`${textColorClass} text-sm font-medium bg-white/80 px-2 py-1 rounded-md`}>MEMORIES</p>
          <p className={`${textColorClass} text-xs bg-white/80 px-2 py-1 rounded-md mt-1`}>2024.06.10</p>
        </div>
      </div>
    </div>
  );
};
