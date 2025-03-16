
import React from 'react';
import { StickerType } from '../photobooth/StickerSelector';

interface PhotoItemProps {
  photo: string;
  index: number;
  sticker: StickerType;
  selectedIdol?: {id: string, name: string, src: string} | null;
  imageClassName?: string;
  stickerClassName?: string;
  overlayClassName?: string;
}

const PhotoItem: React.FC<PhotoItemProps> = ({ 
  photo, 
  index, 
  sticker, 
  selectedIdol,
  imageClassName = "w-full h-auto",
  stickerClassName = "absolute bottom-0 right-0 w-1/3 h-auto pointer-events-none",
  overlayClassName = "absolute bottom-0 right-0 w-2/3 h-auto pointer-events-none"
}) => {
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
        className={imageClassName} 
        crossOrigin="anonymous"
      />
      
      {/* Display idol for this photo if available */}
      {selectedIdol && (
        <img 
          src={selectedIdol.src} 
          alt={selectedIdol.name}
          className={overlayClassName}
        />
      )}
      
      {sticker !== 'none' && getStickerImage() && index === 0 && (
        <img 
          src={getStickerImage()} 
          alt="Sticker"
          className={stickerClassName}
          crossOrigin="anonymous"
        />
      )}
    </div>
  );
};

export default PhotoItem;
