
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
      
      // If using selected idols
      if (selectedIdols.length > 0) {
        // Choose which idol to display based on current photo count
        // or select one randomly if we want a random appearance
        const selectedIdol = selectedIdols[Math.floor(Math.random() * selectedIdols.length)];
        
        if (selectedIdol) {
          // Load and draw the selected idol image
          const idolImg = new Image();
          idolImg.src = selectedIdol.src;
          
          const drawIdol = () => {
            // Position idol on the right side of the photo
            const scaleRatio = Math.min(
              (canvas.width * 0.65) / idolImg.width,  // Increase size to 65% of canvas width
              (canvas.height * 0.9) / idolImg.height  // Increase size to 90% of canvas height
            );
            
            const overlayWidth = idolImg.width * scaleRatio;
            const overlayHeight = idolImg.height * scaleRatio;
            
            // Position idol on the right side
            const x = canvas.width - overlayWidth - 5;
            const y = canvas.height - overlayHeight;
            
            context.drawImage(idolImg, x, y, overlayWidth, overlayHeight);
          };
          
          // If the image is already loaded
          if (idolImg.complete) {
            drawIdol();
          } else {
            // Wait for the image to load
            idolImg.onload = drawIdol;
          }
        }
      }
      
      const imageSrc = canvas.toDataURL('image/png', 1.0);
      onCapture(imageSrc);
    }
  }, [flipped, onCapture, overlayImage, selectedFilter, filterAdjustments, selectedIdols]);

  return {
    canvasRef,
    capturePhoto
  };
};
