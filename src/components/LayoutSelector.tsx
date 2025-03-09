
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ChevronDown } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PhotoLayout from '@/components/PhotoLayout';

interface LayoutSelectorProps {
  selectedLayout: string;
  setSelectedLayout: (layout: string) => void;
  layoutOptions: Array<{ id: string; name: string; photos: number }>;
  capturedPhotos: string[];
  frameColor: string;
}

const LayoutSelector: React.FC<LayoutSelectorProps> = ({ 
  selectedLayout, 
  setSelectedLayout, 
  layoutOptions, 
  capturedPhotos,
  frameColor
}) => {
  // Find the selected layout option
  const selectedLayoutOption = layoutOptions.find(option => option.id === selectedLayout) || layoutOptions[0];

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Layout Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-[#4b30ab] text-white p-3 rounded-lg flex items-center justify-between w-full">
            <span>{selectedLayoutOption.name} - {selectedLayoutOption.photos} Photos</span>
            <ChevronDown size={20} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#1A1A1A] border-[#333] text-white w-[350px]">
          {layoutOptions.map((option) => (
            <DropdownMenuItem 
              key={option.id}
              className="text-white hover:bg-[#4b30ab]/80 cursor-pointer"
              onClick={() => setSelectedLayout(option.id)}
            >
              {option.name} - {option.photos} Photos
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      {/* Photo Layout - Make it taller for better proportion */}
      <div className="flex-1 bg-white rounded-lg overflow-hidden h-[500px] md:h-[550px]">
        <PhotoLayout 
          photos={capturedPhotos} 
          layout={selectedLayout}
          frameStyle={frameColor}
        />
      </div>
      
      {/* Download Button */}
      <Button className="w-full bg-[#4b30ab] hover:bg-[#5b40bb] py-6 text-white text-lg font-medium">
        <Download className="mr-2 h-5 w-5" />
        Download
      </Button>
    </div>
  );
};

export default LayoutSelector;
