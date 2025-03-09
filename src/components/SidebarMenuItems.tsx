
import React from 'react';
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
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SidebarMenuItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
}

const menuItems: SidebarMenuItemProps[] = [
  { icon: Home, label: 'Dashboard', isActive: true },
  { icon: Palette, label: 'Design' },
  { icon: LayoutGrid, label: 'Layout' },
  { icon: Sticker, label: 'Sticker' },
  { icon: Type, label: 'Text' },
  { icon: FolderOpen, label: 'Categories' },
  { icon: MoreHorizontal, label: 'More' },
  { icon: Settings, label: 'Settings' },
];

const SidebarMenuItems: React.FC = () => {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <SidebarMenu>
      {menuItems.map((item) => (
        <SidebarMenuItem key={item.label}>
          {isCollapsed ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton 
                    className={`flex items-center justify-center py-1.5 ${
                      item.isActive 
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
              className={`flex items-center gap-2 py-1.5 ${
                item.isActive 
                  ? 'text-white bg-[#4b30ab] hover:bg-[#5b40bb]' 
                  : 'text-gray-300 hover:bg-[#2A2A2A]'
              }`}
            >
              <item.icon size={16} />
              <span className="text-sm">{item.label}</span>
            </SidebarMenuButton>
          )}
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};

export default SidebarMenuItems;
