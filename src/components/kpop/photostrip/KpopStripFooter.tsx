
import React from 'react';
import { getFontFamilyStyle } from '@/utils/textStyles';

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
  return (
    <div className={`mt-3 pt-3 border-t border-t-${frameColor === 'white' ? 'gray-300' : 'white/30'} ${textColor}`}>
      {/* Title row with custom font and styles */}
      <div 
        style={{ 
          color: titleColor,
          fontFamily: getFontFamilyStyle(titleFont),
          textAlign: titleAlignment
        }}
        className={`${titleSize} ${titleItalic ? 'italic' : ''} cursor-pointer mb-2.5 font-bold`}
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
      
      {/* Custom message with custom font and styles */}
      <div 
        style={{ 
          color: customColor,
          fontFamily: getFontFamilyStyle(customFont),
          textAlign: customAlignment
        }}
        className={`${customSize} ${customItalic ? 'italic' : ''} cursor-pointer mb-1.5`}
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
