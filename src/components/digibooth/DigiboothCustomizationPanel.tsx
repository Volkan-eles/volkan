
import React from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';

interface DigiboothCustomizationPanelProps {
  frameColor: FrameColorType;
  setFrameColor: (color: FrameColorType) => void;
  sticker: StickerType;
  setSticker: (sticker: StickerType) => void;
}

const DigiboothCustomizationPanel: React.FC<DigiboothCustomizationPanelProps> = ({
  frameColor,
  setFrameColor,
  sticker,
  setSticker
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

  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center text-white mb-2">Digibooth Strip Preview</h2>
      <p className="text-center text-white/80 mb-6">Customize your digital photo strip</p>
      
      {/* Frame Color Section */}
      <div className="mb-6">
        <h3 className="text-center font-medium text-white mb-3">Frame Color</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {frameColors.map(color => (
            <button
              key={color.id}
              className={`px-4 py-2 rounded-full ${color.bgClass} ${
                frameColor === color.id ? 'ring-2 ring-offset-2 ring-white' : ''
              } hover:opacity-90 transition-all`}
              onClick={() => setFrameColor(color.id)}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Stickers Section */}
      <div>
        <h3 className="text-center font-medium text-white mb-3">Stickers</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {stickers.map(stickerOption => (
            <button
              key={stickerOption.id}
              className={`px-4 py-2 rounded-full transition-all ${
                sticker === stickerOption.id 
                  ? "bg-pink-400 text-white ring-2 ring-offset-2 ring-white" 
                  : "bg-white/80 hover:bg-white text-gray-800"
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
