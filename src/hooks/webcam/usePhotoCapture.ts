
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
  selectedIdols?: Array<{id: string, name: string, src: string}>;
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
  overlayImage,
  selectedIdols = []
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
      
      // If using single overlay
      if (overlayImage && selectedIdols.length === 0) {
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
      
      // If using selected idols - no display in capture process as they'll be added in the PhotoItem component
      
      const imageSrc = canvas.toDataURL('image/png', 1.0);
      onCapture(imageSrc);
    }
  }, [flipped, onCapture, overlayImage, selectedFilter, filterAdjustments, selectedIdols]);

  return {
    canvasRef,
    capturePhoto
  };
};
