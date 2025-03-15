
import { useState, useEffect, useRef } from 'react';

interface UseCameraSetupReturn {
  videoRef: React.RefObject<HTMLVideoElement>;
  isCameraReady: boolean;
  cameraError: string | null;
  flipped: boolean;
  toggleCameraFlip: () => void;
}

export const useCameraSetup = (): UseCameraSetupReturn => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [flipped, setFlipped] = useState(true);

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

  const toggleCameraFlip = () => {
    setFlipped(prev => !prev);
  };

  return {
    videoRef,
    isCameraReady,
    cameraError,
    flipped,
    toggleCameraFlip
  };
};
