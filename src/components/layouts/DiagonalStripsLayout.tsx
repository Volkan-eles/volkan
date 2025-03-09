
import React from 'react';
import { MoreHorizontal } from 'lucide-react';

interface LayoutProps {
  photos: string[];
  backgroundColor?: string;
}

const DiagonalStripsLayout: React.FC<LayoutProps> = ({ 
  photos, 
  backgroundColor = 'white' 
}) => (
  <div className={`flex-1 flex flex-col p-3 gap-3 ${backgroundColor !== 'white' ? backgroundColor : ''}`}>
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
      <p className={`text-black text-sm font-medium ${backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md inline-block' : ''}`}>MEMORIES</p>
      <p className={`text-black text-xs ${backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md inline-block mt-1' : ''}`}>2024.06.10</p>
    </div>
  </div>
);

export default DiagonalStripsLayout;
