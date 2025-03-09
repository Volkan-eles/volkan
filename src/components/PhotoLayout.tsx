
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
  ];

  // Use captured photos if available, otherwise use mock photos
  const displayPhotos = photos.length > 0 ? photos : mockPhotos;

  return (
    <div className="h-full w-full flex flex-col bg-white">
      {/* Elegant Strip Layout */}
      <div className="flex-1 flex flex-col p-5 gap-4">
        {/* Photo 1 */}
        <div className="relative h-1/4">
          <img 
            src={displayPhotos[0] || mockPhotos[0]} 
            alt="Photo 1" 
            className="w-full h-full object-cover rounded-md" 
          />
          <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
            <MoreHorizontal size={16} />
          </button>
        </div>
        
        {/* Photo 2 */}
        <div className="relative h-1/4">
          <img 
            src={displayPhotos[1] || mockPhotos[1]} 
            alt="Photo 2" 
            className="w-full h-full object-cover rounded-md" 
          />
          <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
            <MoreHorizontal size={16} />
          </button>
        </div>
        
        {/* Photo 3 */}
        <div className="relative h-1/4">
          <img 
            src={displayPhotos[2] || mockPhotos[2]} 
            alt="Photo 3" 
            className="w-full h-full object-cover rounded-md" 
          />
          <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full">
            <MoreHorizontal size={16} />
          </button>
        </div>
        
        {/* Text Area */}
        <div className="h-1/4 flex flex-col items-center justify-center">
          <h2 className="text-black text-2xl uppercase font-semibold">LIVE IN</h2>
          <h3 className="text-black text-3xl italic mt-1">THE moment</h3>
        </div>
      </div>
    </div>
  );
};

export default PhotoLayout;
