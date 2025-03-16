
import React, { useRef } from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import EmptyState from '@/components/photostrip/EmptyState';
import { BorderStyle, BorderWidth, FrameTheme } from '@/components/digibooth/BorderStyleSelector';
import KpopStripContainer from './photostrip/KpopStripContainer';
import KpopStripControls from './photostrip/KpopStripControls';
import KpopStripOptions from './photostrip/KpopStripOptions';
import useKpopTextStyles from '@/hooks/useKpopTextStyles';

interface KpopPhotoStripPreviewProps {
  photos: string[];
  maxDisplay?: number;
  onDownload?: () => void;
  onTakeNewPhotos?: () => void;
  frameColor: FrameColorType;
  setFrameColor: (color: FrameColorType) => void;
  sticker: StickerType;
  setSticker: (sticker: StickerType) => void;
  borderStyle?: BorderStyle;
  setBorderStyle?: (style: BorderStyle) => void;
  borderWidth?: BorderWidth;
  setBorderWidth?: (width: BorderWidth) => void;
  frameTheme?: FrameTheme;
  setFrameTheme?: (theme: FrameTheme) => void;
  selectedIdols?: Array<{id: string, name: string, src: string}>;
}

const KpopPhotoStripPreview: React.FC<KpopPhotoStripPreviewProps> = ({ 
  photos, 
  maxDisplay = 4,
  onDownload,
  onTakeNewPhotos,
  frameColor,
  setFrameColor,
  sticker,
  setSticker,
  borderStyle = 'solid',
  setBorderStyle,
  borderWidth = 'medium',
  setBorderWidth,
  frameTheme = 'default',
  setFrameTheme,
  selectedIdols = []
}) => {
  const photoStripRef = useRef<HTMLDivElement>(null);
  const displayPhotos = photos.slice(-maxDisplay);
  
  // Use our custom hook for text styles
  const textStyles = useKpopTextStyles();
  
  // Determine the text color based on frame color
  const textColor = ['white', 'yellow', 'softGreen', 'softYellow', 'softOrange', 'softPurple', 'softPink', 'softPeach', 'softBlue', 'softGray'].includes(frameColor) 
    ? 'text-gray-800' 
    : 'text-white';

  if (photos.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-center">
        <KpopStripContainer
          photoStripRef={photoStripRef}
          displayPhotos={displayPhotos}
          frameColor={frameColor}
          sticker={sticker}
          titleText={textStyles.titleText}
          dateFormat={textStyles.dateFormat}
          customMessage={textStyles.customMessage}
          titleAlignment={textStyles.titleAlignment}
          customAlignment={textStyles.customAlignment}
          titleItalic={textStyles.titleItalic}
          customItalic={textStyles.customItalic}
          titleFont={textStyles.titleFont}
          titleColor={textStyles.titleColor}
          titleSize={textStyles.titleSize}
          customFont={textStyles.customFont}
          customColor={textStyles.customColor}
          customSize={textStyles.customSize}
          textColor={textColor}
          onTitleClick={() => {}}
          onCustomMessageClick={() => {}}
          onDateClick={() => {}}
          selectedIdols={selectedIdols}
          imageSize={textStyles.imageSize}
          imageSizeClass={textStyles.getImageSizeClass(textStyles.imageSize)}
          frameTheme={frameTheme}
        />
      </div>
      
      <KpopStripControls
        photoCount={photos.length}
        onDownload={onDownload || (() => {})}
        onTakeNewPhotos={onTakeNewPhotos || (() => {})}
      />
      
      {/* Frame and Sticker options with text styling */}
      <KpopStripOptions
        frameColor={frameColor}
        setFrameColor={setFrameColor}
        sticker={sticker}
        setSticker={setSticker}
        borderWidth={textStyles.imageSize}
        setBorderWidth={textStyles.setImageSize}
        
        // Text styling props
        titleText={textStyles.titleText}
        setTitleText={textStyles.setTitleText}
        titleFont={textStyles.titleFont}
        setTitleFont={textStyles.setTitleFont}
        titleColor={textStyles.titleColor}
        setTitleColor={textStyles.setTitleColor}
        titleSize={textStyles.titleSize}
        setTitleSize={textStyles.setTitleSize}
        titleAlignment={textStyles.titleAlignment}
        setTitleAlignment={textStyles.setTitleAlignment}
        titleItalic={textStyles.titleItalic}
        setTitleItalic={textStyles.setTitleItalic}
        
        customMessage={textStyles.customMessage}
        setCustomMessage={textStyles.setCustomMessage}
        customFont={textStyles.customFont}
        setCustomFont={textStyles.setCustomFont}
        customColor={textStyles.customColor}
        setCustomColor={textStyles.setCustomColor}
        customSize={textStyles.customSize}
        setCustomSize={textStyles.setCustomSize}
        customAlignment={textStyles.customAlignment}
        setCustomAlignment={textStyles.setCustomAlignment}
        customItalic={textStyles.customItalic}
        setCustomItalic={textStyles.setCustomItalic}
        
        dateFormat={textStyles.dateFormat}
        setDateFormat={textStyles.setDateFormat}
      />
    </div>
  );
};

export default KpopPhotoStripPreview;
