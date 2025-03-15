
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
  // For wedding theme, we want to force a clean white background
  const getFrameThemeClasses = () => {
    return 'bg-white border-white';
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
        <div className="aspect-[4/3] bg-gray-100">
          {photos.length > 0 ? (
            <img 
              src={photos[0]} 
              alt="Wedding photo 1"
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-400">Photo will appear here</span>
            </div>
          )}
        </div>
        
        {/* Three smaller photos below */}
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((index) => (
            <div key={index} className="aspect-[4/3] bg-gray-100">
              {photos.length > index ? (
                <img 
                  src={photos[index]} 
                  alt={`Wedding photo ${index + 1}`}
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
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
      className="mx-auto w-full max-w-3xl p-8 rounded-lg shadow-lg border-[1px] border-gray-200 bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - photos */}
        <div className="col-span-1">
          {getPhotoLayout()}
        </div>
        
        {/* Right side - wedding details */}
        <div className="col-span-1 flex flex-col justify-center items-center">
          <div 
            className="text-4xl md:text-5xl font-script mb-4 cursor-pointer text-black"
            onClick={onCoupleNameClick}
            title="Click to edit couple names"
            style={{ fontFamily: "'Pinyon Script', cursive" }}
          >
            {coupleName}
          </div>
          
          <div 
            className="text-sm tracking-widest uppercase mb-8 cursor-pointer text-gray-700"
            onClick={onWeddingDateClick}
            title="Click to edit wedding date"
          >
            {weddingDate}
          </div>
        </div>
      </div>
      
      {/* Footer message */}
      <div 
        className="text-xs text-center mt-8 text-gray-500 cursor-pointer"
        onClick={onCustomMessageClick}
        title="Click to edit message"
      >
        {customMessage}
      </div>
    </div>
  );
};

export default WeddingPhotoContainer;
