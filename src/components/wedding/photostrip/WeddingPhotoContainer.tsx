
import React from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { BorderStyle, BorderWidth, FrameTheme } from '@/components/digibooth/BorderStyleSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';

interface WeddingPhotoContainerProps {
  photoStripRef: React.RefObject<HTMLDivElement>;
  displayPhotos: string[];
  frameColor: FrameColorType;
  sticker: StickerType;
  borderStyle: BorderStyle;
  borderWidth: BorderWidth;
  frameTheme: FrameTheme;
  titleText: string;
  customMessage: string;
  coupleName: string;
  weddingDate: string;
  titleFont: string;
  titleColor: string;
  titleSize: string;
  customFont: string;
  customColor: string;
  customSize: string;
  titleAlignment: 'left' | 'center' | 'right';
  customAlignment: 'left' | 'center' | 'right';
  titleItalic: boolean;
  customItalic: boolean;
  textColor: string;
  onCoupleNameClick: () => void;
  onWeddingDateClick: () => void;
  onCustomMessageClick: () => void;
  onDateClick: () => void;
}

const WeddingPhotoContainer: React.FC<WeddingPhotoContainerProps> = ({
  photoStripRef,
  displayPhotos,
  frameColor,
  sticker,
  borderStyle,
  borderWidth,
  frameTheme,
  titleText,
  customMessage,
  coupleName,
  weddingDate,
  titleFont,
  titleColor,
  titleSize,
  customFont,
  customColor,
  customSize,
  titleAlignment,
  customAlignment,
  titleItalic,
  customItalic,
  textColor,
  onCoupleNameClick,
  onWeddingDateClick,
  onCustomMessageClick,
  onDateClick
}) => {
  // For wedding theme, we want a clean white background with elegant styling
  const getFrameThemeClasses = () => {
    return 'bg-white';
  };

  // Function to determine how many photos we have and their layout
  const getPhotoLayout = () => {
    const count = displayPhotos.length;
    
    // Always show up to 4 photos in the wedding layout
    const photos = displayPhotos.slice(0, 4);
    
    if (count === 0) {
      return <div className="p-8 text-center text-gray-400">No photos taken yet</div>;
    }
    
    return (
      <div className="space-y-4">
        {/* Large photo on top */}
        <div className="aspect-[4/3] bg-gray-100 overflow-hidden rounded-md">
          {photos.length > 0 ? (
            <div id="photo-item-0">
              <img 
                src={photos[0]} 
                alt="Wedding photo 1"
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-400">Photo will appear here</span>
            </div>
          )}
        </div>
        
        {/* Three smaller photos below */}
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((index) => (
            <div key={index} className="aspect-[4/3] bg-gray-100 overflow-hidden rounded-md">
              {photos.length > index ? (
                <div id={`photo-item-${index}`}>
                  <img 
                    src={photos[index]} 
                    alt={`Wedding photo ${index + 1}`}
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Photo</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div 
      ref={photoStripRef} 
      id="photo-strip-container"
      className={`mx-auto w-full max-w-3xl p-8 rounded-lg shadow-lg border-[1px] ${borderStyle === 'dashed' ? 'border-dashed' : borderStyle === 'dotted' ? 'border-dotted' : 'border-solid'} ${borderWidth === 'thin' ? 'border-[1px]' : borderWidth === 'medium' ? 'border-[3px]' : 'border-[5px]'} border-gray-200 ${getFrameThemeClasses()}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - photos */}
        <div className="col-span-1">
          {getPhotoLayout()}
        </div>
        
        {/* Right side - wedding details */}
        <div className="col-span-1 flex flex-col justify-center items-center">
          <div 
            className="text-4xl md:text-5xl font-script mb-4 cursor-pointer hover:text-gray-700 transition-colors"
            onClick={onCoupleNameClick}
            title="Click to edit couple names"
            style={{ 
              fontFamily: "'Pinyon Script', cursive", 
              color: titleColor || '#000',
              fontStyle: titleItalic ? 'italic' : 'normal',
              textAlign: titleAlignment
            }}
          >
            {coupleName}
          </div>
          
          <div 
            className="text-sm tracking-widest uppercase mb-8 cursor-pointer hover:text-gray-500 transition-colors"
            onClick={onWeddingDateClick}
            title="Click to edit wedding date"
            style={{ 
              color: customColor || '#555',
              fontFamily: customFont || "'Arial', sans-serif",
              fontStyle: customItalic ? 'italic' : 'normal',
              textAlign: customAlignment
            }}
          >
            {weddingDate}
          </div>
          
          <div className="mt-4 flex space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-gray-300"></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer message */}
      <div 
        className="text-xs text-center mt-8 cursor-pointer hover:text-gray-500 transition-colors"
        onClick={onCustomMessageClick}
        title="Click to edit message"
        style={{ 
          color: '#888',
          fontFamily: "'Arial', sans-serif",
        }}
      >
        {customMessage}
      </div>
    </div>
  );
};

export default WeddingPhotoContainer;
