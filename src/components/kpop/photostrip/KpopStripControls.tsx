
import React from 'react';

interface KpopStripControlsProps {
  onDownload: () => void;
  onTakeNewPhotos: () => void;
  photoCount: number;
}

const KpopStripControls: React.FC<KpopStripControlsProps> = ({ 
  onDownload, 
  onTakeNewPhotos,
  photoCount 
}) => {
  if (photoCount < 3) return null;
  
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
      <button 
        onClick={onDownload} 
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
      >
        Save as PNG
      </button>
      
      <button 
        onClick={onTakeNewPhotos} 
        className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
      >
        Take New Photos
      </button>
    </div>
  );
};

export default KpopStripControls;
