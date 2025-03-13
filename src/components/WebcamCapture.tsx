
import React from 'react';
import { Button } from '@/components/ui/button';
import { FlipHorizontal } from 'lucide-react';
import CountdownOverlay from './CountdownOverlay';
import { FilterType } from './photobooth/FilterSelector';
import useWebcam from '@/hooks/useWebcam';

interface WebcamCaptureProps {
  onCapture: (imageSrc: string) => void;
  isCapturing: boolean;
  overlayImage: HTMLImageElement | null;
  filterStyle?: string;
  selectedFilter?: FilterType;
}

const WebcamCapture: React.FC<WebcamCaptureProps> = ({ 
  onCapture, 
  isCapturing, 
  overlayImage,
  filterStyle,
  selectedFilter = 'none'
}) => {
  const {
    videoRef,
    canvasRef,
    cameraError,
    flipped,
    countdownActive,
    toggleCameraFlip,
    handleCountdownComplete
  } = useWebcam({
    onCapture,
    isCapturing,
    overlayImage,
    selectedFilter
  });

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {cameraError && (
        <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-lg">
          <p className="text-red-500">{cameraError}</p>
        </div>
      )}
      
      <div className={`relative w-full ${cameraError ? 'hidden' : 'block'}`}>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full rounded-lg shadow-sm animate-fade-in"
          style={{ transform: flipped ? 'scaleX(-1)' : 'none' }}
        />
        
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute top-2 right-2 bg-white/80 hover:bg-white/90 z-10"
          onClick={toggleCameraFlip}
        >
          <FlipHorizontal className="h-4 w-4" />
        </Button>
        
        {overlayImage && (
          <div className="absolute right-4 bottom-0 w-2/5 pointer-events-none">
            <img 
              src={overlayImage.src} 
              alt="Overlay" 
              className="w-full h-auto object-contain"
            />
          </div>
        )}
        
        <CountdownOverlay 
          isActive={countdownActive} 
          seconds={3} 
          onComplete={handleCountdownComplete} 
        />
        
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
};

export default WebcamCapture;
