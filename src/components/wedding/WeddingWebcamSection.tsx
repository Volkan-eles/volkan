
import React from 'react';
import { Card } from '@/components/ui/card';
import WeddingCameraView from './WeddingCameraView';
import WeddingControls from './WeddingControls';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';

interface WeddingWebcamSectionProps {
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

const WeddingWebcamSection: React.FC<WeddingWebcamSectionProps> = ({
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
    <div className="lg:w-[60%]">
      <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl overflow-hidden">
        <div className="p-4">
          <WeddingCameraView
            isCapturing={isCapturing}
            selectedFilter={selectedFilter}
            filterAdjustments={filterAdjustments}
            countdownTime={countdownTime}
            onCapture={onCapture}
          />
        </div>
        
        {showControls && (
          <div className="p-4 bg-white/90 border-t border-gray-100">
            <WeddingControls
              showRetake={capturedPhotos.length > 0}
              onTakePhoto={onTakePhoto}
              onRetakePhoto={onRetakePhoto}
              onFilterChange={onFilterChange}
              onAdjustmentChange={onAdjustmentChange}
              onCountdownChange={onCountdownChange}
              selectedFilter={selectedFilter}
              filterAdjustments={filterAdjustments}
              countdownTime={countdownTime}
            />
          </div>
        )}
      </Card>
    </div>
  );
};

export default WeddingWebcamSection;
