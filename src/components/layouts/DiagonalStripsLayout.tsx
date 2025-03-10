import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { LayoutProps } from './index';
import { TextElement } from '../TextEditor/TextEditor';

const DiagonalStripsLayout: React.FC<LayoutProps> = ({ 
  photos, 
  backgroundColor = 'white',
  texts = []
}) => {
  const isDarkBackground = backgroundColor.includes('800') || 
                         backgroundColor.includes('900') || 
                         backgroundColor === 'bg-black' || 
                         backgroundColor.includes('500');
  
  const textColorClass = isDarkBackground ? 'text-white' : 'text-black';
  const textBgClass = isDarkBackground ? 'bg-black/20' : 'bg-white/80';

  return (
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
      
      {/* Text elements */}
      <div className="text-center mt-2 flex flex-col gap-2">
        {texts.sort((a, b) => a.position - b.position).map((text: TextElement) => (
          <p 
            key={text.id}
            className={`${textColorClass} ${backgroundColor !== 'white' ? `${textBgClass} px-2 py-1 rounded-md inline-block` : ''}`}
            style={{ fontSize: `${text.fontSize}px` }}
          >
            {text.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DiagonalStripsLayout;
