
import React, { useState } from 'react';
import { DigiboothFilterType, FilterAdjustmentValues, DEFAULT_FILTER_ADJUSTMENTS } from '@/components/digibooth/DigiboothFilterSelector';
import KpopFilterSelector from '@/components/kpop/KpopFilterSelector';
import KpopFilterAdjustments from '@/components/kpop/KpopFilterAdjustments';

interface KpopFilterDisplayProps {
  selectedFilter: DigiboothFilterType;
  onFilterChange: (filter: DigiboothFilterType) => void;
  adjustmentValues: FilterAdjustmentValues;
  onAdjustmentChange: (adjustments: FilterAdjustmentValues) => void;
}

const KpopFilterDisplay: React.FC<KpopFilterDisplayProps> = ({
  selectedFilter,
  onFilterChange,
  adjustmentValues,
  onAdjustmentChange
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
      <h3 className="text-center text-lg font-medium text-purple-700 mb-2">K-pop Filters & Effects</h3>
      <p className="text-center text-purple-600 text-sm mb-4">Choose idol-inspired filters or customize your look!</p>
      
      <KpopFilterSelector 
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
          <KpopFilterAdjustments 
            adjustmentValues={adjustmentValues}
            onAdjustmentChange={onAdjustmentChange}
          />
        </div>
      )}
    </div>
  );
};

export default KpopFilterDisplay;
