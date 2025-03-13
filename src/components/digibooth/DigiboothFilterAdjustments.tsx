
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { FilterAdjustmentValues, DEFAULT_FILTER_ADJUSTMENTS } from './DigiboothFilterSelector';
import { Sun, Contrast, Palette, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DigiboothFilterAdjustmentsProps {
  adjustmentValues: FilterAdjustmentValues;
  onAdjustmentChange: (adjustments: FilterAdjustmentValues) => void;
}

const DigiboothFilterAdjustments: React.FC<DigiboothFilterAdjustmentsProps> = ({
  adjustmentValues,
  onAdjustmentChange
}) => {
  const handleSliderChange = (property: keyof FilterAdjustmentValues, value: number[]) => {
    onAdjustmentChange({
      ...adjustmentValues,
      [property]: value[0]
    });
  };

  const resetAdjustments = () => {
    onAdjustmentChange({ ...DEFAULT_FILTER_ADJUSTMENTS });
  };

  return (
    <div className="p-4 bg-white/90 rounded-lg border border-blue-100 shadow-sm animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-blue-700 font-medium">Advanced Adjustments</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-blue-600 hover:text-blue-800" 
          onClick={resetAdjustments}
        >
          <RotateCcw className="h-3 w-3 mr-1" />
          Reset
        </Button>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center">
            <Sun className="h-4 w-4 text-amber-500 mr-2" />
            <label className="text-sm font-medium text-gray-700">Brightness: {adjustmentValues.brightness}%</label>
          </div>
          <Slider
            value={[adjustmentValues.brightness]}
            min={50}
            max={150}
            step={1}
            onValueChange={(value) => handleSliderChange('brightness', value)}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <Contrast className="h-4 w-4 text-blue-500 mr-2" />
            <label className="text-sm font-medium text-gray-700">Contrast: {adjustmentValues.contrast}%</label>
          </div>
          <Slider
            value={[adjustmentValues.contrast]}
            min={50}
            max={150}
            step={1}
            onValueChange={(value) => handleSliderChange('contrast', value)}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <Palette className="h-4 w-4 text-green-500 mr-2" />
            <label className="text-sm font-medium text-gray-700">Saturation: {adjustmentValues.saturation}%</label>
          </div>
          <Slider
            value={[adjustmentValues.saturation]}
            min={0}
            max={200}
            step={1}
            onValueChange={(value) => handleSliderChange('saturation', value)}
          />
        </div>
      </div>
    </div>
  );
};

export default DigiboothFilterAdjustments;
