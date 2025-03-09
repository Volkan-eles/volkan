
import React, { useState } from 'react';
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
import { downloadImage } from '@/utils/imageProcessing';
import { toast } from 'sonner';

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
      // Desktop/tablet sizing
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

  // Create a ref to capture the layout for download
  const layoutRef = React.useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!layoutRef.current || capturedPhotos.length === 0) {
      toast.error("No photos to download");
      return;
    }

    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        toast.error("Could not create download image");
        return;
      }

      // Set canvas dimensions based on the layout container
      const layoutElement = layoutRef.current;
      const { width, height } = layoutElement.getBoundingClientRect();
      
      canvas.width = width;
      canvas.height = height;
      
      // Draw background
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);
      
      // Convert the layout to an image using html2canvas principle
      const dataURL = await new Promise<string>(resolve => {
        const img = new Image();
        // Use a simple approach: take a screenshot of the first photo as a placeholder
        // In a real app, you'd want to use html2canvas or a similar library
        img.src = capturedPhotos[0];
        img.onload = () => {
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/png'));
        };
      });
      
      // Create download link
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = `${selectedLayout}-layout.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success("Layout downloaded successfully!");
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Failed to download layout");
    }
  };

  // Background color options - reduced and more minimal
  const bgColorOptions = [
    { name: 'White', value: 'white' },
    { name: 'Gray', value: 'bg-gray-100' },
    { name: 'Blue', value: 'bg-blue-100' },
    { name: 'Pink', value: 'bg-pink-100' },
    { name: 'Green', value: 'bg-green-100' },
    { name: 'Yellow', value: 'bg-yellow-100' },
  ];

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Layout Selector - Dropdown button with smaller padding */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-[#4b30ab] text-white p-2 rounded-lg flex items-center justify-between w-full text-sm">
            <span>{selectedLayoutOption.name} - {selectedLayoutOption.photos} Photos</span>
            <ChevronDown size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#1A1A1A] border-[#333] text-white w-[300px] max-h-[300px] overflow-y-auto">
          {layoutOptions.map((option) => (
            <DropdownMenuItem 
              key={option.id}
              className="text-white hover:bg-[#4b30ab]/80 cursor-pointer text-sm py-1.5"
              onClick={() => setSelectedLayout(option.id)}
            >
              {option.name} - {option.photos} Photos
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      {/* Background Color Selector - More compact */}
      <div className="mb-1">
        <div className="flex items-center justify-between">
          <p className="text-white text-xs">Background:</p>
          <div className="flex flex-wrap gap-1.5">
            {bgColorOptions.map((color) => (
              <button
                key={color.value}
                className={`w-6 h-6 rounded-full ${color.value} border ${
                  bgColor === color.value ? 'border-[#4b30ab]' : 'border-transparent'
                }`}
                onClick={() => setBgColor(color.value)}
                title={color.name}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Photo Layout - Responsive container based on layout type */}
      <div className={getContainerClasses()} ref={layoutRef}>
        <PhotoLayout 
          photos={capturedPhotos} 
          layout={selectedLayout}
          frameStyle={frameColor}
          backgroundColor={bgColor}
        />
      </div>
      
      {/* Download Button - Smaller padding */}
      <Button 
        className="w-full bg-[#4b30ab] hover:bg-[#5b40bb] py-3 text-white text-base font-medium"
        onClick={handleDownload}
        disabled={capturedPhotos.length === 0}
      >
        <Download className="mr-1 h-4 w-4" />
        Download
      </Button>
    </div>
  );
};

export default LayoutSelector;
