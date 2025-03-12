
import React, { useRef, useState } from 'react';
import CameraControls from '@/components/CameraControls';
import LayoutSelector from '@/components/LayoutSelector';
import { Menu, ExternalLink } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import usePhotoState from '@/hooks/usePhotoState';
import { layoutOptions } from '@/data/layoutOptions';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTextElements } from '@/hooks/useTextElements';
import TextLayer from '@/components/TextLayer';
import PhotoStripPreview from '@/components/PhotoStripPreview';
import { StickerType } from './photobooth/StickerSelector';
import { FrameColorType } from './photobooth/FrameColorSelector';

const DashboardContent = () => {
  const overlayImageRef = useRef<HTMLImageElement | null>(null);
  const [sticker, setSticker] = useState<StickerType>('none');
  const [stripFrameColor, setStripFrameColor] = useState<FrameColorType>('white');
  
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

  const {
    textElements,
    addTextElement,
    updateTextElement,
    deleteTextElement
  } = useTextElements();

  const handleTextStyleChange = (style: {
    text?: string;
    font?: string;
    color?: string;
    size?: string;
  }) => {
    addTextElement(style);
  };

  // Handler for strip frame color
  const handleStripFrameColorChange = (color: FrameColorType) => {
    setStripFrameColor(color);
  };

  // Handler for sticker selection
  const handleStickerChange = (selectedSticker: StickerType) => {
    setSticker(selectedSticker);
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="md:hidden p-2">
        <SidebarTrigger className="bg-[#1A1A1A] text-white p-2 rounded">
          <Menu size={20} />
        </SidebarTrigger>
      </div>

      <div className="flex-1 p-1 md:p-2 flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-[35%]">
          <CameraControls 
            onPhotoCaptured={handlePhotoCaptured} 
            isCapturing={isCapturing} 
            setIsCapturing={setIsCapturing} 
            frameColor={frameColor} 
            onFrameColorChange={handleFrameColorChange} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            overlayImageRef={overlayImageRef}
            onTextStyleChange={handleTextStyleChange}
          />
        </div>
        
        <div className="w-full md:w-[65%] flex flex-col lg:flex-row gap-2">
          <div className="lg:w-[70%] relative">
            <LayoutSelector 
              selectedLayout={selectedLayout} 
              setSelectedLayout={setSelectedLayout} 
              layoutOptions={layoutOptions} 
              capturedPhotos={capturedPhotos} 
              frameColor={frameColor}
            />
            <TextLayer 
              textElements={textElements}
              onUpdate={updateTextElement}
              onDelete={deleteTextElement}
            />
          </div>
          
          <div className="lg:w-[30%] bg-[#1A1A1A]/50 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/10">
            <h3 className="text-lg font-medium mb-3 text-white/90">Recent Photos</h3>
            <PhotoStripPreview 
              photos={capturedPhotos} 
              maxDisplay={3} 
              frameColor={stripFrameColor}
              setFrameColor={handleStripFrameColorChange}
              sticker={sticker}
              setSticker={handleStickerChange}
              onDownload={() => {}} 
              onTakeNewPhotos={() => setIsCapturing(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
