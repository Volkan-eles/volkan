
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import WebcamCapture from '@/components/WebcamCapture';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StickersGrid from '@/components/StickersGrid';
import { HexColorPicker } from 'react-colorful';
import OverlayControls from '@/components/OverlayControls';
import { OverlayItem, createOverlayItem, positionOverlayBottomRight } from '@/utils/overlayManager';
import { toast } from 'sonner';

interface CameraControlsProps {
  onPhotoCaptured: (photoSrc: string) => void;
  isCapturing: boolean;
  setIsCapturing: (isCapturing: boolean) => void;
  frameColor: string;
  onFrameColorChange: (color: string) => void;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const CameraControls: React.FC<CameraControlsProps> = ({
  onPhotoCaptured,
  isCapturing,
  setIsCapturing,
  frameColor,
  onFrameColorChange,
  activeTab,
  setActiveTab
}) => {
  const [overlays, setOverlays] = useState<OverlayItem[]>([]);
  const [overlayImages, setOverlayImages] = useState<Record<string, HTMLImageElement>>({});
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

  // Track container size for proper overlay positioning
  useEffect(() => {
    if (!containerRef) return;

    const updateSize = () => {
      setContainerSize({
        width: containerRef.clientWidth,
        height: containerRef.clientHeight
      });
    };

    // Initial size
    updateSize();

    // Update on resize
    const observer = new ResizeObserver(updateSize);
    observer.observe(containerRef);

    return () => observer.disconnect();
  }, [containerRef]);

  const handleCapture = () => {
    setIsCapturing(true);
  };

  const handleSelectSticker = (sticker: {id: string; name: string; src: string}) => {
    // Create new image object for the overlay
    const img = new Image();
    img.src = sticker.src;
    
    img.onload = () => {
      // Create a new overlay item
      const newOverlay = createOverlayItem(sticker.id, sticker.src);
      
      // Set the actual dimensions
      newOverlay.width = img.width;
      newOverlay.height = img.height;
      
      // Position at the bottom right of container
      const positioned = positionOverlayBottomRight(
        newOverlay,
        containerSize.width,
        containerSize.height
      );
      
      // Update overlays state
      setOverlays(prev => [...prev, positioned]);
      
      // Update overlay images
      setOverlayImages(prev => ({
        ...prev,
        [sticker.id]: img
      }));
      
      toast.success(`Added ${sticker.name} sticker`);
    };
  };

  const handleOverlayPositionChange = (id: string, x: number, y: number) => {
    setOverlays(prev => 
      prev.map(overlay => 
        overlay.id === id 
          ? { ...overlay, x, y } 
          : overlay
      )
    );
  };

  const handleUpdateOverlay = (updatedOverlay: OverlayItem) => {
    setOverlays(prev => 
      prev.map(overlay => 
        overlay.id === updatedOverlay.id 
          ? updatedOverlay 
          : overlay
      )
    );
  };

  const handleDeleteOverlay = (id: string) => {
    setOverlays(prev => prev.filter(overlay => overlay.id !== id));
    toast.info('Overlay removed');
  };

  const handleDuplicateOverlay = (id: string) => {
    const original = overlays.find(o => o.id === id);
    if (!original || !overlayImages[id]) return;
    
    // Create a duplicate with a unique ID
    const newId = `${id}-copy-${Date.now()}`;
    const duplicate: OverlayItem = {
      ...original,
      id: newId,
      x: original.x + 20, // Offset slightly
      y: original.y + 20
    };
    
    // Add the duplicate overlay
    setOverlays(prev => [...prev, duplicate]);
    
    // Share the same image reference
    setOverlayImages(prev => ({
      ...prev,
      [newId]: overlayImages[id]
    }));
    
    toast.success('Overlay duplicated');
  };

  // Frame color selection component for the frame-color tab
  const FrameColorSelector = () => (
    <div className="mt-2 p-2">
      <HexColorPicker color={frameColor} onChange={onFrameColorChange} className="w-full max-w-[200px] mx-auto" />
      <div className="grid grid-cols-4 gap-2 mt-3">
        {['#FFFFFF', '#000000', '#4b30ab', '#FF6B6B'].map(color => (
          <div 
            key={color}
            onClick={() => onFrameColorChange(color)}
            className={`w-full aspect-square rounded-md cursor-pointer border-2 ${frameColor === color ? 'border-white' : 'border-transparent'}`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );

  // Idol selection for the idol tab
  const IdolSelector = () => (
    <div className="mt-2 text-center text-sm text-gray-400">
      <p>Choose your favorite K-pop idol</p>
      <div className="grid grid-cols-3 gap-2 mt-2">
        {/* More idols can be added here */}
        <div className="p-2 border border-[#333] rounded-md text-center hover:bg-[#333] transition-colors cursor-pointer">
          <span>Coming soon</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-2">
      {/* Camera View */}
      <div 
        className={`flex-1 bg-[#4b30ab] p-1 rounded-lg overflow-hidden`}
        ref={setContainerRef}
      >
        <div className="h-[220px] md:h-[280px] rounded-lg overflow-hidden bg-white">
          <WebcamCapture 
            onCapture={onPhotoCaptured} 
            isCapturing={isCapturing} 
            overlayImages={overlayImages}
            overlays={overlays}
            onOverlayPositionChange={handleOverlayPositionChange}
          />
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
      
      {/* Active Overlay Controls */}
      {overlays.map(overlay => (
        <OverlayControls
          key={overlay.id}
          overlay={overlay}
          onUpdate={handleUpdateOverlay}
          onDelete={() => handleDeleteOverlay(overlay.id)}
          onDuplicate={() => handleDuplicateOverlay(overlay.id)}
        />
      ))}
      
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
        
        {/* Tab Content */}
        {activeTab === 'frame-color' && <FrameColorSelector />}
        {activeTab === 'stickers' && <StickersGrid onSelectSticker={handleSelectSticker} selectedSticker={null} />}
        {activeTab === 'idol' && <IdolSelector />}
      </div>
    </div>
  );
};

export default CameraControls;
