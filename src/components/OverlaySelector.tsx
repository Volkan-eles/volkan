
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// For now, we'll use placeholder images for demonstration
// These will be replaced with actual celebrity images
const PLACEHOLDER_OVERLAYS = [
  { id: '1', name: 'Celebrity 1', src: '/placeholder.svg' },
  { id: '2', name: 'Celebrity 2', src: '/placeholder.svg' },
  { id: '3', name: 'Celebrity 3', src: '/placeholder.svg' },
  { id: '4', name: 'Celebrity 4', src: '/placeholder.svg' },
  { id: '5', name: 'Celebrity 5', src: '/placeholder.svg' },
  { id: '6', name: 'Celebrity 6', src: '/placeholder.svg' },
  { id: '7', name: 'Celebrity 7', src: '/placeholder.svg' },
  { id: '8', name: 'Celebrity 8', src: '/placeholder.svg' },
  { id: '9', name: 'Celebrity 9', src: '/placeholder.svg' },
  { id: '10', name: 'Celebrity 10', src: '/placeholder.svg' },
  { id: '11', name: 'Celebrity 11', src: '/placeholder.svg' },
  { id: '12', name: 'Celebrity 12', src: '/placeholder.svg' },
  { id: '13', name: 'Celebrity 13', src: '/placeholder.svg' },
  { id: '14', name: 'Celebrity 14', src: '/placeholder.svg' },
  { id: '15', name: 'Celebrity 15', src: '/placeholder.svg' },
  { id: '16', name: 'Celebrity 16', src: '/placeholder.svg' },
];

interface OverlaySelectorProps {
  onSelectOverlay: (overlay: { id: string; name: string; src: string } | null) => void;
  selectedOverlayId: string | null;
}

const OverlaySelector: React.FC<OverlaySelectorProps> = ({ onSelectOverlay, selectedOverlayId }) => {
  const [overlays, setOverlays] = useState(PLACEHOLDER_OVERLAYS);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const totalPages = Math.ceil(overlays.length / itemsPerPage);
  
  const displayedOverlays = overlays.slice(
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

  const handleSelectOverlay = (overlay: typeof overlays[0]) => {
    onSelectOverlay(overlay);
  };

  const handleDisableOverlays = () => {
    onSelectOverlay(null);
  };

  return (
    <div className="w-full glass-panel p-4 animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium">Select Celebrity Overlay</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={handleDisableOverlays}
          className="text-xs h-8 bg-booth-green hover:bg-booth-green/90"
        >
          Disable Overlays
        </Button>
      </div>
      
      <div className="grid grid-cols-4 gap-2 mb-4">
        {displayedOverlays.map((overlay) => (
          <div
            key={overlay.id}
            onClick={() => handleSelectOverlay(overlay)}
            className={`overlay-thumbnail hover-scale ${
              selectedOverlayId === overlay.id ? 'overlay-thumbnail-selected' : 'border-gray-200'
            }`}
          >
            <img
              src={overlay.src}
              alt={overlay.name}
              className="w-full aspect-square object-cover rounded"
            />
          </div>
        ))}
      </div>
      
      <div className="flex justify-between items-center mt-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="h-8"
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
          className="h-8"
        >
          <span className="mr-1">Next</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default OverlaySelector;
