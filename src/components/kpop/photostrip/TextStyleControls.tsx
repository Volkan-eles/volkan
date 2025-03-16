
import React from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  fontFamilies, 
  textColors, 
  fontSizes, 
  alignmentOptions 
} from '@/utils/textStyles';

interface TextStyleControlsProps {
  // Title text properties
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
  
  // Custom message properties
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
  
  // Date format
  dateFormat: string;
  setDateFormat: (format: string) => void;
}

const TextStyleControls: React.FC<TextStyleControlsProps> = ({
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
  return (
    <div className="space-y-6 mt-4">
      <h3 className="text-sm font-medium text-gray-700">Text Styling</h3>
      
      {/* Title Text Styling */}
      <div className="space-y-3 border-b pb-4">
        <h4 className="text-xs font-medium text-gray-600">Title Text</h4>
        
        <div className="space-y-2">
          <label className="text-xs text-gray-500">Text</label>
          <input
            type="text"
            value={titleText}
            onChange={(e) => setTitleText(e.target.value)}
            className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <label className="text-xs text-gray-500">Font</label>
            <Select value={titleFont} onValueChange={setTitleFont}>
              <SelectTrigger className="h-8 text-xs">
                <SelectValue placeholder="Select font" />
              </SelectTrigger>
              <SelectContent>
                {fontFamilies.map(font => (
                  <SelectItem key={font.value} value={font.value} className={`font-${font.value}`}>
                    {font.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-1">
            <label className="text-xs text-gray-500">Size</label>
            <Select value={titleSize} onValueChange={setTitleSize}>
              <SelectTrigger className="h-8 text-xs">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                {fontSizes.map(size => (
                  <SelectItem key={size.value} value={size.value}>
                    {size.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <label className="text-xs text-gray-500">Color</label>
            <div className="flex flex-wrap gap-1">
              {textColors.slice(0, 8).map(color => (
                <button
                  key={color.value}
                  onClick={() => setTitleColor(color.value)}
                  className={`w-5 h-5 rounded-full ${
                    titleColor === color.value ? 'ring-2 ring-offset-1 ring-purple-500' : ''
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="text-xs text-gray-500">Alignment</label>
            <div className="flex space-x-1">
              {alignmentOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() => setTitleAlignment(option.value as 'left' | 'center' | 'right')}
                  className={`px-2 py-1 text-xs border rounded ${
                    titleAlignment === option.value
                      ? 'bg-purple-100 border-purple-300'
                      : 'border-gray-300'
                  }`}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="titleItalic"
            checked={titleItalic}
            onChange={() => setTitleItalic(!titleItalic)}
            className="mr-2"
          />
          <label htmlFor="titleItalic" className="text-xs text-gray-500">Italic</label>
        </div>
      </div>
      
      {/* Custom Message Styling */}
      <div className="space-y-3 border-b pb-4">
        <h4 className="text-xs font-medium text-gray-600">Custom Message</h4>
        
        <div className="space-y-2">
          <label className="text-xs text-gray-500">Text</label>
          <input
            type="text"
            value={customMessage}
            onChange={(e) => setCustomMessage(e.target.value)}
            className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <label className="text-xs text-gray-500">Font</label>
            <Select value={customFont} onValueChange={setCustomFont}>
              <SelectTrigger className="h-8 text-xs">
                <SelectValue placeholder="Select font" />
              </SelectTrigger>
              <SelectContent>
                {fontFamilies.map(font => (
                  <SelectItem key={font.value} value={font.value} className={`font-${font.value}`}>
                    {font.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-1">
            <label className="text-xs text-gray-500">Size</label>
            <Select value={customSize} onValueChange={setCustomSize}>
              <SelectTrigger className="h-8 text-xs">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                {fontSizes.map(size => (
                  <SelectItem key={size.value} value={size.value}>
                    {size.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <label className="text-xs text-gray-500">Color</label>
            <div className="flex flex-wrap gap-1">
              {textColors.slice(0, 8).map(color => (
                <button
                  key={color.value}
                  onClick={() => setCustomColor(color.value)}
                  className={`w-5 h-5 rounded-full ${
                    customColor === color.value ? 'ring-2 ring-offset-1 ring-purple-500' : ''
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="text-xs text-gray-500">Alignment</label>
            <div className="flex space-x-1">
              {alignmentOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() => setCustomAlignment(option.value as 'left' | 'center' | 'right')}
                  className={`px-2 py-1 text-xs border rounded ${
                    customAlignment === option.value
                      ? 'bg-purple-100 border-purple-300'
                      : 'border-gray-300'
                  }`}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="customItalic"
            checked={customItalic}
            onChange={() => setCustomItalic(!customItalic)}
            className="mr-2"
          />
          <label htmlFor="customItalic" className="text-xs text-gray-500">Italic</label>
        </div>
      </div>
      
      {/* Date Format */}
      <div className="space-y-3">
        <h4 className="text-xs font-medium text-gray-600">Date Format</h4>
        <div className="flex space-x-2">
          <button
            onClick={() => setDateFormat('short')}
            className={`px-3 py-1.5 text-xs border rounded ${
              dateFormat === 'short' ? 'bg-purple-100 border-purple-300' : 'border-gray-300'
            }`}
          >
            Short (MM/DD/YYYY)
          </button>
          <button
            onClick={() => setDateFormat('long')}
            className={`px-3 py-1.5 text-xs border rounded ${
              dateFormat === 'long' ? 'bg-purple-100 border-purple-300' : 'border-gray-300'
            }`}
          >
            Long (Weekday, Month DD, YYYY)
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextStyleControls;
