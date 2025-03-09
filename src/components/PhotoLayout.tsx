
import React from 'react';
import {
  DiagonalStripsLayout,
  ClassicStripLayout,
  VerticalStripLayout,
  ElegantStripLayout,
  LargeVerticalLayout,
  BigSmallLayout,
  GridLayout,
  SimpleGridLayout,
  ClassicGridLayout,
  VerticalDuoLayout,
  HorizontalDuoLayout,
  CreativeOverlapLayout,
  FullFrameLayout
} from './layouts';

interface PhotoLayoutProps {
  photos: string[];
  layout: string;
  frameStyle: string;
  backgroundColor?: string;
}

const PhotoLayout: React.FC<PhotoLayoutProps> = ({ 
  photos, 
  layout, 
  frameStyle, 
  backgroundColor = 'white' 
}) => {
  // Mock photo data when no real photos available
  const mockPhotos = [
    '/lovable-uploads/a8f26fe4-1a18-429a-ab24-18509a4b955b.png',
    '/lovable-uploads/a8f26fe4-1a18-429a-ab24-18509a4b955b.png',
    '/lovable-uploads/a8f26fe4-1a18-429a-ab24-18509a4b955b.png',
    '/lovable-uploads/a8f26fe4-1a18-429a-ab24-18509a4b955b.png',
    '/lovable-uploads/a8f26fe4-1a18-429a-ab24-18509a4b955b.png',
  ];

  // Use captured photos if available, otherwise use mock photos
  const displayPhotos = photos.length > 0 ? photos : mockPhotos;

  // Helper function to render the correct number of photos for a layout
  const getLayoutPhotos = (maxPhotos: number) => {
    return displayPhotos.slice(0, maxPhotos);
  };

  // Determine layout category for responsive styling
  const getLayoutCategory = () => {
    // Tall and Narrow Layouts (Strip Format)
    if (['classic-strip', 'vertical-strip', 'elegant-strip', 'diagonal-strips'].includes(layout)) {
      return 'tall-narrow';
    }
    // Portrait-Oriented Layouts
    else if (['big-small'].includes(layout)) {
      return 'portrait';
    }
    // Wide Horizontal Layouts
    else if (['grid', 'simple-grid', 'classic-grid', 'horizontal-duo', 'creative-overlap', 'full-frame'].includes(layout)) {
      return 'wide-horizontal';
    }
    // Default to tall-narrow if not found
    return 'tall-narrow';
  };

  // Get proper aspect ratio class based on layout category
  const getAspectRatioClass = () => {
    const category = getLayoutCategory();
    switch (category) {
      case 'tall-narrow':
        return 'aspect-[1/2.8] md:aspect-[600/1680] max-w-[600px] mx-auto';
      case 'portrait':
        return 'aspect-[3/4] md:aspect-[1200/1500] max-w-[1100px] mx-auto';
      case 'wide-horizontal':
        return 'aspect-[16/9] md:aspect-[16/9] w-full';
      default:
        return 'aspect-[1/2.8] md:aspect-[600/1680]';
    }
  };

  // Render different layouts based on the layout prop
  const renderLayout = () => {
    switch (layout) {
      case 'diagonal-strips':
        return <DiagonalStripsLayout photos={getLayoutPhotos(3)} backgroundColor={backgroundColor} />;
      case 'classic-strip':
        return <ClassicStripLayout photos={getLayoutPhotos(4)} backgroundColor={backgroundColor} />;
      case 'vertical-strip':
        return <VerticalStripLayout photos={getLayoutPhotos(4)} backgroundColor={backgroundColor} />;
      case 'elegant-strip':
        return <ElegantStripLayout photos={getLayoutPhotos(4)} backgroundColor={backgroundColor} />;
      case 'large-vertical':
        return <LargeVerticalLayout photos={getLayoutPhotos(2)} backgroundColor={backgroundColor} />;
      case 'big-small':
        return <BigSmallLayout photos={getLayoutPhotos(3)} backgroundColor={backgroundColor} />;
      case 'grid':
        return <GridLayout photos={getLayoutPhotos(4)} backgroundColor={backgroundColor} />;
      case 'simple-grid':
        return <SimpleGridLayout photos={getLayoutPhotos(4)} backgroundColor={backgroundColor} />;
      case 'classic-grid':
        return <ClassicGridLayout photos={getLayoutPhotos(4)} backgroundColor={backgroundColor} />;
      case 'vertical-duo':
        return <VerticalDuoLayout photos={getLayoutPhotos(2)} backgroundColor={backgroundColor} />;
      case 'horizontal-duo':
        return <HorizontalDuoLayout photos={getLayoutPhotos(2)} backgroundColor={backgroundColor} />;
      case 'creative-overlap':
        return <CreativeOverlapLayout photos={getLayoutPhotos(2)} backgroundColor={backgroundColor} />;
      case 'full-frame':
        return <FullFrameLayout photos={getLayoutPhotos(1)} backgroundColor={backgroundColor} />;
      default:
        return <ElegantStripLayout photos={getLayoutPhotos(4)} backgroundColor={backgroundColor} />;
    }
  };

  return (
    <div className={`h-full w-full flex flex-col ${backgroundColor !== 'white' ? backgroundColor : 'bg-white'} ${getAspectRatioClass()}`}>
      {renderLayout()}
    </div>
  );
};

export default PhotoLayout;
