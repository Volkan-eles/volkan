
import React from 'react';
import { BorderStyle, BorderWidth } from '@/components/digibooth/BorderStyleSelector';
import { Button } from '@/components/ui/button';

interface BorderOptionsProps {
  borderStyle: BorderStyle;
  setBorderStyle: (style: BorderStyle) => void;
  borderWidth: BorderWidth;
  setBorderWidth: (width: BorderWidth) => void;
}

const BorderOptions: React.FC<BorderOptionsProps> = ({
  borderStyle,
  setBorderStyle,
  borderWidth,
  setBorderWidth
}) => {
  // Border style options
  const borderStyles: {
    id: BorderStyle;
    name: string;
  }[] = [
    { id: 'solid', name: 'Solid' },
    { id: 'dashed', name: 'Dashed' },
    { id: 'dotted', name: 'Dotted' },
    { id: 'double', name: 'Double' },
    { id: 'groove', name: 'Groove' },
    { id: 'ridge', name: 'Ridge' }
  ];

  // Border width options - expanded
  const borderWidths: {
    id: BorderWidth;
    name: string;
  }[] = [
    { id: 'none', name: 'None' },
    { id: 'hairline', name: 'Hairline' },
    { id: 'thin', name: 'Thin' },
    { id: 'medium', name: 'Medium' },
    { id: 'thick', name: 'Thick' },
    { id: 'heavy', name: 'Heavy' },
    { id: 'ultra', name: 'Ultra' }
  ];

  return (
    <div>
      <h3 className="text-xs font-medium text-gray-600 mb-1">Border</h3>
      <div className="flex flex-wrap gap-1">
        {borderStyles.map(style => (
          <Button
            key={style.id}
            className={`px-2 py-0.5 text-[10px] h-5 rounded ${
              borderStyle === style.id 
                ? "bg-primary text-white" 
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            onClick={() => setBorderStyle(style.id)}
          >
            {style.name}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-1 mt-1">
        {borderWidths.map(width => (
          <Button
            key={width.id}
            className={`px-2 py-0.5 text-[10px] h-5 rounded ${
              borderWidth === width.id 
                ? "bg-primary text-white" 
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            onClick={() => setBorderWidth(width.id)}
          >
            {width.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default BorderOptions;
