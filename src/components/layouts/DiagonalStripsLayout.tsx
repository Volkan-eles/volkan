
import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { LayoutProps } from './index';

const DiagonalStripsLayout: React.FC<LayoutProps> = ({
  photos,
  renderImage,
  backgroundColor = 'white',
  dateString = '2024.06.10',
  textColor = 'text-black'
}) => {
  // Determine if the background is dark to adjust text color
  const isDarkBackground = backgroundColor.includes('800') || backgroundColor.includes('900') || backgroundColor === 'bg-black' || backgroundColor.includes('500');
  const textColorClass = isDarkBackground ? 'text-white' : textColor;
  const textBgClass = isDarkBackground ? 'bg-black/20' : 'bg-white/80';

  // Helper function to get the src from either a string or an object
  const getSrc = (photo: string | { src: string; index: number }, index: number) => {
    if (typeof photo === 'string') {
      return photo;
    }
    return photo.src;
  };

  // Helper function to render an image
  const renderPhoto = (photo: string | { src: string; index: number }, index: number, alt: string, className: string) => {
    if (renderImage && typeof photo !== 'string') {
      return renderImage(photo.src, photo.index, alt, className);
    }
    return <img src={getSrc(photo, index)} alt={alt} className={`${className} w-full h-full object-cover rounded-md`} />;
  };

  return (
    <div className={`flex-1 flex flex-col p-3 gap-3 ${backgroundColor !== 'white' ? backgroundColor : ''}`}>
      {/* First photo - top right */}
      <div className="relative aspect-square w-4/5 ml-auto max-w-[80%]">
        {photos[0] && renderPhoto(photos[0], 0, "Photo 1", "w-full h-full object-cover rounded-md")}
      </div>
      
      {/* Second photo - center */}
      <div className="relative aspect-square w-4/5 mx-auto max-w-[80%]">
        {photos[1] && renderPhoto(photos[1], 1, "Photo 2", "w-full h-full object-cover rounded-md")}
      </div>
      
      {/* Third photo - bottom left */}
      <div className="relative aspect-square w-4/5 mr-auto max-w-[80%]">
        {photos[2] && renderPhoto(photos[2], 2, "Photo 3", "w-full h-full object-cover rounded-md")}
      </div>
      
      {/* Text placement at bottom with responsive color */}
      <div className="text-center mt-2">
        <p className={`${textColorClass} text-sm font-medium ${backgroundColor !== 'white' ? `${textBgClass} px-2 py-1 rounded-md inline-block` : ''}`}>MEMORIES</p>
        <p className={`${textColorClass} text-xs ${backgroundColor !== 'white' ? `${textBgClass} px-2 py-1 rounded-md inline-block mt-1` : ''}`}>{dateString}</p>
      </div>
    </div>
  );
};

export default DiagonalStripsLayout;
