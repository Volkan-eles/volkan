
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PhotoStripPreviewProps {
  photos: string[];
  maxDisplay?: number;
  onDownload?: () => void;
  frameColor?: string;
}

const PhotoStripPreview: React.FC<PhotoStripPreviewProps> = ({ 
  photos, 
  maxDisplay = 3,
  onDownload,
  frameColor = 'white'
}) => {
  const displayPhotos = photos.slice(-maxDisplay);
  
  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-400 text-center">
        <p className="mb-2">No photos yet</p>
        <p>Take some pictures!</p>
      </div>
    );
  }

  // Generate frame style based on the selected color
  const getFrameStyle = () => {
    // Handle special cases
    if (frameColor === 'white') {
      return 'bg-white border-2 border-gray-200';
    }
    if (frameColor === 'black') {
      return 'bg-black border-2 border-black';
    }
    // For other colors, use the Tailwind classes
    return `bg-${frameColor} border-2 border-${frameColor}`;
  };

  const frameStyle = getFrameStyle();

  return (
    <div className="space-y-3 animate-fade-in">
      <div className={`rounded-lg overflow-hidden ${frameStyle} p-2 shadow-md`}>
        {displayPhotos.map((photo, index) => (
          <div 
            key={index} 
            className="mb-2 last:mb-0 overflow-hidden shadow-sm hover:shadow-md transition-all transform hover:scale-[1.01] duration-200"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <img 
              src={photo} 
              alt={`Captured photo ${photos.length - displayPhotos.length + index + 1}`} 
              className="w-full h-auto rounded" 
            />
          </div>
        ))}

        {/* Add timestamp and branding */}
        <div className="mt-1 flex items-center justify-between text-xs">
          <span className={`${frameColor === 'black' ? 'text-white' : 'text-gray-600'}`}>
            Picapica {new Date().toLocaleDateString()} {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          </span>
          <span className={`text-xs font-light ${frameColor === 'black' ? 'text-white/60' : 'text-gray-400'}`}>
            © 2023 pic
          </span>
        </div>
      </div>
      
      {photos.length >= 3 && onDownload && (
        <Button 
          onClick={onDownload}
          className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Strip
        </Button>
      )}
    </div>
  );
};

export default PhotoStripPreview;
