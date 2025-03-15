
import React from 'react';
import { Button } from '@/components/ui/button';
import { Camera, RefreshCcw } from 'lucide-react';

interface VintageControlsProps {
  onTakePhoto: () => void;
  onRetakePhoto: () => void;
  isCapturing: boolean;
  hasPhotos: boolean;
}

const VintageControls: React.FC<VintageControlsProps> = ({
  onTakePhoto,
  onRetakePhoto,
  isCapturing,
  hasPhotos
}) => {
  return (
    <div className="mt-6 flex justify-center gap-4">
      <Button 
        onClick={onTakePhoto} 
        className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-serif px-8 py-6 rounded-full shadow-md hover:shadow-lg transition-all"
        size="lg"
        disabled={isCapturing}
      >
        <Camera className="mr-2 h-5 w-5" />
        Capture Moment
      </Button>
      
      <Button 
        onClick={onRetakePhoto} 
        className="bg-amber-100 hover:bg-amber-200 text-amber-800 font-serif px-6 py-6 rounded-full shadow-md hover:shadow-lg transition-all"
        size="lg"
        disabled={isCapturing || !hasPhotos}
      >
        <RefreshCcw className="mr-2 h-5 w-5" />
        Retake
      </Button>
    </div>
  );
};

export default VintageControls;
