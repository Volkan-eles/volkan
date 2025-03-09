
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MessageSquare, Bell } from 'lucide-react';

const DashboardHeader: React.FC = () => {
  return (
    <header className="h-14 border-b border-[#333] flex items-center justify-between px-4">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      
      <div className="flex items-center gap-3">
        <div className="relative">
          <Input 
            type="text" 
            placeholder="Search Here" 
            className="bg-[#222] border-none rounded-full pl-9 pr-3 w-48 h-8 focus:ring-0 focus:ring-offset-0 text-sm" 
          />
          <Search className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
        </div>
        <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
          <MessageSquare size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
          <Bell size={16} />
        </Button>
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
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
