
import React, { useRef } from 'react';
import VintageWebcamCapture from './VintageWebcamCapture';
import VintageCountdownSelector from './VintageCountdownSelector';
import VintageControls from './VintageControls';
import VintageCameraButtons from './VintageCameraButtons';
import VintageFilterDisplay from './VintageFilterDisplay';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';
import { getFilterStyle } from '@/utils/filterUtils';

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

  // Get CSS filter style for preview
  const filterStyle = getFilterStyle(selectedFilter, filterAdjustments);

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
              <VintageCameraButtons 
                handleCapture={onTakePhoto}
                isCapturing={isCapturing}
              />
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
