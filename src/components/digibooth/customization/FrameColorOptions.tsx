
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
  // Enhanced frame color options with more soft colors
  const frameColors: { id: FrameColorType; name: string }[] = [
    { id: 'white', name: 'White' },
    { id: 'black', name: 'Black' },
    { id: 'pink', name: 'Pink' },
    { id: 'green', name: 'Green' },
    { id: 'blue', name: 'Blue' },
    { id: 'yellow', name: 'Yellow' },
    { id: 'purple', name: 'Purple' },
    { id: 'maroon', name: 'Maroon' },
    { id: 'burgundy', name: 'Burgundy' }
  ];

  return (
    <div>
      <h3 className="text-xs font-medium text-gray-600 mb-1">Frame</h3>
      <div className="flex flex-wrap gap-1">
        {frameColors.map(color => (
          <Button
            key={color.id}
            className={`w-6 h-6 p-0 rounded-full transition-all ${
              getColorClass(color.id)
            } ${
              frameColor === color.id 
                ? "ring-2 ring-offset-1 ring-primary" 
                : "hover:ring-1 hover:ring-offset-1 hover:ring-gray-300"
            }`}
            onClick={() => setFrameColor(color.id)}
            aria-label={color.name}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
};

// Helper function to get color classes
const getColorClass = (colorId: FrameColorType): string => {
  switch(colorId) {
    case 'white': return 'bg-white';
    case 'black': return 'bg-black';
    case 'pink': return 'bg-pink-300';
    case 'green': return 'bg-green-400';
    case 'blue': return 'bg-blue-400';
    case 'yellow': return 'bg-yellow-300';
    case 'purple': return 'bg-purple-400';
    case 'maroon': return 'bg-red-800';
    case 'burgundy': return 'bg-red-900';
    default: return 'bg-white';
  }
};

export default FrameColorOptions;
