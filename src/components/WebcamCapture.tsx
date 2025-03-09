
import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';

interface WebcamCaptureProps {
  onCapture: (imageSrc: string) => void;
  isCapturing: boolean;
  overlayImage: HTMLImageElement | null;
}

const WebcamCapture: React.FC<WebcamCaptureProps> = ({ onCapture, isCapturing, overlayImage }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const captureTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;

    const setupCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { 
            facingMode: 'user',
            width: { ideal: 720 }, // Reduced width for better composition
            height: { ideal: 720 }, // Higher height-to-width ratio
            aspectRatio: { ideal: 3/4 } // Portrait-oriented aspect ratio
          },
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
        // Use a 3:4 aspect ratio for the canvas (portrait orientation)
        const aspectRatio = 3/4;
        const captureWidth = video.videoWidth;
        const captureHeight = video.videoWidth * aspectRatio;
        
        canvas.width = captureWidth;
        canvas.height = captureHeight;
        
        // Draw video frame (correcting for mirroring)
        context.save();
        context.translate(canvas.width, 0);
        context.scale(-1, 1);
        
        // Draw the video centered vertically if needed
        const sourceY = Math.max(0, (video.videoHeight - captureHeight) / 2);
        context.drawImage(
          video, 
          0, sourceY, video.videoWidth, captureHeight, // Source rectangle
          0, 0, canvas.width, canvas.height // Destination rectangle
        );
        context.restore();
        
        if (overlayImage) {
          const scaleRatio = Math.min(
            canvas.width / overlayImage.width,
            canvas.height / overlayImage.height
          ) * 0.95; // Scale factor for overlay
          
          const overlayWidth = overlayImage.width * scaleRatio;
          const overlayHeight = overlayImage.height * scaleRatio;
          
          // Position overlay in bottom right with small padding
          const x = canvas.width - overlayWidth - 10;
          const y = canvas.height - overlayHeight - 10;
          
          context.drawImage(overlayImage, x, y, overlayWidth, overlayHeight);
        }
        
        // Apply some basic image enhancement
        context.globalCompositeOperation = 'source-over';
        context.globalAlpha = 0.1;
        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.globalAlpha = 1.0;
        
        const imageSrc = canvas.toDataURL('image/png', 0.9); // Higher quality image
        onCapture(imageSrc);
      }
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {cameraError && (
        <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-lg">
          <p className="text-red-500">{cameraError}</p>
        </div>
      )}
      
      <div className={`relative w-full ${cameraError ? 'hidden' : 'block'}`}>
        <div className="mx-auto max-w-[400px] aspect-[3/4] overflow-hidden rounded-lg shadow-sm">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover rounded-lg shadow-sm animate-fade-in"
            style={{ transform: 'scaleX(-1)' }} // Mirror horizontally for selfie mode
          />
          
          {overlayImage && (
            <div className="absolute right-2 bottom-2 w-3/4 max-w-[400px] pointer-events-none">
              <img 
                src={overlayImage.src} 
                alt="Overlay" 
                className="w-full h-auto object-contain animate-fade-in"
                style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' }}
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
        </div>
        
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
};

export default WebcamCapture;
