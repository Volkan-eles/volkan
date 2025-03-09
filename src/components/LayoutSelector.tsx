
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
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  // Find the selected layout option
  const selectedLayoutOption = layoutOptions.find(option => option.id === selectedLayout) || layoutOptions[0];

  // Determine layout category for responsive sizing
  const getLayoutCategory = () => {
    // Tall and Narrow Layouts (Strip Format)
    if (['diagonal-strips', 'classic-strip', 'vertical-strip', 'elegant-strip'].includes(selectedLayout)) {
      return 'tall-narrow';
    }
    // Portrait-Oriented Layouts
    else if (['big-small'].includes(selectedLayout)) {
      return 'portrait';
    }
    // Wide Horizontal Layouts
    else if (['grid', 'simple-grid', 'classic-grid', 'horizontal-duo', 'creative-overlap', 'full-frame'].includes(selectedLayout)) {
      return 'wide-horizontal';
    }
    // Large Vertical layout is a bit special
    else if (selectedLayout === 'large-vertical') {
      return 'large-vertical';
    }
    // Default to tall-narrow if not found
    return 'tall-narrow';
  };

  // Get container style classes based on layout category and device
  const getContainerClasses = () => {
    const category = getLayoutCategory();
    const baseClasses = "flex-1 bg-white rounded-lg overflow-hidden flex items-center justify-center";
    
    if (isMobile) {
      // Mobile sizing - prioritize fitting in the viewport
      switch (category) {
        case 'tall-narrow':
          return `${baseClasses} h-[500px] max-w-[280px] mx-auto`;
        case 'large-vertical':
          return `${baseClasses} h-[500px] max-w-[350px] mx-auto`;
        case 'portrait':
          return `${baseClasses} h-[450px] w-full`;
        case 'wide-horizontal':
          return `${baseClasses} h-[300px] w-full`;
        default:
          return `${baseClasses} h-[450px] w-full`;
      }
    } else {
      // Desktop/tablet sizing
      switch (category) {
        case 'tall-narrow':
          return `${baseClasses} h-[600px] md:h-[650px] lg:h-[700px] max-w-[300px] md:max-w-[320px] lg:max-w-[350px] mx-auto`;
        case 'large-vertical':
          return `${baseClasses} h-[550px] md:h-[600px] lg:h-[650px] max-w-[380px] md:max-w-[400px] lg:max-w-[420px] mx-auto`;
        case 'portrait':
          return `${baseClasses} h-[500px] md:h-[550px] lg:h-[600px] w-full`;
        case 'wide-horizontal':
          return `${baseClasses} h-[380px] md:h-[420px] lg:h-[450px] w-full`;
        default:
          return `${baseClasses} h-[500px] md:h-[550px] lg:h-[600px] w-full`;
      }
    }
  };

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
      
      {/* Photo Layout - Responsive container based on layout type */}
      <div className={getContainerClasses()}>
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
