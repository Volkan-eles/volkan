
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PhotoStripPreviewProps {
  photos: string[];
  maxDisplay?: number;
  onDownload?: () => void;
}

const PhotoStripPreview: React.FC<PhotoStripPreviewProps> = ({ 
  photos, 
  maxDisplay = 3,
  onDownload
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

  return (
    <div className="space-y-3 animate-fade-in">
      {displayPhotos.map((photo, index) => (
        <div 
          key={index} 
          className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] duration-200"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <img 
            src={photo} 
            alt={`Captured photo ${photos.length - displayPhotos.length + index + 1}`} 
            className="w-full h-auto" 
          />
        </div>
      ))}
      
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
