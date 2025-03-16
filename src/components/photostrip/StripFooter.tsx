
import React, { useState } from 'react';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { Pencil } from 'lucide-react';

interface StripFooterProps {
  frameColor: FrameColorType;
  textColor: string;
}

const StripFooter: React.FC<StripFooterProps> = ({ frameColor, textColor }) => {
  // Format date for footer
  const formatDate = () => {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    return `${month}/${day}/${year} ${hours}:${minutes} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;
  };

  // State for editable text
  const [title, setTitle] = useState('K-pop Frame');
  const [editingTitle, setEditingTitle] = useState(false);
  const [selectedFont, setSelectedFont] = useState('font-sans');
  
  // Available fonts
  const fonts = [
    { name: 'Default', value: 'font-sans' },
    { name: 'Serif', value: 'font-serif' },
    { name: 'Mono', value: 'font-mono' },
    { name: 'Cursive', value: 'font-["Brush_Script_MT",cursive]' },
    { name: 'Fantasy', value: 'font-["Copperplate",fantasy]' },
  ];

  return (
    <div className={`text-center py-1 ${textColor}`}>
      {editingTitle ? (
        <div className="flex flex-col space-y-2 py-1">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-sm px-2 py-1 border rounded text-black"
            autoFocus
            onBlur={() => setEditingTitle(false)}
            onKeyDown={(e) => e.key === 'Enter' && setEditingTitle(false)}
          />
          <select 
            value={selectedFont}
            onChange={(e) => setSelectedFont(e.target.value)}
            className="text-sm px-2 py-1 border rounded text-black"
          >
            {fonts.map((font) => (
              <option key={font.value} value={font.value}>
                {font.name}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div 
          className={`text-sm font-medium ${selectedFont} flex justify-center items-center`}
          onClick={() => setEditingTitle(true)}
        >
          {title} • {formatDate()}
          <Pencil className="h-3 w-3 ml-1 cursor-pointer opacity-70" />
        </div>
      )}
      <div className="text-xs">© {new Date().getFullYear()} K-pop Frame</div>
    </div>
  );
};

export default StripFooter;
