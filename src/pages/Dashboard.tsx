
import React from 'react';
import { SidebarProvider, Sidebar, SidebarRail } from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardContent from '@/components/DashboardContent';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-black text-white">
      <SidebarProvider>
        <Sidebar 
          className="w-[160px] md:w-[170px] bg-[#1A1A1A] border-r border-[#333]"
          collapsible="icon"
        >
          <DashboardSidebar />
          <SidebarRail />
        </Sidebar>

        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <DashboardContent />
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
