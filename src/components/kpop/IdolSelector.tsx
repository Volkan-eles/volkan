
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { KPOP_OVERLAYS } from '@/constants/overlays';
import { toast } from 'sonner';

interface IdolSelectorProps {
  onSelectIdols: (idols: Array<{id: string, name: string, src: string}>) => void;
  selectedIdols: Array<{id: string, name: string, src: string}>;
  maxSelections?: number;
}

const IdolSelector: React.FC<IdolSelectorProps> = ({ 
  onSelectIdols, 
  selectedIdols, 
  maxSelections = 4 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(KPOP_OVERLAYS.length / itemsPerPage);
  
  const displayedIdols = KPOP_OVERLAYS.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSelectIdol = (idol: typeof KPOP_OVERLAYS[0]) => {
    const isSelected = selectedIdols.some(selected => selected.id === idol.id);
    
    if (isSelected) {
      // Remove idol if already selected
      onSelectIdols(selectedIdols.filter(selected => selected.id !== idol.id));
      toast.info(`Removed ${idol.name} from your selection`);
    } else {
      // Add idol if not at max selections
      if (selectedIdols.length < maxSelections) {
        onSelectIdols([...selectedIdols, idol]);
        toast.success(`Added ${idol.name} to your photo!`);
      } else {
        toast.error(`You can only select up to ${maxSelections} stickers. Please remove one first.`);
      }
    }
  };

  const handleClearSelections = () => {
    onSelectIdols([]);
    toast.info('All selections cleared');
  };

  return (
    <div className="w-full bg-white rounded-lg p-4 animate-fade-in shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-purple-700">Select Stickers (Max {maxSelections})</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleClearSelections}
            className="text-xs h-8 bg-pink-100 hover:bg-pink-200 text-pink-800 border-pink-300"
            disabled={selectedIdols.length === 0}
          >
            <X className="h-3 w-3 mr-1" /> 
            Clear All
          </Button>
        </div>
      </div>
      
      <div className="mb-4 text-sm bg-blue-50 p-3 rounded border border-blue-100 text-blue-800">
        <p>
          Note: We've replaced celebrity images with generic stickers to respect copyright.
          You can still create amazing photos with our custom stickers!
        </p>
      </div>
      
      {selectedIdols.length > 0 && (
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">Selected stickers ({selectedIdols.length}/{maxSelections}):</p>
          <div className="flex flex-wrap gap-2">
            {selectedIdols.map(idol => (
              <div key={idol.id} className="flex items-center bg-purple-100 text-purple-800 text-xs rounded-full px-3 py-1">
                <span className="truncate max-w-[100px]">{idol.name}</span>
                <button 
                  onClick={() => handleSelectIdol(idol)} 
                  className="ml-1 text-purple-600 hover:text-purple-800"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-4 gap-2 mb-4">
        {displayedIdols.map((idol) => (
          <div
            key={idol.id}
            onClick={() => handleSelectIdol(idol)}
            className={`relative cursor-pointer transition-all transform hover:scale-105 border-2 rounded-lg overflow-hidden ${
              selectedIdols.some(selected => selected.id === idol.id) 
                ? 'border-purple-500 shadow-md' 
                : 'border-gray-200 hover:border-purple-300'
            }`}
          >
            <img
              src={idol.src}
              alt={idol.name}
              className="w-full aspect-square object-cover"
            />
            <div className="text-xs text-center p-1 truncate bg-white">{idol.name}</div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between items-center mt-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="h-8 bg-gray-100 hover:bg-gray-200 text-gray-700"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="ml-1">Previous</span>
        </Button>
        
        <span className="text-xs text-gray-500">
          Page {currentPage} of {totalPages}
        </span>
        
        <Button
          variant="outline"
          size="sm"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="h-8 bg-gray-100 hover:bg-gray-200 text-gray-700"
        >
          <span className="mr-1">Next</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="mt-4 flex justify-center">
        <Button 
          onClick={() => {}}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
        >
          Capture with stickers!
        </Button>
      </div>
    </div>
  );
};

export default IdolSelector;
