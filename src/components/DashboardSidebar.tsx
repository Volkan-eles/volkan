
import React from 'react';
import { 
  SidebarContent, 
  SidebarHeader
} from '@/components/ui/sidebar';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SidebarMenuItems from './SidebarMenuItems';

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
        <SidebarMenuItems />
      </SidebarContent>

      <div className="mt-auto p-4">
        <Button className="w-full bg-[#4b30ab] hover:bg-[#5b40bb] text-white">
          <Download size={18} className="mr-2" />
          DOWNLOAD APP
        </Button>
      </div>
    </>
  );
};

export default DashboardSidebar;
