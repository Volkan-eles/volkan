
import React from 'react';
import DigiboothFilterSelector from '@/components/digibooth/DigiboothFilterSelector';
import { DigiboothFilterType } from '@/components/digibooth/DigiboothFilterSelector';

interface DigiboothFilterDisplayProps {
  selectedFilter: DigiboothFilterType;
  onFilterChange: (filter: DigiboothFilterType) => void;
}

const DigiboothFilterDisplay: React.FC<DigiboothFilterDisplayProps> = ({
  selectedFilter,
  onFilterChange
}) => {
  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-center text-lg font-medium">Choose a filter and strip layout</h3>
      <p className="text-center text-sm text-gray-600">Apply filters before taking photos, and select your favorite layout in the preview panel</p>
      <DigiboothFilterSelector 
        selectedFilter={selectedFilter}
        onSelectFilter={(filter) => {
          console.log('Filter changing to:', filter);
          onFilterChange(filter);
        }}
      />
    </div>
  );
};

export default DigiboothFilterDisplay;
