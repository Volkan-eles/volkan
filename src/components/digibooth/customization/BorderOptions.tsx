
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
    <div className="mb-6">
      <h3 className="text-lg font-medium text-gray-700 mb-3">Border Style</h3>
      <div className="flex flex-wrap justify-center gap-2 mb-3">
        {borderStyles.map(style => (
          <Button
            key={style.id}
            className={`px-3 py-1.5 rounded-md text-sm transition-all ${
              borderStyle === style.id 
                ? "bg-blue-500 text-white ring-2 ring-offset-1 ring-blue-500" 
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            onClick={() => setBorderStyle(style.id)}
          >
            {style.name}
          </Button>
        ))}
      </div>
      <Separator className="my-3" />
      <div className="flex flex-wrap justify-center gap-2">
        {borderWidths.map(width => (
          <Button
            key={width.id}
            className={`px-3 py-1.5 rounded-md text-sm transition-all ${
              borderWidth === width.id 
                ? "bg-blue-500 text-white ring-2 ring-offset-1 ring-blue-500" 
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
