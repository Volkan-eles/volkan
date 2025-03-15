
import React, { useRef } from 'react';
import { FrameColorType } from './photobooth/FrameColorSelector';
import { StickerType } from './photobooth/StickerSelector';
import FrameColorSelector from './photobooth/FrameColorSelector';
import StickerSelector from './photobooth/StickerSelector';
import EmptyState from './photostrip/EmptyState';
import StripControls from './photostrip/StripControls';
import StripFooter from './photostrip/StripFooter';

interface PhotoStripPreviewProps {
  photos: string[];
  maxDisplay?: number;
  onDownload?: () => void;
  onTakeNewPhotos?: () => void;
  frameColor: FrameColorType;
  setFrameColor: (color: FrameColorType) => void;
  sticker: StickerType;
  setSticker: (sticker: StickerType) => void;
}

const PhotoStripPreview: React.FC<PhotoStripPreviewProps> = ({ 
  photos, 
  maxDisplay = 4,
  onDownload,
  onTakeNewPhotos,
  frameColor,
  setFrameColor,
  sticker,
  setSticker
}) => {
  const photoStripRef = useRef<HTMLDivElement>(null);
  const displayPhotos = photos.slice(-maxDisplay);
  
  if (photos.length === 0) {
    return <EmptyState />;
  }

  const textColor = ['white', 'yellow', 'softGreen', 'softYellow', 'softOrange', 'softPurple', 'softPink', 'softPeach', 'softBlue', 'softGray'].includes(frameColor) 
    ? 'text-gray-800' 
    : 'text-white';
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div 
        ref={photoStripRef} 
        id="photo-strip-container" 
        data-frame-color={frameColor}
        className={`relative rounded-lg overflow-hidden shadow-lg transition-colors duration-300 bg-${frameColor} p-5`}
      >
        {/* Display the photos */}
        <div className="space-y-3">
          {displayPhotos.map((photo, index) => (
            <div 
              key={index}
              id={`photo-item-${index}`}
              className="photo-item relative rounded overflow-hidden border-2 border-white"
            >
              <img 
                src={photo} 
                alt={`Photo ${index + 1}`} 
                className="w-full"
              />
              
              {/* Display sticker if selected */}
              {sticker !== 'none' && (
                <div className="absolute bottom-2 right-2 h-16 w-16 pointer-events-none">
                  <img 
                    src={`/stickers/${sticker}.png`} 
                    alt="Sticker" 
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Photo strip decorative footer with date and branding */}
        <StripFooter frameColor={frameColor} textColor={textColor} />
      </div>
      
      {/* Frame and sticker selection controls */}
      <div className="space-y-4">
        <FrameColorSelector 
          selectedColor={frameColor} 
          onSelectColor={setFrameColor} 
        />
        
        <StickerSelector 
          selectedSticker={sticker} 
          onSelectSticker={setSticker}
        />
      </div>
      
      {/* Download and reset controls */}
      {onDownload && onTakeNewPhotos && (
        <StripControls
          onDownload={onDownload}
          onTakeNewPhotos={onTakeNewPhotos}
        />
      )}
    </div>
  );
};

export default PhotoStripPreview;
