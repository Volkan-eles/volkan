
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
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {/* Title styling controls */}
      <div className="mb-4">
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
      <div className="mb-4">
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
        <div className="mt-4">
          <h3 className="font-medium text-sm mb-2">Border Style</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            <select 
              className="px-2 py-1 border rounded text-sm"
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
            
            <select 
              className="px-2 py-1 border rounded text-sm"
              value={borderWidth}
              onChange={(e) => setBorderWidth(e.target.value as BorderWidth)}
            >
              <option value="thin">Thin</option>
              <option value="medium">Medium</option>
              <option value="thick">Thick</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoStripStylePanel;
