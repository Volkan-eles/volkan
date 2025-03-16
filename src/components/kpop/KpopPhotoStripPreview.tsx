
import React, { useRef, useState, useEffect } from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import EmptyState from '@/components/photostrip/EmptyState';
import { fontFamilies, textColors, fontSizes, getFontFamilyStyle } from '@/utils/textStyles';
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
  const [titleColor, setTitleColor] = useState(textColors[2].value); // Purple by default
  const [titleSize, setTitleSize] = useState(fontSizes[4].value); // XL by default
  
  const [customFont, setCustomFont] = useState(fontFamilies[3].value); // Dancing Script by default
  const [customColor, setCustomColor] = useState(textColors[3].value); // Pink by default
  const [customSize, setCustomSize] = useState(fontSizes[2].value); // Base by default
  
  // Text alignment and styling options
  const [titleAlignment, setTitleAlignment] = useState<'left' | 'center' | 'right'>('center');
  const [customAlignment, setCustomAlignment] = useState<'left' | 'center' | 'right'>('center');
  const [titleItalic, setTitleItalic] = useState(false);
  const [customItalic, setCustomItalic] = useState(true); // Default to italic for the custom message
  
  // Border width for adjusting image size
  const [imageSize, setImageSize] = useState<BorderWidthValue>('full');
  
  // Add font styles to the document head
  useEffect(() => {
    const fontLinks = [
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap",
      "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,400&display=swap",
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap",
      "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,600;1,400&display=swap",
      "https://fonts.googleapis.com/css2?family=Pacifico&display=swap",
      "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400&display=swap",
      "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&display=swap",
      "https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&display=swap",
      "https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&display=swap"
    ];
    
    // Add all font links to the document head
    fontLinks.forEach(href => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      }
    });
    
    // Add inline styles for font-family definitions
    const style = document.createElement('style');
    style.textContent = `
      .font-playfair { font-family: 'Playfair Display', serif; }
      .font-poppins { font-family: 'Poppins', sans-serif; }
      .font-dancing { font-family: 'Dancing Script', cursive; }
      .font-mono { font-family: 'Roboto Mono', monospace; }
      .font-pacifico { font-family: 'Pacifico', cursive; }
      .font-montserrat { font-family: 'Montserrat', sans-serif; }
      .font-lora { font-family: 'Lora', serif; }
      .font-oswald { font-family: 'Oswald', sans-serif; }
      .font-caveat { font-family: 'Caveat', cursive; }
    `;
    
    if (!document.querySelector('style#kpop-fonts')) {
      style.id = 'kpop-fonts';
      document.head.appendChild(style);
    }
    
    return () => {
      // Cleanup is typically not needed for font links
      if (document.querySelector('style#kpop-fonts')) {
        document.querySelector('style#kpop-fonts')?.remove();
      }
    };
  }, []);
  
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
    
    // After setting text, also allow font selection
    const fonts = fontFamilies.map((font, index) => `${index}: ${font.name}`).join('\n');
    const fontChoice = prompt(`Select a font for the title:\n${fonts}`, '0');
    if (fontChoice !== null && !isNaN(Number(fontChoice)) && fontFamilies[Number(fontChoice)]) {
      setTitleFont(fontFamilies[Number(fontChoice)].value);
    }
    
    // Allow color selection
    const colors = textColors.map((color, index) => `${index}: ${color.name}`).join('\n');
    const colorChoice = prompt(`Select a color for the title:\n${colors}`, '2');
    if (colorChoice !== null && !isNaN(Number(colorChoice)) && textColors[Number(colorChoice)]) {
      setTitleColor(textColors[Number(colorChoice)].value);
    }
  };
  
  // Handler for custom message click
  const handleCustomMessageClick = () => {
    const newMessage = prompt('Enter custom message:', customMessage);
    if (newMessage !== null) setCustomMessage(newMessage);
    
    // Allow font selection for custom message
    const fonts = fontFamilies.map((font, index) => `${index}: ${font.name}`).join('\n');
    const fontChoice = prompt(`Select a font for the custom message:\n${fonts}`, '3');
    if (fontChoice !== null && !isNaN(Number(fontChoice)) && fontFamilies[Number(fontChoice)]) {
      setCustomFont(fontFamilies[Number(fontChoice)].value);
    }
    
    // Allow color selection for custom message
    const colors = textColors.map((color, index) => `${index}: ${color.name}`).join('\n');
    const colorChoice = prompt(`Select a color for the custom message:\n${colors}`, '3');
    if (colorChoice !== null && !isNaN(Number(colorChoice)) && textColors[Number(colorChoice)]) {
      setCustomColor(textColors[Number(colorChoice)].value);
    }
    
    // Toggle italic
    const italicChoice = confirm('Do you want the text to be italic?');
    setCustomItalic(italicChoice);
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
