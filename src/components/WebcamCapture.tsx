import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Camera, FlipHorizontal } from 'lucide-react';
import { OverlayItem, drawOverlays } from '@/utils/overlayManager';

interface WebcamCaptureProps {
  onCapture: (imageSrc: string) => void;
  isCapturing: boolean;
  overlayImages: Record<string, HTMLImageElement>;
  overlays: OverlayItem[];
  onOverlayPositionChange?: (id: string, x: number, y: number) => void;
}

const WebcamCapture: React.FC<WebcamCaptureProps> = ({ 
  onCapture, 
  isCapturing, 
  overlayImages,
  overlays,
  onOverlayPositionChange
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [flipped, setFlipped] = useState(true); // Default to flipped (mirrored) for selfie view
  const captureTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [draggingOverlay, setDraggingOverlay] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let stream: MediaStream | null = null;

    const setupCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } },
          audio: false,
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsCameraReady(true);
          setCameraError(null);
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
        setCameraError('Could not access your camera. Please check permissions.');
        setIsCameraReady(false);
      }
    };

    setupCamera();

    // Cleanup function
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      
      if (captureTimerRef.current) {
        clearInterval(captureTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isCapturing && isCameraReady) {
      startCountdown();
    }
  }, [isCapturing, isCameraReady]);

  const startCountdown = () => {
    setCountdown(3);
    
    captureTimerRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev === null || prev <= 1) {
          if (captureTimerRef.current) {
            clearInterval(captureTimerRef.current);
            captureTimerRef.current = null;
          }
          
          // Use setTimeout to ensure state is updated before capturing
          setTimeout(() => {
            capturePhoto();
          }, 0);
          
          return null;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        // Match canvas size to video dimensions
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        // Draw the video frame to the canvas with correct orientation
        context.save();
        if (!flipped) {
          // For unflipped capture, just draw normally
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
        } else {
          // For flipped capture (default selfie mode), mirror the image
          context.translate(canvas.width, 0);
          context.scale(-1, 1);
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
        }
        context.restore();
        
        // Add overlays if available
        if (overlays.length > 0) {
          drawOverlays(context, overlays, overlayImages);
        }
        
        // Convert to data URL and send back
        const imageSrc = canvas.toDataURL('image/png');
        onCapture(imageSrc);
      }
    }
  };

  const toggleCameraFlip = () => {
    setFlipped(!flipped);
  };

  const handleMouseDown = (event: React.MouseEvent, overlayId: string) => {
    // Start dragging the overlay
    setDraggingOverlay(overlayId);
    
    // Calculate offset to maintain drag position relative to where the user clicked
    const overlay = overlays.find(o => o.id === overlayId);
    if (!overlay) return;
    
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const offsetX = event.clientX - rect.left - overlay.x;
    const offsetY = event.clientY - rect.top - overlay.y;
    
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!draggingOverlay || !containerRef.current || !onOverlayPositionChange) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - containerRect.left - dragOffset.x;
    const y = event.clientY - containerRect.top - dragOffset.y;
    
    // Keep the overlay within the container bounds
    const overlay = overlays.find(o => o.id === draggingOverlay);
    if (!overlay) return;
    
    const maxX = containerRect.width - overlay.width * overlay.scale;
    const maxY = containerRect.height - overlay.height * overlay.scale;
    
    const boundedX = Math.max(0, Math.min(x, maxX));
    const boundedY = Math.max(0, Math.min(y, maxY));
    
    onOverlayPositionChange(draggingOverlay, boundedX, boundedY);
  };

  const handleMouseUp = () => {
    setDraggingOverlay(null);
  };

  const calculateOverlayStyle = (overlay: OverlayItem) => {
    return {
      transform: `translate(${overlay.x}px, ${overlay.y}px) rotate(${overlay.rotation}deg) scale(${overlay.scale})`,
      opacity: overlay.opacity,
      width: overlay.width > 0 ? `${overlay.width}px` : 'auto', 
      height: overlay.height > 0 ? `${overlay.height}px` : 'auto',
    };
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {cameraError && (
        <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-lg">
          <p className="text-red-500">{cameraError}</p>
        </div>
      )}
      
      <div 
        ref={containerRef}
        className={`relative w-full ${cameraError ? 'hidden' : 'block'}`}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full rounded-lg shadow-sm animate-fade-in"
          style={{ transform: flipped ? 'scaleX(-1)' : 'none' }}
        />
        
        {/* Camera orientation control */}
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute top-2 right-2 bg-white/80 hover:bg-white/90 z-10"
          onClick={toggleCameraFlip}
        >
          <FlipHorizontal className="h-4 w-4" />
        </Button>
        
        {/* Live overlay previews with drag support */}
        {overlays.map((overlay) => (
          <div
            key={overlay.id}
            className={`absolute pointer-events-auto cursor-move ${
              draggingOverlay === overlay.id ? 'z-30' : 'z-20'
            }`}
            style={calculateOverlayStyle(overlay)}
            onMouseDown={(e) => handleMouseDown(e, overlay.id)}
          >
            {overlayImages[overlay.id] && (
              <img
                src={overlayImages[overlay.id].src}
                alt="Overlay"
                className="w-full h-full object-contain"
                draggable={false} // Prevent browser's default drag behavior
              />
            )}
            
            {/* Corner handles for resizing - only show when overlay is active */}
            {draggingOverlay === overlay.id && (
              <>
                <div className="absolute w-2 h-2 bg-white border border-black rounded-full top-0 left-0" />
                <div className="absolute w-2 h-2 bg-white border border-black rounded-full top-0 right-0" />
                <div className="absolute w-2 h-2 bg-white border border-black rounded-full bottom-0 left-0" />
                <div className="absolute w-2 h-2 bg-white border border-black rounded-full bottom-0 right-0" />
              </>
            )}
          </div>
        ))}
        
        {countdown !== null && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg z-40">
            <span className="text-7xl font-bold text-white animate-pulse-gentle">
              {countdown}
            </span>
          </div>
        )}
        
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
};

export default WebcamCapture;
