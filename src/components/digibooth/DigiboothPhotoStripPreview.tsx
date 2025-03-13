
import React, { useRef } from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import EmptyState from '@/components/photostrip/EmptyState';
import PhotoItem from '@/components/photostrip/PhotoItem';
import StripControls from '@/components/photostrip/StripControls';
import { layoutOptions } from '@/data/layoutOptions';
import LayoutSelector from '@/components/LayoutSelector';

interface DigiboothPhotoStripPreviewProps {
  photos: string[];
  maxDisplay?: number;
  onDownload?: () => void;
  onTakeNewPhotos?: () => void;
  frameColor: FrameColorType;
  setFrameColor: (color: FrameColorType) => void;
  sticker: StickerType;
  setSticker: (sticker: StickerType) => void;
  selectedLayout?: string;
  onLayoutChange?: (layout: string) => void;
}

const DigiboothPhotoStripPreview: React.FC<DigiboothPhotoStripPreviewProps> = ({ 
  photos, 
  maxDisplay = 4,
  onDownload,
  onTakeNewPhotos,
  frameColor,
  sticker,
  selectedLayout = 'classic-strip',
  onLayoutChange
}) => {
  const photoStripRef = useRef<HTMLDivElement>(null);
  
  if (photos.length === 0) {
    return <EmptyState />;
  }

  // Get the required number of photos for the current layout
  const getRequiredPhotoCount = () => {
    const layout = layoutOptions.find(l => l.id === selectedLayout);
    return layout ? layout.photos : 4;
  };

  // Choose display photos based on layout requirements
  const getDisplayPhotos = () => {
    const requiredCount = getRequiredPhotoCount();
    return photos.slice(-requiredCount);
  };

  const displayPhotos = getDisplayPhotos();

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
      default: return 'border-white bg-white';
    }
  };

  const textColor = ['white', 'yellow'].includes(frameColor) ? 'text-gray-800' : 'text-white';
  
  // Get layout class based on selected layout
  const getLayoutClass = () => {
    if (['grid', 'simple-grid', 'classic-grid'].includes(selectedLayout)) {
      return 'grid grid-cols-2 gap-2';
    } else if (selectedLayout === 'big-small') {
      return 'grid grid-cols-2 grid-rows-2 gap-2';
    } else if (selectedLayout === 'creative-overlap') {
      return 'relative h-64';
    } else if (['horizontal-duo', 'vertical-duo', 'large-vertical'].includes(selectedLayout)) {
      return 'flex gap-2';
    } else {
      // Default strip layout
      return 'flex flex-col gap-2';
    }
  };

  // Get the layout aspect ratio class
  const getLayoutAspectRatio = () => {
    if (['vertical-strip', 'elegant-strip', 'classic-strip', 'diagonal-strips'].includes(selectedLayout)) {
      return 'aspect-[3/5]';
    } else if (['grid', 'simple-grid', 'classic-grid'].includes(selectedLayout)) {
      return 'aspect-[1/1]';
    } else if (['horizontal-duo'].includes(selectedLayout)) {
      return 'aspect-[16/9]';
    } else if (['vertical-duo'].includes(selectedLayout)) {
      return 'aspect-[3/4]';
    }
    return 'aspect-[3/4]';
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      {photos.length > 0 && onLayoutChange && (
        <div className="mb-6">
          <LayoutSelector
            selectedLayout={selectedLayout}
            setSelectedLayout={onLayoutChange}
            layoutOptions={layoutOptions}
            capturedPhotos={photos}
            frameColor={frameColor}
          />
        </div>
      )}
      
      <div 
        ref={photoStripRef} 
        id="photo-strip-container"
        className={`mx-auto max-w-[300px] p-4 border-8 rounded-lg shadow-lg ${getBorderColor()} ${getLayoutAspectRatio()}`}
      >
        <div className={getLayoutClass()}>
          {displayPhotos.map((photo, index) => {
            // Special positioning for creative layouts
            if (selectedLayout === 'creative-overlap') {
              return (
                <div 
                  key={index} 
                  className="absolute inset-0 m-auto w-3/4 h-3/4 transform transition-all duration-300"
                  style={{ 
                    rotate: `${(index * 5) - 5}deg`,
                    zIndex: displayPhotos.length - index
                  }}
                >
                  <PhotoItem 
                    key={index}
                    photo={photo}
                    index={index}
                    sticker={index === 0 ? sticker : 'none'}
                  />
                </div>
              );
            }

            // Special class for big-small layout
            if (selectedLayout === 'big-small' && index === 0) {
              return (
                <div key={index} className="col-span-2">
                  <PhotoItem 
                    photo={photo}
                    index={index}
                    sticker={sticker}
                  />
                </div>
              );
            }

            // Special class for large-vertical layout
            if (selectedLayout === 'large-vertical') {
              const isFirst = index === 0;
              return (
                <div 
                  key={index} 
                  className={`${isFirst ? 'w-2/3' : 'w-1/3'} ${
                    selectedLayout === 'vertical-duo' ? 'h-full' : ''
                  }`}
                >
                  <PhotoItem 
                    photo={photo}
                    index={index}
                    sticker={index === 0 ? sticker : 'none'}
                  />
                </div>
              );
            }

            // Horizontal or vertical duo layout
            if (selectedLayout === 'horizontal-duo' || selectedLayout === 'vertical-duo') {
              return (
                <div 
                  key={index} 
                  className={`${
                    selectedLayout === 'horizontal-duo' ? 'w-1/2' : 'w-1/2 h-full'
                  }`}
                >
                  <PhotoItem 
                    photo={photo}
                    index={index}
                    sticker={index === 0 ? sticker : 'none'}
                  />
                </div>
              );
            }

            // Default photo item
            return (
              <PhotoItem 
                key={index}
                photo={photo}
                index={index}
                sticker={index === 0 ? sticker : 'none'}
              />
            );
          })}
          
          <div className={`text-center py-2 ${textColor} col-span-2`}>
            <p className="text-sm font-bold">Digibooth</p>
            <p className="text-xs">{new Date().toLocaleDateString()}</p>
          </div>
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

export default DigiboothPhotoStripPreview;
