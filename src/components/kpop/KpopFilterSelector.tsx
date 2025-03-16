
import React from 'react';
import { Button } from '@/components/ui/button';
import { Paintbrush, Sliders, Sparkles, Wand2 } from 'lucide-react';
import { DigiboothFilterType } from '@/components/digibooth/DigiboothFilterSelector';

interface KpopFilterSelectorProps {
  selectedFilter: DigiboothFilterType;
  onSelectFilter: (filter: DigiboothFilterType) => void;
  showAdvancedOptions?: boolean;
  onToggleAdvanced?: () => void;
}

const KpopFilterSelector: React.FC<KpopFilterSelectorProps> = ({ 
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

  const kpopFilters: { id: DigiboothFilterType; name: string; icon?: React.ReactNode }[] = [
    { id: 'dreamy', name: 'K-Dreamy', icon: <Sparkles className="mr-1 h-3 w-3" /> },
    { id: 'vintage', name: 'Idol Vintage', icon: <Wand2 className="mr-1 h-3 w-3" /> },
    { id: 'faded', name: 'K-Faded', icon: <Paintbrush className="mr-1 h-3 w-3" /> },
    { id: 'vintageCool', name: 'Cool Tone', icon: <Wand2 className="mr-1 h-3 w-3" /> },
    { id: 'vintageWarm', name: 'Warm Tone', icon: <Sparkles className="mr-1 h-3 w-3" /> },
    { id: 'polaroid', name: 'K-Polaroid', icon: <Paintbrush className="mr-1 h-3 w-3" /> }
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
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" 
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
        <h4 className="text-center text-sm font-medium mb-2">K-pop Special Effects</h4>
        <div className="flex flex-wrap justify-center gap-2">
          {kpopFilters.map(filter => (
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
            className="text-purple-600 hover:text-purple-800"
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

export default KpopFilterSelector;
