
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import FrameColorPanel from './FrameColorPanel';
import StickersGrid from '@/components/StickersGrid';
import TextPanel from './TextPanel';
import IdolPanel from './IdolPanel';

interface TabsAreaProps {
  activeTab: string;
  isTabOpen: boolean;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  setIsTabOpen: React.Dispatch<React.SetStateAction<boolean>>;
  frameColor: string;
  onFrameColorChange: (color: string) => void;
  selectedSticker: string | null;
  handleSelectSticker: (sticker: { id: string; name: string; src: string }) => void;
  onTextStyleChange?: (style: {
    text?: string;
    font?: string;
    color?: string;
    size?: string;
  }) => void;
}

const TabsArea: React.FC<TabsAreaProps> = ({
  activeTab,
  isTabOpen,
  setActiveTab,
  setIsTabOpen,
  frameColor,
  onFrameColorChange,
  selectedSticker,
  handleSelectSticker,
  onTextStyleChange
}) => {
  const handleTabChange = (value: string) => {
    if (value === activeTab && isTabOpen) {
      setIsTabOpen(false);
    } else {
      setActiveTab(value);
      setIsTabOpen(true);
    }
  };

  return (
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
          {activeTab === 'frame-color' && 
            <FrameColorPanel 
              frameColor={frameColor}
              onFrameColorChange={onFrameColorChange}
            />
          }
          {activeTab === 'stickers' && 
            <StickersGrid 
              onSelectSticker={handleSelectSticker} 
              selectedSticker={selectedSticker} 
            />
          }
          {activeTab === 'text' && 
            <TextPanel 
              onTextStyleChange={onTextStyleChange}
            />
          }
          {activeTab === 'idol' && <IdolPanel />}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default TabsArea;
