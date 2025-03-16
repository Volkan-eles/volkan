
import React from 'react';
import { Button } from '@/components/ui/button';
import { Camera, RefreshCcw } from 'lucide-react';

interface KpopControlsProps {
  onTakePhoto: () => void;
  onRetakePhoto: () => void;
  isCapturing: boolean;
  hasPhotos: boolean;
}

const KpopControls: React.FC<KpopControlsProps> = ({
  onTakePhoto,
  onRetakePhoto,
  isCapturing,
  hasPhotos
}) => {
  return (
    <div className="mt-6 flex justify-center gap-4">
      <Button 
        onClick={onTakePhoto} 
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-8 py-6 rounded-full shadow-md hover:shadow-lg transition-all"
        size="lg"
        disabled={isCapturing}
      >
        <Camera className="mr-2 h-5 w-5" />
        Capture Moment
      </Button>
      
      <Button 
        onClick={onRetakePhoto} 
        className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-medium px-6 py-6 rounded-full shadow-md hover:shadow-lg transition-all"
        size="lg"
        disabled={isCapturing || !hasPhotos}
      >
        <RefreshCcw className="mr-2 h-5 w-5" />
        Retake
      </Button>
    </div>
  );
};

export default KpopControls;
