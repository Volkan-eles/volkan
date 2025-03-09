
import React from 'react';
import { Button } from '@/components/ui/button';

// List of K-pop idol stickers available
const STICKERS = [
  { id: 'karina', name: 'Karina', src: '/Karina.png' },
  { id: 'winter', name: 'Winter', src: '/Winter.png' },
  { id: 'ningning', name: 'Ningning', src: '/Ningning.png' },
  { id: 'jaehyun', name: 'Jaehyun', src: '/JAEHYUN.png' },
  { id: 'leehan', name: 'Lee Han', src: '/LEEHAN.png' },
  { id: 'heeseung', name: 'Heeseung', src: '/heeseung.png' },
  { id: 'jake', name: 'Jake', src: '/jake.png' },
  { id: 'jay', name: 'Jay', src: '/jay.png' }
];

interface StickersGridProps {
  onSelectSticker: (sticker: {id: string; name: string; src: string}) => void;
  selectedSticker: string | null;
}

const StickersGrid: React.FC<StickersGridProps> = ({ onSelectSticker, selectedSticker }) => {
  return (
    <div className="mt-2 grid grid-cols-4 gap-1">
      {STICKERS.map((sticker) => (
        <div 
          key={sticker.id}
          onClick={() => onSelectSticker(sticker)}
          className={`aspect-square border ${selectedSticker === sticker.id ? 'border-purple-500' : 'border-[#333]'} rounded-md overflow-hidden flex items-center justify-center p-1 cursor-pointer hover:border-purple-400 transition-colors`}
        >
          <img 
            src={sticker.src} 
            alt={sticker.name} 
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default StickersGrid;
