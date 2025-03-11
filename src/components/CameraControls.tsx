
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import WebcamCapture from '@/components/WebcamCapture';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StickersGrid from '@/components/StickersGrid';
import { HexColorPicker } from 'react-colorful';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';
import TextPanel from '@/components/sidebar/TextPanel';

interface CameraControlsProps {
  onPhotoCaptured: (photoSrc: string) => void;
  isCapturing: boolean;
  setIsCapturing: (isCapturing: boolean) => void;
  frameColor: string;
  onFrameColorChange: (color: string) => void;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  overlayImageRef: React.RefObject<HTMLImageElement | null>;
  onTextStyleChange?: (style: {
    text?: string;
    font?: string;
    color?: string;
    size?: string;
  }) => void;
}

const CameraControls: React.FC<CameraControlsProps> = ({
  onPhotoCaptured,
  isCapturing,
  setIsCapturing,
  frameColor,
  onFrameColorChange,
  activeTab,
  setActiveTab,
  overlayImageRef,
  onTextStyleChange
}) => {
  const [selectedSticker, setSelectedSticker] = useState<string | null>(null);
  const [isTabOpen, setIsTabOpen] = useState(true);

  const handleCapture = () => {
    setIsCapturing(true);
  };

  const handleSelectSticker = (sticker: {id: string; name: string; src: string}) => {
    setSelectedSticker(sticker.id);
    const img = new Image();
    img.src = sticker.src;
    img.onload = () => {
      if (overlayImageRef) {
        (overlayImageRef as any).current = img;
      }
    };
  };

  const handleTabChange = (value: string) => {
    if (value === activeTab && isTabOpen) {
      setIsTabOpen(false);
    } else {
      setActiveTab(value);
      setIsTabOpen(true);
    }
  };

  // Frame color selection component
  const FrameColorSelector = () => (
    <div className="mt-2 p-3">
      <HexColorPicker color={frameColor} onChange={onFrameColorChange} className="w-full max-w-[180px] mx-auto rounded-lg overflow-hidden shadow-md" />
      <div className="grid grid-cols-4 gap-3 mt-4">
        {['#FFFFFF', '#000000', '#4b30ab', '#FF6B6B'].map(color => (
          <div 
            key={color}
            onClick={() => onFrameColorChange(color)}
            className={`w-full aspect-square rounded-lg cursor-pointer border-2 transition-all duration-200 transform hover:scale-110 ${frameColor === color ? 'ring-2 ring-white ring-offset-2 ring-offset-[#1A1A1A]' : 'border-transparent'}`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );

  // Idol selection component
  const IdolSelector = () => (
    <div className="mt-4 text-center text-sm text-gray-400">
      <p>Choose your favorite K-pop idol</p>
      <div className="grid grid-cols-3 gap-3 mt-3">
        <div className="p-3 border border-[#333] rounded-lg text-center hover:bg-[#333] transition-all duration-200 hover:border-violet-500 cursor-pointer">
          <span>Coming soon</span>
        </div>
      </div>
    </div>
  );

  // Text panel component
  const TextControls = () => (
    <div className="mt-2 p-3">
      <TextPanel onTextStyleChange={onTextStyleChange} />
    </div>
  );

  return (
    <div className="flex flex-col gap-3 w-[95%] mx-auto">
      {/* Camera View */}
      <div className={`flex-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 p-1.5 rounded-lg overflow-hidden shadow-lg`}>
        <div className="h-[220px] md:h-[280px] rounded-lg overflow-hidden bg-white">
          <WebcamCapture onCapture={onPhotoCaptured} isCapturing={isCapturing} overlayImage={overlayImageRef.current} />
        </div>
      </div>
      
      {/* Camera Buttons */}
      <div className="flex justify-center space-x-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-4 rounded-lg shadow-md">
        <Button variant="ghost" className="text-white p-1 h-8 hover:bg-white/10 transition-colors" onClick={() => {}}>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 8v8H5V8h10zm1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z" fill="currentColor" />
          </svg>
        </Button>
        <Button 
          variant="ghost" 
          className="text-white h-10 w-10 rounded-full border-2 border-white flex items-center justify-center p-0 hover:bg-white/10 hover:scale-110 transition-all duration-200 transform" 
          onClick={handleCapture}
        >
          <div className="h-6 w-6 rounded-full bg-white"></div>
        </Button>
        <Button variant="ghost" className="text-white p-1 h-8 hover:bg-white/10 transition-colors" onClick={() => {}}>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" fill="currentColor" />
          </svg>
        </Button>
      </div>
      
      {/* Control Tabs */}
      <Collapsible open={isTabOpen} className="bg-[#1A1A1A] rounded-lg p-2 shadow-md">
        <div className="flex items-center justify-between px-2">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid grid-cols-4 bg-[#1A1A1A] p-0.5 w-[90%]">
              <TabsTrigger 
                value="frame-color" 
                className={`text-xs py-1.5 px-2 transition-all duration-200 ${activeTab === 'frame-color' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Frame Color
              </TabsTrigger>
              <TabsTrigger 
                value="stickers" 
                className={`text-xs py-1.5 px-2 transition-all duration-200 ${activeTab === 'stickers' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Stickers
              </TabsTrigger>
              <TabsTrigger 
                value="text" 
                className={`text-xs py-1.5 px-2 transition-all duration-200 ${activeTab === 'text' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Text
              </TabsTrigger>
              <TabsTrigger 
                value="idol" 
                className={`text-xs py-1.5 px-2 transition-all duration-200 ${activeTab === 'idol' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Idol
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <CollapsibleTrigger className="text-gray-400 hover:text-white transition-colors">
            {isTabOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent className="pt-2">
          {activeTab === 'frame-color' && <FrameColorSelector />}
          {activeTab === 'stickers' && <StickersGrid onSelectSticker={handleSelectSticker} selectedSticker={selectedSticker} />}
          {activeTab === 'text' && <TextControls />}
          {activeTab === 'idol' && <IdolSelector />}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default CameraControls;
