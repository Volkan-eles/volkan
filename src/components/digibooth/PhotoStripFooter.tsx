
import React from 'react';

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
    <div className={`py-2 ${textColor}`}>
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
