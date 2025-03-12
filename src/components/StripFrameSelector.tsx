
import React from 'react';
import { Button } from '@/components/ui/button';

interface StripFrameSelectorProps {
  selectedFrame: string;
  onSelectFrame: (frame: string) => void;
}

const StripFrameSelector: React.FC<StripFrameSelectorProps> = ({ 
  selectedFrame, 
  onSelectFrame 
}) => {
  const frameColors = [
    { name: 'White', value: 'white' },
    { name: 'Black', value: 'black' },
    { name: 'Pink', value: 'pink-500' },
    { name: 'Green', value: 'green-500' },
    { name: 'Blue', value: 'blue-500' },
    { name: 'Yellow', value: 'yellow-500' },
    { name: 'Purple', value: 'purple-500' },
    { name: 'Maroon', value: 'red-800' },
    { name: 'Burgundy', value: 'rose-800' },
  ];
  
  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium mb-2 text-pink-600">Frame Color</h3>
      <div className="flex flex-wrap gap-2">
        {frameColors.map((color) => (
          <Button
            key={color.value}
            onClick={() => onSelectFrame(color.value)}
            className={`px-3 py-1 h-8 text-xs ${
              selectedFrame === color.value 
                ? 'ring-2 ring-offset-2 ring-pink-500' 
                : ''
            } ${
              color.value === 'white' 
                ? 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-100' 
                : color.value === 'black'
                ? 'bg-black text-white hover:bg-gray-800'
                : `bg-${color.value} hover:bg-${color.value}/90 text-white`
            }`}
            variant="ghost"
          >
            {color.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default StripFrameSelector;
