import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { FlipHorizontal } from 'lucide-react';
import CountdownOverlay from './CountdownOverlay';
import { FilterType } from './photobooth/FilterSelector';

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [flipped, setFlipped] = useState(true);
  const [countdownActive, setCountdownActive] = useState(false);

  useEffect(() => {
    let stream: MediaStream | null = null;

    const setupCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
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
    };
  }, []);

  useEffect(() => {
    if (isCapturing && isCameraReady) {
      setCountdownActive(true);
    }
  }, [isCapturing, isCameraReady]);

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        context.save();
        if (!flipped) {
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
        } else {
          context.translate(canvas.width, 0);
          context.scale(-1, 1);
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
        }
        context.restore();
        
        applyCanvasFilter(context, canvas, selectedFilter);
        
        if (overlayImage) {
          const scaleRatio = Math.min(
            canvas.width / overlayImage.width,
            canvas.height / overlayImage.height
          ) * 1.0;
          
          const overlayWidth = overlayImage.width * scaleRatio;
          const overlayHeight = overlayImage.height * scaleRatio;
          
          const x = canvas.width - overlayWidth - 10;
          const y = canvas.height - overlayHeight; 
          
          context.drawImage(overlayImage, x, y, overlayWidth, overlayHeight);
        }
        
        const imageSrc = canvas.toDataURL('image/png', 1.0);
        onCapture(imageSrc);
      }
    }
  };

  const applyCanvasFilter = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, filter: FilterType) => {
    console.log(`Applying filter: ${filter} to canvas`);
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    switch(filter) {
      case 'bw':
        for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          data[i] = data[i + 1] = data[i + 2] = avg;
        }
        break;
      
      case 'sepia':
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          data[i] = Math.min(255, (r * 0.393) + (g * 0.769) + (b * 0.189));
          data[i + 1] = Math.min(255, (r * 0.349) + (g * 0.686) + (b * 0.168));
          data[i + 2] = Math.min(255, (r * 0.272) + (g * 0.534) + (b * 0.131));
        }
        break;
      
      case 'vintage':
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          data[i] = Math.min(255, (r * 0.393) + (g * 0.769) + (b * 0.189));
          data[i + 1] = Math.min(255, (r * 0.349) + (g * 0.686) + (b * 0.168));
          data[i + 2] = Math.min(255, (r * 0.272) + (g * 0.534) + (b * 0.131));
          
          data[i] = Math.min(255, data[i] * 0.8);
          data[i + 1] = Math.min(255, data[i + 1] * 0.8);
          data[i + 2] = Math.min(255, data[i + 2] * 0.8);
        }
        break;
      
      case 'soft':
        for (let i = 0; i < data.length; i += 4) {
          data[i] = Math.min(255, data[i] * 0.9 + 25);
          data[i + 1] = Math.min(255, data[i + 1] * 0.9 + 25);
          data[i + 2] = Math.min(255, data[i + 2] * 0.9 + 25);
        }
        break;
      
      case 'noir':
        for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          const newVal = avg * 1.2 - 30;
          data[i] = data[i + 1] = data[i + 2] = Math.min(255, Math.max(0, newVal));
        }
        break;
      
      case 'vivid':
        for (let i = 0; i < data.length; i += 4) {
          data[i] = Math.min(255, data[i] * 1.1);
          data[i + 1] = Math.min(255, data[i + 1] * 1.1);
          data[i + 2] = Math.min(255, data[i + 2] * 1.1);
        }
        break;
      
      case 'none':
      default:
        break;
    }
    
    ctx.putImageData(imageData, 0, 0);
  };

  const toggleCameraFlip = () => {
    setFlipped(!flipped);
  };

  const handleCountdownComplete = () => {
    setCountdownActive(false);
    capturePhoto();
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
