
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MessageSquare, Bell } from 'lucide-react';

const DashboardHeader: React.FC = () => {
  return (
    <header className="h-12 border-b border-[#333] flex items-center justify-between px-3">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      
      <div className="flex items-center gap-2">
        <div className="relative">
          <Input 
            type="text" 
            placeholder="Search Here" 
            className="bg-[#222] border-none rounded-full pl-8 pr-3 w-40 h-7 focus:ring-0 focus:ring-offset-0 text-xs" 
          />
          <Search className="absolute left-3 top-1.5 h-4 w-4 text-gray-400" />
        </div>
        <Button variant="ghost" size="icon" className="rounded-full h-7 w-7">
          <MessageSquare size={14} />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full h-7 w-7">
          <Bell size={14} />
        </Button>
        <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
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
