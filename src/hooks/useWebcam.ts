import { useState, useEffect, useRef, useCallback } from 'react';
import { FilterType } from '@/components/photobooth/FilterSelector';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';
import { applyCanvasFilter } from '@/utils/filters';

interface UseWebcamProps {
  onCapture: (imageSrc: string) => void;
  isCapturing: boolean;
  overlayImage: HTMLImageElement | null;
  selectedFilter?: FilterType | DigiboothFilterType;
  filterAdjustments?: FilterAdjustmentValues;
  countdownTime?: number;
}

const useWebcam = ({ 
  onCapture, 
  isCapturing, 
  overlayImage, 
  selectedFilter = 'none',
  filterAdjustments,
  countdownTime = 3
}: UseWebcamProps) => {
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

  const capturePhoto = useCallback(() => {
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
        
        applyCanvasFilter(context, canvas, selectedFilter, filterAdjustments);
        
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
  }, [flipped, onCapture, overlayImage, selectedFilter, filterAdjustments]);

  const toggleCameraFlip = useCallback(() => {
    setFlipped(!flipped);
  }, [flipped]);

  const handleCountdownComplete = useCallback(() => {
    setCountdownActive(false);
    capturePhoto();
  }, [capturePhoto]);

  return {
    videoRef,
    canvasRef,
    cameraError,
    flipped,
    countdownActive,
    toggleCameraFlip,
    handleCountdownComplete
  };
};

export default useWebcam;
