
import React, { useRef } from 'react';
import { FrameColorType } from './photobooth/FrameColorSelector';
import { StickerType } from './photobooth/StickerSelector';
import FrameColorSelector from './photobooth/FrameColorSelector';
import StickerSelector from './photobooth/StickerSelector';
import EmptyState from './photostrip/EmptyState';
import PhotoItem from './photostrip/PhotoItem';
import StripFooter from './photostrip/StripFooter';
import StripControls from './photostrip/StripControls';

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

  const getBorderColor = () => {
    switch(frameColor) {
      case 'white': return 'border-white bg-white';
      case 'black': return 'border-black bg-black';
      case 'pink': return 'border-pink-400 bg-pink-400';
      case 'green': return 'border-green-500 bg-green-500';
      case 'blue': return 'border-blue-500 bg-blue-500';
      case 'yellow': return 'border-yellow-400 bg-yellow-400';
      case 'purple': return 'border-purple-500 bg-purple-500';
      case 'maroon': return 'border-red-800 bg-red-800';
      case 'burgundy': return 'border-red-900 bg-red-900';
      // New soft colors
      case 'softGreen': return 'border-[#F2FCE2] bg-[#F2FCE2]';
      case 'softYellow': return 'border-[#FEF7CD] bg-[#FEF7CD]';
      case 'softOrange': return 'border-[#FEC6A1] bg-[#FEC6A1]';
      case 'softPurple': return 'border-[#E5DEFF] bg-[#E5DEFF]';
      case 'softPink': return 'border-[#FFDEE2] bg-[#FFDEE2]';
      case 'softPeach': return 'border-[#FDE1D3] bg-[#FDE1D3]';
      case 'softBlue': return 'border-[#D3E4FD] bg-[#D3E4FD]';
      case 'softGray': return 'border-[#F1F0FB] bg-[#F1F0FB]';
      default: return 'border-white bg-white';
    }
  };

  const textColor = ['white', 'yellow', 'softGreen', 'softYellow', 'softOrange', 'softPurple', 'softPink', 'softPeach', 'softBlue', 'softGray'].includes(frameColor) 
    ? 'text-gray-800' 
    : 'text-white';
  
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-center text-pink-600">Photo Strip Preview</h2>
      <p className="text-center text-gray-600">Customize your photo strip</p>
      
      <FrameColorSelector 
        selectedColor={frameColor} 
        onSelectColor={setFrameColor} 
      />
      
      <StickerSelector
        selectedSticker={sticker}
        onSelectSticker={setSticker}
      />
      
      <div 
        ref={photoStripRef} 
        id="photo-strip-container"
        className={`mx-auto max-w-[300px] p-4 border-8 rounded-lg shadow-lg ${getBorderColor()}`}
      >
        <div className="flex flex-col gap-2">
          {displayPhotos.map((photo, index) => (
            <PhotoItem 
              key={index}
              photo={photo}
              index={index}
              sticker={sticker}
            />
          ))}
          
          <StripFooter 
            frameColor={frameColor}
            textColor={textColor}
          />
        </div>
      </div>
      
      {photos.length >= 3 && (
        <StripControls
          onDownload={onDownload || (() => {})}
          onTakeNewPhotos={onTakeNewPhotos || (() => {})}
        />
      )}
    </div>
  );
};

export default PhotoStripPreview;
