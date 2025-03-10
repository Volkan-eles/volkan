
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import PhotoLayout from '@/components/PhotoLayout';
import LayoutDropdown from '@/components/LayoutDropdown';
import BackgroundColorSelector from '@/components/BackgroundColorSelector';
import { useLayoutContainer } from '@/utils/layoutUtils';
import { downloadLayoutImage } from '@/utils/downloadLayout';

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
  const [bgColor, setBgColor] = useState<string>('white');
  const layoutRef = useRef<HTMLDivElement>(null);
  const { getContainerClasses } = useLayoutContainer(selectedLayout);

  const handleDownload = async () => {
    await downloadLayoutImage(layoutRef, selectedLayout, bgColor);
  };

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <LayoutDropdown 
          selectedLayout={selectedLayout}
          setSelectedLayout={setSelectedLayout}
          layoutOptions={layoutOptions}
        />
        
        <BackgroundColorSelector 
          bgColor={bgColor}
          setBgColor={setBgColor}
        />
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
