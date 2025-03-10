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
          return `${baseClasses} h-[400px] max-w-[220px] mx-auto`;
        case 'large-vertical':
          return `${baseClasses} h-[400px] max-w-[280px] mx-auto`;
        case 'portrait':
          return `${baseClasses} h-[350px] w-full`;
        case 'wide-horizontal':
          return `${baseClasses} h-[250px] w-full`;
        default:
          return `${baseClasses} h-[350px] w-full`;
      }
    } else {
      switch (category) {
        case 'tall-narrow':
          return `${baseClasses} h-[480px] md:h-[520px] lg:h-[560px] max-w-[260px] md:max-w-[280px] lg:max-w-[300px] mx-auto`;
        case 'large-vertical':
          return `${baseClasses} h-[460px] md:h-[500px] lg:h-[540px] max-w-[320px] md:max-w-[340px] lg:max-w-[360px] mx-auto`;
        case 'portrait':
          return `${baseClasses} h-[420px] md:h-[460px] lg:h-[500px] w-full`;
        case 'wide-horizontal':
          return `${baseClasses} h-[320px] md:h-[350px] lg:h-[380px] w-full`;
        default:
          return `${baseClasses} h-[420px] md:h-[460px] lg:h-[500px] w-full`;
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

  const bgColorOptions = [
    { name: 'White', value: 'white' },
    { name: 'Light Gray', value: 'bg-gray-50' },
    { name: 'Sky Blue', value: 'bg-blue-50' },
    { name: 'Light Pink', value: 'bg-pink-50' },
    { name: 'Soft Purple', value: 'bg-purple-50' },
    { name: 'Soft Yellow', value: 'bg-yellow-50' },
    { name: 'Mint Green', value: 'bg-green-50' },
    { name: 'Lavender', value: 'bg-indigo-50' },
    { name: 'Peach', value: 'bg-orange-50' },
    { name: 'Teal', value: 'bg-teal-50' },
    { name: 'Rose', value: 'bg-rose-50' },
    { name: 'Amber', value: 'bg-amber-50' },
    { name: 'Lime', value: 'bg-lime-50' },
    { name: 'Emerald', value: 'bg-emerald-50' },
    { name: 'Cyan', value: 'bg-cyan-50' },
    { name: 'Violet', value: 'bg-violet-50' },
    { name: 'Fuchsia', value: 'bg-fuchsia-50' },
    { name: 'Slate', value: 'bg-slate-50' },
    { name: 'Zinc', value: 'bg-zinc-50' },
    { name: 'Stone', value: 'bg-stone-50' },
    { name: 'Red', value: 'bg-red-50' },
  ];

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="flex items-center gap-1">
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
        
        <div className="flex items-center gap-1 bg-black/10 rounded-md p-0.5 h-7">
          <span className="text-white text-xs ml-1">BG:</span>
          <div className="flex flex-wrap gap-1 max-w-[140px] overflow-x-auto scrollbar-none">
            {bgColorOptions.slice(0, 10).map((color) => (
              <button
                key={color.value}
                className={`w-3 h-3 rounded-sm ${color.value} ${
                  bgColor === color.value ? 'ring-1 ring-[#4b30ab]' : ''
                }`}
                onClick={() => setBgColor(color.value)}
                title={color.name}
              />
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-3 h-3 rounded-sm bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center text-white text-[8px] font-bold">
                  +
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1A1A1A] border-[#333] text-white p-1 w-[180px] flex flex-wrap gap-1">
                {bgColorOptions.slice(10).map((color) => (
                  <button
                    key={color.value}
                    className={`w-5 h-5 rounded-sm ${color.value} ${
                      bgColor === color.value ? 'ring-1 ring-[#4b30ab]' : ''
                    }`}
                    onClick={() => setBgColor(color.value)}
                    title={color.name}
                  />
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
        className="w-full bg-[#4b30ab] hover:bg-[#5b40bb] text-white text-xs font-medium h-7 mt-1"
        onClick={handleDownload}
      >
        <Download className="mr-1 h-3 w-3" />
        Download
      </Button>
    </div>
  );
};

export default LayoutSelector;
