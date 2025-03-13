
import React from 'react';
import TextStyleControls from './TextStyleControls';

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
  setCustomItalic
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
      <div>
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
    </div>
  );
};

export default PhotoStripStylePanel;
