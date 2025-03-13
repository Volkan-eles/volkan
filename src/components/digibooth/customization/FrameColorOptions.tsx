
import React from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { Button } from '@/components/ui/button';

interface FrameColorOptionsProps {
  frameColor: FrameColorType;
  setFrameColor: (color: FrameColorType) => void;
}

const FrameColorOptions: React.FC<FrameColorOptionsProps> = ({
  frameColor,
  setFrameColor
}) => {
  // Frame color options
  const frameColors: { id: FrameColorType; name: string }[] = [
    { id: 'white', name: 'White' },
    { id: 'black', name: 'Black' },
    { id: 'pink', name: 'Pink' },
    { id: 'green', name: 'Green' },
    { id: 'blue', name: 'Blue' },
    { id: 'yellow', name: 'Yellow' },
    { id: 'purple', name: 'Purple' }
  ];

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-600 mb-1">Frame</h3>
      <div className="flex flex-wrap gap-1">
        {frameColors.map(color => (
          <Button
            key={color.id}
            className={`px-2 py-0.5 rounded-md text-xs h-auto transition-all ${
              frameColor === color.id 
                ? "bg-primary text-white ring-1 ring-offset-1 ring-primary" 
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            onClick={() => setFrameColor(color.id)}
          >
            {color.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FrameColorOptions;
