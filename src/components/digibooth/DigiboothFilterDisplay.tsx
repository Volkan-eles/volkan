
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
      <h3 className="text-center text-lg font-medium">Choose a filter before starting capture!</h3>
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
