
import React from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import { BorderStyle, BorderWidth, FrameTheme } from './BorderStyleSelector';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
  return (
    <div className="mx-auto bg-white/70 backdrop-blur-md p-2 rounded-lg shadow-sm overflow-x-auto">
      <div className="flex flex-col space-y-1">
        <div className={`flex ${isMobile ? 'flex-row flex-wrap justify-center gap-2' : 'space-x-3 overflow-x-auto pb-1'}`}>
          {/* Frame Theme Section (if available) */}
          {setFrameTheme && (
            <div className="min-w-fit">
              <FrameThemeOptions frameTheme={frameTheme} setFrameTheme={setFrameTheme} />
            </div>
          )}
          
          {/* Frame Color Section */}
          <div className="min-w-fit">
            <FrameColorOptions frameColor={frameColor} setFrameColor={setFrameColor} />
          </div>
          
          {/* Border Style Section (if available) */}
          {setBorderStyle && setBorderWidth && (
            <div className="min-w-fit">
              <BorderOptions 
                borderStyle={borderStyle} 
                setBorderStyle={setBorderStyle} 
                borderWidth={borderWidth} 
                setBorderWidth={setBorderWidth} 
              />
            </div>
          )}
          
          {/* Background Removal Toggle (if available) */}
          {toggleBackgroundRemoval && (
            <BackgroundRemovalToggle 
              showBackgroundRemoval={showBackgroundRemoval} 
              toggleBackgroundRemoval={toggleBackgroundRemoval} 
            />
          )}
          
          {/* Stickers Section */}
          <div className="min-w-fit">
            <StickerOptions sticker={sticker} setSticker={setSticker} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigiboothCustomizationPanel;
