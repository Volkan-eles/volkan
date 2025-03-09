
import React from 'react';
import { Download, MoreHorizontal } from 'lucide-react';

interface PhotoLayoutProps {
  photos: string[];
  layout: string;
  frameStyle: string;
}

const PhotoLayout: React.FC<PhotoLayoutProps> = ({ photos, layout, frameStyle }) => {
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
        return 'aspect-[1/3] md:aspect-[600/1800] max-w-[600px] mx-auto';
      case 'portrait':
        return 'aspect-[3/4] md:aspect-[1200/1600] max-w-[1200px] mx-auto';
      case 'wide-horizontal':
        return 'aspect-[16/10] md:aspect-[16/10] w-full';
      default:
        return 'aspect-[1/3] md:aspect-[600/1800]';
    }
  };

  // Render different layouts based on the layout prop
  const renderLayout = () => {
    switch (layout) {
      case 'diagonal-strips':
        return <DiagonalStripsLayout photos={getLayoutPhotos(3)} />;
      case 'classic-strip':
        return <ClassicStripLayout photos={getLayoutPhotos(4)} />;
      case 'vertical-strip':
        return <VerticalStripLayout photos={getLayoutPhotos(4)} />;
      case 'elegant-strip':
        return <ElegantStripLayout photos={getLayoutPhotos(4)} />;
      case 'large-vertical':
        return <LargeVerticalLayout photos={getLayoutPhotos(2)} />;
      case 'big-small':
        return <BigSmallLayout photos={getLayoutPhotos(3)} />;
      case 'grid':
        return <GridLayout photos={getLayoutPhotos(4)} />;
      case 'simple-grid':
        return <SimpleGridLayout photos={getLayoutPhotos(4)} />;
      case 'classic-grid':
        return <ClassicGridLayout photos={getLayoutPhotos(4)} />;
      case 'vertical-duo':
        return <VerticalDuoLayout photos={getLayoutPhotos(2)} />;
      case 'horizontal-duo':
        return <HorizontalDuoLayout photos={getLayoutPhotos(2)} />;
      case 'creative-overlap':
        return <CreativeOverlapLayout photos={getLayoutPhotos(2)} />;
      case 'full-frame':
        return <FullFrameLayout photos={getLayoutPhotos(1)} />;
      default:
        return <ElegantStripLayout photos={getLayoutPhotos(4)} />;
    }
  };

  return (
    <div className={`h-full w-full flex flex-col bg-white ${getAspectRatioClass()}`}>
      {renderLayout()}
    </div>
  );
};

// Diagonal Strips Layout (3 Photos)
const DiagonalStripsLayout = ({ photos }: { photos: string[] }) => (
  <div className="flex-1 flex flex-col p-3 gap-3">
    {/* First photo - top right */}
    <div className="relative h-1/3 ml-auto w-4/5">
      <img 
        src={photos[0] || ''} 
        alt="Photo 1" 
        className="w-full h-full object-cover rounded-md" 
      />
      <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
        <MoreHorizontal size={16} />
      </button>
    </div>
    
    {/* Second photo - center */}
    <div className="relative h-1/3 w-4/5 mx-auto">
      <img 
        src={photos[1] || ''} 
        alt="Photo 2" 
        className="w-full h-full object-cover rounded-md" 
      />
      <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
        <MoreHorizontal size={16} />
      </button>
    </div>
    
    {/* Third photo - bottom left */}
    <div className="relative h-1/3 w-4/5 mr-auto">
      <img 
        src={photos[2] || ''} 
        alt="Photo 3" 
        className="w-full h-full object-cover rounded-md" 
      />
      <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
        <MoreHorizontal size={16} />
      </button>
    </div>
    
    {/* Text placement at bottom */}
    <div className="text-center mt-2">
      <p className="text-black text-sm font-medium">MEMORIES</p>
      <p className="text-black text-xs">2024.06.10</p>
    </div>
  </div>
);

// Classic Strip Layout (4 Photos)
const ClassicStripLayout = ({ photos }: { photos: string[] }) => (
  <div className="flex-1 flex flex-col p-3 gap-3">
    {photos.map((photo, index) => (
      <div key={index} className="relative h-1/4">
        <img 
          src={photo} 
          alt={`Photo ${index + 1}`} 
          className="w-full h-full object-cover rounded-md" 
        />
        <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
          <MoreHorizontal size={16} />
        </button>
      </div>
    ))}
    
    {/* Text placement at bottom */}
    <div className="text-center mt-2">
      <p className="text-black text-sm font-medium">MEMORIES</p>
      <p className="text-black text-xs">2024.06.10</p>
    </div>
  </div>
);

// Vertical Strip Layout (4 Photos)
const VerticalStripLayout = ({ photos }: { photos: string[] }) => (
  <div className="flex-1 p-3">
    <div className="h-full flex flex-col gap-3">
      {photos.map((photo, index) => (
        <div key={index} className="relative h-1/4">
          <img 
            src={photo} 
            alt={`Photo ${index + 1}`} 
            className="w-full h-full object-cover rounded-md" 
          />
          <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
            <MoreHorizontal size={16} />
          </button>
        </div>
      ))}
      
      {/* Text placement at bottom */}
      <div className="text-center mt-2">
        <p className="text-black text-sm font-medium">MEMORIES</p>
        <p className="text-black text-xs">2024.06.10</p>
      </div>
    </div>
  </div>
);

// Elegant Strip Layout (4 Photos)
const ElegantStripLayout = ({ photos }: { photos: string[] }) => (
  <div className="flex-1 flex flex-col p-5 gap-4">
    {/* Photo 1, 2, 3 */}
    {photos.slice(0, 3).map((photo, index) => (
      <div key={index} className="relative h-1/4">
        <img 
          src={photo} 
          alt={`Photo ${index + 1}`} 
          className="w-full h-full object-cover rounded-md" 
        />
        <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
          <MoreHorizontal size={16} />
        </button>
      </div>
    ))}
    
    {/* Text Area */}
    <div className="h-1/4 flex flex-col items-center justify-center">
      <h2 className="text-black text-2xl uppercase font-semibold">LIVE IN</h2>
      <h3 className="text-black text-3xl italic mt-1">THE moment</h3>
      <p className="text-black text-xs mt-2">2024.06.10</p>
    </div>
  </div>
);

// Large Vertical Layout (2 Photos)
const LargeVerticalLayout = ({ photos }: { photos: string[] }) => (
  <div className="flex-1 p-3">
    <div className="h-full flex flex-col gap-3">
      {photos.map((photo, index) => (
        <div key={index} className="relative h-1/2">
          <img 
            src={photo} 
            alt={`Photo ${index + 1}`} 
            className="w-full h-full object-cover rounded-md" 
          />
          <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
            <MoreHorizontal size={16} />
          </button>
        </div>
      ))}
      
      {/* Text placement at bottom */}
      <div className="text-center mt-2">
        <p className="text-black text-sm font-medium">MEMORIES</p>
        <p className="text-black text-xs">2024.06.10</p>
      </div>
    </div>
  </div>
);

// Big & Small Layout (3 Photos)
const BigSmallLayout = ({ photos }: { photos: string[] }) => (
  <div className="flex-1 p-3">
    {/* Big photo (top) */}
    <div className="relative h-1/2 mb-3">
      <img 
        src={photos[0] || ''} 
        alt="Photo 1" 
        className="w-full h-full object-cover rounded-md" 
      />
      <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
        <MoreHorizontal size={16} />
      </button>
    </div>
    
    {/* Two small photos (bottom) */}
    <div className="h-1/2 flex gap-3">
      <div className="relative w-1/2 h-full">
        <img 
          src={photos[1] || ''} 
          alt="Photo 2" 
          className="w-full h-full object-cover rounded-md" 
        />
        <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
          <MoreHorizontal size={16} />
        </button>
      </div>
      <div className="relative w-1/2 h-full">
        <img 
          src={photos[2] || ''} 
          alt="Photo 3" 
          className="w-full h-full object-cover rounded-md" 
        />
        <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
    
    {/* Text placement at bottom-right */}
    <div className="text-right mt-2">
      <p className="text-black text-sm font-medium">MEMORIES</p>
      <p className="text-black text-xs">2024.06.10</p>
    </div>
  </div>
);

// Grid Layout (4 Photos)
const GridLayout = ({ photos }: { photos: string[] }) => (
  <div className="flex-1 p-3">
    <div className="grid grid-cols-2 grid-rows-2 h-full gap-3">
      {photos.map((photo, index) => (
        <div key={index} className="relative">
          <img 
            src={photo} 
            alt={`Photo ${index + 1}`} 
            className="w-full h-full object-cover rounded-md" 
          />
          <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
            <MoreHorizontal size={16} />
          </button>
        </div>
      ))}
      
      {/* Text placement at bottom-right */}
      <div className="absolute bottom-3 right-3 text-right">
        <p className="text-black text-sm font-medium bg-white/80 px-2 py-1 rounded-md">MEMORIES</p>
        <p className="text-black text-xs bg-white/80 px-2 py-1 rounded-md mt-1">2024.06.10</p>
      </div>
    </div>
  </div>
);

// Simple Grid Layout (4 Photos)
const SimpleGridLayout = ({ photos }: { photos: string[] }) => (
  <div className="flex-1 p-3">
    <div className="grid grid-cols-2 grid-rows-2 h-full gap-2 relative">
      {photos.map((photo, index) => (
        <div key={index} className="relative">
          <img 
            src={photo} 
            alt={`Photo ${index + 1}`} 
            className="w-full h-full object-cover rounded-sm" 
          />
          <button className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-black bg-white/80 rounded-full">
            <MoreHorizontal size={14} />
          </button>
        </div>
      ))}
      
      {/* Text placement at center */}
      <div className="absolute bottom-4 left-0 right-0 mx-auto w-fit text-center">
        <p className="text-black text-sm font-medium bg-white/80 px-2 py-1 rounded-md">MEMORIES</p>
        <p className="text-black text-xs bg-white/80 px-2 py-1 rounded-md mt-1">2024.06.10</p>
      </div>
    </div>
  </div>
);

// Classic Grid Layout (4 Photos)
const ClassicGridLayout = ({ photos }: { photos: string[] }) => (
  <div className="flex-1 p-4 relative">
    <div className="grid grid-cols-2 grid-rows-2 h-full gap-4">
      {photos.map((photo, index) => (
        <div key={index} className="relative border-2 border-black p-1">
          <img 
            src={photo} 
            alt={`Photo ${index + 1}`} 
            className="w-full h-full object-cover" 
          />
          <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
            <MoreHorizontal size={16} />
          </button>
        </div>
      ))}
      
      {/* Text placement at bottom-right */}
      <div className="absolute bottom-4 right-4 text-right">
        <p className="text-black text-sm font-medium">MEMORIES</p>
        <p className="text-black text-xs">2024.06.10</p>
      </div>
    </div>
  </div>
);

// Vertical Duo Layout (2 Photos)
const VerticalDuoLayout = ({ photos }: { photos: string[] }) => (
  <div className="flex-1 p-3">
    <div className="h-full flex flex-col gap-3">
      {photos.map((photo, index) => (
        <div key={index} className="relative h-1/2">
          <img 
            src={photo} 
            alt={`Photo ${index + 1}`} 
            className="w-full h-full object-cover rounded-md" 
          />
          <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
            <MoreHorizontal size={16} />
          </button>
        </div>
      ))}
      
      {/* Text placement at bottom */}
      <div className="text-center mt-2">
        <p className="text-black text-sm font-medium">MEMORIES</p>
        <p className="text-black text-xs">2024.06.10</p>
      </div>
    </div>
  </div>
);

// Horizontal Duo Layout (2 Photos)
const HorizontalDuoLayout = ({ photos }: { photos: string[] }) => (
  <div className="flex-1 p-3 relative">
    <div className="h-full flex gap-3">
      {photos.map((photo, index) => (
        <div key={index} className="relative w-1/2 h-full">
          <img 
            src={photo} 
            alt={`Photo ${index + 1}`} 
            className="w-full h-full object-cover rounded-md" 
          />
          <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
            <MoreHorizontal size={16} />
          </button>
        </div>
      ))}
      
      {/* Text placement at bottom-right */}
      <div className="absolute bottom-3 right-3 text-right">
        <p className="text-black text-sm font-medium bg-white/80 px-2 py-1 rounded-md">MEMORIES</p>
        <p className="text-black text-xs bg-white/80 px-2 py-1 rounded-md mt-1">2024.06.10</p>
      </div>
    </div>
  </div>
);

// Creative Overlap Layout (2 Photos)
const CreativeOverlapLayout = ({ photos }: { photos: string[] }) => (
  <div className="flex-1 p-3 flex justify-center items-center relative">
    {/* First photo (rotated and in the back) */}
    <div className="absolute w-3/4 h-3/4 transform rotate-[-6deg] z-10">
      <img 
        src={photos[0] || ''} 
        alt="Photo 1" 
        className="w-full h-full object-cover rounded-md shadow-lg" 
      />
    </div>
    
    {/* Second photo (rotated the other way and in the front) */}
    <div className="absolute w-3/4 h-3/4 transform rotate-[4deg] z-20">
      <img 
        src={photos[1] || ''} 
        alt="Photo 2" 
        className="w-full h-full object-cover rounded-md shadow-lg" 
      />
      <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
        <MoreHorizontal size={16} />
      </button>
    </div>
    
    {/* Text placement at bottom-right */}
    <div className="absolute bottom-4 right-4 z-30 text-right">
      <p className="text-black text-sm font-medium bg-white/80 px-2 py-1 rounded-md">MEMORIES</p>
      <p className="text-black text-xs bg-white/80 px-2 py-1 rounded-md mt-1">2024.06.10</p>
    </div>
  </div>
);

// Full Frame Layout (1 Photo)
const FullFrameLayout = ({ photos }: { photos: string[] }) => (
  <div className="flex-1 p-3 relative">
    <div className="relative h-full w-full">
      <img 
        src={photos[0] || ''} 
        alt="Full Photo" 
        className="w-full h-full object-cover rounded-md" 
      />
      <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
        <MoreHorizontal size={16} />
      </button>
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <h3 className="text-white text-2xl font-bold drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">MEMORIES</h3>
        <p className="text-white text-sm drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">2024.06.10</p>
      </div>
    </div>
  </div>
);

export default PhotoLayout;
