
import React from 'react';
import { Button } from '@/components/ui/button';
import { Camera, RefreshCw } from 'lucide-react';

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
    <div className="flex justify-center gap-4">
      <Button 
        onClick={onTakePhoto}
        className="bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white font-medium px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
        size="lg"
      >
        <Camera className="mr-2 h-4 w-4" />
        Capture Moment
      </Button>
      
      {showRetake && (
        <Button 
          onClick={onRetakePhoto}
          variant="outline"
          className="border-pink-200 text-pink-700 hover:bg-pink-50 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Retake Last
        </Button>
      )}
    </div>
  );
};

export default WeddingCameraButtons;
