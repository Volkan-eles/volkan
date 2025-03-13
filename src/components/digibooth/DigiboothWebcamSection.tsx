
import React, { useRef } from 'react';
import DigiboothWebcamCapture from '@/components/digibooth/DigiboothWebcamCapture';
import CountdownSelector from '@/components/photobooth/CountdownSelector';
import DigiboothFilterSelector from '@/components/digibooth/DigiboothFilterSelector';
import DigiboothControls from '@/components/digibooth/DigiboothControls';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import { DigiboothFilterType } from '@/components/digibooth/DigiboothFilterSelector';

interface DigiboothWebcamSectionProps {
  isCapturing: boolean;
  showControls: boolean;
  selectedFilter: DigiboothFilterType;
  countdownTime: number;
  capturedPhotos: string[];
  onCapture: (photoSrc: string) => void;
  onTakePhoto: () => void;
  onRetakePhoto: () => void;
  onFilterChange: (filter: DigiboothFilterType) => void;
  onCountdownChange: (time: number) => void;
}

const DigiboothWebcamSection: React.FC<DigiboothWebcamSectionProps> = ({
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

  return (
    <div className="flex-grow lg:w-[60%] bg-white rounded-xl shadow-lg p-6 overflow-hidden">
      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-inner">
        <div style={{ filter: getFilterStyle() }} className="w-full h-full">
          <DigiboothWebcamCapture 
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
              onClick={onTakePhoto} 
              className="my-4 px-8 py-6 rounded-full text-lg font-medium bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white shadow-lg hover:shadow-xl transition-all"
              size="lg"
              disabled={isCapturing}
            >
              <Camera className="mr-2 h-5 w-5" />
              Start Capture :)
            </Button>
          </div>
          
          <DigiboothFilterSelector 
            selectedFilter={selectedFilter}
            onSelectFilter={(filter) => {
              console.log('Filter changing to:', filter);
              onFilterChange(filter);
            }}
          />
        </>
      )}
      
      {!showControls && (
        <DigiboothControls 
          onTakePhoto={onTakePhoto} 
          onRetakePhoto={onRetakePhoto} 
          isCapturing={isCapturing} 
          hasPhotos={capturedPhotos.length > 0} 
        />
      )}
    </div>
  );
};

export default DigiboothWebcamSection;
