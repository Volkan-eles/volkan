
import React from 'react';
import { ClassicStripLayout, VerticalStripLayout, ElegantStripLayout, LargeVerticalLayout } from './layouts/StripLayouts';
import { DiagonalStripsLayout } from './layouts/DiagonalStripsLayout';
import { BigSmallLayout, CreativeOverlapLayout, FullFrameLayout } from './layouts/CreativeLayouts';
import { SimpleGridLayout, ClassicGridLayout, GridLayout } from './layouts/GridLayouts';
import { VerticalDuoLayout, HorizontalDuoLayout } from './layouts/DuoLayouts';

interface PhotoLayoutProps {
  layout: string;
  photos: string[];
  frameColor: string;
  overlayImage: HTMLImageElement | null;
}

const PhotoLayout: React.FC<PhotoLayoutProps> = ({ layout, photos, frameColor, overlayImage }) => {
  // Map frameColor to CSS class
  const bgColorClass = 
    frameColor === 'white' ? 'bg-white' :
    frameColor === 'black' ? 'bg-[#333333]' :
    frameColor === 'red' ? 'bg-[#b32424]' :
    frameColor === 'blue' ? 'bg-[#3b82f6]' :
    frameColor === 'pink' ? 'bg-[#ec4899]' :
    frameColor === 'yellow' ? 'bg-[#fde047]' :
    'bg-white';
  
  // Early return if no photos
  if (photos.length === 0) {
    return (
      <div className={`w-full h-full ${bgColorClass} rounded-md flex items-center justify-center`}>
        <div className="text-sm text-center text-gray-500">No photos taken yet</div>
      </div>
    );
  }

  // Process photos with overlay if needed
  const processedPhotos = photos.map((photoSrc) => {
    if (!overlayImage) return photoSrc;
    
    // Create canvas to combine photo with overlay
    const canvas = document.createElement('canvas');
    const img = new Image();
    img.src = photoSrc;
    
    // Use onload to ensure the image is loaded before drawing
    return new Promise<string>((resolve) => {
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(photoSrc);
          return;
        }
        
        // Draw the base photo
        ctx.drawImage(img, 0, 0);
        
        // Draw the overlay
        const overlayWidth = canvas.width * 0.5;
        const overlayHeight = overlayImage.height * (overlayWidth / overlayImage.width);
        const x = canvas.width - overlayWidth - 10;
        const y = canvas.height - overlayHeight - 10;
        
        ctx.drawImage(overlayImage, x, y, overlayWidth, overlayHeight);
        
        resolve(canvas.toDataURL('image/png'));
      };
    });
  });

  // Render appropriate layout based on selection
  switch (layout) {
    case 'diagonal-strips':
      return <DiagonalStripsLayout photos={photos} backgroundColor={bgColorClass} overlayImage={overlayImage} />;
    case 'classic-strip':
      return <ClassicStripLayout photos={photos} backgroundColor={bgColorClass} overlayImage={overlayImage} />;
    case 'vertical-strip':
      return <VerticalStripLayout photos={photos} backgroundColor={bgColorClass} overlayImage={overlayImage} />;
    case 'elegant-strip':
      return <ElegantStripLayout photos={photos} backgroundColor={bgColorClass} overlayImage={overlayImage} />;
    case 'large-vertical':
      return <LargeVerticalLayout photos={photos} backgroundColor={bgColorClass} overlayImage={overlayImage} />;
    case 'big-small':
      return <BigSmallLayout photos={photos} backgroundColor={bgColorClass} overlayImage={overlayImage} />;
    case 'grid':
      return <GridLayout photos={photos} backgroundColor={bgColorClass} overlayImage={overlayImage} />;
    case 'simple-grid':
      return <SimpleGridLayout photos={photos} backgroundColor={bgColorClass} overlayImage={overlayImage} />;
    case 'classic-grid':
      return <ClassicGridLayout photos={photos} backgroundColor={bgColorClass} overlayImage={overlayImage} />;
    case 'vertical-duo':
      return <VerticalDuoLayout photos={photos} backgroundColor={bgColorClass} overlayImage={overlayImage} />;
    case 'horizontal-duo':
      return <HorizontalDuoLayout photos={photos} backgroundColor={bgColorClass} overlayImage={overlayImage} />;
    case 'creative-overlap':
      return <CreativeOverlapLayout photos={photos} backgroundColor={bgColorClass} overlayImage={overlayImage} />;
    case 'full-frame':
      return <FullFrameLayout photos={photos} backgroundColor={bgColorClass} overlayImage={overlayImage} />;
    default:
      return <ClassicStripLayout photos={photos} backgroundColor={bgColorClass} overlayImage={overlayImage} />;
  }
};

export default PhotoLayout;
