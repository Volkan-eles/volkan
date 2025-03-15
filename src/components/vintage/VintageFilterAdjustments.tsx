
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { FilterAdjustmentValues, DEFAULT_FILTER_ADJUSTMENTS } from '@/components/digibooth/DigiboothFilterSelector';
import { Sun, Contrast, Palette, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VintageFilterAdjustmentsProps {
  adjustmentValues: FilterAdjustmentValues;
  onAdjustmentChange: (adjustments: FilterAdjustmentValues) => void;
}

const VintageFilterAdjustments: React.FC<VintageFilterAdjustmentsProps> = ({
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
    <div className="p-4 bg-amber-50/90 rounded-lg border border-amber-200 shadow-sm animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-amber-900 font-medium">Advanced Adjustments</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-amber-700 hover:text-amber-900" 
          onClick={resetAdjustments}
        >
          <RotateCcw className="h-3 w-3 mr-1" />
          Reset
        </Button>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center">
            <Sun className="h-4 w-4 text-amber-600 mr-2" />
            <label className="text-sm font-medium text-amber-800">Brightness: {adjustmentValues.brightness}%</label>
          </div>
          <Slider
            value={[adjustmentValues.brightness]}
            min={50}
            max={150}
            step={1}
            onValueChange={(value) => handleSliderChange('brightness', value)}
            className="[&>span]:bg-amber-600 [&>span]:h-2"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <Contrast className="h-4 w-4 text-amber-600 mr-2" />
            <label className="text-sm font-medium text-amber-800">Contrast: {adjustmentValues.contrast}%</label>
          </div>
          <Slider
            value={[adjustmentValues.contrast]}
            min={50}
            max={150}
            step={1}
            onValueChange={(value) => handleSliderChange('contrast', value)}
            className="[&>span]:bg-amber-600 [&>span]:h-2"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <Palette className="h-4 w-4 text-amber-600 mr-2" />
            <label className="text-sm font-medium text-amber-800">Saturation: {adjustmentValues.saturation}%</label>
          </div>
          <Slider
            value={[adjustmentValues.saturation]}
            min={0}
            max={200}
            step={1}
            onValueChange={(value) => handleSliderChange('saturation', value)}
            className="[&>span]:bg-amber-600 [&>span]:h-2"
          />
        </div>
      </div>
    </div>
  );
};

export default VintageFilterAdjustments;
