
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { KPOP_OVERLAYS } from '@/constants/overlays';

interface OverlaySelectorProps {
  onSelectOverlay: (overlay: { id: string; name: string; src: string } | null) => void;
  selectedOverlayId: string | null;
}

const OverlaySelector: React.FC<OverlaySelectorProps> = ({ onSelectOverlay, selectedOverlayId }) => {
  const [overlays, setOverlays] = useState(KPOP_OVERLAYS);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
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
        <h3 className="text-sm font-medium">Select Sticker Overlay</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={handleDisableOverlays}
          className="text-xs h-8 bg-booth-green hover:bg-booth-green/90 text-black"
        >
          No Overlay
        </Button>
      </div>
      
      <div className="mb-3 text-xs bg-blue-50 p-2 rounded border border-blue-100 text-blue-700">
        <p>Creative stickers to enhance your photos</p>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-4">
        {displayedOverlays.map((overlay) => (
          <div
            key={overlay.id}
            onClick={() => handleSelectOverlay(overlay)}
            className={`overlay-thumbnail hover-scale ${
              selectedOverlayId === overlay.id ? 'overlay-thumbnail-selected' : 'border-gray-200'
            } bg-white rounded-lg overflow-hidden`}
          >
            <img
              src={overlay.src}
              alt={overlay.name}
              className="w-full aspect-square object-contain p-1"
            />
            <div className="text-xs text-center p-1 truncate">{overlay.name}</div>
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
