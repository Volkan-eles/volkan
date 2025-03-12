
import React from 'react';
import { Button } from '@/components/ui/button';

export type StickerType = 'none' | 'girlypop' | 'cute' | 'mofusand' | 'shin-chan' | 'miffy';

interface StickerSelectorProps {
  selectedSticker: StickerType;
  onSelectSticker: (sticker: StickerType) => void;
}

const StickerSelector: React.FC<StickerSelectorProps> = ({
  selectedSticker,
  onSelectSticker
}) => {
  const stickers: { id: StickerType; name: string }[] = [
    { id: 'none', name: 'No Stickers' },
    { id: 'girlypop', name: 'Girlypop' },
    { id: 'cute', name: 'Cute' },
    { id: 'mofusand', name: 'Mofusand' },
    { id: 'shin-chan', name: 'Shin Chan' },
    { id: 'miffy', name: 'Miffy' }
  ];

  return (
    <div className="space-y-2">
      <h3 className="text-center font-medium">Stickers</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {stickers.map(sticker => (
          <Button
            key={sticker.id}
            variant={selectedSticker === sticker.id ? "default" : "outline"}
            className={`rounded-full transition-all ${
              selectedSticker === sticker.id 
                ? "bg-gradient-to-r from-pink-400 to-purple-400 text-white" 
                : "bg-white/80 hover:bg-white text-gray-800"
            }`}
            onClick={() => onSelectSticker(sticker.id)}
          >
            {sticker.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default StickerSelector;
