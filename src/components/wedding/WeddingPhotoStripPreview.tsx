
import React, { useRef, useState } from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import EmptyState from '@/components/photostrip/EmptyState';
import { fontFamilies, textColors, fontSizes } from '@/utils/textStyles';
import { BorderStyle, BorderWidth, FrameTheme } from '@/components/digibooth/BorderStyleSelector';
import WeddingPhotoContainer from './photostrip/WeddingPhotoContainer';
import PhotoStripControlPanel from '@/components/digibooth/photostrip/PhotoStripControlPanel';

interface WeddingPhotoStripPreviewProps {
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
}

const WeddingPhotoStripPreview: React.FC<WeddingPhotoStripPreviewProps> = ({ 
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
  borderWidth = 'thin',
  setBorderWidth,
  frameTheme = 'wedding',
  setFrameTheme
}) => {
  const photoStripRef = useRef<HTMLDivElement>(null);
  const displayPhotos = photos.slice(-maxDisplay);
  
  // Default text states
  const [titleText, setTitleText] = useState('');
  const [dateFormat, setDateFormat] = useState('long');
  const [customMessage, setCustomMessage] = useState('DOWNLOAD YOUR PHOTO AT YOUR WEBSITE HERE');
  
  // Names for the wedding couple
  const [coupleName, setCoupleName] = useState('Pauline & Hariss');
  const [weddingDate, setWeddingDate] = useState('MARCH 3, 2028');
  
  // Style states for text
  const [titleFont, setTitleFont] = useState(fontFamilies[2].value);
  const [titleColor, setTitleColor] = useState(textColors[0].value);
  const [titleSize, setTitleSize] = useState(fontSizes[2].value);
  
  const [customFont, setCustomFont] = useState(fontFamilies[1].value);
  const [customColor, setCustomColor] = useState(textColors[0].value);
  const [customSize, setCustomSize] = useState(fontSizes[0].value);
  
  // Text alignment and styling options
  const [titleAlignment, setTitleAlignment] = useState<'left' | 'center' | 'right'>('center');
  const [customAlignment, setCustomAlignment] = useState<'left' | 'center' | 'right'>('center');
  const [titleItalic, setTitleItalic] = useState(false);
  const [customItalic, setCustomItalic] = useState(false);
  
  if (photos.length === 0) {
    return <EmptyState />;
  }

  const textColor = 'text-gray-800'; // For wedding theme, we want dark text
  
  // Handler for couple name click
  const handleCoupleNameClick = () => {
    const newName = prompt('Enter the couple\'s names:', coupleName);
    if (newName) setCoupleName(newName);
  };
  
  // Handler for wedding date click
  const handleWeddingDateClick = () => {
    const newDate = prompt('Enter the wedding date:', weddingDate);
    if (newDate) setWeddingDate(newDate);
  };
  
  // Handler for custom message click
  const handleCustomMessageClick = () => {
    const newMessage = prompt('Enter custom message:', customMessage);
    if (newMessage) setCustomMessage(newMessage);
  };
  
  // Toggle date format
  const toggleDateFormat = () => {
    setDateFormat(dateFormat === 'short' ? 'long' : 'short');
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <WeddingPhotoContainer
        photoStripRef={photoStripRef}
        displayPhotos={displayPhotos}
        frameColor={frameColor}
        sticker={sticker}
        borderStyle={borderStyle}
        borderWidth={borderWidth}
        frameTheme={frameTheme}
        titleText={titleText}
        customMessage={customMessage}
        coupleName={coupleName}
        weddingDate={weddingDate}
        titleFont={titleFont}
        titleColor={titleColor}
        titleSize={titleSize}
        customFont={customFont}
        customColor={customColor}
        customSize={customSize}
        titleAlignment={titleAlignment}
        customAlignment={customAlignment}
        titleItalic={titleItalic}
        customItalic={customItalic}
        textColor={textColor}
        onCoupleNameClick={handleCoupleNameClick}
        onWeddingDateClick={handleWeddingDateClick}
        onCustomMessageClick={handleCustomMessageClick}
        onDateClick={toggleDateFormat}
      />
      
      <PhotoStripControlPanel
        borderStyle={borderStyle}
        borderWidth={borderWidth}
        frameTheme={frameTheme}
        titleFont={titleFont}
        titleColor={titleColor}
        titleSize={titleSize}
        titleAlignment={titleAlignment}
        titleItalic={titleItalic}
        customFont={customFont}
        customColor={customColor}
        customSize={customSize}
        customAlignment={customAlignment}
        customItalic={customItalic}
        onStyleChange={setBorderStyle || (() => {})}
        onWidthChange={setBorderWidth || (() => {})}
        onThemeChange={setFrameTheme || (() => {})}
        setTitleFont={setTitleFont}
        setTitleColor={setTitleColor}
        setTitleSize={setTitleSize}
        setTitleAlignment={setTitleAlignment}
        setTitleItalic={setTitleItalic}
        setCustomFont={setCustomFont}
        setCustomColor={setCustomColor}
        setCustomSize={setCustomSize}
        setCustomAlignment={setCustomAlignment}
        setCustomItalic={setCustomItalic}
        setBorderStyle={setBorderStyle || (() => {})}
        setBorderWidth={setBorderWidth || (() => {})}
        photoCount={photos.length}
        onDownload={onDownload}
        onTakeNewPhotos={onTakeNewPhotos}
      />
    </div>
  );
};

export default WeddingPhotoStripPreview;
