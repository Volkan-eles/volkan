
import React, { useRef, useState } from 'react';
import KpopWebcamCapture from '@/components/kpop/KpopWebcamCapture';
import CountdownSelector from '@/components/photobooth/CountdownSelector';
import KpopControls from '@/components/kpop/KpopControls';
import KpopCameraButtons from '@/components/kpop/KpopCameraButtons';
import KpopFilterDisplay from '@/components/kpop/KpopFilterDisplay';
import IdolSelector from '@/components/kpop/IdolSelector';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';
import { getFilterStyle } from '@/utils/filters';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';

interface KpopWebcamSectionProps {
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
  selectedIdols?: Array<{id: string, name: string, src: string}>;
  onSelectIdols?: (idols: Array<{id: string, name: string, src: string}>) => void;
}

const KpopWebcamSection: React.FC<KpopWebcamSectionProps> = ({
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
  onCountdownChange,
  selectedIdols = [],
  onSelectIdols = () => {}
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
    <div className="flex-grow lg:w-[60%] bg-white rounded-xl shadow-lg p-6 overflow-hidden">
      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-inner">
        <div className="w-full h-full">
          <KpopWebcamCapture 
            onCapture={onCapture} 
            isCapturing={isCapturing} 
            overlayImage={overlayImageRef.current}
            selectedFilter={selectedFilter}
            filterAdjustments={filterAdjustments}
            filterStyle={filterStyle}
            countdownTime={countdownTime}
            selectedIdols={selectedIdols}
          />
        </div>
      </div>
      
      {showControls && (
        <>
          <div className="my-4">
            <IdolSelector 
              onSelectIdols={onSelectIdols}
              selectedIdols={selectedIdols}
              maxSelections={4}
            />
          </div>
        
          <CountdownSelector 
            value={countdownTime}
            onChange={onCountdownChange}
          />
          
          <div className="flex justify-center">
            <Button 
              onClick={startContinuousCapture} 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all my-4 text-lg font-medium"
              size="lg"
              disabled={isCapturing || continuousCapture}
            >
              <Camera className="mr-2 h-5 w-5" />
              Start Capture
            </Button>
          </div>
          
          <KpopFilterDisplay
            selectedFilter={selectedFilter}
            onFilterChange={onFilterChange}
            adjustmentValues={filterAdjustments}
            onAdjustmentChange={onAdjustmentChange}
          />
        </>
      )}
      
      {!showControls && (
        <KpopControls 
          onTakePhoto={onTakePhoto} 
          onRetakePhoto={onRetakePhoto} 
          isCapturing={isCapturing} 
          hasPhotos={capturedPhotos.length > 0} 
        />
      )}
    </div>
  );
};

export default KpopWebcamSection;
