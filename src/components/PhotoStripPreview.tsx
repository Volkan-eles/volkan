
import React, { useRef, useEffect } from 'react';
import { Download, QrCode, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FrameColorType } from './photobooth/FrameColorSelector';
import { StickerType } from './photobooth/StickerSelector';
import FrameColorSelector from './photobooth/FrameColorSelector';
import StickerSelector from './photobooth/StickerSelector';

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
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-400 text-center">
        <p className="mb-2">No photos yet</p>
        <p>Take some pictures!</p>
      </div>
    );
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
      default: return 'border-white bg-white';
    }
  };

  const getStickerImage = () => {
    switch(sticker) {
      case 'mofusand': return '/mofusand-frame.png';
      case 'shin-chan': return '/shin-chan.png';
      case 'miffy': return '/miffy-frame.png';
      default: return null;
    }
  };

  const textColor = ['white', 'yellow'].includes(frameColor) ? 'text-gray-800' : 'text-white';
  
  // Format date for footer
  const formatDate = () => {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    return `${month}/${day}/${year} ${hours}:${minutes} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;
  };

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
            <div 
              key={index} 
              className="relative rounded-sm overflow-hidden"
            >
              <img 
                src={photo} 
                alt={`Captured photo ${photos.length - displayPhotos.length + index + 1}`} 
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
          ))}
          <div className={`text-center py-1 ${textColor}`}>
            <div className="text-sm font-medium">Picapica {formatDate()}</div>
            <div className="text-xs">© 2025 AW</div>
          </div>
        </div>
      </div>
      
      {photos.length >= 3 && (
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <Button
            onClick={onDownload}
            className="bg-pink-500 hover:bg-pink-600 text-white"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Photo Strip
          </Button>
          
          <Button
            variant="outline"
            className="bg-white hover:bg-gray-100"
          >
            <QrCode className="mr-2 h-4 w-4" />
            Download via QR Code
          </Button>
          
          <Button
            onClick={onTakeNewPhotos}
            className="bg-purple-500 hover:bg-purple-600 text-white"
          >
            <Camera className="mr-2 h-4 w-4" />
            Take New Photos
          </Button>
        </div>
      )}
    </div>
  );
};

export default PhotoStripPreview;
