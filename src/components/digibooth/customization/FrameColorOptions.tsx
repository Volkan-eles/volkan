
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
    { id: 'burgundy', name: 'Burgundy' },
    // New soft colors
    { id: 'softGreen', name: 'Soft Green' },
    { id: 'softYellow', name: 'Soft Yellow' },
    { id: 'softOrange', name: 'Soft Orange' },
    { id: 'softPurple', name: 'Soft Purple' },
    { id: 'softPink', name: 'Soft Pink' },
    { id: 'softPeach', name: 'Soft Peach' },
    { id: 'softBlue', name: 'Soft Blue' },
    { id: 'softGray', name: 'Soft Gray' }
  ];

  return (
    <div>
      <h3 className="text-xs font-medium text-gray-600 mb-1">Frame</h3>
      <div className="flex flex-wrap gap-1 max-w-[250px]">
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
    // New soft colors
    case 'softGreen': return 'bg-[#F2FCE2]';
    case 'softYellow': return 'bg-[#FEF7CD]';
    case 'softOrange': return 'bg-[#FEC6A1]';
    case 'softPurple': return 'bg-[#E5DEFF]';
    case 'softPink': return 'bg-[#FFDEE2]';
    case 'softPeach': return 'bg-[#FDE1D3]';
    case 'softBlue': return 'bg-[#D3E4FD]';
    case 'softGray': return 'bg-[#F1F0FB]';
    default: return 'bg-white';
  }
};

export default FrameColorOptions;
