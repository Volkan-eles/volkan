
import React from 'react';
import DigiboothWebcamCapture from '@/components/digibooth/DigiboothWebcamCapture';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';

interface WeddingCameraViewProps {
  isCapturing: boolean;
  selectedFilter: DigiboothFilterType;
  filterAdjustments: FilterAdjustmentValues;
  countdownTime: number;
  onCapture: (photoSrc: string) => void;
}

const WeddingCameraView: React.FC<WeddingCameraViewProps> = ({
  isCapturing,
  selectedFilter,
  filterAdjustments,
  countdownTime,
  onCapture
}) => {
  return (
    <div className="relative aspect-video bg-black rounded-md overflow-hidden">
      <DigiboothWebcamCapture 
        isCapturing={isCapturing}
        selectedFilter={selectedFilter}
        filterAdjustments={filterAdjustments}
        countdownTime={countdownTime}
        onCapture={onCapture}
      />
      
      <div className="absolute inset-0 pointer-events-none border border-white/20 rounded-md"></div>
      
      {/* Wedding themed overlay indicators */}
      <div className="absolute top-4 left-4 text-white/80 text-sm bg-black/30 px-2 py-1 rounded-full">
        Wedding Photobooth
      </div>
      
      <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white/80 text-sm bg-black/30 px-2 py-1 rounded-full">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
        {isCapturing ? "CAPTURING" : "READY"}
      </div>
    </div>
  );
};

export default WeddingCameraView;
