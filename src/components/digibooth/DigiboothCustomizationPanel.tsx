import React from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import { BorderStyle, BorderWidth, FrameTheme } from './BorderStyleSelector';

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
  // Frame color options
  const frameColors: { id: FrameColorType; name: string; bgClass: string }[] = [
    { id: 'white', name: 'White', bgClass: 'bg-white text-black' },
    { id: 'black', name: 'Black', bgClass: 'bg-black text-white' },
    { id: 'pink', name: 'Pink', bgClass: 'bg-pink-400 text-white' },
    { id: 'green', name: 'Green', bgClass: 'bg-green-500 text-white' },
    { id: 'blue', name: 'Blue', bgClass: 'bg-blue-500 text-white' },
    { id: 'yellow', name: 'Yellow', bgClass: 'bg-yellow-400 text-black' },
    { id: 'purple', name: 'Purple', bgClass: 'bg-purple-500 text-white' },
    { id: 'maroon', name: 'Maroon', bgClass: 'bg-red-800 text-white' },
    { id: 'burgundy', name: 'Burgundy', bgClass: 'bg-red-900 text-white' }
  ];

  // Sticker options
  const stickers: { id: StickerType; name: string }[] = [
    { id: 'none', name: 'No Stickers' },
    { id: 'girlypop', name: 'Girlypop' },
    { id: 'cute', name: 'Cute' },
    { id: 'mofusand', name: 'Mofusand' },
    { id: 'shin-chan', name: 'Shin Chan' },
    { id: 'miffy', name: 'Miffy' }
  ];

  // Theme options
  const themes: { id: FrameTheme; name: string; bgClass: string }[] = [
    { id: 'default', name: 'Default', bgClass: 'bg-blue-500 text-white' },
    { id: 'birthday', name: 'Birthday', bgClass: 'bg-gradient-to-r from-yellow-400 to-pink-500 text-white' },
    { id: 'christmas', name: 'Christmas', bgClass: 'bg-gradient-to-r from-green-600 to-red-600 text-white' },
    { id: 'halloween', name: 'Halloween', bgClass: 'bg-gradient-to-r from-orange-500 to-purple-900 text-white' },
    { id: 'valentines', name: 'Valentine\'s', bgClass: 'bg-gradient-to-r from-pink-400 to-red-400 text-white' },
    { id: 'wedding', name: 'Wedding', bgClass: 'bg-gradient-to-r from-blue-100 via-white to-blue-100 text-gray-800 border border-gray-200' }
  ];

  // Border style options
  const borderStyles: { id: BorderStyle; name: string }[] = [
    { id: 'solid', name: 'Solid' },
    { id: 'dashed', name: 'Dashed' },
    { id: 'dotted', name: 'Dotted' },
    { id: 'double', name: 'Double' },
    { id: 'groove', name: 'Groove' },
    { id: 'ridge', name: 'Ridge' }
  ];

  // Border width options
  const borderWidths: { id: BorderWidth; name: string }[] = [
    { id: 'thin', name: 'Thin' },
    { id: 'medium', name: 'Medium' },
    { id: 'thick', name: 'Thick' }
  ];

  return (
    <div className="w-full bg-white backdrop-blur-sm border border-gray-100 p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Digibooth Strip Preview</h2>
      <p className="text-center text-gray-500 mb-6">Customize your digital photo strip</p>
      
      {/* Frame Theme Section (if available) */}
      {setFrameTheme && (
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">Frame Theme</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {themes.map(theme => (
              <button
                key={theme.id}
                className={`px-3 py-1.5 ${theme.bgClass} rounded-md text-sm ${
                  frameTheme === theme.id ? 'ring-2 ring-offset-1 ring-blue-500' : ''
                } hover:opacity-90 transition-all`}
                onClick={() => setFrameTheme(theme.id)}
              >
                {theme.name}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Frame Color Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Frame Color</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {frameColors.map(color => (
            <button
              key={color.id}
              className={`px-3 py-1.5 rounded-md text-sm ${color.bgClass} ${
                frameColor === color.id ? 'ring-2 ring-offset-1 ring-blue-500' : ''
              } hover:opacity-90 transition-all`}
              onClick={() => setFrameColor(color.id)}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Border Style Section (if available) */}
      {setBorderStyle && setBorderWidth && (
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">Border Style</h3>
          <div className="flex flex-wrap justify-center gap-2 mb-3">
            {borderStyles.map(style => (
              <button
                key={style.id}
                className={`px-3 py-1.5 rounded-md text-sm transition-all ${
                  borderStyle === style.id 
                    ? "bg-blue-500 text-white ring-2 ring-offset-1 ring-blue-500" 
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
                onClick={() => setBorderStyle(style.id)}
              >
                {style.name}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {borderWidths.map(width => (
              <button
                key={width.id}
                className={`px-3 py-1.5 rounded-md text-sm transition-all ${
                  borderWidth === width.id 
                    ? "bg-blue-500 text-white ring-2 ring-offset-1 ring-blue-500" 
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
                onClick={() => setBorderWidth(width.id)}
              >
                {width.name}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Background Removal Toggle (if available) */}
      {toggleBackgroundRemoval && (
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">Background Removal</h3>
          <div className="flex justify-center">
            <button
              className={`px-3 py-1.5 rounded-md text-sm transition-all ${
                showBackgroundRemoval
                  ? "bg-blue-500 text-white ring-2 ring-offset-1 ring-blue-500"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
              onClick={toggleBackgroundRemoval}
            >
              {showBackgroundRemoval ? 'Background Removal On' : 'Background Removal Off'}
            </button>
          </div>
        </div>
      )}
      
      {/* Stickers Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">Stickers</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {stickers.map(stickerOption => (
            <button
              key={stickerOption.id}
              className={`px-3 py-1.5 rounded-md text-sm transition-all ${
                sticker === stickerOption.id 
                  ? "bg-blue-500 text-white ring-2 ring-offset-1 ring-blue-500" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSticker(stickerOption.id)}
            >
              {stickerOption.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigiboothCustomizationPanel;
