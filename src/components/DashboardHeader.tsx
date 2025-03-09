
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MessageSquare, Bell } from 'lucide-react';

const DashboardHeader: React.FC = () => {
  return (
    <header className="h-16 border-b border-[#333] flex items-center justify-between px-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Input 
            type="text" 
            placeholder="Search Here" 
            className="bg-[#222] border-none rounded-full pl-10 pr-4 w-60 h-10 focus:ring-0 focus:ring-offset-0" 
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MessageSquare size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell size={20} />
        </Button>
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
          <img 
            src="/lovable-uploads/a8f26fe4-1a18-429a-ab24-18509a4b955b.png" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
