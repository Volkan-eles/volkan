
import React, { useState } from 'react';
import DigiboothFilterSelector, { DigiboothFilterType, FilterAdjustmentValues, DEFAULT_FILTER_ADJUSTMENTS } from '@/components/digibooth/DigiboothFilterSelector';
import DigiboothFilterAdjustments from '@/components/digibooth/DigiboothFilterAdjustments';

interface DigiboothFilterDisplayProps {
  selectedFilter: DigiboothFilterType;
  onFilterChange: (filter: DigiboothFilterType) => void;
  adjustmentValues: FilterAdjustmentValues;
  onAdjustmentChange: (adjustments: FilterAdjustmentValues) => void;
}

const DigiboothFilterDisplay: React.FC<DigiboothFilterDisplayProps> = ({
  selectedFilter,
  onFilterChange,
  adjustmentValues,
  onAdjustmentChange
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
      <h3 className="text-center text-lg font-medium text-blue-700 mb-2">Photo Filters & Effects</h3>
      <p className="text-center text-blue-600 text-sm mb-4">Choose a filter style or customize your look!</p>
      
      <DigiboothFilterSelector 
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
          <DigiboothFilterAdjustments 
            adjustmentValues={adjustmentValues}
            onAdjustmentChange={onAdjustmentChange}
          />
        </div>
      )}
    </div>
  );
};

export default DigiboothFilterDisplay;
