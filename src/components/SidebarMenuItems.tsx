
import React from 'react';
import { 
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
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
  return (
    <SidebarMenu>
      {menuItems.map((item) => (
        <SidebarMenuItem key={item.label}>
          <SidebarMenuButton 
            className={`flex items-center gap-3 ${
              item.isActive 
                ? 'text-white bg-[#4b30ab] hover:bg-[#5b40bb]' 
                : 'text-gray-300 hover:bg-[#2A2A2A]'
            }`}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};

export default SidebarMenuItems;
