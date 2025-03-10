
import React, { useState } from 'react';
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarRail } from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import CameraControls from '@/components/CameraControls';
import LayoutSelector from '@/components/LayoutSelector';
import { Menu } from 'lucide-react';

const Dashboard = () => {
  const [capturedPhotos, setCapturedPhotos] = useState<string[]>([]);
  const [selectedLayout, setSelectedLayout] = useState<string>('elegant-strip');
  const [frameColor, setFrameColor] = useState<string>('white');
  const [isCapturing, setIsCapturing] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('frame-color');

  const layoutOptions = [
    { id: 'diagonal-strips', name: 'Diagonal Strips', photos: 3 },
    { id: 'classic-strip', name: 'Classic Strip', photos: 4 },
    { id: 'vertical-strip', name: 'Vertical Strip', photos: 4 },
    { id: 'elegant-strip', name: 'Elegant Strip', photos: 4 },
    { id: 'large-vertical', name: 'Large Vertical', photos: 2 },
    { id: 'big-small', name: 'Big & Small', photos: 3 },
    { id: 'grid', name: 'Grid', photos: 4 },
    { id: 'simple-grid', name: 'Simple Grid', photos: 4 },
    { id: 'classic-grid', name: 'Classic Grid', photos: 4 },
    { id: 'vertical-duo', name: 'Vertical Duo', photos: 2 },
    { id: 'horizontal-duo', name: 'Horizontal Duo', photos: 2 },
    { id: 'creative-overlap', name: 'Creative Overlap', photos: 2 },
    { id: 'full-frame', name: 'Full Frame', photos: 1 },
  ];

  const handlePhotoCaptured = (photoSrc: string) => {
    setCapturedPhotos(prev => [...prev, photoSrc]);
    setIsCapturing(false);
  };

  const handleFrameColorChange = (color: string) => {
    setFrameColor(color);
  };

  return (
    <div className="min-h-screen flex bg-black text-white">
      <SidebarProvider>
        <Sidebar 
          className="w-[180px] md:w-[200px] bg-[#1A1A1A] border-r border-[#333]"
          collapsible="icon"
        >
          <DashboardSidebar />
          <SidebarRail />
        </Sidebar>

        <div className="flex-1 flex flex-col">
          <DashboardHeader />

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
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
