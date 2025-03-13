
import React, { useRef, useState } from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import FrameColorSelector from '@/components/photobooth/FrameColorSelector';
import StickerSelector from '@/components/photobooth/StickerSelector';
import EmptyState from '@/components/photostrip/EmptyState';
import StripFooter from '@/components/photostrip/StripFooter';
import StripControls from '@/components/photostrip/StripControls';
import DigiboothLayoutSelector, { LayoutType } from '@/components/digibooth/DigiboothLayoutSelector';
import DigiboothStrip from '@/components/digibooth/DigiboothStrip';

interface DigiboothPhotoStripPreviewProps {
  photos: string[];
  maxDisplay?: number;
  onDownload?: () => void;
  onTakeNewPhotos?: () => void;
  frameColor: FrameColorType;
  setFrameColor: (color: FrameColorType) => void;
  sticker: StickerType;
  setSticker: (sticker: StickerType) => void;
}

const DigiboothPhotoStripPreview: React.FC<DigiboothPhotoStripPreviewProps> = ({ 
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
  const [selectedLayout, setSelectedLayout] = useState<LayoutType>('classic-strip');
  
  if (photos.length === 0) {
    return <EmptyState />;
  }
  
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-center text-blue-600">Digibooth Strip Preview</h2>
      <p className="text-center text-gray-600">Customize your digital photo strip</p>
      
      <DigiboothLayoutSelector 
        selectedLayout={selectedLayout}
        onSelectLayout={setSelectedLayout}
      />
      
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
        className="mx-auto max-w-[300px]"
      >
        <DigiboothStrip
          photos={photos}
          layout={selectedLayout}
          frameColor={frameColor}
          sticker={sticker}
        />
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

export default DigiboothPhotoStripPreview;
