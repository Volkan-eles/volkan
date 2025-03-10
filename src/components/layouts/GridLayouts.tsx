
import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { LayoutProps } from './index';

// Grid Layout (4 Photos)
export const GridLayout: React.FC<LayoutProps> = ({ photos, backgroundColor = 'white', dateString = '2024.06.10' }) => {
  // Determine if the background is dark to adjust text color
  const isDarkBackground = backgroundColor.includes('800') || 
                           backgroundColor.includes('900') || 
                           backgroundColor === 'bg-black' || 
                           backgroundColor.includes('500');
  
  const textColorClass = isDarkBackground ? 'text-white' : 'text-black';
  const textBgClass = isDarkBackground ? 'bg-black/20' : 'bg-white/80';

  return (
    <div className={`flex-1 p-3 ${backgroundColor !== 'white' ? backgroundColor : ''}`}>
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
        
        {/* Text placement at bottom-right with responsive color */}
        <div className="absolute bottom-3 right-3 text-right">
          <p className={`${textColorClass} text-sm font-medium ${backgroundColor !== 'white' ? `${textBgClass} px-2 py-1 rounded-md` : ''}`}>MEMORIES</p>
          <p className={`${textColorClass} text-xs ${backgroundColor !== 'white' ? `${textBgClass} px-2 py-1 rounded-md mt-1` : ''}`}>{dateString}</p>
        </div>
      </div>
    </div>
  );
};

// Simple Grid Layout (4 Photos)
export const SimpleGridLayout: React.FC<LayoutProps> = ({ photos, backgroundColor = 'white', dateString = '2024.06.10' }) => {
  // Determine if the background is dark to adjust text color
  const isDarkBackground = backgroundColor.includes('800') || 
                           backgroundColor.includes('900') || 
                           backgroundColor === 'bg-black' || 
                           backgroundColor.includes('500');
  
  const textColorClass = isDarkBackground ? 'text-white' : 'text-black';
  const textBgClass = isDarkBackground ? 'bg-black/20' : 'bg-white/80';

  return (
    <div className={`flex-1 p-3 ${backgroundColor !== 'white' ? backgroundColor : ''}`}>
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
        
        {/* Text placement at center with responsive color */}
        <div className="absolute bottom-4 left-0 right-0 mx-auto w-fit text-center">
          <p className={`${textColorClass} text-sm font-medium ${backgroundColor !== 'white' ? `${textBgClass} px-2 py-1 rounded-md` : ''}`}>MEMORIES</p>
          <p className={`${textColorClass} text-xs ${backgroundColor !== 'white' ? `${textBgClass} px-2 py-1 rounded-md mt-1` : ''}`}>{dateString}</p>
        </div>
      </div>
    </div>
  );
};

// Classic Grid Layout (4 Photos)
export const ClassicGridLayout: React.FC<LayoutProps> = ({ photos, backgroundColor = 'white', dateString = '2024.06.10' }) => {
  // Determine if the background is dark to adjust text color
  const isDarkBackground = backgroundColor.includes('800') || 
                           backgroundColor.includes('900') || 
                           backgroundColor === 'bg-black' || 
                           backgroundColor.includes('500');
  
  const textColorClass = isDarkBackground ? 'text-white' : 'text-black';
  const textBgClass = isDarkBackground ? 'bg-black/20' : 'bg-white/80';

  return (
    <div className={`flex-1 p-4 relative ${backgroundColor !== 'white' ? backgroundColor : ''}`}>
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
        
        {/* Text placement at bottom-right with responsive color */}
        <div className="absolute bottom-4 right-4 text-right">
          <p className={`${textColorClass} text-sm font-medium ${backgroundColor !== 'white' ? `${textBgClass} px-2 py-1 rounded-md` : ''}`}>MEMORIES</p>
          <p className={`${textColorClass} text-xs ${backgroundColor !== 'white' ? `${textBgClass} px-2 py-1 rounded-md mt-1` : ''}`}>{dateString}</p>
        </div>
      </div>
    </div>
  );
};
