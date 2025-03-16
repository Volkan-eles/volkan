
import React, { useState } from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import { frameColorOptions, stickerOptions } from '@/utils/kpop/kpopOptions';
import BorderWidthSelector, { BorderWidthValue } from './BorderWidthSelector';
import TextStyleControls from './TextStyleControls';

interface KpopStripOptionsProps {
  frameColor: FrameColorType;
  setFrameColor: (color: FrameColorType) => void;
  sticker: StickerType;
  setSticker: (sticker: StickerType) => void;
  borderWidth: BorderWidthValue;
  setBorderWidth: (width: BorderWidthValue) => void;
  
  // Text styling props
  titleText: string;
  setTitleText: (text: string) => void;
  titleFont: string;
  setTitleFont: (font: string) => void;
  titleColor: string;
  setTitleColor: (color: string) => void;
  titleSize: string;
  setTitleSize: (size: string) => void;
  titleAlignment: 'left' | 'center' | 'right';
  setTitleAlignment: (alignment: 'left' | 'center' | 'right') => void;
  titleItalic: boolean;
  setTitleItalic: (italic: boolean) => void;
  
  customMessage: string;
  setCustomMessage: (text: string) => void;
  customFont: string;
  setCustomFont: (font: string) => void;
  customColor: string;
  setCustomColor: (color: string) => void;
  customSize: string;
  setCustomSize: (size: string) => void;
  customAlignment: 'left' | 'center' | 'right';
  setCustomAlignment: (alignment: 'left' | 'center' | 'right') => void;
  customItalic: boolean;
  setCustomItalic: (italic: boolean) => void;
  
  dateFormat: string;
  setDateFormat: (format: string) => void;
}

const KpopStripOptions: React.FC<KpopStripOptionsProps> = ({
  frameColor,
  setFrameColor,
  sticker,
  setSticker,
  borderWidth,
  setBorderWidth,
  
  // Text styling props
  titleText,
  setTitleText,
  titleFont,
  setTitleFont,
  titleColor,
  setTitleColor,
  titleSize,
  setTitleSize,
  titleAlignment,
  setTitleAlignment,
  titleItalic,
  setTitleItalic,
  
  customMessage,
  setCustomMessage,
  customFont,
  setCustomFont,
  customColor,
  setCustomColor,
  customSize,
  setCustomSize,
  customAlignment,
  setCustomAlignment,
  customItalic,
  setCustomItalic,
  
  dateFormat,
  setDateFormat
}) => {
  const [activeTab, setActiveTab] = useState<'design' | 'text'>('design');
  
  return (
    <div className="mt-6">
      {/* Tab buttons */}
      <div className="flex mb-4 border-b">
        <button 
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'design' 
              ? 'text-purple-600 border-b-2 border-purple-500' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('design')}
        >
          Design
        </button>
        <button 
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'text' 
              ? 'text-purple-600 border-b-2 border-purple-500' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('text')}
        >
          Text
        </button>
      </div>
      
      {/* Design tab content */}
      {activeTab === 'design' && (
        <>
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
          <BorderWidthSelector
            selectedWidth={borderWidth}
            onSelectWidth={setBorderWidth}
          />
          
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
        </>
      )}
      
      {/* Text tab content */}
      {activeTab === 'text' && (
        <TextStyleControls
          titleText={titleText}
          setTitleText={setTitleText}
          titleFont={titleFont}
          setTitleFont={setTitleFont}
          titleColor={titleColor}
          setTitleColor={setTitleColor}
          titleSize={titleSize}
          setTitleSize={setTitleSize}
          titleAlignment={titleAlignment}
          setTitleAlignment={setTitleAlignment}
          titleItalic={titleItalic}
          setTitleItalic={setTitleItalic}
          
          customMessage={customMessage}
          setCustomMessage={setCustomMessage}
          customFont={customFont}
          setCustomFont={setCustomFont}
          customColor={customColor}
          setCustomColor={setCustomColor}
          customSize={customSize}
          setCustomSize={setCustomSize}
          customAlignment={customAlignment}
          setCustomAlignment={setCustomAlignment}
          customItalic={customItalic}
          setCustomItalic={setCustomItalic}
          
          dateFormat={dateFormat}
          setDateFormat={setDateFormat}
        />
      )}
    </div>
  );
};

export default KpopStripOptions;
