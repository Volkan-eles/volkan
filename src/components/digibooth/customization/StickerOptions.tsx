
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
      <h3 className="text-lg font-medium text-gray-700 mb-3">Stickers</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {stickers.map(stickerOption => (
          <Button
            key={stickerOption.id}
            className={`px-3 py-1.5 rounded-md text-sm transition-all ${
              sticker === stickerOption.id 
                ? "bg-blue-500 text-white ring-2 ring-offset-1 ring-blue-500" 
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
