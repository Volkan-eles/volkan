
import React from 'react';
import TextStyleControls from './TextStyleControls';
import { BorderStyle, BorderWidth } from '@/components/digibooth/BorderStyleSelector';

interface PhotoStripStylePanelProps {
  titleFont: string;
  titleColor: string;
  titleSize: string;
  titleAlignment: 'left' | 'center' | 'right';
  titleItalic: boolean;
  setTitleFont: (font: string) => void;
  setTitleColor: (color: string) => void;
  setTitleSize: (size: string) => void;
  setTitleAlignment: (alignment: 'left' | 'center' | 'right') => void;
  setTitleItalic: (italic: boolean) => void;
  customFont: string;
  customColor: string;
  customSize: string;
  customAlignment: 'left' | 'center' | 'right';
  customItalic: boolean;
  setCustomFont: (font: string) => void;
  setCustomColor: (color: string) => void;
  setCustomSize: (size: string) => void;
  setCustomAlignment: (alignment: 'left' | 'center' | 'right') => void;
  setCustomItalic: (italic: boolean) => void;
  borderStyle?: BorderStyle;
  setBorderStyle?: (style: BorderStyle) => void;
  borderWidth?: BorderWidth;
  setBorderWidth?: (width: BorderWidth) => void;
}

const PhotoStripStylePanel: React.FC<PhotoStripStylePanelProps> = ({
  titleFont,
  titleColor,
  titleSize,
  titleAlignment,
  titleItalic,
  setTitleFont,
  setTitleColor,
  setTitleSize,
  setTitleAlignment,
  setTitleItalic,
  customFont,
  customColor,
  customSize,
  customAlignment,
  customItalic,
  setCustomFont,
  setCustomColor,
  setCustomSize,
  setCustomAlignment,
  setCustomItalic,
  borderStyle = 'solid',
  setBorderStyle,
  borderWidth = 'medium',
  setBorderWidth
}) => {
  // Helper function to get the border width preview class
  const getBorderWidthClass = (width: BorderWidth) => {
    switch(width) {
      case 'none': return 'border-0';
      case 'hairline': return 'border-[1px]';
      case 'thin': return 'border-2';
      case 'medium': return 'border-4';
      case 'thick': return 'border-6';
      case 'heavy': return 'border-8';
      case 'ultra': return 'border-[12px]';
      default: return 'border-4';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300">
      <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Text Styling</h2>
      
      {/* Title styling controls */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
          <h3 className="font-medium text-gray-700">Title Style</h3>
        </div>
        <TextStyleControls
          textFont={titleFont}
          textColor={titleColor}
          textSize={titleSize}
          textAlignment={titleAlignment}
          textItalic={titleItalic}
          onFontChange={setTitleFont}
          onColorChange={setTitleColor}
          onSizeChange={setTitleSize}
          onAlignmentChange={setTitleAlignment}
          onItalicChange={setTitleItalic}
          label="Title Style"
        />
      </div>
      
      {/* Custom message styling controls */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
          <h3 className="font-medium text-gray-700">Custom Message Style</h3>
        </div>
        <TextStyleControls
          textFont={customFont}
          textColor={customColor}
          textSize={customSize}
          textAlignment={customAlignment}
          textItalic={customItalic}
          onFontChange={setCustomFont}
          onColorChange={setCustomColor}
          onSizeChange={setCustomSize}
          onAlignmentChange={setCustomAlignment}
          onItalicChange={setCustomItalic}
          label="Custom Message Style"
        />
      </div>
      
      {/* Border styling controls (if available) */}
      {setBorderStyle && setBorderWidth && (
        <div className="mt-6">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <h3 className="font-medium text-gray-700">Border Style</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Border Type</label>
              <select 
                className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={borderStyle}
                onChange={(e) => setBorderStyle(e.target.value as BorderStyle)}
              >
                <option value="solid">Solid</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
                <option value="double">Double</option>
                <option value="groove">Groove</option>
                <option value="ridge">Ridge</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Border Thickness</label>
              <select 
                className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={borderWidth}
                onChange={(e) => setBorderWidth(e.target.value as BorderWidth)}
              >
                <option value="none">None</option>
                <option value="hairline">Hairline</option>
                <option value="thin">Thin</option>
                <option value="medium">Medium</option>
                <option value="thick">Thick</option>
                <option value="heavy">Heavy</option>
                <option value="ultra">Ultra</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500">
              <span className="font-medium text-gray-700">Preview: </span> 
              <span className={`inline-block mx-2 px-4 py-1 ${
                borderStyle === 'solid' ? 'border-solid' : 
                borderStyle === 'dashed' ? 'border-dashed' : 
                borderStyle === 'dotted' ? 'border-dotted' : 
                borderStyle === 'double' ? 'border-double' : 
                borderStyle === 'groove' ? 'border-groove' : 'border-ridge'
              } ${getBorderWidthClass(borderWidth)} border-gray-400 rounded`}>
                Border Style Example
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoStripStylePanel;
