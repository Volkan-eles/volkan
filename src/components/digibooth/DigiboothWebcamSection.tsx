
import React, { useRef } from 'react';
import DigiboothWebcamCapture from '@/components/digibooth/DigiboothWebcamCapture';
import CountdownSelector from '@/components/photobooth/CountdownSelector';
import DigiboothControls from '@/components/digibooth/DigiboothControls';
import DigiboothCameraButtons from '@/components/digibooth/DigiboothCameraButtons';
import DigiboothFilterDisplay from '@/components/digibooth/DigiboothFilterDisplay';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';
import { getFilterStyle } from '@/utils/filterUtils';

interface DigiboothWebcamSectionProps {
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

const DigiboothWebcamSection: React.FC<DigiboothWebcamSectionProps> = ({
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

  // Get CSS filter style for preview
  const filterStyle = getFilterStyle(selectedFilter, filterAdjustments);

  return (
    <div className="flex-grow lg:w-[60%] bg-white rounded-xl shadow-lg p-6 overflow-hidden">
      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-inner">
        <div className="w-full h-full">
          <DigiboothWebcamCapture 
            onCapture={onCapture} 
            isCapturing={isCapturing} 
            overlayImage={overlayImageRef.current}
            selectedFilter={selectedFilter}
            filterAdjustments={filterAdjustments}
            filterStyle={filterStyle}
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
            adjustmentValues={filterAdjustments}
            onAdjustmentChange={onAdjustmentChange}
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
