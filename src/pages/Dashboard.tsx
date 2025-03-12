
import React from 'react';
import { SidebarProvider, Sidebar, SidebarRail } from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardContent from '@/components/DashboardContent';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#0F0F1A] to-[#1A1A2E] text-white overflow-hidden">
      <SidebarProvider>
        <Sidebar 
          className="w-[120px] md:w-[140px] bg-[#1A1A1A]/90 backdrop-blur-md border-r border-[#333] shadow-xl transition-all duration-300"
          collapsible="icon"
        >
          <DashboardSidebar />
          <SidebarRail />
        </Sidebar>

        <div className="flex-1 flex flex-col bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm animate-fade-in">
          <DashboardHeader />
          <DashboardContent />
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
