
import React from 'react';
import { Button } from '@/components/ui/button';

export type FrameColorType = 'white' | 'black' | 'pink' | 'green' | 'blue' | 'yellow' | 'purple' | 'maroon' | 'burgundy' | 'softGreen' | 'softYellow' | 'softOrange' | 'softPurple' | 'softPink' | 'softPeach' | 'softBlue' | 'softGray';

interface FrameColorSelectorProps {
  selectedColor: FrameColorType;
  onSelectColor: (color: FrameColorType) => void;
}

const FrameColorSelector: React.FC<FrameColorSelectorProps> = ({ 
  selectedColor, 
  onSelectColor 
}) => {
  const colors: { id: FrameColorType; name: string; bgClass: string }[] = [
    { id: 'white', name: 'White', bgClass: 'bg-white text-black' },
    { id: 'black', name: 'Black', bgClass: 'bg-black text-white' },
    { id: 'pink', name: 'Pink', bgClass: 'bg-pink-300 text-white' },
    { id: 'green', name: 'Green', bgClass: 'bg-green-400 text-white' },
    { id: 'blue', name: 'Blue', bgClass: 'bg-blue-400 text-white' },
    { id: 'yellow', name: 'Yellow', bgClass: 'bg-yellow-300 text-black' },
    { id: 'purple', name: 'Purple', bgClass: 'bg-purple-400 text-white' },
    { id: 'maroon', name: 'Maroon', bgClass: 'bg-red-800 text-white' },
    { id: 'burgundy', name: 'Burgundy', bgClass: 'bg-red-900 text-white' },
    // New soft colors
    { id: 'softGreen', name: 'Soft Green', bgClass: 'bg-[#F2FCE2] text-black' },
    { id: 'softYellow', name: 'Soft Yellow', bgClass: 'bg-[#FEF7CD] text-black' },
    { id: 'softOrange', name: 'Soft Orange', bgClass: 'bg-[#FEC6A1] text-black' },
    { id: 'softPurple', name: 'Soft Purple', bgClass: 'bg-[#E5DEFF] text-black' },
    { id: 'softPink', name: 'Soft Pink', bgClass: 'bg-[#FFDEE2] text-black' },
    { id: 'softPeach', name: 'Soft Peach', bgClass: 'bg-[#FDE1D3] text-black' },
    { id: 'softBlue', name: 'Soft Blue', bgClass: 'bg-[#D3E4FD] text-black' },
    { id: 'softGray', name: 'Soft Gray', bgClass: 'bg-[#F1F0FB] text-black' }
  ];

  return (
    <div className="space-y-2">
      <h3 className="text-center font-medium">Frame Color</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {colors.map(color => (
          <Button
            key={color.id}
            className={`rounded-full w-8 h-8 ${color.bgClass} ${
              selectedColor === color.id ? 'ring-2 ring-offset-2 ring-pink-500' : ''
            } hover:opacity-90 transition-all`}
            onClick={() => onSelectColor(color.id)}
            aria-label={color.name}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
};

export default FrameColorSelector;
