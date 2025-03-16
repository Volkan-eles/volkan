
import React from 'react';

interface KpopStripFooterProps {
  titleText: string;
  dateFormat: string;
  customMessage: string;
  titleAlignment: 'left' | 'center' | 'right';
  customAlignment: 'left' | 'center' | 'right';
  titleItalic: boolean;
  customItalic: boolean;
  titleFont: string;
  titleColor: string;
  titleSize: string;
  customFont: string;
  customColor: string;
  customSize: string;
  textColor: string;
  onTitleClick: () => void;
  onCustomMessageClick: () => void;
  onDateClick: () => void;
  selectedIdols?: Array<{
    id: string;
    name: string;
    src: string;
  }>;
  frameColor: string;
}

const KpopStripFooter: React.FC<KpopStripFooterProps> = ({
  titleText,
  dateFormat,
  customMessage,
  titleAlignment,
  customAlignment,
  titleItalic,
  customItalic,
  titleFont,
  titleColor,
  titleSize,
  customFont,
  customColor,
  customSize,
  textColor,
  onTitleClick,
  onCustomMessageClick,
  onDateClick,
  selectedIdols = [],
  frameColor
}) => {
  // Function to map font value to actual CSS font-family
  const getFontFamily = (fontValue: string) => {
    switch(fontValue) {
      case 'sans': return 'font-sans';
      case 'playfair': return 'font-serif'; // Using serif as fallback for Playfair
      case 'poppins': return 'font-sans';
      case 'dancing': return 'font-cursive';
      case 'mono': return 'font-mono';
      case 'pacifico': return 'font-pacifico';
      case 'montserrat': return 'font-montserrat';
      case 'lora': return 'font-lora';
      case 'oswald': return 'font-oswald';
      case 'caveat': return 'font-caveat';
      default: return 'font-sans';
    }
  };
  
  return (
    <div className={`mt-3 pt-3 border-t border-t-${frameColor === 'white' ? 'gray-300' : 'white/30'} ${textColor}`}>
      {/* Title row with properly applied font family */}
      <div 
        style={{ color: titleColor }}
        className={`text-${titleAlignment} ${getFontFamily(titleFont)} ${titleSize} ${titleItalic ? 'italic' : ''} cursor-pointer mb-2.5 font-bold`}
        onClick={onTitleClick}
      >
        {titleText}
      </div>
      
      {/* Date row with improved spacing */}
      <div 
        className={`text-center text-xs cursor-pointer ${textColor} opacity-80 mb-2.5`}
        onClick={onDateClick}
      >
        {dateFormat === 'short' 
          ? new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }) 
          : new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
        }
      </div>
      
      {/* Custom message with properly applied font family */}
      <div 
        style={{ color: customColor }}
        className={`text-${customAlignment} ${getFontFamily(customFont)} ${customSize} ${customItalic ? 'italic' : ''} cursor-pointer mb-1.5`}
        onClick={onCustomMessageClick}
      >
        {customMessage}
      </div>
      
      {/* List selected idols with improved styling */}
      {selectedIdols.length > 0 && (
        <div className="mt-3 text-xs text-center opacity-75 border-t border-t-gray-200 pt-2">
          {selectedIdols.map((idol, idx) => (
            <span key={idol.id} className={`${textColor} font-medium`}>
              {idol.name}{idx < selectedIdols.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default KpopStripFooter;
