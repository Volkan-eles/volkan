
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
  const getBorderColor = () => {
    if (frameTheme !== 'default') {
      // If a theme is selected, don't apply the frame color
      return '';
    }
    
    switch(frameColor) {
      case 'white': return 'border-white bg-white';
      case 'black': return 'border-black bg-black';
      case 'pink': return 'border-pink-400 bg-pink-400';
      case 'green': return 'border-green-500 bg-green-500';
      case 'blue': return 'border-blue-500 bg-blue-500';
      case 'yellow': return 'border-yellow-400 bg-yellow-400';
      case 'purple': return 'border-purple-500 bg-purple-500';
      case 'maroon': return 'border-red-800 bg-red-800';
      case 'burgundy': return 'border-red-900 bg-red-900';
      // Soft colors
      case 'softGreen': return 'border-[#F2FCE2] bg-[#F2FCE2]';
      case 'softYellow': return 'border-[#FEF7CD] bg-[#FEF7CD]';
      case 'softOrange': return 'border-[#FEC6A1] bg-[#FEC6A1]';
      case 'softPurple': return 'border-[#E5DEFF] bg-[#E5DEFF]';
      case 'softPink': return 'border-[#FFDEE2] bg-[#FFDEE2]';
      case 'softPeach': return 'border-[#FDE1D3] bg-[#FDE1D3]';
      case 'softBlue': return 'border-[#D3E4FD] bg-[#D3E4FD]';
      case 'softGray': return 'border-[#F1F0FB] bg-[#F1F0FB]';
      default: return 'border-white bg-white';
    }
  };
  
  const getBorderStyle = () => {
    switch(borderStyle) {
      case 'dashed': return 'border-dashed';
      case 'dotted': return 'border-dotted';
      case 'double': return 'border-double';
      case 'groove': return 'border-groove';
      case 'ridge': return 'border-ridge';
      default: return 'border-solid';
    }
  };
  
  const getBorderWidth = () => {
    switch(borderWidth) {
      case 'none': return 'border-0';
      case 'hairline': return 'border-[1px]';
      case 'thin': return 'border-2';
      case 'medium': return 'border-4';
      case 'thick': return 'border-6';
      case 'heavy': return 'border-8';
      case 'ultra': return 'border-[12px]';
      default: return 'border-4';
    }
  };

  const getFrameThemeClasses = () => {
    switch(frameTheme) {
      case 'wedding':
        return 'bg-white border-white';
      default:
        return getBorderColor();
    }
  };

  // Function to determine how many photos we have and their layout
  const getPhotoLayout = () => {
    const count = displayPhotos.length;
    
    // Always show up to 4 photos in the wedding layout
    const photos = displayPhotos.slice(0, 4);
    
    if (count === 0) {
      return <div className="p-8 text-center text-gray-400">No photos taken yet</div>;
    }
    
    // The wedding layout from the image has one large photo on top and three smaller ones below
    return (
      <div className="grid grid-cols-1 gap-3">
        {/* Large photo on top */}
        {photos.length > 0 && (
          <div className="aspect-[16/9] bg-gray-100">
            <img 
              src={photos[0]} 
              alt="Wedding photo 1"
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
          </div>
        )}
        
        {/* Three smaller photos below */}
        <div className="grid grid-cols-3 gap-3">
          {photos.length > 1 ? (
            <div className="aspect-[4/3] bg-gray-100">
              <img 
                src={photos[1]} 
                alt="Wedding photo 2"
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            </div>
          ) : (
            <div className="aspect-[4/3] bg-gray-100"></div>
          )}
          
          {photos.length > 2 ? (
            <div className="aspect-[4/3] bg-gray-100">
              <img 
                src={photos[2]} 
                alt="Wedding photo 3"
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            </div>
          ) : (
            <div className="aspect-[4/3] bg-gray-100"></div>
          )}
          
          {photos.length > 3 ? (
            <div className="aspect-[4/3] bg-gray-100">
              <img 
                src={photos[3]} 
                alt="Wedding photo 4"
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            </div>
          ) : (
            <div className="aspect-[4/3] bg-gray-100"></div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div 
      ref={photoStripRef} 
      id="photo-strip-container"
      className={`mx-auto max-w-[600px] p-6 ${getBorderStyle()} ${getBorderWidth()} rounded-lg shadow-lg ${getFrameThemeClasses()}`}
    >
      <div className="grid grid-cols-2 gap-4">
        {/* Left side - photos */}
        <div className="col-span-1">
          {getPhotoLayout()}
        </div>
        
        {/* Right side - wedding details */}
        <div className="col-span-1 flex flex-col justify-center items-center">
          <div 
            className="text-4xl md:text-5xl font-script mb-4 cursor-pointer"
            onClick={onCoupleNameClick}
            title="Click to edit couple names"
          >
            {coupleName}
          </div>
          
          <div 
            className="text-sm tracking-widest uppercase mb-8 cursor-pointer"
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
