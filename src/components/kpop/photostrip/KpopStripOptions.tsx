
import React from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import { frameColorOptions, stickerOptions } from '@/utils/kpop/kpopOptions';
import BorderWidthSelector, { BorderWidthValue } from './BorderWidthSelector';

interface KpopStripOptionsProps {
  frameColor: FrameColorType;
  setFrameColor: (color: FrameColorType) => void;
  sticker: StickerType;
  setSticker: (sticker: StickerType) => void;
  borderWidth?: BorderWidthValue;
  setBorderWidth?: (width: BorderWidthValue) => void;
}

const KpopStripOptions: React.FC<KpopStripOptionsProps> = ({
  frameColor,
  setFrameColor,
  sticker,
  setSticker,
  borderWidth = 'full',
  setBorderWidth
}) => {
  return (
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
      
      {/* Border Width Selector */}
      {setBorderWidth && (
        <BorderWidthSelector
          selectedWidth={borderWidth}
          onSelectWidth={setBorderWidth}
        />
      )}
      
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
  );
};

export default KpopStripOptions;
