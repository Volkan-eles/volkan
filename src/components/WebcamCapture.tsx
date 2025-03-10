
import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Camera, FlipHorizontal, RotateCcw } from 'lucide-react';
import { playSound } from '@/utils/soundEffects';

interface WebcamCaptureProps {
  onCapture: (imageSrc: string) => void;
  isCapturing: boolean;
  overlayImage: HTMLImageElement | null;
  countdownDuration?: number;
  onRetake?: () => void;
}

const WebcamCapture: React.FC<WebcamCaptureProps> = ({ 
  onCapture, 
  isCapturing, 
  overlayImage, 
  countdownDuration = 3,
  onRetake 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [flipped, setFlipped] = useState(true); // Default to flipped (mirrored) for selfie view
  const captureTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [lastCapturedPhoto, setLastCapturedPhoto] = useState<string | null>(null);
  const [showRetakeOption, setShowRetakeOption] = useState(false);

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
  }, [isCapturing, isCameraReady, countdownDuration]);

  const startCountdown = () => {
    setCountdown(countdownDuration);
    
    // Play initial tick sound
    playSound('tick');
    
    captureTimerRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev === null || prev <= 1) {
          if (captureTimerRef.current) {
            clearInterval(captureTimerRef.current);
            captureTimerRef.current = null;
          }
          
          // Play capture sound when countdown finishes
          playSound('capture');
          
          // Use setTimeout to ensure state is updated before capturing
          setTimeout(() => {
            capturePhoto();
          }, 0);
          
          return null;
        }
        
        // Play tick sound for each second
        playSound('tick');
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
        
        // Add overlay if available
        if (overlayImage) {
          const scaleRatio = Math.min(
            canvas.width / overlayImage.width,
            canvas.height / overlayImage.height
          ) * 1.0; // Increased from 0.8 to 1.0 (100% of the possible size)
          
          const overlayWidth = overlayImage.width * scaleRatio;
          const overlayHeight = overlayImage.height * scaleRatio;
          
          // Position the overlay higher and to the right - adjusted for better placement
          const x = canvas.width - overlayWidth - 10;
          const y = canvas.height - overlayHeight; // Moved to bottom edge for the strip
          
          context.drawImage(overlayImage, x, y, overlayWidth, overlayHeight);
        }
        
        // Convert to data URL and send back
        const imageSrc = canvas.toDataURL('image/png');
        setLastCapturedPhoto(imageSrc);
        setShowRetakeOption(true);
        onCapture(imageSrc);
      }
    }
  };

  const handleRetake = () => {
    setLastCapturedPhoto(null);
    setShowRetakeOption(false);
    if (onRetake) {
      onRetake();
    }
  };

  const toggleCameraFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {cameraError && (
        <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-lg">
          <p className="text-red-500">{cameraError}</p>
        </div>
      )}
      
      <div className={`relative w-full ${cameraError ? 'hidden' : 'block'}`}>
        {showRetakeOption && lastCapturedPhoto ? (
          <div className="relative w-full">
            <img 
              src={lastCapturedPhoto} 
              alt="Last captured" 
              className="w-full rounded-lg shadow-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
              <Button 
                onClick={handleRetake} 
                variant="outline" 
                className="bg-white text-black hover:bg-gray-200"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Retake Photo
              </Button>
            </div>
          </div>
        ) : (
          <>
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
            
            {/* Live overlay preview - increased size and positioned higher */}
            {overlayImage && (
              <div className="absolute right-4 bottom-0 w-2/5 pointer-events-none">
                <img 
                  src={overlayImage.src} 
                  alt="Overlay" 
                  className="w-full h-auto object-contain"
                />
              </div>
            )}
            
            {countdown !== null && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                <span className="text-7xl font-bold text-white animate-pulse-gentle">
                  {countdown}
                </span>
              </div>
            )}
          </>
        )}
        
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
};

export default WebcamCapture;
