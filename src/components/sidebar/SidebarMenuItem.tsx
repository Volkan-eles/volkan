
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
  const isActive = item.isActive || activePanel === item.panelType;
  
  if (isCollapsed) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarMenuButton 
              onClick={() => onPanelToggle(item.panelType)}
              className={`flex items-center justify-center py-1.5 transition-all duration-300 relative overflow-hidden ${
                isActive
                  ? 'text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              aria-label={item.label}
              aria-expanded={isActive}
              aria-pressed={isActive}
            >
              {isActive && (
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600/90 to-fuchsia-600/90 blur-[1px] opacity-90" />
              )}
              <item.icon size={16} className="relative z-10" />
            </SidebarMenuButton>
          </TooltipTrigger>
          <TooltipContent side="right" align="center" className="bg-[#333] border-[#555]">
            {item.label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <SidebarMenuButton 
      onClick={() => onPanelToggle(item.panelType)}
      className={`flex items-center justify-between w-full py-1.5 px-2 rounded-md transition-all duration-300 relative overflow-hidden ${
        isActive
          ? 'text-white shadow-lg' 
          : 'text-gray-300 hover:text-white hover:bg-white/10'
      }`}
      aria-label={item.label}
      aria-expanded={isActive}
      aria-pressed={isActive}
    >
      {isActive && (
        <span className="absolute inset-0 bg-gradient-to-r from-violet-600/90 to-fuchsia-600/90 blur-[1px] opacity-90" />
      )}
      <div className="flex items-center gap-2 relative z-10">
        <item.icon size={16} />
        <span className="text-sm">{item.label}</span>
      </div>
      {item.panelType && (
        <span className="relative z-10">
          {isActive ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </span>
      )}
    </SidebarMenuButton>
  );
};

export default SidebarMenuItemComponent;
