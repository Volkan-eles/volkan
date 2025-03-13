
import React from 'react';
import { FilterType } from '@/components/photobooth/FilterSelector';
import useWebcam from '@/hooks/useWebcam';
import DigiboothCameraView from './DigiboothCameraView';

interface DigiboothWebcamCaptureProps {
  onCapture: (imageSrc: string) => void;
  isCapturing: boolean;
  overlayImage: HTMLImageElement | null;
  filterStyle?: string;
  selectedFilter?: FilterType;
}

const DigiboothWebcamCapture: React.FC<DigiboothWebcamCaptureProps> = ({ 
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
    <DigiboothCameraView
      videoRef={videoRef}
      canvasRef={canvasRef}
      cameraError={cameraError}
      flipped={flipped}
      countdownActive={countdownActive}
      toggleCameraFlip={toggleCameraFlip}
      handleCountdownComplete={handleCountdownComplete}
      overlayImage={overlayImage}
      filterStyle={filterStyle}
    />
  );
};

export default DigiboothWebcamCapture;
