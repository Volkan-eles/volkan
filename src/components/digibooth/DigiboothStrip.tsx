
import React from 'react';
import { LayoutType } from '@/components/digibooth/DigiboothLayoutSelector';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';

interface DigiboothStripProps {
  photos: string[];
  layout: LayoutType;
  frameColor: FrameColorType;
  sticker: StickerType;
}

const DigiboothStrip: React.FC<DigiboothStripProps> = ({
  photos,
  layout,
  frameColor,
  sticker
}) => {
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

  // Helper function to render photo items based on layout type
  const renderPhotoItems = () => {
    const maxPhotos = photos.length > 4 ? 4 : photos.length;
    const displayPhotos = photos.slice(-maxPhotos);
    
    // Default text for footer
    const footerText = (
      <div className={`text-center py-2 ${textColor}`}>
        <p className="text-sm font-bold">Digibooth</p>
        <p className="text-xs">{new Date().toLocaleDateString()}</p>
      </div>
    );

    switch (layout) {
      case 'classic-strip':
        // Layout A - Two vertical strips side by side
        return (
          <div className="flex space-x-2">
            <div className="flex-1 flex flex-col space-y-2">
              {displayPhotos.slice(0, 2).map((photo, idx) => (
                <div key={`left-${idx}`} className="aspect-[4/3] relative">
                  <img src={photo} alt={`Photo ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
              {footerText}
            </div>
            <div className="flex-1 flex flex-col space-y-2 mt-4">
              {displayPhotos.slice(2, 4).map((photo, idx) => (
                <div key={`right-${idx}`} className="aspect-[4/3] relative">
                  <img src={photo} alt={`Photo ${idx + 3}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        );

      case 'dual-strip':
        // Layout B - Two vertical strips with date stamps on each photo
        return (
          <div className="flex space-x-2">
            <div className="flex-1 flex flex-col space-y-2">
              {displayPhotos.slice(0, 2).map((photo, idx) => (
                <div key={`left-${idx}`} className="aspect-[4/3] relative">
                  <img src={photo} alt={`Photo ${idx + 1}`} className="w-full h-full object-cover" />
                  <div className={`absolute top-1 right-1 text-xs ${textColor} bg-black/30 px-1 rounded`}>
                    {new Date().toLocaleDateString()}
                  </div>
                </div>
              ))}
              {footerText}
            </div>
            <div className="flex-1 flex flex-col space-y-2 mt-4">
              {displayPhotos.slice(2, 4).map((photo, idx) => (
                <div key={`right-${idx}`} className="aspect-[4/3] relative">
                  <img src={photo} alt={`Photo ${idx + 3}`} className="w-full h-full object-cover" />
                  <div className={`absolute top-1 right-1 text-xs ${textColor} bg-black/30 px-1 rounded`}>
                    {new Date().toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'vertical-strip':
        // Layout C - Two vertical strips with more photos
        return (
          <div className="flex space-x-2">
            <div className="flex-1 flex flex-col space-y-1">
              {displayPhotos.slice(0, 4).map((photo, idx) => (
                idx % 2 === 0 && (
                  <div key={`left-${idx}`} className="aspect-[4/3] relative">
                    <img src={photo} alt={`Photo ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                )
              ))}
              {footerText}
            </div>
            <div className="flex-1 flex flex-col space-y-1">
              {displayPhotos.slice(0, 4).map((photo, idx) => (
                idx % 2 === 1 && (
                  <div key={`right-${idx}`} className="aspect-[4/3] relative">
                    <img src={photo} alt={`Photo ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                )
              ))}
            </div>
          </div>
        );

      case 'quad-strip':
        // Layout D - Four photo frames with names
        return (
          <div className="flex space-x-2">
            <div className="flex-1 flex flex-col space-y-1">
              {displayPhotos.slice(0, 4).map((photo, idx) => (
                idx % 2 === 0 && (
                  <div key={`left-${idx}`} className="aspect-[4/3] relative">
                    <img src={photo} alt={`Photo ${idx + 1}`} className="w-full h-full object-cover" />
                    <div className={`absolute top-1 left-1 text-xs ${textColor} bg-black/30 px-1 rounded`}>
                      Frame {idx + 1}
                    </div>
                  </div>
                )
              ))}
              {footerText}
            </div>
            <div className="flex-1 flex flex-col space-y-1">
              {displayPhotos.slice(0, 4).map((photo, idx) => (
                idx % 2 === 1 && (
                  <div key={`right-${idx}`} className="aspect-[4/3] relative">
                    <img src={photo} alt={`Photo ${idx + 1}`} className="w-full h-full object-cover" />
                    <div className={`absolute top-1 left-1 text-xs ${textColor} bg-black/30 px-1 rounded`}>
                      Frame {idx + 1}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        );

      case 'portrait-split':
        // Layout E - Portrait layout (2 photos stacked)
        return (
          <div className="flex flex-col space-y-2">
            <div className="aspect-[3/2] relative">
              <img 
                src={displayPhotos[0] || ''} 
                alt="Top photo" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="aspect-[3/2] relative">
              <img 
                src={displayPhotos[1] || ''} 
                alt="Bottom photo" 
                className="w-full h-full object-cover" 
              />
            </div>
            {footerText}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`p-4 border-8 rounded-lg shadow-lg ${getBorderColor()}`}>
      {renderPhotoItems()}
    </div>
  );
};

export default DigiboothStrip;
