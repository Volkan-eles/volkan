
import React from 'react';
import { StickerType } from '@/components/photobooth/StickerSelector';
import { Button } from '@/components/ui/button';

interface StickerOptionsProps {
  sticker: StickerType;
  setSticker: (sticker: StickerType) => void;
}

const StickerOptions: React.FC<StickerOptionsProps> = ({
  sticker,
  setSticker
}) => {
  // Sticker options
  const stickers: { id: StickerType; name: string }[] = [
    { id: 'none', name: 'None' },
    { id: 'girlypop', name: 'Girlypop' },
    { id: 'cute', name: 'Cute' },
    { id: 'mofusand', name: 'Mofusand' },
    { id: 'shin-chan', name: 'Shin Chan' },
    { id: 'miffy', name: 'Miffy' }
  ];

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-600 mb-1">Stickers</h3>
      <div className="flex flex-wrap gap-1">
        {stickers.map(stickerOption => (
          <Button
            key={stickerOption.id}
            className={`px-2 py-0.5 rounded-md text-xs h-auto transition-all ${
              sticker === stickerOption.id 
                ? "bg-primary text-white ring-1 ring-offset-1 ring-primary" 
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSticker(stickerOption.id)}
          >
            {stickerOption.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default StickerOptions;
