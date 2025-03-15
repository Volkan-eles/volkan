
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
  // Always show clean white background for wedding theme
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
      <div className="space-y-6">
        {/* Large photo on top */}
        <div className="aspect-video bg-gray-100 overflow-hidden rounded-sm shadow-sm">
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
        
        {/* Three smaller photos below in a row */}
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((index) => (
            <div key={index} className="aspect-video bg-gray-100 overflow-hidden rounded-sm shadow-sm">
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
      className={`mx-auto w-full max-w-3xl p-10 rounded-sm shadow-md ${borderStyle === 'dashed' ? 'border-dashed' : borderStyle === 'dotted' ? 'border-dotted' : 'border-solid'} ${borderWidth === 'thin' ? 'border-[1px]' : borderWidth === 'medium' ? 'border-[2px]' : 'border-[3px]'} border-gray-100 ${getFrameThemeClasses()}`}
      style={{ 
        aspectRatio: '16/10',
        backgroundColor: 'white',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        {/* Left side - photos */}
        <div className="col-span-1">
          {getPhotoLayout()}
        </div>
        
        {/* Right side - wedding details */}
        <div className="col-span-1 flex flex-col justify-center items-center">
          <div 
            className="text-4xl md:text-5xl cursor-pointer hover:text-gray-700 transition-colors"
            onClick={onCoupleNameClick}
            title="Click to edit couple names"
            style={{ 
              fontFamily: "'Pinyon Script', cursive", 
              color: titleColor || '#000',
              fontStyle: titleItalic ? 'italic' : 'normal',
              textAlign: titleAlignment === 'left' ? 'left' : titleAlignment === 'right' ? 'right' : 'center',
              width: '100%',
              lineHeight: '1.1',
            }}
          >
            {coupleName}
          </div>
          
          <div 
            className="text-sm tracking-[0.2em] uppercase mt-3 cursor-pointer hover:text-gray-500 transition-colors"
            onClick={onWeddingDateClick}
            title="Click to edit wedding date"
            style={{ 
              color: customColor || '#555',
              fontFamily: "'Arial', sans-serif",
              fontStyle: customItalic ? 'italic' : 'normal',
              textAlign: customAlignment === 'left' ? 'left' : customAlignment === 'right' ? 'right' : 'center',
              width: '100%',
            }}
          >
            {weddingDate}
          </div>
        </div>
      </div>
      
      {/* Footer message - aligned at bottom */}
      <div className="absolute bottom-4 w-full left-0 right-0 text-center">
        <div 
          className="text-[10px] uppercase tracking-wider cursor-pointer hover:text-gray-500 transition-colors"
          onClick={onCustomMessageClick}
          title="Click to edit message"
          style={{ 
            color: '#999',
            fontFamily: "'Arial', sans-serif",
            letterSpacing: '0.1em',
          }}
        >
          {customMessage}
        </div>
      </div>
    </div>
  );
};

export default WeddingPhotoContainer;
