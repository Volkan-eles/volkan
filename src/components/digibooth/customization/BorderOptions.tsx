
import React from 'react';
import { BorderStyle, BorderWidth } from '@/components/digibooth/BorderStyleSelector';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

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
  const borderStyles: { id: BorderStyle; name: string }[] = [
    { id: 'solid', name: 'Solid' },
    { id: 'dashed', name: 'Dashed' },
    { id: 'dotted', name: 'Dotted' },
    { id: 'double', name: 'Double' },
    { id: 'groove', name: 'Groove' },
    { id: 'ridge', name: 'Ridge' }
  ];

  // Border width options
  const borderWidths: { id: BorderWidth; name: string }[] = [
    { id: 'thin', name: 'Thin' },
    { id: 'medium', name: 'Medium' },
    { id: 'thick', name: 'Thick' }
  ];

  return (
    <div className="mb-4">
      <h3 className="text-md font-medium text-gray-600 mb-2">Border Style</h3>
      <div className="flex flex-wrap justify-center gap-1.5 mb-2">
        {borderStyles.map(style => (
          <Button
            key={style.id}
            className={`px-2.5 py-1 rounded-md text-xs transition-all ${
              borderStyle === style.id 
                ? "bg-primary text-white ring-1 ring-offset-1 ring-primary" 
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            onClick={() => setBorderStyle(style.id)}
          >
            {style.name}
          </Button>
        ))}
      </div>
      <Separator className="my-2" />
      <div className="flex flex-wrap justify-center gap-1.5">
        {borderWidths.map(width => (
          <Button
            key={width.id}
            className={`px-2.5 py-1 rounded-md text-xs transition-all ${
              borderWidth === width.id 
                ? "bg-primary text-white ring-1 ring-offset-1 ring-primary" 
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
