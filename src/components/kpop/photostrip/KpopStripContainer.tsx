
import React from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import PhotoItem from '@/components/photostrip/PhotoItem';
import KpopStripFooter from './KpopStripFooter';
import { getBorderColor } from '@/utils/kpop/kpopOptions';
import { BorderWidthValue } from './BorderWidthSelector';
import { FrameTheme } from '@/components/digibooth/BorderStyleSelector';

interface KpopStripContainerProps {
  photoStripRef: React.RefObject<HTMLDivElement>;
  displayPhotos: string[];
  frameColor: FrameColorType;
  sticker: StickerType;
  titleText: string;
  dateFormat: string;
  customMessage: string;
  titleAlignment: 'left' | 'center' | 'right';
  customAlignment: 'left' | 'center' | 'right';
  titleItalic: boolean;
  customItalic: boolean;
  titleFont: string;
  titleColor: string;
  titleSize: string;
  customFont: string;
  customColor: string;
  customSize: string;
  textColor: string;
  onTitleClick: () => void;
  onCustomMessageClick: () => void;
  onDateClick: () => void;
  selectedIdols?: Array<{id: string, name: string, src: string}>;
  imageSize: BorderWidthValue;
  imageSizeClass: string;
  frameTheme?: FrameTheme;
}

const KpopStripContainer: React.FC<KpopStripContainerProps> = ({
  photoStripRef,
  displayPhotos,
  frameColor,
  sticker,
  titleText,
  dateFormat,
  customMessage,
  titleAlignment,
  customAlignment,
  titleItalic,
  customItalic,
  titleFont,
  titleColor,
  titleSize,
  customFont,
  customColor,
  customSize,
  textColor,
  onTitleClick,
  onCustomMessageClick,
  onDateClick,
  selectedIdols = [],
  imageSize,
  imageSizeClass,
  frameTheme = 'default'
}) => {
  // Get photo idols for each photo
  const getPhotoIdols = () => {
    if (!selectedIdols || selectedIdols.length === 0) return [];
    
    return displayPhotos.map((_, index) => {
      // Cycle through idols
      return selectedIdols[index % selectedIdols.length];
    });
  };
  
  const photoIdols = getPhotoIdols();
  
  // Get frame theme style based on the selected theme
  const getThemeStyle = (): React.CSSProperties => {
    switch(frameTheme) {
      case 'birthday':
        return { 
          background: 'linear-gradient(to right, #f6d365 0%, #fda085 100%)',
          borderImage: 'linear-gradient(to right, #f6d365, #fda085) 1'
        };
      case 'christmas': 
        return { 
          background: 'linear-gradient(to right, #2e7d32 0%, #c62828 100%)',
          borderImage: 'linear-gradient(to right, #2e7d32, #c62828) 1'
        };
      case 'halloween': 
        return { 
          background: 'linear-gradient(to right, #ff9800 0%, #4a148c 100%)',
          borderImage: 'linear-gradient(to right, #ff9800, #4a148c) 1'
        };
      case 'valentines': 
        return { 
          background: 'linear-gradient(to right, #ff8a80 0%, #ff1744 100%)',
          borderImage: 'linear-gradient(to right, #ff8a80, #ff1744) 1'
        };
      case 'wedding': 
        return { 
          background: 'linear-gradient(to right, #e3f2fd 0%, #ffffff 50%, #e3f2fd 100%)',
          borderImage: 'linear-gradient(to right, #e3f2fd, #ffffff, #e3f2fd) 1'
        };
      case 'graduation': 
        return { 
          background: 'linear-gradient(to right, #0d47a1 0%, #283593 100%)',
          borderImage: 'linear-gradient(to right, #0d47a1, #283593) 1'
        };
      case 'babyshower': 
        return { 
          background: 'linear-gradient(to right, #bbdefb 0%, #f8bbd0 100%)',
          borderImage: 'linear-gradient(to right, #bbdefb, #f8bbd0) 1'
        };
      case 'anniversary': 
        return { 
          background: 'linear-gradient(to right, #ffd54f 0%, #ffb300 100%)',
          borderImage: 'linear-gradient(to right, #ffd54f, #ffb300) 1'
        };
      case 'newyear': 
        return { 
          background: 'linear-gradient(to right, #7b1fa2 0%, #1976d2 50%, #7b1fa2 100%)',
          borderImage: 'linear-gradient(to right, #7b1fa2, #1976d2, #7b1fa2) 1'
        };
      case 'vintage': 
        return { 
          background: 'linear-gradient(to right, #a1887f 0%, #8d6e63 100%)',
          borderImage: 'linear-gradient(to right, #a1887f, #8d6e63) 1'
        };
      default:
        return {}; // Default uses the frameColor instead of a theme
    }
  };
  
  const themeStyle = getThemeStyle();
  const useThemeStyle = frameTheme !== 'default';
  
  return (
    <div 
      ref={photoStripRef} 
      id="photo-strip-container"
      className={`mx-auto w-48 max-w-[200px] p-3 border-8 rounded-lg shadow-lg ${!useThemeStyle ? getBorderColor(frameColor) : ''}`}
      style={{ 
        aspectRatio: '1/3.25',
        ...(useThemeStyle ? themeStyle : {})
      }}
    >
      <div className="flex flex-col gap-2">
        {displayPhotos.map((photo, index) => (
          <PhotoItem 
            key={index}
            photo={photo}
            index={index}
            sticker={sticker}
            selectedIdol={photoIdols[index]}
            imageClassName={`${imageSizeClass} h-auto`}
            containerClassName="relative rounded-sm overflow-hidden photo-item flex justify-center"
          />
        ))}
        
        {/* Photo strip footer */}
        <KpopStripFooter
          titleText={titleText}
          dateFormat={dateFormat}
          customMessage={customMessage}
          titleAlignment={titleAlignment}
          customAlignment={customAlignment}
          titleItalic={titleItalic}
          customItalic={customItalic}
          titleFont={titleFont}
          titleColor={titleColor}
          titleSize={titleSize}
          customFont={customFont}
          customColor={customColor}
          customSize={customSize}
          textColor={frameTheme === 'wedding' || frameTheme === 'babyshower' || frameTheme === 'anniversary' ? 'text-gray-800' : textColor}
          onTitleClick={onTitleClick}
          onCustomMessageClick={onCustomMessageClick}
          onDateClick={onDateClick}
          selectedIdols={selectedIdols}
          frameColor={frameColor}
        />
      </div>
    </div>
  );
};

export default KpopStripContainer;
