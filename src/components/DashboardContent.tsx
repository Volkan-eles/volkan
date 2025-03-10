
import React, { useRef } from 'react';
import CameraControls from '@/components/CameraControls';
import LayoutSelector from '@/components/LayoutSelector';
import { Menu } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import usePhotoState from '@/hooks/usePhotoState';
import { layoutOptions } from '@/data/layoutOptions';

const DashboardContent = () => {
  const overlayImageRef = useRef<HTMLImageElement | null>(null);
  const {
    capturedPhotos,
    selectedLayout,
    setSelectedLayout,
    frameColor,
    isCapturing,
    setIsCapturing,
    activeTab,
    setActiveTab,
    handlePhotoCaptured,
    handleFrameColorChange
  } = usePhotoState();

  return (
    <div className="flex-1 flex flex-col">
      <div className="md:hidden p-2">
        <SidebarTrigger className="bg-[#1A1A1A] text-white p-2 rounded">
          <Menu size={20} />
        </SidebarTrigger>
      </div>

      <div className="flex-1 p-1 md:p-2 flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-[40%]">
          <CameraControls 
            onPhotoCaptured={handlePhotoCaptured}
            isCapturing={isCapturing}
            setIsCapturing={setIsCapturing}
            frameColor={frameColor}
            onFrameColorChange={handleFrameColorChange}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            overlayImageRef={overlayImageRef}
          />
        </div>
        
        <div className="w-full md:w-[60%]">
          <LayoutSelector 
            selectedLayout={selectedLayout}
            setSelectedLayout={setSelectedLayout}
            layoutOptions={layoutOptions}
            capturedPhotos={capturedPhotos}
            frameColor={frameColor}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
