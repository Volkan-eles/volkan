
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { fontFamilies, textColors, fontSizes } from '@/utils/textStyles';

interface TextPanelProps {
  onTextStyleChange?: (style: {
    text?: string;
    font?: string;
    color?: string;
    size?: string;
  }) => void;
}

const TextPanel: React.FC<TextPanelProps> = ({ onTextStyleChange }) => {
  const [selectedText, setSelectedText] = useState('');
  const [selectedFont, setSelectedFont] = useState(fontFamilies[0].value);
  const [selectedColor, setSelectedColor] = useState(textColors[0].value);
  const [fontSize, setFontSize] = useState(16);

  const handleTextChange = (value: string) => {
    setSelectedText(value);
    onTextStyleChange?.({ text: value });
  };

  const handleFontChange = (font: string) => {
    setSelectedFont(font);
    onTextStyleChange?.({ font });
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    onTextStyleChange?.({ color });
  };

  const handleSizeChange = (value: number[]) => {
    setFontSize(value[0]);
    onTextStyleChange?.({ size: `${value[0]}px` });
  };

  return (
    <Tabs defaultValue="text" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-[#333]">
        <TabsTrigger value="text">Text</TabsTrigger>
        <TabsTrigger value="font">Font</TabsTrigger>
        <TabsTrigger value="color">Color</TabsTrigger>
        <TabsTrigger value="size">Size</TabsTrigger>
      </TabsList>

      <TabsContent value="text" className="space-y-4 mt-4">
        <div className="space-y-2">
          <Label>Enter Text</Label>
          <Input
            value={selectedText}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder="Enter your text here..."
            className="bg-[#333] border-0"
          />
        </div>
      </TabsContent>

      <TabsContent value="font" className="mt-4">
        <div className="grid grid-cols-2 gap-2">
          {fontFamilies.map((font) => (
            <button
              key={font.value}
              onClick={() => handleFontChange(font.value)}
              className={`p-2 rounded-md transition-colors ${
                selectedFont === font.value
                  ? 'bg-[#4b30ab] text-white'
                  : 'bg-[#333] hover:bg-[#444]'
              }`}
            >
              <span className={`font-${font.value}`}>{font.name}</span>
            </button>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="color" className="mt-4">
        <div className="grid grid-cols-4 gap-2">
          {textColors.map((color) => (
            <button
              key={color.value}
              onClick={() => handleColorChange(color.value)}
              className={`w-8 h-8 rounded-full border-2 ${
                selectedColor === color.value ? 'border-white' : 'border-transparent'
              }`}
              style={{ backgroundColor: color.value }}
              aria-label={`Select ${color.name}`}
            />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="size" className="space-y-4 mt-4">
        <div className="space-y-2">
          <Label>Font Size: {fontSize}px</Label>
          <Slider
            defaultValue={[16]}
            max={72}
            min={8}
            step={1}
            value={[fontSize]}
            onValueChange={handleSizeChange}
            className="w-full"
          />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TextPanel;
