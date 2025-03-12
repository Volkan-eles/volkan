
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Layout } from 'lucide-react';
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
  const [isDownloading, setIsDownloading] = React.useState<boolean>(false);
  const layoutRef = useRef<HTMLDivElement>(null);
  const { getContainerClasses } = useLayoutContainer(selectedLayout);
  const { maxWidth, padding, aspectRatio } = useLayoutResponsive(selectedLayout);
  const isMobile = useIsMobile();

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await downloadLayoutImage(layoutRef, selectedLayout, bgColor);
    } finally {
      setIsDownloading(false);
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
        <div className="flex-1 relative">
          <span className="absolute -top-4 left-0 text-xs text-white/60 font-medium animate-fade-in">Layout</span>
          <LayoutDropdown 
            selectedLayout={selectedLayout}
            setSelectedLayout={setSelectedLayout}
            layoutOptions={layoutOptions}
          />
        </div>
        <div className="w-full sm:w-auto relative">
          <BackgroundColorSelector 
            bgColor={bgColor}
            setBgColor={setBgColor}
          />
        </div>
      </div>
      
      <div 
        className={`${getContainerClasses()} mx-auto transition-all duration-300 high-quality-container relative group backdrop-blur-sm animate-fade-in`}
        ref={layoutRef}
        style={{
          maxWidth: containerWidth,
          width: isStripLayout ? (isMobile ? '85%' : '65%') : '100%',
          padding: '0',
          aspectRatio,
          backgroundColor: 'transparent',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <PhotoLayout 
          photos={capturedPhotos} 
          layout={selectedLayout}
          frameStyle={frameColor}
          backgroundColor={bgColor}
        />
        
        {/* Enhanced glassmorphic hover effect with gradient border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-violet-500/30 group-hover:to-fuchsia-500/30 transition-all duration-300 pointer-events-none rounded-md group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>
      </div>
      
      <Button 
        className={`w-full transition-all duration-300 relative overflow-hidden h-8 sm:h-7 mt-2 sm:mt-1 text-xs font-medium shadow-lg ${
          isDownloading 
            ? 'bg-gradient-to-r from-violet-600/90 via-indigo-600/90 to-fuchsia-600/90 animate-pulse-gentle' 
            : 'bg-gradient-to-r from-violet-500 via-indigo-500 to-fuchsia-500 hover:from-violet-600 hover:via-indigo-600 hover:to-fuchsia-600'
        } text-white shadow-md hover:shadow-lg`}
        onClick={handleDownload}
        disabled={isDownloading}
        aria-label="Download high quality layout"
      >
        {isDownloading ? (
          <>
            <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
            <span className="animate-pulse">Processing...</span>
          </>
        ) : (
          <>
            <Download className="mr-1 h-3 w-3" />
            Download High Quality
          </>
        )}
      </Button>
    </div>
  );
};

export default LayoutSelector;
