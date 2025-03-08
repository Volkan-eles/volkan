
import React from 'react';
import { Button } from '@/components/ui/button';

interface FrameSelectorProps {
  selectedFrame: string;
  onSelectFrame: (frame: string) => void;
}

const FrameSelector: React.FC<FrameSelectorProps> = ({ selectedFrame, onSelectFrame }) => {
  const frameOptions = [
    { id: 'white', label: 'White', color: 'bg-booth-white text-black border border-gray-300' },
    { id: 'black', label: 'Black', color: 'bg-booth-black text-white' },
    { id: 'red', label: 'Red', color: 'bg-booth-red text-white' },
  ];

  return (
    <div className="flex justify-center gap-2 mb-4">
      {frameOptions.map((frame) => (
        <Button
          key={frame.id}
          variant={selectedFrame === frame.id ? "default" : "outline"}
          className={`${frame.color} transition-all duration-300 transform ${
            selectedFrame === frame.id ? 'scale-105 shadow-md' : 'hover:scale-105'
          }`}
          onClick={() => onSelectFrame(frame.id)}
        >
          {frame.label}
        </Button>
      ))}
    </div>
  );
};

export default FrameSelector;
