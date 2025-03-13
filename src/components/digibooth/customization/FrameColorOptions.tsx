
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
  const frameColors: { id: FrameColorType; name: string; bgClass: string }[] = [
    { id: 'white', name: 'White', bgClass: 'bg-white text-black' },
    { id: 'black', name: 'Black', bgClass: 'bg-black text-white' },
    { id: 'pink', name: 'Pink', bgClass: 'bg-pink-400 text-white' },
    { id: 'green', name: 'Green', bgClass: 'bg-green-500 text-white' },
    { id: 'blue', name: 'Blue', bgClass: 'bg-blue-500 text-white' },
    { id: 'yellow', name: 'Yellow', bgClass: 'bg-yellow-400 text-black' },
    { id: 'purple', name: 'Purple', bgClass: 'bg-purple-500 text-white' },
    { id: 'maroon', name: 'Maroon', bgClass: 'bg-red-800 text-white' },
    { id: 'burgundy', name: 'Burgundy', bgClass: 'bg-red-900 text-white' }
  ];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium text-gray-700 mb-3">Frame Color</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {frameColors.map(color => (
          <Button
            key={color.id}
            className={`px-3 py-1.5 rounded-md text-sm ${color.bgClass} ${
              frameColor === color.id ? 'ring-2 ring-offset-1 ring-blue-500' : ''
            } hover:opacity-90 transition-all`}
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
