import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Celebrity overlays using the uploaded images
const CELEBRITY_OVERLAYS = [
  { id: 'celeb1', name: 'Celebrity 1', src: '/lovable-uploads/f34ca7e2-d429-4592-9da6-6ec74fdc9a8b.png' },
  { id: 'celeb2', name: 'Celebrity 2', src: '/lovable-uploads/96fc8355-0e5d-4560-801e-4761c292de8d.png' },
  { id: 'celeb3', name: 'Celebrity 3', src: '/lovable-uploads/4f28e3dd-9aa3-478f-af7c-ac150bd79ed8.png' },
  { id: 'celeb4', name: 'Celebrity 4', src: '/lovable-uploads/06098ac5-17a0-46e5-af4e-e3b64c9bf101.png' },
  { id: 'celeb5', name: 'Celebrity 5', src: '/lovable-uploads/454446d2-3ff3-4586-b299-af4693254a4e.png' },
  // Keep the existing cat overlays as additional options
  { id: 'cat1', name: 'Cat with Basketball', src: '/lovable-uploads/e2f6e489-ef05-41bd-83bc-ee23d3143631.png' },
  { id: 'cat2', name: 'Cat in Drink', src: '/lovable-uploads/296e4a4c-ee8d-4f90-a274-0db4d8fd5cea.png' },
];

interface OverlaySelectorProps {
  onSelectOverlay: (overlay: { id: string; name: string; src: string } | null) => void;
  selectedOverlayId: string | null;
}

const OverlaySelector: React.FC<OverlaySelectorProps> = ({ onSelectOverlay, selectedOverlayId }) => {
  const [overlays, setOverlays] = useState(CELEBRITY_OVERLAYS);
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
        <h3 className="text-sm font-medium">Select Celebrity Overlay</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={handleDisableOverlays}
          className="text-xs h-8 bg-booth-green hover:bg-booth-green/90 text-black"
        >
          No Overlay
        </Button>
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
