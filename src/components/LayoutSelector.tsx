
import React, { useState, useRef } from 'react';
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
import { toast } from 'sonner';
import html2canvas from 'html2canvas';

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
  const [bgColor, setBgColor] = useState<string>('white');
  const selectedLayoutOption = layoutOptions.find(option => option.id === selectedLayout) || layoutOptions[0];
  const layoutRef = useRef<HTMLDivElement>(null);

  const getLayoutCategory = () => {
    if (['diagonal-strips', 'classic-strip', 'vertical-strip', 'elegant-strip'].includes(selectedLayout)) {
      return 'tall-narrow';
    }
    else if (['big-small'].includes(selectedLayout)) {
      return 'portrait';
    }
    else if (['grid', 'simple-grid', 'classic-grid', 'horizontal-duo', 'creative-overlap', 'full-frame'].includes(selectedLayout)) {
      return 'wide-horizontal';
    }
    else if (selectedLayout === 'large-vertical') {
      return 'large-vertical';
    }
    return 'tall-narrow';
  };

  const getContainerClasses = () => {
    const category = getLayoutCategory();
    const baseClasses = "flex-1 bg-white rounded-lg overflow-hidden flex items-center justify-center";
    
    if (isMobile) {
      switch (category) {
        case 'tall-narrow':
          return `${baseClasses} h-[450px] max-w-[250px] mx-auto`;
        case 'large-vertical':
          return `${baseClasses} h-[450px] max-w-[320px] mx-auto`;
        case 'portrait':
          return `${baseClasses} h-[400px] w-full`;
        case 'wide-horizontal':
          return `${baseClasses} h-[280px] w-full`;
        default:
          return `${baseClasses} h-[400px] w-full`;
      }
    } else {
      switch (category) {
        case 'tall-narrow':
          return `${baseClasses} h-[520px] md:h-[580px] lg:h-[620px] max-w-[280px] md:max-w-[300px] lg:max-w-[320px] mx-auto`;
        case 'large-vertical':
          return `${baseClasses} h-[500px] md:h-[550px] lg:h-[600px] max-w-[350px] md:max-w-[370px] lg:max-w-[390px] mx-auto`;
        case 'portrait':
          return `${baseClasses} h-[450px] md:h-[500px] lg:h-[550px] w-full`;
        case 'wide-horizontal':
          return `${baseClasses} h-[350px] md:h-[380px] lg:h-[420px] w-full`;
        default:
          return `${baseClasses} h-[450px] md:h-[500px] lg:h-[550px] w-full`;
      }
    }
  };

  const handleDownload = async () => {
    if (!layoutRef.current) {
      toast.error("Layout component not found");
      return;
    }

    try {
      toast.loading("Preparing download...");
      
      const canvas = await html2canvas(layoutRef.current, {
        backgroundColor: bgColor === 'white' ? '#ffffff' : null,
        useCORS: true,
        scale: 2, // Higher quality
        logging: false, // Reduce console noise
        allowTaint: true,
      });
      
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `photo-layout-${selectedLayout}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.dismiss();
      toast.success("Layout downloaded successfully!");
    } catch (error) {
      console.error("Download error:", error);
      toast.dismiss();
      toast.error("Failed to download layout");
    }
  };

  // Simplified background color options
  const bgColorOptions = [
    { name: 'White', value: 'white' },
    { name: 'Gray', value: 'bg-gray-50' },
    { name: 'Blue', value: 'bg-blue-50' },
    { name: 'Pink', value: 'bg-pink-50' },
  ];

  return (
    <div className="w-full flex flex-col gap-1.5">
      <div className="flex items-center gap-1.5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-[#4b30ab] text-white p-1 rounded-md flex items-center justify-between w-full text-xs h-8">
              <span className="truncate">{selectedLayoutOption.name}</span>
              <ChevronDown size={12} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#1A1A1A] border-[#333] text-white w-[230px] max-h-[240px] overflow-y-auto">
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
        
        <div className="flex items-center gap-1 bg-black/10 rounded-md p-1 h-8">
          <span className="text-white text-xs ml-1">BG:</span>
          <div className="flex gap-1">
            {bgColorOptions.map((color) => (
              <button
                key={color.value}
                className={`w-4 h-4 rounded-sm ${color.value} ${
                  bgColor === color.value ? 'ring-1 ring-[#4b30ab]' : ''
                }`}
                onClick={() => setBgColor(color.value)}
                title={color.name}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className={getContainerClasses()} ref={layoutRef}>
        <PhotoLayout 
          photos={capturedPhotos} 
          layout={selectedLayout}
          frameStyle={frameColor}
          backgroundColor={bgColor}
        />
      </div>
      
      <Button 
        className="w-full bg-[#4b30ab] hover:bg-[#5b40bb] text-white text-xs font-medium h-8 mt-1"
        onClick={handleDownload}
      >
        <Download className="mr-1 h-3 w-3" />
        Download
      </Button>
    </div>
  );
};

export default LayoutSelector;
