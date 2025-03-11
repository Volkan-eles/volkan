import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { LayoutProps } from './index';
const DiagonalStripsLayout: React.FC<LayoutProps> = ({
  photos,
  backgroundColor = 'white',
  dateString = '2024.06.10'
}) => {
  // Determine if the background is dark to adjust text color
  const isDarkBackground = backgroundColor.includes('800') || backgroundColor.includes('900') || backgroundColor === 'bg-black' || backgroundColor.includes('500');
  const textColorClass = isDarkBackground ? 'text-white' : 'text-black';
  const textBgClass = isDarkBackground ? 'bg-black/20' : 'bg-white/80';
  return <div className={`flex-1 flex flex-col p-3 gap-3 ${backgroundColor !== 'white' ? backgroundColor : ''}`}>
      {/* First photo - top right */}
      <div className="relative h-1/3 ml-auto w-4/5">
        <img src={photos[0] || ''} alt="Photo 1" className="w-full h-full object-cover rounded-md" />
        
      </div>
      
      {/* Second photo - center */}
      <div className="relative h-1/3 w-4/5 mx-auto">
        <img src={photos[1] || ''} alt="Photo 2" className="w-full h-full object-cover rounded-md" />
        
      </div>
      
      {/* Third photo - bottom left */}
      <div className="relative h-1/3 w-4/5 mr-auto">
        <img src={photos[2] || ''} alt="Photo 3" className="w-full h-full object-cover rounded-md" />
        
      </div>
      
      {/* Text placement at bottom with responsive color */}
      <div className="text-center mt-2">
        <p className={`${textColorClass} text-sm font-medium ${backgroundColor !== 'white' ? `${textBgClass} px-2 py-1 rounded-md inline-block` : ''}`}>MEMORIES</p>
        <p className={`${textColorClass} text-xs ${backgroundColor !== 'white' ? `${textBgClass} px-2 py-1 rounded-md inline-block mt-1` : ''}`}>{dateString}</p>
      </div>
    </div>;
};
export default DiagonalStripsLayout;