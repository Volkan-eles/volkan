
import { useCallback, useRef } from 'react';
import { FilterType } from '@/components/photobooth/FilterSelector';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';
import { applyCanvasFilter } from '@/utils/filters';

interface UsePhotoCaptureProps {
  onCapture: (imageSrc: string) => void;
  flipped: boolean;
  selectedFilter?: FilterType | DigiboothFilterType;
  filterAdjustments?: FilterAdjustmentValues;
  overlayImage: HTMLImageElement | null;
}

interface UsePhotoCaptureReturn {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  capturePhoto: () => void;
}

export const usePhotoCapture = ({
  onCapture,
  flipped,
  selectedFilter = 'none',
  filterAdjustments,
  overlayImage
}: UsePhotoCaptureProps): UsePhotoCaptureReturn => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const capturePhoto = useCallback(() => {
    const videoElement = document.querySelector('video');
    if (!videoElement || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    if (context) {
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      
      context.save();
      if (!flipped) {
        context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
      } else {
        context.translate(canvas.width, 0);
        context.scale(-1, 1);
        context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
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
  }, [flipped, onCapture, overlayImage, selectedFilter, filterAdjustments]);

  return {
    canvasRef,
    capturePhoto
  };
};
