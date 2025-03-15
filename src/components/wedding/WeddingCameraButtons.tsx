
import React from 'react';
import { Button } from '@/components/ui/button';
import { Camera, RefreshCcw } from 'lucide-react';

interface WeddingCameraButtonsProps {
  onTakePhoto: () => void;
  onRetakePhoto: () => void;
  showRetake: boolean;
}

const WeddingCameraButtons: React.FC<WeddingCameraButtonsProps> = ({
  onTakePhoto,
  onRetakePhoto,
  showRetake
}) => {
  return (
    <div className="flex justify-center space-x-4">
      <Button
        size="lg" 
        className="bg-pink-400 hover:bg-pink-500 text-white text-lg px-6 py-6 rounded-xl shadow-md hover:shadow-lg transition-all"
        onClick={onTakePhoto}
      >
        <Camera className="mr-2 h-5 w-5" />
        Capture Photo
      </Button>
      
      {showRetake && (
        <Button
          variant="outline"
          size="lg"
          className="border-pink-400 text-pink-500 hover:bg-pink-50 text-lg px-6 py-6 rounded-xl"
          onClick={onRetakePhoto}
        >
          <RefreshCcw className="mr-2 h-5 w-5" />
          Retake
        </Button>
      )}
    </div>
  );
};

export default WeddingCameraButtons;
