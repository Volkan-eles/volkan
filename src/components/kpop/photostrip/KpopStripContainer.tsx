
import React from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import PhotoItem from '@/components/photostrip/PhotoItem';
import KpopStripFooter from './KpopStripFooter';
import { getBorderColor } from '@/utils/kpop/kpopOptions';

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
  selectedIdols = []
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
  
  return (
    <div 
      ref={photoStripRef} 
      id="photo-strip-container"
      className={`mx-auto max-w-[300px] p-4 border-8 rounded-lg shadow-lg ${getBorderColor(frameColor)}`}
    >
      <div className="flex flex-col gap-2">
        {displayPhotos.map((photo, index) => (
          <PhotoItem 
            key={index}
            photo={photo}
            index={index}
            sticker={sticker}
            selectedIdol={photoIdols[index]}
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
          textColor={textColor}
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
