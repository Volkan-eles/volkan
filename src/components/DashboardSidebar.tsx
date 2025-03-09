
import React from 'react';
import { 
  SidebarContent, 
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader
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
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardSidebar = () => {
  return (
    <>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2 text-xl font-bold">
          <div className="text-[#9b87f5] font-bold">
            <span className="text-2xl">Photo Booth</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center gap-3 text-white bg-[#4b30ab] hover:bg-[#5b40bb]">
              <Home size={18} />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center gap-3 text-gray-300 hover:bg-[#2A2A2A]">
              <Palette size={18} />
              <span>Tasarım</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center gap-3 text-gray-300 hover:bg-[#2A2A2A]">
              <LayoutGrid size={18} />
              <span>Layoot</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center gap-3 text-gray-300 hover:bg-[#2A2A2A]">
              <Sticker size={18} />
              <span>Sticker</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center gap-3 text-gray-300 hover:bg-[#2A2A2A]">
              <Type size={18} />
              <span>Text</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center gap-3 text-gray-300 hover:bg-[#2A2A2A]">
              <FolderOpen size={18} />
              <span>Kategoriler</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center gap-3 text-gray-300 hover:bg-[#2A2A2A]">
              <MoreHorizontal size={18} />
              <span>More</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center gap-3 text-gray-300 hover:bg-[#2A2A2A]">
              <Settings size={18} />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <div className="mt-auto p-4">
        <Button className="w-full bg-[#4b30ab] hover:bg-[#5b40bb] text-white">
          DOWLAND APP
        </Button>
      </div>
    </>
  );
};

export default DashboardSidebar;
