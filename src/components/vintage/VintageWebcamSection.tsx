
import React from 'react';
import DigiboothWebcamCapture from '@/components/digibooth/DigiboothWebcamCapture';
import DigiboothFilterDisplay from '@/components/digibooth/DigiboothFilterDisplay';
import DigiboothCountdownSelector from '@/components/digibooth/DigiboothCountdownSelector';
import DigiboothControls from '@/components/digibooth/DigiboothControls';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';

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
  return (
    <div className="lg:w-[60%] space-y-4">
      <div className="bg-white/90 p-6 rounded-xl shadow-lg border border-amber-200">
        <h2 className="text-2xl font-bold text-center text-amber-800 mb-4 font-serif">Vintage Photo Booth</h2>
        
        <DigiboothWebcamCapture
          isCapturing={isCapturing}
          onCapture={onCapture}
          selectedFilter={selectedFilter}
          filterAdjustments={filterAdjustments}
          countdownTime={countdownTime}
        />
        
        {showControls && (
          <>
            <DigiboothControls
              onTakePhoto={onTakePhoto}
              onRetakePhoto={onRetakePhoto}
              isCapturing={isCapturing}
              hasPhotos={capturedPhotos.length > 0}
            />
            
            <div className="mt-6">
              <DigiboothCountdownSelector
                value={countdownTime}
                onChange={onCountdownChange}
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
      </div>
      
      <div className="text-center text-amber-800 text-sm">
        <p>Take 3-4 photos to create your vintage photo strip. Customize it with filters and decorations.</p>
      </div>
    </div>
  );
};

export default VintageWebcamSection;
