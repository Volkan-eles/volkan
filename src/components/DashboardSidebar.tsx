
import React from 'react';
import { 
  SidebarContent, 
  SidebarHeader,
  SidebarTrigger,
  useSidebar
} from '@/components/ui/sidebar';
import { ChevronLeft, ChevronRight, Download, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SidebarMenuItems from './SidebarMenuItems';

const DashboardSidebar = () => {
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <>
      <SidebarHeader className="p-2 flex items-center justify-between">
        <div className={`flex items-center gap-1 text-base font-bold ${isCollapsed ? 'hidden' : 'flex'}`}>
          <div className="text-[#9b87f5] font-bold">
            <span className="text-base">Photo Booth</span>
          </div>
        </div>
        <div className="md:hidden">
          <SidebarTrigger>
            <Menu size={16} />
          </SidebarTrigger>
        </div>
        <Button 
          onClick={toggleSidebar}
          size="sm" 
          variant="ghost" 
          className="hidden md:flex p-0.5 h-6 w-6 text-gray-400 hover:text-white"
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </Button>
      </SidebarHeader>

      <SidebarContent className="px-1">
        <SidebarMenuItems />
      </SidebarContent>

      <div className={`mt-auto p-2 ${isCollapsed ? 'hidden' : 'block'}`}>
        <Button className="w-full bg-[#4b30ab] hover:bg-[#5b40bb] text-white text-xs py-1 h-7">
          <Download size={12} className="mr-1" />
          DOWNLOAD APP
        </Button>
      </div>
    </>
  );
};

export default DashboardSidebar;
