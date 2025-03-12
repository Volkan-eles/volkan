
import React, { useState } from 'react';
import { 
  SidebarMenu,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar';
import SidebarPanel from './SidebarPanel';
import { menuItems } from './MenuItemDefinition';
import SidebarMenuItemComponent from './SidebarMenuItem';

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
      <SidebarMenu className="px-1.5 py-2 space-y-2">
        {menuItems.map((item, index) => (
          <SidebarMenuItem 
            key={item.label} 
            className="transition-all duration-300 hover:scale-[1.02] animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }} // Staggered animation
          >
            <SidebarMenuItemComponent 
              item={item} 
              activePanel={activePanel} 
              onPanelToggle={handlePanelToggle} 
            />
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
