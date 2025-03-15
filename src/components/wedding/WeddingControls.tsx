
import React from 'react';
import VintageFilterSelector from '@/components/vintage/VintageFilterSelector';
import VintageFilterAdjustments from '@/components/vintage/VintageFilterAdjustments';
import WeddingCameraButtons from './WeddingCameraButtons';
import VintageCountdownSelector from '@/components/vintage/VintageCountdownSelector';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Camera, Sliders, Clock } from 'lucide-react';

interface WeddingControlsProps {
  showRetake: boolean;
  onTakePhoto: () => void;
  onRetakePhoto: () => void;
  onFilterChange: (filter: DigiboothFilterType) => void;
  onAdjustmentChange: (adjustments: FilterAdjustmentValues) => void;
  onCountdownChange: (time: number) => void;
  selectedFilter: DigiboothFilterType;
  filterAdjustments: FilterAdjustmentValues;
  countdownTime: number;
}

const WeddingControls: React.FC<WeddingControlsProps> = ({
  showRetake,
  onTakePhoto,
  onRetakePhoto,
  onFilterChange,
  onAdjustmentChange,
  onCountdownChange,
  selectedFilter,
  filterAdjustments,
  countdownTime
}) => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="camera">
        <TabsList className="w-full bg-gray-100 p-1">
          <TabsTrigger value="camera" className="flex items-center gap-2">
            <Camera className="h-4 w-4" /> Camera
          </TabsTrigger>
          <TabsTrigger value="filters" className="flex items-center gap-2">
            <Sliders className="h-4 w-4" /> Filters
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Clock className="h-4 w-4" /> Countdown
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="camera" className="pt-4">
          <WeddingCameraButtons 
            onTakePhoto={onTakePhoto}
            onRetakePhoto={onRetakePhoto}
            showRetake={showRetake}
          />
        </TabsContent>
        
        <TabsContent value="filters" className="pt-4 space-y-6">
          <VintageFilterSelector 
            selectedFilter={selectedFilter} 
            onSelectFilter={onFilterChange}
          />
          
          <VintageFilterAdjustments
            adjustmentValues={filterAdjustments}
            onAdjustmentChange={onAdjustmentChange}
          />
        </TabsContent>
        
        <TabsContent value="settings" className="pt-4">
          <VintageCountdownSelector
            value={countdownTime}
            onChange={onCountdownChange}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WeddingControls;
