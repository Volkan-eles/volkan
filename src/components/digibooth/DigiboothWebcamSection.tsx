
import React, { useRef } from 'react';
import DigiboothWebcamCapture from '@/components/digibooth/DigiboothWebcamCapture';
import CountdownSelector from '@/components/photobooth/CountdownSelector';
import DigiboothControls from '@/components/digibooth/DigiboothControls';
import DigiboothCameraButtons from '@/components/digibooth/DigiboothCameraButtons';
import DigiboothFilterDisplay from '@/components/digibooth/DigiboothFilterDisplay';
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
        <div className="w-full h-full">
          <DigiboothWebcamCapture 
            onCapture={onCapture} 
            isCapturing={isCapturing} 
            overlayImage={overlayImageRef.current}
            selectedFilter={selectedFilter}
            filterStyle={getFilterStyle()}
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
            <DigiboothCameraButtons 
              handleCapture={onTakePhoto}
              isCapturing={isCapturing}
            />
          </div>
          
          <DigiboothFilterDisplay
            selectedFilter={selectedFilter}
            onFilterChange={onFilterChange}
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
