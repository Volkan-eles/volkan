
import React, { useState } from 'react';
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
import TextEditor, { TextElement } from './TextEditor/TextEditor';

interface PhotoLayoutProps {
  photos: string[];
  layout: string;
  frameStyle: string;
  backgroundColor?: string;
}

// Define getCurrentDate function before it's used
const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0].replace(/-/g, '.');
};

const PhotoLayout: React.FC<PhotoLayoutProps> = ({ 
  photos, 
  layout, 
  frameStyle, 
  backgroundColor = 'white' 
}) => {
  const [texts, setTexts] = useState<TextElement[]>([
    {
      id: 'default-1',
      text: 'MEMORIES',
      fontSize: 16,
      position: 0
    },
    {
      id: 'default-2',
      text: getCurrentDate(),
      fontSize: 12,
      position: 1
    }
  ]);

  const handleAddText = () => {
    const newText: TextElement = {
      id: `text-${Date.now()}`,
      text: 'New Text',
      fontSize: 14,
      position: texts.length
    };
    setTexts([...texts, newText]);
  };

  const handleUpdateText = (id: string, updates: Partial<TextElement>) => {
    setTexts(texts.map(text => 
      text.id === id ? { ...text, ...updates } : text
    ));
  };

  const handleDeleteText = (id: string) => {
    setTexts(texts.filter(text => text.id !== id));
  };

  const handleMoveText = (id: string, direction: 'up' | 'down') => {
    const index = texts.findIndex(t => t.id === id);
    if (
      (direction === 'up' && index === 0) || 
      (direction === 'down' && index === texts.length - 1)
    ) {
      return;
    }

    const newTexts = [...texts];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    [newTexts[index], newTexts[newIndex]] = [newTexts[newIndex], newTexts[index]];
    
    // Update positions
    newTexts.forEach((text, i) => {
      text.position = i;
    });
    
    setTexts(newTexts);
  };

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

  // Apply the background color class based on the provided backgroundColor prop
  const getBackgroundColorStyle = () => {
    if (backgroundColor === 'white') {
      return 'bg-white';
    }
    
    // If it's one of our tailwind bg classes, return it directly
    if (backgroundColor.startsWith('bg-')) {
      return backgroundColor;
    }
    
    // Otherwise, treat it as a color value
    return backgroundColor;
  };

  // Get text color based on background darkness
  const getTextColor = () => {
    if (backgroundColor.includes('800') || 
        backgroundColor.includes('900') || 
        backgroundColor === 'bg-black' || 
        backgroundColor.includes('500')) {
      return 'text-white';
    }
    return 'text-black';
  };

  // Render different layouts based on the layout prop
  const renderLayout = () => {
    const commonProps = {
      photos: getLayoutPhotos(4),
      backgroundColor,
      dateString: getCurrentDate(),
      textColor: getTextColor(),
      texts
    };

    switch (layout) {
      case 'diagonal-strips':
        return <DiagonalStripsLayout {...commonProps} photos={getLayoutPhotos(3)} />;
      case 'classic-strip':
        return <ClassicStripLayout {...commonProps} />;
      case 'vertical-strip':
        return <VerticalStripLayout {...commonProps} />;
      case 'elegant-strip':
        return <ElegantStripLayout {...commonProps} />;
      case 'large-vertical':
        return <LargeVerticalLayout {...commonProps} photos={getLayoutPhotos(2)} />;
      case 'big-small':
        return <BigSmallLayout {...commonProps} photos={getLayoutPhotos(3)} />;
      case 'grid':
        return <GridLayout {...commonProps} />;
      case 'simple-grid':
        return <SimpleGridLayout {...commonProps} />;
      case 'classic-grid':
        return <ClassicGridLayout {...commonProps} />;
      case 'vertical-duo':
        return <VerticalDuoLayout {...commonProps} photos={getLayoutPhotos(2)} />;
      case 'horizontal-duo':
        return <HorizontalDuoLayout {...commonProps} photos={getLayoutPhotos(2)} />;
      case 'creative-overlap':
        return <CreativeOverlapLayout {...commonProps} photos={getLayoutPhotos(2)} />;
      case 'full-frame':
        return <FullFrameLayout {...commonProps} photos={getLayoutPhotos(1)} />;
      default:
        return <ElegantStripLayout {...commonProps} />;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <TextEditor
        texts={texts}
        onAddText={handleAddText}
        onUpdateText={handleUpdateText}
        onDeleteText={handleDeleteText}
        onMoveText={handleMoveText}
      />
      <div className={`h-full w-full flex flex-col ${getBackgroundColorStyle()} ${getAspectRatioClass()}`}>
        {renderLayout()}
      </div>
    </div>
  );
};

export default PhotoLayout;
