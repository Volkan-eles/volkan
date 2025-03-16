
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
  selectedIdols?: Array<{id: string, name: string, src: string}>;
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
  return (
    <div className={`mt-2 pt-2 border-t border-t-${frameColor === 'white' ? 'gray-300' : 'white/30'} ${textColor}`}>
      {/* Title row */}
      <div 
        className={`text-${titleAlignment} font-${titleFont} text-${titleColor} text-${titleSize} ${titleItalic ? 'italic' : ''} cursor-pointer`}
        onClick={onTitleClick}
      >
        {titleText}
      </div>
      
      {/* Date row */}
      <div 
        className={`text-center text-xs mt-1 cursor-pointer ${textColor} opacity-80`}
        onClick={onDateClick}
      >
        {dateFormat === 'short' 
          ? new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }) 
          : new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
        }
      </div>
      
      {/* Custom message */}
      <div 
        className={`text-${customAlignment} font-${customFont} text-${customColor} text-${customSize} mt-1 ${customItalic ? 'italic' : ''} cursor-pointer`}
        onClick={onCustomMessageClick}
      >
        {customMessage}
      </div>
      
      {/* List selected idols at the bottom of the strip */}
      {selectedIdols.length > 0 && (
        <div className="mt-2 text-xs text-center">
          {selectedIdols.map((idol, idx) => (
            <span key={idol.id} className={`${textColor} font-semibold`}>
              {idol.name}{idx < selectedIdols.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default KpopStripFooter;
