
import React from 'react';
import { Button } from '@/components/ui/button';
import { Camera, FlipHorizontal } from 'lucide-react';

interface VintageCameraButtonsProps {
  handleCapture: () => void;
  isCapturing: boolean;
  toggleCameraFlip?: () => void;
}

const VintageCameraButtons: React.FC<VintageCameraButtonsProps> = ({ 
  handleCapture, 
  isCapturing,
  toggleCameraFlip
}) => {
  return (
    <div className="flex justify-center gap-3 mt-4">
      <Button 
        onClick={handleCapture} 
        className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
        size="lg"
        disabled={isCapturing}
      >
        <Camera className="mr-2 h-5 w-5" />
        Take Photo
      </Button>
      
      {toggleCameraFlip && (
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-amber-50/80 hover:bg-amber-100/90 border-amber-300"
          onClick={toggleCameraFlip}
        >
          <FlipHorizontal className="h-4 w-4 text-amber-800" />
        </Button>
      )}
    </div>
  );
};

export default VintageCameraButtons;
