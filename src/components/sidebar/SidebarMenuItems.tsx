
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
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import SidebarPanel from './SidebarPanel';

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

      <SidebarPanel
        activePanel={activePanel}
        selectedSticker={selectedSticker}
        onSelectSticker={handleSelectSticker}
        onClose={closePanel}
        isCollapsed={isCollapsed}
      />
    </div>
  );
};

export default SidebarMenuItems;
