
import React, { useState } from 'react';
import { MoreHorizontal, Edit2 } from 'lucide-react';
import { LayoutProps } from './index';
import { Input } from '@/components/ui/input';

// Reusable EditableText component
const EditableText = ({
  value,
  onChange,
  className,
  backgroundColor
}) => {
  const [isEditing, setIsEditing] = useState(false);
  return isEditing ? <Input type="text" value={value} onChange={e => onChange(e.target.value)} onBlur={() => setIsEditing(false)} onKeyDown={e => e.key === 'Enter' && setIsEditing(false)} className={`${className} focus:outline-none px-2 py-1 bg-transparent ${backgroundColor !== 'white' ? 'bg-white/80 rounded-md' : ''}`} autoFocus /> : <div onClick={() => setIsEditing(true)} className={`${className} cursor-pointer ${backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md inline-block' : ''}`}>
      {value}
    </div>;
};

// Classic Strip Layout (4 Photos)
export const ClassicStripLayout: React.FC<LayoutProps> = ({
  photos,
  backgroundColor = 'white'
}) => {
  const [title, setTitle] = useState("MEMORIES");
  const [date, setDate] = useState("2024.06.10");
  
  // Helper function to handle both string and object photo types
  const getSrc = (photo: string | { src: string; index: number }) => {
    if (typeof photo === 'string') {
      return photo;
    }
    return photo.src;
  };
  
  return <div className={`flex-1 flex flex-col p-3 gap-3 ${backgroundColor !== 'white' ? backgroundColor : ''}`}>
      {photos.map((photo, index) => (
        <div key={index} className="relative aspect-square w-full max-w-[80%] mx-auto">
          <img 
            src={getSrc(photo)} 
            alt={`Photo ${index + 1}`} 
            className="w-full h-full object-cover rounded-md" 
          />
        </div>
      ))}
      
      {/* Text placement at bottom */}
      <div className="text-center mt-2">
        <EditableText value={title} onChange={setTitle} className="text-black text-sm font-medium" backgroundColor={backgroundColor} />
        <EditableText value={date} onChange={setDate} className="text-black text-xs mt-1" backgroundColor={backgroundColor} />
      </div>
    </div>;
};

// Vertical Strip Layout (4 Photos)
export const VerticalStripLayout: React.FC<LayoutProps> = ({
  photos,
  backgroundColor = 'white'
}) => {
  const [title, setTitle] = useState("MEMORIES");
  const [date, setDate] = useState("2024.06.10");
  
  // Helper function to handle both string and object photo types
  const getSrc = (photo: string | { src: string; index: number }) => {
    if (typeof photo === 'string') {
      return photo;
    }
    return photo.src;
  };
  
  return <div className={`flex-1 p-3 ${backgroundColor !== 'white' ? backgroundColor : ''}`}>
      <div className="h-full flex flex-col gap-3">
        {photos.map((photo, index) => (
          <div key={index} className="relative aspect-square w-full max-w-[80%] mx-auto">
            <img 
              src={getSrc(photo)} 
              alt={`Photo ${index + 1}`} 
              className="w-full h-full object-cover rounded-md" 
            />
          </div>
        ))}
        
        {/* Text placement at bottom */}
        <div className="text-center mt-2">
          <EditableText value={title} onChange={setTitle} className="text-black text-sm font-medium" backgroundColor={backgroundColor} />
          <EditableText value={date} onChange={setDate} className="text-black text-xs mt-1" backgroundColor={backgroundColor} />
        </div>
      </div>
    </div>;
};

// Elegant Strip Layout (4 Photos)
export const ElegantStripLayout: React.FC<LayoutProps> = ({
  photos,
  backgroundColor = 'white'
}) => {
  const [title, setTitle] = useState("LIVE IN");
  const [subtitle, setSubtitle] = useState("THE moment");
  const [date, setDate] = useState("2024.06.10");
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };
  
  // Helper function to handle both string and object photo types
  const getSrc = (photo: string | { src: string; index: number }) => {
    if (typeof photo === 'string') {
      return photo;
    }
    return photo.src;
  };
  
  return <div className={`flex-1 flex flex-col p-5 gap-4 ${backgroundColor !== 'white' ? backgroundColor : ''}`}>
      {/* Photo 1, 2, 3 */}
      {photos.slice(0, 3).map((photo, index) => (
        <div key={index} className="relative aspect-square w-full max-w-[80%] mx-auto">
          <img 
            src={getSrc(photo)} 
            alt={`Photo ${index + 1}`} 
            className="w-full h-full object-cover rounded-md" 
          />
        </div>
      ))}
      
      {/* Text Area */}
      <div className="h-1/4 flex flex-col items-center justify-center relative">
        {isEditing ? <div className="flex flex-col gap-2 w-full">
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} className={`text-center text-black text-2xl uppercase font-semibold focus:outline-none bg-transparent ${backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md' : ''}`} />
            <input type="text" value={subtitle} onChange={e => setSubtitle(e.target.value)} className={`text-center text-black text-3xl italic focus:outline-none bg-transparent ${backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md' : ''}`} />
            <input type="text" value={date} onChange={e => setDate(e.target.value)} className={`text-center text-black text-xs focus:outline-none bg-transparent ${backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md' : ''}`} />
          </div> : <>
            <h2 className={`text-black text-2xl uppercase font-semibold ${backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md inline-block' : ''}`}>{title}</h2>
            <h3 className={`text-black text-3xl italic mt-1 ${backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md inline-block' : ''}`}>{subtitle}</h3>
            <p className={`text-black text-xs mt-2 ${backgroundColor !== 'white' ? 'bg-white/80 px-2 py-1 rounded-md inline-block' : ''}`}>{date}</p>
          </>}
        <button onClick={toggleEditing} className="absolute right-0 top-0 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow-sm">
          <Edit2 size={14} />
        </button>
      </div>
    </div>;
};

// Large Vertical Layout (2 Photos)
export const LargeVerticalLayout: React.FC<LayoutProps> = ({
  photos,
  backgroundColor = 'white'
}) => {
  const [title, setTitle] = useState("MEMORIES");
  const [date, setDate] = useState("2024.06.10");
  
  // Helper function to handle both string and object photo types
  const getSrc = (photo: string | { src: string; index: number }) => {
    if (typeof photo === 'string') {
      return photo;
    }
    return photo.src;
  };
  
  return <div className={`flex-1 p-3 ${backgroundColor !== 'white' ? backgroundColor : ''}`}>
      <div className="h-full flex flex-col gap-3">
        {photos.map((photo, index) => (
          <div key={index} className="relative aspect-square w-full max-w-[80%] mx-auto">
            <img 
              src={getSrc(photo)} 
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
          <EditableText value={title} onChange={setTitle} className="text-black text-sm font-medium" backgroundColor={backgroundColor} />
          <EditableText value={date} onChange={setDate} className="text-black text-xs mt-1" backgroundColor={backgroundColor} />
        </div>
      </div>
    </div>;
};
