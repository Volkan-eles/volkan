
import React from 'react';
import { Button } from '@/components/ui/button';
import { KPOP_STICKERS } from '@/constants/stickers';

interface StickersGridProps {
  onSelectSticker: (sticker: {id: string; name: string; src: string}) => void;
  selectedSticker: string | null;
}

const StickersGrid: React.FC<StickersGridProps> = ({ onSelectSticker, selectedSticker }) => {
  return (
    <div className="mt-2 grid grid-cols-4 gap-1">
      {KPOP_STICKERS.map((sticker) => (
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
