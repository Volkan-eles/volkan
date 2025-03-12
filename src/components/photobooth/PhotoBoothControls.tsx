
import React from 'react';
import { Button } from '@/components/ui/button';
import { Camera, RefreshCcw } from 'lucide-react';

interface PhotoBoothControlsProps {
  onTakePhoto: () => void;
  onRetakePhoto: () => void;
  isCapturing: boolean;
  hasPhotos: boolean;
}

const PhotoBoothControls: React.FC<PhotoBoothControlsProps> = ({
  onTakePhoto,
  onRetakePhoto,
  isCapturing,
  hasPhotos
}) => {
  return (
    <div className="mt-4 flex justify-center gap-4">
      <Button 
        onClick={onTakePhoto} 
        className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium px-8 py-6 rounded-full shadow-md hover:shadow-lg transition-all"
        size="lg"
        disabled={isCapturing}
      >
        <Camera className="mr-2 h-5 w-5" />
        Take Photo
      </Button>
      
      <Button 
        onClick={onRetakePhoto} 
        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-6 py-6 rounded-full shadow-md hover:shadow-lg transition-all"
        size="lg"
        disabled={isCapturing || !hasPhotos}
      >
        <RefreshCcw className="mr-2 h-5 w-5" />
        Retake
      </Button>
    </div>
  );
};

export default PhotoBoothControls;
