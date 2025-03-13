
import React, { useRef, useState } from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import EmptyState from '@/components/photostrip/EmptyState';
import PhotoItem from '@/components/photostrip/PhotoItem';
import StripControls from '@/components/photostrip/StripControls';
import { fontFamilies, textColors, fontSizes } from '@/utils/textStyles';
import { Italic, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

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
  
  const formatDate = () => {
    const today = new Date();
    if (dateFormat === 'short') {
      return today.toLocaleDateString();
    } else {
      return today.toLocaleDateString(undefined, { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
  };
  
  // Helper function to get alignment class
  const getAlignmentClass = (alignment: 'left' | 'center' | 'right') => {
    switch (alignment) {
      case 'left': return 'text-left';
      case 'right': return 'text-right';
      default: return 'text-center';
    }
  };
  
  // Helper function to get italic class
  const getItalicClass = (isItalic: boolean) => {
    return isItalic ? 'italic' : '';
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
          
          <div className={`py-2 ${textColor}`}>
            {/* Title text with custom font */}
            <div 
              className={`font-${titleFont} ${titleSize} cursor-pointer ${getAlignmentClass(titleAlignment)} ${getItalicClass(titleItalic)}`}
              style={{ color: titleColor }}
              onClick={() => {
                const newTitle = prompt('Enter title text:', titleText);
                if (newTitle) setTitleText(newTitle);
              }}
            >
              {titleText}
            </div>
            
            {/* Date with toggle functionality */}
            <div 
              className={`text-xs mt-1 cursor-pointer ${getAlignmentClass(titleAlignment)}`}
              onClick={toggleDateFormat}
            >
              {formatDate()}
            </div>
            
            {/* Custom message with different font */}
            <div 
              className={`font-${customFont} ${customSize} mt-2 cursor-pointer ${getAlignmentClass(customAlignment)} ${getItalicClass(customItalic)}`}
              style={{ color: customColor }}
              onClick={() => {
                const newMessage = prompt('Enter custom message:', customMessage);
                if (newMessage) setCustomMessage(newMessage);
              }}
            >
              {customMessage}
            </div>
          </div>
        </div>
      </div>
      
      {/* Font and Color Controls */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Title styling controls */}
        <div className="mb-4">
          <h3 className="font-medium text-sm mb-2">Title Style</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            <select 
              className="px-2 py-1 border rounded text-sm"
              value={titleFont}
              onChange={(e) => setTitleFont(e.target.value)}
            >
              {fontFamilies.map((font) => (
                <option key={font.value} value={font.value}>{font.name}</option>
              ))}
            </select>
            
            <select 
              className="px-2 py-1 border rounded text-sm"
              value={titleSize}
              onChange={(e) => setTitleSize(e.target.value)}
            >
              {fontSizes.map((size) => (
                <option key={size.value} value={size.value}>{size.name}</option>
              ))}
            </select>
            
            <div className="flex gap-1">
              {textColors.map((color) => (
                <button
                  key={color.value}
                  className={`w-6 h-6 rounded-full ${titleColor === color.value ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setTitleColor(color.value)}
                />
              ))}
            </div>
          </div>
          
          {/* Title alignment and styling */}
          <div className="flex flex-wrap gap-2 items-center">
            <ToggleGroup type="single" value={titleAlignment} onValueChange={(value) => value && setTitleAlignment(value as 'left' | 'center' | 'right')}>
              <ToggleGroupItem value="left" aria-label="Left align">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Center align">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Right align">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            
            <Toggle 
              pressed={titleItalic} 
              onPressedChange={setTitleItalic}
              aria-label="Toggle italic"
              className="ml-2"
            >
              <Italic className="h-4 w-4" />
            </Toggle>
          </div>
        </div>
        
        {/* Custom message styling controls */}
        <div>
          <h3 className="font-medium text-sm mb-2">Custom Message Style</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            <select 
              className="px-2 py-1 border rounded text-sm"
              value={customFont}
              onChange={(e) => setCustomFont(e.target.value)}
            >
              {fontFamilies.map((font) => (
                <option key={font.value} value={font.value}>{font.name}</option>
              ))}
            </select>
            
            <select 
              className="px-2 py-1 border rounded text-sm"
              value={customSize}
              onChange={(e) => setCustomSize(e.target.value)}
            >
              {fontSizes.map((size) => (
                <option key={size.value} value={size.value}>{size.name}</option>
              ))}
            </select>
            
            <div className="flex gap-1">
              {textColors.map((color) => (
                <button
                  key={color.value}
                  className={`w-6 h-6 rounded-full ${customColor === color.value ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setCustomColor(color.value)}
                />
              ))}
            </div>
          </div>
          
          {/* Custom message alignment and styling */}
          <div className="flex flex-wrap gap-2 items-center">
            <ToggleGroup type="single" value={customAlignment} onValueChange={(value) => value && setCustomAlignment(value as 'left' | 'center' | 'right')}>
              <ToggleGroupItem value="left" aria-label="Left align">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Center align">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Right align">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            
            <Toggle 
              pressed={customItalic} 
              onPressedChange={setCustomItalic}
              aria-label="Toggle italic"
              className="ml-2"
            >
              <Italic className="h-4 w-4" />
            </Toggle>
          </div>
        </div>
      </div>
      
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
