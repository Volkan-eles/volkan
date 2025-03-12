
import React from 'react';
import { LayoutProps } from './index';
import { optimizeImageRendering } from '@/utils/downloadLayout';

const DiagonalStripsLayout: React.FC<LayoutProps> = ({
  photos,
  renderImage,
  backgroundColor = 'transparent',
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

  // Helper function to render an optimized image
  const renderOptimizedImage = (photo: string | { src: string; index: number }, index: number, alt: string, className: string) => {
    const imgRef = React.useRef<HTMLImageElement>(null);
    
    React.useEffect(() => {
      if (imgRef.current) {
        optimizeImageRendering(imgRef.current);
      }
    }, []);
    
    if (renderImage && typeof photo !== 'string') {
      return renderImage(photo.src, photo.index, alt, className);
    }
    
    return (
      <div className={`w-full h-full image-container`} style={{ 
        aspectRatio: '1/1', 
        overflow: 'hidden', 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img 
          ref={imgRef}
          src={getSrc(photo, index)} 
          alt={alt} 
          className={`w-full h-full object-cover rounded-md shadow-sm`}
          crossOrigin="anonymous"
          loading="eager"
          decoding="sync"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            display: 'block',
            position: 'relative'
          }}
        />
      </div>
    );
  };

  const bgColorClass = backgroundColor !== 'transparent' && backgroundColor !== 'white' ? backgroundColor : '';

  return (
    <div className={`flex-1 flex flex-col p-3 gap-4 ${bgColorClass}`}>
      {/* Photos */}
      {photos.slice(0, 3).map((photo, index) => (
        <div key={index} className="relative w-[90%] mx-auto high-quality-image-container" style={{ 
          aspectRatio: '1/1', 
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {renderOptimizedImage(photo, index, `Photo ${index + 1}`, "w-full h-full")}
        </div>
      ))}
      
      {/* Text placement at bottom with responsive color */}
      <div className="text-center mt-3 mb-2">
        <p className={`${textColorClass} text-sm font-medium ${backgroundColor !== 'transparent' && backgroundColor !== 'white' ? `${textBgClass} px-2 py-1 rounded-md inline-block` : ''}`}>MEMORIES</p>
        <p className={`${textColorClass} text-xs mt-1 ${backgroundColor !== 'transparent' && backgroundColor !== 'white' ? `${textBgClass} px-2 py-1 rounded-md inline-block` : ''}`}>{dateString}</p>
      </div>
    </div>
  );
};

export default DiagonalStripsLayout;
