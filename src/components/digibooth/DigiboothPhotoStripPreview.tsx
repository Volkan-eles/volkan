
import React, { useRef, useState } from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import EmptyState from '@/components/photostrip/EmptyState';
import PhotoItem from '@/components/photostrip/PhotoItem';
import StripControls from '@/components/photostrip/StripControls';
import { fontFamilies, textColors, fontSizes } from '@/utils/textStyles';
import PhotoStripFooter from './PhotoStripFooter';
import PhotoStripStylePanel from './PhotoStripStylePanel';

interface DigiboothPhotoStripPreviewProps {
  photos: string[];
  maxDisplay?: number;
  onDownload?: () => void;
  onTakeNewPhotos?: () => void;
  frameColor: FrameColorType;
  setFrameColor: (color: FrameColorType) => void;
  sticker: StickerType;
  setSticker: (sticker: StickerType) => void;
}

const DigiboothPhotoStripPreview: React.FC<DigiboothPhotoStripPreviewProps> = ({ 
  photos, 
  maxDisplay = 4,
  onDownload,
  onTakeNewPhotos,
  frameColor,
  sticker
}) => {
  const photoStripRef = useRef<HTMLDivElement>(null);
  const displayPhotos = photos.slice(-maxDisplay);
  
  // Default footer text state
  const [titleText, setTitleText] = useState('Digibooth');
  const [dateFormat, setDateFormat] = useState('short');
  const [customMessage, setCustomMessage] = useState('Thanks for the memories!');
  
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
  
  // Date format toggle
  const toggleDateFormat = () => {
    setDateFormat(dateFormat === 'short' ? 'long' : 'short');
  };
  
  if (photos.length === 0) {
    return <EmptyState />;
  }

  const getBorderColor = () => {
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
      default: return 'border-white bg-white';
    }
  };

  const textColor = ['white', 'yellow'].includes(frameColor) ? 'text-gray-800' : 'text-white';
  
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
  
  return (
    <div className="space-y-6 animate-fade-in">      
      <div 
        ref={photoStripRef} 
        id="photo-strip-container"
        className={`mx-auto max-w-[300px] p-4 border-8 rounded-lg shadow-lg ${getBorderColor()}`}
      >
        <div className="flex flex-col gap-2">
          {displayPhotos.map((photo, index) => (
            <PhotoItem 
              key={index}
              photo={photo}
              index={index}
              sticker={sticker}
            />
          ))}
          
          <PhotoStripFooter
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
        </div>
      </div>
      
      {/* Font and Color Controls */}
      <PhotoStripStylePanel
        titleFont={titleFont}
        titleColor={titleColor}
        titleSize={titleSize}
        titleAlignment={titleAlignment}
        titleItalic={titleItalic}
        setTitleFont={setTitleFont}
        setTitleColor={setTitleColor}
        setTitleSize={setTitleSize}
        setTitleAlignment={setTitleAlignment}
        setTitleItalic={setTitleItalic}
        customFont={customFont}
        customColor={customColor}
        customSize={customSize}
        customAlignment={customAlignment}
        customItalic={customItalic}
        setCustomFont={setCustomFont}
        setCustomColor={setCustomColor}
        setCustomSize={setCustomSize}
        setCustomAlignment={setCustomAlignment}
        setCustomItalic={setCustomItalic}
      />
      
      {photos.length >= 3 && (
        <StripControls
          onDownload={onDownload || (() => {})}
          onTakeNewPhotos={onTakeNewPhotos || (() => {})}
        />
      )}
    </div>
  );
};

export default DigiboothPhotoStripPreview;
