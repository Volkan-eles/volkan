import React, { useState, useEffect, useRef } from 'react';
import { MoreHorizontal, Edit2 } from 'lucide-react';
import { LayoutProps } from './index';
import { Input } from '@/components/ui/input';
import { optimizeImageRendering } from '@/utils/downloadLayout';

// Reusable EditableText component
const EditableText = ({
  value,
  onChange,
  className,
  backgroundColor
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const showBackground = backgroundColor !== 'transparent' && backgroundColor !== 'white';
  
  return isEditing ? <Input type="text" value={value} onChange={e => onChange(e.target.value)} onBlur={() => setIsEditing(false)} onKeyDown={e => e.key === 'Enter' && setIsEditing(false)} className={`${className} focus:outline-none px-2 py-1 bg-transparent ${showBackground ? 'bg-white/80 rounded-md' : ''}`} autoFocus data-html2canvas-ignore="true" /> : <div onClick={() => setIsEditing(true)} className={`${className} cursor-pointer ${showBackground ? 'bg-white/80 px-2 py-1 rounded-md inline-block' : ''}`} data-html2canvas-ignore="true">
      {value}
    </div>;
};

// Image component with quality optimizations
const OptimizedImage = ({ photo, index, className }) => {
  const imgRef = useRef(null);
  
  // Helper function to handle both string and object photo types
  const getSrc = (photo) => {
    if (typeof photo === 'string') {
      return photo;
    }
    return photo.src;
  };
  
  useEffect(() => {
    if (imgRef.current) {
      optimizeImageRendering(imgRef.current);
    }
  }, [photo]);
  
  return (
    <div className={`${className} relative`} style={{ aspectRatio: '1/1' }}>
      <img 
        ref={imgRef}
        src={getSrc(photo)} 
        alt={`Photo ${index + 1}`}
        className="w-full h-full object-cover rounded-md shadow-sm"
        crossOrigin="anonymous"
        loading="eager"
        decoding="sync"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
};

// Classic Strip Layout (4 Photos)
export const ClassicStripLayout: React.FC<LayoutProps> = ({
  photos,
  backgroundColor = 'transparent'
}) => {
  const [title, setTitle] = useState("MEMORIES");
  const [date, setDate] = useState("2024.06.10");
  
  const bgColorClass = backgroundColor !== 'transparent' && backgroundColor !== 'white' ? backgroundColor : '';
  
  return <div className={`flex-1 flex flex-col p-3 gap-4 ${bgColorClass}`}>
      {photos.map((photo, index) => (
        <div key={index} className="relative w-[90%] mx-auto" style={{ aspectRatio: '1/1' }}>
          <OptimizedImage 
            photo={photo}
            index={index}
            className="w-full h-full"
          />
        </div>
      ))}
      
      {/* Text placement at bottom */}
      <div className="text-center mt-3 mb-2">
        <EditableText value={title} onChange={setTitle} className="text-black text-sm font-medium" backgroundColor={backgroundColor} />
        <EditableText value={date} onChange={setDate} className="text-black text-xs mt-1" backgroundColor={backgroundColor} />
      </div>
    </div>;
};

// Vertical Strip Layout (4 Photos)
export const VerticalStripLayout: React.FC<LayoutProps> = ({
  photos,
  backgroundColor = 'transparent'
}) => {
  const [title, setTitle] = useState("MEMORIES");
  const [date, setDate] = useState("2024.06.10");
  
  const bgColorClass = backgroundColor !== 'transparent' && backgroundColor !== 'white' ? backgroundColor : '';
  
  return <div className={`flex-1 p-3 ${bgColorClass}`}>
      <div className="h-full flex flex-col gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative w-[90%] mx-auto" style={{ aspectRatio: '1/1' }}>
            <OptimizedImage 
              photo={photo}
              index={index}
              className="w-full h-full"
            />
          </div>
        ))}
        
        {/* Text placement at bottom */}
        <div className="text-center mt-3 mb-2">
          <EditableText value={title} onChange={setTitle} className="text-black text-sm font-medium" backgroundColor={backgroundColor} />
          <EditableText value={date} onChange={setDate} className="text-black text-xs mt-1" backgroundColor={backgroundColor} />
        </div>
      </div>
    </div>;
};

// Elegant Strip Layout (4 Photos)
export const ElegantStripLayout: React.FC<LayoutProps> = ({
  photos,
  backgroundColor = 'transparent'
}) => {
  const [title, setTitle] = useState("LIVE IN");
  const [subtitle, setSubtitle] = useState("THE moment");
  const [date, setDate] = useState("2024.06.10");
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };
  
  const bgColorClass = backgroundColor !== 'transparent' && backgroundColor !== 'white' ? backgroundColor : '';
  
  return <div className={`flex-1 flex flex-col p-5 gap-4 ${bgColorClass}`}>
      {/* Photo 1, 2, 3 */}
      {photos.slice(0, 3).map((photo, index) => (
        <div key={index} className="relative aspect-square w-[90%] mx-auto">
          <OptimizedImage 
            photo={photo}
            index={index}
            className="w-full h-full"
          />
        </div>
      ))}
      
      {/* Text Area */}
      <div className="h-1/5 flex flex-col items-center justify-center relative mt-2 mb-2">
        {isEditing ? <div className="flex flex-col gap-2 w-full" data-html2canvas-ignore="true">
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} className={`text-center text-black text-2xl uppercase font-semibold focus:outline-none bg-transparent ${backgroundColor !== 'transparent' && backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md' : ''}`} />
            <input type="text" value={subtitle} onChange={e => setSubtitle(e.target.value)} className={`text-center text-black text-3xl italic focus:outline-none bg-transparent ${backgroundColor !== 'transparent' && backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md' : ''}`} />
            <input type="text" value={date} onChange={e => setDate(e.target.value)} className={`text-center text-black text-xs focus:outline-none bg-transparent ${backgroundColor !== 'transparent' && backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md' : ''}`} />
          </div> : <>
            <h2 className={`text-black text-2xl uppercase font-semibold ${backgroundColor !== 'transparent' && backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md inline-block' : ''}`}>{title}</h2>
            <h3 className={`text-black text-3xl italic mt-1 ${backgroundColor !== 'transparent' && backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md inline-block' : ''}`}>{subtitle}</h3>
            <p className={`text-black text-xs mt-2 ${backgroundColor !== 'transparent' && backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md inline-block' : ''}`}>{date}</p>
          </>}
        <button onClick={toggleEditing} className="absolute right-0 top-0 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow-sm" data-html2canvas-ignore="true">
          <Edit2 size={14} />
        </button>
      </div>
    </div>;
};

// Large Vertical Layout (2 Photos)
export const LargeVerticalLayout: React.FC<LayoutProps> = ({
  photos,
  backgroundColor = 'transparent'
}) => {
  const [title, setTitle] = useState("MEMORIES");
  const [date, setDate] = useState("2024.06.10");
  
  const bgColorClass = backgroundColor !== 'transparent' && backgroundColor !== 'white' ? backgroundColor : '';
  
  return <div className={`flex-1 p-3 ${bgColorClass}`}>
      <div className="h-full flex flex-col gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative aspect-square w-[90%] mx-auto">
            <OptimizedImage 
              photo={photo}
              index={index}
              className="w-full h-full"
            />
            <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-black bg-white/80 rounded-full" data-html2canvas-ignore="true">
              <MoreHorizontal size={16} />
            </button>
          </div>
        ))}
        
        {/* Text placement at bottom */}
        <div className="text-center mt-3 mb-2">
          <EditableText value={title} onChange={setTitle} className="text-black text-sm font-medium" backgroundColor={backgroundColor} />
          <EditableText value={date} onChange={setDate} className="text-black text-xs mt-1" backgroundColor={backgroundColor} />
        </div>
      </div>
    </div>;
};
