
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
              className={`flex items-center justify-center py-1.5 transition-all duration-300 relative overflow-hidden rounded-lg ${
                isActive
                  ? 'text-white shadow-lg scale-105' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              aria-label={item.label}
              aria-expanded={isActive}
              aria-pressed={isActive}
            >
              {isActive && (
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600/90 to-fuchsia-600/90 blur-[1px] opacity-90" />
              )}
              <item.icon size={16} className="relative z-10 transition-transform duration-300 hover:scale-110" />
            </SidebarMenuButton>
          </TooltipTrigger>
          <TooltipContent side="right" align="center" className="bg-[#333] border-[#555] shadow-xl">
            <span className="text-xs font-medium">{item.label}</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <SidebarMenuButton 
      onClick={() => onPanelToggle(item.panelType)}
      className={`flex items-center justify-between w-full py-1.5 px-2 rounded-lg transition-all duration-300 relative overflow-hidden ${
        isActive
          ? 'text-white shadow-lg transform scale-[1.02]' 
          : 'text-gray-300 hover:text-white hover:bg-white/10 hover:scale-[1.01]'
      }`}
      aria-label={item.label}
      aria-expanded={isActive}
      aria-pressed={isActive}
    >
      {isActive && (
        <span className="absolute inset-0 bg-gradient-to-r from-violet-600/90 to-fuchsia-600/90 blur-[1px] opacity-90 animate-pulse-gentle" />
      )}
      <div className="flex items-center gap-2 relative z-10">
        <item.icon size={16} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
        <span className="text-sm font-medium">{item.label}</span>
      </div>
      {item.panelType && (
        <span className="relative z-10 transition-transform duration-300">
          {isActive ? 
            <ChevronDown size={14} className="animate-bounce" /> : 
            <ChevronRight size={14} className="group-hover:translate-x-1" />
          }
        </span>
      )}
    </SidebarMenuButton>
  );
};

export default SidebarMenuItemComponent;
