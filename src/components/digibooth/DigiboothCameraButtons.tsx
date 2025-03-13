
import React from 'react';
import { Button } from '@/components/ui/button';
import { Camera, FlipHorizontal } from 'lucide-react';

interface DigiboothCameraButtonsProps {
  handleCapture: () => void;
  isCapturing: boolean;
  toggleCameraFlip?: () => void;
}

const DigiboothCameraButtons: React.FC<DigiboothCameraButtonsProps> = ({ 
  handleCapture, 
  isCapturing,
  toggleCameraFlip
}) => {
  return (
    <div className="flex justify-center gap-3 mt-4">
      <Button 
        onClick={handleCapture} 
        className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
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
          className="bg-white/80 hover:bg-white/90"
          onClick={toggleCameraFlip}
        >
          <FlipHorizontal className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default DigiboothCameraButtons;
