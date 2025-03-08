
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// K-pop idol overlays using the available images in the project
const KPOP_OVERLAYS = [
  { id: 'karina', name: 'Karina', src: '/Karina.png' },
  { id: 'winter', name: 'Winter', src: '/Winter.png' },
  { id: 'ningning', name: 'Ningning', src: '/Ningning.png' },
  { id: 'jaehyun', name: 'Jaehyun', src: '/JAEHYUN.png' },
  { id: 'leehan', name: 'Lee Han', src: '/LEEHAN.png' },
  { id: 'heeseung', name: 'Heeseung', src: '/heeseung.png' },
  { id: 'jake', name: 'Jake', src: '/jake.png' },
  { id: 'jay', name: 'Jay', src: '/jay.png' },
  { id: 'jungwon', name: 'Jungwon', src: '/jungwon.png' },
  { id: 'kazuha', name: 'Kazuha', src: '/kazuha.png' },
  { id: 'chaewon', name: 'Kim Chaewon', src: '/kim chaewon.png' },
  { id: 'sakura', name: 'Sakura', src: '/sakura.png' },
  { id: 'eunchae', name: 'Hong Eunchae', src: '/hong eunchae.png' },
  { id: 'sunghoon', name: 'Sunghoon', src: '/sunghoon.png' },
  { id: 'sunoo', name: 'Sunoo', src: '/sunoo.png' },
  { id: 'niki', name: 'Niki', src: '/niki.png' },
  { id: 'yunjin', name: 'Yunjin', src: '/yunjin.png' },
];

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
        <h3 className="text-sm font-medium">Select K-pop Idol Overlay</h3>
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
