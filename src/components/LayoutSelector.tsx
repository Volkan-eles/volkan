
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Download, Share2 } from 'lucide-react';
import PhotoLayout from './PhotoLayout';
import { toast } from 'sonner';
import html2canvas from 'html2canvas';

interface LayoutOption {
  id: string;
  name: string;
  photos: number;
}

interface LayoutSelectorProps {
  selectedLayout: string;
  setSelectedLayout: (layout: string) => void;
  layoutOptions: LayoutOption[];
  capturedPhotos: string[];
  frameColor: string;
  overlayImage: HTMLImageElement | null;
}

const LayoutSelector: React.FC<LayoutSelectorProps> = ({
  selectedLayout,
  setSelectedLayout,
  layoutOptions,
  capturedPhotos,
  frameColor,
  overlayImage
}) => {
  const handleDownload = async () => {
    const layoutElement = document.getElementById('photo-layout');
    if (!layoutElement) return;
    
    try {
      const canvas = await html2canvas(layoutElement, {
        backgroundColor: null,
        scale: 2, // Higher resolution
      });
      
      const link = document.createElement('a');
      link.download = `kpop-photo-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      
      toast.success('Photo saved to your device');
    } catch (error) {
      console.error('Error downloading photo:', error);
      toast.error('Failed to download photo');
    }
  };
  
  return (
    <div className="bg-[#1A1A1A] rounded-lg p-2 flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium">Choose Layout</div>
        {capturedPhotos.length > 0 && (
          <Button
            variant="outline" 
            size="icon"
            onClick={handleDownload}
            className="h-7 w-7 bg-[#222] border-[#333] text-gray-300 hover:text-white"
          >
            <Download size={14} />
          </Button>
        )}
      </div>
      
      <Separator className="my-2 bg-[#333]" />
      
      <div className="grid grid-cols-2 gap-1 mb-2">
        {layoutOptions.slice(0, 6).map((layout) => (
          <button
            key={layout.id}
            onClick={() => setSelectedLayout(layout.id)}
            className={`p-1 text-xs rounded ${selectedLayout === layout.id ? 'bg-[#333]' : 'bg-[#222]'} hover:bg-[#333]`}
          >
            {layout.name}
          </button>
        ))}
      </div>
      
      <div className="flex-1 relative bg-[#0A0A0A] rounded overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[90%] h-[90%]" id="photo-layout">
            <PhotoLayout
              layout={selectedLayout}
              photos={capturedPhotos}
              frameColor={frameColor}
              overlayImage={overlayImage}
            />
          </div>
        </div>
        
        {capturedPhotos.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-center p-4">
            <p className="text-gray-500 text-sm">
              Take photos with your favorite K-pop idol to create your custom photo strip
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LayoutSelector;
