
import React from 'react';
import { 
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar
} from '@/components/ui/sidebar';
import { 
  ChevronDown,
  ChevronRight,
  LucideIcon
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { MenuItemDefinition } from './MenuItemDefinition';

interface SidebarMenuItemProps {
  item: MenuItemDefinition;
  activePanel: string | null;
  onPanelToggle: (panelType: string | undefined) => void;
}

const SidebarMenuItemComponent: React.FC<SidebarMenuItemProps> = ({
  item,
  activePanel,
  onPanelToggle
}) => {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';
  
  if (isCollapsed) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarMenuButton 
              onClick={() => onPanelToggle(item.panelType)}
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
    );
  }

  return (
    <SidebarMenuButton 
      onClick={() => onPanelToggle(item.panelType)}
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
  );
};

export default SidebarMenuItemComponent;
