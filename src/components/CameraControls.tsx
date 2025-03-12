
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import WebcamCapture from '@/components/WebcamCapture';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StickersGrid from '@/components/StickersGrid';
import { HexColorPicker } from 'react-colorful';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, Camera, RefreshCw, Sparkles } from 'lucide-react';
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
  const [isLoading, setIsLoading] = useState(false);

  const handleCapture = () => {
    setIsCapturing(true);
  };

  const handleSelectSticker = (sticker: {id: string; name: string; src: string}) => {
    setIsLoading(true);
    setSelectedSticker(sticker.id);
    const img = new Image();
    img.src = sticker.src;
    img.onload = () => {
      if (overlayImageRef) {
        (overlayImageRef as any).current = img;
      }
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
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

  // Frame color selection component with enhanced UI
  const FrameColorSelector = () => (
    <div className="mt-2 p-3 space-y-3 animate-fade-in">
      <h3 className="text-sm font-medium text-white/90 mb-2">Choose frame color</h3>
      <HexColorPicker 
        color={frameColor} 
        onChange={onFrameColorChange} 
        className="w-full max-w-[180px] mx-auto rounded-lg overflow-hidden shadow-lg transition-all duration-300" 
      />
      <div className="grid grid-cols-5 gap-3 mt-4">
        {['#FFFFFF', '#000000', '#4b30ab', '#FF6B6B', '#22bb33'].map(color => (
          <div 
            key={color}
            onClick={() => onFrameColorChange(color)}
            className={`w-full aspect-square rounded-lg cursor-pointer border-2 transition-all duration-200 transform hover:scale-110 ${frameColor === color ? 'ring-2 ring-white ring-offset-2 ring-offset-[#1A1A1A] shadow-glow' : 'border-transparent opacity-80 hover:opacity-100'}`}
            style={{ backgroundColor: color }}
            aria-label={`Select ${color} color`}
            role="button"
            tabIndex={0}
          />
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between bg-black/20 p-2 rounded-md">
        <div className="text-xs text-white/70">Current: {frameColor}</div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs text-white/70 hover:text-white hover:bg-white/10"
          onClick={() => onFrameColorChange('#FFFFFF')}
        >
          <RefreshCw className="h-3 w-3 mr-1" />
          Reset
        </Button>
      </div>
    </div>
  );

  // Idol selection component with improved UI
  const IdolSelector = () => (
    <div className="mt-4 text-center text-sm text-gray-300 animate-fade-in p-2">
      <div className="bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 p-3 rounded-lg">
        <Sparkles className="h-5 w-5 mx-auto mb-2 text-violet-300" />
        <p className="mb-3 font-medium text-white/90">Choose your favorite K-pop idol</p>
        <div className="grid grid-cols-3 gap-3 mt-3">
          <div className="p-3 border border-[#333] rounded-lg text-center hover:bg-[#333] transition-all duration-200 hover:border-violet-500 cursor-pointer backdrop-blur-sm bg-black/30">
            <span>Coming soon</span>
          </div>
          <div className="p-3 border border-[#333] rounded-lg text-center hover:bg-[#333] transition-all duration-200 hover:border-violet-500 cursor-pointer backdrop-blur-sm bg-black/30">
            <span>Coming soon</span>
          </div>
          <div className="p-3 border border-[#333] rounded-lg text-center hover:bg-[#333] transition-all duration-200 hover:border-violet-500 cursor-pointer backdrop-blur-sm bg-black/30">
            <span>Coming soon</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Text panel component with animation
  const TextControls = () => (
    <div className="mt-2 p-3 animate-fade-in">
      <TextPanel onTextStyleChange={onTextStyleChange} />
    </div>
  );

  return (
    <div className="flex flex-col gap-3 w-[95%] mx-auto">
      {/* Camera View */}
      <div className={`flex-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 p-1.5 rounded-lg overflow-hidden shadow-lg transition-all duration-300`}>
        <div className="h-[220px] md:h-[280px] rounded-lg overflow-hidden bg-white relative">
          <WebcamCapture onCapture={onPhotoCaptured} isCapturing={isCapturing} overlayImage={overlayImageRef.current} />
          {isLoading && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center backdrop-blur-sm">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
            </div>
          )}
        </div>
      </div>
      
      {/* Camera Buttons - Enhanced with better animations and accessibility */}
      <div className="flex justify-center space-x-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
        <Button 
          variant="ghost" 
          className="text-white p-1 h-8 hover:bg-white/20 transition-colors relative overflow-hidden group" 
          onClick={() => {}}
          aria-label="Switch camera"
        >
          <svg className="w-4 h-4 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 8v8H5V8h10zm1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z" fill="currentColor" />
          </svg>
          <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></span>
        </Button>
        <Button 
          variant="ghost" 
          className="text-white h-12 w-12 rounded-full border-2 border-white flex items-center justify-center p-0 hover:bg-white/20 hover:scale-110 transition-all duration-300 transform relative overflow-hidden" 
          onClick={handleCapture}
          disabled={isCapturing}
          aria-label="Take photo"
        >
          <div className="h-7 w-7 rounded-full bg-white transition-transform duration-300 transform group-hover:scale-110"></div>
          {isCapturing && (
            <span className="absolute inset-0 bg-white/20 animate-pulse"></span>
          )}
        </Button>
        <Button 
          variant="ghost" 
          className="text-white p-1 h-8 hover:bg-white/20 transition-colors relative overflow-hidden group"
          onClick={() => {}}
          aria-label="Camera settings"
        >
          <svg className="w-4 h-4 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" fill="currentColor" />
          </svg>
          <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></span>
        </Button>
      </div>
      
      {/* Control Tabs - Enhanced with glassmorphism effect and better animations */}
      <Collapsible 
        open={isTabOpen} 
        className="bg-[#1A1A1A]/90 backdrop-blur-md rounded-lg p-2 shadow-lg border border-white/5 transition-all duration-300"
      >
        <div className="flex items-center justify-between px-2">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid grid-cols-4 bg-[#1A1A1A]/80 p-0.5 w-[90%] rounded-md border border-white/10">
              <TabsTrigger 
                value="frame-color" 
                className={`text-xs py-1.5 px-2 transition-all duration-300 relative ${activeTab === 'frame-color' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                aria-label="Frame color options"
              >
                Frame Color
                {activeTab === 'frame-color' && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/30"></span>
                )}
              </TabsTrigger>
              <TabsTrigger 
                value="stickers" 
                className={`text-xs py-1.5 px-2 transition-all duration-300 relative ${activeTab === 'stickers' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                aria-label="Stickers gallery"
              >
                Stickers
                {activeTab === 'stickers' && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/30"></span>
                )}
              </TabsTrigger>
              <TabsTrigger 
                value="text" 
                className={`text-xs py-1.5 px-2 transition-all duration-300 relative ${activeTab === 'text' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                aria-label="Text customization"
              >
                Text
                {activeTab === 'text' && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/30"></span>
                )}
              </TabsTrigger>
              <TabsTrigger 
                value="idol" 
                className={`text-xs py-1.5 px-2 transition-all duration-300 relative ${activeTab === 'idol' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                aria-label="K-pop idol selection"
              >
                Idol
                {activeTab === 'idol' && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/30"></span>
                )}
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <CollapsibleTrigger 
            className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
            aria-label={isTabOpen ? "Collapse panel" : "Expand panel"}
          >
            {isTabOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent className="pt-2 overflow-hidden transition-all duration-300">
          <div className="border-t border-white/10 pt-2 mt-1">
            {activeTab === 'frame-color' && <FrameColorSelector />}
            {activeTab === 'stickers' && <StickersGrid onSelectSticker={handleSelectSticker} selectedSticker={selectedSticker} />}
            {activeTab === 'text' && <TextControls />}
            {activeTab === 'idol' && <IdolSelector />}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default CameraControls;
