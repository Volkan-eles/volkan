
import React from 'react';
import { Button } from '@/components/ui/button';
import { FlipHorizontal } from 'lucide-react';
import CountdownOverlay from '@/components/CountdownOverlay';

interface KpopCameraViewProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  cameraError: string | null;
  flipped: boolean;
  countdownActive: boolean;
  toggleCameraFlip: () => void;
  handleCountdownComplete: () => void;
  overlayImage: HTMLImageElement | null;
  filterStyle?: string;
  selectedIdols?: Array<{id: string, name: string, src: string}>;
}

const KpopCameraView: React.FC<KpopCameraViewProps> = ({ 
  videoRef,
  canvasRef,
  cameraError,
  flipped,
  countdownActive,
  toggleCameraFlip,
  handleCountdownComplete,
  overlayImage,
  filterStyle,
  selectedIdols = []
}) => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {cameraError && (
        <div className="w-full h-64 flex items-center justify-center bg-purple-100 rounded-lg">
          <p className="text-red-500">{cameraError}</p>
        </div>
      )}
      
      <div className={`relative w-full ${cameraError ? 'hidden' : 'block'}`}>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full rounded-lg shadow-sm animate-fade-in border-2 border-pink-200"
          style={{ 
            transform: flipped ? 'scaleX(-1)' : 'none', 
            filter: filterStyle || 'none',
            transition: 'filter 0.3s ease'
          }}
        />
        
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute top-2 right-2 bg-white/80 hover:bg-white/90 z-10 border-purple-200"
          onClick={toggleCameraFlip}
        >
          <FlipHorizontal className="h-4 w-4 text-purple-600" />
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

export default KpopCameraView;
