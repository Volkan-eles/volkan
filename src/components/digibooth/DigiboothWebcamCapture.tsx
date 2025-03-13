
import React from 'react';
import { FilterType } from '@/components/photobooth/FilterSelector';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';
import useWebcam from '@/hooks/useWebcam';
import DigiboothCameraView from './DigiboothCameraView';

interface DigiboothWebcamCaptureProps {
  onCapture: (imageSrc: string) => void;
  isCapturing: boolean;
  overlayImage: HTMLImageElement | null;
  filterStyle?: string;
  selectedFilter?: DigiboothFilterType | FilterType;
  filterAdjustments?: FilterAdjustmentValues;
  selectedLayout?: string;
}

const DigiboothWebcamCapture: React.FC<DigiboothWebcamCaptureProps> = ({ 
  onCapture, 
  isCapturing, 
  overlayImage,
  filterStyle,
  selectedFilter = 'none',
  filterAdjustments,
  selectedLayout = 'classic-strip'
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
    selectedFilter,
    filterAdjustments
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
      selectedLayout={selectedLayout}
    />
  );
};

export default DigiboothWebcamCapture;
