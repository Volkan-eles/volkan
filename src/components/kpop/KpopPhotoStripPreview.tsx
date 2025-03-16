
import React, { useRef, useState } from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import EmptyState from '@/components/photostrip/EmptyState';
import { fontFamilies, textColors, fontSizes } from '@/utils/textStyles';
import { BorderStyle, BorderWidth, FrameTheme } from '@/components/digibooth/BorderStyleSelector';
import KpopStripContainer from './photostrip/KpopStripContainer';
import KpopStripControls from './photostrip/KpopStripControls';
import KpopStripOptions from './photostrip/KpopStripOptions';
import { BorderWidthValue } from './photostrip/BorderWidthSelector';

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
  
  // Default footer text state
  const [titleText, setTitleText] = useState('K-pop Booth');
  const [dateFormat, setDateFormat] = useState('short');
  const [customMessage, setCustomMessage] = useState('K-pop Memories!');
  
  // Style states for text
  const [titleFont, setTitleFont] = useState(fontFamilies[0].value);
  const [titleColor, setTitleColor] = useState(textColors[0].value);
  const [titleSize, setTitleSize] = useState(fontSizes[2].value);
  
  const [customFont, setCustomFont] = useState(fontFamilies[3].value);
  const [customColor, setCustomColor] = useState(textColors[2].value);
  const [customSize, setCustomSize] = useState(fontSizes[1].value);
  
  // Text alignment and styling options
  const [titleAlignment, setTitleAlignment] = useState<'left' | 'center' | 'right'>('center');
  const [customAlignment, setCustomAlignment] = useState<'left' | 'center' | 'right'>('center');
  const [titleItalic, setTitleItalic] = useState(false);
  const [customItalic, setCustomItalic] = useState(false);
  
  // Border width for adjusting image size
  const [imageSize, setImageSize] = useState<BorderWidthValue>('full');
  
  // Date format toggle
  const toggleDateFormat = () => {
    setDateFormat(dateFormat === 'short' ? 'long' : 'short');
  };
  
  if (photos.length === 0) {
    return <EmptyState />;
  }

  const textColor = ['white', 'yellow', 'softGreen', 'softYellow', 'softOrange', 'softPurple', 'softPink', 'softPeach', 'softBlue', 'softGray'].includes(frameColor) 
    ? 'text-gray-800' 
    : 'text-white';
  
  // Handler for title text click
  const handleTitleClick = () => {
    const newTitle = prompt('Enter title text:', titleText);
    if (newTitle !== null) setTitleText(newTitle);
  };
  
  // Handler for custom message click
  const handleCustomMessageClick = () => {
    const newMessage = prompt('Enter custom message:', customMessage);
    if (newMessage !== null) setCustomMessage(newMessage);
  };

  // Get image size class based on borderWidthValue
  const getImageSizeClass = (width: BorderWidthValue): string => {
    switch(width) {
      case 'small': return 'w-[70%] mx-auto';
      case 'medium': return 'w-[85%] mx-auto';
      case 'large': return 'w-[95%] mx-auto';
      case 'full':
      default: return 'w-full';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-center">
        <KpopStripContainer
          photoStripRef={photoStripRef}
          displayPhotos={displayPhotos}
          frameColor={frameColor}
          sticker={sticker}
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
          onTitleClick={handleTitleClick}
          onCustomMessageClick={handleCustomMessageClick}
          onDateClick={toggleDateFormat}
          selectedIdols={selectedIdols}
          imageSize={imageSize}
          imageSizeClass={getImageSizeClass(imageSize)}
        />
      </div>
      
      <KpopStripControls
        photoCount={photos.length}
        onDownload={onDownload || (() => {})}
        onTakeNewPhotos={onTakeNewPhotos || (() => {})}
      />
      
      {/* Frame and Sticker options with mandatory border width control */}
      <KpopStripOptions
        frameColor={frameColor}
        setFrameColor={setFrameColor}
        sticker={sticker}
        setSticker={setSticker}
        borderWidth={imageSize}
        setBorderWidth={setImageSize}
      />
    </div>
  );
};

export default KpopPhotoStripPreview;
