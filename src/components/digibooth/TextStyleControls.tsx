
import React from 'react';
import { Italic, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { fontFamilies, textColors, fontSizes } from '@/utils/textStyles';

interface TextStyleControlsProps {
  textFont: string;
  textColor: string;
  textSize: string;
  textAlignment: 'left' | 'center' | 'right';
  textItalic: boolean;
  onFontChange: (font: string) => void;
  onColorChange: (color: string) => void;
  onSizeChange: (size: string) => void;
  onAlignmentChange: (alignment: 'left' | 'center' | 'right') => void;
  onItalicChange: (italic: boolean) => void;
  label: string;
}

const TextStyleControls: React.FC<TextStyleControlsProps> = ({
  textFont,
  textColor,
  textSize,
  textAlignment,
  textItalic,
  onFontChange,
  onColorChange,
  onSizeChange,
  onAlignmentChange,
  onItalicChange,
  label
}) => {
  return (
    <div>
      <h3 className="font-medium text-sm mb-2">{label}</h3>
      <div className="flex flex-wrap gap-2 mb-2">
        <select 
          className="px-2 py-1 border rounded text-sm"
          value={textFont}
          onChange={(e) => onFontChange(e.target.value)}
        >
          {fontFamilies.map((font) => (
            <option key={font.value} value={font.value}>{font.name}</option>
          ))}
        </select>
        
        <select 
          className="px-2 py-1 border rounded text-sm"
          value={textSize}
          onChange={(e) => onSizeChange(e.target.value)}
        >
          {fontSizes.map((size) => (
            <option key={size.value} value={size.value}>{size.name}</option>
          ))}
        </select>
        
        <div className="flex gap-1">
          {textColors.map((color) => (
            <button
              key={color.value}
              className={`w-6 h-6 rounded-full ${textColor === color.value ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
              style={{ backgroundColor: color.value }}
              onClick={() => onColorChange(color.value)}
            />
          ))}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 items-center">
        <ToggleGroup type="single" value={textAlignment} onValueChange={(value) => value && onAlignmentChange(value as 'left' | 'center' | 'right')}>
          <ToggleGroupItem value="left" aria-label="Left align">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Center align">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Right align">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
        
        <Toggle 
          pressed={textItalic} 
          onPressedChange={onItalicChange}
          aria-label="Toggle italic"
          className="ml-2"
        >
          <Italic className="h-4 w-4" />
        </Toggle>
      </div>
    </div>
  );
};

export default TextStyleControls;
