
import React from 'react';
import { BorderStyle, BorderWidth, FrameTheme } from './BorderStyleSelector';

interface PhotoStripFooterProps {
  titleText: string;
  customMessage: string;
  dateFormat: string;
  titleFont: string;
  titleColor: string;
  titleSize: string;
  customFont: string;
  customColor: string;
  customSize: string;
  titleAlignment: 'left' | 'center' | 'right';
  customAlignment: 'left' | 'center' | 'right';
  titleItalic: boolean;
  customItalic: boolean;
  textColor: string;
  borderStyle?: BorderStyle;
  borderWidth?: BorderWidth;
  frameTheme?: FrameTheme;
  onTitleClick: () => void;
  onCustomMessageClick: () => void;
  onDateClick: () => void;
}

const PhotoStripFooter: React.FC<PhotoStripFooterProps> = ({
  titleText,
  customMessage,
  dateFormat,
  titleFont,
  titleColor,
  titleSize,
  customFont,
  customColor,
  customSize,
  titleAlignment,
  customAlignment,
  titleItalic,
  customItalic,
  textColor,
  borderStyle = 'solid',
  borderWidth = 'medium',
  frameTheme = 'default',
  onTitleClick,
  onCustomMessageClick,
  onDateClick
}) => {
  // Helper functions
  const getAlignmentClass = (alignment: 'left' | 'center' | 'right') => {
    switch (alignment) {
      case 'left': return 'text-left';
      case 'right': return 'text-right';
      default: return 'text-center';
    }
  };
  
  const getItalicClass = (isItalic: boolean) => {
    return isItalic ? 'italic' : '';
  };
  
  const getBorderStyleClass = () => {
    switch (borderStyle) {
      case 'dashed': return 'border-dashed';
      case 'dotted': return 'border-dotted';
      case 'double': return 'border-double';
      case 'groove': return 'border-groove';
      case 'ridge': return 'border-ridge';
      default: return 'border-solid';
    }
  };
  
  const getBorderWidthClass = () => {
    switch (borderWidth) {
      case 'thin': return 'border';
      case 'thick': return 'border-4';
      default: return 'border-2';
    }
  };
  
  const getThemeClass = () => {
    switch (frameTheme) {
      case 'birthday':
        return 'bg-gradient-to-r from-yellow-400 to-pink-500 text-white p-2 rounded';
      case 'christmas':
        return 'bg-gradient-to-r from-green-600 to-red-600 text-white p-2 rounded';
      case 'halloween':
        return 'bg-gradient-to-r from-orange-500 to-purple-900 text-white p-2 rounded';
      case 'valentines':
        return 'bg-gradient-to-r from-pink-400 to-red-400 text-white p-2 rounded';
      case 'wedding':
        return 'bg-gradient-to-r from-blue-100 via-white to-blue-100 text-gray-800 p-2 rounded';
      default:
        return '';
    }
  };
  
  const formatDate = () => {
    const today = new Date();
    if (dateFormat === 'short') {
      return today.toLocaleDateString();
    } else {
      return today.toLocaleDateString(undefined, { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
  };
  
  return (
    <div className={`py-2 ${textColor} ${getThemeClass()} ${getBorderStyleClass()} ${getBorderWidthClass()}`}>
      {/* Title text with custom font */}
      <div 
        className={`font-${titleFont} ${titleSize} cursor-pointer ${getAlignmentClass(titleAlignment)} ${getItalicClass(titleItalic)}`}
        style={{ color: titleColor }}
        onClick={onTitleClick}
      >
        {titleText}
      </div>
      
      {/* Date with toggle functionality */}
      <div 
        className={`text-xs mt-1 cursor-pointer ${getAlignmentClass(titleAlignment)}`}
        onClick={onDateClick}
      >
        {formatDate()}
      </div>
      
      {/* Custom message with different font */}
      <div 
        className={`font-${customFont} ${customSize} mt-2 cursor-pointer ${getAlignmentClass(customAlignment)} ${getItalicClass(customItalic)}`}
        style={{ color: customColor }}
        onClick={onCustomMessageClick}
      >
        {customMessage}
      </div>
    </div>
  );
};

export default PhotoStripFooter;
