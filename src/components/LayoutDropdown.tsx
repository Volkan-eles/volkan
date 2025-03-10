
import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';

interface LayoutDropdownProps {
  selectedLayout: string;
  setSelectedLayout: (layout: string) => void;
  layoutOptions: Array<{ id: string; name: string; photos: number }>;
}

const LayoutDropdown: React.FC<LayoutDropdownProps> = ({
  selectedLayout,
  setSelectedLayout,
  layoutOptions,
}) => {
  const selectedLayoutOption = layoutOptions.find(option => option.id === selectedLayout) || layoutOptions[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-[#4b30ab] text-white p-1 rounded-md flex items-center justify-between w-full text-xs h-7">
          <span className="truncate">{selectedLayoutOption.name}</span>
          <ChevronDown size={12} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#1A1A1A] border-[#333] text-white w-[220px] max-h-[220px] overflow-y-auto">
        {layoutOptions.map((option) => (
          <DropdownMenuItem 
            key={option.id}
            className="text-white hover:bg-[#4b30ab]/80 cursor-pointer text-xs py-1"
            onClick={() => setSelectedLayout(option.id)}
          >
            {option.name} - {option.photos} Photos
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LayoutDropdown;
