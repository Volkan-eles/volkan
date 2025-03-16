
import React from 'react';
import { StickerType } from '../photobooth/StickerSelector';

interface PhotoItemProps {
  photo: string;
  index: number;
  sticker: StickerType;
  selectedIdol?: {id: string, name: string, src: string} | null;
}

const PhotoItem: React.FC<PhotoItemProps> = ({ photo, index, sticker, selectedIdol }) => {
  const getStickerImage = () => {
    switch(sticker) {
      case 'mofusand': return '/mofusand-frame.png';
      case 'shin-chan': return '/shin-chan.png';
      case 'miffy': return '/miffy-frame.png';
      default: return null;
    }
  };

  return (
    <div id={`photo-item-${index}`} className="relative rounded-sm overflow-hidden photo-item">
      <img 
        src={photo} 
        alt={`Captured photo ${index + 1}`} 
        className="w-full h-auto" 
        crossOrigin="anonymous"
      />
      {sticker !== 'none' && getStickerImage() && index === 0 && (
        <img 
          src={getStickerImage()} 
          alt="Sticker"
          className="absolute bottom-0 right-0 w-1/3 h-auto pointer-events-none"
          crossOrigin="anonymous"
        />
      )}
    </div>
  );
};

export default PhotoItem;
