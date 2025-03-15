
import React from 'react';
import { Button } from '@/components/ui/button';
import { Paintbrush, Sliders, Sparkles, Wand2 } from 'lucide-react';

export type DigiboothFilterType = 
  | 'none' 
  | 'bw' 
  | 'sepia' 
  | 'vintage' 
  | 'soft' 
  | 'noir' 
  | 'vivid'
  | 'dreamy'
  | 'retro70s'
  | 'polaroid'
  | 'cyberpunk'
  | 'faded'
  | 'vintageWarm'
  | 'vintageCool'
  | 'vintageSepia'
  | 'vintageFade';

export type FilterAdjustmentValues = {
  brightness: number;
  contrast: number;
  saturation: number;
};

export const DEFAULT_FILTER_ADJUSTMENTS: FilterAdjustmentValues = {
  brightness: 100,
  contrast: 100,
  saturation: 100
};

interface DigiboothFilterSelectorProps {
  selectedFilter: DigiboothFilterType;
  onSelectFilter: (filter: DigiboothFilterType) => void;
  showAdvancedOptions?: boolean;
  onToggleAdvanced?: () => void;
}

const DigiboothFilterSelector: React.FC<DigiboothFilterSelectorProps> = ({ 
  selectedFilter, 
  onSelectFilter,
  showAdvancedOptions = false,
  onToggleAdvanced
}) => {
  const basicFilters: { id: DigiboothFilterType; name: string; icon?: React.ReactNode }[] = [
    { id: 'none', name: 'No Filter' },
    { id: 'bw', name: 'B&W' },
    { id: 'sepia', name: 'Sepia' },
    { id: 'soft', name: 'Soft' },
    { id: 'noir', name: 'Noir' },
    { id: 'vivid', name: 'Vivid' }
  ];

  const specialFilters: { id: DigiboothFilterType; name: string; icon?: React.ReactNode }[] = [
    { id: 'vintage', name: 'Vintage', icon: <Wand2 className="mr-1 h-3 w-3" /> },
    { id: 'dreamy', name: 'Dreamy', icon: <Sparkles className="mr-1 h-3 w-3" /> },
    { id: 'retro70s', name: 'Retro 70s', icon: <Paintbrush className="mr-1 h-3 w-3" /> },
    { id: 'polaroid', name: 'Polaroid', icon: <Wand2 className="mr-1 h-3 w-3" /> },
    { id: 'cyberpunk', name: 'Cyberpunk', icon: <Sparkles className="mr-1 h-3 w-3" /> },
    { id: 'faded', name: 'Faded', icon: <Paintbrush className="mr-1 h-3 w-3" /> }
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap justify-center gap-2">
        {basicFilters.map(filter => (
          <Button
            key={filter.id}
            variant={selectedFilter === filter.id ? "default" : "outline"}
            size="sm"
            className={`rounded-full transition-all ${
              selectedFilter === filter.id 
                ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white" 
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
      
      <div>
        <h4 className="text-center text-sm font-medium mb-2">Special Effects</h4>
        <div className="flex flex-wrap justify-center gap-2">
          {specialFilters.map(filter => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              size="sm"
              className={`rounded-full transition-all ${
                selectedFilter === filter.id 
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" 
                  : "bg-white/80 hover:bg-white text-gray-800"
              }`}
              onClick={() => {
                onSelectFilter(filter.id);
                console.log(`Special filter selected: ${filter.id}`);
              }}
            >
              {filter.icon}
              {filter.name}
            </Button>
          ))}
        </div>
      </div>
      
      {onToggleAdvanced && (
        <div className="flex justify-center mt-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-blue-600 hover:text-blue-800"
            onClick={onToggleAdvanced}
          >
            <Sliders className="h-4 w-4 mr-1" />
            {showAdvancedOptions ? "Hide Advanced Options" : "Show Advanced Options"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default DigiboothFilterSelector;
