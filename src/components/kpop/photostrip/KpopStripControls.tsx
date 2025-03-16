
import React from 'react';
import { Download, RefreshCw } from 'lucide-react';

interface KpopStripControlsProps {
  onDownload: () => void;
  onTakeNewPhotos: () => void;
  photoCount: number;
  downloadButtonText?: string;
  newPhotosButtonText?: string;
  downloadButtonClassName?: string;
  newPhotosButtonClassName?: string;
  minPhotoCount?: number;
  isDownloading?: boolean;
  showIcons?: boolean;
  containerClassName?: string;
}

const KpopStripControls: React.FC<KpopStripControlsProps> = ({ 
  onDownload, 
  onTakeNewPhotos,
  photoCount,
  downloadButtonText = 'Save as PNG',
  newPhotosButtonText = 'Take New Photos',
  downloadButtonClassName = "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all",
  newPhotosButtonClassName = "bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all",
  minPhotoCount = 3,
  isDownloading = false,
  showIcons = true,
  containerClassName = "flex flex-col sm:flex-row gap-3 justify-center mt-4"
}) => {
  if (photoCount < minPhotoCount) return null;
  
  return (
    <div className={containerClassName}>
      <button 
        onClick={onDownload} 
        className={`${downloadButtonClassName} ${isDownloading ? 'opacity-70 cursor-not-allowed' : ''}`}
        disabled={isDownloading}
      >
        {showIcons && <Download className="w-4 h-4 inline mr-2" />}
        {isDownloading ? 'Processing...' : downloadButtonText}
      </button>
      
      <button 
        onClick={onTakeNewPhotos} 
        className={newPhotosButtonClassName}
        disabled={isDownloading}
      >
        {showIcons && <RefreshCw className="w-4 h-4 inline mr-2" />}
        {newPhotosButtonText}
      </button>
    </div>
  );
};

export default KpopStripControls;
