
import React from 'react';
import DigiboothWebcamCapture from '@/components/digibooth/DigiboothWebcamCapture';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';
import { Sparkles } from 'lucide-react';

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
    <div className="relative aspect-video bg-black rounded-md overflow-hidden shadow-lg">
      <DigiboothWebcamCapture 
        isCapturing={isCapturing}
        selectedFilter={selectedFilter}
        filterAdjustments={filterAdjustments}
        countdownTime={countdownTime}
        onCapture={onCapture}
      />
      
      {/* Decorative wedding-themed overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      </div>
      
      {/* Camera status indicator */}
      <div className="absolute top-4 left-4 text-white/90 text-sm bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 shadow-md">
        <Sparkles className="h-3.5 w-3.5 text-pink-300" />
        <span className="font-light">Wedding Photobooth</span>
      </div>
      
      <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white/90 text-sm bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
        <div className={`w-2 h-2 rounded-full ${isCapturing ? "bg-red-500 animate-pulse" : "bg-green-500"}`}></div>
        <span className="font-light">{isCapturing ? "CAPTURING" : "READY"}</span>
      </div>
    </div>
  );
};

export default WeddingCameraView;
