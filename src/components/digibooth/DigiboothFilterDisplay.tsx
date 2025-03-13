
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
    <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
      <h3 className="text-center text-lg font-medium text-blue-700 mb-2">Photo Filter</h3>
      <p className="text-center text-blue-600 text-sm mb-4">Choose a filter to enhance your photos!</p>
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
