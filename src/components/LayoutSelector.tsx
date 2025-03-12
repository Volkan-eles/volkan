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
  layoutOptions: Array<{
    id: string;
    name: string;
    photos: number;
  }>;
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
  const {
    getContainerClasses
  } = useLayoutContainer(selectedLayout);
  const {
    maxWidth,
    padding,
    aspectRatio
  } = useLayoutResponsive(selectedLayout);
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
  const containerWidth = isStripLayout ? isMobile ? '85%' : '65%' : isMobile ? '100%' : maxWidth;
  return;
};
export default LayoutSelector;