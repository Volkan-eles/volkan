
import React, { useState } from 'react';
import { 
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar
} from '@/components/ui/sidebar';
import { 
  Home, 
  Palette, 
  LayoutGrid, 
  Sticker, 
  Type, 
  FolderOpen, 
  MoreHorizontal, 
  Settings,
  ChevronDown,
  ChevronRight,
  X
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import StickersGrid from './StickersGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { KPOP_STICKERS } from '@/constants/stickers';

interface SidebarMenuItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  panelType?: 'stickers' | 'layouts' | 'text' | 'design' | 'categories';
}

const menuItems: SidebarMenuItemProps[] = [
  { icon: Home, label: 'Dashboard', isActive: true },
  { icon: Palette, label: 'Design', panelType: 'design' },
  { icon: LayoutGrid, label: 'Layout', panelType: 'layouts' },
  { icon: Sticker, label: 'Sticker', panelType: 'stickers' },
  { icon: Type, label: 'Text', panelType: 'text' },
  { icon: FolderOpen, label: 'Categories', panelType: 'categories' },
  { icon: MoreHorizontal, label: 'More' },
  { icon: Settings, label: 'Settings' },
];

const SidebarMenuItems: React.FC = () => {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const [selectedSticker, setSelectedSticker] = useState<string | null>(null);
  
  const handlePanelToggle = (panelType: string | undefined) => {
    if (!panelType) return;
    
    if (activePanel === panelType) {
      setActivePanel(null); // Close panel if already open
    } else {
      setActivePanel(panelType); // Open the panel
    }
  };

  const handleSelectSticker = (sticker: {id: string; name: string; src: string}) => {
    setSelectedSticker(sticker.id);
    console.log('Selected sticker:', sticker);
    // This will be integrated with PhotoLayout in future development
  };
  
  const closePanel = () => {
    setActivePanel(null);
  };

  return (
    <div className="relative">
      <SidebarMenu>
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.label}>
            {isCollapsed ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuButton 
                      onClick={() => handlePanelToggle(item.panelType)}
                      className={`flex items-center justify-center py-1.5 ${
                        item.isActive || activePanel === item.panelType
                          ? 'text-white bg-[#4b30ab] hover:bg-[#5b40bb]' 
                          : 'text-gray-300 hover:bg-[#2A2A2A]'
                      }`}
                    >
                      <item.icon size={16} />
                    </SidebarMenuButton>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <SidebarMenuButton 
                onClick={() => handlePanelToggle(item.panelType)}
                className={`flex items-center justify-between w-full py-1.5 ${
                  item.isActive || activePanel === item.panelType
                    ? 'text-white bg-[#4b30ab] hover:bg-[#5b40bb]' 
                    : 'text-gray-300 hover:bg-[#2A2A2A]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <item.icon size={16} />
                  <span className="text-sm">{item.label}</span>
                </div>
                {item.panelType && (
                  activePanel === item.panelType ? <ChevronDown size={14} /> : <ChevronRight size={14} />
                )}
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>

      {/* Panel overlay - shown when a panel is active */}
      {activePanel && !isCollapsed && (
        <div className="absolute top-0 left-full w-[300px] h-auto bg-[#242424] border border-[#333] rounded-md shadow-lg z-50 overflow-hidden">
          <div className="flex items-center justify-between p-3 border-b border-[#333]">
            <h3 className="text-sm font-medium capitalize">{activePanel}</h3>
            <button 
              onClick={closePanel}
              className="p-1 rounded-md hover:bg-[#333] text-gray-400 hover:text-white"
            >
              <X size={14} />
            </button>
          </div>
          
          <div className="p-3">
            {activePanel === 'stickers' && (
              <div>
                <Tabs defaultValue="kpop" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-[#333]">
                    <TabsTrigger value="kpop">K-pop</TabsTrigger>
                    <TabsTrigger value="emojis">Emojis</TabsTrigger>
                    <TabsTrigger value="cute">Cute</TabsTrigger>
                  </TabsList>
                  <TabsContent value="kpop">
                    <StickersGrid 
                      onSelectSticker={handleSelectSticker} 
                      selectedSticker={selectedSticker}
                    />
                  </TabsContent>
                  <TabsContent value="emojis">
                    <div className="mt-2 text-sm text-gray-400 text-center py-6">
                      Emoji stickers coming soon!
                    </div>
                  </TabsContent>
                  <TabsContent value="cute">
                    <div className="mt-2 text-sm text-gray-400 text-center py-6">
                      Cute stickers coming soon!
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
            
            {activePanel === 'layouts' && (
              <div className="mt-2 text-sm text-gray-400">
                <Tabs defaultValue="grid" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 bg-[#333]">
                    <TabsTrigger value="grid">Grid</TabsTrigger>
                    <TabsTrigger value="strip">Strip</TabsTrigger>
                    <TabsTrigger value="diagonal">Diagonal</TabsTrigger>
                    <TabsTrigger value="creative">Creative</TabsTrigger>
                  </TabsList>
                  <TabsContent value="grid">
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="aspect-square bg-[#333] rounded-md hover:bg-[#444] transition-colors cursor-pointer"></div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="strip">
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {[1, 2].map((item) => (
                        <div key={item} className="aspect-[2/3] bg-[#333] rounded-md hover:bg-[#444] transition-colors cursor-pointer"></div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="diagonal">
                    <div className="text-center py-6">Diagonal layouts coming soon!</div>
                  </TabsContent>
                  <TabsContent value="creative">
                    <div className="text-center py-6">Creative layouts coming soon!</div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
            
            {activePanel === 'text' && (
              <div className="mt-2">
                <Tabs defaultValue="headings" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-[#333]">
                    <TabsTrigger value="headings">Headings</TabsTrigger>
                    <TabsTrigger value="body">Body</TabsTrigger>
                    <TabsTrigger value="effects">Effects</TabsTrigger>
                  </TabsList>
                  <TabsContent value="headings">
                    <div className="space-y-3 mt-4">
                      <div className="p-2 bg-[#333] rounded-md hover:bg-[#444] transition-colors cursor-pointer">
                        <p className="text-lg font-bold">Heading 1</p>
                      </div>
                      <div className="p-2 bg-[#333] rounded-md hover:bg-[#444] transition-colors cursor-pointer">
                        <p className="text-base font-bold">Heading 2</p>
                      </div>
                      <div className="p-2 bg-[#333] rounded-md hover:bg-[#444] transition-colors cursor-pointer">
                        <p className="text-sm font-bold">Heading 3</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="body">
                    <div className="space-y-3 mt-4">
                      <div className="p-2 bg-[#333] rounded-md hover:bg-[#444] transition-colors cursor-pointer">
                        <p className="text-base">Normal text</p>
                      </div>
                      <div className="p-2 bg-[#333] rounded-md hover:bg-[#444] transition-colors cursor-pointer">
                        <p className="text-sm">Small text</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="effects">
                    <div className="text-center py-6">Text effects coming soon!</div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
            
            {activePanel === 'design' && (
              <div className="mt-2">
                <Tabs defaultValue="templates" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-[#333]">
                    <TabsTrigger value="templates">Templates</TabsTrigger>
                    <TabsTrigger value="colors">Colors</TabsTrigger>
                    <TabsTrigger value="styles">Styles</TabsTrigger>
                  </TabsList>
                  <TabsContent value="templates">
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="aspect-video bg-[#333] rounded-md hover:bg-[#444] transition-colors cursor-pointer"></div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="colors">
                    <div className="grid grid-cols-4 gap-2 mt-4">
                      {['#FF5555', '#55FF55', '#5555FF', '#FFFF55', '#FF55FF', '#55FFFF', '#FFFFFF', '#000000'].map((color) => (
                        <div 
                          key={color} 
                          className="aspect-square rounded-md cursor-pointer" 
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="styles">
                    <div className="text-center py-6">Design styles coming soon!</div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
            
            {activePanel === 'categories' && (
              <div className="mt-2">
                <Tabs defaultValue="kpop" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-[#333]">
                    <TabsTrigger value="kpop">K-pop</TabsTrigger>
                    <TabsTrigger value="casual">Casual</TabsTrigger>
                    <TabsTrigger value="party">Party</TabsTrigger>
                  </TabsList>
                  <TabsContent value="kpop">
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="aspect-square bg-[#333] rounded-md hover:bg-[#444] transition-colors cursor-pointer"></div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="casual">
                    <div className="text-center py-6">Casual templates coming soon!</div>
                  </TabsContent>
                  <TabsContent value="party">
                    <div className="text-center py-6">Party templates coming soon!</div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarMenuItems;
