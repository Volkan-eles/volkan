
import React, { useRef, useState } from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import EmptyState from '@/components/photostrip/EmptyState';
import { fontFamilies, textColors, fontSizes } from '@/utils/textStyles';
import { BorderStyle, BorderWidth, FrameTheme } from '@/components/digibooth/BorderStyleSelector';
import PhotoStripContainer from '@/components/digibooth/photostrip/PhotoStripContainer';
import PhotoStripControlPanel from '@/components/digibooth/photostrip/PhotoStripControlPanel';

interface VintagePhotoStripPreviewProps {
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

const VintagePhotoStripPreview: React.FC<VintagePhotoStripPreviewProps> = ({ 
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
  frameTheme = 'vintage',
  setFrameTheme
}) => {
  const photoStripRef = useRef<HTMLDivElement>(null);
  const displayPhotos = photos.slice(-maxDisplay);
  
  // Default footer text state
  const [titleText, setTitleText] = useState('Vintage Memories');
  const [dateFormat, setDateFormat] = useState('long');
  const [customMessage, setCustomMessage] = useState('Capturing timeless moments...');
  
  // Style states for text
  const [titleFont, setTitleFont] = useState(fontFamilies[2].value);
  const [titleColor, setTitleColor] = useState(textColors[2].value);
  const [titleSize, setTitleSize] = useState(fontSizes[2].value);
  
  const [customFont, setCustomFont] = useState(fontFamilies[3].value);
  const [customColor, setCustomColor] = useState(textColors[4].value);
  const [customSize, setCustomSize] = useState(fontSizes[1].value);
  
  // Text alignment and styling options
  const [titleAlignment, setTitleAlignment] = useState<'left' | 'center' | 'right'>('center');
  const [customAlignment, setCustomAlignment] = useState<'left' | 'center' | 'right'>('center');
  const [titleItalic, setTitleItalic] = useState(true);
  const [customItalic, setCustomItalic] = useState(false);
  
  if (photos.length === 0) {
    return <EmptyState />;
  }

  const textColor = ['white', 'yellow', 'softGreen', 'softYellow', 'softOrange', 'softPurple', 'softPink', 'softPeach', 'softBlue', 'softGray'].includes(frameColor) 
    ? 'text-gray-800' 
    : 'text-white';
  
  // Handler for title text click
  const handleTitleClick = () => {
    const newTitle = prompt('Enter title text:', titleText);
    if (newTitle) setTitleText(newTitle);
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
      <PhotoStripContainer
        photoStripRef={photoStripRef}
        displayPhotos={displayPhotos}
        frameColor={frameColor}
        sticker={sticker}
        borderStyle={borderStyle}
        borderWidth={borderWidth}
        frameTheme={frameTheme}
        titleText={titleText}
        customMessage={customMessage}
        dateFormat={dateFormat}
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
        onTitleClick={handleTitleClick}
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

export default VintagePhotoStripPreview;
