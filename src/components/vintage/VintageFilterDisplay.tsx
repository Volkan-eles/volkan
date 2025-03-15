
import React, { useState } from 'react';
import VintageFilterSelector from './VintageFilterSelector';
import VintageFilterAdjustments from './VintageFilterAdjustments';
import { DigiboothFilterType, FilterAdjustmentValues } from '@/components/digibooth/DigiboothFilterSelector';

interface VintageFilterDisplayProps {
  selectedFilter: DigiboothFilterType;
  onFilterChange: (filter: DigiboothFilterType) => void;
  adjustmentValues: FilterAdjustmentValues;
  onAdjustmentChange: (adjustments: FilterAdjustmentValues) => void;
}

const VintageFilterDisplay: React.FC<VintageFilterDisplayProps> = ({
  selectedFilter,
  onFilterChange,
  adjustmentValues,
  onAdjustmentChange
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="mt-8 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-amber-200">
      <h3 className="text-center text-lg font-medium text-amber-800 mb-2 font-serif">Photo Filters & Effects</h3>
      <p className="text-center text-amber-700 text-sm mb-4 italic">Choose a vintage filter or customize your look!</p>
      
      <VintageFilterSelector 
        selectedFilter={selectedFilter}
        onSelectFilter={(filter) => {
          console.log('Filter changing to:', filter);
          onFilterChange(filter);
        }}
        showAdvancedOptions={showAdvanced}
        onToggleAdvanced={() => setShowAdvanced(!showAdvanced)}
      />
      
      {showAdvanced && (
        <div className="mt-4">
          <VintageFilterAdjustments 
            adjustmentValues={adjustmentValues}
            onAdjustmentChange={onAdjustmentChange}
          />
        </div>
      )}
    </div>
  );
};

export default VintageFilterDisplay;
