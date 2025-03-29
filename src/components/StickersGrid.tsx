
import React from 'react';
import { KPOP_STICKERS } from '@/constants/stickers';

interface StickersGridProps {
  onSelectSticker: (sticker: {id: string; name: string; src: string}) => void;
  selectedSticker: string | null;
}

const StickersGrid: React.FC<StickersGridProps> = ({ onSelectSticker, selectedSticker }) => {
  return (
    <div>
      <div className="mb-2 text-xs bg-blue-50 p-2 rounded border border-blue-100 text-blue-700">
        <p>Enhance your photos with creative stickers</p>
      </div>
      
      <div className="mt-2 grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
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
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickersGrid;
