
import React from 'react';
import { Button } from '@/components/ui/button';
import { Camera, FlipHorizontal } from 'lucide-react';

interface KpopCameraButtonsProps {
  handleCapture: () => void;
  isCapturing: boolean;
  toggleCameraFlip?: () => void;
}

const KpopCameraButtons: React.FC<KpopCameraButtonsProps> = ({ 
  handleCapture, 
  isCapturing,
  toggleCameraFlip
}) => {
  return (
    <div className="flex justify-center gap-3 mt-4">
      <Button 
        onClick={handleCapture} 
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
        size="lg"
        disabled={isCapturing}
      >
        <Camera className="mr-2 h-5 w-5" />
        Capture
      </Button>
      
      {toggleCameraFlip && (
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-white/80 hover:bg-white/90 border-purple-200"
          onClick={toggleCameraFlip}
        >
          <FlipHorizontal className="h-4 w-4 text-purple-600" />
        </Button>
      )}
    </div>
  );
};

export default KpopCameraButtons;
