
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
    { id: 'none', name: 'No Stickers' },
    { id: 'girlypop', name: 'Girlypop' },
    { id: 'cute', name: 'Cute' },
    { id: 'mofusand', name: 'Mofusand' },
    { id: 'shin-chan', name: 'Shin Chan' },
    { id: 'miffy', name: 'Miffy' }
  ];

  return (
    <div>
      <h3 className="text-md font-medium text-gray-600 mb-2">Stickers</h3>
      <div className="flex flex-wrap justify-center gap-1.5">
        {stickers.map(stickerOption => (
          <Button
            key={stickerOption.id}
            className={`px-2.5 py-1 rounded-md text-xs transition-all ${
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
