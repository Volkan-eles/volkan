
import React, { useState, useEffect } from 'react';
import DigiboothWebcamCapture from './DigiboothWebcamCapture';
import DigiboothFilterDisplay from './DigiboothFilterDisplay';
import DigiboothControls from './DigiboothControls';
import DigiboothCountdownSelector from './DigiboothCountdownSelector';
import { DigiboothFilterType, FilterAdjustmentValues, DEFAULT_FILTER_ADJUSTMENTS } from './DigiboothFilterSelector';
import { filterStyleMap } from '@/utils/filterUtils';

interface DigiboothWebcamSectionProps {
  isCapturing: boolean;
  showControls: boolean;
  selectedFilter: DigiboothFilterType;
  filterAdjustments?: FilterAdjustmentValues;
  countdownTime: number;
  capturedPhotos: string[];
  selectedLayout?: string;
  onCapture: (photoSrc: string) => void;
  onTakePhoto: () => void;
  onRetakePhoto: () => void;
  onFilterChange: (filter: DigiboothFilterType) => void;
  onAdjustmentChange: (adjustments: FilterAdjustmentValues) => void;
  onCountdownChange: (time: number) => void;
  onLayoutChange?: (layout: string) => void;
}

const DigiboothWebcamSection: React.FC<DigiboothWebcamSectionProps> = ({
  isCapturing,
  showControls,
  selectedFilter,
  filterAdjustments = DEFAULT_FILTER_ADJUSTMENTS,
  countdownTime,
  capturedPhotos,
  selectedLayout = 'classic-strip',
  onCapture,
  onTakePhoto,
  onRetakePhoto,
  onFilterChange,
  onAdjustmentChange,
  onCountdownChange,
  onLayoutChange
}) => {
  const [overlayImage, setOverlayImage] = useState<HTMLImageElement | null>(null);
  const [filterStyle, setFilterStyle] = useState<string>('');

  // Generate CSS filter string based on selected filter and adjustments
  useEffect(() => {
    let style = filterStyleMap[selectedFilter] || '';
    
    // Add adjustments if they exist
    if (filterAdjustments) {
      const { brightness, contrast, saturation } = filterAdjustments;
      style += ` brightness(${brightness}) contrast(${contrast}) saturate(${saturation})`;
    }
    
    setFilterStyle(style);
  }, [selectedFilter, filterAdjustments]);

  return (
    <div className="lg:w-[60%] space-y-6">
      <div className="bg-white p-4 rounded-xl shadow-lg">
        {/* Camera display area */}
        <DigiboothWebcamCapture 
          onCapture={onCapture}
          isCapturing={isCapturing}
          overlayImage={overlayImage}
          filterStyle={filterStyle}
          selectedFilter={selectedFilter}
          filterAdjustments={filterAdjustments}
          selectedLayout={selectedLayout}
        />

        {/* Controls for taking photos */}
        {showControls && (
          <div className="mt-4">
            <DigiboothControls 
              onTakePhoto={onTakePhoto} 
              onRetakePhoto={onRetakePhoto}
              retakeDisabled={capturedPhotos.length === 0}
              takingPhoto={isCapturing}
            />
          </div>
        )}
      </div>

      {/* Filter options */}
      {showControls && (
        <>
          <DigiboothFilterDisplay 
            selectedFilter={selectedFilter}
            onFilterChange={onFilterChange}
            adjustmentValues={filterAdjustments}
            onAdjustmentChange={onAdjustmentChange}
          />
          
          <DigiboothCountdownSelector 
            selectedTime={countdownTime}
            onSelectTime={onCountdownChange}
          />
        </>
      )}
    </div>
  );
};

export default DigiboothWebcamSection;
