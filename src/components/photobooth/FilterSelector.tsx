
import React from 'react';
import { Button } from '@/components/ui/button';

export type FilterType = 'none' | 'bw' | 'sepia' | 'vintage' | 'soft' | 'noir' | 'vivid';

interface FilterSelectorProps {
  selectedFilter: FilterType;
  onSelectFilter: (filter: FilterType) => void;
}

const FilterSelector: React.FC<FilterSelectorProps> = ({ 
  selectedFilter, 
  onSelectFilter 
}) => {
  const filters: { id: FilterType; name: string }[] = [
    { id: 'none', name: 'No Filter' },
    { id: 'bw', name: 'B&W' },
    { id: 'sepia', name: 'Sepia' },
    { id: 'vintage', name: 'Vintage' },
    { id: 'soft', name: 'Soft' },
    { id: 'noir', name: 'Noir' },
    { id: 'vivid', name: 'Vivid' }
  ];

  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-center text-lg font-medium">Choose a filter before starting capture!</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {filters.map(filter => (
          <Button
            key={filter.id}
            variant={selectedFilter === filter.id ? "default" : "outline"}
            className={`rounded-full transition-all ${
              selectedFilter === filter.id 
                ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white" 
                : "bg-white/80 hover:bg-white text-gray-800"
            }`}
            onClick={() => {
              onSelectFilter(filter.id);
              console.log(`Filter selected: ${filter.id}`);
            }}
          >
            {filter.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FilterSelector;
