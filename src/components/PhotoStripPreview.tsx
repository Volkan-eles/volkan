
import React from 'react';

interface PhotoStripPreviewProps {
  photos: string[];
  maxDisplay?: number;
}

const PhotoStripPreview: React.FC<PhotoStripPreviewProps> = ({ 
  photos, 
  maxDisplay = 3 
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
    </div>
  );
};

export default PhotoStripPreview;
