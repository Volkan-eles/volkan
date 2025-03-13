
import React from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import { BorderStyle, BorderWidth, FrameTheme } from './BorderStyleSelector';

// Import the smaller, focused components
import FrameColorOptions from './customization/FrameColorOptions';
import StickerOptions from './customization/StickerOptions';
import FrameThemeOptions from './customization/FrameThemeOptions';
import BorderOptions from './customization/BorderOptions';
import BackgroundRemovalToggle from './customization/BackgroundRemovalToggle';

interface DigiboothCustomizationPanelProps {
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
  showBackgroundRemoval?: boolean;
  toggleBackgroundRemoval?: () => void;
}

const DigiboothCustomizationPanel: React.FC<DigiboothCustomizationPanelProps> = ({
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
  showBackgroundRemoval = false,
  toggleBackgroundRemoval
}) => {
  return (
    <div className="w-full bg-white backdrop-blur-sm border border-gray-100 p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Digibooth Strip Preview</h2>
      <p className="text-center text-gray-500 mb-6">Customize your digital photo strip</p>
      
      {/* Frame Theme Section (if available) */}
      {setFrameTheme && (
        <FrameThemeOptions 
          frameTheme={frameTheme} 
          setFrameTheme={setFrameTheme} 
        />
      )}
      
      {/* Frame Color Section */}
      <FrameColorOptions 
        frameColor={frameColor} 
        setFrameColor={setFrameColor} 
      />
      
      {/* Border Style Section (if available) */}
      {setBorderStyle && setBorderWidth && (
        <BorderOptions 
          borderStyle={borderStyle} 
          setBorderStyle={setBorderStyle} 
          borderWidth={borderWidth} 
          setBorderWidth={setBorderWidth} 
        />
      )}
      
      {/* Background Removal Toggle (if available) */}
      {toggleBackgroundRemoval && (
        <BackgroundRemovalToggle 
          showBackgroundRemoval={showBackgroundRemoval} 
          toggleBackgroundRemoval={toggleBackgroundRemoval} 
        />
      )}
      
      {/* Stickers Section */}
      <StickerOptions 
        sticker={sticker} 
        setSticker={setSticker} 
      />
    </div>
  );
};

export default DigiboothCustomizationPanel;
