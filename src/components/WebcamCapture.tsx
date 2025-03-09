
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
        // Request camera access with higher resolution
        stream = await navigator.mediaDevices.getUserMedia({
          video: { 
            facingMode: 'user', 
            width: { ideal: 1280 }, 
            height: { ideal: 720 } 
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
        // Set higher resolution for better quality photos
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        // Draw the video frame to the canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Apply some simple image enhancements
        try {
          // Light balance adjustment
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
          
          // Simple brightness boost
          for (let i = 0; i < data.length; i += 4) {
            // Subtle increase in brightness for darker areas
            if (data[i] < 100 && data[i+1] < 100 && data[i+2] < 100) {
              data[i] = Math.min(255, data[i] * 1.1);     // R
              data[i+1] = Math.min(255, data[i+1] * 1.1); // G
              data[i+2] = Math.min(255, data[i+2] * 1.1); // B
            }
          }
          
          context.putImageData(imageData, 0, 0);
        } catch (e) {
          console.log('Image processing error:', e);
          // Continue if image processing fails
        }
        
        // Add overlay if available
        if (overlayImage) {
          // Increase the scale for a more prominent overlay
          const scaleRatio = Math.min(
            canvas.width / overlayImage.width,
            canvas.height / overlayImage.height
          ) * 0.9; // Scale to 90% of the possible size for better visibility
          
          const overlayWidth = overlayImage.width * scaleRatio;
          const overlayHeight = overlayImage.height * scaleRatio;
          
          // Position the overlay in a good position - bottom right by default
          const x = canvas.width - overlayWidth - 20;
          const y = canvas.height - overlayHeight - 20;
          
          context.drawImage(overlayImage, x, y, overlayWidth, overlayHeight);
        }
        
        // Convert to data URL and send back - use higher quality
        const imageSrc = canvas.toDataURL('image/png', 1.0);
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
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full rounded-lg shadow-sm animate-fade-in"
          style={{ transform: 'scaleX(-1)' }} // Mirror effect only
        />
        
        {/* Live overlay preview */}
        {overlayImage && (
          <div className="absolute right-4 bottom-4 w-2/5 max-w-[300px] pointer-events-none opacity-90">
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
        
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
};

export default WebcamCapture;
