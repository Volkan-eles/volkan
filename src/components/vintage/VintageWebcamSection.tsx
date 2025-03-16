
import React, { useRef, useState } from 'react';
import VintageWebcamCapture from './VintageWebcamCapture';
import VintageCountdownSelector from './VintageCountdownSelector';
import VintageControls from './VintageControls';
import VintageCameraButtons from './VintageCameraButtons';
import VintageFilterDisplay from './VintageFilterDisplay';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';
import { getFilterStyle } from '@/utils/filters';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';

interface VintageWebcamSectionProps {
  isCapturing: boolean;
  showControls: boolean;
  selectedFilter: DigiboothFilterType;
  filterAdjustments: FilterAdjustmentValues;
  countdownTime: number;
  capturedPhotos: string[];
  onCapture: (photoSrc: string) => void;
  onTakePhoto: () => void;
  onRetakePhoto: () => void;
  onFilterChange: (filter: DigiboothFilterType) => void;
  onAdjustmentChange: (adjustments: FilterAdjustmentValues) => void;
  onCountdownChange: (time: number) => void;
}

const VintageWebcamSection: React.FC<VintageWebcamSectionProps> = ({
  isCapturing,
  showControls,
  selectedFilter,
  filterAdjustments,
  countdownTime,
  capturedPhotos,
  onCapture,
  onTakePhoto,
  onRetakePhoto,
  onFilterChange,
  onAdjustmentChange,
  onCountdownChange
}) => {
  const overlayImageRef = useRef<HTMLImageElement | null>(null);
  const [continuousCapture, setContinuousCapture] = useState(false);
  const [photosRemaining, setPhotosRemaining] = useState(0);
  const captureIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Get CSS filter style for preview
  const filterStyle = getFilterStyle(selectedFilter, filterAdjustments);

  // Start continuous photo capture
  const startContinuousCapture = () => {
    // Initialize continuous capture with 4 photos
    const totalPhotos = 4;
    setContinuousCapture(true);
    setPhotosRemaining(totalPhotos);
    
    // Trigger the first photo
    onTakePhoto();
    
    toast.success(`Starting photo session: ${totalPhotos} photos at ${countdownTime}-second intervals`);
  };

  // Handle when a photo is successfully captured
  React.useEffect(() => {
    // If we're not in continuous mode or no more photos remaining, do nothing
    if (!continuousCapture || photosRemaining <= 0) return;
    
    // When a photo is captured and we still have photos remaining
    if (!isCapturing && photosRemaining > 0) {
      // Schedule the next photo to be taken after countdownTime
      const nextPhotoTimeout = setTimeout(() => {
        if (photosRemaining > 1) {
          onTakePhoto(); // Take the next photo
          setPhotosRemaining(prev => prev - 1);
        } else {
          // Last photo has been taken
          setContinuousCapture(false);
          setPhotosRemaining(0);
          toast.success("Photo session complete!");
        }
      }, countdownTime * 1000);
      
      captureIntervalRef.current = nextPhotoTimeout;
    }
    
    // Cleanup on unmount
    return () => {
      if (captureIntervalRef.current) {
        clearTimeout(captureIntervalRef.current);
      }
    };
  }, [isCapturing, continuousCapture, photosRemaining, countdownTime, onTakePhoto]);

  return (
    <div className="lg:w-[60%] space-y-4">
      <div className="bg-white/90 p-6 rounded-xl shadow-lg border border-amber-200">
        <h2 className="text-2xl font-bold text-center text-amber-800 mb-4 font-serif">Vintage Photo Booth</h2>
        
        <div className="relative aspect-video bg-amber-50 rounded-lg overflow-hidden shadow-inner">
          <div className="w-full h-full">
            <VintageWebcamCapture 
              onCapture={onCapture} 
              isCapturing={isCapturing} 
              overlayImage={overlayImageRef.current}
              selectedFilter={selectedFilter}
              filterAdjustments={filterAdjustments}
              filterStyle={filterStyle}
              countdownTime={countdownTime}
            />
          </div>
        </div>
        
        {showControls && (
          <>
            <VintageCountdownSelector 
              value={countdownTime}
              onChange={onCountdownChange}
            />
            
            <div className="flex justify-center">
              <Button 
                onClick={startContinuousCapture} 
                className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8 py-6 rounded-full shadow-md hover:shadow-lg transition-all my-4 text-lg font-medium font-serif"
                size="lg"
                disabled={isCapturing || continuousCapture}
              >
                <Camera className="mr-2 h-5 w-5" />
                Start Capture
              </Button>
            </div>
            
            <VintageFilterDisplay
              selectedFilter={selectedFilter}
              onFilterChange={onFilterChange}
              adjustmentValues={filterAdjustments}
              onAdjustmentChange={onAdjustmentChange}
            />
          </>
        )}
        
        {!showControls && (
          <VintageControls 
            onTakePhoto={onTakePhoto} 
            onRetakePhoto={onRetakePhoto} 
            isCapturing={isCapturing} 
            hasPhotos={capturedPhotos.length > 0} 
          />
        )}
      </div>
      
      <div className="text-center text-amber-800 text-sm">
        <p>Take 3-4 photos to create your vintage photo strip. Customize it with filters and decorations.</p>
      </div>
    </div>
  );
};

export default VintageWebcamSection;
