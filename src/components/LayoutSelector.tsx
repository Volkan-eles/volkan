
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import PhotoLayout from '@/components/PhotoLayout';
import LayoutDropdown from '@/components/LayoutDropdown';
import BackgroundColorSelector from '@/components/BackgroundColorSelector';
import { useLayoutContainer } from '@/utils/layoutUtils';
import { downloadLayoutImage } from '@/utils/downloadLayout';
import { useLayoutResponsive } from '@/hooks/useLayoutResponsive';
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
  const [bgColor, setBgColor] = React.useState<string>('transparent');
  const layoutRef = useRef<HTMLDivElement>(null);
  const { getContainerClasses } = useLayoutContainer(selectedLayout);
  const { maxWidth, padding, aspectRatio } = useLayoutResponsive(selectedLayout);
  const isMobile = useIsMobile();

  const handleDownload = async () => {
    // Ensure layout has proper dimensions before downloading
    if (layoutRef.current) {
      // Make sure images are fully loaded before capturing
      const images = layoutRef.current.querySelectorAll('img');
      const imagePromises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve; // Handle error case too
        });
      });
      
      // Wait for all images to load
      await Promise.all(imagePromises);
      
      // Now proceed with download
      await downloadLayoutImage(layoutRef, selectedLayout, bgColor);
    } else {
      await downloadLayoutImage(layoutRef, selectedLayout, bgColor);
    }
  };

  // Determine if this is a strip layout
  const isStripLayout = selectedLayout.includes('strip') || selectedLayout === 'diagonal-strips';
  
  // Custom container width for strip layouts to match second image aesthetic
  const containerWidth = isStripLayout 
    ? isMobile ? '85%' : '65%' 
    : isMobile ? '100%' : maxWidth;

  return (
    <div className="w-full flex flex-col gap-2 sm:gap-1">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-1">
        <div className="flex-1">
          <LayoutDropdown 
            selectedLayout={selectedLayout}
            setSelectedLayout={setSelectedLayout}
            layoutOptions={layoutOptions}
          />
        </div>
        <div className="w-full sm:w-auto">
          <BackgroundColorSelector 
            bgColor={bgColor}
            setBgColor={setBgColor}
          />
        </div>
      </div>
      
      <div 
        className={`${getContainerClasses()} mx-auto transition-all duration-300`}
        ref={layoutRef}
        style={{
          maxWidth: containerWidth,
          width: isStripLayout ? (isMobile ? '85%' : '65%') : '100%',
          padding: '0',
          aspectRatio,
          backgroundColor: 'transparent'
        }}
      >
        <PhotoLayout 
          photos={capturedPhotos} 
          layout={selectedLayout}
          frameStyle={frameColor}
          backgroundColor={bgColor}
        />
      </div>
      
      <Button 
        className="w-full bg-[#4b30ab] hover:bg-[#5b40bb] text-white text-xs font-medium h-8 sm:h-7 mt-2 sm:mt-1"
        onClick={handleDownload}
      >
        <Download className="mr-1 h-3 w-3" />
        Download
      </Button>
    </div>
  );
};

export default LayoutSelector;
