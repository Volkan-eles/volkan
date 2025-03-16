
import React from 'react';
import { FilterType } from '@/components/photobooth/FilterSelector';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';
import useWebcam from '@/hooks/useWebcam';
import KpopCameraView from './KpopCameraView';

interface KpopWebcamCaptureProps {
  onCapture: (imageSrc: string) => void;
  isCapturing: boolean;
  overlayImage?: HTMLImageElement | null;
  filterStyle?: string;
  selectedFilter?: DigiboothFilterType | FilterType;
  filterAdjustments?: FilterAdjustmentValues;
  countdownTime?: number;
  selectedIdols?: Array<{id: string, name: string, src: string}>;
}

const KpopWebcamCapture: React.FC<KpopWebcamCaptureProps> = ({ 
  onCapture, 
  isCapturing, 
  overlayImage = null,
  filterStyle,
  selectedFilter = 'none',
  filterAdjustments,
  countdownTime = 3,
  selectedIdols = []
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
    countdownTime,
    selectedIdols
  });

  return (
    <KpopCameraView
      videoRef={videoRef}
      canvasRef={canvasRef}
      cameraError={cameraError}
      flipped={flipped}
      countdownActive={countdownActive}
      toggleCameraFlip={toggleCameraFlip}
      handleCountdownComplete={handleCountdownComplete}
      overlayImage={overlayImage}
      filterStyle={filterStyle}
      selectedIdols={selectedIdols}
    />
  );
};

export default KpopWebcamCapture;
