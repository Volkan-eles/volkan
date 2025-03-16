
import React, { useRef, useState } from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import EmptyState from '@/components/photostrip/EmptyState';
import { fontFamilies, textColors, fontSizes } from '@/utils/textStyles';
import { BorderStyle, BorderWidth, FrameTheme } from '@/components/digibooth/BorderStyleSelector';
import PhotoItem from '@/components/photostrip/PhotoItem';

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
    if (newTitle) setTitleText(newTitle);
  };
  
  // Handler for custom message click
  const handleCustomMessageClick = () => {
    const newMessage = prompt('Enter custom message:', customMessage);
    if (newMessage) setCustomMessage(newMessage);
  };

  // Assign a selected idol to each photo
  const getPhotoIdols = () => {
    if (selectedIdols.length === 0) return [];
    
    return displayPhotos.map((_, index) => {
      // Either cycle through idols or use random selection
      // Cycling approach:
      return selectedIdols[index % selectedIdols.length];
    });
  };
  
  const photoIdols = getPhotoIdols();
  
  return (
    <div className="space-y-6 animate-fade-in">
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
          <div className={`mt-2 pt-2 border-t border-t-${frameColor === 'white' ? 'gray-300' : 'white/30'} ${textColor}`}>
            {/* Title row */}
            <div 
              className={`text-${titleAlignment} font-${titleFont} text-${titleColor} text-${titleSize} ${titleItalic ? 'italic' : ''} cursor-pointer`}
              onClick={handleTitleClick}
            >
              {titleText}
            </div>
            
            {/* Date row */}
            <div 
              className={`text-center text-xs mt-1 cursor-pointer ${textColor} opacity-80`}
              onClick={toggleDateFormat}
            >
              {dateFormat === 'short' 
                ? new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }) 
                : new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
              }
            </div>
            
            {/* Custom message */}
            <div 
              className={`text-${customAlignment} font-${customFont} text-${customColor} text-${customSize} mt-1 ${customItalic ? 'italic' : ''} cursor-pointer`}
              onClick={handleCustomMessageClick}
            >
              {customMessage}
            </div>
            
            {/* List selected idols at the bottom of the strip */}
            {selectedIdols.length > 0 && (
              <div className="mt-2 text-xs text-center">
                {selectedIdols.map((idol, idx) => (
                  <span key={idol.id} className={`${textColor} font-semibold`}>
                    {idol.name}{idx < selectedIdols.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {photos.length >= 3 && (
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
          <button 
            onClick={onDownload} 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Save as PNG
          </button>
          
          <button 
            onClick={onTakeNewPhotos} 
            className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Take New Photos
          </button>
        </div>
      )}
      
      {/* Frame and Sticker options moved to the bottom */}
      <div className="mt-6">
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Frame Color</h3>
          <div className="grid grid-cols-5 sm:grid-cols-8 gap-2">
            {frameColorOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => setFrameColor(option.value)}
                className={`w-8 h-8 rounded-full cursor-pointer transition-all transform ${
                  frameColor === option.value ? 'ring-2 ring-offset-2 ring-purple-500 scale-110' : 'hover:scale-105'
                }`}
                style={{ backgroundColor: option.color }}
                title={option.label}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Sticker Style</h3>
          <div className="grid grid-cols-4 gap-2">
            {stickerOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => setSticker(option.value)}
                className={`border rounded-lg p-2 cursor-pointer transition-all ${
                  sticker === option.value ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="text-xs text-center">{option.label}</div>
                {option.preview && (
                  <div className="flex justify-center mt-1">
                    <img src={option.preview} alt={option.label} className="h-8 w-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper functions for the component
const getBorderColor = (frameColor: FrameColorType) => {
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
    // New soft colors
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

// Options for the UI
const frameColorOptions = [
  { value: 'white' as FrameColorType, label: 'White', color: '#FFFFFF' },
  { value: 'black' as FrameColorType, label: 'Black', color: '#000000' },
  { value: 'pink' as FrameColorType, label: 'Pink', color: '#EC4899' },
  { value: 'purple' as FrameColorType, label: 'Purple', color: '#8B5CF6' },
  { value: 'blue' as FrameColorType, label: 'Blue', color: '#3B82F6' },
  { value: 'green' as FrameColorType, label: 'Green', color: '#10B981' },
  { value: 'yellow' as FrameColorType, label: 'Yellow', color: '#FBBF24' },
  { value: 'softPink' as FrameColorType, label: 'Soft Pink', color: '#FFDEE2' },
  { value: 'softPurple' as FrameColorType, label: 'Soft Purple', color: '#E5DEFF' },
  { value: 'softBlue' as FrameColorType, label: 'Soft Blue', color: '#D3E4FD' },
];

const stickerOptions = [
  { value: 'none' as StickerType, label: 'None' },
  { value: 'mofusand' as StickerType, label: 'Mofusand', preview: '/mofusand-frame.png' },
  { value: 'shin-chan' as StickerType, label: 'Shin Chan', preview: '/shin-chan.png' },
  { value: 'miffy' as StickerType, label: 'Miffy', preview: '/miffy-frame.png' },
];

export default KpopPhotoStripPreview;
