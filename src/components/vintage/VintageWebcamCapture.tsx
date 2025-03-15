
import React from 'react';
import { FilterType } from '@/components/photobooth/FilterSelector';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';
import useWebcam from '@/hooks/useWebcam';
import VintageCameraView from './VintageCameraView';

interface VintageWebcamCaptureProps {
  onCapture: (imageSrc: string) => void;
  isCapturing: boolean;
  overlayImage?: HTMLImageElement | null;
  filterStyle?: string;
  selectedFilter?: DigiboothFilterType | FilterType;
  filterAdjustments?: FilterAdjustmentValues;
  countdownTime?: number;
}

const VintageWebcamCapture: React.FC<VintageWebcamCaptureProps> = ({ 
  onCapture, 
  isCapturing, 
  overlayImage = null,
  filterStyle,
  selectedFilter = 'sepia',
  filterAdjustments,
  countdownTime = 3
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
    filterAdjustments,
    countdownTime
  });

  return (
    <VintageCameraView
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

export default VintageWebcamCapture;
