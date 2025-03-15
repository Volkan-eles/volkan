
import React from 'react';
import { Button } from '@/components/ui/button';
import { Paintbrush, Sliders, Wand2, Sparkles, Clock, Camera } from 'lucide-react';
import { DigiboothFilterType } from '@/components/digibooth/DigiboothFilterSelector';

interface VintageFilterSelectorProps {
  selectedFilter: DigiboothFilterType;
  onSelectFilter: (filter: DigiboothFilterType) => void;
  showAdvancedOptions?: boolean;
  onToggleAdvanced?: () => void;
}

const VintageFilterSelector: React.FC<VintageFilterSelectorProps> = ({ 
  selectedFilter, 
  onSelectFilter,
  showAdvancedOptions = false,
  onToggleAdvanced
}) => {
  const basicFilters: { id: DigiboothFilterType; name: string; icon?: React.ReactNode }[] = [
    { id: 'none', name: 'Original' },
    { id: 'bw', name: 'Classic B&W' },
    { id: 'sepia', name: 'Sepia' },
    { id: 'soft', name: 'Faded' },
    { id: 'noir', name: 'Film Noir' }
  ];

  const specialFilters: { id: DigiboothFilterType; name: string; icon?: React.ReactNode }[] = [
    { id: 'vintage', name: 'Vintage', icon: <Wand2 className="mr-1 h-3 w-3" /> },
    { id: 'retro70s', name: '70s', icon: <Paintbrush className="mr-1 h-3 w-3" /> },
    { id: 'polaroid', name: 'Polaroid', icon: <Camera className="mr-1 h-3 w-3" /> },
    { id: 'faded', name: 'Aged Paper', icon: <Clock className="mr-1 h-3 w-3" /> },
    { id: 'vintageWarm', name: 'Golden Age', icon: <Sparkles className="mr-1 h-3 w-3" /> },
    { id: 'vintageCool', name: 'Old Times', icon: <Paintbrush className="mr-1 h-3 w-3" /> },
    { id: 'vintageSepia', name: 'Antique', icon: <Wand2 className="mr-1 h-3 w-3" /> },
    { id: 'vintageFade', name: 'Memento', icon: <Clock className="mr-1 h-3 w-3" /> }
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
                ? "bg-gradient-to-r from-amber-600 to-amber-800 text-white" 
                : "bg-amber-50/80 hover:bg-amber-100 text-amber-900 border-amber-300"
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
        <h4 className="text-center text-sm font-medium mb-2 text-amber-900">Special Effects</h4>
        <div className="flex flex-wrap justify-center gap-2">
          {specialFilters.map(filter => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              size="sm"
              className={`rounded-full transition-all ${
                selectedFilter === filter.id 
                  ? "bg-gradient-to-r from-amber-700 to-amber-500 text-white" 
                  : "bg-amber-50/80 hover:bg-amber-100 text-amber-900 border-amber-300"
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
            className="text-amber-800 hover:text-amber-950"
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

export default VintageFilterSelector;
