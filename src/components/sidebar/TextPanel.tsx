import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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

  const handleAddText = () => {
    onTextStyleChange?.({
      text: selectedText,
      font: selectedFont,
      color: selectedColor,
      size: `${fontSize}px`,
    });
  };

  return (
    <Tabs defaultValue="text" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-[#333] rounded-lg overflow-hidden">
        <TabsTrigger value="text" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-fuchsia-500 data-[state=active]:text-white">Text</TabsTrigger>
        <TabsTrigger value="font" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-fuchsia-500 data-[state=active]:text-white">Font</TabsTrigger>
        <TabsTrigger value="color" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-fuchsia-500 data-[state=active]:text-white">Color</TabsTrigger>
        <TabsTrigger value="size" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-fuchsia-500 data-[state=active]:text-white">Size</TabsTrigger>
      </TabsList>

      <TabsContent value="text" className="space-y-4 mt-4">
        <div className="space-y-2">
          <Label className="text-white/80 font-medium">Enter Text</Label>
          <Input
            value={selectedText}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder="Enter your text here..."
            className="bg-[#333] border-0 focus-visible:ring-1 focus-visible:ring-violet-500 transition-all"
          />
          <Button
            onClick={handleAddText}
            className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
          >
            Add Text
          </Button>
        </div>
      </TabsContent>

      <TabsContent value="font" className="mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
          {fontFamilies.map((font) => (
            <button
              key={font.value}
              onClick={() => handleFontChange(font.value)}
              className={`p-2 rounded-md transition-all duration-200 ${
                selectedFont === font.value
                  ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-md'
                  : 'bg-[#333] hover:bg-[#444] hover:scale-[1.02]'
              }`}
            >
              <span className={`font-${font.value}`}>{font.name}</span>
            </button>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="color" className="mt-4">
        <div className="grid grid-cols-5 sm:grid-cols-6 gap-3">
          {textColors.map((color) => (
            <button
              key={color.value}
              onClick={() => handleColorChange(color.value)}
              className={`w-10 h-10 rounded-full transition-all duration-200 transform hover:scale-110 ${
                selectedColor === color.value ? 'ring-2 ring-white ring-offset-2 ring-offset-[#1A1A1A]' : ''
              }`}
              style={{ backgroundColor: color.value }}
              aria-label={`Select ${color.name}`}
            />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="size" className="space-y-4 mt-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-white/80 font-medium">Font Size</Label>
            <span className="text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2 py-0.5 rounded-md text-xs font-medium">
              {fontSize}px
            </span>
          </div>
          <Slider
            defaultValue={[16]}
            max={72}
            min={8}
            step={1}
            value={[fontSize]}
            onValueChange={handleSizeChange}
            className="w-full my-4"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>8px</span>
            <span>40px</span>
            <span>72px</span>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TextPanel;
