
import React from 'react';
import { 
  SidebarContent, 
  SidebarHeader,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { Download, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SidebarMenuItems from './SidebarMenuItems';

const DashboardSidebar = () => {
  return (
    <>
      <SidebarHeader className="p-3 flex items-center justify-between">
        <div className="flex items-center gap-1 text-lg font-bold">
          <div className="text-[#9b87f5] font-bold">
            <span className="text-xl">Photo Booth</span>
          </div>
        </div>
        <div className="md:hidden">
          <SidebarTrigger>
            <Menu size={18} />
          </SidebarTrigger>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenuItems />
      </SidebarContent>

      <div className="mt-auto p-3">
        <Button className="w-full bg-[#4b30ab] hover:bg-[#5b40bb] text-white text-sm py-1.5">
          <Download size={14} className="mr-1.5" />
          DOWNLOAD APP
        </Button>
      </div>
    </>
  );
};

export default DashboardSidebar;
