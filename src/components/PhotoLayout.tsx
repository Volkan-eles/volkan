import React from 'react';
import { useTextElements } from '@/hooks/useTextElements';
import TextLayer from '@/components/TextLayer';
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
  backgroundColor = 'transparent' 
}) => {
  const { textElements, addTextElement, updateTextElement, deleteTextElement } = useTextElements();
  
  const mockPhotos = [
    '/lovable-uploads/a8f26fe4-1a18-429a-ab24-18509a4b955b.png',
    '/lovable-uploads/a8f26fe4-1a18-429a-ab24-18509a4b955b.png',
    '/lovable-uploads/a8f26fe4-1a18-429a-ab24-18509a4b955b.png',
    '/lovable-uploads/a8f26fe4-1a18-429a-ab24-18509a4b955b.png',
    '/lovable-uploads/a8f26fe4-1a18-429a-ab24-18509a4b955b.png',
  ];

  const displayPhotos = photos.length > 0 ? photos : mockPhotos;

  const [failedImages, setFailedImages] = React.useState<Set<number>>(new Set());

  const handleImageError = (index: number) => {
    setFailedImages(prev => new Set(prev).add(index));
  };

  const renderOptimizedImage = (src: string, index: number, alt: string, className: string) => (
    <img 
      src={failedImages.has(index) ? '/placeholder.svg' : src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`${className} transition-opacity duration-300 ease-in-out`}
      onError={() => handleImageError(index)}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  );

  const getLayoutPhotos = (maxPhotos: number) => {
    return displayPhotos.slice(0, maxPhotos);
  };

  const getCurrentDate = () => {
    const date = new Date();
    return date.toISOString().split('T')[0].replace(/-/g, '.');
  };

  const getLayoutCategory = () => {
    if (['classic-strip', 'vertical-strip', 'elegant-strip', 'diagonal-strips'].includes(layout)) {
      return 'tall-narrow';
    }
    else if (['big-small'].includes(layout)) {
      return 'portrait';
    }
    else if (['grid', 'simple-grid', 'classic-grid', 'horizontal-duo', 'creative-overlap', 'full-frame'].includes(layout)) {
      return 'wide-horizontal';
    }
    return 'tall-narrow';
  };

  const getAspectRatioClass = () => {
    const category = getLayoutCategory();
    switch (category) {
      case 'tall-narrow':
        return 'aspect-[1/2.3] sm:aspect-[1/2] md:aspect-[600/1380] max-w-[450px] w-full mx-auto';
      case 'portrait':
        return 'aspect-[3/4] sm:aspect-[4/5] md:aspect-[900/1200] max-w-[800px] w-full mx-auto';
      case 'wide-horizontal':
        return 'aspect-[1/1] sm:aspect-[4/3] md:aspect-[16/9] w-full max-w-[800px] mx-auto';
      default:
        return 'aspect-[1/2.3] sm:aspect-[1/2] md:aspect-[600/1380]';
    }
  };

  const getBackgroundColorStyle = () => {
    if (backgroundColor === 'white' || backgroundColor === 'transparent') {
      return 'bg-transparent';
    }
    
    if (backgroundColor.startsWith('bg-')) {
      return backgroundColor;
    }
    
    return backgroundColor;
  };

  const getTextColor = () => {
    if (backgroundColor.includes('800') || 
        backgroundColor.includes('900') || 
        backgroundColor === 'bg-black' || 
        backgroundColor.includes('500')) {
      return 'text-white';
    }
    return 'text-black';
  };

  const renderLayout = () => {
    const dateString = getCurrentDate();
    const textColor = getTextColor();
    const layoutPhotos = getLayoutPhotos(4);

    const imageProps = {
      photos: layoutPhotos,
      renderImage: renderOptimizedImage,
      backgroundColor,
      dateString,
      textColor,
      textElements,
      onUpdateText: updateTextElement,
      onDeleteText: deleteTextElement,
    };

    switch (layout) {
      case 'diagonal-strips':
        return <DiagonalStripsLayout {...imageProps} />;
      case 'classic-strip':
        return <ClassicStripLayout {...imageProps} />;
      case 'vertical-strip':
        return <VerticalStripLayout {...imageProps} />;
      case 'elegant-strip':
        return <ElegantStripLayout {...imageProps} />;
      case 'large-vertical':
        return <LargeVerticalLayout {...imageProps} />;
      case 'big-small':
        return <BigSmallLayout {...imageProps} />;
      case 'grid':
        return <GridLayout {...imageProps} />;
      case 'simple-grid':
        return <SimpleGridLayout {...imageProps} />;
      case 'classic-grid':
        return <ClassicGridLayout {...imageProps} />;
      case 'vertical-duo':
        return <VerticalDuoLayout {...imageProps} />;
      case 'horizontal-duo':
        return <HorizontalDuoLayout {...imageProps} />;
      case 'creative-overlap':
        return <CreativeOverlapLayout {...imageProps} />;
      case 'full-frame':
        return <FullFrameLayout {...imageProps} />;
      default:
        return <ElegantStripLayout {...imageProps} />;
    }
  };

  return (
    <div className={`h-full w-full flex flex-col relative ${getBackgroundColorStyle()} ${getAspectRatioClass()}`}>
      {renderLayout()}
      <TextLayer
        textElements={textElements}
        onUpdate={updateTextElement}
        onDelete={deleteTextElement}
      />
    </div>
  );
};

export default PhotoLayout;
