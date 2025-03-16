
import React from 'react';
import { StickerType } from '../photobooth/StickerSelector';
import { getStickerImage } from '@/utils/kpop/kpopOptions';

interface PhotoItemProps {
  photo: string;
  index: number;
  sticker: StickerType;
  selectedIdol?: {id: string, name: string, src: string} | null;
  imageClassName?: string;
  stickerClassName?: string;
  overlayClassName?: string;
  containerClassName?: string;
  showStickerOnFirstPhotoOnly?: boolean;
  effectClassName?: string;
}

const PhotoItem: React.FC<PhotoItemProps> = ({ 
  photo, 
  index, 
  sticker, 
  selectedIdol,
  imageClassName = "w-full h-auto",
  stickerClassName = "absolute bottom-0 right-0 w-1/3 h-auto pointer-events-none",
  overlayClassName = "absolute bottom-0 right-0 w-2/3 h-auto pointer-events-none",
  containerClassName = "relative rounded-sm overflow-hidden photo-item",
  showStickerOnFirstPhotoOnly = true,
  effectClassName = ""
}) => {
  const stickerImage = getStickerImage(sticker);
  const shouldShowSticker = sticker !== 'none' && stickerImage && 
    (!showStickerOnFirstPhotoOnly || index === 0);
  
  return (
    <div 
      id={`photo-item-${index}`} 
      className={`${containerClassName} ${effectClassName}`}
      style={{ aspectRatio: '2/1.4' }}
    >
      <img 
        src={photo} 
        alt={`Captured photo ${index + 1}`} 
        className={`${imageClassName} object-cover object-center`} 
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
      
      {shouldShowSticker && (
        <img 
          src={stickerImage} 
          alt={`${sticker} sticker`}
          className={stickerClassName}
          crossOrigin="anonymous"
        />
      )}
    </div>
  );
};

export default PhotoItem;
