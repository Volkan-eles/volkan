
import React from 'react';
import { BorderStyle, BorderWidth, FrameTheme } from '@/components/digibooth/BorderStyleSelector';
import BorderStyleSelector from '@/components/digibooth/BorderStyleSelector';
import PhotoStripStylePanel from '@/components/digibooth/PhotoStripStylePanel';
import StripControls from '@/components/photostrip/StripControls';

interface PhotoStripControlPanelProps {
  borderStyle: BorderStyle;
  borderWidth: BorderWidth;
  frameTheme: FrameTheme;
  titleFont: string;
  titleColor: string;
  titleSize: string;
  titleAlignment: 'left' | 'center' | 'right';
  titleItalic: boolean;
  customFont: string;
  customColor: string;
  customSize: string;
  customAlignment: 'left' | 'center' | 'right';
  customItalic: boolean;
  onStyleChange: (style: BorderStyle) => void;
  onWidthChange: (width: BorderWidth) => void;
  onThemeChange: (theme: FrameTheme) => void;
  setTitleFont: (font: string) => void;
  setTitleColor: (color: string) => void;
  setTitleSize: (size: string) => void;
  setTitleAlignment: (alignment: 'left' | 'center' | 'right') => void;
  setTitleItalic: (italic: boolean) => void;
  setCustomFont: (font: string) => void;
  setCustomColor: (color: string) => void;
  setCustomSize: (size: string) => void;
  setCustomAlignment: (alignment: 'left' | 'center' | 'right') => void;
  setCustomItalic: (italic: boolean) => void;
  setBorderStyle: (style: BorderStyle) => void;
  setBorderWidth: (width: BorderWidth) => void;
  photoCount: number;
  onDownload?: () => void;
  onTakeNewPhotos?: () => void;
}

const PhotoStripControlPanel: React.FC<PhotoStripControlPanelProps> = ({
  borderStyle,
  borderWidth,
  frameTheme,
  titleFont,
  titleColor,
  titleSize,
  titleAlignment,
  titleItalic,
  customFont,
  customColor,
  customSize,
  customAlignment,
  customItalic,
  onStyleChange,
  onWidthChange,
  onThemeChange,
  setTitleFont,
  setTitleColor,
  setTitleSize,
  setTitleAlignment,
  setTitleItalic,
  setCustomFont,
  setCustomColor,
  setCustomSize,
  setCustomAlignment,
  setCustomItalic,
  setBorderStyle,
  setBorderWidth,
  photoCount,
  onDownload,
  onTakeNewPhotos
}) => {
  return (
    <>
      {/* Border Style Selector */}
      <BorderStyleSelector
        selectedStyle={borderStyle}
        selectedWidth={borderWidth}
        selectedTheme={frameTheme}
        onStyleChange={onStyleChange}
        onWidthChange={onWidthChange}
        onThemeChange={onThemeChange}
      />
      
      {/* Font and Color Controls */}
      <PhotoStripStylePanel
        titleFont={titleFont}
        titleColor={titleColor}
        titleSize={titleSize}
        titleAlignment={titleAlignment}
        titleItalic={titleItalic}
        setTitleFont={setTitleFont}
        setTitleColor={setTitleColor}
        setTitleSize={setTitleSize}
        setTitleAlignment={setTitleAlignment}
        setTitleItalic={setTitleItalic}
        customFont={customFont}
        customColor={customColor}
        customSize={customSize}
        customAlignment={customAlignment}
        customItalic={customItalic}
        setCustomFont={setCustomFont}
        setCustomColor={setCustomColor}
        setCustomSize={setCustomSize}
        setCustomAlignment={setCustomAlignment}
        setCustomItalic={setCustomItalic}
        borderStyle={borderStyle}
        setBorderStyle={setBorderStyle}
        borderWidth={borderWidth}
        setBorderWidth={setBorderWidth}
      />
      
      {photoCount >= 3 && onDownload && onTakeNewPhotos && (
        <StripControls
          onDownload={onDownload}
          onTakeNewPhotos={onTakeNewPhotos}
        />
      )}
    </>
  );
};

export default PhotoStripControlPanel;
