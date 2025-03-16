
import React from 'react';

interface KpopStripControlsProps {
  onDownload: () => void;
  onTakeNewPhotos: () => void;
  photoCount: number;
  downloadButtonText?: string;
  newPhotosButtonText?: string;
  downloadButtonClassName?: string;
  newPhotosButtonClassName?: string;
  minPhotoCount?: number;
}

const KpopStripControls: React.FC<KpopStripControlsProps> = ({ 
  onDownload, 
  onTakeNewPhotos,
  photoCount,
  downloadButtonText = 'Save as PNG',
  newPhotosButtonText = 'Take New Photos',
  downloadButtonClassName = "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all",
  newPhotosButtonClassName = "bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all",
  minPhotoCount = 3
}) => {
  if (photoCount < minPhotoCount) return null;
  
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
      <button 
        onClick={onDownload} 
        className={downloadButtonClassName}
      >
        {downloadButtonText}
      </button>
      
      <button 
        onClick={onTakeNewPhotos} 
        className={newPhotosButtonClassName}
      >
        {newPhotosButtonText}
      </button>
    </div>
  );
};

export default KpopStripControls;
