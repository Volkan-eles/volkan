
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import WebcamCapture from '@/components/WebcamCapture';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  { id: 'giselle', name: 'Giselle', src: '/Giselle.png' },
  { id: 'riwoo', name: 'Riwoo', src: '/RIWOO.png' },
  { id: 'sungho', name: 'Sungho', src: '/SUNGHO.png' },
  { id: 'taesan', name: 'Taesan', src: '/TAESAN.png' },
  { id: 'woonhak', name: 'Woonhak', src: '/_WOONHAK.png' },
];

interface CameraControlsProps {
  onPhotoCaptured: (photoSrc: string) => void;
  isCapturing: boolean;
  setIsCapturing: (isCapturing: boolean) => void;
  frameColor: string;
  onFrameColorChange: (color: string) => void;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  overlayImageRef: React.RefObject<HTMLImageElement | null>;
}

const CameraControls: React.FC<CameraControlsProps> = ({
  onPhotoCaptured,
  isCapturing,
  setIsCapturing,
  frameColor,
  onFrameColorChange,
  activeTab,
  setActiveTab,
  overlayImageRef
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOverlay, setSelectedOverlay] = useState<{ id: string; name: string; src: string } | null>(null);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(KPOP_OVERLAYS.length / itemsPerPage);
  
  const displayedOverlays = KPOP_OVERLAYS.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (selectedOverlay) {
      // Load the overlay image
      const img = new Image();
      img.src = selectedOverlay.src;
      img.onload = () => {
        if (overlayImageRef.current) {
          overlayImageRef.current = null;
        }
        overlayImageRef.current = img;
      };
    } else {
      overlayImageRef.current = null;
    }
  }, [selectedOverlay, overlayImageRef]);

  const handleCapture = () => {
    setIsCapturing(true);
  };

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

  const handleSelectOverlay = (overlay: typeof KPOP_OVERLAYS[0]) => {
    setSelectedOverlay(overlay);
  };

  const handleDisableOverlays = () => {
    setSelectedOverlay(null);
  };

  const frameColors = [
    { name: 'White', value: 'white' },
    { name: 'Black', value: 'black' },
    { name: 'Red', value: 'red' },
    { name: 'Blue', value: 'blue' },
    { name: 'Pink', value: 'pink' },
    { name: 'Yellow', value: 'yellow' },
  ];

  return (
    <div className="flex flex-col gap-2">
      {/* Camera View */}
      <div className={`flex-1 bg-[#4b30ab] p-1 rounded-lg overflow-hidden`}>
        <div className="h-[220px] md:h-[280px] rounded-lg overflow-hidden bg-white">
          <WebcamCapture onCapture={onPhotoCaptured} isCapturing={isCapturing} overlayImage={overlayImageRef.current} />
        </div>
      </div>
      
      {/* Camera Buttons */}
      <div className="flex justify-center space-x-4 bg-[#4b30ab] py-1 rounded-lg">
        <Button variant="ghost" className="text-white p-1 h-8" onClick={() => {}}>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 8v8H5V8h10zm1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z" fill="currentColor" />
          </svg>
        </Button>
        <Button variant="ghost" className="text-white h-8 w-8 rounded-full border-2 border-white flex items-center justify-center p-0" onClick={handleCapture}>
          <div className="h-6 w-6 rounded-full bg-white"></div>
        </Button>
        <Button variant="ghost" className="text-white p-1 h-8" onClick={() => {}}>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" fill="currentColor" />
          </svg>
        </Button>
      </div>
      
      {/* Control Tabs */}
      <div className="bg-[#1A1A1A] rounded-lg p-1.5">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 bg-[#1A1A1A] p-0.5">
            <TabsTrigger value="frame-color" className={`text-xs py-1 ${activeTab === 'frame-color' ? 'bg-[#333] text-white' : 'text-gray-400'}`}>
              Frame Color
            </TabsTrigger>
            <TabsTrigger value="stickers" className={`text-xs py-1 ${activeTab === 'stickers' ? 'bg-[#333] text-white' : 'text-gray-400'}`}>
              Stickers
            </TabsTrigger>
            <TabsTrigger value="idol" className={`text-xs py-1 ${activeTab === 'idol' ? 'bg-[#333] text-white' : 'text-gray-400'}`}>
              Idol
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        {activeTab === 'frame-color' && (
          <div className="mt-2 grid grid-cols-3 gap-1">
            {frameColors.map((color) => (
              <button
                key={color.value}
                onClick={() => onFrameColorChange(color.value)}
                className={`h-8 rounded-md flex items-center justify-center ${
                  frameColor === color.value ? 'ring-2 ring-white' : ''
                }`}
                style={{ 
                  backgroundColor: color.value === 'white' ? '#FFFFFF' : 
                                   color.value === 'black' ? '#333333' : 
                                   color.value === 'red' ? '#b32424' : 
                                   color.value === 'blue' ? '#3b82f6' : 
                                   color.value === 'pink' ? '#ec4899' : '#fde047',
                  color: color.value === 'white' || color.value === 'yellow' ? '#333333' : '#FFFFFF'
                }}
              >
                {color.name}
              </button>
            ))}
          </div>
        )}
        
        {activeTab === 'stickers' && (
          <div className="mt-2 grid grid-cols-4 gap-1">
            {Array.from({length: 8}).map((_, index) => (
              <div key={index} className="aspect-square border border-[#333] rounded-md"></div>
            ))}
          </div>
        )}
        
        {activeTab === 'idol' && (
          <>
            <div className="mt-2 flex justify-between items-center mb-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDisableOverlays}
                className="text-xs h-6 bg-booth-green hover:bg-booth-green/90 text-black"
              >
                Disable Overlays
              </Button>
              
              <div className="text-xs text-gray-400">
                Page {currentPage} of {totalPages}
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-1 mb-2">
              {displayedOverlays.map((overlay) => (
                <div
                  key={overlay.id}
                  onClick={() => handleSelectOverlay(overlay)}
                  className={`overlay-thumbnail hover:scale-105 transition-transform ${
                    selectedOverlay?.id === overlay.id ? 'ring-2 ring-white' : ''
                  } bg-black rounded-md overflow-hidden cursor-pointer`}
                >
                  <img
                    src={overlay.src}
                    alt={overlay.name}
                    className="w-full aspect-square object-contain p-1"
                  />
                  <div className="text-[9px] text-center text-white p-0.5 truncate">{overlay.name}</div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="h-6 text-xs"
              >
                <ChevronLeft className="h-3 w-3 mr-1" />
                Prev
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="h-6 text-xs"
              >
                Next
                <ChevronRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CameraControls;
