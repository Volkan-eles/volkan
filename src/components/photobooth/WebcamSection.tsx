
import React, { useRef, useState } from 'react';
import WebcamCapture from '@/components/WebcamCapture';
import CountdownSelector from '@/components/photobooth/CountdownSelector';
import FilterSelector from '@/components/photobooth/FilterSelector';
import PhotoBoothControls from '@/components/photobooth/PhotoBoothControls';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import { FilterType } from '@/components/photobooth/FilterSelector';
import { toast } from 'sonner';

interface WebcamSectionProps {
  isCapturing: boolean;
  showControls: boolean;
  selectedFilter: FilterType;
  countdownTime: number;
  capturedPhotos: string[];
  onCapture: (photoSrc: string) => void;
  onTakePhoto: () => void;
  onRetakePhoto: () => void;
  onFilterChange: (filter: FilterType) => void;
  onCountdownChange: (time: number) => void;
}

const WebcamSection: React.FC<WebcamSectionProps> = ({
  isCapturing,
  showControls,
  selectedFilter,
  countdownTime,
  capturedPhotos,
  onCapture,
  onTakePhoto,
  onRetakePhoto,
  onFilterChange,
  onCountdownChange
}) => {
  const overlayImageRef = useRef<HTMLImageElement | null>(null);
  const [continuousCapture, setContinuousCapture] = useState(false);
  const [photosRemaining, setPhotosRemaining] = useState(0);
  const captureIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Apply filters to the webcam
  const getFilterStyle = () => {
    switch(selectedFilter) {
      case 'bw': return 'grayscale(100%)';
      case 'sepia': return 'sepia(100%)';
      case 'vintage': return 'sepia(50%) contrast(80%) brightness(90%)';
      case 'soft': return 'contrast(90%) brightness(110%) saturate(85%)';
      case 'noir': return 'grayscale(100%) contrast(120%) brightness(90%)';
      case 'vivid': return 'saturate(150%) contrast(110%)';
      default: return 'none';
    }
  };

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
        <div style={{ filter: getFilterStyle() }} className="w-full h-full">
          <WebcamCapture 
            onCapture={onCapture} 
            isCapturing={isCapturing} 
            overlayImage={overlayImageRef.current}
            selectedFilter={selectedFilter}
          />
        </div>
      </div>
      
      {showControls && (
        <>
          <CountdownSelector 
            value={countdownTime}
            onChange={onCountdownChange}
          />
          
          <div className="flex justify-center">
            <Button 
              onClick={startContinuousCapture} 
              className="my-4 px-8 py-6 rounded-full text-lg font-medium bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all"
              size="lg"
              disabled={isCapturing || continuousCapture}
            >
              <Camera className="mr-2 h-5 w-5" />
              Start Capture :)
            </Button>
          </div>
          
          <FilterSelector 
            selectedFilter={selectedFilter}
            onSelectFilter={(filter) => {
              console.log('Filter changing to:', filter);
              onFilterChange(filter);
            }}
          />
        </>
      )}
      
      {!showControls && (
        <PhotoBoothControls 
          onTakePhoto={onTakePhoto} 
          onRetakePhoto={onRetakePhoto} 
          isCapturing={isCapturing} 
          hasPhotos={capturedPhotos.length > 0} 
        />
      )}
    </div>
  );
};

export default WebcamSection;
