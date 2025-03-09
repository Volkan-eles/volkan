
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
      <SidebarHeader className="p-3 flex items-center justify-between">
        <div className={`flex items-center gap-1 text-lg font-bold ${isCollapsed ? 'hidden' : 'flex'}`}>
          <div className="text-[#9b87f5] font-bold">
            <span className="text-xl">Photo Booth</span>
          </div>
        </div>
        <div className="md:hidden">
          <SidebarTrigger>
            <Menu size={18} />
          </SidebarTrigger>
        </div>
        <Button 
          onClick={toggleSidebar}
          size="sm" 
          variant="ghost" 
          className="hidden md:flex p-1 h-7 w-7"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </Button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenuItems />
      </SidebarContent>

      <div className={`mt-auto p-3 ${isCollapsed ? 'hidden' : 'block'}`}>
        <Button className="w-full bg-[#4b30ab] hover:bg-[#5b40bb] text-white text-sm py-1.5">
          <Download size={14} className="mr-1.5" />
          DOWNLOAD APP
        </Button>
      </div>
    </>
  );
};

export default DashboardSidebar;
