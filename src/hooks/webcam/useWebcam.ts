
import { useCameraSetup } from './useCameraSetup';
import { usePhotoCapture } from './usePhotoCapture';
import { useCountdown } from './useCountdown';
import { FilterType } from '@/components/photobooth/FilterSelector';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';

interface UseWebcamProps {
  onCapture: (imageSrc: string) => void;
  isCapturing: boolean;
  overlayImage: HTMLImageElement | null;
  selectedFilter?: FilterType | DigiboothFilterType;
  filterAdjustments?: FilterAdjustmentValues;
  countdownTime?: number;
  selectedIdols?: Array<{id: string, name: string, src: string}>;
}

const useWebcam = ({
  onCapture,
  isCapturing,
  overlayImage,
  selectedFilter = 'none',
  filterAdjustments,
  countdownTime = 3,
  selectedIdols = []
}: UseWebcamProps) => {
  // Set up camera
  const {
    videoRef,
    isCameraReady,
    cameraError,
    flipped,
    toggleCameraFlip
  } = useCameraSetup();

  // Set up photo capture
  const { canvasRef, capturePhoto } = usePhotoCapture({
    onCapture,
    flipped,
    selectedFilter,
    filterAdjustments,
    overlayImage,
    selectedIdols
  });

  // Set up countdown
  const { countdownActive, handleCountdownComplete } = useCountdown({
    isCapturing,
    isCameraReady,
    countdownTime,
    onComplete: capturePhoto
  });

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
